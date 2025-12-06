/**
 * ============================================================================
 * TOMO APP ENGINE
 * Refactored for modularity, readability, and scale.
 * ============================================================================
 */

const app = {
    // ========================================================================
    // 1. STATE & CONFIGURATION
    // ========================================================================
    state: {
        lang: 'en',
        currentView: 'home',
        
        // Active Lesson/Quiz State (formerly lessonState)
        session: {
            id: null,
            currentSlide: 0,
            totalSlides: 0,
            currentQuizIndex: 0,
            score: 0,
            maxScore: 0,
            source: 'course', // 'course' | 'reading'
            quizDrafts: {}    // Stores temporary user selections
        }
    },

    config: {
        wave: { amplitude: 60, frequency: 0.6, verticalGap: 120, startY: 60 },
        routes: { 'home': 0, 'course': 1, 'media': 2, 'dictionary': 3 }
    },

    // ========================================================================
    // 2. STORAGE MANAGER (PERSISTENCE)
    // ========================================================================
    storage: {
        getKey: () => 'tomo-progress',
        
        get() {
            const saved = localStorage.getItem(this.getKey());
            return saved ? JSON.parse(saved) : { completed: [], scores: {} };
        },

        save(lessonId, score) {
            const data = this.get();
            if (!data.completed.includes(String(lessonId))) {
                data.completed.push(String(lessonId));
            }
            // Update high score
            const currentHigh = data.scores[lessonId] || 0;
            if (score > currentHigh) data.scores[lessonId] = score;
            
            localStorage.setItem(this.getKey(), JSON.stringify(data));
        },

        reset() {
            if (confirm("⚠️ This will wipe all progress and scores. Are you sure?")) {
                localStorage.removeItem(this.getKey());
                location.reload();
            }
        },

        unlockAll() {
            if (!confirm("Olukin! (Watch out!)\n\nUnlock every lesson?")) return;
            const data = this.get();
            const allIds = curriculum.map(c => String(c.id));
            data.completed = [...new Set([...data.completed, ...allIds])];
            localStorage.setItem(this.getKey(), JSON.stringify(data));
            app.core.router('course');
        }
    },

    // ========================================================================
    // 3. CORE & ROUTING
    // ========================================================================
    core: {
        init() {
            app.core.router('home');
        },

        router(view, id = null) {
            app.state.currentView = view;
            const root = document.getElementById('app-root');
            root.innerHTML = '';

            // Update Navigation UI
            app.ui.updateNavState(view);

            // Route Logic
            switch (view) {
                case 'home':        app.views.renderHome(root); break;
                case 'course':      app.views.renderPath(root); break;
                case 'media':       app.views.renderMediaList(root); break;
                case 'dictionary':  app.views.renderDictionary(root); break;
                
                case 'reader':      
                    if(id) app.views.renderReadingDetail(root, id); 
                    break;

                case 'readingQuiz':
                    if(id) app.controllers.initReadingQuiz(id);
                    break;

                case 'lesson':      
                    if(id) app.controllers.initLesson(id); 
                    break;

                case 'test':        
                    if(id) app.controllers.initTest(id); 
                    break;
            }
        },

        toggleLang() {
            app.state.lang = app.state.lang === 'en' ? 'tp' : 'en';
            app.core.router(app.state.currentView, app.state.session.id);
            app.ui.updateNavText();
        }
    },

    // ========================================================================
    // 4. CONTROLLERS (LOGIC GLUE)
    // ========================================================================
    controllers: {
        initLesson(id) {
            const l = curriculum.find(c => c.id === String(id));
            if (!l) return;

            // Logic Check: Safe access to quiz length
            const slideCount = 1 + (l.story ? 1 : 0) + (l.quiz?.length > 0 ? 1 : 0);
            
            app.state.session = {
                id: id,
                currentSlide: 0,
                currentQuizIndex: 0,
                totalSlides: slideCount,
                score: 0,
                maxScore: l.quiz ? l.quiz.length : 0,
                source: 'course',
                quizDrafts: {}
            };
            app.views.renderLesson(document.getElementById('app-root'), id);
        },

        initTest(id) {
            const l = curriculum.find(c => c.id === String(id));
            if (!l) return;

            app.state.session = {
                id: id,
                currentSlide: 0,
                totalSlides: 2,
                currentQuizIndex: 0,
                score: 0,
                maxScore: l.quiz.length,
                source: 'course',
                quizDrafts: {}
            };
            app.views.renderTest(document.getElementById('app-root'), id);
        },

        initReadingQuiz(id) {
            const story = mediaLibrary.find(r => r.id === id);
            // Only reset state if we are entering fresh or switching stories
            if (app.state.session.id !== id || app.state.session.source !== 'reading') {
                app.state.session = {
                    id: id,
                    currentSlide: 1, 
                    currentQuizIndex: 0,
                    totalSlides: 2,
                    score: 0,
                    maxScore: story.quiz ? story.quiz.length : 0,
                    source: 'reading',
                    quizDrafts: {}
                };
            }
            app.views.renderReadingQuiz(document.getElementById('app-root'), id);
        }
    },

    // ========================================================================
    // 5. VIEWS (HTML GENERATION)
    // ========================================================================
    views: {
        renderHome(root) {
            const t = UI_TEXT[app.state.lang];
            
            const outlineHtml = curriculum.filter(c => c.type !== 'test').map(c => `
                <div class="outline-item lesson-item">
                    <span class="outline-icon">📚</span> 
                    ${t.lesson} ${c.id}: ${c.title}
                </div>
            `).join('');

            root.innerHTML = `
                <div class="view-section active">
                    <div class="card hero">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">🏠✨</div>
                        <h1>${t.welcome}</h1>
                        <p>${t.intro}</p>
                        <button class="btn" onclick="app.core.router('course')">${t.start} <span style="font-size:1.2em">→</span></button>
                    </div>
                    ${app.components.features(t)}
                    <div class="card">
                        <h3 class="card-header" style="border-bottom: 2px solid #f1f5f9; padding-bottom: 10px; margin-bottom: 1rem;">${t.outline}</h3>
                        <div class="outline-grid">${outlineHtml}</div>
                    </div>
                </div>
            `;
        },

        renderPath(root) {
            const t = UI_TEXT[app.state.lang];
            const progress = app.storage.get();
            const { html, height, path } = app.utils.generateMap(curriculum, progress);

            root.innerHTML = `
                <div class="view-section active">
                    <div style="text-align:center; margin-bottom:1rem;">
                        <h1 class="center-text">${t.start}</h1>
                        <div style="display: flex; gap: 10px; justify-content: center; margin-bottom: 20px;">
                            <button class="btn btn-outline" style="font-size: 0.85rem; padding: 6px 14px; border-width: 2px;" onclick="app.storage.unlockAll()">🔓 Unlock All</button>
                            <button class="btn btn-outline" style="font-size: 0.85rem; padding: 6px 14px; border-width: 2px; border-color: var(--error); color: var(--error);" onclick="app.storage.reset()">🗑️ Reset</button>
                        </div>
                    </div>
                    <div class="path-wrapper" style="height: ${height}px">
                        <svg class="path-svg" viewBox="0 0 600 ${height}" preserveAspectRatio="xMidYMin meet">
                            <path d="${path}" />
                        </svg>
                        ${html}
                    </div>
                </div>
            `;
        },

        renderMediaList(root) {
            const listHtml = mediaLibrary.map(r => app.components.mediaCard(r)).join('');
            root.innerHTML = `
                <div class="view-section active">
                    <div style="text-align:center; margin-bottom:2rem;">
                        <h1>Media Library</h1>
                        <p>Read stories and listen to audio.</p>
                    </div>
                    <div class="vocab-grid">${listHtml}</div>
                </div>
            `;
        },

        renderReadingDetail(root, id) {
            const t = UI_TEXT[app.state.lang];
            const item = mediaLibrary.find(r => r.id === id);
            if (!item) return;

            root.innerHTML = `
                <div class="view-section active lesson-container">
                    <button class="btn btn-outline" onclick="app.core.router('media')" style="margin-bottom:1rem;">← ${t.back}</button>
                    <div class="card" style="border-top: 8px solid ${item.type === 'audio' ? 'var(--advanced)' : 'var(--primary)'};">
                        <h2 style="text-align:center; margin-bottom:0.5rem;">${item.tpTitle}</h2>
                        <p style="text-align:center; font-size:0.9rem; color:var(--text-muted); margin-bottom:2rem;">${item.title}</p>
                        
                        ${item.type === 'audio' ? app.components.audioPlayer(item.src, t) : ''}
                        
                        <h4 style="color:var(--text-muted); margin-bottom:1rem;">${item.type === 'audio' ? 'Transcript' : 'Story Text'}</h4>
                        <div class="story-content" style="font-size:1.2rem; line-height:1.8;">
                            ${item.text.split('\n').map(p => `<p>${p.trim()}</p>`).join('')}
                        </div>
                        
                        <hr style="margin: 2rem 0; opacity:0.2;">
                        
                        <div style="display:flex; gap:10px; flex-wrap:wrap;">
                            <button id="toggle-btn" class="btn btn-outline" onclick="app.ui.toggleTranslation()" style="flex:1;">👁️ ${t.reveal}</button>
                            ${item.quiz ? `<button class="btn" onclick="app.core.router('readingQuiz', '${id}')" style="flex:1;">🧠 Quiz</button>` : ''}
                        </div>
                        
                        <div id="trans-box" class="hidden" style="margin-top:1.5rem; background:#f8fafc; padding:1.5rem; border-radius:12px; border:2px dashed #cbd5e1;">
                            <h4 style="color:var(--text-muted); margin-bottom:1rem;">Translation</h4>
                            <p style="white-space: pre-line;">${item.translation}</p>
                        </div>
                    </div>
                </div>
            `;
        },

        renderDictionary(root) {
            const t = UI_TEXT[app.state.lang];
            root.innerHTML = `
                <div class="view-section active">
                    <div style="text-align:center; margin-bottom:2rem;">
                        <h1 style="margin-bottom:0.5rem;">${t.dictTitle} (nimi ale)</h1>
                        <p style="color:var(--text-muted);">${t.dictDesc}</p>
                    </div>
                    <div class="search-container">
                        <span class="search-icon">🔍</span>
                        <input type="text" id="dict-search" class="search-input" autocomplete="off" 
                               placeholder="${app.state.lang === 'en' ? 'Type a word (e.g., moku)...' : 'o alasa e nimi...'}"
                               onkeyup="app.ui.filterDictionary(this.value)">
                    </div>
                    <div id="dictionary-grid" class="vocab-grid"></div>
                    <div id="no-results" style="display:none; text-align:center; padding:2rem; color:var(--text-muted);">
                        <div style="font-size:3rem; margin-bottom:1rem;">🤷‍♂️</div>
                        <p>No words found.</p>
                    </div>
                </div>
            `;
            // Initial Render
            app.ui.filterDictionary('');
        },

        renderLesson(root, id) {
            const lesson = curriculum.find(l => l.id === String(id));
            const t = UI_TEXT[app.state.lang];
            const s = app.state.session;

            // Slide 1: Content
            const slide1 = `
                <div class="lesson-slide ${s.currentSlide === 0 ? 'active' : ''}" id="slide-0">
                    <h2 style="text-align:center; color:var(--primary); margin-bottom:0.5rem;">${t.lesson} ${lesson.id}</h2>
                    <h1 style="text-align:center; font-size:2rem; margin-bottom:2rem;">${lesson.title}</h1>
                    <div class="vocab-section-card">
                        <h3 class="vocab-badge">${t.vocab}</h3>
                        <div class="vocab-grid">
                            ${(lesson.vocab || []).map(v => app.components.flashcard(v)).join('') || '<p style="text-align:center; color:var(--text-muted);">No new vocabulary.</p>'}
                        </div>
                        <p style="text-align:center; color:var(--text-muted); font-size:0.9rem;">👇 ${t.tapToFlip}</p>
                    </div>
                    ${lesson.grammar ? `<div style="margin-top:2rem;"><h2 style="color:var(--primary); margin-bottom:1.5rem;">${t.grammar}</h2><div class="grammar-box">${lesson.grammar}</div></div>` : ''}
                </div>
            `;

            // Slide 2: Story
            let slide2 = '';
            if (lesson.story) {
                slide2 = `
                    <div class="lesson-slide ${s.currentSlide === 1 ? 'active' : ''}" id="slide-1">
                        <h2 style="color:var(--accent-dark); margin-bottom:1.5rem;">${t.story}</h2>
                        <div class="story-box">${lesson.story}</div>
                    </div>
                `;
            }

            // Slide 3: Quiz
            let slide3 = '';
            if (lesson.quiz?.length) {
                const slideIndex = 1 + (lesson.story ? 1 : 0);
                slide3 = `
                    <div class="lesson-slide ${s.currentSlide === slideIndex ? 'active' : ''}" id="slide-${slideIndex}">
                        <h2 style="color:var(--success); margin-bottom:1.5rem;">${t.quiz}</h2>
                        ${app.components.quizContainer(lesson.quiz, s.currentQuizIndex)}
                    </div>
                `;
            }

            root.innerHTML = app.components.lessonWrapper(
                [slide1, slide2, slide3].join(''), 
                `app.core.router('course')`
            );
            app.ui.updateSlideControls();
        },

        renderTest(root, id) {
            const test = curriculum.find(l => l.id === String(id));
            const t = UI_TEXT[app.state.lang];
            const s = app.state.session;

            const slide1 = `
                <div class="lesson-slide ${s.currentSlide === 0 ? 'active' : ''}" id="slide-0">
                    <div style="text-align:center; margin-top:2rem;">
                        <div style="font-size:4rem; margin-bottom:1rem;">🏆</div>
                        <h1 style="margin-bottom:1rem;">${test.title}</h1>
                        <p style="font-size:1.2rem; margin-bottom:2rem;">${test.desc}</p>
                        <div class="grammar-box" style="text-align:left;">${test.grammar}</div>
                    </div>
                </div>
            `;

            const slide2 = `
                <div class="lesson-slide ${s.currentSlide === 1 ? 'active' : ''}" id="slide-1">
                     <h2 style="color:var(--accent-dark); margin-bottom:1.5rem;">${t.quiz}</h2>
                     ${app.components.quizContainer(test.quiz, s.currentQuizIndex)}
                </div>
            `;

            root.innerHTML = app.components.lessonWrapper(
                slide1 + slide2, 
                `app.core.router('course')`
            );
            app.ui.updateSlideControls();
        },

        renderReadingQuiz(root, id) {
            const story = mediaLibrary.find(r => r.id === id);
            const s = app.state.session;
            const quizList = story.quiz || [];

            if (s.currentQuizIndex >= quizList.length) {
                app.views.renderResults(root);
                return;
            }

            const content = `
                <div class="lesson-slide active">
                     <h2 style="color:var(--advanced); margin-bottom:1.5rem;">${story.tpTitle}</h2>
                     ${app.components.quizContainer(quizList, s.currentQuizIndex, true)}
                </div>
            `;

            root.innerHTML = app.components.lessonWrapper(
                content, 
                `app.core.router('media', '${id}')`, // Goes back to media list
                true // isReadingMode
            );
            
            // Manual Progress Bar update for reading mode
            const pct = ((s.currentQuizIndex) / s.maxScore) * 100;
            document.getElementById('lesson-progress').style.width = `${pct}%`;
        },

        renderResults(root) {
            const t = UI_TEXT[app.state.lang];
            const s = app.state.session;
            
            // Logic for score message
            const percent = Math.round((s.score / s.maxScore) * 100);
            let msg = percent === 100 ? t.perfect : (percent >= 80 ? t.good : t.tryAgain);
            if (s.source === 'reading') msg = percent >= 80 ? "pona mute!" : "o kama sona sin.";

            // Save Progress (Course only)
            if (s.source === 'course') app.storage.save(s.id, s.score);

            const isReading = s.source === 'reading';
            const buttons = isReading 
                ? `<button class="btn btn-outline" onclick="app.handlers.retryReading('${s.id}')">Retry</button>
                   <button class="btn" onclick="app.core.router('reader', '${s.id}')">Back to Story</button>`
                : `<button class="btn" onclick="app.core.router('course')">${t.back}</button>`;

            const themeColor = isReading ? 'var(--advanced)' : 'var(--highlight)';

            root.innerHTML = `
                <div class="view-section active lesson-container">
                    <div class="results-card" style="border-top-color: ${themeColor}">
                        <h1 style="color:${isReading ? themeColor : 'var(--primary)'}; margin-bottom:2rem;">${t.score}</h1>
                        <div class="score-circle" style="border-color:${themeColor}">
                            <span class="score-val">${s.score}</span>
                            <span class="score-max">/ ${s.maxScore}</span>
                        </div>
                        <h2 style="color:var(--text-muted); margin-bottom:2rem;">${msg}</h2>
                        <div style="display:flex; gap:10px; justify-content:center;">${buttons}</div>
                    </div>
                </div>
            `;
        }
    },

    // ========================================================================
    // 6. UI HELPERS & UPDATERS
    // ========================================================================
    ui: {
        updateNavState(view) {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            const idx = app.config.routes[view];
            if (idx !== undefined && document.querySelectorAll('.nav-btn')[idx]) {
                document.querySelectorAll('.nav-btn')[idx].classList.add('active');
            }
        },

        updateNavText() {
            const t = UI_TEXT[app.state.lang];
            const navs = document.querySelectorAll('.nav-btn span');
            if (navs.length >= 4) {
                navs[0].innerText = t.homeNav;
                navs[1].innerText = t.pathNav;
                navs[2].innerText = t.mediaNav;
                navs[3].innerText = t.wordsNav;
            }
            const langBtn = document.querySelector('.lang-toggle');
            if (langBtn) langBtn.setAttribute('data-icon', app.state.lang.toUpperCase());
        },

        toggleTranslation() {
            const box = document.getElementById('trans-box');
            const btn = document.getElementById('toggle-btn');
            const t = UI_TEXT[app.state.lang];
            box.classList.toggle('hidden');
            btn.innerHTML = box.classList.contains('hidden') ? `👁️ ${t.reveal}` : `🙈 ${t.hide}`;
        },

        filterDictionary(filter) {
            const clean = filter.toLowerCase().trim();
            const grid = document.getElementById('dictionary-grid');
            const noRes = document.getElementById('no-results');
            
            let allVocab = [];
            curriculum.forEach(l => { if (l.vocab) allVocab = [...allVocab, ...l.vocab]; });
            
            // Unique Filter
            const unique = Array.from(new Set(allVocab.map(a => a.word)))
                .map(w => allVocab.find(a => a.word === w));

            const matches = unique.filter(v => 
                v.word.toLowerCase().includes(clean) || 
                v.def.toLowerCase().includes(clean) || 
                v.type.toLowerCase().includes(clean)
            );

            if (matches.length === 0) {
                grid.style.display = 'none';
                noRes.style.display = 'block';
            } else {
                grid.style.display = 'grid';
                noRes.style.display = 'none';
                grid.innerHTML = matches.map(v => app.components.dictCard(v)).join('');
            }
        },

        updateSlideControls() {
            const s = app.state.session;
            const t = UI_TEXT[app.state.lang];
            
            // Progress Bar
            const pct = ((s.currentSlide + 1) / s.totalSlides) * 100;
            const bar = document.getElementById('lesson-progress');
            if(bar) bar.style.width = `${pct}%`;

            // Status Text
            const status = document.getElementById('slide-status');
            if(status) status.innerText = `${s.currentSlide + 1} / ${s.totalSlides}`;

            // Buttons
            const prev = document.getElementById('prev-btn');
            if(prev) prev.disabled = s.currentSlide === 0;

            const next = document.getElementById('next-btn');
            const activeSlide = document.querySelector('.lesson-slide.active');
            const hasQuiz = activeSlide?.querySelector('.quiz-container');

            if (hasQuiz) {
                next.style.display = 'none';
            } else {
                next.style.display = 'inline-flex';
                if (s.currentSlide === s.totalSlides - 1) {
                    next.innerText = `🎉 ${t.finish}`;
                    next.classList.add('btn-success');
                } else {
                    next.innerText = `${t.next} →`;
                    next.classList.remove('btn-success');
                }
            }
        }
    },

    // ========================================================================
    // 7. EVENT HANDLERS
    // ========================================================================
    handlers: {
        changeSlide(dir) {
            const s = app.state.session;
            const newSlide = s.currentSlide + dir;

            if (newSlide >= 0 && newSlide < s.totalSlides) {
                document.getElementById(`slide-${s.currentSlide}`).classList.remove('active');
                s.currentSlide = newSlide;
                document.getElementById(`slide-${s.currentSlide}`).classList.add('active');
                app.ui.updateSlideControls();
            } else if (newSlide >= s.totalSlides) {
                app.views.renderResults(document.getElementById('app-root'));
            }
        },

        // --- Quiz Handlers ---
        
        selectOption(btn, qIdx, optIdx) {
            const s = app.state.session;
            const card = document.getElementById(`q-card-${qIdx}`);
            if (card.classList.contains('answered')) return;

            card.querySelectorAll('.option-btn').forEach(o => o.classList.remove('selected'));
            btn.classList.add('selected');
            s.quizDrafts[qIdx] = optIdx;

            const check = document.getElementById(`check-btn-${qIdx}`);
            if (check) { 
                check.disabled = false; 
                check.classList.remove('btn-outline'); 
                check.classList.add('btn'); 
            }
        },

        submitChoice(qIdx, correctIdx) {
            const s = app.state.session;
            const card = document.getElementById(`q-card-${qIdx}`);
            const selected = s.quizDrafts[qIdx];
            if (selected === undefined) return;

            card.classList.add('answered');
            const opts = card.querySelectorAll('.option-btn');
            
            if (selected === correctIdx) {
                opts[selected].classList.remove('selected');
                opts[selected].classList.add('correct');
                opts[selected].innerHTML += ' <span style="float:right">✅</span>';
                s.score++;
            } else {
                opts[selected].classList.remove('selected');
                opts[selected].classList.add('incorrect');
                opts[selected].innerHTML += ' <span style="float:right">❌</span>';
            }

            document.getElementById(`check-btn-${qIdx}`).style.display = 'none';
            app.handlers.showNextBtn();
        },

        // --- Sentence Builder Handlers ---

        clickWord(qIdx, btn) {
            const slot = document.getElementById(`slot-${qIdx}`);
            const bank = document.getElementById(`bank-${qIdx}`);
            
            if (btn.parentElement === bank) {
                btn.classList.add('in-slot');
                slot.appendChild(btn);
            } else {
                btn.classList.remove('in-slot');
                bank.appendChild(btn);
            }
            if(slot.children.length > 0) slot.classList.add('filled');
            else slot.classList.remove('filled');
        },

        checkBuilder(qIdx, correctSentence) {
            const slot = document.getElementById(`slot-${qIdx}`);
            const card = document.getElementById(`q-card-${qIdx}`);
            if (card.classList.contains('answered')) return;

            const userSent = Array.from(slot.children).map(c => c.innerText).join(' ');
            card.classList.add('answered');

            const checkBtn = document.getElementById(`check-btn-${qIdx}`);

            if (userSent === correctSentence) {
                slot.classList.add('correct');
                checkBtn.classList.add('btn-success');
                app.state.session.score++;
            } else {
                slot.classList.add('incorrect');
                checkBtn.classList.add('incorrect');
                Array.from(slot.children).forEach(c => c.disabled = true);
            }
            
            checkBtn.style.display = 'none';
            app.handlers.showNextBtn();
        },

        resetBuilder(qIdx) {
            const card = document.getElementById(`q-card-${qIdx}`);
            const slot = document.getElementById(`slot-${qIdx}`);
            const bank = document.getElementById(`bank-${qIdx}`);
            const nextBtn = document.getElementById('next-q-btn');
            const checkBtn = document.getElementById(`check-btn-${qIdx}`);

            if (card.classList.contains('answered')) {
                card.classList.remove('answered');
                if (nextBtn) nextBtn.classList.add('hidden');
                if (checkBtn) {
                    checkBtn.style.display = 'block';
                    checkBtn.className = 'btn btn-outline check-btn';
                    checkBtn.innerText = 'Check Answer';
                    checkBtn.classList.remove('incorrect', 'btn-success');
                }
            }

            // Using while loop like original to be safe with NodeList changes
            while (slot.firstChild) {
                let el = slot.firstChild;
                if (el.tagName === 'BUTTON') {
                    el.classList.remove('in-slot');
                    el.disabled = false;
                    bank.appendChild(el);
                } else {
                    el.remove();
                }
            }
            slot.classList.remove('filled', 'correct', 'incorrect');
        },

        nextQuestion() {
            const s = app.state.session;
            s.currentQuizIndex++;
            
            // Logic Split: Course vs Reading
            if (s.source === 'course') {
                const lesson = curriculum.find(l => l.id === String(s.id));
                if (s.currentQuizIndex >= lesson.quiz.length) {
                    app.handlers.changeSlide(1);
                } else {
                    if (app.state.currentView === 'test') {
                        app.views.renderTest(document.getElementById('app-root'), s.id);
                    } else {
                        app.views.renderLesson(document.getElementById('app-root'), s.id);
                    }
                }
            } else if (s.source === 'reading') {
                app.views.renderReadingQuiz(document.getElementById('app-root'), s.id);
            }
        },

        showNextBtn() {
            const next = document.getElementById('next-q-btn');
            if (next) {
                next.classList.remove('hidden');
                next.focus();
            }
        },

        retryReading(id) {
            app.state.session.id = null; // Force reset
            app.core.router('readingQuiz', id);
        }
    },

    // ========================================================================
    // 8. COMPONENTS (HTML SNIPPETS)
    // ========================================================================
    components: {
        features: (t) => `
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
        `,

        mediaCard: (r) => {
            const isAudio = r.type === 'audio';
            const color = isAudio ? 'var(--advanced)' : 'var(--primary)';
            return `
                <div class="feature-card" onclick="app.core.router('reader', '${r.id}')" style="cursor:pointer">
                    <div style="font-size:2rem; margin-bottom:10px;">${isAudio ? '🎧' : '📜'}</div>
                    <h3 style="color:${color}">${r.tpTitle}</h3>
                    <p style="font-size:0.9rem; margin-bottom:1rem;">${r.title}</p>
                    <div style="display:flex; gap:8px; justify-content:center; width:100%;">
                        <span class="vocab-badge" style="background:${color}">${isAudio ? 'Listen' : 'Read'}</span>
                        <span class="vocab-badge" style="background:#64748b">${r.level}</span>
                    </div>
                </div>
            `;
        },

        flashcard: (v) => `
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
        `,

        dictCard: (v) => `
            <div class="feature-card" style="text-align: center;">
                <h3 style="color:var(--primary); font-size:1.5rem; margin-bottom:0.5rem;">${v.word}</h3>
                <p style="color:var(--text-muted); font-size:0.9rem; font-weight:bold; margin-bottom:0.5rem;"><i>${v.type}</i></p>
                <p>${v.def}</p>
            </div>
        `,

        audioPlayer: (src, t) => `
            <div class="audio-player-wrapper">
                <div style="font-size:3rem; margin-bottom:10px;">📻</div>
                <audio controls style="width: 100%; border-radius: 99px; outline:none;">
                    <source src="${src}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
                <p style="font-size:0.8rem; margin-top:10px; color:var(--text-muted);">${t.tapToFlip || "Listen and read along"}</p>
            </div>
            <hr style="margin: 2rem 0; opacity:0.2;">
        `,

        quizContainer: (quizList, idx, isReading = false) => {
            if (!quizList || !quizList[idx]) return '';
            const q = quizList[idx];
            const isLast = idx === quizList.length - 1;
            const btnText = isLast ? (isReading ? 'See Results 📊' : 'Finish Quiz 🎉') : 'Next Question →';
            
            let inner = '';
            
            // Render Builder vs Option Logic
            if (q.type === 'builder') {
                inner = `
                    <div class="builder-container" id="builder-${idx}">
                        <div class="builder-slot" id="slot-${idx}"></div>
                        <div class="word-bank" id="bank-${idx}">
                            ${q.words.map(w => `<button class="word-chip" onclick="app.handlers.clickWord(${idx}, this)">${w}</button>`).join('')}
                        </div>
                        <div class="quiz-action-area" style="display:flex; flex-direction:column; gap:10px;">
                            <button class="btn btn-outline check-btn" id="check-btn-${idx}" onclick="app.handlers.checkBuilder(${idx}, '${q.correctSentence}')">Check Answer</button>
                            <button id="next-q-btn" class="btn hidden" onclick="app.handlers.nextQuestion()">${btnText}</button>
                        </div>
                        <button class="btn btn-text" onclick="app.handlers.resetBuilder(${idx})" style="font-size:0.9rem; padding: 10px; margin-top:5px; align-self:center;">↺ Reset</button>
                    </div>
                `;
            } else {
                const opts = q.options.map((opt, i) => {
                    const sel = app.state.session.quizDrafts[idx] === i ? 'selected' : '';
                    return `<div class="option-btn ${sel}" onclick="app.handlers.selectOption(this, ${idx}, ${i})">${opt}</div>`;
                }).join('');

                inner = `
                    <div class="options-grid" style="display:grid; gap:10px;">${opts}</div>
                    <div class="quiz-action-area" style="margin-top:20px;">
                        <button id="check-btn-${idx}" class="btn btn-outline" style="padding: 12px 30px; width:100%;" onclick="app.handlers.submitChoice(${idx}, ${q.ans})" disabled>Check Answer</button>
                        <button id="next-q-btn" class="btn hidden" style="width:100%;" onclick="app.handlers.nextQuestion()">${btnText}</button>
                    </div>
                `;
            }

            return `
                <div class="quiz-container">
                    <div style="text-align:right; color:var(--text-muted); margin-bottom:10px; font-size:0.9rem; font-weight:700;">Question ${idx + 1} / ${quizList.length}</div>
                    <div class="question-card" id="q-card-${idx}" style="${isReading ? 'border-left:8px solid var(--advanced)' : ''}">
                        <p style="font-weight:700; margin-bottom:1rem; font-size:1.1rem;">${q.q}</p>
                        ${inner}
                    </div>
                </div>
            `;
        },

        lessonWrapper: (content, closeAction, isReading = false) => `
            <div class="view-section active lesson-container">
                <div class="progress-header">
                    <button class="close-btn" onclick="${closeAction}">✕</button>
                    <div class="progress-track">
                        <div id="lesson-progress" class="progress-fill" style="width: 0%; ${isReading ? 'background:var(--advanced)' : ''}"></div>
                    </div>
                </div>
                ${content}
                ${!isReading ? `
                <div class="slide-footer">
                    <button class="btn btn-outline" id="prev-btn" onclick="app.handlers.changeSlide(-1)">←</button>
                    <span class="slide-status" id="slide-status"></span>
                    <button class="btn" id="next-btn" onclick="app.handlers.changeSlide(1)">Next →</button>
                </div>` : ''}
            </div>
        `
    },

    // ========================================================================
    // 9. UTILITIES
    // ========================================================================
    utils: {
        generateMap(items, progress) {
    const { amplitude, frequency, verticalGap, startY } = app.config.wave;
    const points = [];
    
    // 1. Generate Nodes
    let nodes = items.map((item, i) => {
        const sine = Math.sin(i * frequency);
        const x = sine * amplitude;
        const y = startY + (i * verticalGap);
        points.push({ x, y });

        const id = String(item.id);
        const isCompleted = progress.completed.includes(id);
        const isFirst = i === 0;
        const prevId = i > 0 ? String(items[i - 1].id) : null;
        
        // A level is unlocked if it is the first one, OR if the previous one is completed
        const isUnlocked = isFirst || (prevId && progress.completed.includes(prevId));
        
        // --- NEW LOGIC START ---
        // Determine if the level is strictly locked (not complete and not unlocked)
        const isLocked = !isCompleted && !isUnlocked;
        // Create the class string to hide the popup card
        const lockedClass = isLocked ? 'is-locked' : '';
        // --- NEW LOGIC END ---

        let cls = 'path-icon-btn';
        let icon = '★';
        let onclick = "alert('O open e sona pini! (Finish previous lesson first!)')";
        const isTest = item.type === 'test';

        if (isTest) { cls += ' test-node'; icon = '🏆'; }
        if (i === 0) cls += ' start-node';

        if (isCompleted) {
            cls += ' completed';
            icon = '✅';
            onclick = isTest ? `app.core.router('test', '${id}')` : `app.core.router('lesson', '${id}')`;
        } else if (isUnlocked) {
            cls += ' active-node';
            onclick = isTest ? `app.core.router('test', '${id}')` : `app.core.router('lesson', '${id}')`;
        } else {
            cls += ' locked';
            icon = '🔒';
        }

        return `
            <div class="path-node-container" style="top: ${y}px; left: calc(50% + ${x}px);">
                <div class="path-card ${x > 0 ? 'left' : 'right'} ${lockedClass}" onclick="${onclick}" role="button" tabindex="0">
                    <h3>${isTest ? 'Test' : 'Lesson'} ${item.id.replace('c','')}</h3>
                    <p>${item.title}</p>
                </div>
                <div class="${cls}" onclick="${onclick}" role="button" tabindex="0">${icon}</div>
            </div>
        `;
    }).join('');

    // 2. Generate SVG Path
    const center = 300;
    let path = '';
    if (points.length) {
        path = `M ${center + points[0].x} ${points[0].y}`;
        for (let i = 0; i < points.length - 1; i++) {
            const p1 = points[i];
            const p2 = points[i+1];
            const cp1x = center + p1.x;
            const cp1y = p1.y + (verticalGap / 2);
            const cp2x = center + p2.x;
            const cp2y = p2.y - (verticalGap / 2);
            path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${center + p2.x} ${p2.y}`;
        }
    }

    return { html: nodes, path, height: startY + (items.length * verticalGap) + 100 };
},
    },

    // ========================================================================
    // 10. COMPATIBILITY LAYER
    // Ensures index.html buttons (which use app.router) still work
    // ========================================================================
    router: (view, id) => app.core.router(view, id),
    toggleLang: () => app.core.toggleLang(),
    updateNav: () => app.ui.updateNavText()
};

// ============================================================================
// BOOTSTRAP
// ============================================================================
window.onload = app.core.init;
window.app = app;
