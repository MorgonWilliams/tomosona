const app = {
    lang: 'en',
    currentView: 'home',
    lessonState: {
        currentLessonId: null,
        currentSlide: 0,
        totalSlides: 0,
        score: 0,
        maxScore: 0,
        source: 'course'
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
            navs[2].innerText = t.wordsNav;
        }
    },

    renderCurrentView: () => {
        if(app.currentView === 'home') app.renderHome();
        else if(app.currentView === 'course') app.renderPath();
        else if(app.currentView === 'dictionary') app.renderDictionary();
        else if(app.currentView === 'lesson') {
            app.renderLesson(app.lessonState.currentLessonId);
        }
        else if(app.currentView === 'test') app.renderTest(app.lessonState.currentLessonId);
    },

    router: (view, id = null) => {
        app.currentView = view;
        const root = document.getElementById('app-root');
        root.innerHTML = ''; // Clear content
        
        // Update nav state
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        const btnMap = {'home': 0, 'course': 1, 'dictionary': 2};
        if(btnMap[view] !== undefined) document.querySelectorAll('.nav-btn')[btnMap[view]].classList.add('active');

        if (view === 'home') app.renderHome();
        else if (view === 'course') app.renderPath();
        else if (view === 'lesson' && id) {
            // FIX: Use loose equality (==) to match String "1" with Number 1
            const l = curriculum.find(c => c.id === String(id));
            
            if (!l) {
                console.error("Lesson not found:", id);
                return;
            }

            // Dynamic slide count: Always has Vocab/Grammar (1). Has Story? (+1). Has Quiz? (+1).
            const slideCount = 1 + (l.story ? 1 : 0) + (l.quiz && l.quiz.length > 0 ? 1 : 0);
            
            app.lessonState = { 
                currentLessonId: id, 
                currentSlide: 0, 
                totalSlides: slideCount, 
                score: 0, 
                maxScore: l.quiz ? l.quiz.length : 0, 
                source: 'course' 
            };
            app.renderLesson(id);
        }
        else if (view === 'test' && id) {
            const l = curriculum.find(c => c.id === String(id));
            if (!l) return;
            app.lessonState = { currentLessonId: id, currentSlide: 0, totalSlides: 2, score: 0, maxScore: l.quiz.length, source: 'course' }; 
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
                    <button class="btn" onclick="app.router('course')">${t.start} <span style="font-size:1.2em">→</span></button>
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
            const sineValue = Math.sin(index * waveConfig.frequency); 
            const xOffset = sineValue * waveConfig.amplitude;
            
            const y = waveConfig.startY + (index * waveConfig.verticalGap);
            
            pathPoints.push({xOffset, y});

            const isTest = item.type === 'test';
            const icon = isTest ? '🏆' : '★';
            const displayId = isTest ? item.id : item.id;
            
            // FIX: Ensure ID is wrapped in quotes '${item.id}' so strict string IDs work
            const clickFn = isTest ? `app.router('test', '${item.id}')` : `app.router('lesson', '${item.id}')`;
            
            // Style variants
            let btnClass = 'path-icon-btn';
            
            if(index === 0) {
                btnClass += ' start-node';
            }
            if(isTest) btnClass += ' test-node';

            // Determine Card Side
            const cardSide = xOffset > 0 ? 'left' : 'right';

            nodesHtml += `
                <div class="path-node-container" style="top: ${y}px; left: calc(50% + ${xOffset}px);">
                    <div class="path-card ${cardSide}" role="button" tabindex="0" onclick="${clickFn}">
                        <h3>${isTest ? t.test : t.lesson} ${displayId}</h3>
                        <p>${item.title}</p>
                    </div>
                    <div class="${btnClass}" role="button" tabindex="0" onclick="${clickFn}">
                        ${icon}
                    </div>
                </div>
            `;
        });

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

    renderLesson: (id) => {
        const root = document.getElementById('app-root');
        
        // FIX: Use loose equality (==) to find the lesson safely
        const lesson = curriculum.find(l => l.id === String(id));
        
        const t = UI_TEXT[app.lang];
        const state = app.lessonState;

        if(!lesson) return; // Guard clause

        // --- 1. PREPARE CONTENT ---

        // A. Vocabulary Cards Generation
        const vocabList = lesson.vocab || [];
        let cardsHtml = '';
        if (vocabList.length > 0) {
            cardsHtml += `<div class="vocab-grid">`;
            vocabList.forEach(v => {
                cardsHtml += `
                    <div class="flashcard" onclick="this.classList.toggle('flipped')">
                        <div class="flashcard-inner">
                            <div class="flashcard-front">
                                <h3>${v.word}</h3>
                                <small style="color:var(--text-muted); font-weight:600;">${v.type}</small>
                            </div>
                            <div class="flashcard-back">
                                <p><b>${v.def}</b></p>
                                <p style="opacity:0.8; margin-top:5px; font-size:0.85rem;">"${v.ex}"</p>
                            </div>
                        </div>
                    </div>
                `;
            });
            cardsHtml += `</div><p style="text-align:center; color:var(--text-muted); font-size:0.9rem;">👇 ${t.tapToFlip}</p>`;
        } else {
            cardsHtml = `<p style="text-align:center; color:var(--text-muted); font-style:italic;">No new vocabulary in this lesson.</p>`;
        }

        // B. Quiz Content Generation
        const quizList = lesson.quiz || [];
        let quizHtml = '';
        if (quizList.length > 0) {
            quizHtml += `<div class="quiz-container">`;
            
            quizList.forEach((q, idx) => {
                // Header
                quizHtml += `<div class="question-card" id="q-card-${idx}" style="margin-bottom:2rem;">
                    <p style="font-weight:700; margin-bottom:1rem; font-size:1.1rem;">${idx+1}. ${q.q}</p>`;

                // Render based on Type
                if (q.type === 'builder') {
                    // --- BUILDER TYPE ---
                    quizHtml += `
                        <div class="builder-container" id="builder-${idx}">
                            <div class="builder-slot" id="slot-${idx}"></div>
                            <div class="word-bank" id="bank-${idx}">
                                ${q.words.map((word) => 
                                    `<button class="word-chip" onclick="app.handleBuilderClick(${idx}, this, '${word}')">${word}</button>`
                                ).join('')}
                            </div>
                            <div class="button-group" style="margin-top:10px; display:flex; gap:10px;">
                                <button class="btn btn-outline check-btn" onclick="app.checkBuilderAnswer(${idx}, '${q.correctSentence}')">Check Answer</button>
                                <button class="btn btn-text" onclick="app.resetBuilder(${idx})" style="font-size:0.9rem; padding: 10px;">↺ Reset</button>
                            </div>
                        </div>
                    `;
                } else {
                    // --- MC TYPE (Default) ---
                    let options = '';
                    if(q.options) {
                        q.options.forEach((opt, optIdx) => {
                            options += `<div class="option-btn" onclick="app.checkAnswer(this, ${optIdx === q.ans})">${opt}</div>`;
                        });
                    }
                    quizHtml += `<div class="options-grid" style="display:grid; gap:10px;">${options}</div>`;
                }
                
                quizHtml += `</div>`;
            });
            quizHtml += '</div>';
        }

        // --- 2. BUILD SLIDES DYNAMICALLY ---
        // We push HTML strings into an array so indices (0, 1, 2) always match logic
        let slidesArray = [];

        // SLIDE: Vocab & Grammar (Always exists)
        const grammarContent = lesson.grammar || '';
        slidesArray.push(`
            <div class="lesson-slide ${state.currentSlide === slidesArray.length ? 'active' : ''}" id="slide-${slidesArray.length}">
                <h2 style="text-align:center; color:var(--primary); margin-bottom:0.5rem;">${t.lesson} ${lesson.id}</h2>
                <h1 style="text-align:center; font-size:2rem; margin-bottom:2rem;">${lesson.title}</h1>
                <div class="vocab-section-card">
                    <h3 class="vocab-badge">${t.vocab}</h3>
                    ${cardsHtml}
                </div>
                ${grammarContent ? `
                <div style="margin-top:2rem;">
                    <h2 style="color:var(--primary); margin-bottom:1.5rem;">${t.grammar}</h2>
                    <div class="grammar-box">${grammarContent}</div>
                </div>` : ''}
            </div>
        `);

        // SLIDE: Story (Only if exists)
        if (lesson.story) {
            slidesArray.push(`
                <div class="lesson-slide ${state.currentSlide === slidesArray.length ? 'active' : ''}" id="slide-${slidesArray.length}">
                     <h2 style="color:var(--accent-dark); margin-bottom:1.5rem;">${t.story}</h2>
                     <div class="story-box">
                        ${lesson.story}
                     </div>
                </div>
            `);
        }

        // SLIDE: Quiz (Only if exists)
        if (quizList.length > 0) {
            slidesArray.push(`
                <div class="lesson-slide ${state.currentSlide === slidesArray.length ? 'active' : ''}" id="slide-${slidesArray.length}">
                     <h2 style="color:var(--success); margin-bottom:1.5rem;">${t.quiz}</h2>
                     ${quizHtml}
                </div>
            `);
        }

        // --- 3. RENDER CONTAINER ---
        const closeAction = "app.router('course')";
        
        root.innerHTML = `
            <div class="view-section active lesson-container">
                <div class="progress-header">
                    <button class="close-btn" onclick="${closeAction}">✕</button>
                    <div class="progress-track">
                        <div id="lesson-progress" class="progress-fill" style="width: 0%;"></div>
                    </div>
                </div>

                ${slidesArray.join('')}

                <div class="slide-footer">
                    <button class="btn btn-outline" id="prev-btn" onclick="app.changeSlide(-1)" disabled>←</button>
                    <span class="slide-status" id="slide-status">1 / ${state.totalSlides}</span>
                    <button class="btn" id="next-btn" onclick="app.changeSlide(1)">${t.next} →</button>
                </div>
            </div>
        `;

        // Initialize UI state (progress bar, button text)
        app.updateSlideUI();
    },

    renderTest: (id) => {
        const root = document.getElementById('app-root');
        // FIX: Loose equality for test finding
        const test = curriculum.find(l => l.id === String(id));
        const t = UI_TEXT[app.lang];
        const state = app.lessonState;

        // UPDATED QUIZ RENDERING FOR TESTS
        let quizHtml = `<div class="quiz-container">`;
        if (test.quiz && test.quiz.length > 0) {
            test.quiz.forEach((q, idx) => {
                quizHtml += `<div class="question-card" id="q-card-${idx}" style="margin-bottom:1.5rem;">
                    <p style="font-weight:700; margin-bottom:1rem; font-size:1.1rem;">${idx+1}. ${q.q}</p>`;

                if (q.type === 'builder') {
                     // Builder Type
                     quizHtml += `
                        <div class="builder-container" id="builder-${idx}">
                            <div class="builder-slot" id="slot-${idx}"></div>
                            <div class="word-bank" id="bank-${idx}">
                                ${q.words.map((word) => 
                                    `<button class="word-chip" onclick="app.handleBuilderClick(${idx}, this, '${word}')">${word}</button>`
                                ).join('')}
                            </div>
                            <div class="button-group" style="margin-top:10px; display:flex; gap:10px;">
                                <button class="btn btn-outline check-btn" onclick="app.checkBuilderAnswer(${idx}, '${q.correctSentence}')">Check Answer</button>
                                <button class="btn btn-text" onclick="app.resetBuilder(${idx})" style="font-size:0.9rem; padding: 10px;">↺ Reset</button>
                            </div>
                        </div>
                    `;
                } else {
                    // Standard MC
                    let options = '';
                    if(q.options){
                        q.options.forEach((opt, optIdx) => {
                            options += `<div class="option-btn" onclick="app.checkAnswer(this, ${optIdx === q.ans})">${opt}</div>`;
                        });
                    }
                    quizHtml += `<div class="options-grid" style="display:grid; gap:10px;">${options}</div>`;
                }
                quizHtml += `</div>`;
            });
        }
        quizHtml += '</div>';

        root.innerHTML = `
            <div class="view-section active lesson-container">
                <div class="progress-header">
                    <button class="close-btn" onclick="app.router('course')">✕</button>
                    <div class="progress-track">
                        <div id="lesson-progress" class="progress-fill" style="width: 0%;"></div>
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
            const currEl = document.getElementById(`slide-${state.currentSlide}`);
            if(currEl) currEl.classList.remove('active');
            
            // Update State
            state.currentSlide = newSlide;
            
            // Show new
            const nextEl = document.getElementById(`slide-${state.currentSlide}`);
            if(nextEl) nextEl.classList.add('active');
            
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
        
        let percent = 100;
        if(state.maxScore > 0) {
            percent = Math.round((state.score / state.maxScore) * 100);
        }
        
        let message = t.good;
        if(percent === 100) {
            message = t.perfect;
        }
        else if(percent >= 80) message = t.good;
        else if(percent < 50) message = t.tryAgain;

        const backAction = "app.router('course')";

        root.innerHTML = `
            <div class="view-section active lesson-container">
                <div class="results-card">
                    <h1 style="color:var(--primary); margin-bottom:2rem;">${t.score}</h1>
                    
                    <div class="score-circle">
                        <span class="score-val">${state.score}</span>
                        <span class="score-max">/ ${state.maxScore}</span>
                    </div>
                    
                    <h2 style="color:var(--text-muted); margin-bottom:2rem;">${message}</h2>
                    <p>${percent}% ${app.lang === 'en' ? 'Correct' : 'pona'}</p>

                    <button class="btn" onclick="${backAction}">${t.back}</button>
                </div>
            </div>
        `;
    },

    renderDictionary: () => {
        const root = document.getElementById('app-root');
        const t = UI_TEXT[app.lang];
        
        // 1. GATHER DATA
        let allVocab = [];
        curriculum.forEach(l => {
            if(l.vocab && l.vocab.length > 0) allVocab = [...allVocab, ...l.vocab];
        });
        
        // Sort alphabetically
        allVocab.sort((a,b) => a.word.localeCompare(b.word));

        // Deduplicate
        const uniqueVocab = Array.from(new Set(allVocab.map(a => a.word)))
            .map(word => allVocab.find(a => a.word === word));

        // 2. RENDER THE SHELL (Static parts)
        root.innerHTML = `
            <div class="view-section active">
                <div style="text-align:center; margin-bottom:2rem;">
                    <h1 style="margin-bottom:0.5rem;">${t.dictTitle} (nimi ale)</h1>
                    <p style="color:var(--text-muted);">${t.dictDesc}</p>
                </div>

            <div class="search-container">
                <span class="search-icon">🔍</span>
                <input 
                    type="text" 
                    id="dict-search" 
                    class="search-input" 
                    autocomplete="off" 
                    placeholder="${app.lang === 'en' ? 'Type a word (e.g., moku)...' : 'o alasa e nimi...'}">
            </div>

                <div id="dictionary-grid" class="vocab-grid"></div>
                
                <div id="no-results" style="display:none; text-align:center; padding:2rem; color:var(--text-muted);">
                    <div style="font-size:3rem; margin-bottom:1rem;">🤷‍♂️</div>
                    <p>No words found. (nimi ala)</p>
                </div>
            </div>
        `;

        // 3. DEFINE DYNAMIC RENDERER
        const gridEl = document.getElementById('dictionary-grid');
        const noResEl = document.getElementById('no-results');

        const renderGrid = (filter = "") => {
            const cleanFilter = filter.toLowerCase().trim();
            
            // Filter Logic: Check Word OR Definition OR Type
            const filtered = uniqueVocab.filter(v => 
                v.word.toLowerCase().includes(cleanFilter) || 
                v.def.toLowerCase().includes(cleanFilter) ||
                v.type.toLowerCase().includes(cleanFilter)
            );

            if(filtered.length === 0) {
                gridEl.style.display = 'none';
                noResEl.style.display = 'block';
                return;
            }

            gridEl.style.display = 'grid';
            noResEl.style.display = 'none';

            let listHtml = '';
            filtered.forEach(v => {
                listHtml += `
                    <div class="feature-card" style="text-align: center;">
                        <h3 style="color:var(--primary); font-size:1.5rem; margin-bottom:0.5rem;">${v.word}</h3>
                        <p style="color:var(--text-muted); font-size:0.9rem; font-weight:bold; margin-bottom:0.5rem;"><i>${v.type}</i></p>
                        <p>${v.def}</p>
                    </div>
                `;
            });
            gridEl.innerHTML = listHtml;
        };

        // 4. INITIAL RENDER & LISTENERS
        renderGrid(); // Show all initially

        const input = document.getElementById('dict-search');
        input.addEventListener('keyup', (e) => {
            renderGrid(e.target.value);
        });
        
        // Auto-focus the search for better UX
        input.focus();
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

    // --- NEW BUILDER LOGIC ---
    handleBuilderClick: (qIdx, btn, word) => {
        const slot = document.getElementById(`slot-${qIdx}`);
        const bank = document.getElementById(`bank-${qIdx}`);
        const parent = btn.parentElement;

        // If button is in the bank, move to slot
        if (parent === bank) {
            btn.classList.add('in-slot');
            slot.appendChild(btn); 
        } 
        // If button is in the slot, move back to bank
        else {
            btn.classList.remove('in-slot');
            bank.appendChild(btn); 
        }
        
        // Visual toggle for empty/filled state
        if(slot.children.length > 0) slot.classList.add('filled');
        else slot.classList.remove('filled');
    },

    checkBuilderAnswer: (qIdx, correctSentence) => {
        const slot = document.getElementById(`slot-${qIdx}`);
        const container = document.getElementById(`builder-${qIdx}`);
        const card = document.getElementById(`q-card-${qIdx}`);
        
        // Prevent re-answering
        if (card.classList.contains('answered')) return;
        
        // Construct sentence from chips in the slot
        const userWords = Array.from(slot.children).map(chip => chip.innerText);
        const userSentence = userWords.join(' ');
        
        card.classList.add('answered');
        
        const checkBtn = container.querySelector('.check-btn');

        if (userSentence === correctSentence) {
            slot.classList.add('correct');
            checkBtn.classList.add('btn-success');
            checkBtn.innerHTML = 'Correct! ✅';
            checkBtn.style.color = 'white';
            app.lessonState.score++;
        } else {
            slot.classList.add('incorrect');
            checkBtn.classList.add('incorrect'); 
            checkBtn.innerHTML = `Incorrect. Answer: "${correctSentence}" ❌`;
            // Disable chips
            Array.from(slot.children).forEach(c => c.disabled = true);
        }
    },

resetBuilder: (idx) => {
        const slot = document.getElementById(`slot-${idx}`);
        const bank = document.getElementById(`bank-${idx}`);
        const container = document.getElementById(`builder-${idx}`);
        const card = document.getElementById(`q-card-${idx}`);
        
        // Reset card state if it was wrong
        if (card.classList.contains('answered')) {
             card.classList.remove('answered');
             const checkBtn = container.querySelector('.check-btn');
             checkBtn.classList.remove('incorrect', 'btn-success');
             checkBtn.innerHTML = 'Check Answer';
        }

        // Move all children back to bank
        while(slot.firstChild) {
            let el = slot.firstChild;
            if(el.tagName === 'BUTTON') {
                el.classList.remove('in-slot');
                el.disabled = false;
                bank.appendChild(el);
            } else { 
                el.remove(); // Clean up non-button elements
            } // <--- THIS BRACE WAS MISSING
        } // <--- THIS BRACE WAS IMPLIED BUT FORMATTING WAS OFF
        
        slot.classList.remove('filled', 'correct', 'incorrect');
    }
};

window.onload = () => {
    app.router('home');
};

window.app = app;
