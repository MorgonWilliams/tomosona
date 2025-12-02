/**
 * APPLICATION LOGIC
 * File: js/app.js
 */

const app = {
    lang: 'en',
    currentView: 'home',
    lessonState: {
        currentLessonId: null,
        currentSlide: 0,
        totalSlides: 0,
        score: 0,
        maxScore: 0,
        source: 'path'
    },
    
    toggleLang: () => {
        app.lang = app.lang === 'en' ? 'tp' : 'en';
        app.renderCurrentView();
        app.updateNav();
    },

    updateNav: () => {
        const t = UI_TEXT[app.lang];
        const navs = document.querySelectorAll('.nav-btn span');
        if(navs.length >= 4) {
            navs[0].innerText = t.homeNav;
            navs[1].innerText = t.pathNav;
            navs[2].innerText = t.advancedNav || "Advanced";
            navs[3].innerText = t.wordsNav;
        }
    },

    renderCurrentView: () => {
        if(app.currentView === 'home') app.renderHome();
        else if(app.currentView === 'path') app.renderPath();
        else if(app.currentView === 'advanced') app.renderAdvanced();
        else if(app.currentView === 'dictionary') app.renderDictionary();
        else if(app.currentView === 'lesson') {
            const isAdv = app.lessonState.source === 'advanced';
            app.renderLesson(app.lessonState.currentLessonId, isAdv);
        }
        else if(app.currentView === 'test') app.renderTest(app.lessonState.currentLessonId);
    },

    router: (view, id = null) => {
        app.currentView = view;
        const root = document.getElementById('app-root');
        root.innerHTML = ''; // Clear content
        
        // Update nav state
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        const btnMap = {'home': 0, 'path': 1, 'advanced': 2, 'dictionary': 3};
        if(btnMap[view] !== undefined) document.querySelectorAll('.nav-btn')[btnMap[view]].classList.add('active');

        if (view === 'home') app.renderHome();
        else if (view === 'path') app.renderPath();
        else if (view === 'advanced') app.renderAdvanced();
        else if (view === 'lesson' && id) {
            const l = curriculum.find(c => c.id === id);
            app.lessonState = { currentLessonId: id, currentSlide: 0, totalSlides: 3, score: 0, maxScore: l.quiz.length, source: 'path' }; // Vocab+Grammar, Story, Quiz
            app.renderLesson(id, false);
        }
        else if (view === 'advancedLesson' && id) {
            const l = advancedCurriculum.find(c => c.id === id);
            app.lessonState = { currentLessonId: id, currentSlide: 0, totalSlides: 3, score: 0, maxScore: l.quiz.length, source: 'advanced' }; 
            app.renderLesson(id, true);
        }
        else if (view === 'test' && id) {
            const l = curriculum.find(c => c.id === id);
            app.lessonState = { currentLessonId: id, currentSlide: 0, totalSlides: 2, score: 0, maxScore: l.quiz.length, source: 'path' }; // Info, Quiz
            app.renderTest(id);
        }
        else if (view === 'dictionary') app.renderDictionary();
    },

    /* --- RENDERERS --- */
    renderHome: () => {
        const root = document.getElementById('app-root');
        const t = UI_TEXT[app.lang];
        
        // Generate Outline Grid
        let outlineHtml = `<div class="outline-grid">`;
        curriculum.filter(c => c.type !== 'test').forEach(c => {
            const icon = '📚';
            const label = `${t.lesson} ${c.id}: ${c.title}`;
            const itemClass = 'lesson-item';
            outlineHtml += `<div class="outline-item ${itemClass}"><span class="outline-icon">${icon}</span> ${label}</div>`;
        });
        outlineHtml += `</div>`;

        root.innerHTML = `
            <div class="view-section active">
                <div class="card hero" style="text-align:center; margin-bottom:3rem;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🏠✨</div>
                    <h1>${t.welcome}</h1>
                    <p>${t.intro}</p>
                    <button class="btn" onclick="app.router('path')">${t.start} <span style="font-size:1.2em">→</span></button>
                </div>

                <section class="features-grid">
                    <div class="feature-card">
                        <span class="feature-icon" style="color: var(--primary)">💡</span>
                        <h3 style="color: var(--primary)">${t.simpleTitle}</h3>
                        <p>${t.simpleDesc}</p>
                    </div>
                    <div class="feature-card">
                        <span class="feature-icon" style="color: var(--accent)">🧩</span>
                        <h3 style="color: var(--accent)">${t.modularTitle}</h3>
                        <p>${t.modularDesc}</p>
                    </div>
                    <div class="feature-card">
                        <span class="feature-icon" style="color: var(--success)">😊</span>
                        <h3 style="color: var(--success)">${t.positiveTitle}</h3>
                        <p>${t.positiveDesc}</p>
                    </div>
                </section>

                <div class="card">
                    <h3 style="border-bottom: 2px solid #f1f5f9; padding-bottom: 10px; margin-bottom: 1rem;">${t.outline}</h3>
                    ${outlineHtml}
                </div>
            </div>
        `;
    },

    renderAdvanced: () => {
        const root = document.getElementById('app-root');
        const t = UI_TEXT[app.lang];
        
        let listHtml = `<div class="outline-grid">`;
        advancedCurriculum.forEach(c => {
            listHtml += `
            <div class="outline-item advanced-card" style="cursor:pointer" onclick="app.router('advancedLesson', '${c.id}')">
                <div class="advanced-icon">🚀</div>
                <div>
                    <div style="font-size:0.85rem; text-transform:uppercase; color:var(--text-light);">${c.id}</div>
                    <div>${c.title}</div>
                </div>
            </div>`;
        });
        listHtml += `</div>`;

        root.innerHTML = `
            <div class="view-section active">
                <div style="text-align:center; margin-bottom:3rem;">
                    <h1 style="color:var(--advanced); margin-bottom:0.5rem;">${t.advancedTitle || 'Advanced Studies'}</h1>
                    <p style="color:var(--text-light);">${t.advancedDesc || 'Deep dives into complex topics.'}</p>
                </div>
                ${listHtml}
            </div>
        `;
    },

    renderPath: () => {
        const root = document.getElementById('app-root');
        const t = UI_TEXT[app.lang];
        
        // Configuration for the sine wave
        const waveConfig = {
            amplitude: 60,  // Horizontal sway
            frequency: 0.6, // How fast it waves
            verticalGap: 120, // Space between nodes
            startY: 60,
            centerX: 50 // Percent
        };

        let nodesHtml = '';
        const totalNodes = curriculum.length;
        const containerHeight = waveConfig.startY + (totalNodes * waveConfig.verticalGap) + 100;
        
        // SVG Path Generation
        let svgPath = '';
        const pathPoints = [];

        curriculum.forEach((item, index) => {
            // Calculate Position
            // Using Math.sin to get a value between -1 and 1
            const sineValue = Math.sin(index * waveConfig.frequency); 
            const xOffset = sineValue * waveConfig.amplitude;
            
            // Center is 50%, so we add xOffset px
            // y is relative to start
            const xPercent = 50; 
            const y = waveConfig.startY + (index * waveConfig.verticalGap);
            
            pathPoints.push({xOffset, y});

            const isTest = item.type === 'test';
            const icon = isTest ? '🏆' : '★';
            const displayId = isTest ? item.id : item.id;
            const clickFn = isTest ? `app.router('test', '${item.id}')` : `app.router('lesson', ${item.id})`;
            
            // Style variants
            let btnClass = 'path-icon-btn';
            let startBubble = '';
            
            if(index === 0) {
                btnClass += ' start-node';
                startBubble = `<div class="start-bubble">${t.startNode}</div>`;
            }
            if(isTest) btnClass += ' test-node';

            // Determine Card Side
            const cardSide = xOffset > 0 ? 'left' : 'right';

            nodesHtml += `
                <div class="path-node-container" style="top: ${y}px; left: calc(50% + ${xOffset}px);">
                    <div class="path-card ${cardSide}" onclick="${clickFn}">
                        <h3>${isTest ? t.test : t.lesson} ${displayId}</h3>
                        <p>${item.title}</p>
                    </div>
                    <div class="${btnClass}" onclick="${clickFn}">
                        ${icon}
                        ${startBubble}
                    </div>
                </div>
            `;
        });

        // Build SVG Curve (assuming fixed width container of 600px for SVG coordinate calc)
        // Center X = 300px
        const svgCenter = 300;
        if (pathPoints.length > 0) {
            svgPath = `M ${svgCenter + pathPoints[0].xOffset} ${pathPoints[0].y}`;
            for (let i = 0; i < pathPoints.length - 1; i++) {
                const p1 = pathPoints[i];
                const p2 = pathPoints[i+1];
                
                // Control points for smooth vertical bezier
                const cp1x = svgCenter + p1.xOffset;
                const cp1y = p1.y + (waveConfig.verticalGap / 2);
                const cp2x = svgCenter + p2.xOffset;
                const cp2y = p2.y - (waveConfig.verticalGap / 2);
                const endX = svgCenter + p2.xOffset;
                const endY = p2.y;
                
                svgPath += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;
            }
        }

        root.innerHTML = `
            <div class="view-section active">
                <h1 class="center-text" style="text-align:center; margin-bottom:1rem;">${t.start}</h1>
                <div class="path-wrapper" style="height: ${containerHeight}px">
                    <svg class="path-svg" viewBox="0 0 600 ${containerHeight}" preserveAspectRatio="xMidYMin meet">
                        <path d="${svgPath}" />
                    </svg>
                    ${nodesHtml}
                </div>
            </div>
        `;
    },

    renderLesson: (id, isAdvanced) => {
        const root = document.getElementById('app-root');
        const lesson = isAdvanced 
            ? advancedCurriculum.find(l => l.id === id) 
            : curriculum.find(l => l.id === id);
        const t = UI_TEXT[app.lang];
        const state = app.lessonState;

        if(!lesson) return;

        // 1. Vocabulary & Grammar Slide Combined
        let cardsHtml = `<div class="vocab-grid">`;
        lesson.vocab.forEach(v => {
            cardsHtml += `
                <div class="flashcard" onclick="this.classList.toggle('flipped')">
                    <div class="flashcard-inner">
                        <div class="flashcard-front">
                            <h3>${v.word}</h3>
                            <small style="color:var(--text-light); font-weight:600;">${v.type}</small>
                        </div>
                        <div class="flashcard-back">
                            <p><b>${v.def}</b></p>
                            <p style="opacity:0.8; margin-top:5px; font-size:0.85rem;">"${v.ex}"</p>
                        </div>
                    </div>
                </div>
            `;
        });
        cardsHtml += `</div><p style="text-align:center; color:var(--text-light); font-size:0.9rem;">👇 ${t.tapToFlip}</p>`;

        // 2. Quiz Slide Logic
        let quizHtml = `<div class="quiz-container">`;
        lesson.quiz.forEach((q, idx) => {
            let options = '';
            q.options.forEach((opt, optIdx) => {
                options += `<div class="option-btn" onclick="app.checkAnswer(this, ${optIdx === q.ans})">${opt}</div>`;
            });
            quizHtml += `
                <div class="question-card" style="margin-bottom:1.5rem;">
                    <p style="font-weight:700; margin-bottom:1rem; font-size:1.1rem;">${idx+1}. ${q.q}</p>
                    <div class="options-grid" style="display:grid; gap:10px;">${options}</div>
                </div>
            `;
        });
        quizHtml += '</div>';

        const closeAction = isAdvanced ? "app.router('advanced')" : "app.router('path')";

        // Render Container
        root.innerHTML = `
            <div class="view-section active lesson-container">
                <div class="progress-header">
                    <button class="close-btn" onclick="${closeAction}">✕</button>
                    <div class="progress-track">
                        <div id="lesson-progress" class="progress-fill" style="width: 0%;"></div>
                    </div>
                </div>

                <div class="lesson-slide ${state.currentSlide === 0 ? 'active' : ''}" id="slide-0">
                    <h2 style="text-align:center; color:var(--primary); margin-bottom:0.5rem;">${t.lesson} ${lesson.id}</h2>
                    <h1 style="text-align:center; font-size:2rem; margin-bottom:2rem;">${lesson.title}</h1>
                    <div class="vocab-section-card">
                        <h3 class="vocab-badge">${t.vocab}</h3>
                        ${cardsHtml}
                    </div>
                    <div style="margin-top:2rem;">
                        <h2 style="color:var(--primary); margin-bottom:1.5rem;">${t.grammar}</h2>
                        <div class="grammar-box">${lesson.grammar}</div>
                    </div>
                </div>

                <div class="lesson-slide ${state.currentSlide === 1 ? 'active' : ''}" id="slide-1">
                     <h2 style="color:var(--accent-dark); margin-bottom:1.5rem;">${t.story}</h2>
                     <div class="story-box">
                        ${lesson.story}
                     </div>
                </div>

                <div class="lesson-slide ${state.currentSlide === 2 ? 'active' : ''}" id="slide-2">
                     <h2 style="color:var(--success); margin-bottom:1.5rem;">${t.quiz}</h2>
                     ${quizHtml}
                </div>

                <div class="slide-footer">
                    <button class="btn btn-outline" id="prev-btn" onclick="app.changeSlide(-1)" disabled>←</button>
                    <span class="slide-status" id="slide-status">1 / 3</span>
                    <button class="btn" id="next-btn" onclick="app.changeSlide(1)">${t.next} →</button>
                </div>
            </div>
        `;
        app.updateSlideUI();
    },

    renderTest: (id) => {
        const root = document.getElementById('app-root');
        const test = curriculum.find(l => l.id === id);
        const t = UI_TEXT[app.lang];
        const state = app.lessonState;

        let quizHtml = `<div class="quiz-container">`;
        test.quiz.forEach((q, idx) => {
            let options = '';
            q.options.forEach((opt, optIdx) => {
                options += `<div class="option-btn" onclick="app.checkAnswer(this, ${optIdx === q.ans})">${opt}</div>`;
            });
            quizHtml += `
                <div class="question-card" style="margin-bottom:1.5rem;">
                    <p style="font-weight:700; margin-bottom:1rem; font-size:1.1rem;">${idx+1}. ${q.q}</p>
                    <div class="options-grid" style="display:grid; gap:10px;">${options}</div>
                </div>
            `;
        });
        quizHtml += '</div>';

        root.innerHTML = `
            <div class="view-section active lesson-container">
                <div class="progress-header">
                    <button class="close-btn" onclick="app.router('path')">✕</button>
                    <div class="progress-track">
                        <div id="lesson-progress" class="progress-fill" style="width: 50%;"></div>
                    </div>
                </div>

                <div class="lesson-slide ${state.currentSlide === 0 ? 'active' : ''}" id="slide-0">
                    <div style="text-align:center; margin-top:2rem;">
                        <div style="font-size:4rem; margin-bottom:1rem;">🏆</div>
                        <h1 style="margin-bottom:1rem;">${test.title}</h1>
                        <p style="font-size:1.2rem; margin-bottom:2rem;">${test.desc}</p>
                        <div class="grammar-box" style="text-align:left;">${test.grammar}</div>
                    </div>
                </div>

                <div class="lesson-slide ${state.currentSlide === 1 ? 'active' : ''}" id="slide-1">
                     <h2 style="color:var(--accent-dark); margin-bottom:1.5rem;">${t.quiz}</h2>
                     ${quizHtml}
                </div>

                <div class="slide-footer">
                    <button class="btn btn-outline" id="prev-btn" onclick="app.changeSlide(-1)" disabled>←</button>
                    <span class="slide-status" id="slide-status">1 / 2</span>
                    <button class="btn" id="next-btn" onclick="app.changeSlide(1)">${t.next} →</button>
                </div>
            </div>
        `;
        app.updateSlideUI();
    },

    /* --- SLIDE NAVIGATION LOGIC --- */
    changeSlide: (dir) => {
        const state = app.lessonState;
        const newSlide = state.currentSlide + dir;

        if (newSlide >= 0 && newSlide < state.totalSlides) {
            // Hide current
            document.getElementById(`slide-${state.currentSlide}`).classList.remove('active');
            
            // Update State
            state.currentSlide = newSlide;
            
            // Show new
            document.getElementById(`slide-${state.currentSlide}`).classList.add('active');
            app.updateSlideUI();
        } else if (newSlide >= state.totalSlides) {
            // Lesson Complete - Show Results
            app.renderResults();
        }
    },

    updateSlideUI: () => {
        const state = app.lessonState;
        const t = UI_TEXT[app.lang];
        
        // Update Progress Bar
        const pct = ((state.currentSlide + 1) / state.totalSlides) * 100;
        document.getElementById('lesson-progress').style.width = `${pct}%`;

        // Update Status Text
        document.getElementById('slide-status').innerText = `${state.currentSlide + 1} / ${state.totalSlides}`;

        // Button States
        document.getElementById('prev-btn').disabled = state.currentSlide === 0;
        
        const nextBtn = document.getElementById('next-btn');
        if (state.currentSlide === state.totalSlides - 1) {
            nextBtn.innerText = `🎉 ${t.finish}`;
            nextBtn.classList.add('btn-success');
        } else {
            nextBtn.innerText = `${t.next} →`;
            nextBtn.classList.remove('btn-success');
        }
    },

    renderResults: () => {
        const root = document.getElementById('app-root');
        const t = UI_TEXT[app.lang];
        const state = app.lessonState;
        const percent = Math.round((state.score / state.maxScore) * 100);
        
        let message = t.good;
        if(percent === 100) {
            message = t.perfect;
            app.triggerConfetti();
        }
        else if(percent >= 80) message = t.good;
        else if(percent < 50) message = t.tryAgain;

        const backAction = state.source === 'advanced' ? "app.router('advanced')" : "app.router('path')";

        root.innerHTML = `
            <div class="view-section active lesson-container">
                <div class="results-card">
                    <h1 style="color:var(--primary); margin-bottom:2rem;">${t.score}</h1>
                    
                    <div class="score-circle">
                        <span class="score-val">${state.score}</span>
                        <span class="score-max">/ ${state.maxScore}</span>
                    </div>
                    
                    <h2 style="color:var(--text-light); margin-bottom:2rem;">${message}</h2>
                    <p>${percent}% ${app.lang === 'en' ? 'Correct' : 'pona'}</p>

                    <button class="btn" onclick="${backAction}">${t.back}</button>
                </div>
            </div>
        `;
    },

    renderDictionary: () => {
        const root = document.getElementById('app-root');
        const t = UI_TEXT[app.lang];
        let allVocab = [];
        curriculum.forEach(l => {
            if(l.vocab && l.vocab.length > 0) allVocab = [...allVocab, ...l.vocab];
        });
        
        allVocab.sort((a,b) => a.word.localeCompare(b.word));

        const uniqueVocab = Array.from(new Set(allVocab.map(a => a.word)))
            .map(word => {
                return allVocab.find(a => a.word === word);
            });

        let listHtml = '<div class="vocab-grid">';
        uniqueVocab.forEach(v => {
            listHtml += `
                <div class="feature-card" style="text-align: center;">
                    <h3 style="color:var(--primary); font-size:1.5rem; margin-bottom:0.5rem;">${v.word}</h3>
                    <p style="color:var(--text-light); font-size:0.9rem; font-weight:bold; margin-bottom:0.5rem;"><i>${v.type}</i></p>
                    <p>${v.def}</p>
                </div>
            `;
        });
        listHtml += '</div>';

        root.innerHTML = `
            <div class="view-section active">
                <div style="text-align:center; margin-bottom:3rem;">
                    <h1 style="margin-bottom:0.5rem;">${t.dictTitle} (nimi ale)</h1>
                    <p style="color:var(--text-light);">${t.dictDesc}</p>
                </div>
                ${listHtml}
            </div>
        `;
    },

    checkAnswer: (btn, isCorrect) => {
        const parent = btn.parentElement;
        if(parent.classList.contains('answered')) return;
        parent.classList.add('answered');

        if(isCorrect) {
            btn.classList.add('correct');
            btn.innerHTML += ' <span style="float:right">✅</span>';
            app.lessonState.score++;
        } else {
            btn.classList.add('incorrect');
            btn.innerHTML += ' <span style="float:right">❌</span>';
        }
    },

    triggerConfetti: () => {
        const colors = ['#f97316', '#0f766e', '#65a30d', '#facc15', '#ec4899'];
        for(let i=0; i<100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = confetti.style.width;
            document.body.appendChild(confetti);

            // Remove after animation
            setTimeout(() => confetti.remove(), 4000);
        }
    }
};

window.onload = () => {
    app.router('home');
};