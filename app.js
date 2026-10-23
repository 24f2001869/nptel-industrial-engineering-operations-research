/**
 * NPTEL Industrial Engineering & Operations Research (IEOR)
 * Interactive TCS Exam & Rapid Revision Application Engine
 * Course: NPTEL 112103774 / noc26-me193 | Prof. Uday Shanker Dixit (IIT Guwahati)
 */

(function () {
  'use strict';

  // State Management
  const state = {
    currentWeek: 12,
    currentYear: '2026', // '2026' or '2025'
    currentQuestionIndex: 0,
    mode: 'study', // 'study' (instant theory & formula) or 'exam' (TCS simulated)
    theme: localStorage.getItem('ieor_theme') || 'light',
    
    // Status tracking keyed by week and year:
    // state.userResponses[week][year][qIdx] = { selectedOption, status }
    userResponses: {},
    
    // Exam Timer
    timerSeconds: 3 * 60 * 60, // 3 hours
    timerInterval: null,
    
    // Calculator memory
    calcExpression: ''
  };

  // DOM Elements Cache
  const elements = {
    // Header & Toggles
    themeToggleBtn: document.getElementById('btn-theme-toggle'),
    themeIcon: document.getElementById('theme-icon'),
    btnModeStudy: document.getElementById('btn-mode-study'),
    btnModeExam: document.getElementById('btn-mode-exam'),
    btnOpenCalc: document.getElementById('btn-open-calc'),
    btnOpenFormulas: document.getElementById('btn-open-formulas'),
    
    // Navigation & Workspace
    weeksTabsList: document.getElementById('weeks-tabs-list'),
    btnYear2026: document.getElementById('btn-year-2026'),
    btnYear2025: document.getElementById('btn-year-2025'),
    yearSessionDesc: document.getElementById('year-session-desc'),
    
    qNumberDisplay: document.getElementById('q-number-display'),
    qConceptTag: document.getElementById('q-concept-tag'),
    questionCard: document.getElementById('question-card-container'),
    theoryCard: document.getElementById('theory-card'),
    btnHideTheory: document.getElementById('btn-hide-theory'),
    
    // Theory Card Sections
    theoryConceptText: document.getElementById('theory-concept-text'),
    theoryFormulaMath: document.getElementById('theory-formula-math'),
    theoryStepsText: document.getElementById('theory-steps-text'),
    theoryVariantText: document.getElementById('theory-variant-text'),
    theoryTrapText: document.getElementById('theory-trap-text'),
    
    // Action Controls
    btnPrev: document.getElementById('btn-prev-q'),
    btnNext: document.getElementById('btn-next-q'),
    btnClear: document.getElementById('btn-clear-q'),
    btnReview: document.getElementById('btn-review-q'),
    
    // TCS Palette & Sidebar
    timerDisplay: document.getElementById('timer-display'),
    paletteWeekIndicator: document.getElementById('palette-week-indicator'),
    paletteGrid: document.getElementById('palette-grid-container'),
    countAnswered: document.getElementById('count-answered'),
    countNotAnswered: document.getElementById('count-not-answered'),
    countReview: document.getElementById('count-review'),
    countNotVisited: document.getElementById('count-not-visited'),
    btnSubmitExam: document.getElementById('btn-submit-exam'),
    
    // Modals
    modalCalc: document.getElementById('modal-calc'),
    btnCloseCalc: document.getElementById('btn-close-calc'),
    calcScreen: document.getElementById('calc-screen'),
    
    modalFormulas: document.getElementById('modal-formulas'),
    btnCloseFormulas: document.getElementById('btn-close-formulas'),
    formulaModalContent: document.getElementById('formula-modal-content'),
    
    modalScorecard: document.getElementById('modal-scorecard'),
    btnCloseScorecard: document.getElementById('btn-close-scorecard'),
    scorePercentage: document.getElementById('score-percentage'),
    scoreStatusText: document.getElementById('score-status-text'),
    scoreCorrectCount: document.getElementById('score-correct-count'),
    scoreWrongCount: document.getElementById('score-wrong-count'),
    scoreUnattemptedCount: document.getElementById('score-unattempted-count'),
    btnReviewAnswers: document.getElementById('btn-review-answers')
  };

  /**
   * Initialize Application
   */
  function init() {
    applyTheme(state.theme);
    renderWeeksNav();
    loadWeekAndYear(state.currentWeek, state.currentYear);
    startTimer();
    attachEventListeners();
    setupCalculator();
  }

  /**
   * Apply Bright/Cool or Dark Theme
   */
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ieor_theme', theme);
    if (elements.themeIcon) {
      elements.themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  /**
   * Render Weeks Navigation in Backward Order (12 down to 1)
   */
  function renderWeeksNav() {
    elements.weeksTabsList.innerHTML = '';
    
    const weekNumbers = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    
    weekNumbers.forEach(num => {
      const weekData = IEOR_DATA.weeks.find(w => w.number === num);
      const isActive = num === state.currentWeek;
      const isAvailable = weekData && weekData.status === 'active';
      
      const tab = document.createElement('button');
      tab.className = `week-tab ${isActive ? 'active' : ''} ${!isAvailable ? 'disabled' : ''}`;
      tab.title = weekData ? `${weekData.title} (${weekData.status})` : `Week ${num}`;
      
      tab.innerHTML = `
        <span>Week ${num}</span>
        ${num === 12 ? '<span style="font-size:0.65rem; background:rgba(255,255,255,0.25); padding:1px 5px; border-radius:10px;">Active 🔥</span>' : '<span class="week-badge-upcoming">Soon</span>'}
      `;
      
      tab.addEventListener('click', () => {
        if (!isAvailable) {
          alert(`Week ${num} assignment module will be unlocked as you work backward! Start with Week 12.`);
          return;
        }
        loadWeekAndYear(num, state.currentYear);
      });
      
      elements.weeksTabsList.appendChild(tab);
    });
  }

  /**
   * Load Specific Week and Year Questions
   */
  function loadWeekAndYear(weekNum, year) {
    state.currentWeek = weekNum;
    state.currentYear = year;
    state.currentQuestionIndex = 0;

    // Update Year selector buttons UI
    if (elements.btnYear2026 && elements.btnYear2025) {
      elements.btnYear2026.classList.toggle('active', year === '2026');
      elements.btnYear2025.classList.toggle('active', year === '2025');
    }

    if (elements.yearSessionDesc) {
      elements.yearSessionDesc.textContent = `Week ${weekNum} • ${year} Proctored Assignment (20 Questions)`;
    }

    const weekData = IEOR_DATA.weeks.find(w => w.number === weekNum);
    if (!weekData) return;

    // Ensure state tracking for this week and year
    if (!state.userResponses[weekNum]) {
      state.userResponses[weekNum] = {};
    }
    if (!state.userResponses[weekNum][year]) {
      state.userResponses[weekNum][year] = {};
      const questions = getQuestionsList();
      questions.forEach((_, idx) => {
        state.userResponses[weekNum][year][idx] = {
          selectedOption: null,
          status: idx === 0 ? 'not-answered' : 'not-visited'
        };
      });
    }

    if (elements.paletteWeekIndicator) {
      elements.paletteWeekIndicator.textContent = `Week ${weekNum} (${year})`;
    }

    renderWeeksNav();
    renderQuestion();
    renderPalette();
  }

  /**
   * Get Current Week Object
   */
  function getCurrentWeek() {
    return IEOR_DATA.weeks.find(w => w.number === state.currentWeek);
  }

  /**
   * Get Current Questions List (for active week and year)
   */
  function getQuestionsList() {
    const week = getCurrentWeek();
    if (!week || !week.years) return [];
    return week.years[state.currentYear] || [];
  }

  /**
   * Get Current Question Object
   */
  function getCurrentQuestion() {
    const list = getQuestionsList();
    return list[state.currentQuestionIndex] || null;
  }

  /**
   * Get Response State for Current Question
   */
  function getCurrentResponse() {
    if (!state.userResponses[state.currentWeek] || !state.userResponses[state.currentWeek][state.currentYear]) {
      return null;
    }
    return state.userResponses[state.currentWeek][state.currentYear][state.currentQuestionIndex];
  }

  /**
   * Render Question Card and Options
   */
  function renderQuestion() {
    const q = getCurrentQuestion();
    const questions = getQuestionsList();
    if (!q) return;

    const totalQuestions = questions.length;
    const response = getCurrentResponse();

    // Update Meta Bar
    elements.qNumberDisplay.textContent = `Question ${state.currentQuestionIndex + 1} of ${totalQuestions} (${state.currentYear})`;
    elements.qConceptTag.textContent = q.conceptTag || 'Inventory Optimization';

    // Build Question Table HTML if question contains a demand matrix
    let tableHtml = '';
    if (q.id === 'W12-2026-Q5') {
      tableHtml = `
        <div class="q-table-wrap">
          <table class="q-table">
            <thead><tr><th>Month</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead>
            <tbody><tr><td><strong>Demand (units)</strong></td><td>100</td><td>110</td><td>80</td><td>60</td><td>90</td><td>70</td></tr></tbody>
          </table>
        </div>
      `;
    } else if (q.id === 'W12-2026-Q6') {
      tableHtml = `
        <div class="q-table-wrap">
          <table class="q-table">
            <thead><tr><th>Month</th><th>1</th><th>2</th><th>3</th><th>4</th></tr></thead>
            <tbody><tr><td><strong>Demand (units)</strong></td><td>120</td><td>140</td><td>80</td><td>70</td></tr></tbody>
          </table>
        </div>
      `;
    } else if (q.id === 'W12-2025-Q6') {
      tableHtml = `
        <div class="q-table-wrap">
          <table class="q-table">
            <thead><tr><th>Month</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead>
            <tbody><tr><td><strong>Demand (units)</strong></td><td>100</td><td>120</td><td>80</td><td>60</td><td>90</td><td>70</td></tr></tbody>
          </table>
        </div>
      `;
    } else if (q.id === 'W12-2025-Q7') {
      tableHtml = `
        <div class="q-table-wrap">
          <table class="q-table">
            <thead><tr><th>Month</th><th>1</th><th>2</th><th>3</th><th>4</th></tr></thead>
            <tbody><tr><td><strong>Demand (units)</strong></td><td>100</td><td>150</td><td>80</td><td>70</td></tr></tbody>
          </table>
        </div>
      `;
    }

    let optionsHtml = '<div class="options-list">';
    q.options.forEach((optText, optIdx) => {
      const isSelected = response && response.selectedOption === optIdx;
      const isCorrect = optIdx === q.correctAnswer;
      
      let extraClass = '';
      let badgeHtml = '';
      
      if (state.mode === 'study' && response && response.selectedOption !== null) {
        if (isSelected) {
          extraClass = isCorrect ? 'correct' : 'wrong';
          badgeHtml = isCorrect 
            ? '<span class="opt-badge badge-correct">✓ Accepted Answer</span>' 
            : '<span class="opt-badge badge-wrong">✗ Incorrect</span>';
        } else if (isCorrect) {
          extraClass = 'correct';
          badgeHtml = '<span class="opt-badge badge-correct">✓ Accepted Answer</span>';
        }
      } else if (isSelected) {
        extraClass = 'selected';
      }

      optionsHtml += `
        <div class="option-item ${extraClass}" data-option-idx="${optIdx}">
          <input type="radio" name="ieor_q_opt" class="opt-radio" ${isSelected ? 'checked' : ''}>
          <div class="opt-text">${optText}</div>
          ${badgeHtml}
        </div>
      `;
    });
    optionsHtml += '</div>';

    elements.questionCard.innerHTML = `
      <div class="question-text">${q.question}</div>
      ${tableHtml}
      ${optionsHtml}
    `;

    // Attach Option Click Events
    const optionElements = elements.questionCard.querySelectorAll('.option-item');
    optionElements.forEach(item => {
      item.addEventListener('click', () => {
        const selectedIdx = parseInt(item.getAttribute('data-option-idx'), 10);
        selectOption(selectedIdx);
      });
    });

    // Handle Theory Display
    if (state.mode === 'study' && response && response.selectedOption !== null) {
      showTheoryCard(q);
    } else {
      elements.theoryCard.style.display = 'none';
    }

    renderMath();
    updatePaletteCounts();
  }

  /**
   * Handle Option Selection
   */
  function selectOption(optIdx) {
    const q = getCurrentQuestion();
    if (!q) return;

    const response = getCurrentResponse();
    if (!response) return;

    response.selectedOption = optIdx;
    
    if (response.status === 'review' || response.status === 'answered-review') {
      response.status = 'answered-review';
    } else {
      response.status = 'answered';
    }

    renderQuestion();
    renderPalette();

    // In Study Mode, instantly show the full theory & shortcuts
    if (state.mode === 'study') {
      showTheoryCard(q);
    }
  }

  /**
   * Display Rapid Theory & Shortcuts Card (Fluff-Free / Direct)
   */
  function showTheoryCard(q) {
    elements.theoryCard.style.display = 'block';
    
    // Core Concept
    elements.theoryConceptText.innerHTML = q.theory || 'Direct conceptual evaluation.';
    
    // Direct Formula
    elements.theoryFormulaMath.innerHTML = q.formula ? `$$${q.formula}$$` : '$$\\text{Direct logical deduction}$$';
    
    // Step by Step
    elements.theoryStepsText.innerHTML = q.stepByStep || 'Direct logical substitution.';
    
    // Value Changed Shortcuts
    elements.theoryVariantText.innerHTML = q.variant 
      ? `<strong>⚡ Exam Shortcuts / Numerical Variations:</strong><br>${q.variant.replace(/\n/g, '<br>')}` 
      : 'Review the base formula for varying inputs.';
      
    // Common Exam Trap
    elements.theoryTrapText.innerHTML = q.trap 
      ? `<strong>⚠️ Critical Exam Trap:</strong> ${q.trap}` 
      : 'Be careful with units and standard deviation vs variance!';

    renderMath(elements.theoryCard);
    elements.theoryCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  /**
   * Render TCS Question Palette Buttons (1 to 20)
   */
  function renderPalette() {
    const questions = getQuestionsList();
    elements.paletteGrid.innerHTML = '';
    
    questions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'palette-btn';
      btn.textContent = idx + 1;
      btn.title = `Question ${idx + 1}: ${q.conceptTag || ''}`;
      
      const response = state.userResponses[state.currentWeek]?.[state.currentYear]?.[idx];
      if (response) {
        if (response.status === 'answered') btn.classList.add('answered');
        else if (response.status === 'not-answered') btn.classList.add('not-answered');
        else if (response.status === 'review') btn.classList.add('review');
        else if (response.status === 'answered-review') btn.classList.add('answered-review');
      }

      if (idx === state.currentQuestionIndex) {
        btn.classList.add('active');
      }

      btn.addEventListener('click', () => {
        navigateToQuestion(idx);
      });

      elements.paletteGrid.appendChild(btn);
    });

    updatePaletteCounts();
  }

  /**
   * Update Status Counts in Legend
   */
  function updatePaletteCounts() {
    const questions = getQuestionsList();
    let answered = 0;
    let notAnswered = 0;
    let review = 0;
    let notVisited = 0;

    questions.forEach((_, idx) => {
      const r = state.userResponses[state.currentWeek]?.[state.currentYear]?.[idx];
      if (!r || r.status === 'not-visited') notVisited++;
      else if (r.status === 'answered') answered++;
      else if (r.status === 'not-answered') notAnswered++;
      else if (r.status === 'review' || r.status === 'answered-review') review++;
    });

    elements.countAnswered.textContent = answered;
    elements.countNotAnswered.textContent = notAnswered;
    elements.countReview.textContent = review;
    elements.countNotVisited.textContent = notVisited;
  }

  /**
   * Navigate to Specific Question Index
   */
  function navigateToQuestion(targetIdx) {
    const currentResp = getCurrentResponse();
    if (currentResp && currentResp.status === 'not-visited') {
      currentResp.status = 'not-answered';
    }

    state.currentQuestionIndex = targetIdx;
    
    const targetResp = getCurrentResponse();
    if (targetResp && targetResp.status === 'not-visited') {
      targetResp.status = 'not-answered';
    }

    renderQuestion();
    renderPalette();
  }

  /**
   * Action Controls Handlers
   */
  function handleNext() {
    const questions = getQuestionsList();
    if (state.currentQuestionIndex < questions.length - 1) {
      navigateToQuestion(state.currentQuestionIndex + 1);
    }
  }

  function handlePrev() {
    if (state.currentQuestionIndex > 0) {
      navigateToQuestion(state.currentQuestionIndex - 1);
    }
  }

  function handleClear() {
    const r = getCurrentResponse();
    if (r) {
      r.selectedOption = null;
      r.status = 'not-answered';
      renderQuestion();
      renderPalette();
    }
  }

  function handleReview() {
    const r = getCurrentResponse();
    if (r) {
      if (r.selectedOption !== null) {
        r.status = 'answered-review';
      } else {
        r.status = 'review';
      }
      handleNext();
    }
  }

  /**
   * Submit Exam & Show Scorecard
   */
  function submitExam() {
    const questions = getQuestionsList();
    let correct = 0;
    let wrong = 0;
    let unattempted = 0;

    questions.forEach((q, idx) => {
      const r = state.userResponses[state.currentWeek]?.[state.currentYear]?.[idx];
      if (!r || r.selectedOption === null) {
        unattempted++;
      } else if (r.selectedOption === q.correctAnswer) {
        correct++;
      } else {
        wrong++;
      }
    });

    const total = questions.length;
    const pct = Math.round((correct / total) * 100);

    elements.scorePercentage.textContent = `${pct}%`;
    elements.scoreCorrectCount.textContent = correct;
    elements.scoreWrongCount.textContent = wrong;
    elements.scoreUnattemptedCount.textContent = unattempted;

    if (pct >= 75) {
      elements.scoreStatusText.textContent = `🌟 Elite Mastery on ${state.currentYear}! Ready for Exam Centre`;
      elements.scoreStatusText.style.color = 'var(--success)';
    } else if (pct >= 50) {
      elements.scoreStatusText.textContent = '👍 Good Passing Base. Revise Traps & Variations';
      elements.scoreStatusText.style.color = 'var(--primary)';
    } else {
      elements.scoreStatusText.textContent = '⚠️ Needs Quick Revision of Core Formulas';
      elements.scoreStatusText.style.color = 'var(--danger)';
    }

    elements.modalScorecard.classList.add('open');
  }

  /**
   * Render KaTeX Math across element or entire page
   */
  function renderMath(targetElement) {
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(targetElement || document.body, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true }
          ],
          throwOnError: false
        });
      } catch (e) {
        console.warn('KaTeX render error:', e);
      }
    }
  }

  /**
   * Real-Time Countdown Timer
   */
  function startTimer() {
    clearInterval(state.timerInterval);
    state.timerInterval = setInterval(() => {
      if (state.timerSeconds > 0) {
        state.timerSeconds--;
        const hours = Math.floor(state.timerSeconds / 3600);
        const minutes = Math.floor((state.timerSeconds % 3600) / 60);
        const seconds = state.timerSeconds % 60;
        
        elements.timerDisplay.textContent = 
          `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      } else {
        clearInterval(state.timerInterval);
        submitExam();
      }
    }, 1000);
  }

  /**
   * TCS Scientific Calculator Engine
   */
  function setupCalculator() {
    const calcButtons = elements.modalCalc.querySelectorAll('[data-calc]');
    calcButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.getAttribute('data-calc');
        handleCalcInput(val);
      });
    });
  }

  function handleCalcInput(val) {
    if (val === 'C') {
      state.calcExpression = '';
      elements.calcScreen.textContent = '0';
    } else if (val === 'DEL') {
      state.calcExpression = state.calcExpression.slice(0, -1);
      elements.calcScreen.textContent = state.calcExpression || '0';
    } else if (val === '=') {
      try {
        let sanitized = state.calcExpression
          .replace(/sin\(/g, 'Math.sin(')
          .replace(/cos\(/g, 'Math.cos(')
          .replace(/tan\(/g, 'Math.tan(')
          .replace(/sqrt\(/g, 'Math.sqrt(')
          .replace(/log\(/g, 'Math.log10(')
          .replace(/ln\(/g, 'Math.log(')
          .replace(/\^/g, '**')
          .replace(/pi/g, 'Math.PI')
          .replace(/e/g, 'Math.E');

        const result = Function(`'use strict'; return (${sanitized})`)();
        const rounded = Number.isInteger(result) ? result : parseFloat(result.toFixed(6));
        elements.calcScreen.textContent = rounded;
        state.calcExpression = String(rounded);
      } catch (err) {
        elements.calcScreen.textContent = 'Error';
        state.calcExpression = '';
      }
    } else if (['sin', 'cos', 'tan', 'sqrt', 'log', 'ln'].includes(val)) {
      state.calcExpression += `${val}(`;
      elements.calcScreen.textContent = state.calcExpression;
    } else {
      state.calcExpression += val;
      elements.calcScreen.textContent = state.calcExpression;
    }
  }

  /**
   * Show Formula Sheet & Traps Modal
   */
  function openFormulaModal() {
    const week = getCurrentWeek();
    if (!week || !week.studyMaterials) return;

    let formulasHtml = '<h3 style="margin-bottom:0.75rem; color:var(--primary);">📐 Core Exam Formulas (Week 12)</h3>';
    week.studyMaterials.formulaSheet.forEach(item => {
      formulasHtml += `
        <div class="formula-item">
          <div class="formula-name">${item.name} (${item.units})</div>
          <div class="formula-math">$$${item.formula}$$</div>
          <div class="formula-desc">${item.desc}</div>
        </div>
      `;
    });

    formulasHtml += '<h3 style="margin: 1.5rem 0 0.75rem 0; color:var(--warning);">⚠️ High-Frequency Exam Traps</h3>';
    week.studyMaterials.examTraps.forEach(trap => {
      formulasHtml += `
        <div class="trap-box" style="margin-bottom:0.75rem;">
          <strong>${trap.trap}:</strong><br>${trap.explanation}
        </div>
      `;
    });

    elements.formulaModalContent.innerHTML = formulasHtml;
    renderMath(elements.formulaModalContent);
    elements.modalFormulas.classList.add('open');
  }

  /**
   * Attach All Event Listeners
   */
  function attachEventListeners() {
    // Theme Toggle
    elements.themeToggleBtn.addEventListener('click', () => {
      applyTheme(state.theme === 'dark' ? 'light' : 'dark');
    });

    // Year Switcher Tabs
    if (elements.btnYear2026) {
      elements.btnYear2026.addEventListener('click', () => {
        loadWeekAndYear(state.currentWeek, '2026');
      });
    }
    if (elements.btnYear2025) {
      elements.btnYear2025.addEventListener('click', () => {
        loadWeekAndYear(state.currentWeek, '2025');
      });
    }

    // Practice Mode Switcher
    elements.btnModeStudy.addEventListener('click', () => {
      state.mode = 'study';
      elements.btnModeStudy.classList.add('active');
      elements.btnModeExam.classList.remove('active');
      renderQuestion();
    });

    elements.btnModeExam.addEventListener('click', () => {
      state.mode = 'exam';
      elements.btnModeExam.classList.add('active');
      elements.btnModeStudy.classList.remove('active');
      elements.theoryCard.style.display = 'none';
      renderQuestion();
    });

    // Theory Hide Button
    elements.btnHideTheory.addEventListener('click', () => {
      elements.theoryCard.style.display = 'none';
    });

    // Navigation Controls
    elements.btnNext.addEventListener('click', handleNext);
    elements.btnPrev.addEventListener('click', handlePrev);
    elements.btnClear.addEventListener('click', handleClear);
    elements.btnReview.addEventListener('click', handleReview);
    elements.btnSubmitExam.addEventListener('click', submitExam);

    // Calculator Modal
    elements.btnOpenCalc.addEventListener('click', () => elements.modalCalc.classList.add('open'));
    elements.btnCloseCalc.addEventListener('click', () => elements.modalCalc.classList.remove('open'));

    // Formulas Modal
    elements.btnOpenFormulas.addEventListener('click', openFormulaModal);
    elements.btnCloseFormulas.addEventListener('click', () => elements.modalFormulas.classList.remove('open'));

    // Scorecard Modal
    elements.btnCloseScorecard.addEventListener('click', () => elements.modalScorecard.classList.remove('open'));
    elements.btnReviewAnswers.addEventListener('click', () => {
      elements.modalScorecard.classList.remove('open');
      state.mode = 'study';
      elements.btnModeStudy.classList.add('active');
      elements.btnModeExam.classList.remove('active');
      navigateToQuestion(0);
    });

    // Close Modals on Backdrop Click
    [elements.modalCalc, elements.modalFormulas, elements.modalScorecard].forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('open');
      });
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if (elements.modalCalc.classList.contains('open')) return;
      if (e.key === 'ArrowRight') handleNext();
      else if (e.key === 'ArrowLeft') handlePrev();
      else if (['1', '2', '3', '4'].includes(e.key)) {
        const optIdx = parseInt(e.key, 10) - 1;
        selectOption(optIdx);
      }
    });
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
