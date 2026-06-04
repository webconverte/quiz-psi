// Engine compartilhada do quiz
(function () {
  const cfg = window.PSICO_CONFIG || {};
  const theme = window.QUIZ_THEME;
  const data = (window.QUIZ_DATA || {})[theme];
  const scale = window.QUIZ_SCALE || [];

  if (!data) {
    document.body.innerHTML = '<main><div class="panel"><h2>Tema não encontrado</h2><p><a href="/">Voltar ao início</a></p></div></main>';
    return;
  }

  // GA4 dinâmico (opcional)
  if (cfg.ANALYTICS_ID && /^G-/.test(cfg.ANALYTICS_ID)) {
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + cfg.ANALYTICS_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', cfg.ANALYTICS_ID);
  } else {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  }

  function track(event, params) {
    window.gtag('event', event, params || {});
    window.dataLayer.push(Object.assign({ event: event }, params || {}));
  }

  // Estado
  const state = {
    step: -1, // -1 = intro, 0..n-1 perguntas, n = resultados
    answers: new Array(data.questions.length).fill(null),
    inProgress: false
  };

  const root = document.getElementById('quiz-root');

  // Proteção de saída
  function beforeUnload(e) {
    if (state.inProgress && state.step >= 0 && state.step < data.questions.length) {
      e.preventDefault();
      e.returnValue = '';
      return '';
    }
  }
  window.addEventListener('beforeunload', beforeUnload);

  // Intercepta logo / links externos
  document.addEventListener('click', function (e) {
    const a = e.target.closest('a, button[data-nav]');
    if (!a) return;
    if (state.inProgress && state.step >= 0 && state.step < data.questions.length) {
      const href = a.getAttribute('href') || a.dataset.nav;
      if (href && !a.dataset.allowExit) {
        if (!confirm('Os dados atuais serão perdidos. Deseja continuar?')) {
          e.preventDefault();
        }
      }
    }
  });

  function render() {
    if (state.step === -1) renderIntro();
    else if (state.step < data.questions.length) renderQuestion();
    else renderResults();
  }

  function renderIntro() {
    state.inProgress = false;
    root.innerHTML = `
      <div class="panel">
        <span class="eyebrow" style="display:inline-block;font-size:0.78rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--lavender-deep);background:rgba(185,167,217,0.15);padding:0.35rem 0.8rem;border-radius:100px;margin-bottom:1rem;">${data.icon} Autopercepção</span>
        <h1>${data.title}</h1>
        <p style="margin-top:1rem;font-size:1.05rem;">${data.intro}</p>
        <p style="font-size:0.9rem;color:var(--muted);">Leva menos de 2 minutos. Suas respostas ficam apenas no seu navegador até você decidir enviá-las.</p>
        <div style="margin-top:1.5rem;display:flex;gap:0.75rem;flex-wrap:wrap;">
          <button class="btn btn-primary" id="start-btn">Começar</button>
          <a href="/" class="btn btn-ghost" data-allow-exit="1">Escolher outro tema</a>
        </div>
      </div>
    `;
    document.getElementById('start-btn').addEventListener('click', function () {
      state.inProgress = true;
      state.step = 0;
      track('view_quiz_start', { quiz_theme: theme });
      render();
    });
  }

  function renderQuestion() {
    const i = state.step;
    const total = data.questions.length;
    const pct = Math.round(((i) / total) * 100);
    root.innerHTML = `
      <div class="panel question" aria-live="polite">
        <div class="progress">
          <span>Pergunta ${i + 1} de ${total}</span>
          <div class="progress-bar"><span style="width:${pct}%"></span></div>
        </div>
        <h2>${data.questions[i]}</h2>
        <div class="options" role="radiogroup">
          ${scale.map((opt, idx) => `
            <button class="option ${state.answers[i] === opt.value ? 'selected' : ''}" data-value="${opt.value}" role="radio" aria-checked="${state.answers[i] === opt.value}">${opt.label}</button>
          `).join('')}
        </div>
        <div class="q-nav">
          <button class="btn btn-ghost" id="back-btn" ${i === 0 ? 'style="visibility:hidden"' : ''}>← Voltar</button>
          <button class="btn btn-secondary" id="next-btn" disabled>${i === total - 1 ? 'Ver resultado' : 'Próxima'} →</button>
        </div>
      </div>
    `;

    const nextBtn = document.getElementById('next-btn');
    if (state.answers[i] !== null) nextBtn.disabled = false;

    root.querySelectorAll('.option').forEach(function (el) {
      el.addEventListener('click', function () {
        const v = parseInt(el.dataset.value, 10);
        state.answers[i] = v;
        root.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
        el.classList.add('selected');
        nextBtn.disabled = false;
        // auto avança após pequena pausa
        setTimeout(function () {
          state.step++;
          render();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 220);
      });
    });

    document.getElementById('back-btn').addEventListener('click', function () {
      if (i > 0) { state.step--; render(); }
    });
    nextBtn.addEventListener('click', function () {
      if (state.answers[i] === null) return;
      state.step++;
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function levelFor(score) {
    if (score <= 6) return { key: 'low', label: 'Atenção baixa', desc: 'Seus sintomas aparecem com pouca frequência. Continue cuidando do seu bem-estar e observando como você se sente.' };
    if (score <= 13) return { key: 'mid', label: 'Atenção moderada', desc: 'Há sinais que merecem atenção. Conversar com uma profissional pode ajudar a entender melhor o que está acontecendo.' };
    return { key: 'high', label: 'Atenção elevada', desc: 'Os sinais relatados são frequentes e podem estar impactando sua qualidade de vida. É recomendável buscar uma avaliação profissional.' };
  }

  function renderResults() {
    state.inProgress = false;
    const score = state.answers.reduce((a, b) => a + (b || 0), 0);
    const lvl = levelFor(score);
    track('quiz_complete', { quiz_theme: theme, score: score, level: lvl.key });

    const summary = data.questions.map((q, i) => {
      const opt = scale[state.answers[i]];
      return `<div class="summary-item"><div class="q">${i + 1}. ${q}</div><div class="a">${opt ? opt.label : '-'}</div></div>`;
    }).join('');

    root.innerHTML = `
      <div class="panel">
        <div class="score-card ${lvl.key}">
          <div class="level">${lvl.label}</div>
          <div class="score-num">Pontuação: ${score} de 20</div>
          <p style="margin:0.75rem 0 0;color:var(--ink-soft);">${lvl.desc}</p>
        </div>

        <h3 style="margin-top:1.5rem;">Suas respostas</h3>
        <div class="summary">${summary}</div>

        <div class="ethics">
          Este questionário é uma ferramenta educativa de autopercepção e não substitui uma consulta clínica. Ele não realiza diagnóstico psicológico automatizado. Para uma compreensão profunda do seu quadro, é indispensável uma avaliação individual com um profissional qualificado.
        </div>

        <h3>Falar com ${cfg.PSICO_NAME || 'a psicóloga'}</h3>
        <p style="font-size:0.95rem;">Envie suas respostas para agendar uma triagem inicial.</p>
        <div style="margin-top:1.5rem; text-align:center;">
          <button class="btn btn-whatsapp" id="send-wa">Falar no WhatsApp</button>
        </div>
        <div style="margin-top:1.25rem;text-align:center;">
          <a href="/" class="btn btn-ghost" data-allow-exit="1">← Voltar ao início</a>
        </div>
      </div>
    `;

    function buildList() {
      return data.questions.map((q, i) => {
        const opt = scale[state.answers[i]];
        return `${i + 1}) ${q} — ${opt ? opt.label : '-'}`;
      }).join('\n');
    }

    document.getElementById('send-wa').addEventListener('click', function () {
      track('conversion_whatsapp', { quiz_theme: theme, score: score, level: lvl.key });
      const text = `Olá, realizei o quiz de ${theme} e gostaria de uma avaliação.\n\nNível: ${lvl.label} (${score}/20)\n\nRespostas:\n${buildList()}`;
      const url = `https://wa.me/${(cfg.PSICO_WHATSAPP || '').replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
      setTimeout(() => { window.location.href = '/quiz/obrigado/?tema=' + encodeURIComponent(theme); }, 400);
    });

  }

  render();
})();
