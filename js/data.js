// =========================================
// 1. UI TEXT STRINGS
// =========================================

const UI_TEXT = {
    en: {
        welcome:      "Welcome to tomo sona",
        intro:        "Master the language of good. From philosophy to fluency, content for all levels.",
        start:        "Start Course",
        lesson:       "Lesson",
        test:         "Test",
        vocab:        "Vocabulary",
        grammar:      "Grammar & Concepts",
        story:        "Reading Practice",
        quiz:         "Quick Quiz",
        next:         "CONTINUE",
        finish:       "COMPLETE LESSON",
        score:        "Lesson Complete!",
        scoreMsg:     "You scored:",
        back:         "Back",
        outline:      "Curriculum Overview",
        tapToFlip:    "Tap cards to flip",
        simpleTitle:  "Simple",
        simpleDesc:   "Learn to express complex thoughts using basic concepts.",
        modularTitle: "Modular",
        modularDesc:  "Combine words like lego bricks to create meaning.",
        positiveTitle: "Positive",
        positiveDesc:  "A language designed to frame thoughts in a good way.",
        dictTitle:    "Dictionary",
        dictDesc:     "All words learned so far.",
        startNode:    "Start",
        perfect:      "Perfect!",
        good:         "Good Job!",
        tryAgain:     "Try Again",
        homeNav:      "Home",
        pathNav:      "Course",
        wordsNav:     "Dictionary",
        mediaNav:     "Media",
        readTitle:    "Reading Library",
        readDesc:     "Practice with stories and texts.",
        reveal:       "Show Translation",
        hide:         "Hide Translation"
    },

    tp: {
        welcome:      "kama pona",
        intro:        "o kama sona e toki pona. o kama sona e nasin sona pi toki pona. o sona e toki pona ale.",
        start:        "o kama sona",
        lesson:       "lipu sona",
        test:         "utala sona suli",
        vocab:        "nimi sin",
        grammar:      "nasin toki",
        story:        "sitelin musi",
        quiz:         "utala sona lili",
        next:         "tawa",
        finish:       "awen ala sona",
        score:        "awen ala utala sona!",
        scoreMsg:     "nanpa sina:",
        back:         "tawa monsi",
        outline:      "nasin pi kama sona",
        tapToFlip:    "o luka e lipu",
        simpleTitle:  "lili pona",
        simpleDesc:   "toki e ale kepeken nasin pona.",
        modularTitle: "kipisi mute",
        modularDesc:  "nimi ale li ken kama wan tawa nimi sin.",
        positiveTitle: "pilin pona",
        positiveDesc: "toki pona li pana e pilin pona tawa sina.",
        dictTitle:    "lipu nimi",
        dictDesc:     "nimi ale pi kama sona.",
        startNode:    "open",
        perfect:      "pona mute!",
        good:         "pona!",
        tryAgain:     "o kama sona sin.",
        homeNav:      "open",
        pathNav:      "nasin pi kama sona",
        wordsNav:     "lipu nimi",
        mediaNav:     "lipu musi",
        readTitle:    "lipu sitelen",
        readDesc:     "o lukin e sitelin musi.",
        reveal:       "o lukin e toki Inli",
        hide:         "o len e toki Inli",
    }
};

// =========================================
// 2. CURRICULUM DATA DEFINITIONS
// =========================================

// UNIT 1 {REFINED}

const LESSON_01 = {
    id: "1.1",
    type: "lesson",
    title: "The Self and the World",
    desc: "",
    vocab: [
        { word: "mi",   type: "pronoun",      def: "I, me, we, us.", ex: "mi suli. (I am important.)" },
        { word: "sina", type: "pronoun",      def: "You. (singular & plural)", ex: "sina lili. (You are small.)" },
        { word: "suli", type: "content word", def: "Big, heavy, long, important.", ex: "mi suli. (I am important/big.)" },
        { word: "lili", type: "content word", def: "Small, short, few, young.", ex: "sina lili. (you are small/young.)" },
        { word: "pona", type: "content word", def: "Positive, fix, make better.", ex: "mi pona. (I am good.)" },
        { word: "ike",  type: "content word", def: "Negative, bad, problem.", ex: "sina ike. (You are bad.)" },
        { word: "toki", type: "content word", def: "Communication, language, to speak.", ex: "mi toki (I am speaking)" },
        { word: "a",    type: "particle",     def: "Ah! Ha! Wow! Emphasis.", ex: "pona a! (Great!)" }
    ],
    grammar: `
    <section>
        <p style="font-size: 1.2rem; color: var(--primary-dark);">
            Welcome to your first step towards a simpler way of thinking. In this lesson, we focus on the most immediate reality: <strong>yourself</strong> and the <strong>person you are speaking to</strong>.
        </p>
    </section>

    <div class="grammar-box">
        <h3>1. Sounds and Rhythm</h3>
        <p>Before we speak, we must listen. Toki Pona uses few sounds to maximize simplicity.</p>

        <h4 style="color: var(--primary); margin-top: 1.5rem;">The Rhythm</h4>
        <p>All words place stress on the first syllable. this means the first syllable is given extra attention when spoken.</p>

                <p><strong>Correct Examples:</strong></p>
        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--success);">
                ✅ <strong>MI SU-li.</strong> <span style="font-weight: 400; opacity: 0.8;">(I am important.)</span>
            </div>
            <div class="outline-item" style="border-left: 6px solid var(--success);">
                ✅ <strong>SI-na LI-li.</strong> <span style="font-weight: 400; opacity: 0.8;">(You are small.)</span>
            </div>
        </div>

        <p style="margin-top: 1.5rem;"><strong>Incorrect Examples:</strong></p>
        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--error); background: var(--error-bg);">
                ❌ <em>si-NA su-LI.</em>
            </div>
            <div class="outline-item" style="border-left: 6px solid var(--error); background: var(--error-bg);">
                ❌ <em>mi po-NA li-LI.</em>
            </div>
        </div>

        <h4 style="color: var(--primary); margin-top: 1.5rem;">The Vowels</h4>
        <p>There are only five vowels. They are pure and unchanging.</p>
        
        <div style="overflow-x: auto; border: var(--border-w) solid var(--border-color); border-radius: var(--radius-md); box-shadow: 4px 4px 0 var(--border-color);">
            <table style="width: 100%; border-collapse: collapse; background: white;">
                <thead style="background: var(--primary-light); color: var(--primary-dark);">
                    <tr>
                        <th style="padding: 12px; text-align: left;">Vowel</th>
                        <th style="padding: 12px; text-align: left;">Pronunciation</th>
                        <th style="padding: 12px; text-align: left;">English Approx.</th>
                    </tr>
                </thead>
                <tbody style="font-weight: 700;">
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; color: var(--primary);">a</td>
                        <td style="padding: 12px;">Open mouth</td>
                        <td style="padding: 12px; color: var(--text-muted);">like <em>father</em></td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; color: var(--primary);">e</td>
                        <td style="padding: 12px;">Mid-front</td>
                        <td style="padding: 12px; color: var(--text-muted);">like <em>bed</em></td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; color: var(--primary);">i</td>
                        <td style="padding: 12px;">High-front</td>
                        <td style="padding: 12px; color: var(--text-muted);">like <em>ski</em></td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; color: var(--primary);">o</td>
                        <td style="padding: 12px;">Mid-back</td>
                        <td style="padding: 12px; color: var(--text-muted);">like <em>more</em></td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; color: var(--primary);">u</td>
                        <td style="padding: 12px;">High-back</td>
                        <td style="padding: 12px; color: var(--text-muted);">like <em>flute</em></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h4 style="color: var(--primary); margin-top: 2rem;">The Consonants</h4>
        <p>There is one major exception to watch out for:</p>

        <div style="background: var(--error-bg); border-left: 6px solid var(--error); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
            <strong style="color: var(--error-text); display: block; margin-bottom: 0.5rem; font-size: 1.1rem;">
                ⚠️ Important Note on "J"
            </strong>
            <p style="margin: 0; color: var(--error-text);">
                The letter <strong>j</strong> makes the <strong>"y"</strong> sound (as in <em>yellow</em>). It is never pronounced like the "j" in <em>jump</em>.
            </p>
        </div>
        <br>
        <p> the other consonants: "k, l, m, n, p, s, t, w" sound exactly like their English counterpart.
    </div>

    <section>
        <h3>2. Tip About Vocabulary</h3>
        <div style="background: var(--advanced-bg); border: 2px dashed var(--advanced); padding: 1.5rem; border-radius: var(--radius-md); display: flex; gap: 1rem; align-items: center;">
            <span style="font-size: 2rem;">💡</span>
            <div>
                <strong style="color: var(--advanced);">Context is Key</strong>
                <p style="margin: 0; font-size: 1rem;">Words do not change form. There are no plurals (s) or conjugations (ed, ing). <em>pona</em> can mean "good" or "goodness."</p>
            </div>
        </div>
    </section>

    <section style="margin-top: 2rem;">
        <h3>3. Grammar: The "Featureless" Sentence</h3>
        <p>In this language, there is <strong>Zero Copula</strong>. The verb "to be" does not exist here.</p>
        <p>This means that instead of needing to use "to be" to combined nouns and adjectives, we put mi or sina next to the adjective to show relation.</p>
        
        <div style="text-align: center; margin: 2rem 0;">
            <span style="background: var(--text-main); color: white; padding: 10px 20px; border-radius: 99px; font-weight: 800; font-family: monospace; font-size: 1.2rem;">
                [mi/sina] + [Adjective]
            </span>
        </div>

        <div class="outline-grid">
            <div class="outline-item">
                <span style="font-size: 1.5rem;">👤</span>
                <div>
                    <div style="color: var(--primary); font-size: 1.2rem;">mi pona.</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">I (am) good.</div>
                </div>
            </div>
            <div class="outline-item">
                <span style="font-size: 1.5rem;">👉</span>
                <div>
                    <div style="color: var(--primary); font-size: 1.2rem;">sina ike.</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">You (are) bad.</div>
                </div>
            </div>
        </div>
    </section>

    <div class="story-box" style="margin-top: 3rem;">
        <h3 style="color: var(--accent-dark);">4. The Golden Rule</h3>
        <p>You will eventually learn a particle called <code>li</code>. However, you must learn the exception first.</p>

        <div style="background: var(--accent-bg); padding: 1.5rem; border-radius: var(--radius-md); border: var(--border-w) solid var(--accent); margin: 1.5rem 0; text-align: center;">
            <strong style="color: var(--accent-dark); font-size: 1.2rem; display: block; margin-bottom: 0.5rem;">THE RULE</strong>
            If the subject is exactly <strong>mi</strong> or <strong>sina</strong>, you do <span style="text-decoration: underline; text-decoration-thickness: 4px; text-decoration-color: var(--error);">NOT</span> use <code>li</code>.
        </div>

        <p><strong>Correct Examples:</strong></p>
        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--success);">
                ✅ <strong>mi suli.</strong> <span style="font-weight: 400; opacity: 0.8;">(I am important.)</span>
            </div>
            <div class="outline-item" style="border-left: 6px solid var(--success);">
                ✅ <strong>sina lili.</strong> <span style="font-weight: 400; opacity: 0.8;">(You are small.)</span>
            </div>
            <div class="outline-item" style="border-left: 6px solid var(--success);">
                ✅ <strong>mi toki.</strong> <span style="font-weight: 400; opacity: 0.8;">(I am speaking.)</span>
            </div>
        </div>
    </div>
    
    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <div class="features-grid" style="grid-template-columns: 1fr 1fr;">
            <div class="feature-card">
                <span class="feature-icon">🗣️</span>
                <strong>Stress First</strong>
                <p style="font-size: 0.9rem; margin: 0;">Always stress the first syllable.</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">🚫</span>
                <strong>No "To Be"</strong>
                <p style="font-size: 0.9rem; margin: 0;">Drop the subject right into the adjective.</p>
            </div>
        </div>
    </section>
    `,
    story: `
    <div class="story-pair">
        <p class="tp-line">The Giant: "mi suli. sina lili. mi toki."</p>
        <p class="en-line">The Giant: "I am big. You are small. I am talking."</p>
    </div>
    
    <div class="story-pair">
        <p class="tp-line">The Ant: "sina suli a! mi lili. mi pona."</p>
        <p class="en-line">The Ant: "You are so big! I am small. I am good."</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">The Giant: "sina pona. mi pona. pona a!"</p>
        <p class="en-line">The Giant: "You are good. I am good. That's great!"</p>
    </div>
    `,
    quiz: [
    // VOCABULARY CHECKS
    { 
        type: "mc", 
        q: "What does the word <b>'suli'</b> mean?", 
        options: ["Small or Short", "Big or Important", "To speak"], 
        ans: 1 
    },
    { 
        type: "mc", 
        q: "Select the word for <b>'You'</b>.", 
        options: ["mi", "sina", "li"], 
        ans: 1 
    },
    { 
        type: "mc", 
        q: "Which word is the opposite of <b>'pona'</b>?", 
        options: ["ike", "lili", "suli"], 
        ans: 0 
    },

    // PHONOLOGY / STRESS
    { 
        type: "mc", 
        q: "Based on the rules of rhythm, how is <b>'lili'</b> pronounced?", 
        options: ["LI-li (Stress on first syllable)", "li-LI (Stress on last syllable)", "L-i-l-i (All equal)"], 
        ans: 0 
    },

    // GRAMMAR: THE "LI" TRAP
    { 
        type: "mc", 
        q: "Which of these sentences is grammatically <b>INCORRECT</b>?", 
        options: ["mi suli.", "sina toki.", "mi li pona."], 
        ans: 2 
    },
    { 
        type: "mc", 
        q: "Why is <b>'sina li ike'</b> wrong?", 
        options: ["'ike' is not a real word.", "You never use 'li' when the subject is 'sina'.", "It should be 'ike li sina'."], 
        ans: 1 
    },

    // COMPREHENSION
    { 
        type: "mc", 
        q: "If someone says <b>'mi toki'</b>, what are they doing?", 
        options: ["They are being small.", "They are speaking.", "They are fixing something."], 
        ans: 1 
    },

    // SENTENCE BUILDERS (PRODUCTION)
    { 
        type: "builder", 
        q: "Translate: <b>'I am small.'</b>", 
        correctSentence: "mi lili", 
        words: ["mi", "sina", "lili", "suli", "li", "pona"] 
    },
    { 
        type: "builder", 
        q: "Translate: <b>'You are bad.'</b>", 
        correctSentence: "sina ike", 
        words: ["sina", "ike", "mi", "pona", "li", "toki"] 
    },
    { 
        type: "builder", 
        q: "Translate: <b>'Good!' (Emphatic)</b>", 
        correctSentence: "pona a", 
        words: ["pona", "a", "mi", "ike", "li", "suli"] 
    }
]
};

const LESSON_02 = {
    id: "1.2",
    type: "lesson",
    title: "He, She, It, and `li`",
    desc: "Introducing nouns and the most important grammar particle.",
    vocab: [
        { word: "ona",    type: "pronoun", def: "He, she, it, they.", ex: "ona li pona. (They are good.)" },
        { word: "ni",     type: "pronoun", def: "This, that, these, those", ex: "jan ni. (That person.)" },
        { word: "li",     type: "syntactical particle", def: "Marks the start of the predicate.", ex: "jan li suli. (The person is big.)" },
        { word: "jan",    type: "content word", def: "A person, human, somebody.", ex: "mi jan. (I am a person.)" },
        { word: "ijo",    type: "content word", def: "Thing, object, something.", ex: "ijo ni. (This thing.)" }
    ],
    grammar: `
    <section>
        <p>In the previous lesson, we met the VIPs: <strong>mi</strong> (I) and <strong>sina</strong> (you). They are special because they stand alone.</p>
        <p>However, the world is full of other things. To talk about them, we need a small but crucial grammar word: <span style="background: var(--primary); color: white; padding: 2px 8px; border-radius: 4px; font-weight: bold;">li</span>.</p>
    </section>

    <section style="margin-top: 2rem;">
        <h3>1. Pronouns & Nouns</h3>
        <div style="background: var(--color-slate-100); border-left: 6px solid var(--text-muted); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 2rem;">
            <strong style="color: var(--text-muted); display: block; margin-bottom: 0.5rem;">🔢 No Plurals</strong>
            <p style="margin: 0; font-size: 0.95rem;">
                Just like <em>pona</em> or <em>suli</em>, nouns do not change. 
                <br>• <strong>jan</strong> = person / people.
                <br>• <strong>ona</strong> = he / she / it / they.
            </p>
        </div>
    </section>

    <div class="grammar-box">
        <h3>2. Grammar: The "li" Rule</h3>
        <p>In English, we change the verb (e.g., "He run<strong>s</strong>"). In this language, we insert a particle.</p>

        <div style="background: var(--primary-light); border: var(--border-w) solid var(--primary); padding: 1.5rem; border-radius: var(--radius-md); text-align: center; margin: 2rem 0; box-shadow: 4px 4px 0 var(--primary-border);">
            <strong style="color: var(--primary-dark); font-size: 1.2rem; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 1rem;">The "li" Rule</strong>
            <p style="margin: 0; font-weight: 700; color: var(--primary-dark);">
                If the subject is <u>anything other than</u> <em>mi</em> or <em>sina</em>, you must place <strong>li</strong> after the subject.
            </p>
        </div>

        <p>Think of <em>li</em> as a "predicate marker." It warns the listener: "The subject is finished; now comes the description."</p>

        <div style="text-align: center; margin: 2rem 0;">
            <span style="background: var(--color-slate-900); color: white; padding: 10px 20px; border-radius: 99px; font-weight: 800; font-family: monospace;">
                [Subject] <span style="color: var(--primary-light);">li</span> [Adjective]
            </span>
        </div>

        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--primary);">
                <span style="font-size: 1.5rem;">👉</span>
                <div>
                    <div style="color: var(--primary-dark); font-weight: 800;">ona <span style="color: var(--primary);">li</span> pona.</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">She <strong>is</strong> good.</div>
                </div>
            </div>
            <div class="outline-item" style="border-left: 6px solid var(--primary);">
                <span style="font-size: 1.5rem;">🧍</span>
                <div>
                    <div style="color: var(--primary-dark); font-weight: 800;">jan <span style="color: var(--primary);">li</span> suli.</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">The person <strong>is</strong> tall.</div>
                </div>
            </div>
            <div class="outline-item" style="border-left: 6px solid var(--primary);">
                <span style="font-size: 1.5rem;">📦</span>
                <div>
                    <div style="color: var(--primary-dark); font-weight: 800;">ni <span style="color: var(--primary);">li</span> ike.</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">This <strong>is</strong> bad.</div>
                </div>
            </div>
        </div>
    </div>

    <section style="margin-top: 3rem;">
        <h3>3. Comparing the VIPs and the Rest</h3>
        <p>It is crucial to see the difference side-by-side.</p>

        <div style="overflow-x: auto; border: var(--border-w) solid var(--border-color); border-radius: var(--radius-lg); box-shadow: 6px 6px 0 var(--border-color);">
            <table style="width: 100%; border-collapse: collapse; background: white;">
                <thead style="background: var(--text-main); color: white;">
                    <tr>
                        <th style="padding: 15px; text-align: left;">Subject</th>
                        <th style="padding: 15px; text-align: left;">Grammar</th>
                        <th style="padding: 15px; text-align: left;">Example</th>
                    </tr>
                </thead>
                <tbody style="font-weight: 700;">
                    <tr style="background: var(--accent-bg); border-bottom: 1px solid rgba(0,0,0,0.05);">
                        <td style="padding: 15px; color: var(--accent-dark);">mi</td>
                        <td style="padding: 15px; opacity: 0.7;">No <em>li</em></td>
                        <td style="padding: 15px;">mi suli.</td>
                    </tr>
                    <tr style="background: var(--accent-bg); border-bottom: 2px solid var(--border-color);">
                        <td style="padding: 15px; color: var(--accent-dark);">sina</td>
                        <td style="padding: 15px; opacity: 0.7;">No <em>li</em></td>
                        <td style="padding: 15px;">sina suli.</td>
                    </tr>
                    <tr style="background: var(--primary-light); border-bottom: 1px solid rgba(0,0,0,0.05);">
                        <td style="padding: 15px; color: var(--primary-dark);">ona</td>
                        <td style="padding: 15px; color: var(--primary);">Uses <strong>li</strong></td>
                        <td style="padding: 15px;">ona <strong>li</strong> suli.</td>
                    </tr>
                    <tr style="background: var(--primary-light);">
                        <td style="padding: 15px; color: var(--primary-dark);">jan</td>
                        <td style="padding: 15px; color: var(--primary);">Uses <strong>li</strong></td>
                        <td style="padding: 15px;">jan <strong>li</strong> suli.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
    
    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <div class="features-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
            <div class="feature-card">
                <span class="feature-icon">🧱</span>
                <strong>li = Separator</strong>
                <p style="font-size: 0.9rem; margin: 0;">It separates the subject from the verb.</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">🚦</span>
                <strong>The Condition</strong>
                <p style="font-size: 0.9rem; margin: 0;">Use it for EVERYTHING except <em>mi</em> and <em>sina</em>.</p>
            </div>
        </div>
    </section>
    `,
    story: `
    <div class="story-pair">
        <p class="tp-line">jan: "ni li suli. ni li ike."</p>
        <p class="en-line">Person: "This is big. This is bad."</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">ona: "jan li lili. ona li pona."</p>
        <p class="en-line">She: "The person is small. He is good."</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">jan: "a! sina pona. mi pona. ni li pona."</p>
        <p class="en-line">Person: "Ah! You are good. I am good. This is good."</p>
    </div>
    `,
    quiz: [
        // VOCABULARY
        { 
            type: "mc", 
            q: "What does <b>'jan'</b> mean?", 
            options: ["I/Me", "Person/People", "Thing"], 
            ans: 1 
        },
        { 
            type: "mc", 
            q: "Translate <b>'ona'</b>.", 
            options: ["He/She/It", "You", "Good"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "What does <b>'ni'</b> refer to?", 
            options: ["A person", "This/That", "Big"], 
            ans: 1 
        },

        // GRAMMAR (THE LI RULE)
        { 
            type: "mc", 
            q: "Which sentence is correct?", 
            options: ["jan suli.", "jan li suli.", "jan mi suli."], 
            ans: 1 
        },
        { 
            type: "mc", 
            q: "Which sentence is <b>INCORRECT</b>?", 
            options: ["mi li suli.", "sina suli.", "ona li suli."], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Why do we say <b>'ona li toki'</b> but <b>'mi toki'</b>?", 
            options: ["'ona' is not a VIP (mi/sina), so it needs 'li'.", "'mi' is a verb.", "'ona' is plural."], 
            ans: 0 
        },

        // SENTENCE BUILDERS
        { 
            type: "builder", 
            q: "Translate: <b>'The person is good.'</b>", 
            correctSentence: "jan li pona", 
            words: ["jan", "li", "pona", "mi", "sina", "ike"] 
        },
        { 
            type: "builder", 
            q: "Translate: <b>'He is talking.'</b>", 
            correctSentence: "ona li toki", 
            words: ["ona", "li", "toki", "sina", "jan", "ni"] 
        },
        { 
            type: "builder", 
            q: "Translate: <b>'This is bad.'</b>", 
            correctSentence: "ni li ike", 
            words: ["ni", "li", "ike", "jan", "pona", "suli"] 
        }
    ]
};

const LESSON_03 = {
    id: "1.3",
    type: "lesson",
    title: "People Vocabulary",
    desc: "Family, gender, and social relationships.",
    vocab: [
        { word: "mama",   type: "content word", def: "Parent, ancestor, creator, origin.", ex: "mama mi. (My parent.)" },
        { word: "mije",   type: "content word", def: "Man, husband, male, masculine.", ex: "mije ni. (That man.)" },
        { word: "meli",   type: "content word", def: "Woman, wife, female, feminine.", ex: "meli pona. (Good woman.)" },
        { word: "tonsi",  type: "content word", def: "Non-binary, trans, gender-non-conforming.", ex: "jan tonsi. (Non-binary person.)" },
    ],
    grammar: `
    <section>
        <p>Toki Pona is naturally gender-neutral. The pronouns (<em>mi, sina, ona</em>) indicate no gender. We only specify gender if it is relevant to the conversation.</p>
    </section>

    <section>
        <h3>1. Gender Words</h3>
        <p>These words can act as nouns (Woman/Man) or adjectives (Feminine/Masculine).</p>

        <div class="features-grid" style="grid-template-columns: 1fr 1fr 1fr; gap: 1rem;">
            <div class="feature-card" style="padding: 1.5rem; border-color: var(--primary);">
                <strong style="color: var(--primary-dark); font-size: 1.2rem;">meli</strong>
                <p style="margin: 0.5rem 0 0; font-size: 0.9rem; color: var(--text-muted);">Woman / Female</p>
            </div>
            <div class="feature-card" style="padding: 1.5rem; border-color: var(--primary);">
                <strong style="color: var(--primary-dark); font-size: 1.2rem;">mije</strong>
                <p style="margin: 0.5rem 0 0; font-size: 0.9rem; color: var(--text-muted);">Man / Male</p>
            </div>
            <div class="feature-card" style="padding: 1.5rem; border-color: var(--primary);">
                <strong style="color: var(--primary-dark); font-size: 1.2rem;">tonsi</strong>
                <p style="margin: 0.5rem 0 0; font-size: 0.9rem; color: var(--text-muted);">Non-binary</p>
            </div>
        </div>
    </section>

    <div class="grammar-box">
        <h3>2. Gender as an Adjective</h3>
        <p>To create words like "Mother" or "Son," take the gender-neutral role and modify it.</p>

        <div style="background: var(--accent-bg); border: var(--border-w) solid var(--accent); padding: 1.5rem; border-radius: var(--radius-md); text-align: center; margin: 2rem 0; box-shadow: 6px 6px 0 var(--accent-dark);">
            <strong style="color: var(--accent-dark); font-size: 1.2rem; display: block; margin-bottom: 0.5rem;">The Construction Rule</strong>
            <p style="margin: 0; color: var(--color-slate-900);">
                [Role] + <span style="background: var(--accent); color: white; padding: 2px 8px; border-radius: 4px;">Gender</span>
            </p>
        </div>

        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--primary);">
                <div style="width: 100%;">
                    <div style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 4px;">Parent</div>
                    <div style="font-weight: 800; font-size: 1.1rem; margin-bottom: 8px;">mama</div>
                    <div style="border-top: 1px dashed var(--border-color); padding-top: 8px;">
                        <div style="margin-bottom: 4px;">mama <span style="color: var(--accent);">meli</span> = <strong>Mother</strong></div>
                        <div>mama <span style="color: var(--accent);">mije</span> = <strong>Father</strong></div>
                    </div>
                </div>
            </div>

            <div class="outline-item" style="border-left: 6px solid var(--primary);">
                <div style="width: 100%;">
                    <div style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 4px;">Child</div>
                    <div style="font-weight: 800; font-size: 1.1rem; margin-bottom: 8px;">jan lili</div>
                    <div style="border-top: 1px dashed var(--border-color); padding-top: 8px;">
                        <div style="margin-bottom: 4px;">jan lili <span style="color: var(--accent);">meli</span> = <strong>Daughter</strong></div>
                        <div>jan lili <span style="color: var(--accent);">mije</span> = <strong>Son</strong></div>
                    </div>
                </div>
            </div>

            <div class="outline-item" style="border-left: 6px solid var(--primary);">
                <div style="width: 100%;">
                    <div style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 4px;">Sibling</div>
                    <div style="font-weight: 800; font-size: 1.1rem; margin-bottom: 8px;">jan sama</div>
                    <div style="border-top: 1px dashed var(--border-color); padding-top: 8px;">
                        <div style="margin-bottom: 4px;">jan sama <span style="color: var(--accent);">meli</span> = <strong>Sister</strong></div>
                        <div>jan sama <span style="color: var(--accent);">mije</span> = <strong>Brother</strong></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section style="margin-top: 3rem;">
        <h3>3. Social Roles</h3>
        <p>We define people by their relationship to us or society.</p>

        <div style="overflow-x: auto; border: var(--border-w) solid var(--border-color); border-radius: var(--radius-lg); box-shadow: 6px 6px 0 var(--border-color);">
            <table style="width: 100%; border-collapse: collapse; background: white;">
                <thead>
                    <tr style="background: var(--color-slate-900); color: white;">
                        <th style="padding: 12px; text-align: left;">Phrase</th>
                        <th style="padding: 12px; text-align: left;">Literal</th>
                        <th style="padding: 12px; text-align: left;">Meaning</th>
                    </tr>
                </thead>
                <tbody style="font-size: 0.95rem;">
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800;">jan <span style="color: var(--success);">pona</span></td>
                        <td style="padding: 12px; color: var(--text-muted);">Good person</td>
                        <td style="padding: 12px;">Friend</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800;">jan <span style="color: var(--error);">ike</span></td>
                        <td style="padding: 12px; color: var(--text-muted);">Bad person</td>
                        <td style="padding: 12px;">Enemy</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800;">jan <span style="color: var(--advanced);">lawa</span></td>
                        <td style="padding: 12px; color: var(--text-muted);">Head person</td>
                        <td style="padding: 12px;">Leader / Boss</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; font-weight: 800;">jan <span style="color: var(--advanced);">sewi</span></td>
                        <td style="padding: 12px; color: var(--text-muted);">Divine person</td>
                        <td style="padding: 12px;">Priest / God</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    <section style="margin-top: 3rem;">
        <h3>4. Context and Ambiguity</h3>
        <p>You might be tempted to say "jan mije" every time you talk about a male person. <strong>Resist this urge.</strong> Only add the gender if it matters to the story.</p>
    </section>

    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <ul>
            <li><strong>Roles:</strong> Words like <em>mama</em> (parent) are gender-neutral.</li>
            <li><strong>Modification:</strong> Add <em>meli</em> or <em>mije</em> after the noun to specify.</li>
        </ul>
    </section>
    `,
    story: `
    <div class="story-pair">
        <p class="tp-line">mama meli mi li pona.</p>
        <p class="en-line">My mother is good.</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">mama mije mi li suli.</p>
        <p class="en-line">My father is big (important).</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">jan sama mi li ike!</p>
        <p class="en-line">My sibling is bad! (trouble)</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">ona li mije. ona li suli a!</p>
        <p class="en-line">He is a man. He is so big!</p>
    </div>
    `,
    quiz: [
        { 
            type: "builder", 
            q: "Build: <b>'Good wife.'</b>", 
            correctSentence: "meli pona", 
            words: ["meli", "pona", "li", "mije", "e"] 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'meli pona'</b>", 
            options: ["Good woman/Wife", "Good man", "Good person"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'jan tonsi'</b>", 
            options: ["Leader", "Non-binary/Trans person", "Warrior"], 
            ans: 1 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'mama sina'</b>", 
            options: ["Your parent", "My parent", "Parenting"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'Man / Husband'</b>", 
            options: ["mije", "meli", "jan"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "True or False: Toki Pona has separate words for 'He' and 'She'.", 
            options: ["True", "False (Use 'ona')"], 
            ans: 1 
        },
        { 
            type: "mc", 
            q: "Which is <b>INCORRECT</b>?", 
            options: ["ona li mije.", "ona mije.", "mije li pona."], 
            ans: 1 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'ona li suli'</b>", 
            options: ["They are big/important", "I am big", "You are big"], 
            ans: 0 
        }
    ]
};

const LESSON_04 = {
    id: "1.4",
    type: "lesson",
    title: "Addressing People & Commands",
    desc: "Learning how to call names and give orders using 'o'.",
    vocab: [
        { word: "o", type: "particle", def: "Hey! (Vocative) / Do! (Imperative)", ex: "jan o! (Hey person!)" },
        { word: "lape", type: "content word", def: "Sleep, rest, dormancy.", ex: "o lape. (Go to sleep.)" }
    ],
    grammar: `
    <section>
        <p>We have spent the first few lessons observing the world ("The person is good"). Now, we stop observing and start interacting. To speak <em>to</em> someone, or to tell them <em>to do</em> something, we use the particle <strong>o</strong>.</p>
    </section>

    <div class="grammar-box">
        <h3>1. The Vocative (Calling Names)</h3>
        <p>If you want to get someone's attention, you mark their name with <strong>o</strong>. Think of it as "Hey!" or "Oh!".</p>

        <div style="background: var(--primary-light); border: var(--border-w) solid var(--primary); padding: 1.5rem; border-radius: var(--radius-md); text-align: center; margin: 2rem 0; box-shadow: 6px 6px 0 var(--primary-border);">
            <strong style="color: var(--primary-dark); font-size: 1.2rem; display: block; margin-bottom: 0.5rem;">The Vocative Rule</strong>
            <p style="margin: 0; color: var(--color-slate-900);">
                [Person] + <span style="background: var(--advanced); color: white; padding: 2px 8px; border-radius: 4px;">o</span>
            </p>
        </div>

        <div class="features-grid" style="grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="feature-card" style="padding: 1rem; align-items: center; border-color: var(--primary);">
                <div style="font-size: 1.2rem; font-weight: 800;">jan Ken <span style="color: var(--advanced);">o</span>!</div>
                <div style="color: var(--text-muted); font-size: 0.9rem;">Hey Ken!</div>
            </div>
            <div class="feature-card" style="padding: 1rem; align-items: center; border-color: var(--primary);">
                <div style="font-size: 1.2rem; font-weight: 800;">mama <span style="color: var(--advanced);">o</span>...</div>
                <div style="color: var(--text-muted); font-size: 0.9rem;">Mom... / Dad...</div>
            </div>
        </div>
    </div>

    <div class="grammar-box" style="margin-top: 3rem;">
        <h3>2. The Imperative (Commands)</h3>
        <p>To give a command, put <strong>o</strong> before the verb. In this usage, <em>o</em> replaces <em>li</em>. It turns a fact ("You work") into a request ("Work!").</p>

        <div style="background: var(--accent-bg); border: var(--border-w) solid var(--accent); padding: 1.5rem; border-radius: var(--radius-md); text-align: center; margin: 2rem 0; box-shadow: 6px 6px 0 var(--accent-dark);">
            <strong style="color: var(--accent-dark); font-size: 1.2rem; display: block; margin-bottom: 0.5rem;">The Command Rule</strong>
            <p style="margin: 0; color: var(--color-slate-900);">
                <span style="background: var(--advanced); color: white; padding: 2px 8px; border-radius: 4px;">o</span> + [Verb]
            </p>
        </div>

        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--accent);">
                <span style="font-size: 1.5rem;">🛌</span>
                <div>
                    <div style="font-weight: 800; font-size: 1.1rem;"><span style="color: var(--advanced);">o</span> lape.</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">Go to sleep.</div>
                </div>
            </div>
            <div class="outline-item" style="border-left: 6px solid var(--accent);">
                <span style="font-size: 1.5rem;">🔨</span>
                <div>
                    <div style="font-weight: 800; font-size: 1.1rem;"><span style="color: var(--advanced);">o</span> toki!</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">Speak! / Talk!</div>
                </div>
            </div>
        </div>
    </div>

    <section style="margin-top: 3rem;">
        <h3>3. Putting it Together</h3>
        <p>Usually, you name the person AND give the command. The <strong>o</strong> sits between the person and the action.</p>

        <div style="background: var(--bg-body); padding: 1.5rem; border-radius: var(--radius-md); border: 2px dashed var(--border-color); text-align: center;">
            <div style="font-size: 1.3rem; font-weight: 800; margin-bottom: 1rem;">
                <span style="color: var(--primary-dark);">jan Ken</span> 
                <span style="color: var(--advanced);">o</span> 
                <span style="color: var(--accent-dark);">lape.</span>
            </div>
            <p style="margin: 0; font-size: 1rem; color: var(--text-main);">
                "Ken, sleep."
            </p>
            <div style="margin-top: 1rem; font-size: 0.8rem; color: var(--text-muted);">
                (Vocative + Command combined)
            </div>
        </div>
    </section>

    <section style="margin-top: 3rem;">
        <h3>4. The "Let's" Structure</h3>
        <p>If you use <strong>o</strong> with "we" (mi mute), it creates a suggestion ("Let's").</p>
        
        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--success);">
                <div style="width: 100%;">
                    <div style="font-weight: 800; font-size: 1.1rem;">mi mute <span style="color: var(--advanced);">o</span> toki.</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;"><strong>Let's</strong> talk. (We should talk).</div>
                </div>
            </div>
        </div>
    </section>

    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <ul>
            <li><strong>Vocative:</strong> <em>sina o!</em> (Hey you!)</li>
            <li><strong>Imperative:</strong> <em>o lape!</em> (Sleep!)</li>
            <li><strong>Substitution:</strong> In commands, <em>o</em> replaces <em>li</em>.</li>
        </ul>
    </section>
    `,
    story: `
    <div class="story-pair">
        <p class="tp-line">Child: "mama o! mi toki."</p>
        <p class="en-line">Child: "Hey Mom/Dad! I am talking."</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">Parent: "jan lili o. o toki."</p>
        <p class="en-line">Parent: "Hey child. Speak."</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">Parent: "o lape! lape li pona."</p>
        <p class="en-line">Parent: "Sleep! Sleep is good."</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">Child: "a... mi lape. pona."</p>
        <p class="en-line">Child: "Ah... I am sleeping. Good."</p>
    </div>
    `,
    quiz: [
        { 
            type: "builder", 
            q: "Build: <b>'Hey person!'</b>", 
            correctSentence: "jan o", 
            words: ["jan", "o", "li", "mi", "sina"] 
        },
        { 
            type: "builder", 
            q: "Build: <b>'Go to sleep!'</b>", 
            correctSentence: "o lape", 
            words: ["o", "lape", "li", "toki", "sina"] 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'jan Ken o lape.'</b>", 
            options: ["Ken is sleeping.", "Ken, sleep.", "Ken sleeps."], 
            ans: 1 
        },
        { 
            type: "mc", 
            q: "What does <b>'o'</b> replace in a command?", 
            options: ["mi", "li", "sina"], 
            ans: 1 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'mi mute o toki.'</b>", 
            options: ["We are talking.", "Let's talk.", "Talk to us."], 
            ans: 1 
        }
    ]
};

// UNIT 2 {REFINED}

const LESSON_05 = {
    id: "2.1",
    type: "lesson",
    title: "Objects & Causation",
    desc: "Using 'e' to interact with the rest of the world",
    vocab: [
        { word: "e",      type: "syntactical particle", def: "Marks the direct object.", ex: "mi moku e kili. (I eat fruit.)" },
        { word: "moku",   type: "content word", def: "To consume (food or liquid), food.", ex: "soweli li moku. (The animal eats.)" },
        { word: "lukin",  type: "content word/preverb", def: "See, look, watch, read, or eyes.", ex: "mi lukin e sina. (I see you.)" },
        { word: "pali",   type: "content word", def: "To do, work, make, product, task.", ex: "mi pali e tomo. (I build a house.)" },
        { word: "pana",   type: "content word", def: "To give, send, provide, submit.", ex: "mi pana e ijo. (I give a thing.)" },
        { word: "jo",     type: "content word", def: "To have, hold, carry, contain.", ex: "mi jo e ilo. (I have a tool.)" },
        { word: "pan",    type: "content word", def: "Starchy staple foods (rice, wheat, corn).", ex: "mi moku e pan. (I eat bread.)" },
        { word: "ilo",    type: "content word", def: "tool, device, implement, machine", ex: "mi jo e ilo. (I have a tool.)"}
    ],
    grammar: `
    <section>
        <p>In Unit 1, we learned how to describe things (e.g., "I am good"). Now, it is time to start <em>doing</em> things. We need to learn a way to express affecting the world around us.</p>
    </section>

    <div style="background: var(--advanced-bg); border-left: 6px solid var(--advanced); padding: 1.5rem; border-radius: var(--radius-md); margin: 2rem 0;">
        <strong style="color: var(--advanced); display: flex; align-items: center; gap: 8px; margin-bottom: 0.5rem;">
            <span style="font-size: 1.2rem;">💧</span> Fluid Parts of Speech
        </strong>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-main);">
            Remember: <strong>moku</strong> can be a noun ("food") or a verb ("eat"). The sentence structure tells you which one it is.
        </p>
    </div>

    <section>
        <h3>2. Grammar: The Direct Object "e"</h3>
        <p>In English, we just put the object after the verb ("I eat <strong>fruit</strong>"). In Toki Pona, we need the separator 'e'.</p>

        <div style="background: var(--success-bg); border: var(--border-w) solid var(--success); padding: 2rem; border-radius: var(--radius-lg); text-align: center; margin: 2rem 0; box-shadow: 6px 6px 0 var(--success-dark);">
            <strong style="color: var(--success-dark); font-size: 1.4rem; display: block; margin-bottom: 1rem;">The "e" Rule</strong>
            <p style="margin: 0; font-weight: 700; color: var(--success-dark); font-size: 1.1rem;">
                Use <span style="background: var(--success); color: white; padding: 2px 10px; border-radius: 4px;">e</span> before the object that receives the action.
            </p>
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; align-items: center; margin-bottom: 2rem; font-family: monospace; font-weight: 800;">
            <div style="background: var(--color-slate-200); padding: 8px 16px; border-radius: 12px;">Subject</div>
            <div style="color: var(--text-muted);">+</div>
            <div style="background: var(--primary-light); color: var(--primary-dark); padding: 8px 16px; border-radius: 12px; border: 1px dashed var(--primary);">(li)</div>
            <div style="color: var(--text-muted);">+</div>
            <div style="background: var(--color-slate-200); padding: 8px 16px; border-radius: 12px;">Verb</div>
            <div style="color: var(--success);">+</div>
            <div style="background: var(--success); color: white; padding: 8px 16px; border-radius: 12px; box-shadow: 0 4px 0 var(--success-dark);">e</div>
            <div style="color: var(--success);">+</div>
            <div style="background: var(--color-slate-200); padding: 8px 16px; border-radius: 12px;">Object</div>
        </div>

        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--success);">
                <span style="font-size: 1.5rem;">🍎</span>
                <div>
                    <div style="font-weight: 800; color: var(--text-main);">mi moku <span style="color: var(--success);">e</span> kili.</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">I eat fruit.</div>
                </div>
            </div>
            <div class="outline-item" style="border-left: 6px solid var(--success);">
                <span style="font-size: 1.5rem;">👀</span>
                <div>
                    <div style="font-weight: 800; color: var(--text-main);">ona li lukin <span style="color: var(--success);">e</span> telo.</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">She looks at the water.</div>
                </div>
            </div>
        </div>
    </section>

    <section style="margin-top: 3rem;">
        <h3>3. Putting it Together: <em>li</em> and <em>e</em></h3>
        <p>It is very important to keep these two particles distinct.</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem;">
            <div style="background: var(--primary-light); padding: 1rem; border-radius: var(--radius-sm); text-align: center;">
                <strong style="color: var(--primary-dark);">li</strong>
                <p style="margin: 0; font-size: 0.85rem;">Separates Subject & Verb</p>
            </div>
            <div style="background: var(--success-bg); padding: 1rem; border-radius: var(--radius-sm); text-align: center;">
                <strong style="color: var(--success-dark);">e</strong>
                <p style="margin: 0; font-size: 0.85rem;">Separates Verb & Object</p>
            </div>
        </div>

        <div style="overflow-x: auto; border: var(--border-w) solid var(--border-color); border-radius: var(--radius-lg); box-shadow: 6px 6px 0 var(--border-color);">
            <table style="width: 100%; border-collapse: collapse; background: white;">
                <thead>
                    <tr style="background: var(--color-slate-900); color: white;">
                        <th style="padding: 12px; text-align: left;">Subject</th>
                        <th style="padding: 12px; text-align: left;">Sentence</th>
                        <th style="padding: 12px; text-align: left;">Meaning</th>
                    </tr>
                </thead>
                <tbody style="font-size: 0.95rem;">
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 700;">mi / sina</td>
                        <td style="padding: 12px;">mi moku.</td>
                        <td style="padding: 12px; color: var(--text-muted);">I eat. / I am food.</td>
                    </tr>
                    <tr style="border-bottom: 4px solid var(--border-color); background: var(--success-bg);">
                        <td style="padding: 12px; font-weight: 700; color: var(--success-dark);">... + Object</td>
                        <td style="padding: 12px; font-weight: 700;">mi moku <span style="background: var(--success); color: white; padding: 0 4px; border-radius: 4px;">e</span> kili.</td>
                        <td style="padding: 12px; color: var(--success-dark);">I eat the fruit.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 700;">Other</td>
                        <td style="padding: 12px;">jan <span style="color: var(--primary);">li</span> moku.</td>
                        <td style="padding: 12px; color: var(--text-muted);">The person eats.</td>
                    </tr>
                    <tr style="background: var(--success-bg);">
                        <td style="padding: 12px; font-weight: 700; color: var(--success-dark);">... + Object</td>
                        <td style="padding: 12px; font-weight: 700;">jan <span style="color: var(--primary);">li</span> moku <span style="background: var(--success); color: white; padding: 0 4px; border-radius: 4px;">e</span> kili.</td>
                        <td style="padding: 12px; color: var(--success-dark);">The person eats the fruit.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
    
    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <div class="features-grid">
            <div class="feature-card">
                <span class="feature-icon">▶️</span>
                <strong>Action</strong>
                <p style="font-size: 0.9rem; margin: 0;"><strong>e</strong> marks the target of the action.</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">🏗️</span>
                <strong>Order</strong>
                <p style="font-size: 0.9rem; margin: 0;">Subj + li + Verb + e + Obj</p>
            </div>
        </div>
    </section>
    `,
    story: `
    <div class="story-pair">
        <p class="tp-line">mi jo e kili. mi moku e kili.</p>
        <p class="en-line">I have fruit. I eat the fruit.</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">sina jo e pan. o pana e pan!</p>
        <p class="en-line">You have bread. Give the bread!</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">jan li lukin e mi mute.</p>
        <p class="en-line">The person sees us.</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">ona li pali e tomo. tomo li suli.</p>
        <p class="en-line">She makes a house. The house is big.</p>
    </div>
    `,
    quiz: [
        { 
            type: "builder", 
            q: "Build: <b>'I eat fruit.'</b>", 
            correctSentence: "mi moku e kili", 
            words: ["mi", "kili", "e", "moku", "li", "soweli"] 
        },
        { 
            type: "builder", 
            q: "Build: <b>'You make a house.'</b>", 
            correctSentence: "sina pali e tomo", 
            words: ["sina", "pali", "e", "tomo", "li", "lukin"] 
        },
        { 
            type: "mc", 
            q: "What is <b>'kili'</b>?", 
            options: ["Fruit/Vegetable", "Meat", "Water"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Which word means <b>'To work/make'</b>?", 
            options: ["pali", "moku", "lukin"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "What does the particle <b>'e'</b> do?", 
            options: ["Marks the subject", "Marks the verb", "Marks the direct object"], 
            ans: 2 
        },
        { 
            type: "mc", 
            q: "Which sentence implies <b>'I am food'</b>?", 
            options: ["mi moku.", "mi moku e ijo.", "mi li moku."], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Which sentence implies <b>'I eat the person'</b>?", 
            options: ["mi moku jan.", "mi moku e jan.", "jan li moku e mi."], 
            ans: 1 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'mi pona e tomo'</b>.", 
            options: ["The house is good.", "I like the house.", "I fix (make good) the house."], 
            ans: 2 
        },
        { 
            type: "builder", 
            q: "Build: <b>'I fix the tool.'</b>", 
            correctSentence: "mi pona e ilo", 
            words: ["mi", "pona", "e", "ilo", "li", "ike"] 
        },
        { 
            type: "mc", 
            q: "Which is <b>INCORRECT</b>?", 
            options: ["mi lukin e sina.", "ona li pali e tomo.", "mi moku kili."], 
            ans: 2 
        },
        { 
            type: "builder", 
            q: "Build: <b>'The person sees the fruit.'</b>", 
            correctSentence: "jan li lukin e kili", 
            words: ["jan", "li", "lukin", "e", "kili", "soweli"] 
        }
    ]
};

const LESSON_06 = {
    id: "2.2",
    type: "lesson",
    title: "Modifiers & Comparisons",
    desc: "Building complex words and comparing things without 'better' or 'best'",
    vocab: [
        { word: "kili",   type: "content word", def: "Fruit, vegetable, mushroom.", ex: "kili li suwi. (Fruit is sweet.)" },
        { word: "ma",     type: "content word", def: "Land, earth, country, outdoors.", ex: "ma pona. (Good land.)" },
        { word: "suno",   type: "content word", def: "Sun, light, brightness.", ex: "suno li wawa. (The sun is strong.)" },
        { word: "telo",   type: "content word", def: "Water, liquid, wetness.", ex: "telo kili. (Fruit juice.)" },
        { word: "wawa",   type: "content word", def: "Power, strength, energy, intense.", ex: "telo wawa. (Coffee.)" },
        { word: "sama",   type: "content word", def: "Same, similar, like, as.", ex: "ona li sama mi. (She is like me.)" },
        { word: "ante",   type: "content word", def: "Different, other, changed.", ex: "ma ante. (Other land.)" }
    ],
    grammar: `
    <section>
        <p>Toki Pona has a very small vocabulary. To describe complex things, we use <strong>modification</strong>. In addition to learning to modify words, we will learn how to compare two things without words like "better" or "bigger."</p>
    </section>

    <div class="grammar-box">
        <h3>1. Grammar: The Order of Things</h3>
        <p>In English, we put the adjective <em>before</em> the noun ("<strong>Blue</strong> house"). In Toki Pona, the rule is the <strong>opposite</strong>.</p>

        <div style="background: var(--accent-bg); border: var(--border-w) solid var(--accent); padding: 1.5rem; border-radius: var(--radius-md); text-align: center; margin: 2rem 0; box-shadow: 6px 6px 0 var(--accent-dark);">
            <strong style="color: var(--accent-dark); font-size: 1.2rem; display: block; margin-bottom: 0.5rem;">The Modifier Rule</strong>
            <p style="margin: 0; color: var(--accent-dark);">
                Modifiers always come <strong>after</strong> the noun they describe.
            </p>
        </div>

        <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 2rem; font-family: monospace; font-weight: 800;">
            <div style="text-align: center;">
                <div style="background: var(--color-slate-800); color: white; padding: 10px 20px; border-radius: 12px;">NOUN</div>
                <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 5px;">(The Base)</div>
            </div>
            <div style="font-size: 1.5rem; color: var(--accent);">+</div>
            <div style="text-align: center;">
                <div style="background: var(--accent); color: white; padding: 10px 20px; border-radius: 12px; box-shadow: 0 4px 0 var(--accent-dark);">MODIFIER</div>
                <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 5px;">(The Detail)</div>
            </div>
        </div>
        
        <p style="text-align: center; color: var(--text-muted);">Think of it like a camera: First you point at the object (Noun), then you focus on the detail (Adjective).</p>
    </div>

    <section>
        <h3>2. Common Compound Words</h3>
        <p>By using the words you already know, you can create specific meanings.</p>

        <div style="overflow-x: auto; border: var(--border-w) solid var(--border-color); border-radius: var(--radius-lg); box-shadow: 6px 6px 0 var(--border-color);">
            <table style="width: 100%; border-collapse: collapse; background: white;">
                <thead>
                    <tr style="background: var(--accent-bg); color: var(--accent-dark);">
                        <th style="padding: 12px; text-align: left;">Phrase</th>
                        <th style="padding: 12px; text-align: left;">Literal Meaning</th>
                        <th style="padding: 12px; text-align: left;">Possible Meaning</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800;">jan <span style="color: var(--accent);">lili</span></td>
                        <td style="padding: 12px; font-size: 0.9em;">person small</td>
                        <td style="padding: 12px;">child</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800;">jan <span style="color: var(--accent);">pona</span></td>
                        <td style="padding: 12px; font-size: 0.9em;">person good</td>
                        <td style="padding: 12px;">friend</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800;">jan <span style="color: var(--accent);">ike</span></td>
                        <td style="padding: 12px; font-size: 0.9em;">person bad</td>
                        <td style="padding: 12px;">enemy</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800;">telo <span style="color: var(--accent);">suli</span></td>
                        <td style="padding: 12px; font-size: 0.9em;">water big</td>
                        <td style="padding: 12px;">ocean / sea</td>
                    </tr>
                      <tr>
                        <td style="padding: 12px; font-weight: 800;">telo <span style="color: var(--accent);">wawa</span></td>
                        <td style="padding: 12px; font-size: 0.9em;">water strong</td>
                        <td style="padding: 12px;">coffee / energy drink</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div style="background: var(--color-slate-100); border-left: 6px solid var(--text-muted); padding: 1rem; border-radius: var(--radius-md); margin-top: 1.5rem;">
            <strong style="color: var(--text-muted);">💡 Context is King</strong>
            <p style="margin: 0; font-size: 0.9rem;">
                <em>jan lili</em> usually means "child," but in a specific context, it could just mean "a short person."
            </p>
        </div>
    </section>

    <section style="margin-top: 3rem;">
        <h3>3. Comparisons (The Logic of 'sama' and 'ante')</h3>
        <p>Toki Pona has no words for "-er" (bigger) or "-est" (biggest). Instead, it forces you to state the facts clearly.</p>

        <div style="background: var(--primary-light); border-left: 6px solid var(--primary); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
            <strong style="color: var(--primary-dark); font-size: 1.2rem;">The "Two-Sentence" Rule</strong>
            <p style="margin: 0.5rem 0 0;">
                Don't say "A is bigger than B." <br>
                Say: <strong>"A is big. B is small."</strong>
            </p>
        </div>

        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--success);">
                <div style="width: 100%;">
                    <div style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 4px;">Comparison</div>
                    <div style="font-weight: 800; font-size: 1.1rem; margin-bottom: 4px;">
                        mi suli. sina lili.
                    </div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">I am big. You are small.<br>(I am older/bigger than you.)</div>
                </div>
            </div>
            
            <div class="outline-item" style="border-left: 6px solid var(--accent);">
                <div style="width: 100%;">
                    <div style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 4px;">Similarity</div>
                    <div style="font-weight: 800; font-size: 1.1rem; margin-bottom: 4px;">
                        kili ni li <span style="color: var(--accent);">sama</span> pipi.
                    </div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">This fruit is <strong>like</strong> a bug.</div>
                </div>
            </div>

            <div class="outline-item" style="border-left: 6px solid var(--error);">
                <div style="width: 100%;">
                    <div style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 4px;">Difference</div>
                    <div style="font-weight: 800; font-size: 1.1rem; margin-bottom: 4px;">
                        mi <span style="color: var(--error);">ante</span>.
                    </div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">I am different / I changed.</div>
                </div>
            </div>
        </div>
    </section>
    
    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <div class="features-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
            <div class="feature-card">
                <span class="feature-icon">🔙</span>
                <strong>After</strong>
                <p style="font-size: 0.9rem; margin: 0;">Modifiers come AFTER the noun.</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">⚖️</span>
                <strong>Compare</strong>
                <p style="font-size: 0.9rem; margin: 0;">State facts side-by-side. (A is big. B is small.)</p>
            </div>
        </div>
    </section>
    `,
    story: `
    <div class="story-pair">
        <p class="tp-line">mi lukin e tomo suli.</p>
        <p class="en-line">I see a mansion (big house)</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">sina pali e ilo suno.</p>
        <p class="en-line">You make a lamp (ligh tool).</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">kili ni li moku pona.</p>
        <p class="en-line">This fruit is tasty (good food).</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">telo suli li wawa.</p>
        <p class="en-line">The ocean (big water) is powerful.</p>
    </div>
    `,
    quiz: [
        { 
            type: "mc", 
            q: "How do you say <b>'Big land'</b>? (Remember the order!)", 
            options: ["suli ma", "ma suli", "ma li suli"], 
            ans: 1 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'telo wawa'</b>", 
            options: ["Weak water", "Strong fluid (Coffee/Energy Drink)", "Big river"], 
            ans: 1 
        },
        { 
            type: "mc", 
            q: "What is a <b>'jan lili'</b>?", 
            options: ["A short person / Child", "A bad person", "A friend"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Which word means <b>'Different'</b> or <b>'Other'</b>?", 
            options: ["sama", "ante", "suno"], 
            ans: 1 
        },
        { 
            type: "builder", 
            q: "Build: <b>'Good water.'</b>", 
            correctSentence: "telo pona", 
            words: ["telo", "pona", "li", "wawa", "e"] 
        },
        { 
            type: "builder", 
            q: "Build: <b>'This fruit is like the sun.'</b>", 
            correctSentence: "kili ni li sama suno", 
            words: ["kili", "ni", "li", "sama", "suno", "wawa"] 
        },
        { 
            type: "mc", 
            q: "How do you say <b>'I am bigger than you'</b>?", 
            options: ["mi suli mute sina.", "mi suli. sina lili.", "mi suli sama sina."], 
            ans: 1 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'ma suno'</b>", 
            options: ["Sunny land", "Land sun", "Darkness"], 
            ans: 0 
        }
    ]
};

const LESSON_07 = {
    id: "2.3",
    type: "lesson",
    title: "Modals 1: Want & Can",
    desc: "Expressing desires, needs, and abilities.",
    vocab: [
        { word: "wile",  type: "content word/preverb", def: "want, need, should, must, desire.", ex: "mi wile moku. (I want to eat.)" },
        { word: "ken",   type: "content word/preverb", def: "can, may, ability, possibility.", ex: "mi ken tawa. (I can go.)" },
        { word: "kute",  type: "content word", def: "Ear, hear, listen, obey.", ex: "o kute! (Listen!)" }
    ],
    grammar: `
    <section>
        <p>You can describe things and actions. Now, we introduce "desire" and "ability." These are called <strong>pre-verbs</strong> because they sit right before the main verb.</p>
    </section>

    <div class="grammar-box">
        <h3>1. Grammar: The Pre-verb Structure</h3>
        <p>In English, we use "to" (e.g., "I want <strong>to</strong> eat"). In this language, you simply place the modal word directly before the action.</p>

        <div style="background: var(--advanced-bg); border: var(--border-w) solid var(--advanced); padding: 1.5rem; border-radius: var(--radius-md); text-align: center; margin: 2rem 0; box-shadow: 6px 6px 0 var(--advanced-bg);">
            <strong style="color: var(--advanced); font-size: 1.2rem; display: block; margin-bottom: 0.5rem;">The Rule</strong>
            <p style="margin: 0; color: var(--color-slate-900); font-weight: 700;">
                [Subject] li <strong style="color: var(--advanced);">[wile/ken]</strong> [Verb]
            </p>
            <p style="font-size: 0.9rem; margin-top: 0.5rem; color: var(--text-muted);">Never put 'li' or 'e' between the modal and the verb!</p>
        </div>

        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--advanced);">
                <div style="width: 100%;">
                    <div style="font-weight: 800; font-size: 1.1rem; margin-bottom: 4px; color: var(--text-main);">
                        mi <span style="color: var(--advanced);">wile</span> moku.
                    </div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">I <strong>want to</strong> eat.</div>
                </div>
            </div>
            
            <div class="outline-item" style="border-left: 6px solid var(--advanced);">
                <div style="width: 100%;">
                    <div style="font-weight: 800; font-size: 1.1rem; margin-bottom: 4px; color: var(--text-main);">
                        ona li <span style="color: var(--advanced);">ken</span> lukin.
                    </div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">She <strong>can</strong> see.</div>
                </div>
            </div>
        </div>
    </div>

    <section style="margin-top: 3rem;">
        <h3>2. Stacking: The Full Sentence Structure</h3>
        <p>Let's combine everything: Subjects, Pre-verbs, Verbs, and Objects.</p>

        <div style="overflow-x: auto; border: var(--border-w) solid var(--border-color); border-radius: var(--radius-lg); box-shadow: 6px 6px 0 var(--border-color);">
            <table style="width: 100%; border-collapse: collapse; background: white;">
                <thead>
                    <tr style="background: var(--color-slate-900); color: white;">
                        <th style="padding: 12px; text-align: left;">Step</th>
                        <th style="padding: 12px; text-align: left;">Toki Pona</th>
                        <th style="padding: 12px; text-align: left;">Meaning</th>
                    </tr>
                </thead>
                <tbody style="font-size: 0.95rem;">
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 700;">1. Basic</td>
                        <td style="padding: 12px;">jan li lukin.</td>
                        <td style="padding: 12px; color: var(--text-muted);">The person looks.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 700;">2. + Modal</td>
                        <td style="padding: 12px;">jan li <strong style="color: var(--advanced);">wile</strong> lukin.</td>
                        <td style="padding: 12px; color: var(--text-muted);">The person <strong>wants to</strong> look.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 700;">3. + Object</td>
                        <td style="padding: 12px;">jan li wile lukin <strong style="color: var(--success);">e ijo</strong>.</td>
                        <td style="padding: 12px; color: var(--text-muted);">...look <strong>at the thing</strong>.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    <section style="margin-top: 3rem;">
        <h3>3. Noun vs. Verb</h3>
        <p>Remember, these words can also be regular nouns.</p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div style="background: var(--bg-body); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-color);">
                <strong>mi wile moku.</strong><br>
                <span style="color: var(--text-muted);">I want to eat. (Verb)</span>
            </div>
            <div style="background: var(--bg-body); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-color);">
                <strong>mi jo e wile.</strong><br>
                <span style="color: var(--text-muted);">I have a desire. (Noun)</span>
            </div>
        </div>
    </section>

    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <div class="features-grid" style="grid-template-columns: 1fr 1fr;">
            <div class="feature-card">
                <span class="feature-icon">🙏</span>
                <strong>wile</strong>
                <p style="font-size: 0.9rem; margin: 0;">Marks desire, need, or "should".</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">💪</span>
                <strong>ken</strong>
                <p style="font-size: 0.9rem; margin: 0;">Marks ability or permission.</p>
            </div>
        </div>
    </section>
    `,
    story: `
    <div class="story-pair">
        <p class="tp-line">Child: "mi wile lape. mi wile ala pali."</p>
        <p class="en-line">Child: "I want to sleep. I don't want to work."</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">Parent: "sina ken ala lape. suno li suli."</p>
        <p class="en-line">Parent: "You can't sleep. The sun is high/big."</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">Child: "mi ken ala pali. mi wawa ala."</p>
        <p class="en-line">Child: "I can't work. I have no energy (power)."</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">Parent: "jan lili o, o kute! sina wile pali."</p>
        <p class="en-line">Parent: "Hey child, listen! You must work."</p>
    </div>
    `,
    quiz: [
        { 
            type: "builder", 
            q: "Build: <b>'I can sleep.'</b>", 
            correctSentence: "mi ken lape", 
            words: ["mi", "ken", "lape", "li", "e", "wile"] 
        },
        { 
            type: "builder", 
            q: "Build: <b>'She wants to listen.'</b>", 
            correctSentence: "ona li wile kute", 
            words: ["ona", "li", "wile", "kute", "e", "ken"] 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'mi wile e ilo'</b>", 
            options: ["I want a tool (Noun)", "I want to work", "I use a tool"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'mi ken pali'</b>", 
            options: ["I can work", "I must work", "I work well"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Which is <b>INCORRECT</b>?", 
            options: ["mi wile moku.", "mi wile li moku.", "mi wile e moku."], 
            ans: 1 
        }
    ]
};

// UNIT 3 {REFINED}

const LESSON_08 = {
    id: "3.1",
    type: "lesson",
    title: "Questions & Knowledge",
    desc: "Asking 'Who?', 'What?', and Yes/No questions.",
    vocab: [
        { word: "ala",   type: "content word/particle", def: "No, not, zero, nothing.", ex: "mi moku ala. (I am not eating.)" },
        { word: "seme",  type: "syntactical particle", def: "What? Who? Which?", ex: "ni li seme? (What is this?)" },
        { word: "anu",   type: "particle", def: "Or (selection).", ex: "telo anu kili? (Water or fruit?)" },
        { word: "sona",  type: "content word/preverb", def: "Knowledge, wisdom, to know, know how to.", ex: "mi sona toki. (I know how to speak.)" }
    ],
    grammar: `
    <section>
        <p>Conversation is a two-way street. We need to be able to disagree, deny things, and ask questions. We also introduce the concept of "knowing."</p>
    </section>

    <div class="grammar-box" style="border-color: var(--error);">
        <h3 style="color: var(--error-text);">2. Negation (Saying No)</h3>
        <p>In English, we put "not" before the verb. In Toki Pona, the negation follows the word, just like an adjective.</p>

        <div style="background: var(--error-bg); border: var(--border-w) solid var(--error); padding: 1.5rem; border-radius: var(--radius-md); text-align: center; margin: 2rem 0; box-shadow: 6px 6px 0 var(--error);">
            <strong style="color: var(--error-text); font-size: 1.2rem; display: block; margin-bottom: 0.5rem;">The "ala" Rule</strong>
            <p style="margin: 0; color: var(--error-text);">
                Place <strong>ala</strong> immediately <strong>after</strong> the verb or adjective you want to negate.
            </p>
        </div>

        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--error);">
                <span style="font-size: 1.5rem;">🙅</span>
                <div>
                    <div style="font-weight: 800; font-size: 1.1rem; color: var(--text-main);">mi moku <span style="color: var(--error);">ala</span>.</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">I eat <strong>not</strong>. (I am not eating.)</div>
                </div>
            </div>
            
            <div class="outline-item" style="border-left: 6px solid var(--error);">
                <span style="font-size: 1.5rem;">👎</span>
                <div>
                    <div style="font-weight: 800; font-size: 1.1rem; color: var(--text-main);">sina pona <span style="color: var(--error);">ala</span>.</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">You are <strong>not</strong> good.</div>
                </div>
            </div>

             <div class="outline-item" style="border-left: 6px solid var(--error);">
                <span style="font-size: 1.5rem;">🚫</span>
                <div>
                    <div style="font-weight: 800; font-size: 1.1rem; color: var(--text-main);">jan li wile <span style="color: var(--error);">ala</span> lukin.</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">Person wants <strong>not</strong> to look.</div>
                </div>
            </div>
        </div>
    </div>

    <section style="margin-top: 3rem;">
        <h3>3. Yes/No Questions</h3>
        <p>Toki Pona does <strong>not</strong> use a rising tone (?) or word swaps ("Do you..."). Instead, it presents a binary choice.</p>

        <div style="background: var(--accent-bg); border: var(--border-w) solid var(--accent); padding: 1.5rem; border-radius: var(--radius-md); text-align: center; margin: 2rem 0; box-shadow: 6px 6px 0 var(--accent-dark);">
            <strong style="color: var(--accent-dark); font-size: 1.2rem; display: block; margin-bottom: 1rem;">The "Verb ala Verb" Structure</strong>
            <div style="display: inline-flex; align-items: center; gap: 8px; font-weight: 800; font-family: monospace; background: white; padding: 10px 20px; border-radius: 99px; border: 2px solid var(--accent);">
                <span>[Verb]</span>
                <span style="color: var(--error);">ala</span>
                <span>[Verb]</span>
                <span>?</span>
            </div>
            <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--accent-dark);">Literal: "Do you [Verb] or not [Verb]?"</p>
        </div>

        <div class="example-box" style="background: white; padding: 1.5rem; border-radius: var(--radius-md); border: 2px dashed var(--border-color);">
            <p style="margin-bottom: 1rem;"><strong>sina sona ala sona?</strong><br>
            <em style="color: var(--text-muted);">Literal:</em> You know not know?<br>
            <em style="color: var(--primary);">Translation:</em> Do you know?</p>
            
            <p style="margin: 0;"><strong>ona li pona ala pona?</strong><br>
            <em style="color: var(--text-muted);">Literal:</em> S/he good not good?<br>
            <em style="color: var(--primary);">Translation:</em> Is she okay?</p>
        </div>

        <div style="background: var(--color-slate-100); padding: 1.5rem; border-radius: var(--radius-md); margin-top: 1.5rem;">
            <h4 style="margin-top: 0;">How to Answer</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; text-align: center;">
                <div style="background: var(--success-bg); padding: 10px; border-radius: 8px; border: 2px solid var(--success);">
                    <strong style="color: var(--success-dark); display: block;">YES</strong>
                    <span style="font-size: 0.9rem;">Repeat the Verb</span><br>
                    <em style="font-weight: 800;">"sona."</em>
                </div>
                <div style="background: var(--error-bg); padding: 10px; border-radius: 8px; border: 2px solid var(--error);">
                    <strong style="color: var(--error-text); display: block;">NO</strong>
                    <span style="font-size: 0.9rem;">Verb + ala</span><br>
                    <em style="font-weight: 800;">"sona ala."</em>
                </div>
            </div>
        </div>
    </section>

    <div class="advanced-card" style="margin-top: 3rem; padding: 1.5rem; border-radius: var(--radius-md);">
        <h3 style="color: var(--advanced);">4. The Casual  Yes/No Question (anu seme?)</h3>
        <p>Another populat way to phrase a Yes/No question is attaching the phrase <strong>anu seme</strong>? to the end of the sentence.</p>

        <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="background: white; padding: 1rem; border-radius: var(--radius-sm); border-left: 4px solid var(--advanced); box-shadow: 2px 2px 0 var(--border-color);">
                <strong>sina lukin e mi <span style="color: var(--advanced); text-decoration: underline;">anu seme</span>?</strong>
                <p style="margin: 0; font-size: 0.9rem; color: var(--text-muted);">Are you looking at me?</p>
            </div>
            
            <div style="background: white; padding: 1rem; border-radius: var(--radius-sm); border-left: 4px solid var(--advanced); box-shadow: 2px 2px 0 var(--border-color);">
                <strong>jan ni li ken moku <span style="color: var(--advanced); text-decoration: underline;">anu seme</span>?</strong>
                <p style="margin: 0; font-size: 0.9rem; color: var(--text-muted);">Can that person eat?</p>
            </div>
        </div>
    </div>

    <div class="advanced-card" style="margin-top: 3rem; padding: 1.5rem; border-radius: var(--radius-md);">
        <h3 style="color: var(--advanced);">4. Open Questions (The "What")</h3>
        <p>If you don't want a Yes/No answer, use the variable <strong>seme</strong>. Place it where the answer belongs.</p>

        <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="background: white; padding: 1rem; border-radius: var(--radius-sm); border-left: 4px solid var(--advanced); box-shadow: 2px 2px 0 var(--border-color);">
                <strong>sina lukin e <span style="color: var(--advanced); text-decoration: underline;">seme</span>?</strong>
                <p style="margin: 0; font-size: 0.9rem; color: var(--text-muted);">You see [WHAT]?</p>
            </div>
            
            <div style="background: white; padding: 1rem; border-radius: var(--radius-sm); border-left: 4px solid var(--advanced); box-shadow: 2px 2px 0 var(--border-color);">
                <strong>jan <span style="color: var(--advanced); text-decoration: underline;">seme</span> li moku?</strong>
                <p style="margin: 0; font-size: 0.9rem; color: var(--text-muted);">[WHO] is eating?</p>
            </div>
        </div>
    </div>

    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <div class="features-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
            <div class="feature-card">
                <span class="feature-icon">🚫</span>
                <strong>Negation</strong>
                <p style="font-size: 0.9rem; margin: 0;">Add <strong>ala</strong> after the word.</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">☯️</span>
                <strong>Yes/No</strong>
                <p style="font-size: 0.9rem; margin: 0;">Verb + ala + Verb?</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">❓</span>
                <strong>Unknowns</strong>
                <p style="font-size: 0.9rem; margin: 0;">Use <strong>seme</strong> for "what/who".</p>
            </div>
        </div>
    </section>
    `,
    story: `
    <div class="story-pair">
        <p class="tp-line">jan A: "sina sona ala sona e jan ni?"</p>
        <p class="en-line">Person A: "Do you know this person?"</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">jan B: "mi sona ala. jan ni li seme?"</p>
        <p class="en-line">Person B: "I don't know. Who is this person?"</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">jan A: "ona li jan lawa. ona li pona ala pona?"</p>
        <p class="en-line">Person A: "She is the leader. Is she good?"</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">jan B: "ona li pona ala. ona li ike!"</p>
        <p class="en-line">Person B: "She is not good. She is bad!"</p>
    </div>
    `,
    quiz: [
        { 
            type: "builder", 
            q: "Build: <b>'What is this?'</b>", 
            correctSentence: "ni li seme", 
            words: ["ni", "li", "seme", "e", "jan", "kama"] 
        },
        { 
            type: "builder", 
            q: "Build: <b>'Who is that?'</b>", 
            correctSentence: "jan ni li seme", 
            words: ["jan", "ni", "li", "seme", "sina", "e"] 
        },
        { 
            type: "builder", 
            q: "Build: <b>'Do you want?' (Yes/No)</b>", 
            correctSentence: "sina wile ala wile", 
            words: ["sina", "wile", "ala", "wile", "li", "seme"] 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'mi sona ala'</b>", 
            options: ["I know nothing", "I don't know", "I know not to"], 
            ans: 1 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'mi ken toki'</b>", 
            options: ["I can speak", "I speak", "I try to speak"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'I want food.'</b>", 
            options: ["mi moku wile", "mi wile moku", "mi wile e moku"], 
            ans: 2 
        },
        { 
            type: "mc", 
            q: "Where does <b>'seme'</b> go?", 
            options: ["Always at the start", "Replaces the unknown word", "Always at the end"], 
            ans: 1 
        },
        { 
            type: "mc", 
            q: "How do you ask: <b>'Is it good?'</b> (Yes/No)", 
            options: ["ni li pona seme?", "ni li pona ala pona?", "ni li pona ala?"], 
            ans: 1 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'sina lon seme?'</b>", 
            options: ["Who are you?", "Where are you? (You are at what?)", "What are you?"], 
            ans: 1 
        },
        { 
            type: "mc", 
            q: "Which is <b>INCORRECT</b>? (Preverb order)", 
            options: ["mi wile moku.", "mi moku wile.", "mi ken moku."], 
            ans: 1 
        },
        { 
            type: "mc", 
            q: "True or False: <b>'wile'</b> can mean 'Need' and 'Must' too.", 
            options: ["True", "False"], 
            ans: 0 
        }
    ]
};

const LESSON_09 = {
    id: "3.2",
    type: "lesson",
    title: "Colors & Creativity",
    desc: "The 5-color palette and artistic expression.",
    vocab: [
        { word: "loje",    type: "content word", def: "Red, pink, orange.", ex: "kili loje. (Red fruit.)" },
        { word: "kule",    type: "content word", def: "Color, colorful, to paint.", ex: "kule li pona. (Color is good.)" },
        { word: "jelo",    type: "content word", def: "Yellow, light green.", ex: "suno jelo. (Yellow sun.)" },
        { word: "laso",    type: "content word", def: "Blue, green (Grue).", ex: "telo laso. (Blue water.)" },
        { word: "pimeja",  type: "content word", def: "Black, dark, shadow.", ex: "tomo pimeja. (Dark room.)" },
        { word: "walo",    type: "content word", def: "White, light, pale.", ex: "ma walo. (Snow/White land.)" },
        { word: "sitelen", type: "content word", def: "Image, picture, writing, to draw/write.", ex: "mi sitelen e kule. (I draw colors.)" },
        { word: "musi",    type: "content word", def: "Fun, art, game, entertainment.", ex: "kalama musi. (Music.)" }
    ],
    grammar: `
    <section>
        <p>Now we add vibrancy to our descriptions. We will cover the visual spectrum (<em>kule</em>) and how to talk about creating images.</p>
    </section>

    <section>
        <h3>1. Vocabulary: The Palette</h3>
        <p>Toki Pona uses a 5-color system. We group colors by their "energy" rather than specific wavelength.</p>

        <div class="features-grid" style="grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
            <div class="feature-card" style="padding: 1rem; border-color: var(--color-red-500);">
                <div style="width: 40px; height: 40px; background: var(--color-red-500); border-radius: 50%; margin-bottom: 0.5rem; box-shadow: 0 4px 0 var(--color-red-900);"></div>
                <strong style="color: var(--color-red-900);">loje</strong>
                <p style="font-size: 0.8rem; margin: 0; color: var(--text-muted);">Red</p>
            </div>
            <div class="feature-card" style="padding: 1rem; border-color: var(--color-yellow-400);">
                <div style="width: 40px; height: 40px; background: var(--color-yellow-400); border-radius: 50%; margin-bottom: 0.5rem; box-shadow: 0 4px 0 #b45309;"></div>
                <strong style="color: #b45309;">jelo</strong>
                <p style="font-size: 0.8rem; margin: 0; color: var(--text-muted);">Yellow</p>
            </div>
            <div class="feature-card" style="padding: 1rem; border-color: var(--color-sky-600);">
                <div style="width: 40px; height: 40px; background: var(--color-sky-600); border-radius: 50%; margin-bottom: 0.5rem; box-shadow: 0 4px 0 var(--color-sky-800);"></div>
                <strong style="color: var(--color-sky-800);">laso</strong>
                <p style="font-size: 0.8rem; margin: 0; color: var(--text-muted);">Blue/Green</p>
            </div>
            <div class="feature-card" style="padding: 1rem; border-color: var(--border-color);">
                <div style="width: 40px; height: 40px; background: white; border: 2px solid var(--border-color); border-radius: 50%; margin-bottom: 0.5rem;"></div>
                <strong style="color: var(--text-main);">walo</strong>
                <p style="font-size: 0.8rem; margin: 0; color: var(--text-muted);">White</p>
            </div>
            <div class="feature-card" style="padding: 1rem; border-color: var(--color-slate-900);">
                <div style="width: 40px; height: 40px; background: var(--color-slate-900); border-radius: 50%; margin-bottom: 0.5rem; box-shadow: 0 4px 0 black;"></div>
                <strong style="color: var(--color-slate-900);">pimeja</strong>
                <p style="font-size: 0.8rem; margin: 0; color: var(--text-muted);">Black</p>
            </div>
        </div>
    </section>

    <section>
        <h3>2. Grammar: Mixing Colors</h3>
        <p>Toki Pona handles color like mixing paint. You start with the base color and add another color as a modifier.</p>
        
        <div style="background: var(--bg-body); padding: 1.5rem; border-radius: var(--radius-md); border: var(--border-w) solid var(--border-color);">
            <div style="font-family: monospace; font-weight: 800; text-align: center; margin-bottom: 1.5rem;">
                [Noun] + [Base Color] + [Tint]
            </div>
            
            <div class="outline-grid">
                <div class="outline-item" style="border-left: 6px solid #8b5cf6;">
                    <div style="width: 100%;">
                        <div style="font-weight: 800;">loje laso</div>
                        <div style="color: var(--text-muted);">Red + Blue = <strong style="color: #8b5cf6;">Purple</strong></div>
                    </div>
                </div>
                <div class="outline-item" style="border-left: 6px solid #f97316;">
                    <div style="width: 100%;">
                        <div style="font-weight: 800;">loje jelo</div>
                        <div style="color: var(--text-muted);">Red + Yellow = <strong style="color: #f97316;">Orange</strong></div>
                    </div>
                </div>
                <div class="outline-item" style="border-left: 6px solid #f472b6;">
                    <div style="width: 100%;">
                        <div style="font-weight: 800;">loje walo</div>
                        <div style="color: var(--text-muted);">Red + White = <strong style="color: #f472b6;">Pink</strong></div>
                    </div>
                </div>
                <div class="outline-item" style="border-left: 6px solid #94a3b8;">
                    <div style="width: 100%;">
                        <div style="font-weight: 800;">pimeja walo</div>
                        <div style="color: var(--text-muted);">Black + White = <strong style="color: #94a3b8;">Grey</strong></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section style="margin-top: 3rem;">
        <h3>3. Art and Writing</h3>
        <p>The word <strong>sitelen</strong> is very versatile. It means any visual representation.</p>
        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--primary);">
                ✅ <strong>sitelen.</strong> (A picture/drawing.)
            </div>
            <div class="outline-item" style="border-left: 6px solid var(--primary);">
                ✅ <strong>sitelen.</strong> (Writing/text.)
            </div>
            <div class="outline-item" style="border-left: 6px solid var(--primary);">
                ✅ <strong>mi sitelen.</strong> (I am writing / I am drawing.)
            </div>
        </div>
    </section>
    
    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <div class="features-grid">
            <div class="feature-card">
                <span class="feature-icon">🎨</span>
                <strong>kule</strong>
                <p style="font-size: 0.9rem; margin: 0;">5 Core colors. Mix them for more.</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">📝</span>
                <strong>sitelen</strong>
                <p style="font-size: 0.9rem; margin: 0;">Draw, write, or create images.</p>
            </div>
        </div>
    </section>
    `,
    story: `
    <div class="story-pair">
        <p class="tp-line">mi sitelen e kasi laso. ni li musi.</p>
        <p class="en-line">I draw a green plant. This is fun.</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">suno li jelo. suno li wawa.</p>
        <p class="en-line">The sun is yellow. The sun is bright.</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">sina wile kule e tomo loje.</p>
        <p class="en-line">You want to paint the house red.</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">pimeja li wawa. mi ken ala lukin.</p>
        <p class="en-line">The darkness is strong. I cannot see.</p>
    </div>
    `,
    quiz: [
        { 
            type: "builder", 
            q: "Build: <b>'Yellow sun.'</b>", 
            correctSentence: "suno jelo", 
            words: ["suno", "jelo", "loje", "li", "e"] 
        },
        { 
            type: "builder", 
            q: "Build: <b>'I paint the house.'</b>", 
            correctSentence: "mi kule e tomo", 
            words: ["mi", "kule", "e", "tomo", "sitelen", "li"] 
        },
        { 
            type: "builder", 
            q: "Build: <b>'Dark room.'</b>", 
            correctSentence: "tomo pimeja", 
            words: ["tomo", "pimeja", "walo", "li", "e"] 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'laso'</b>", 
            options: ["Blue / Green", "Red", "Yellow"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'walo'</b>", 
            options: ["White / Light", "Black / Dark", "Colorful"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'sitelen'</b>", 
            options: ["Image / Writing / Symbol", "Sound", "Tool"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'Black / Dark'</b>", 
            options: ["pimeja", "walo", "jelo"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'Art / Fun / Game'</b>", 
            options: ["musi", "kule", "pali"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'To draw / To write'</b>", 
            options: ["sitelen", "kule", "toki"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "What color is <b>'laso jelo'</b>?", 
            options: ["Yellow-Green", "Purple", "Orange"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "What color is <b>'loje pimeja'</b>?", 
            options: ["Dark Red / Brown", "Pink", "Orange"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "What is <b>'kalama musi'</b>?", 
            options: ["Music (Entertaining sound)", "Speech", "Noise"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Which is <b>INCORRECT</b>? (Blue water)", 
            options: ["telo laso", "telo pi laso", "telo li laso (Sentence)"], 
            ans: 1 
        },
        { 
            type: "builder", 
            q: "Build: <b>'White paper.'</b>", 
            correctSentence: "lipu walo", 
            words: ["lipu", "walo", "pimeja", "e", "li"] 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'telo pimeja'</b>", 
            options: ["Oil / Ink / Dark liquid", "Clear water", "Milk"], 
            ans: 0 
        }
    ]
};

const LESSON_10 = {
    id: "3.3",
    type: "lesson",
    title: "Nature Walk (Animals)",
    desc: "Classifying the living world: Beasts, Birds, Fish, and Bugs.",
    vocab: [
        { word: "soweli",  type: "content word", def: "Land mammal, beast, warm-blooded creature.", ex: "soweli li moku. (The animal eats.)" },
        { word: "waso",    type: "content word", def: "Bird, flying creature.", ex: "waso li tawa sewi. (Bird flies up.)" },
        { word: "kala",    type: "content word", def: "Fish, marine creature.", ex: "kala li lon telo. (Fish is in water.)" },
        { word: "akesi",   type: "content word", def: "Reptile, amphibian, non-cute animal.", ex: "akesi lili. (Lizard.)" },
        { word: "pipi",    type: "content word", def: "Bug, insect, spider.", ex: "pipi mute. (Many bugs.)" },
        { word: "mu",      type: "content word", def: "Animal noise (Woof, Meow, Moo).", ex: "soweli li toki e mu. (The animal says mu.)" }
    ],
    grammar: `
    <section>
        <p>In this lesson, we will categorize the living world. We don't have separate words for "cat," "dog," or "eagle." Instead, we have broad categories based on where the creature lives and how it moves.</p>
    </section>

    <div class="features-grid" style="grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem; margin-bottom: 3rem;">
        <div class="feature-card" style="padding: 1rem;">
            <span style="font-size: 2.5rem;">🐾</span>
            <strong style="color: var(--text-main); margin-top: 0.5rem;">soweli</strong>
            <p style="font-size: 0.8rem; margin: 0; color: var(--text-muted);">Land Mammals</p>
        </div>
        <div class="feature-card" style="padding: 1rem;">
            <span style="font-size: 2.5rem;">🦅</span>
            <strong style="color: var(--text-main); margin-top: 0.5rem;">waso</strong>
            <p style="font-size: 0.8rem; margin: 0; color: var(--text-muted);">Flying Things</p>
        </div>
        <div class="feature-card" style="padding: 1rem;">
            <span style="font-size: 2.5rem;">🐟</span>
            <strong style="color: var(--text-main); margin-top: 0.5rem;">kala</strong>
            <p style="font-size: 0.8rem; margin: 0; color: var(--text-muted);">Swimming Things</p>
        </div>
        <div class="feature-card" style="padding: 1rem;">
            <span style="font-size: 2.5rem;">🦎</span>
            <strong style="color: var(--text-main); margin-top: 0.5rem;">akesi</strong>
            <p style="font-size: 0.8rem; margin: 0; color: var(--text-muted);">Reptiles / Frogs</p>
        </div>
        <div class="feature-card" style="padding: 1rem;">
            <span style="font-size: 2.5rem;">🐜</span>
            <strong style="color: var(--text-main); margin-top: 0.5rem;">pipi</strong>
            <p style="font-size: 0.8rem; margin: 0; color: var(--text-muted);">Bugs / Spiders</p>
        </div>
    </div>

    <section>
        <h3>2. The Art of Description</h3>
        <p>Since we don't have a specific word for "Bear," we have to build it using <strong>context</strong> and <strong>modifiers</strong>.</p>

        <div style="overflow-x: auto; border: var(--border-w) solid var(--border-color); border-radius: var(--radius-lg); box-shadow: 6px 6px 0 var(--border-color);">
            <table style="width: 100%; border-collapse: collapse; background: white;">
                <thead>
                    <tr style="background: var(--color-slate-900); color: white;">
                        <th style="padding: 12px; text-align: left;">Phrase</th>
                        <th style="padding: 12px; text-align: left;">Literal</th>
                        <th style="padding: 12px; text-align: left;">Could Mean...</th>
                    </tr>
                </thead>
                <tbody style="font-size: 0.95rem;">
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800;">soweli <span style="color: var(--accent);">suli</span></td>
                        <td style="padding: 12px;">Animal big</td>
                        <td style="padding: 12px; color: var(--text-muted);">Bear, Cow, Elephant</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800;">soweli <span style="color: var(--success);">pona</span></td>
                        <td style="padding: 12px;">Animal good</td>
                        <td style="padding: 12px; color: var(--text-muted);">Pet, Dog, Puppy</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800;">pipi <span style="color: var(--error);">ike</span></td>
                        <td style="padding: 12px;">Bug bad</td>
                        <td style="padding: 12px; color: var(--text-muted);">Mosquito, Cockroach</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div style="background: var(--primary-light); border-left: 6px solid var(--primary); padding: 1.5rem; border-radius: var(--radius-md); margin: 2rem 0;">
            <strong style="color: var(--primary-dark); font-size: 1.1rem; display: block; margin-bottom: 0.5rem;">👁️ The "Eye of the Beholder" Rule</strong>
            <p style="margin: 0; font-size: 0.95rem;">
                Descriptions are subjective. A <strong>soweli pona</strong> (good animal) might be a dog to you, but a delicious cow to someone else. Context is everything!
            </p>
        </div>
    </section>

    <section style="margin-top: 3rem;">
        <h3>3. Using Sentences in Nature</h3>
        <p>Let's combine these nouns with the grammar from previous lessons.</p>

        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--error);">
                <span style="font-size: 1.5rem;">🦁</span>
                <div style="width: 100%;">
                    <div style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 4px;">Scenario 1: Predator</div>
                    <div style="font-weight: 800; font-size: 1.1rem; margin-bottom: 4px;">
                        soweli <span style="color: var(--error);">ike</span> li wile moku e mi!
                    </div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">The <strong style="color: var(--error);">bad</strong> beast wants to eat me!</div>
                </div>
            </div>

            <div class="outline-item" style="border-left: 6px solid var(--primary);">
                <span style="font-size: 1.5rem;">🎣</span>
                <div style="width: 100%;">
                    <div style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 4px;">Scenario 2: Fisherman</div>
                    <div style="font-weight: 800; font-size: 1.1rem; margin-bottom: 4px;">
                        jan li wile lukin e <span style="color: var(--primary);">kala</span>.
                    </div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">The person wants to see/find <strong>fish</strong>.</div>
                </div>
            </div>
        </div>
    </section>

    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <div class="features-grid">
            <div class="feature-card">
                <span class="feature-icon">🧱</span>
                <strong>The Categories</strong>
                <p style="font-size: 0.9rem; margin: 0;">soweli, waso, kala, akesi, pipi.</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">🎨</span>
                <strong>Paint it</strong>
                <p style="font-size: 0.9rem; margin: 0;">Use modifiers like <em>suli, lili</em> to specify.</p>
            </div>
        </div>
    </section>
    `,
    story: `
    <div class="story-pair">
        <p class="tp-line">soweli li kama. soweli ni li seme?</p>
        <p class="en-line">An animal is coming. What is this animal?</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">mi sona ala. ona li suli a!</p>
        <p class="en-line">I don't know. It is so big!</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">ona li toki e mu. mi wile tawa!</p>
        <p class="en-line">It is making noise (mu). I want to leave!</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">o lukin! soweli li moku e pipi.</p>
        <p class="en-line">Look! The animal is eating bugs.</p>
    </div>
    `,
    quiz: [
        { 
            type: "builder", 
            q: "Build: <b>'What is this animal?'</b>", 
            correctSentence: "soweli ni li seme", 
            words: ["soweli", "ni", "li", "seme", "e", "jan"] 
        },
        { 
            type: "builder", 
            q: "Build: <b>'The bird is good.'</b>", 
            correctSentence: "waso li pona", 
            words: ["waso", "li", "pona", "soweli", "e", "mi"] 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'soweli'</b>", 
            options: ["Animal / Mammal", "Fish", "Bird"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'kala'</b>", 
            options: ["Fish / Marine Life", "Bug", "Lizard"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'akesi'</b>", 
            options: ["Reptile / Amphibian", "Cute animal", "Bird"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'waso'</b>", 
            options: ["Bird / Flying thing", "Fish", "Insect"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'pipi'</b>", 
            options: ["Bug / Insect / Spider", "Bird", "Snake"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "What does <b>'mu'</b> mean?", 
            options: ["Animal noise", "Music", "Food"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "What category is a <b>Frog</b>?", 
            options: ["akesi", "soweli", "kala"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "What category is a <b>Bat</b> (Flying mammal)?", 
            options: ["waso (usually)", "kala", "pipi"], 
            ans: 0 
        }
    ]
};

// UNIT 4 {REFINED}

const LESSON_11 = {
    id: "4.1",
    type: "lesson",
    title: "The Body",
    desc: "Anatomy and the physical self.",
    vocab: [
        { word: "luka",    type: "content word", def: "Hand, arm, five.", ex: "jan luka. (Five people.)" },
        { word: "noka",    type: "content word", def: "Foot, leg, bottom, lower part.", ex: "noka mi. (My foot.)" },
        { word: "uta",     type: "content word", def: "Mouth, lips, oral.", ex: "uta mi. (My mouth.)" },
        { word: "sijelo",  type: "content word", def: "Body, physical state, torso.", ex: "sijelo mi. (My body.)" },
        { word: "lawa",    type: "content word", def: "Head, mind, control, lead.", ex: "jan lawa. (Leader.)" },
        { word: "nena",    type: "content word", def: "Bump, nose, hill, button.", ex: "nena ma. (Hill.)" },
        { word: "selo",    type: "content word", def: "Skin, peel, outer layer, bark, shell.", ex: "selo mi. (My skin.)" }
    ],
    grammar: `
    <section>
        <p>Until now, we have discussed the world around us. Now, we turn the focus inward to the self. In this lesson, we will cover the physical form (<em>sijelo</em>).</p>
    </section>

    <section>
        <h3>1. Vocabulary: The Simplified Body</h3>
        <p>Toki Pona groups body parts based on functional limbs rather than anatomical precision.</p>

        <div style="overflow-x: auto; border: var(--border-w) solid var(--border-color); border-radius: var(--radius-lg); box-shadow: 6px 6px 0 var(--border-color); margin-bottom: 2rem;">
            <table style="width: 100%; border-collapse: collapse; background: white;">
                <thead style="background: var(--color-slate-900); color: white;">
                    <tr>
                        <th style="padding: 12px; text-align: left;">Word</th>
                        <th style="padding: 12px; text-align: left;">Core Meaning</th>
                        <th style="padding: 12px; text-align: left;">Extended Meaning</th>
                    </tr>
                </thead>
                <tbody style="font-size: 0.95rem;">
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800; color: var(--primary-dark);">lawa</td>
                        <td style="padding: 12px;">Head</td>
                        <td style="padding: 12px; color: var(--text-muted);">Mind, brain, leader, top</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800; color: var(--primary-dark);">luka</td>
                        <td style="padding: 12px;">Arm + Hand</td>
                        <td style="padding: 12px; color: var(--text-muted);">Touch, five</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800; color: var(--primary-dark);">noka</td>
                        <td style="padding: 12px;">Leg + Foot</td>
                        <td style="padding: 12px; color: var(--text-muted);">Bottom, support</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800; color: var(--primary-dark);">uta</td>
                        <td style="padding: 12px;">Mouth</td>
                        <td style="padding: 12px; color: var(--text-muted);">Lips, oral cavity</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; font-weight: 800; color: var(--primary-dark);">nena</td>
                        <td style="padding: 12px;">Bump</td>
                        <td style="padding: 12px; color: var(--text-muted);">Nose, chin, knee, elbow, hill</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div style="background: var(--primary-light); border-left: 6px solid var(--primary); padding: 1.5rem; border-radius: var(--radius-md); margin: 2rem 0;">
            <strong style="color: var(--primary-dark); display: block; margin-bottom: 0.5rem;">💡 Note on <em>lawa</em></strong>
            <p style="margin: 0; font-size: 0.95rem;">
                While <em>lawa</em> literally means "head," it is also the verb "to lead" or "to control." In Toki Pona, your head is literally your "controller."
            </p>
        </div>
    </section>

    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <div class="features-grid">
            <div class="feature-card">
                <span class="feature-icon">👤</span>
                <strong>sijelo</strong>
                <p style="font-size: 0.9rem; margin: 0;">Body parts map to functions.</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">🧠</span>
                <strong>lawa</strong>
                <p style="font-size: 0.9rem; margin: 0;">Head = Mind = Leader.</p>
            </div>
        </div>
    </section>
    `,
    story: `
    <div class="story-pair">
        <p class="tp-line">Trainer: "o tawa e luka! o tawa e noka!"</p>
        <p class="en-line">Trainer: "Move [your] arms! Move [your] legs!"</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">Athlete: "a... sijelo mi li wile lape."</p>
        <p class="en-line">Athlete: "Ah... my body wants to sleep."</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">Trainer: "lawa sina li wawa. o pali!"</p>
        <p class="en-line">Trainer: "Your mind is strong. Work!"</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">Athlete: "uta mi li toki ala. mi pali."</p>
        <p class="en-line">Athlete: "My mouth is not speaking. I am working."</p>
    </div>
    `,
    quiz: [
        { 
            type: "builder", 
            q: "Build: <b>'My hand is small.'</b>", 
            correctSentence: "luka mi li lili", 
            words: ["luka", "mi", "li", "lili", "suli", "noka"] 
        },
        { 
            type: "builder", 
            q: "Build: <b>'Lead the group.'</b>", 
            correctSentence: "o lawa e kulupu", 
            words: ["o", "lawa", "e", "kulupu", "li", "jan"] 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'noka'</b>", 
            options: ["Foot / Leg / Bottom", "Hand / Arm", "Head"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'uta'</b>", 
            options: ["Mouth", "Luka", "Noka"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'Skin / Bark / Shell'</b>", 
            options: ["selo", "sijelo", "sinpin"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'Head / To Lead'</b>", 
            options: ["lawa", "luka", "sewi"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "What does <b>'jan lawa'</b> mean?", 
            options: ["Head person (Leader)", "Hand person", "Tall person"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "If 'noka' is foot, what is <b>'noka tomo'</b>?", 
            options: ["The house's floor/bottom", "The house's roof", "The house's door"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Which is <b>INCORRECT</b>? (Possession)", 
            options: ["luka mi", "luka pi mi", "luka sina"], 
            ans: 1 
        },
        { 
            type: "builder", 
            q: "Build: <b>'My body is good.'</b>", 
            correctSentence: "sijelo mi li pona", 
            words: ["sijelo", "mi", "li", "pona", "ike", "e"] 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'I have two hands.'</b>", 
            options: ["mi jo e luka tu", "mi luka tu", "mi jo luka tu"], 
            ans: 0 
        }
    ]
};

const LESSON_12 = {
    id: "4.2",
    type: "lesson",
    title: "The `pi` Solution",
    desc: "How to group adjectives to create complex descriptions.",
    vocab: [
        { word: "pi",     type: "particle",     def: "Regroups modifiers (of).", ex: "poki pi telo wawa. (Cup of coffee.)" },
        { word: "kulupu", type: "content word", def: "Group, community, society.", ex: "kulupu toki. (Language community.)" },
        { word: "tenpo",  type: "content word", def: "Time, moment, duration, event.", ex: "tenpo suno. (Day/Sun-time.)" },
        { word: "kalama", type: "content word", def: "Sound, noise, voice.", ex: "kalama suli. (Loud noise.)" },
        { word: "linja",  type: "content word", def: "Line, string, hair, connection.", ex: "linja lawa. (Hair.)" },
        { word: "len",    type: "content word", def: "Cloth, clothing, hidden, layer.", ex: "len mi. (My clothes.)" },
        { word: "palisa", type: "content word", def: "Stick, rod, branch.", ex: "palisa kasi. (Branch.)" },
        { word: "sike",   type: "content word", def: "Circle, ball, wheel, round thing.", ex: "sike li tawa. (The wheel moves.)" },
        { word: "leko",   type: "content word", def: "Block, square, brick, stairs.", ex: "leko kiwen. (Brick.)" }
    ],
    grammar: `
    <section>
        <p>In Lesson 2.2, we learned that words naturally group from left to right. But sometimes, you don't want to describe the <em>whole phrase</em>. Sometimes you want to describe the description itself. To do this, we need to break the default order.</p>
    </section>

    <div class="advanced-card" style="margin: 2rem 0; padding: 2rem; background: var(--bg-card); box-shadow: 6px 6px 0 var(--advanced-bg);">
        <h3 style="color: var(--advanced); margin-top: 0;">2. Grammar: The "pi" Rule</h3>
        <p><strong>pi</strong> acts like an opening parenthesis <code>(</code> in math. It stops the normal Left-to-Right flow and treats the next words as a separate group.</p>

        <div style="background: var(--advanced-bg); border: 2px solid var(--advanced); padding: 1.5rem; border-radius: var(--radius-md); text-align: center; margin: 1.5rem 0;">
            <strong style="color: var(--advanced); font-size: 1.1rem; display: block; margin-bottom: 0.5rem;">The Regrouping Rule</strong>
            <p style="margin: 0; color: var(--color-slate-900);">
                Use <strong>pi</strong> when you want to modify a noun with a <em>compound concept</em> (a phrase of 2+ words).
            </p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr; gap: 1rem;">
            <div style="background: var(--color-slate-100); padding: 10px; border-radius: 8px; font-family: monospace;">
                <strong>No pi:</strong> A B C &nbsp;&nbsp;&nbsp;= <span style="color: var(--text-muted);">(A B) described by C</span>
            </div>
            <div style="background: var(--advanced-bg); padding: 10px; border-radius: 8px; font-family: monospace; border: 1px solid var(--advanced);">
                <strong>With pi:</strong> A <span style="color: var(--advanced); font-weight: 800;">pi</span> B C = <span style="color: var(--advanced);">A described by (B C)</span>
            </div>
        </div>
    </div>

    <div style="background: var(--error-bg); border-left: 6px solid var(--error); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 3rem;">
        <strong style="color: var(--error-text); display: block; margin-bottom: 0.5rem;">⚠️ The "Of" Trap</strong>
        <p style="margin: 0; font-size: 0.95rem; color: var(--error-text);">
            English speakers often translate "pi" as "of". This is dangerous. Do <strong>NOT</strong> use <em>pi</em> for simple possession.
            <br><br>
            ❌ <em>tomo pi mi</em> (Wrong!) <br>
            ✅ <em>tomo mi</em> (Right: "My house")
            <br><br>
            <strong>Rule of thumb:</strong> Only use <em>pi</em> if there are at least <strong>two words</strong> following it.
        </p>
    </div>

    <section>
        <h3>3. Case Study: The Loud Tool</h3>
        <p>Let's look at the difference between a "Big Instrument" and a "Loud Tool".</p>

        <div class="features-grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem;">
            
            <div class="feature-card" style="align-items: flex-start; text-align: left; border: 2px solid var(--border-color); box-shadow: none;">
                <div style="background: var(--color-slate-200); padding: 4px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 800; margin-bottom: 1rem;">DEFAULT</div>
                <strong style="font-size: 1.1rem; display: block; margin-bottom: 0.5rem;">ilo kalama suli</strong>
                <ol style="margin: 0 0 0 1.2rem; font-size: 0.9rem; line-height: 1.5; color: var(--text-muted);">
                    <li><code>ilo kalama</code> = Sound-tool (Instrument)</li>
                    <li><code>(Instrument) + suli</code> = A big instrument.</li>
                </ol>
                <div style="margin-top: 1rem; font-weight: 800; color: var(--text-main);">
                    🎹 Piano, Tuba
                </div>
            </div>

            <div class="feature-card" style="align-items: flex-start; text-align: left; border: 2px solid var(--advanced); background: var(--advanced-bg); box-shadow: 6px 6px 0 var(--advanced);">
                <div style="background: var(--advanced); color: white; padding: 4px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 800; margin-bottom: 1rem;">WITH PI</div>
                <strong style="font-size: 1.1rem; display: block; margin-bottom: 0.5rem; color: var(--advanced);">ilo pi kalama suli</strong>
                <ol style="margin: 0 0 0 1.2rem; font-size: 0.9rem; line-height: 1.5; color: var(--color-slate-800);">
                    <li><code>pi</code> groups the next words.</li>
                    <li><code>kalama suli</code> = Loud noise.</li>
                    <li><code>ilo + (Loud noise)</code> = Tool of loudness.</li>
                </ol>
                <div style="margin-top: 1rem; font-weight: 800; color: var(--advanced);">
                    📢 Megaphone, Siren
                </div>
            </div>
        </div>
    </section>

    <section style="margin-top: 3rem;">
        <h3>4. Case Study: The "Very Good" Person</h3>
        <p>How do we distinguish "Many good people" from "A very good person"?</p>

        <div style="overflow-x: auto; border: var(--border-w) solid var(--border-color); border-radius: var(--radius-lg); box-shadow: 6px 6px 0 var(--border-color);">
            <table style="width: 100%; border-collapse: collapse; background: white;">
                <thead>
                    <tr style="background: var(--color-slate-900); color: white;">
                        <th style="padding: 12px; text-align: left;">Phrase</th>
                        <th style="padding: 12px; text-align: left;">Grouping</th>
                        <th style="padding: 12px; text-align: left;">Translation</th>
                    </tr>
                </thead>
                <tbody style="font-size: 0.95rem;">
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800;">jan pona mute</td>
                        <td style="padding: 12px; color: var(--text-muted);">(jan pona) + mute</td>
                        <td style="padding: 12px;">Many good people.</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; font-weight: 800; color: var(--advanced);">jan pi pona mute</td>
                        <td style="padding: 12px; color: var(--text-muted);">jan + (pona mute)</td>
                        <td style="padding: 12px; color: var(--advanced);">A very good person.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <div class="features-grid">
            <div class="feature-card">
                <span class="feature-icon">✨</span>
                <strong>pi</strong>
                <p style="font-size: 0.9rem; margin: 0;">Use to regroup modifiers.</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">🚫</span>
                <strong>Not "Of"</strong>
                <p style="font-size: 0.9rem; margin: 0;">Don't use for simple possession.</p>
            </div>
        </div>
    </section>
    `,
    story: `
    <div class="story-pair">
        <p class="tp-line">mi jo e len pi loje wawa.</p>
        <p class="en-line">I have clothes of intense red (very red clothes).</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">o lukin e leko pi kiwen walo.</p>
        <p class="en-line">Look at the block of white hard-material (white brick).</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">sike pi tawa wawa li ike.</p>
        <p class="en-line">A wheel of fast movement (a spinning blade?) is dangerous.</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">kulupu pi toki pona li suli.</p>
        <p class="en-line">The community of Toki Pona (Good Language) is big.</p>
    </div>
    `,
    quiz: [
        { 
            type: "mc", 
            q: "Translate: <b>'leko'</b>", 
            options: ["Block / Square / Stairs", "Circle / Ball", "Line / Hair"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'sike'</b>", 
            options: ["Circle / Wheel / Round", "Square", "Stick"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'palisa'</b>", 
            options: ["Stick / Rod", "Hair", "Cloth"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'linja'</b>", 
            options: ["Line / String / Hair", "Stick", "Flat"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'len'</b>", 
            options: ["Clothing / Layer", "Body", "Color"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "What is <b>'ilo pi kalama suli'</b>?", 
            options: ["A loud tool (Siren)", "A big instrument (Piano)", "A broken tool"], 
            ans: 0 
        },
        { 
            type: "builder", 
            q: "Build: <b>'A very good house.'</b>", 
            correctSentence: "tomo pi pona mute", 
            words: ["tomo", "pi", "pona", "mute", "li", "e"] 
        },
        { 
            type: "mc", 
            q: "Which uses <b>'pi'</b> correctly?", 
            options: ["tomo pi loje (Red house)", "jan pi pona mute (Very good person)", "tomo pi mi (My house)"], 
            ans: 1 
        }
    ]
};

// UNIT 5 {REFINED}

const LESSON_13 = {
    id: "5.1",
    type: "lesson",
    title: "Location & Body Metaphors",
    desc: "Using body parts to describe where things are (in, on, under, behind).",
    vocab: [
        { word: "lon",    type: "preposition", def: "In, at, on, true, real, existing.", ex: "mi lon ma. (I am on the land.)" },
        { word: "insa",   type: "content word", def: "Inside, stomach, center, internal.", ex: "insa mi. (My stomach/inside.)" },
        { word: "sinpin", type: "content word", def: "Front, face, wall, vertical surface.", ex: "sinpin tomo. (Wall of house.)" },
        { word: "monsi",  type: "content word", def: "Back, rear, behind.", ex: "lon monsi. (At the back.)" },
        { word: "poka",   type: "content word", def: "Side, hip, nearby, next to.", ex: "lon poka mi. (By my side.)" },
        { word: "anpa",   type: "content word", def: "Down, bottom, floor, humble, low.", ex: "ona li anpa. (He is low/humble.)" },
        { word: "sewi",   type: "content word", def: "Up, top, sky, divine, sacred.", ex: "tomo sewi. (Tower/Church.)" },
        { word: "poki",   type: "content word", def: "Container, box, cup, bowl.", ex: "poki telo. (Water cup.)" },
        { word: "supa",   type: "content word", def: "Horizontal surface, furniture.", ex: "supa lape. (Bed.)" },
    ],
    grammar: `
    <section>
        <p>Everything happens somewhere. In English, we have specific words like <em>in, on, at, by, near, under, over</em>. In this language, we simplify all of these into one master preposition and a handful of <strong>body parts</strong>.</p>
    </section>

    <div class="grammar-box">
        <h3>1. Grammar: Simple Location with <em>lon</em></h3>
        <p>The word <strong>lon</strong> acts as a bridge between the subject and the place.</p>

        <div style="background: var(--primary-light); border: var(--border-w) solid var(--primary); padding: 1.5rem; border-radius: var(--radius-md); text-align: center; margin: 2rem 0; box-shadow: 6px 6px 0 var(--primary-border);">
            <strong style="color: var(--primary-dark); font-size: 1.2rem; display: block; margin-bottom: 0.5rem;">The "lon" Rule</strong>
            <p style="margin: 0; color: var(--primary-dark); font-family: monospace; font-size: 1.1rem; font-weight: 800;">
                [Subject] li <span style="background: var(--primary); color: white; padding: 2px 8px; border-radius: 4px;">lon</span> [Place]
            </p>
        </div>

        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--primary);">
                <span style="font-size: 1.5rem;">🏠</span>
                <div>
                    <div style="font-weight: 800; font-size: 1.1rem; color: var(--text-main);">mi <span style="color: var(--primary);">lon</span> tomo.</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">I am <strong>at</strong> home / in the house.</div>
                </div>
            </div>
            
            <div class="outline-item" style="border-left: 6px solid var(--primary);">
                <span style="font-size: 1.5rem;">🍎</span>
                <div>
                    <div style="font-weight: 800; font-size: 1.1rem; color: var(--text-main);">kili li <span style="color: var(--primary);">lon</span>.</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">The fruit <strong>exists</strong> / is here.</div>
                </div>
            </div>
        </div>
    </div>

    <section style="margin-top: 3rem;">
        <h3>2. Exact Location (The Body Map)</h3>
        <p>To get specific ("inside", "under"), we use body parts or directions as nouns. We treat the location as a "possession" of the object.</p>
        <p><em>Example: "Inside the house" = "At the house's stomach."</em></p>

        <div style="overflow-x: auto; border: var(--border-w) solid var(--border-color); border-radius: var(--radius-lg); box-shadow: 6px 6px 0 var(--border-color); margin-bottom: 2rem;">
            <table style="width: 100%; border-collapse: collapse; background: white;">
                <thead>
                    <tr style="background: var(--color-slate-900); color: white;">
                        <th style="padding: 12px; text-align: left;">English</th>
                        <th style="padding: 12px; text-align: left;">Metaphor</th>
                        <th style="padding: 12px; text-align: left;">Phrase</th>
                    </tr>
                </thead>
                <tbody style="font-size: 0.95rem;">
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800;">Inside</td>
                        <td style="padding: 12px; color: var(--text-muted;">At the stomach</td>
                        <td style="padding: 12px; font-family: monospace;">lon <strong>insa</strong> [noun]</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800;">Above / Top</td>
                        <td style="padding: 12px; color: var(--text-muted;">At the sky/head</td>
                        <td style="padding: 12px; font-family: monospace;">lon <strong>sewi</strong> [noun]</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800;">Below / Under</td>
                        <td style="padding: 12px; color: var(--text-muted;">At the feet/bottom</td>
                        <td style="padding: 12px; font-family: monospace;">lon <strong>anpa</strong> [noun]</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800;">Behind</td>
                        <td style="padding: 12px; color: var(--text-muted);">At the back</td>
                        <td style="padding: 12px; font-family: monospace;">lon <strong>monsi</strong> [noun]</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; font-weight: 800;">Beside</td>
                        <td style="padding: 12px; color: var(--text-muted);">At the hip/side</td>
                        <td style="padding: 12px; font-family: monospace;">lon <strong>poka</strong> [noun]</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="example-box">
            <h4>Examples in Context</h4>
            <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px dashed var(--border-color);">
                    <strong>soweli li lon <span style="color: var(--accent);">sewi</span> tomo.</strong><br>
                    <span style="font-size: 0.9rem; color: var(--text-muted);">The cat is on the <strong>roof</strong> (house-top).</span>
                </li>
                <li style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px dashed var(--border-color);">
                    <strong>jan lili li lon <span style="color: var(--accent);">anpa</span> pi jan suli.</strong><br>
                    <span style="font-size: 0.9rem; color: var(--text-muted);">The child is <strong>under</strong> (at the bottom of) the adult.</span>
                </li>
                <li>
                    <strong>mi lon <span style="color: var(--accent);">poka</span> sina.</strong><br>
                    <span style="font-size: 0.9rem; color: var(--text-muted);">I am <strong>with</strong> (at the side of) you.</span>
                </li>
            </ul>
        </div>
    </section>

    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <div class="features-grid">
            <div class="feature-card">
                <span class="feature-icon">📍</span>
                <strong>lon</strong>
                <p style="font-size: 0.9rem; margin: 0;">The universal preposition.</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">🧍</span>
                <strong>Body Map</strong>
                <p style="font-size: 0.9rem; margin: 0;">Use body parts (back, stomach) or directions for location.</p>
            </div>
        </div>
    </section>
    `,
    story: `
    <div class="story-pair">
        <p class="tp-line">soweli li lon sewi supa.</p>
        <p class="en-line">The animal is on top of the surface (table/bed).</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">ala. ona li lon anpa supa.</p>
        <p class="en-line">No. It is under the surface.</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">o lukin e insa poki ni.</p>
        <p class="en-line">Look at the inside of this box.</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">a! ona li lon monsi sina!</p>
        <p class="en-line">Ah! It is behind you!</p>
    </div>
    `,
    quiz: [
        { 
            type: "builder", 
            q: "Build: <b>'Look at my face.'</b>", 
            correctSentence: "o lukin e sinpin mi", 
            words: ["o", "lukin", "e", "sinpin", "mi", "monsi"] 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'monsi'</b>", 
            options: ["Back / Behind", "Front / Face", "Inside"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'insa'</b>", 
            options: ["Inside / Stomach", "Outside / Skin", "Head"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "What part of a house is <b>'sinpin tomo'</b>?", 
            options: ["Wall / Front", "Floor", "Roof"], 
            ans: 0 
        },
        { 
            type: "builder", 
            q: "Build: <b>'I am at the house.'</b>", 
            correctSentence: "mi lon tomo", 
            words: ["mi", "lon", "tomo", "li", "e", "tawa"] 
        },
        { 
            type: "mc", 
            q: "Which is correct? (At the house-top)", 
            options: ["lon sewi tomo", "lon sewi pi tomo", "lon tomo sewi"], 
            ans: 0 
        }
    ]
};

const LESSON_14 = {
    id: "5.2",
    type: "lesson",
    title: "Going There (Movement)",
    desc: "Direction, origin, and moving things vs. moving yourself.",
    vocab: [
        { word: "tawa",   type: "preposition", def: "To, towards, for, moving to.", ex: "mi tawa tomo. (I go to the house.)" },
        { word: "tan",    type: "preposition", def: "From, because of, origin.", ex: "mi kama tan ma. (I come from the land.)" },
        { word: "kama",   type: "content word/preverb", def: "To arrive, to come, to become.", ex: "mi kama. (I arrive.)" },
        { word: "weka",   type: "content word", def: "Away, absent, missing, remove.", ex: "ona li weka. (He is away.)" },
        { word: "awen",   type: "content word/preverb", def: "To stay, wait, keep doing.", ex: "o awen. (Wait.)" },
        { word: "nasin",  type: "content word", def: "Way, path, road, method, custom.", ex: "nasin pona. (The good path.)" }
    ],
    grammar: `
    <section>
        <p>In Lesson 5.1, we learned how to exist in a place using <em>lon</em>. Now, we are going to learn how to move between places. We will learn the words for "to" and "from," as well as the concepts of arrival and departure.</p>
    </section>

    <div class="grammar-box">
        <h3>1. Grammar: Direction (To and From)</h3>
        <p>Just like <em>lon</em>, <strong>tawa</strong> and <strong>tan</strong> act as bridges that you place after the main verb to show direction.</p>

        <div style="background: var(--primary-light); border: var(--border-w) solid var(--primary); padding: 1.5rem; border-radius: var(--radius-md); text-align: center; margin: 2rem 0; box-shadow: 6px 6px 0 var(--primary-border);">
            <strong style="color: var(--primary-dark); font-size: 1.2rem; display: block; margin-bottom: 1rem;">The Movement Rule</strong>
            
            <div style="display: flex; flex-direction: column; gap: 10px; font-family: monospace; font-weight: 800;">
                <div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
                    <span style="background: white; padding: 4px 8px; border-radius: 6px;">[Action]</span>
                    <span style="color: var(--primary-dark);">+</span>
                    <span style="background: var(--primary); color: white; padding: 4px 8px; border-radius: 6px; box-shadow: 0 4px 0 var(--primary-dark);">tawa</span>
                    <span style="color: var(--primary-dark);">+</span>
                    <span style="background: white; padding: 4px 8px; border-radius: 6px;">[Destination]</span>
                </div>
                
                <div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
                    <span style="background: white; padding: 4px 8px; border-radius: 6px;">[Action]</span>
                    <span style="color: var(--accent-dark);">+</span>
                    <span style="background: var(--accent); color: white; padding: 4px 8px; border-radius: 6px; box-shadow: 0 4px 0 var(--accent-dark);">tan</span>
                    <span style="color: var(--accent-dark);">+</span>
                    <span style="background: white; padding: 4px 8px; border-radius: 6px;">[Origin]</span>
                </div>
            </div>
        </div>

        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--primary);">
                <span style="font-size: 1.5rem;">🚶</span>
                <div>
                    <div style="font-weight: 800; font-size: 1.1rem;">mi <span style="color: var(--primary);">tawa</span> tomo.</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">I go <strong>to</strong> the house.</div>
                </div>
            </div>
            
            <div class="outline-item" style="border-left: 6px solid var(--accent);">
                <span style="font-size: 1.5rem;">🌎</span>
                <div>
                    <div style="font-weight: 800; font-size: 1.1rem;">ona li kama <span style="color: var(--accent);">tan</span> ma.</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">She comes <strong>from</strong> the land.</div>
                </div>
            </div>
        </div>
    </div>

    <section style="margin-top: 3rem;">
        <h3>2. Movement Verbs</h3>
        <p>While <em>tawa</em> implies the journey, <strong>kama</strong> and <strong>weka</strong> describe the result.</p>

        <div class="features-grid" style="grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            
            <div class="feature-card" style="align-items: flex-start; text-align: left; border-left: 6px solid var(--success);">
                <strong style="color: var(--success); font-size: 1.1rem; display: block; margin-bottom: 0.5rem;">kama (Arrival)</strong>
                <p style="font-size: 0.9rem; margin-bottom: 1rem;">Entering a state or place.</p>
                <div style="background: var(--bg-body); padding: 10px; border-radius: 8px;">
                    <strong style="display: block; color: var(--text-main);">mi kama.</strong>
                    <span style="font-size: 0.85rem; color: var(--text-muted);">I arrive / I am coming.</span>
                </div>
            </div>

            <div class="feature-card" style="align-items: flex-start; text-align: left; border-left: 6px solid var(--error);">
                <strong style="color: var(--error-text); font-size: 1.1rem; display: block; margin-bottom: 0.5rem;">weka (Departure)</strong>
                <p style="font-size: 0.9rem; margin-bottom: 1rem;">Distance, absence, or removal.</p>
                <div style="background: var(--bg-body); padding: 10px; border-radius: 8px;">
                    <strong style="display: block; color: var(--text-main);">mi <span style="color: var(--error);">weka</span> e ilo.</strong>
                    <span style="font-size: 0.85rem; color: var(--text-muted);">I remove (throw away) the tool.</span>
                </div>
            </div>
        </div>

        <div class="note" style="margin-top: 2rem;">
            <strong>Note on "Flying" & "Swimming":</strong><br>
            We don't have verbs for these. We use movement + context.<br>
            • <em>waso li tawa kon.</em> (Bird moves in air = flies.)<br>
            • <em>kala li tawa telo.</em> (Fish moves in water = swims.)
        </div>
    </section>

    <section style="margin-top: 3rem;">
        <h3>3. Grammar: "For" (Beneficiary)</h3>
        <p>The word <em>tawa</em> also covers the English concept of "for" (intended for a person).</p>
        
        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--advanced);">
                <span style="font-size: 1.5rem;">🎁</span>
                <div>
                    <div style="font-weight: 800; font-size: 1.1rem;">ni li <span style="color: var(--advanced);">tawa</span> sina.</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">This is <strong>for</strong> you.</div>
                </div>
            </div>
            <div class="outline-item" style="border-left: 6px solid var(--advanced);">
                <span style="font-size: 1.5rem;">👍</span>
                <div>
                    <div style="font-weight: 800; font-size: 1.1rem;">pona <span style="color: var(--advanced);">tawa</span> mi.</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">Good <strong>to</strong> me. (I like it).</div>
                </div>
            </div>
        </div>
    </section>

    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <div class="features-grid">
            <div class="feature-card">
                <span class="feature-icon">➡️</span>
                <strong>tawa</strong>
                <p style="font-size: 0.9rem; margin: 0;">To, towards, for.</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">⬅️</span>
                <strong>tan</strong>
                <p style="font-size: 0.9rem; margin: 0;">From, because of.</p>
            </div>
        </div>
    </section>
    `,
    story: `
    <div class="story-pair">
        <p class="tp-line">mi kama tan nasin suli.</p>
        <p class="en-line">I come from the big road.</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">mi tawa tomo. o awen!</p>
        <p class="en-line">I am going to the house. Wait!</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">jan lili li weka. mi wile lukin e ona.</p>
        <p class="en-line">The child is missing/away. I want to see him.</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">tomo ni li pona tawa mi.</p>
        <p class="en-line">This house is good to me (I like this house).</p>
    </div>
    `,
    quiz: [
        { 
            type: "builder", 
            q: "Build: <b>'I go to the house.'</b>", 
            correctSentence: "mi tawa tomo", 
            words: ["mi", "tawa", "tomo", "e", "li", "lon"] 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'mi tawa tomo'</b>", 
            options: ["I move the house", "I go to the house", "I like the house"], 
            ans: 1 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'mi tawa e tomo'</b> (Note the 'e')", 
            options: ["I go to the house", "I move the house", "The house moves"], 
            ans: 1 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'weka'</b>", 
            options: ["Away / Absent / Removed", "Here", "Near"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "How do you say <b>'Fly up'</b>?", 
            options: ["tawa sewi", "lon sewi", "sewi tawa"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "What does <b>'ni li pona tawa mi'</b> mean?", 
            options: ["This is good to me (I like it).", "I go to the good place.", "This comes from me."], 
            ans: 0 
        }
    ]
};

const LESSON_15 = {
    id: "5.3",
    type: "lesson",
    title: "Using Tools & Actions",
    desc: "How to use tools (kepeken) and manage objects (open/close/cut).",
    vocab: [
        { word: "kepeken", type: "content word/preposition", def: "Using, with, by means of, to use.", ex: "mi kepeken ilo. (I use a tool.)" },
        { word: "kipisi",  type: "content word", def: "To cut, split, slice, section.", ex: "ilo kipisi. (Knife/Scissors.)" },
        { word: "moli",    type: "content word", def: "Death, to die, to kill, dead.", ex: "o moli ala. (Don't kill.)" },
        { word: "open",    type: "content word", def: "Start, begin, open, turn on.", ex: "mi open e lupa. (I open the door.)" },
        { word: "pini",    type: "content word", def: "End, tip, finished, past, close, stop.", ex: "pali li pini. (Work is finished.)" }
    ],
    grammar: `
    <section>
        <p>In previous lessons, we learned where things are. Now, we will learn how to use them. Whether you are eating with a spoon, writing with a pen, or traveling via car, you use the same concept: the <strong>instrumental case</strong>.</p>
    </section>

    <div class="grammar-box">
        <h3>1. Grammar: <em>kepeken</em> as a Preposition</h3>
        <p>When you want to say you did something <strong>with</strong> a tool, place <em>kepeken</em> at the end of the sentence.</p>

        <div style="background: var(--success-bg); border: var(--border-w) solid var(--success); padding: 1.5rem; border-radius: var(--radius-md); text-align: center; margin: 2rem 0; box-shadow: 6px 6px 0 var(--success-dark);">
            <strong style="color: var(--success-dark); font-size: 1.2rem; display: block; margin-bottom: 1rem;">The Instrumental Rule</strong>
            <div style="font-family: monospace; font-weight: 800; display: inline-flex; flex-wrap: wrap; gap: 8px; justify-content: center;">
                <span style="background: white; padding: 4px 8px; border-radius: 6px;">[Main Sentence]</span>
                <span style="color: var(--success-dark);">+</span>
                <span style="background: var(--success); color: white; padding: 4px 8px; border-radius: 6px; box-shadow: 0 4px 0 var(--success-dark);">kepeken</span>
                <span style="color: var(--success-dark);">+</span>
                <span style="background: white; padding: 4px 8px; border-radius: 6px;">[The Tool]</span>
            </div>
        </div>

        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--success);">
                <span style="font-size: 1.5rem;">🍴</span>
                <div>
                    <div style="font-weight: 800; font-size: 1.1rem;">mi moku <span style="color: var(--success);">kepeken</span> ilo.</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">I eat <strong>using</strong> a tool (fork).</div>
                </div>
            </div>
            
            <div class="outline-item" style="border-left: 6px solid var(--success);">
                <span style="font-size: 1.5rem;">🔭</span>
                <div>
                    <div style="font-weight: 800; font-size: 1.1rem;">ona li lukin <span style="color: var(--success);">kepeken</span> ilo.</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">She looks <strong>with</strong> a tool (telescope).</div>
                </div>
            </div>
        </div>
    </div>

    <section style="margin-top: 3rem;">
        <h3>2. Grammar: <em>kepeken</em> as a Verb</h3>
        <p>Sometimes, "using" is the main action. Here, it functions just like <em>moku</em> or <em>lukin</em>.</p>

        <div style="background: var(--primary-light); border-left: 6px solid var(--primary); padding: 1.5rem; border-radius: var(--radius-md); margin: 1.5rem 0;">
             <strong style="color: var(--primary-dark); display: block; margin-bottom: 0.5rem;">Transitive Verb Structure</strong>
             <p style="margin: 0; font-family: monospace; font-weight: 800; font-size: 1.1rem;">
                mi <span style="color: var(--primary);">kepeken</span> <span style="background: var(--success); color: white; padding: 2px 8px; border-radius: 4px;">e</span> ilo.
             </p>
             <p style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-muted);">"I use the tool."</p>
        </div>
    </section>

    <section style="margin-top: 3rem;">
        <h3>3. Life and Death (moli)</h3>
        <p>The word <strong>moli</strong> is both an adjective (dead) and a transitive verb (kill).</p>
        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--error);">
                <strong>ona li moli.</strong>
                <p style="margin: 0; color: var(--text-muted);">He is dead / He dies.</p>
            </div>
            <div class="outline-item" style="border-left: 6px solid var(--error);">
                <strong>mi moli e pipi.</strong>
                <p style="margin: 0; color: var(--text-muted);">I kill the bug.</p>
            </div>
        </div>
    </section>

    <section style="margin-top: 3rem;">
        <h3>4. Start and Finish (Not Preverbs!)</h3>
        <p>It is tempting to say "I start eating." In Toki Pona, we avoid using <strong>open</strong> and <strong>pini</strong> as helper verbs because it creates ambiguity.</p>
        <p>Instead, use them as <strong>verbs</strong> (to open/end something) or <strong>adjectives</strong> (open/finished).</p>

        <div class="features-grid" style="grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="feature-card">
                <strong>mi open e lupa.</strong>
                <p style="font-size: 0.9rem; margin: 0; color: var(--text-muted);">I open the door. <br>(Transitive Verb)</p>
            </div>
            <div class="feature-card">
                <strong>moku li pini.</strong>
                <p style="font-size: 0.9rem; margin: 0; color: var(--text-muted);">The eating is finished. <br>(Adjective)</p>
            </div>
        </div>
        
        <div style="background: var(--error-bg); border-left: 6px solid var(--error); padding: 1rem; border-radius: var(--radius-md); margin-top: 1rem;">
            <strong style="color: var(--error-text);">⚠️ Avoid: "mi pini moku"</strong>
            <p style="margin: 0; font-size: 0.9rem; color: var(--text-muted);">This is confusing. It could mean "I finish eating" or "I finish the food." Use "moku li pini" instead.</p>
        </div>
    </section>

    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <div class="features-grid">
            <div class="feature-card">
                <span class="feature-icon">🛠️</span>
                <strong>kepeken</strong>
                <p style="font-size: 0.9rem; margin: 0;">Means "Using" (at end) or "To use" (as verb).</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">🚪</span>
                <strong>open / pini</strong>
                <p style="font-size: 0.9rem; margin: 0;">Use as main verbs (open X) or adjectives (X is finished).</p>
            </div>
        </div>
    </section>
    `,
    story: `
    <div class="story-pair">
        <p class="tp-line">mi kipisi e pan kepeken ilo.</p>
        <p class="en-line">I cut the bread using a tool.</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">moku mi li pini. mi open e lupa.</p>
        <p class="en-line">My food/eating is finished. I open the door.</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">a! pipi li moli lon anpa noka mi.</p>
        <p class="en-line">Ah! A bug is dead under my foot.</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">mi wile ala moli e ona! mi ike.</p>
        <p class="en-line">I didn't want to kill it! I am bad.</p>
    </div>
    `,
    quiz: [
        { 
            type: "builder", 
            q: "Build: <b>'I use a tool.'</b>", 
            correctSentence: "mi kepeken ilo", 
            words: ["mi", "kepeken", "ilo", "e", "li"] 
        },
        { 
            type: "builder", 
            q: "Build: <b>'I kill the bug.'</b>", 
            correctSentence: "mi moli e pipi", 
            words: ["mi", "moli", "e", "pipi", "li", "lape"] 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'To cut / Split'</b>", 
            options: ["kipisi", "tu", "pakala"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'Death / To die'</b>", 
            options: ["moli", "lape", "weka"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "How do you say: <b>'I eat using a tool.'</b>", 
            options: ["mi kepeken ilo", "mi moku kepeken ilo", "mi ilo kepeken"], 
            ans: 1 
        },
        { 
            type: "mc", 
            q: "What does <b>'pali li pini'</b> mean?", 
            options: ["The work is finished", "I stop working", "Working stop"], 
            ans: 0 
        }
    ]
};

// UNIT 6 {REFINED}

const LESSON_16 = {
    id: "6.1",
    type: "lesson",
    title: "Nature: Plants & Earth",
    desc: "The environment: Land, flora, fungi, and filth.",
    vocab: [
        { word: "ma",     type: "content word", def: "Land, earth, country, outdoors, territory.", ex: "ma li suli. (The land is big.)" },
        { word: "kasi",   type: "content word", def: "Plant, vegetation, herb, leaf, wood, tree.", ex: "kasi li laso. (The plant is green.)" },
        { word: "soko",   type: "content word", def: "Fungus, mushroom.", ex: "soko li lon anpa kasi. (Mushrooms are under the plants.)" },
        { word: "jaki",   type: "content word", def: "Dirty, gross, toxic, trash, pollution.", ex: "telo jaki. (Dirty water.)" },
        { word: "ko",     type: "content word", def: "Semi-solid, paste, powder, gum, mud.", ex: "ko jaki. (Mud/dirt.)" }
    ],
    grammar: `
    <section>
        <p>In Unit 3, we met the animals (<em>soweli, waso, kala</em>). Now, we look at where they live. We will explore the earth, the plants, and the texture of the ground.</p>
    </section>

    <div class="grammar-box">
        <h3>1. The Earth and the Ground</h3>
        <p>Toki Pona distinguishes between the solid ground (<em>ma</em>) and squishy or powdery substances (<em>ko</em>).</p>

        <div class="features-grid" style="grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="feature-card" style="align-items: flex-start; text-align: left; border-left: 6px solid var(--primary);">
                <strong style="color: var(--primary-dark); font-size: 1.2rem;">ma</strong>
                <p style="margin: 0.5rem 0; font-size: 0.9rem; color: var(--text-muted);">Land / Country</p>
                <p style="margin: 0; font-size: 0.9rem;">
                    Used for: Continents, nations, the outdoors, soil, fields.
                </p>
            </div>
            <div class="feature-card" style="align-items: flex-start; text-align: left; border-left: 6px solid var(--accent);">
                <strong style="color: var(--accent-dark); font-size: 1.2rem;">ko</strong>
                <p style="margin: 0.5rem 0; font-size: 0.9rem; color: var(--text-muted);">Squishy / Powder</p>
                <p style="margin: 0; font-size: 0.9rem;">
                    Used for: Mud, clay, sand, dough, paste.
                </p>
            </div>
        </div>
    </div>

    <section style="margin-top: 3rem;">
        <h3>2. Flora: Plants vs. Fungi</h3>
        <p>Unlike English, where "vegetable" implies food, Toki Pona groups living, non-moving things by biology.</p>

        <div style="overflow-x: auto; border: var(--border-w) solid var(--border-color); border-radius: var(--radius-lg); box-shadow: 6px 6px 0 var(--border-color);">
            <table style="width: 100%; border-collapse: collapse; background: white;">
                <thead>
                    <tr style="background: var(--color-slate-900); color: white;">
                        <th style="padding: 12px; text-align: left;">Word</th>
                        <th style="padding: 12px; text-align: left;">Meaning</th>
                        <th style="padding: 12px; text-align: left;">Examples</th>
                    </tr>
                </thead>
                <tbody style="font-size: 0.95rem;">
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800; color: var(--success);">kasi</td>
                        <td style="padding: 12px;">Plant Life</td>
                        <td style="padding: 12px; color: var(--text-muted);">Tree, flower, grass, leaf, wood.</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; font-weight: 800; color: var(--accent);">soko</td>
                        <td style="padding: 12px;">Fungus</td>
                        <td style="padding: 12px; color: var(--text-muted);">Mushroom, mold, yeast.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div style="background: var(--bg-body); padding: 1.5rem; border-radius: var(--radius-md); border: 2px dashed var(--success); margin-top: 1.5rem;">
            <strong style="color: var(--success-dark);">Building Words with <em>kasi</em></strong>
            <ul style="margin-top: 0.5rem; line-height: 1.6; color: var(--text-main);">
                <li><strong>kasi suli:</strong> Big plant (Tree).</li>
                <li><strong>kasi lili:</strong> Small plant (Grass/Herb).</li>
                <li><strong>kasi kule:</strong> Colorful plant (Flower).</li>
                <li><strong>kasi nasa:</strong> Crazy plant (Weed/Drug).</li>
            </ul>
        </div>
    </section>

    <section style="margin-top: 3rem;">
        <h3>3. Hygiene and Pollution (jaki)</h3>
        <p>The word <strong>jaki</strong> is strong. It implies something needs to be cleaned or avoided.</p>

        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--error);">
                <span style="font-size: 1.5rem;">🗑️</span>
                <div>
                    <div style="font-weight: 800; font-size: 1.1rem;">ko jaki</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">Dirty squishy stuff (Mud/Poop/Trash).</div>
                </div>
            </div>
            
            <div class="outline-item" style="border-left: 6px solid var(--error);">
                <span style="font-size: 1.5rem;">🧹</span>
                <div>
                    <div style="font-weight: 800; font-size: 1.1rem;">o weka e jaki!</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">Remove the dirt! (Clean up!)</div>
                </div>
            </div>
        </div>
    </section>

    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <div class="features-grid">
            <div class="feature-card">
                <span class="feature-icon">🌳</span>
                <strong>kasi</strong>
                <p style="font-size: 0.9rem; margin: 0;">Anything that grows photosynthetically.</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">🍄</span>
                <strong>soko</strong>
                <p style="font-size: 0.9rem; margin: 0;">Anything fungal (mushrooms).</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">💩</span>
                <strong>jaki</strong>
                <p style="font-size: 0.9rem; margin: 0;">Gross, dirty, toxic.</p>
            </div>
        </div>
    </section>
    `,
    story: `
    <div class="story-pair">
        <p class="tp-line">mi lon ma kasi.</p>
        <p class="en-line">I am in the forest (plant-land).</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">ko li lon noka mi. ni li jaki.</p>
        <p class="en-line">Mud/powder is on my feet. This is dirty.</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">mi lukin e soko lili.</p>
        <p class="en-line">I see a small mushroom.</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">soko li sama ala kasi.</p>
        <p class="en-line">Fungi are not like plants.</p>
    </div>
    `,
    quiz: [
        { 
            type: "builder", 
            q: "Build: <b>'The land is dirty.'</b>", 
            correctSentence: "ma li jaki", 
            words: ["ma", "li", "jaki", "ko", "e", "kasi"] 
        },
        { 
            type: "builder", 
            q: "Build: <b>'Remove the mud.'</b>", 
            correctSentence: "o weka e ko", 
            words: ["o", "weka", "e", "ko", "ma", "li"] 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'kasi'</b>", 
            options: ["Plant / Tree", "Land", "Fungus"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'soko'</b>", 
            options: ["Fungus / Mushroom", "Flower", "Dirt"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'jaki'</b>", 
            options: ["Dirty / Toxic", "Good", "Wet"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "What is <b>'ko'</b>?", 
            options: ["Semi-solid / Paste / Powder", "Hard rock", "Water"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "How do you say <b>'Forest'</b>?", 
            options: ["ma kasi (Plant land)", "ma suli", "ma jaki"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'Flower'</b>", 
            options: ["kasi kule", "kasi suli", "kasi jaki"], 
            ans: 0 
        }
    ]
};

const LESSON_17 = {
    id: "6.2",
    type: "lesson",
    title: "Physics: States of Matter",
    desc: "Solids, squishy things, gases, temperature, and materials.",
    vocab: [
        { word: "kiwen",  type: "content word", def: "Hard object, metal, rock, solid.", ex: "ilo kiwen. (Metal tool.)" },
        { word: "kon",    type: "content word", def: "Air, wind, spirit, soul, gas.", ex: "kon li lete. (The wind is cold.)" },
        { word: "seli",   type: "content word", def: "Fire, heat, warm, cooking.", ex: "telo seli. (Hot water.)" },
        { word: "lete",   type: "content word", def: "Cold, freeze, raw.", ex: "telo lete. (Cold water.)" },
        { word: "ko",     type: "content word", def: "Semi-solid, paste, powder, gum, mud.", ex: "ko jaki. (Mud/dirt.)" }
    ],
    grammar: `
    <section>
        <p>In this lesson, we break the physical world down into its fundamental states: Solid, Squishy, Liquid, Gas, and Temperature. Toki Pona categorizes objects by how they feel and behave.</p>
    </section>

    <section>
        <h3>1. The Four States of Matter</h3>
        <p>Everything physical falls into one of these categories.</p>

        <div style="overflow-x: auto; border: var(--border-w) solid var(--border-color); border-radius: var(--radius-lg); box-shadow: 6px 6px 0 var(--border-color); margin-bottom: 2rem;">
            <table style="width: 100%; border-collapse: collapse; background: white;">
                <thead>
                    <tr style="background: var(--color-slate-900); color: white;">
                        <th style="padding: 12px; text-align: left;">State</th>
                        <th style="padding: 12px; text-align: left;">Word</th>
                        <th style="padding: 12px; text-align: left;">Includes...</th>
                    </tr>
                </thead>
                <tbody style="font-size: 0.95rem;">
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px;"><span style="background: var(--color-slate-200); padding: 4px 8px; border-radius: 4px; font-weight: 800;">Solid (Hard)</span></td>
                        <td style="padding: 12px; color: var(--primary-dark); font-weight: 800;">kiwen</td>
                        <td style="padding: 12px; color: var(--text-muted);">Rock, metal, ice, glass, bone.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px;"><span style="background: #fed7aa; color: #9a3412; padding: 4px 8px; border-radius: 4px; font-weight: 800;">Semi-Solid</span></td>
                        <td style="padding: 12px; color: var(--accent-dark); font-weight: 800;">ko</td>
                        <td style="padding: 12px; color: var(--text-muted);">Clay, mud, dough, paste, powder.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px;"><span style="background: var(--color-sky-100); color: var(--primary-dark); padding: 4px 8px; border-radius: 4px; font-weight: 800;">Liquid</span></td>
                        <td style="padding: 12px; color: var(--primary-dark); font-weight: 800;">telo</td>
                        <td style="padding: 12px; color: var(--text-muted);">Water, juice, oil, blood.</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px;"><span style="background: var(--advanced-bg); color: var(--advanced); padding: 4px 8px; border-radius: 4px; font-weight: 800;">Gas</span></td>
                        <td style="padding: 12px; color: var(--primary-dark); font-weight: 800;">kon</td>
                        <td style="padding: 12px; color: var(--text-muted);">Air, smoke, steam, soul.</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div style="background: var(--primary-light); padding: 1rem; border-radius: var(--radius-md); border-left: 6px solid var(--primary);">
            <strong style="color: var(--primary-dark);">💡 Hard vs. Squishy</strong>
            <p style="margin: 0.5rem 0 0; font-size: 0.95rem;">
                If you knock on it and it hurts, it's <strong>kiwen</strong>. If you can mold it or it crumbles, it's <strong>ko</strong>.
            </p>
        </div>
    </section>

    <section style="margin-top: 3rem;">
        <h3>2. Thermodynamics (Hot vs Cold)</h3>
        <p>Temperature is binary. It is either energetic (<em>seli</em>) or lacking energy (<em>lete</em>).</p>

        <div class="features-grid" style="grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <div class="feature-card" style="align-items: flex-start; text-align: left; border: 2px solid var(--error);">
                <strong style="font-size: 1.2rem; color: var(--error-text);">seli</strong>
                <p style="margin: 0.5rem 0; font-weight: 800;">Fire / Heat / Reaction</p>
                <div style="font-size: 0.9rem; color: var(--text-muted);">
                    Used for cooking, fire, warmth, or chemical reactions.
                </div>
            </div>
            
            <div class="feature-card" style="align-items: flex-start; text-align: left; border: 2px solid var(--color-sky-400);">
                <strong style="font-size: 1.2rem; color: var(--color-sky-600);">lete</strong>
                <p style="margin: 0.5rem 0; font-weight: 800;">Cold / Ice / Raw</p>
                <div style="font-size: 0.9rem; color: var(--text-muted);">
                    Used for winter, ice, fridges, or uncooked food.
                </div>
            </div>
        </div>
    </section>

    <section style="margin-top: 3rem;">
        <h3>3. Describing Materials</h3>
        <p>By combining states and temperatures, we can describe specific materials.</p>

        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--primary);">
                <span style="font-size: 1.5rem;">❄️</span>
                <div>
                    <div style="font-weight: 800;">telo kiwen</div>
                    <div style="color: var(--text-muted);">Hard water (Ice).</div>
                </div>
            </div>
            <div class="outline-item" style="border-left: 6px solid var(--accent);">
                <span style="font-size: 1.5rem;">🧱</span>
                <div>
                    <div style="font-weight: 800;">ko kiwen</div>
                    <div style="color: var(--text-muted);">Hard paste (Concrete/Dried Clay).</div>
                </div>
            </div>
            <div class="outline-item" style="border-left: 6px solid var(--primary);">
                <span style="font-size: 1.5rem;">🌫️</span>
                <div>
                    <div style="font-weight: 800;">telo kon</div>
                    <div style="color: var(--text-muted);">Air water (Steam/Mist).</div>
                </div>
            </div>
        </div>
    </section>

    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <ul>
            <li><strong>kiwen:</strong> Hard / Solid.</li>
            <li><strong>ko:</strong> Squishy / Powder / Paste.</li>
            <li><strong>kon:</strong> Gas / Spirit / Air.</li>
            <li><strong>seli/lete:</strong> Hot/Cold.</li>
        </ul>
    </section>
    `,
    story: `
    <div class="story-pair">
        <p class="tp-line">suno li seli a!</p>
        <p class="en-line">The sun is so hot!</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">mi sitelen lon kiwen suli.</p>
        <p class="en-line">I am writing/drawing on a big rock.</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">mi pali e ko. ko li seli.</p>
        <p class="en-line">I make dough/paste. The dough is warm.</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">kon li lete. ni li pona tawa mi.</p>
        <p class="en-line">The wind is cold. This is good to me (I like it).</p>
    </div>
    `,
    quiz: [
        { 
            type: "mc", 
            q: "Translate: <b>'telo seli'</b>", 
            options: ["Hot water", "Cold water", "Ice"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Translate: <b>'Stone / Metal / Hard'</b>", 
            options: ["kiwen", "ko", "ma"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "What is <b>'ko'</b>?", 
            options: ["Squishy / Powder / Paste", "Hard Rock", "Air"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "Which word describes <b>Ice</b>?", 
            options: ["telo kiwen (Hard water)", "telo seli", "telo kon"], 
            ans: 0 
        },
        { 
            type: "mc", 
            q: "What is <b>'kon'</b>?", 
            options: ["Air / Spirit / Wind", "Fire", "Earth"], 
            ans: 0 
        },
        { 
            type: "builder", 
            q: "Build: <b>'The stone is hard.'</b>", 
            correctSentence: "kiwen li kiwen", 
            words: ["kiwen", "li", "kiwen", "ko", "e", "pona"] 
        }
    ]
};

const LESSON_18 = {
    id: "6.3",
    type: "lesson",
    title: "Conjunctions & Lists",
    desc: "How to connect ideas: 'And', 'But', and 'Also'.",
    vocab: [
        { word: "en",     type: "particle", def: "And (connects subjects only).", ex: "mi en sina. (Me and you.)" },
        { word: "taso",   type: "particle", def: "But, however, only.", ex: "mi wile, taso mi ken ala. (I want, but I can't.)" },
        { word: "kin",    type: "particle", def: "Too, also, indeed, emphasis.", ex: "mi kin. (Me too.)" }
    ],
    grammar: `
    <section>
        <p>Life isn't always a simple list of facts. Sometimes we need to connect ideas or contrast situations. In English, we use "and" for everything. Toki Pona is stricter: it has different strategies depending on <em>what</em> you are connecting.</p>
    </section>

    <div class="grammar-box">
        <h3>1. "And" for Subjects (en)</h3>
        <p>The word <strong>en</strong> is used <em>only</em> to join multiple subjects.</p>

        <div style="background: var(--accent-bg); border: var(--border-w) solid var(--accent); padding: 1.5rem; border-radius: var(--radius-md); text-align: center; margin: 2rem 0; box-shadow: 6px 6px 0 var(--accent-dark);">
            <strong style="color: var(--accent-dark); font-size: 1.2rem; display: block; margin-bottom: 1rem;">The "en" Rule</strong>
            <div style="font-family: monospace; font-weight: 800; display: inline-flex; flex-wrap: wrap; gap: 8px; justify-content: center;">
                <span style="background: white; padding: 4px 8px; border-radius: 6px;">[Subject 1]</span>
                <span style="background: var(--accent); color: white; padding: 4px 8px; border-radius: 6px; box-shadow: 0 4px 0 var(--accent-dark);">en</span>
                <span style="background: white; padding: 4px 8px; border-radius: 6px;">[Subject 2]</span>
                <span style="color: var(--primary);">+</span>
                <span style="background: var(--primary-light); color: var(--primary-dark); padding: 4px 8px; border-radius: 6px; border: 1px dashed var(--primary);">li</span>
                <span style="color: var(--primary);">...</span>
            </div>
        </div>

        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--accent);">
                <span style="font-size: 1.5rem;">🤝</span>
                <div>
                    <div style="font-weight: 800; font-size: 1.1rem;">mi <span style="color: var(--accent);">en</span> sina li moku.</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">Me <strong>and</strong> you eat.</div>
                </div>
            </div>
            <div class="outline-item" style="border-left: 6px solid var(--accent);">
                <span style="font-size: 1.5rem;">🐈</span>
                <div>
                    <div style="font-weight: 800; font-size: 1.1rem;">jan lili <span style="color: var(--accent);">en</span> soweli li lape.</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">The child <strong>and</strong> the animal sleep.</div>
                </div>
            </div>
        </div>
    </div>

    <div class="grammar-box" style="margin-top: 3rem;">
        <h3>2. "And" for Actions (Serial <em>li</em>)</h3>
        <p>If a subject performs multiple actions, you do <strong>not</strong> use <em>en</em>. Instead, you repeat the particle <strong>li</strong>.</p>

        <div style="background: var(--primary-light); border: var(--border-w) solid var(--primary); padding: 1.5rem; border-radius: var(--radius-md); text-align: center; margin: 2rem 0; box-shadow: 6px 6px 0 var(--primary-border);">
            <strong style="color: var(--primary-dark); font-size: 1.2rem; display: block; margin-bottom: 1rem;">The Repeated "li" Rule</strong>
            <p style="margin: 0; font-weight: 700; color: var(--primary-dark);">
                [Subject] <span style="background: var(--primary); color: white; padding: 2px 8px; border-radius: 4px;">li</span> [Action 1] <span style="background: var(--primary); color: white; padding: 2px 8px; border-radius: 4px;">li</span> [Action 2]
            </p>
        </div>

        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--primary);">
                <span style="font-size: 1.5rem;">🏃</span>
                <div>
                    <div style="font-weight: 800; font-size: 1.1rem;">ona <span style="color: var(--primary);">li</span> tawa <span style="color: var(--primary);">li</span> toki.</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">He walks <strong>and</strong> talks.</div>
                </div>
            </div>
        </div>

        <div style="background: var(--error-bg); border-left: 6px solid var(--error); padding: 1rem; border-radius: var(--radius-md); margin-top: 1.5rem;">
            <strong style="color: var(--error-text);">⚠️ The Trap</strong>
            <p style="margin: 0.5rem 0 0; font-size: 0.9rem; color: var(--text-main);">
                <span style="color: var(--error);">WRONG:</span> mi moku <strong>en</strong> lape.<br>
                <span style="color: var(--success);">RIGHT:</span> mi moku <strong>li</strong> lape. (I eat [and] sleep.)
            </p>
            <p style="margin-top: 0.5rem; font-size: 0.8rem; color: var(--text-muted);">
                Note: Even with 'mi', you must use 'li' for the second verb.
            </p>
        </div>
    </div>

    <section style="margin-top: 3rem;">
        <h3>3. "And" for Objects (Serial <em>e</em>)</h3>
        <p>Similarly, if you act upon multiple things, you repeat <strong>e</strong>.</p>

        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--success);">
                <span style="font-size: 1.5rem;">🌙</span>
                <div>
                    <div style="font-weight: 800; font-size: 1.1rem;">mi lukin <span style="color: var(--success);">e</span> suno <span style="color: var(--success);">e</span> mun.</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">I see the sun <strong>and</strong> the moon.</div>
                </div>
            </div>
        </div>
    </section>

    <section style="margin-top: 3rem;">
        <h3>4. "But" (taso) and "Also" (kin)</h3>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div style="background: var(--accent-bg); padding: 1rem; border-radius: 8px;">
                <strong style="color: var(--accent-dark);">taso (But)</strong>
                <p style="font-size: 0.9rem; margin-top: 0.5rem;">
                    Use at the start of a sentence for contrast.
                </p>
                <div style="font-weight: 800; margin-top: 0.5rem;">
                    mi wile. <span style="color: var(--accent);">taso</span> mi ken ala.
                </div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">I want. But I can't.</div>
            </div>

            <div style="background: var(--success-bg); padding: 1rem; border-radius: 8px;">
                <strong style="color: var(--success-dark);">kin (Also)</strong>
                <p style="font-size: 0.9rem; margin-top: 0.5rem;">
                    Use after a word to emphasize or add "too".
                </p>
                <div style="font-weight: 800; margin-top: 0.5rem;">
                    mi <span style="color: var(--success);">kin</span> tawa.
                </div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">I <strong>also</strong> go.</div>
            </div>
        </div>
    </section>

    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <div class="features-grid">
            <div class="feature-card">
                <span class="feature-icon">🤝</span>
                <strong>en</strong>
                <p style="font-size: 0.9rem; margin: 0;">Connects <strong>Subjects</strong> only.</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">🔁</span>
                <strong>li / e</strong>
                <p style="font-size: 0.9rem; margin: 0;">Repeat particles to connect verbs/objects.</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">🛑</span>
                <strong>taso</strong>
                <p style="font-size: 0.9rem; margin: 0;">Means "But" (conjunction) or "Only" (modifier).</p>
            </div>
        </div>
    </section>
    `,
    story: `
    <div class="story-pair">
        <p class="tp-line">mi en sina li tawa.</p>
        <p class="en-line">You and I go.</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">mi wile moku taso mi jo ala e mani.</p>
        <p class="en-line">I want to eat, but I have no money.</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">ona li toki li musi.</p>
        <p class="en-line">He talks and has fun (is entertaining).</p>
    </div>

    <div class="story-pair">
        <p class="tp-line">mi moku e kili e pan.</p>
        <p class="en-line">I eat fruit and bread.</p>
    </div>
    `,
    quiz: [
        { type: "mc",      q: "Translate: <b>'mi kin'</b>", options: ["Me too / Indeed", "My kin", "I can"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'I want, but I can't.'</b>", options: ["mi wile taso mi ken ala", "mi wile anu mi ken ala", "mi wile kin mi ken ala"], ans: 0 },
        { type: "mc",      q: "How do you say <b>'Fruit AND bread'</b> (Objects)?", options: ["kili en pan", "kili e pan", "e kili e pan"], ans: 2 },
        { type: "mc",      q: "How do you say <b>'Me AND you'</b> (Subjects)?", options: ["mi en sina", "mi li sina", "mi e sina"], ans: 0 },
        { type: "mc",      q: "Which particle connects <b>multiple verbs</b>?", options: ["en", "li", "e"], ans: 1 },
        { type: "mc",      q: "Which particle connects <b>multiple subjects</b>?", options: ["en", "li", "o"], ans: 0 },
        { type: "mc",      q: "Which is <b>INCORRECT</b>? (Connecting objects)", options: ["mi moku e kili e pan", "mi moku e kili en pan", "mi moku e kili li pan"], ans: 1 },
        { type: "builder", q: "Build: <b>'I eat and sleep.'</b>", correctSentence: "mi moku li lape", words: ["mi", "moku", "li", "lape", "en", "e"] }
    ]
};

// UNIT 7

const LESSON_19 = {
    id: "7.1",
    type: "lesson",
    title: "Setting the Time",
    desc: "",
    vocab: [
        { word: "la",    type: "particle", def: "Context marker (When... / In the context of...)", ex: "tenpo ni la mi lape. (Now, I sleep.)" },
        { word: "mun",   type: "content word", def: "Moon, star, planet, night sky object.", ex: "mun li loje. (The moon is red.)" }
    ],
    grammar: `
    <section>
        <p>We have arrived at the "boss level" of Toki Pona grammar: the particle <strong>la</strong>. It simplifies all context—time, conditions, and causes—into a single separator. In this lesson, we will focus strictly on <strong>Time</strong>.</p>
    </section>

    <div class="grammar-box">
        <h3>1. The Context Particle (<em>la</em>)</h3>
        <p><strong>la</strong> acts as a comma. It separates the "Context" (Time) from the "Main Sentence" (Action).</p>

        <div style="background: var(--advanced-bg); border: var(--border-w) solid var(--advanced); padding: 1.5rem; border-radius: var(--radius-md); text-align: center; margin: 2rem 0; box-shadow: 6px 6px 0 var(--advanced-bg);">
            <strong style="color: var(--advanced); font-size: 1.2rem; display: block; margin-bottom: 1rem;">The "la" Rule</strong>
            <div style="font-family: monospace; font-weight: 800; display: inline-flex; flex-wrap: wrap; gap: 8px; justify-content: center; align-items: center;">
                <span style="background: white; padding: 6px 12px; border-radius: 8px; border: 2px dashed var(--advanced);">[Time Phrase]</span>
                <span style="background: var(--advanced); color: white; padding: 6px 12px; border-radius: 8px; box-shadow: 0 4px 0 rgba(0,0,0,0.2);">la</span>
                <span style="background: white; padding: 6px 12px; border-radius: 8px; border: 2px solid var(--primary);">[Main Sentence]</span>
            </div>
        </div>

        <div style="display: grid; gap: 1rem;">
            <div class="outline-item" style="border-left: 6px solid var(--advanced);">
                <div style="width: 100%;">
                    <div style="font-weight: 800; font-size: 1.1rem;">
                        <span style="color: var(--text-muted);">tenpo ni</span> <span style="color: var(--advanced);">la</span> <span style="color: var(--primary-dark);">mi moku.</span>
                    </div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">
                        [Time This] <strong>la</strong> [I eat]. <br>
                        <em>Translation:</em> Now (at this time), I eat.
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section style="margin-top: 3rem;">
        <h3>2. Building Time Phrases</h3>
        <p>To use <em>la</em> effectively, we need to construct phrases using <strong>tenpo</strong> (time).</p>

        <div class="features-grid" style="grid-template-columns: 1fr 1fr 1fr; gap: 1rem;">
            <div class="feature-card" style="padding: 1rem; border-color: var(--text-muted);">
                <span style="font-size: 1.5rem; opacity: 0.5;">⏪</span>
                <strong style="display: block; margin-top: 0.5rem; color: var(--text-muted);">tenpo pini</strong>
                <p style="margin: 0; font-size: 0.8rem;">The Past<br>(Finished time)</p>
            </div>
            <div class="feature-card" style="padding: 1rem; border-color: var(--primary);">
                <span style="font-size: 1.5rem;">⬇️</span>
                <strong style="display: block; margin-top: 0.5rem; color: var(--primary);">tenpo ni</strong>
                <p style="margin: 0; font-size: 0.8rem;">The Present<br>(This time)</p>
            </div>
            <div class="feature-card" style="padding: 1rem; border-color: var(--accent);">
                <span style="font-size: 1.5rem;">⏩</span>
                <strong style="display: block; margin-top: 0.5rem; color: var(--accent);">tenpo kama</strong>
                <p style="margin: 0; font-size: 0.8rem;">The Future<br>(Coming time)</p>
            </div>
        </div>
        
        <div style="margin-top: 1rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div style="background: var(--color-sky-100); padding: 10px; border-radius: 8px; text-align: center;">
                <strong style="color: var(--color-sky-800);">tenpo suno</strong><br>Daytime
            </div>
            <div style="background: var(--color-slate-800); color: white; padding: 10px; border-radius: 8px; text-align: center;">
                <strong>tenpo pimeja</strong><br>Nighttime
            </div>
        </div>
    </section>

    <section style="margin-top: 3rem;">
        <h3>3. Putting it Together</h3>
        <p>In English, we often put the time at the end ("I eat now"). In Toki Pona, the time usually comes first.</p>

        <div class="example-box">
            <p><strong>tenpo suno la jan li pali.</strong><br>
            <em>Literal:</em> [Daytime] (context) [People work].<br>
            <em>Translation:</em> People work during the day.</p>
            
            <p><strong>tenpo pimeja la mi lape.</strong><br>
            <em>Literal:</em> [Night] (context) [I sleep].<br>
            <em>Translation:</em> At night, I sleep.</p>
        </div>
    </section>

    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <ul>
            <li><strong>la:</strong> Separates Context from Sentence.</li>
            <li><strong>Structure:</strong> [Time] + <strong>la</strong> + [Sentence].</li>
        </ul>
    </section>
    `,
    story: `
        <div class="story-box">
            <p style="font-size: 1.25rem; line-height: 1.8;">
                <span style="color: var(--text-main);">tenpo ni <strong>la</strong> mi lape.</span> <span style="font-size: 0.9rem; color: var(--text-muted);">(Now I sleep.)</span><br>
                <span style="color: var(--text-main);">tenpo kama <strong>la</strong> mi tawa.</span> <span style="font-size: 0.9rem; color: var(--text-muted);">(In the future I will go.)</span><br>
                <span style="color: var(--text-main);">tenpo pimeja <strong>la</strong> mun li lon.</span> <span style="font-size: 0.9rem; color: var(--text-muted);">(At night, the moon is present.)</span>
            </p>
        </div>
    `,
    quiz: [
        { type: "builder", q: "Build: <b>'Now (At this time), I sleep.'</b>", correctSentence: "tenpo ni la mi lape", words: ["tenpo", "ni", "la", "mi", "lape", "li"] },
        { type: "mc",      q: "Translate: <b>'tenpo ni'</b>", options: ["Time is this", "Now (This time)", "Past time"], ans: 1 },
        { type: "mc",      q: "What does <b>'tenpo pini'</b> mean?", options: ["Past time (History)", "Future time", "Now"], ans: 0 },
        { type: "mc",      q: "What does <b>'tenpo kama'</b> mean?", options: ["Coming time (Future)", "Past time", "Now"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Moon / Star'</b>", options: ["mun", "suno", "kon"], ans: 0 },
        { type: "mc",      q: "What does <b>'la'</b> do here?", options: ["Connects two subjects", "Marks the direct object", "Sets the time context"], ans: 2 }
    ]
};

const LESSON_20 = {
    id: "7.2",
    type: "lesson",
    title: "Simple Numbers",
    desc: "",
    vocab: [
        { word: "nanpa", type: "particle", def: "Number, count, ordinal marker.", ex: "jan nanpa wan. (First person.)" },
        { word: "wan",   type: "content word", def: "One, unit, unite, join.", ex: "jan wan. (One person.)" },
        { word: "tu",    type: "content word", def: "Two, pair, divide, separate.", ex: "jan tu. (Two people.)" },
        { word: "mute",  type: "content word", def: "Many, multiple, 3+, very.", ex: "jan mute. (Many people.)" },
        { word: "ale",   type: "content word", def: "All, everything, 100, universe.", ex: "jan ale. (Everyone.)" }
    ],
    grammar: `
    <section>
        <p>Mathematics in Toki Pona is a philosophical statement. In English, we care deeply about the difference between 15 items and 16 items. In Toki Pona, the difference is negligible. The language encourages you to stop counting and start experiencing the quantity.</p>
    </section>

    <section>
        <h3>1. The "Simple" Count</h3>
        <p>In the traditional system, there are strictly only words for one, two, and "a lot."</p>

        <div style="overflow-x: auto; border: var(--border-w) solid var(--border-color); border-radius: var(--radius-lg); box-shadow: 6px 6px 0 var(--border-color); margin-bottom: 2rem;">
            <table style="width: 100%; border-collapse: collapse; background: white;">
                <thead style="background: var(--color-slate-900); color: white;">
                    <tr>
                        <th style="padding: 12px; text-align: left;">Word</th>
                        <th style="padding: 12px; text-align: left;">Number</th>
                        <th style="padding: 12px; text-align: left;">Concept</th>
                    </tr>
                </thead>
                <tbody style="font-size: 0.95rem;">
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800; color: var(--primary-dark);">wan</td>
                        <td style="padding: 12px;">1</td>
                        <td style="padding: 12px; color: var(--text-muted);">Singularity, unity.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800; color: var(--primary-dark);">tu</td>
                        <td style="padding: 12px;">2</td>
                        <td style="padding: 12px; color: var(--text-muted);">Duality, separation.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800; color: var(--primary-dark);">mute</td>
                        <td style="padding: 12px;">3+</td>
                        <td style="padding: 12px; color: var(--text-muted);">Many, a bunch.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800; color: var(--advanced);">ale</td>
                        <td style="padding: 12px;">∞ / All</td>
                        <td style="padding: 12px; color: var(--text-muted);">Everything, completeness.</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; font-weight: 800; color: var(--error);">ala</td>
                        <td style="padding: 12px;">0</td>
                        <td style="padding: 12px; color: var(--text-muted);">Nothing, absence.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="note">
            <strong>The "mute" Philosophy:</strong><br>
            If you have three apples, you have <em>kili mute</em>. If you have a thousand apples, you have <em>kili mute</em>. The focus is on the abundance, not the digit.
        </div>
    </section>

    <section style="margin-top: 3rem;">
        <h3>2. Numbers as Adjectives</h3>
        <p>Numbers act exactly like regular adjectives. They go <strong>after</strong> the noun they modify.</p>

        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--primary);">
                <div style="width: 100%;">
                    <div style="font-weight: 800;">jan <span style="color: var(--primary);">wan</span></div>
                    <div style="color: var(--text-muted);">One person.</div>
                </div>
            </div>
            <div class="outline-item" style="border-left: 6px solid var(--primary);">
                <div style="width: 100%;">
                    <div style="font-weight: 800;">soweli <span style="color: var(--primary);">tu</span></div>
                    <div style="color: var(--text-muted);">Two animals.</div>
                </div>
            </div>
            <div class="outline-item" style="border-left: 6px solid var(--primary);">
                <div style="width: 100%;">
                    <div style="font-weight: 800;">tomo <span style="color: var(--primary);">mute</span></div>
                    <div style="color: var(--text-muted);">Many houses (A city).</div>
                </div>
            </div>
        </div>
    </section>

    <div class="grammar-box" style="margin-top: 3rem;">
        <h3>3. Ordinals (Using <em>nanpa</em>)</h3>
        <p>To turn a number into an order (First, Second, Third), we use the word <strong>nanpa</strong>.</p>

        <div style="background: var(--advanced-bg); border: var(--border-w) solid var(--advanced); padding: 1.5rem; border-radius: var(--radius-md); text-align: center; margin: 2rem 0; box-shadow: 6px 6px 0 var(--advanced-bg);">
            <strong style="color: var(--advanced); font-size: 1.2rem; display: block; margin-bottom: 0.5rem;">The Ordinal Rule</strong>
            <p style="margin: 0; color: var(--color-slate-900);">
                [Noun] + <span style="background: var(--advanced); color: white; padding: 2px 8px; border-radius: 4px;">nanpa</span> + [Number]
            </p>
        </div>

        <div class="features-grid" style="grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <div class="feature-card" style="align-items: flex-start; text-align: left; border: 2px solid var(--border-color); box-shadow: none;">
                <div style="background: var(--color-slate-200); padding: 4px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 800; margin-bottom: 1rem;">QUANTITY</div>
                <strong style="font-size: 1.2rem; display: block; margin-bottom: 0.5rem;">jan tu</strong>
                <p style="margin: 0; color: var(--text-muted);">Two people.</p>
                <div style="margin-top: 0.5rem; font-size: 1.5rem;">👤 👤</div>
            </div>

            <div class="feature-card" style="align-items: flex-start; text-align: left; border: 2px solid var(--advanced); background: var(--advanced-bg); box-shadow: 6px 6px 0 var(--advanced);">
                <div style="background: var(--advanced); color: white; padding: 4px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 800; margin-bottom: 1rem;">ORDER</div>
                <strong style="font-size: 1.2rem; display: block; margin-bottom: 0.5rem; color: var(--advanced);">jan nanpa tu</strong>
                <p style="margin: 0; color: var(--color-slate-800);">The 2nd person.</p>
                <div style="margin-top: 0.5rem; font-size: 1.5rem; opacity: 0.5;">👤 <span style="opacity: 1; filter: drop-shadow(0 0 4px var(--advanced));">👤</span> 👤</div>
            </div>
        </div>
    </div>

    <section style="margin-top: 3rem;">
        <h3>4. A Note on Precision</h3>
        <p>You can combine words (<em>tu wan</em> = 3), but generally, we prefer "mute" (many). Ask yourself: <strong>Does the exact number really matter?</strong></p>
    </section>

    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <div class="features-grid">
            <div class="feature-card">
                <span class="feature-icon">1️⃣</span>
                <strong>nanpa</strong>
                <p style="font-size: 0.9rem; margin: 0;">Makes numbers into labels (1st, 2nd).</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">🌳</span>
                <strong>mute</strong>
                <p style="font-size: 0.9rem; margin: 0;">3 or more = Many.</p>
            </div>
        </div>
    </section>
    `,
    story: `
        <div class="story-box">
            <p style="font-size: 1.25rem; line-height: 1.8;">
                tenpo ni la soweli <strong>mute</strong> li kama.<br>
                soweli <strong>tu</strong> li suli.<br>
                soweli <strong>nanpa wan</strong> li wile moku e sina.<br>
                soweli <strong>nanpa tu</strong> li wile moku e mi.<br>
                tenpo lili la soweli <strong>ale</strong> li tawa.
            </p>
        </div>
    `,
    quiz: [
        { type: "builder", q: "Build: <b>'Two people'</b>", correctSentence: "jan tu", words: ["jan", "tu", "wan", "nanpa", "li"] },
        { type: "builder", q: "Build: <b>'Five things'</b>", correctSentence: "ijo luka", words: ["ijo", "luka", "tu", "mute", "e"] },
        { type: "mc",      q: "What number is <b>'tu wan'</b>?", options: ["1", "3 (2+1)", "21"], ans: 1 },
        { type: "mc",      q: "What is <b>'mute'</b> as a number?", options: ["10", "3+", "100"], ans: 1 },
        { type: "mc",      q: "Translate: <b>'jan nanpa wan'</b>", options: ["One person", "The first person", "Person number one"], ans: 1 },
        { type: "mc",      q: "Translate: <b>'ilo nanpa tu'</b>", options: ["Two tools", "The second tool", "Tool number two"], ans: 1 },
        { type: "builder", q: "Build: <b>'The first book (Book number one).'</b>", correctSentence: "lipu nanpa wan", words: ["lipu", "nanpa", "wan", "tu", "li"] },
        { type: "mc",      q: "What is <b>'ale'</b>?", options: ["100 / All / Everything", "Zero", "Infinity"], ans: 0 },
        { type: "mc",      q: "How do you say <b>'Many people'</b>?", options: ["jan mute", "jan ale", "jan pi mute"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'mi nanpa tu.'</b>", options: ["I have two.", "I am the second.", "I am two."], ans: 1 },
        { type: "mc",      q: "Which implies <b>'The second person'</b>?", options: ["jan tu", "jan nanpa tu"], ans: 1 },
        { type: "builder", q: "Build: <b>'All things'</b>", correctSentence: "ijo ale", words: ["ijo", "ale", "mute", "nanpa", "li"] }
    ]
};

const LESSON_21 = {
    id: "7.3",
    type: "lesson",
    title: "Trade & Commerce",
    desc: "",
    vocab: [
        { word: "mani",   type: "content word", def: "Money, cash, wealth, large animal.", ex: "mi jo e mani. (I have money.)" },
        { word: "esun",   type: "content word", def: "Market, shop, trade, buy, sell.", ex: "tomo esun. (Shop.)" },
        { word: "namako", type: "content word", def: "Spice, extra, additional, ornament.", ex: "moku namako. (Spicy/Fancy food.)" }
    ],
    grammar: `
    <section>
        <p>While Unit 7.2 taught us to embrace ambiguity ("one, two, many"), sometimes life requires precision. Whether you are trading goods or calculating prices, you may need to say "exactly 100."</p>
    </section>

    <div class="grammar-box">
        <h3>1. Trade and Commerce</h3>
        <p>Vocabulary for commerce relies on simple exchanges.</p>

        <div class="features-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
            <div class="feature-card" style="align-items: flex-start; text-align: left; border-left: 6px solid var(--success);">
                <strong style="color: var(--success); font-size: 1.2rem;">esun</strong>
                <p style="margin: 0.5rem 0 0; font-size: 0.9rem; color: var(--text-muted);">Market, shop, buy, sell, trade.</p>
            </div>
            <div class="feature-card" style="align-items: flex-start; text-align: left; border-left: 6px solid var(--success);">
                <strong style="color: var(--success); font-size: 1.2rem;">mani</strong>
                <p style="margin: 0.5rem 0 0; font-size: 0.9rem; color: var(--text-muted);">Money, cash, wealth, livestock.</p>
            </div>
        </div>

        <div class="example-box" style="margin-top: 2rem;">
            <h4>Market Interactions</h4>
            <p><strong>sina esun e ni lon mani seme?</strong><br>
            <em>Literal:</em> You trade this at money what?<br>
            <em>Translation:</em> How much does this cost?</p>

            <p><strong>mi pana e mani mute.</strong><br>
            <em>Translation:</em> I pay a lot.</p>
        </div>
    </div>

    <div class="advanced-card" style="margin-top: 3rem; background: var(--bg-card); padding: 2rem; border-radius: var(--radius-lg); box-shadow: 6px 6px 0 var(--advanced-bg);">
        <h3 style="color: var(--advanced); margin-top: 0;">2. Advanced: Large Numbers</h3>
        <p>For numbers larger than 100, the community uses a base-100 system where <strong>ale</strong> acts as a multiplier.</p>

        <div style="background: var(--advanced-bg); border: 2px solid var(--advanced); padding: 1rem; border-radius: 8px; text-align: center; font-family: monospace; font-weight: 800; margin-bottom: 1.5rem;">
            [Multiplier] <span style="color: var(--advanced);">ale</span> [Remainder]
        </div>

        <div class="outline-grid" style="gap: 1rem;">
            <div class="outline-item" style="border-left: 6px solid var(--advanced);">
                <div style="width: 100%;">
                    <div style="font-weight: 800;">tu wan <span style="color: var(--advanced);">ale</span></div>
                    <div style="color: var(--text-muted);">3 × 100 = <strong>300</strong></div>
                </div>
            </div>
            <div class="outline-item" style="border-left: 6px solid var(--advanced);">
                <div style="width: 100%;">
                    <div style="font-weight: 800;">luka <span style="color: var(--advanced);">ale</span> mute</div>
                    <div style="color: var(--text-muted);">5 × 100 + 20 = <strong>520</strong></div>
                </div>
            </div>
        </div>
    </div>

    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <ul>
            <li><strong>esun:</strong> Covers all buying and selling.</li>
            <li><strong>mani:</strong> Money or assets.</li>
            <li><strong>ale:</strong> 100 or "Everything".</li>
        </ul>
    </section>
    `,
    story: `
        <div class="story-box">
            <p style="font-size: 1.25rem; line-height: 1.8;">
                <span style="color: var(--text-main);">mi <strong>pana</strong> e <strong>mani</strong> tawa sina.</span> <span style="font-size: 0.9rem; color: var(--text-muted);">(I give money to you.)</span><br>
                <span style="color: var(--text-main);">ona li <strong>esun</strong> e kili.</span> <span style="font-size: 0.9rem; color: var(--text-muted);">(She buys/sells fruit.)</span>
            </p>
        </div>
    `,
    quiz: [
        { type: "builder", q: "Build: <b>'I give money.'</b>", correctSentence: "mi pana e mani", words: ["mi", "pana", "e", "mani", "lanpan", "li"] },
        { type: "builder", q: "Build: <b>'I have a house.'</b>", correctSentence: "mi jo e tomo", words: ["mi", "jo", "e", "tomo", "esun", "li"] },
        { type: "mc",      q: "Translate: <b>'mani'</b>", options: ["Money / Wealth", "Paper", "Stone"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Market / Shop'</b>", options: ["esun", "tomo", "mani"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'To have / Hold'</b>", options: ["jo", "pana", "alasa"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'To give / Send'</b>", options: ["pana", "jo", "kama"], ans: 0 },
        { type: "mc",      q: "What is a <b>'tomo esun'</b>?", options: ["Shop / Store", "Bank", "House"], ans: 0 },
        { type: "mc",      q: "Which is <b>INCORRECT</b>? (I have money)", options: ["mi jo mani (Missing 'e')", "mi jo e mani", "mi mani (I am money)"], ans: 0 },
    ]
};

// UNIT 8

const LESSON_22 = {
    id: "8.1",
    type: "lesson",
    title: "Logic: If & Then",
    desc: "",
    vocab: [], // No new vocab, focuses on 'la'
    grammar: `
    <section>
        <p>In Unit 7, we used <strong>la</strong> to set the time ("When it is today..."). Now, we apply the exact same structure to logic. If you can say "Today, I eat," you can say "If I am hungry, I eat."</p>
    </section>

    <div class="grammar-box">
        <h3>1. The "If / Then" Structure</h3>
        <p>Toki Pona streamlines logic. You simply state the condition, place <strong>la</strong>, and state the result.</p>

        <div style="background: var(--bg-card); border: var(--border-w) solid var(--border-color); padding: 1.5rem; border-radius: var(--radius-md); text-align: center; margin: 2rem 0; box-shadow: 6px 6px 0 var(--border-color);">
            <strong style="font-size: 1.2rem; display: block; margin-bottom: 1rem;">The Conditional Flow</strong>
            <div style="font-family: monospace; font-weight: 800; display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; align-items: center;">
                <span style="background: var(--primary-light); color: var(--primary-dark); padding: 8px 16px; border-radius: 8px; border: 2px solid var(--primary);">[Condition]</span>
                <span style="font-size: 1.5rem; color: var(--text-muted);">→</span>
                <span style="background: var(--advanced); color: white; padding: 8px 16px; border-radius: 8px; box-shadow: 0 4px 0 rgba(0,0,0,0.2);">la</span>
                <span style="font-size: 1.5rem; color: var(--text-muted);">→</span>
                <span style="background: var(--success-bg); color: var(--success-dark); padding: 8px 16px; border-radius: 8px; border: 2px solid var(--success);">[Result]</span>
            </div>
            <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--text-muted);">"In the context of [Condition], [Result] happens."</p>
        </div>

        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--advanced);">
                <div style="width: 100%;">
                    <div style="font-weight: 800; font-size: 1.1rem; margin-bottom: 5px;">
                        <span style="color: var(--primary);">sina lape</span> <span style="color: var(--advanced);">la</span> <span style="color: var(--success);">sina toki ala.</span>
                    </div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">
                        <strong>If</strong> you sleep, <strong>then</strong> you don't talk.
                    </div>
                </div>
            </div>
            
            <div class="outline-item" style="border-left: 6px solid var(--advanced);">
                <div style="width: 100%;">
                    <div style="font-weight: 800; font-size: 1.1rem; margin-bottom: 5px;">
                        <span style="color: var(--primary);">sina moku</span> <span style="color: var(--advanced);">la</span> <span style="color: var(--success);">sina pilin pona.</span>
                    </div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">
                        <strong>If</strong> you eat, <strong>then</strong> you feel good.
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section style="margin-top: 3rem;">
        <h3>2. Cause and Effect</h3>
        <p><strong>la</strong> is the primary way to express "because" or "so." The cause always comes first.</p>

        <div style="overflow-x: auto; border: var(--border-w) solid var(--border-color); border-radius: var(--radius-lg); box-shadow: 6px 6px 0 var(--border-color);">
            <table style="width: 100%; border-collapse: collapse; background: white;">
                <thead>
                    <tr style="background: var(--color-slate-900); color: white;">
                        <th style="padding: 12px; text-align: left;">English Sentence</th>
                        <th style="padding: 12px; text-align: left;">Toki Pona Logic</th>
                        <th style="padding: 12px; text-align: left;">Translation</th>
                    </tr>
                </thead>
                <tbody style="font-size: 0.95rem;">
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800;">"I run <strong>because</strong> I am afraid."</td>
                        <td style="padding: 12px; color: var(--primary-dark);">[Fear] la [Run]</td>
                        <td style="padding: 12px;">mi pilin ike <strong>la</strong> mi tawa.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-slate-100);">
                        <td style="padding: 12px; font-weight: 800;">"It is hot, <strong>so</strong> don't touch."</td>
                        <td style="padding: 12px; color: var(--primary-dark);">[Heat] la [No touch]</td>
                        <td style="padding: 12px;">seli li wawa <strong>la</strong> o luka ala.</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="note" style="margin-top: 2rem;">
            <strong>Important:</strong> You cannot swap the order. The condition <strong>must</strong> come before the <em>la</em>.
        </div>
    </section>

    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <ul>
            <li><strong>Structure:</strong> Condition -> <strong>la</strong> -> Result.</li>
            <li><strong>No "Because":</strong> Use <em>la</em> to link cause and effect.</li>
        </ul>
    </section>
    `,
    story: `
        <div class="story-box">
            <p style="font-size: 1.25rem; line-height: 1.8;">
                <span style="color: var(--text-main);">sina wile <strong>la</strong> mi tawa.</span> <span style="font-size: 0.9rem; color: var(--text-muted);">(If you want, I go.)</span><br>
                <span style="color: var(--text-main);">mi <strong>lape</strong> la mi toki ala.</span> <span style="font-size: 0.9rem; color: var(--text-muted);">(If I sleep, I don't talk.)</span>
            </p>
        </div>
    `,
    quiz: [
        { type: "builder", q: "Build: <b>'If you want, I go.'</b>", correctSentence: "sina wile la mi tawa", words: ["sina", "wile", "la", "mi", "tawa", "li", "e"] },
        { type: "builder", q: "Build: <b>'To me (In my context), this is good.'</b>", correctSentence: "mi la ni li pona", words: ["mi", "la", "ni", "li", "pona", "e"] },
        { type: "mc",      q: "Translate: <b>'mi la sina suli'</b>", options: ["I am big like you", "In my opinion, you are big", "You and I are big"], ans: 1 },
        { type: "mc",      q: "Translate: <b>'If I sleep...'</b> (Context)", options: ["mi lape la...", "la mi lape...", "mi lape..."], ans: 0 },
        { type: "mc",      q: "How do you say <b>'The person who sleeps is good'</b>?", options: ["jan lape li pona", "jan ni li lape: ona li pona", "jan pi lape li pona"], ans: 1 },
    ]
};

const LESSON_23 = {
    id: "8.2",
    type: "lesson",
    title: "Modals 2: Complex Pre-verbs",
    desc: "",
    vocab: [
        { word: "alasa", type: "preverb", def: "Try to, attempt to, hunt for.", ex: "mi alasa pini. (I try to finish.)" },
        { word: "lukin", type: "preverb", def: "Seek to, try to (often visual).", ex: "mi lukin tawa. (I am looking to go/trying to go.)" },
        { word: "kama",  type: "preverb", def: "Start to, become, happen to.", ex: "ona li kama lape. (He fell asleep/started sleeping.)" },
        { word: "awen",  type: "preverb", def: "Continue to, keep doing, stay.", ex: "mi awen toki. (I keep talking.)" }
    ],
    grammar: `
    <section>
        <p>In Unit 2, we learned <em>wile</em> (want) and <em>ken</em> (can). Now we add nuance to our actions. These words change the "phase" of the action: starting it, trying it, or continuing it.</p>
    </section>

    <div class="grammar-box">
        <h3>1. Trying and Hunting (alasa)</h3>
        <p><strong>alasa</strong> as a noun means "hunt." As a pre-verb, it means "to hunt for the action" or "to try."</p>

        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--primary);">
                <strong>mi alasa moku.</strong>
                <p style="margin: 0; color: var(--text-muted);">I try to eat / I am hunting for food.</p>
            </div>
            <div class="outline-item" style="border-left: 6px solid var(--primary);">
                <strong>ona li alasa pini e pali.</strong>
                <p style="margin: 0; color: var(--text-muted);">She tries to finish the work.</p>
            </div>
        </div>
    </div>

    <section style="margin-top: 3rem;">
        <h3>2. Phases of Action: Kama vs Awen</h3>
        <p>These two words control the timeline of the verb.</p>

        <div class="features-grid" style="grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="feature-card" style="border-left: 6px solid var(--success);">
                <strong style="color: var(--success);">kama (Start/Become)</strong>
                <p style="font-size: 0.9rem;">The action begins.</p>
                <div style="background: var(--bg-body); padding: 8px; border-radius: 4px; margin-top: 8px;">
                    mi <strong>kama</strong> sona.<br>
                    I <em>start</em> to know (I learn).
                </div>
            </div>
            
            <div class="feature-card" style="border-left: 6px solid var(--accent);">
                <strong style="color: var(--accent);">awen (Continue)</strong>
                <p style="font-size: 0.9rem;">The action persists.</p>
                <div style="background: var(--bg-body); padding: 8px; border-radius: 4px; margin-top: 8px;">
                    mi <strong>awen</strong> sona.<br>
                    I <em>still</em> know (I remember).
                </div>
            </div>
        </div>
    </section>

    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <ul>
            <li><strong>alasa:</strong> Try / Attempt.</li>
            <li><strong>kama:</strong> Start / Become.</li>
            <li><strong>awen:</strong> Continue / Keep.</li>
        </ul>
    </section>
    `,
    story: `
        <div class="story-box">
            <p style="font-size: 1.25rem; line-height: 1.8;">
                <span style="color: var(--text-main);">mi <strong>alasa</strong> tawa.</span> <span style="font-size: 0.9rem; color: var(--text-muted);">(I try to move.)</span><br>
                <span style="color: var(--text-main);">taso mi <strong>awen</strong> lon ni.</span> <span style="font-size: 0.9rem; color: var(--text-muted);">(But I stay here.)</span>
            </p>
        </div>
    `,
    quiz: [
        { type: "mc",      q: "Translate: <b>'mi kama sona'</b>", options: ["I know", "I am learning (coming to know)", "I want to know"], ans: 1 },
        { type: "mc",      q: "Translate: <b>'ona li alasa lape'</b>", options: ["He sleeps", "He tries to sleep", "He needs to sleep"], ans: 1 },
        { type: "mc",      q: "Translate: <b>'Keep working.'</b>", options: ["o awen pali", "o pali awen", "o kama pali"], ans: 0 },
        { type: "builder", q: "Build: <b>'I try to finish.'</b>", correctSentence: "mi alasa pini", words: ["mi", "alasa", "pini", "lukin", "e", "li"] }
    ]
};

const LESSON_24 = {
    id: "8.3",
    type: "lesson",
    title: "Nuance & Adverbs",
    desc: "",
    vocab: [], // Focus on grammar patterns using existing words
    grammar: `
    <section>
        <p>Toki Pona words are flexible. Any adjective can be an adverb if it follows a verb. In this lesson, we also learn the difference between <em>kin</em> (also) and <em>a</em> (emotion).</p>
    </section>

    <div class="grammar-box">
        <h3>1. Adverbs (How you do it)</h3>
        <p>To describe <em>how</em> an action is performed, simply place an adjective after the verb.</p>

        <div class="features-grid" style="grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="feature-card" style="align-items: flex-start; text-align: left; border-left: 6px solid var(--primary);">
                <strong>toki <span style="color: var(--primary);">pona</span></strong>
                <p style="margin: 0; color: var(--text-muted);">Speak + Good = Speak well / Speak simply.</p>
            </div>
            <div class="feature-card" style="align-items: flex-start; text-align: left; border-left: 6px solid var(--error);">
                <strong>lape <span style="color: var(--error);">ike</span></strong>
                <p style="margin: 0; color: var(--text-muted);">Sleep + Bad = Sleep poorly / Nightmare.</p>
            </div>
            <div class="feature-card" style="align-items: flex-start; text-align: left; border-left: 6px solid var(--accent);">
                <strong>tawa <span style="color: var(--accent);">wawa</span></strong>
                <p style="margin: 0; color: var(--text-muted);">Move + Strong = Run / Move fast.</p>
            </div>
            <div class="feature-card" style="align-items: flex-start; text-align: left; border-left: 6px solid var(--advanced);">
                <strong>lukin <span style="color: var(--advanced);">lili</span></strong>
                <p style="margin: 0; color: var(--text-muted);">Look + Small = Glance / Peek.</p>
            </div>
        </div>
    </div>

    <section style="margin-top: 3rem;">
        <h3>2. Nuance: 'kin' vs 'a'</h3>
        <p>Both words add emphasis, but they have different "flavors."</p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div style="background: var(--advanced-bg); padding: 1rem; border-radius: 8px;">
                <strong style="color: var(--advanced);">kin (Logic)</strong>
                <p style="font-size: 0.9rem;">Means "Indeed," "Too," or "Also." It confirms a fact.</p>
                <p style="font-style: italic; color: var(--color-slate-800);">"mi kin." (Me too.)</p>
            </div>
            <div style="background: var(--primary-light); padding: 1rem; border-radius: 8px;">
                <strong style="color: var(--primary-dark);">a (Emotion)</strong>
                <p style="font-size: 0.9rem;">Means "Ah!", "Wow!", or intensifies emotion.</p>
                <p style="font-style: italic; color: var(--color-slate-800);">"pona a!" (So good!)</p>
            </div>
        </div>
    </section>

    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <ul>
            <li><strong>Adverbs:</strong> Just place the adjective after the verb.</li>
            <li><strong>kin:</strong> Logical emphasis (also/indeed).</li>
            <li><strong>a:</strong> Emotional emphasis (wow/ah).</li>
        </ul>
    </section>
    `,
    story: `
        <div class="story-box">
            <p style="font-size: 1.25rem; line-height: 1.8;">
                <span style="color: var(--text-main);">ona li tawa <strong>wawa</strong>.</span> <span style="font-size: 0.9rem; color: var(--text-muted);">(She runs fast.)</span><br>
                <span style="color: var(--text-main);">mi <strong>kin</strong> wile tawa.</span> <span style="font-size: 0.9rem; color: var(--text-muted);">(I also want to go.)</span><br>
                <span style="color: var(--text-main);">ike <strong>a</strong>!</span> <span style="font-size: 0.9rem; color: var(--text-muted);">(Oh no!)</span>
            </p>
        </div>
    `,
    quiz: [
        { type: "mc",      q: "Translate: <b>'tawa wawa'</b>", options: ["Move strongly (Run)", "Strong car", "Power moves"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'toki lili'</b>", options: ["Whisper / Speak briefly", "Small talk", "Baby talk"], ans: 0 },
        { type: "mc",      q: "Which word expresses <b>emotion</b>?", options: ["a", "kin", "taso"], ans: 0 },
        { type: "mc",      q: "Which word implies <b>'also'</b>?", options: ["kin", "a", "anu"], ans: 0 }
    ]
};

// UNIT 9

const LESSON_25 = {
    id: "9.1",
    type: "lesson",
    title: "Ku: Emotions & Conflict",
    desc: "",
    vocab: [
        { word: "monsuta", type: "content word", def: "Fear, monster, scary, predator.", ex: "mi monsuta. (I'm scared.)" },
        { word: "utala",   type: "content word", def: "To fight, battle, challenge, compete.", ex: "o utala ala. (Do not fight.)" },
        { word: "pilin",   type: "content word", def: "Feel, emotion, heart, sense.", ex: "mi pilin pona. (I feel good.)" }
    ],
    grammar: `
    <section>
        <p>We are now entering the final unit. These lessons cover "Ku" words—words from the 2021 dictionary that the community uses to fill specific gaps.</p>
    </section>

    <div class="grammar-box">
        <h3>1. Feeling (pilin)</h3>
        <p><strong>pilin</strong> covers physical sensation (touch) and emotional state.</p>
        
        <div class="outline-grid">
            <div class="outline-item" style="border-left: 6px solid var(--success);">
                <strong>mi pilin pona.</strong>
                <p style="margin: 0; color: var(--text-muted);">I feel good / I am happy.</p>
            </div>
            <div class="outline-item" style="border-left: 6px solid var(--error);">
                <strong>mi pilin ike.</strong>
                <p style="margin: 0; color: var(--text-muted);">I feel bad / I am sad / I am sick.</p>
            </div>
            <div class="outline-item" style="border-left: 6px solid var(--primary);">
                <strong>mi pilin e seli.</strong>
                <p style="margin: 0; color: var(--text-muted);">I feel the heat (physical sensation).</p>
            </div>
        </div>
    </div>

    <section style="margin-top: 3rem;">
        <h3>2. Conflict (utala & monsuta)</h3>
        <p>Conflict is a part of life. These words describe struggle and fear.</p>

        <div class="features-grid" style="grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="feature-card" style="border-left: 6px solid var(--error);">
                <strong style="color: var(--error-text);">utala</strong>
                <p style="font-size: 0.9rem;">Fight, War, Competition, Struggle.</p>
            </div>
            <div class="feature-card" style="border-left: 6px solid var(--error);">
                <strong style="color: var(--error-text);">monsuta</strong>
                <p style="font-size: 0.9rem;">Fear, Monster, Scary thing.</p>
            </div>
        </div>
    </section>

    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <ul>
            <li><strong>pilin:</strong> Use adjectives to describe the emotion (pilin pona).</li>
            <li><strong>monsuta:</strong> Can be a noun (monster) or adjective (scary).</li>
        </ul>
    </section>
    `,
    story: `
        <div class="story-box">
            <p style="font-size: 1.25rem; line-height: 1.8;">
                <span style="color: var(--text-main);">mi <strong>pilin</strong> ike.</span> <span style="font-size: 0.9rem; color: var(--text-muted);">(I feel bad/sad.)</span><br>
                <span style="color: var(--text-main);">soweli <strong>monsuta</strong> li kama.</span> <span style="font-size: 0.9rem; color: var(--text-muted);">(A scary animal comes.)</span><br>
                <span style="color: var(--text-main);">mi wile ala <strong>utala</strong>.</span> <span style="font-size: 0.9rem; color: var(--text-muted);">(I don't want to fight.)</span>
            </p>
        </div>
    `,
    quiz: [
        { type: "mc",      q: "Translate: <b>'utala'</b>", options: ["Fight / War", "Play", "Sleep"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'monsuta'</b>", options: ["Fear / Monster", "Love", "Food"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'mi pilin pona'</b>", options: ["I feel good (Happy)", "I am good", "I fix feelings"], ans: 0 }
    ]
};

const LESSON_26 = {
    id: "9.2",
    type: "lesson",
    title: "Ku: Society & Systems",
    desc: "",
    vocab: [
        { word: "linluwi", type: "content word", def: "Network, internet, web, connection.", ex: "kulupu linluwi. (Online community.)" },
        { word: "misikeke", type: "content word", def: "Medicine, cure, heal.", ex: "tomo misikeke. (Hospital.)" },
        { word: "jasima",  type: "content word", def: "Mirror, reflect, opposite.", ex: "ilo jasima. (Mirror.)" }
    ],
    grammar: `
    <section>
        <p>As the world modernizes, Toki Pona has adopted words to describe complex systems like the internet and medicine.</p>
    </section>

    <div class="grammar-box">
        <h3>1. Modern Vocabulary</h3>
        <div class="features-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
            <div class="feature-card">
                <strong>linluwi</strong>
                <p style="font-size: 0.9rem; color: var(--text-muted);">Internet / Network</p>
            </div>
            <div class="feature-card">
                <strong>misikeke</strong>
                <p style="font-size: 0.9rem; color: var(--text-muted);">Medicine / Therapy</p>
            </div>
            <div class="feature-card">
                <strong>jasima</strong>
                <p style="font-size: 0.9rem; color: var(--text-muted);">Reflection / Mirror</p>
            </div>
        </div>
    </div>

    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Summary</h3>
        <ul>
            <li><strong>linluwi:</strong> Essential for digital talk.</li>
            <li><strong>misikeke:</strong> Essential for health talk.</li>
        </ul>
    </section>
    `,
    story: `
        <div class="story-box">
            <p style="font-size: 1.25rem; line-height: 1.8;">
                <span style="color: var(--text-main);">mi kepeken <strong>linluwi</strong>.</span> <span style="font-size: 0.9rem; color: var(--text-muted);">(I use the internet.)</span><br>
                <span style="color: var(--text-main);">jan <strong>misikeke</strong> li pona e mi.</span> <span style="font-size: 0.9rem; color: var(--text-muted);">(The doctor fixes/heals me.)</span>
            </p>
        </div>
    `,
    quiz: [
        { type: "mc",      q: "Translate: <b>'misikeke'</b>", options: ["Medicine / Cure", "Magic", "Science"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'jasima'</b>", options: ["Mirror / Reflection", "Screen", "Window"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Internet / Network'</b>", options: ["linluwi", "kon", "kulupu"], ans: 0 },
        { type: "mc",      q: "What is a <b>'tomo misikeke'</b>?", options: ["Hospital", "Pharmacy", "Doctor's house"], ans: 0 }
    ]
};

const LESSON_27 = {
    id: "9.3",
    type: "lesson",
    title: "Ku: Modern & Slang",
    desc: "",
    vocab: [
        { word: "leko",    type: "content word", def: "Block, square, brick, stairs.", ex: "leko kiwen. (Brick.)" },
        { word: "kijetesantakalu", type: "content word", def: "Mustelid (Raccoon, Weasel, Otter).", ex: "kijetesantakalu li suwi. (The raccoon is cute.)" },
        { word: "pakala",  type: "content word", def: "Break, mistake, accident, destruction.", ex: "ilo li pakala. (The tool broke.)" }
    ],
    grammar: `
    <section>
        <p>We finish our journey with shapes, mistakes, and the most famous word in Toki Pona history.</p>
    </section>

    <div class="grammar-box">
        <h3>1. Shapes and Breaks</h3>
        <div class="features-grid" style="grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="feature-card">
                <strong>leko</strong>
                <p style="font-size: 0.9rem; color: var(--text-muted);">Block / Square</p>
                <p style="font-size: 0.8rem;">(Complements <em>sike</em>/Circle).</p>
            </div>
            <div class="feature-card">
                <strong>pakala</strong>
                <p style="font-size: 0.9rem; color: var(--text-muted);">Break / Mistake</p>
                <p style="font-size: 0.8rem;">(Often used as a curse word "Damn!").</p>
            </div>
        </div>
    </div>

    <div class="grammar-box" style="margin-top: 3rem;">
        <h3>2. The Cult of <em>kijetesantakalu</em></h3>
        <p>Toki Pona is usually about short words, but there is one famous exception.</p>
        
        <div style="background: var(--advanced-bg); border: 2px dashed var(--advanced); padding: 1.5rem; border-radius: var(--radius-md); text-align: center;">
            <strong style="font-size: 1.2rem; color: var(--advanced);">kijetesantakalu</strong>
            <p style="margin: 1rem 0; color: var(--color-slate-800);">
                Definition: Any animal from the Mustelidae family.<br>
                (Raccoons, weasels, otters, badgers).
            </p>
            <p style="font-size: 0.9rem; color: var(--text-muted);">
                It is mostly used as a joke within the community to represent "cute chaos."
            </p>
        </div>
    </div>

    <hr style="border: 0; border-top: 4px dotted var(--border-color); margin: 3rem 0;">

    <section>
        <h3>Final Summary</h3>
        <p>You have learned all 120+ words. The journey now is to use them.</p>
    </section>
    `,
    story: `
        <div class="story-box">
            <p style="font-size: 1.25rem; line-height: 1.8;">
                <span style="color: var(--text-main);">ilo li <strong>pakala</strong>.</span> <span style="font-size: 0.9rem; color: var(--text-muted);">(The tool is broken.)</span><br>
                <span style="color: var(--text-main);"><strong>kijetesantakalu</strong> li lon <strong>leko</strong>.</span> <span style="font-size: 0.9rem; color: var(--text-muted);">(The raccoon is on the block.)</span>
            </p>
        </div>
    `,
    quiz: [
        { type: "mc",      q: "Translate: <b>'Mistake / Break / Accident'</b>", options: ["pakala", "ante", "ike"], ans: 0 },
        { type: "builder", q: "Build: <b>'The tool is broken.'</b>", correctSentence: "ilo li pakala", words: ["ilo", "li", "pakala", "pini", "sin", "e"] }
    ]
};

// --- FINAL EXAM ---

const FINAL_EXAM = {
    id: "final",
    type: "test",
    title: "utala sona suli",
    desc: "The ultimate challenge. 50 questions covering every concept from Lesson 1 to 20.",
    grammar: `
        <h3>🏆 Final Review</h3>
        <p>You have learned:</p>
        <ul>
            <li><strong>Basics:</strong> <em>li</em>, <em>e</em>, <em>mi/sina</em> rules.</li>
            <li><strong>Modifiers:</strong> Adjective order and <em>pi</em>.</li>
            <li><strong>Context:</strong> Prepositions, <em>la</em>, and <em>ala</em>.</li>
            <li><strong>Content:</strong> Nature, Body, Society, and Abstract concepts.</li>
        </ul>
        <p><strong>o pona!</strong> (Good luck!)</p>
    `,
    quiz: [
        // --- SECTION 1: FOUNDATIONS (1-4) ---
        { type: "mc",      q: "Translate: <b>'mi pona'</b>", options: ["I am good", "I am a person", "Good person"], ans: 0 },
        { type: "mc",      q: "Which sentence uses <b>'li'</b> correctly?", options: ["mi li moku", "sina li moku", "jan li moku"], ans: 2 },
        { type: "mc",      q: "What does <b>'e'</b> mark?", options: ["Subject", "Direct Object", "Verb"], ans: 1 },
        { type: "builder", q: "Build: <b>'The person is big.'</b>", correctSentence: "jan li suli", words: ["jan", "li", "suli", "mi", "sina"] },
        { type: "mc",      q: "Translate: <b>'mi lukin e tomo'</b>", options: ["I see the house", "I go to the house", "The house sees me"], ans: 0 },
        { type: "mc",      q: "What is <b>'ike'</b>?", options: ["Good", "Bad / Complex", "Simple"], ans: 1 },
        { type: "builder", q: "Build: <b>'I eat fruit.'</b>", correctSentence: "mi moku e kili", words: ["mi", "moku", "e", "kili", "li", "soweli"] },
        { type: "mc",      q: "Translate: <b>'jan pona'</b>", options: ["Good person (Friend)", "Person of good", "Fix person"], ans: 0 },
        { type: "mc",      q: "When do you use <b>'pi'</b>?", options: ["Always", "When a modifier has multiple words", "To mark the subject"], ans: 1 },
        { type: "builder", q: "Build: <b>'Cup of strong water.'</b>", correctSentence: "poki pi telo wawa", words: ["poki", "pi", "telo", "wawa", "li", "e"] },

        // --- SECTION 2: LOGIC & PREPOSITIONS (5-8) ---
        { type: "mc",      q: "Translate: <b>'lon'</b>", options: ["In / At / On", "To / Go", "From"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'mi tawa tomo'</b>", options: ["I move the house", "I go to the house", "I am the house"], ans: 1 },
        { type: "mc",      q: "What is <b>'kepeken'</b>?", options: ["Using / With", "Because", "Without"], ans: 0 },
        { type: "builder", q: "Build: <b>'I am not sleeping.'</b>", correctSentence: "mi lape ala", words: ["mi", "lape", "ala", "e", "li", "jan"] },
        { type: "mc",      q: "What does <b>'la'</b> do?", options: ["Marks the context (If/When)", "Marks the object", "Marks the question"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'tenpo ni'</b>", options: ["Now", "Later", "Yesterday"], ans: 0 },
        { type: "mc",      q: "What number is <b>'tu'</b>?", options: ["1", "2", "5"], ans: 1 },
        { type: "mc",      q: "What number is <b>'luka'</b>?", options: ["2", "5", "10"], ans: 1 },
        { type: "builder", q: "Build: <b>'What is this?'</b>", correctSentence: "ni li seme", words: ["ni", "li", "seme", "sina", "e", "pona"] },
        { type: "mc",      q: "Translate: <b>'mi kama sona'</b>", options: ["I learn (come to know)", "I know", "I want to know"], ans: 0 },

        // --- SECTION 3: SOCIETY & NATURE (9-12) ---
        { type: "mc",      q: "Translate: <b>'mama'</b>", options: ["Parent / Creator", "Food", "Earth"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'meli'</b>", options: ["Woman / Wife", "Man", "Child"], ans: 0 },
        { type: "builder", q: "Build: <b>'Hey person!' (Command)</b>", correctSentence: "jan o", words: ["jan", "o", "li", "e", "ni"] },
        { type: "mc",      q: "What connects two <b>subjects</b>?", options: ["en", "li", "e"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'luka'</b>", options: ["Hand / Arm", "Foot", "Head"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'lawa'</b>", options: ["Head / Control", "Hand", "Back"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'ma'</b>", options: ["Land / Earth", "Sky", "Water"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'suno'</b>", options: ["Sun / Light", "Moon", "Star"], ans: 0 },
        { type: "builder", q: "Build: <b>'Hot fire.'</b>", correctSentence: "seli wawa", words: ["seli", "wawa", "lete", "li", "e"] },
        { type: "mc",      q: "Translate: <b>'telo'</b>", options: ["Water / Liquid", "Fire", "Air"], ans: 0 },

        // --- SECTION 4: THE WORLD (13-16) ---
        { type: "mc",      q: "What is a <b>'soweli'</b>?", options: ["Land Animal", "Bird", "Fish"], ans: 0 },
        { type: "mc",      q: "What is a <b>'waso'</b>?", options: ["Bird", "Bug", "Plant"], ans: 0 },
        { type: "mc",      q: "What is a <b>'kasi'</b>?", options: ["Plant / Tree", "Rock", "Meat"], ans: 0 },
        { type: "builder", q: "Build: <b>'Green water.'</b>", correctSentence: "telo laso", words: ["telo", "laso", "jelo", "li", "e"] },
        { type: "mc",      q: "Translate: <b>'loje'</b>", options: ["Red", "Blue", "White"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'pimeja'</b>", options: ["Black / Dark", "White", "Colorful"], ans: 0 },
        { type: "mc",      q: "What is an <b>'ilo'</b>?", options: ["Tool / Device", "House", "Food"], ans: 0 },
        { type: "mc",      q: "What is a <b>'lipu'</b>?", options: ["Book / Paper", "Box", "Stick"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'anpa'</b>", options: ["Down / Bottom", "Up", "Side"], ans: 0 },
        { type: "builder", q: "Build: <b>'Go up.'</b>", correctSentence: "o tawa sewi", words: ["o", "tawa", "sewi", "anpa", "li", "e"] },

        // --- SECTION 5: ABSTRACT & MODERN (17-20) ---
        { type: "mc",      q: "Translate: <b>'pilin'</b>", options: ["Feeling / Heart", "Head", "Hand"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'olin'</b>", options: ["Love", "Hate", "Sleep"], ans: 0 },
        { type: "builder", q: "Build: <b>'I want to sleep.'</b>", correctSentence: "mi wile lape", words: ["mi", "wile", "lape", "moku", "li", "e"] },
        { type: "mc",      q: "Translate: <b>'ante'</b>", options: ["Different / Other", "Same", "New"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'pini'</b>", options: ["End / Past", "Start", "Middle"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'mani'</b>", options: ["Money / Wealth", "Paper", "Stone"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'tan'</b>", options: ["Because / From", "To", "With"], ans: 0 },
        { type: "mc",      q: "What is <b>'linluwi'</b>?", options: ["Internet / Network", "Line", "Cloth"], ans: 0 },
        { type: "mc",      q: "What implies <b>'Emotion/Emphasis'</b>?", options: ["a", "e", "li"], ans: 0 },
        { type: "builder", q: "Build: <b>'I love you.'</b>", correctSentence: "mi olin e sina", words: ["mi", "olin", "e", "sina", "pilin", "li"] }
    ]
};

// =========================================
// 3. CURRICULUM ARRAY (MAIN EXPORT)
// =========================================

const curriculum = [
    LESSON_01, LESSON_02, LESSON_03, LESSON_04,
    LESSON_05, LESSON_06, LESSON_07, LESSON_08,
    LESSON_09, LESSON_10, LESSON_11, LESSON_12,
    LESSON_13, LESSON_14, LESSON_15, LESSON_16,
    LESSON_17, LESSON_18, LESSON_19, LESSON_20,
    LESSON_21, LESSON_22, LESSON_23, LESSON_24,
    LESSON_25, LESSON_26, LESSON_27,
    FINAL_EXAM
];

// =========================================
// 4. MEDIA LIBRARY
// =========================================

const mediaLibrary = [
    {
        id: "r1",
        type: "text",
        tpTitle: "lipu tenpo o kama pona",
        level: "Medium",
        creator: "jan Telakoman",
        url: "https://liputenpo.org/lipu/nanpa-akesi/",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
        text: `
        <p>toki pona li seme? toki pona li nasin toki suli anu toki lili suwi taso? mi mute li sona e ni: toki pona li ijo suli li nasin pona. taso jan mute li sona ala e ni. tenpo pini lili la mi mute li toki e ni: kulupu ISO li pana ala e nimi lili ilo tawa toki pona tan seme? kulupu ISO la toki pona li toki suli ala tan seme? jan mute li kepeken toki pona. taso lipu anu sitelen tawa anu ijo sama ni la ijo pi nanpa lili li lon toki pona.</p>

        <p>ni la mi mute li toki e ni: mi o pali e lipu tenpo! <span class="vocab-tip" data-tooltip= "periodical magazine in toki pona">lipu tenpo</span> li seme? lipu tenpo li lipu sama ni: kulupu pi jan sitelen li pali e lipu sin lon tenpo mute. lipu sin ale pi lipu tenpo li jo e nimi sama, taso lipu sin ale li jo e nanpa ante. lipu tenpo pi sona sin li ken pana e lipu sin lon tenpo suno ale. lipu tenpo pi nasin ante li ken pana e lipu sin lon tenpo mun ale anu tenpo sike suno ale.</p>

        <p>lipu tenpo li ken pona mute tawa toki pona! jan pi toki pona li pali e lipu tenpo la ken la kulupu ISO li lukin e ni li toki e ni: toki pona li nasin toki suli! taso <span class="vocab-tip" data-tooltip= "small defining tool">nimi lili ilo</span> pi kulupu ISO li suli ala. lipu tenpo li ken pana e ijo ante pona tawa toki pona.</p>

        <p>jan wan li taso la ona li ken pana e lipu. taso ona li ken ala pali e lipu mute. ante la lipu ona li ken weka. lipu ona li awen la jan ante li ken weka e sona ona. taso lipu tenpo la jan pona mute pi toki pona li kama kulupu sitelen. jan ale lon kulupu sitelen li kepeken e wawa ona tawa ijo sama. jan ale li kepeken e sona pona li kepeken e tenpo wile tawa ni: ona li pana e ijo pini pi pona mute. lipu wan pi lipu nanpa li awen lon tenpo suli. jan mute li lukin e ona li kama sona e ijo tan ona lon tenpo suli.</p>

        <p>ni li lipu tenpo nanpa wan lon toki pona. taso mi mute li toki ala e ni: mi mute taso li ken pali e lipu tenpo. sina o pali e lipu tenpo ante! seme li suli tawa sina? seme pi pali sina li mute a? moku pona anu nasin pilin anu sitelen musi li pona tawa sina, anu seme? o pali e lipu tenpo tawa ona!</p>

        <p>lipu tenpo sina la sina ken pali e lipu sin lon tenpo suno ale anu <span class="vocab-tip" data-tooltip= "year">sike suno</span> ale. ni li suli ala. ken la lipu sina li lili li jo e lipu lili pi nanpa lili taso. ale li pona. ijo suli li ni: o pana e ijo pona lon toki pona. sina pali e ni la o pana e ona tawa mi mute, o pana e ona tawa jan ale!</p>
        `,
        translation: `
        <p>What is Toki Pona? Is Toki Pona a major language system, or just a cute little talk? We know this: Toki Pona is a significant thing and a good system. But many people do not know this. A short time ago, we said this: Why does the ISO group not give a code (small tool name) to Toki Pona? Does the ISO group think Toki Pona is not a major language? Many people use Toki Pona. However, regarding books, films, or similar things, there are few numbered items in Toki Pona.</p>
        <p>Therefore, we said this: We should create a periodical (lipu tenpo)! What is a periodical? A periodical is a document like this: A group of writers creates a new document many times. Every new issue of the periodical has the same name, but every new issue has a different number. A periodical of new knowledge might release a new document every day. A periodical of different ways might release a new document every month or every year.</p>
        <p>A periodical can be very good for Toki Pona! If Toki Pona speakers create a periodical, perhaps the ISO group will look at this and say: Toki Pona is a major language! But, the ISO group's code is not the big thing. A periodical can provide other good things for Toki Pona.</p>
        <p>If there is only one person, they can release a book. But they cannot create many books. Otherwise, their books might disappear. If their book stays, other people might forget their knowledge. However, with a periodical, many good friends of Toki Pona become a writing group. Everyone in the writing group uses their power for the same thing. Everyone uses good knowledge and uses willing time for this: they release a finished thing of great goodness.</p>
        <p>One issue of a numbered document stays for a long time. Many people read it and learn things from it for a long time.</p>
        <p>This is the first lipu tenpo in Toki Pona. But we do not say this: Only we can create a periodical. You should create a different periodical! What is important to you? Which of your works are plentiful? Is good food, or philosophy, or comics good to you, or something else? Create a periodical for that!</p>
        <p>As for your periodical, you can create a new issue every day or every year. This is not important. Maybe your document is small and has only a few small pages. Everything is good. The important thing is this: Give good things in Toki Pona. If you do this, give it to us, give it to everyone!</p>
        `,
        quiz: [
            { type: "mc", q: "jan mute li pilin e ni: toki pona li seme?", options: ["nasin toki suli", "toki lili suwi taso", "ilo pi kulupu ISO", "moku pona"], ans: 0 },
            { type: "mc", q: "jan sitelen li toki e kulupu seme?", options: ["kulupu ISO", "kulupu pi lipu tenpo", "jan Telakoman", "kulupu UN"], ans: 1 },
            { type: "mc", q: "lipu tenpo li seme?", options: ["jan wan li pali e lipu wan taso", "lipu li jo e nanpa lili", "kulupu li pali e lipu sin lon tenpo mute", "lipu pi nasin pilin taso"], ans: 2 },
            { type: "mc", q: "lipu tenpo pi 'sona sin' en lipu tenpo pi 'nasin ante' li ante tan seme?", options: ["tenpo pana", "jan pali", "ma", "kalama"], ans: 1 },
            { type: "mc", q: "jan sitelen li wile pali e lipu tenpo tan ijo ISO. ona li wile pali e lipu tan seme kin?", options: ["ona li wile e mani", "lipu tenpo li ken pana e ijo pona tawa toki pona", "ona li wile e moku", "ona li wile ala pali"], ans: 1 },
            { type: "mc", q: "jan wan li pali e lipu la ike li seme?", options: ["ona li ken ala pali e lipu mute", "ona li suli mute", "lipu ona li pona mute", "jan ante li lukin mute e lipu ona"], ans: 0 },
            { type: "mc", q: "kulupu sitelen li pona tan seme?", options: ["jan ale li pali e ijo ante", "jan ale li lape", "jan ale li kepeken e wawa tawa ijo sama", "ona li jo e mani mute"], ans: 2 },
            { type: "mc", q: "lipu ni li seme?", options: ["lipu tenpo nanpa wan", "lipu tenpo nanpa tu", "lipu pi kulupu ISO", "lipu pi jan Telakoman taso"], ans: 0 },
            { type: "mc", q: "jan sitelen li toki e ijo seme tawa pali lipu?", options: ["moku pona, nasin pilin, sitelen musi", "ilo utala, moli, pakala", "mani, esun, tomo", "kalama musi taso"], ans: 0 },
            { type: "mc", q: "ijo suli li seme?", options: ["lipu li suli", "sina pana e lipu lon tenpo suno ale", "sina pana e ijo pona lon toki pona", "lipu li jo e nanpa mute"], ans: 2 }
        ]
    },
    {
        id: "r2",
        tpTitle: "tenpo pini pi toki pona",
        level: "Easy",
        creator: "jan Telakoman",
        url: "https://liputenpo.org/lipu/nanpa-akesi/",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
        text: `
        <p>open la (2001) jan Sonja li pana e lipu tawa jan ale lon linluwi1. lipu ni la ona li pana e sona pi toki sin. nimi pi toki sin ni li toki pona. </p>
        <p>tenpo kama ni la kulupu pi toki pona li kama lon. jan mute li kama sona e toki pona. jan Sonja en jan kulupu li toki e ijo mute pi toki pona. ona mute li pali e nimi sin li ante e nimi li pali e nasin toki sin tawa toki pona. ni li tenpo open pi toki pona. </p>
        <p>tenpo sike kama la jan Sonja li pana e lipu pu tawa ma ale. lipu ni la jan Sonja li pana e nasin ona pi toki pona. jan mute li kepeken toki pona lon nasin ante lili. taso tenpo kama ni la jan li ken toki e ni: nasin toki mi li weka mute anu weka lili tan lipu pu.</p>
        `,
        translation: `
        <p>beginning in 2001, Sonja gave a book to everyone on the internet. This book gives the knowledge of a new language. the name of this new language is Toki Pona.</p>
        <p>Afterwards, the Toki Pona community emerged. many people started to learn Toki Pona. Sanja and the community discussed the many aspects about Toki Pona. they created new words, changed words, and created new grammar for toki pona. this was the beginning of Toki Pona.</p>
        <p>in the comming years, Sonja released the book "Pu" to the world. In this book, Sonja shared her way of using Toki Pona. Others used Toki Pona in slightly different ways. but in the coming times, people can say my way of talking is very different or slightly different from the book "Pu."
        `,
        quiz: [
            { type: "mc", q: "open la (2001), jan Sonja li pana e lipu tawa jan ale lon seme?", options: ["lon tomo sona", "lon ma Kanata", "lon linluwi", "lon esun"], ans: 2 },
            { type: "mc", q: "nimi pi toki sin ni li seme?", options: ["toki Inli", "toki pona", "toki Kanse", "toki Epelanto"], ans: 1 },
            { type: "mc", q: "kulupu pi toki pona li kama lon anu seme?", options: ["lon", "lon ala", "ona li moli", "ona li awen lon"], ans: 0 },
            { type: "mc", q: "jan Sonja en jan kulupu li pali e seme tawa nimi?", options: ["ona li weka e nimi ale", "ona li pali e nimi sin li ante e nimi", "ona li toki e ni: nimi li ike", "ona li pali ala"], ans: 1 },
            { type: "mc", q: "tenpo sike kama la, jan Sonja li pana e lipu seme?", options: ["lipu ku", "lipu su", "lipu pu", "lipu tenpo"], ans: 2 },
            { type: "mc", q: "lipu pu la, nasin pi jan seme li lon?", options: ["nasin pi jan ale", "nasin pi jan Sonja", "nasin pi jan Pije", "nasin pi jan Kipo"], ans: 1 },
            { type: "mc", q: "jan mute li kepeken toki pona lon nasin seme?", options: ["lon nasin sama taso", "lon nasin ante lili", "lon nasin ike", "lon nasin pi lipu pu taso"], ans: 1 },
            { type: "mc", q: "jan li ken ala ken toki e ni: 'nasin mi li weka tan lipu pu'?", options: ["ken", "ken ala", "jan Sonja taso li ken", "ni li ike"], ans: 0 },
            { type: "mc", q: "lipu ni li toki e tenpo seme?", options: ["tenpo kama", "tenpo open", "tenpo pini suli", "tenpo moli"], ans: 1 },
            { type: "mc", q: "jan mute li kama sona e toki pona anu seme?", options: ["jan lili taso", "jan mute", "jan ala", "jan Sonja taso"], ans: 1 }
        ]
    },
    {
        id: "r3",
        tpTitle: "sowelo suli",
        level: "Easy",
        creator: "jan Lakuse",
        url: "https://raacz.neocities.org/toki-pona/beginner-material/stories/story-1/",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
        text: `
        "soweli suwi li lon! mi lukin e soweli suwi. Kute pi soweli suwi li suli. soweli li lukin e mi. n... soweli li wile e seme? soweli li lukin e mi tan seme? mi sona ala. a, soweli li tawa. tawa pona, soweli o!"
        `,
        translation: `
        "There is a cute animal! I see the cute animal. The cute animal's ears are big. The animal looks at me. hm... What does the animal want? Why is the animal looking at me? I don't know. Ah, the animal is moving. Goodbye animal!"
        `,
        quiz: [
            { type: "mc", q: "open la (2001), jan Sonja li pana e lipu tawa jan ale lon seme?", options: ["lon tomo sona", "lon ma Kanata", "lon linluwi", "lon esun"], ans: 2 },
            { type: "mc", q: "nimi pi toki sin ni li seme?", options: ["toki Inli", "toki pona", "toki Kanse", "toki Epelanto"], ans: 1 },
            { type: "mc", q: "kulupu pi toki pona li kama lon anu seme?", options: ["lon", "lon ala", "ona li moli", "ona li awen lon"], ans: 0 },
            { type: "mc", q: "jan Sonja en jan kulupu li pali e seme tawa nimi?", options: ["ona li weka e nimi ale", "ona li pali e nimi sin li ante e nimi", "ona li toki e ni: nimi li ike", "ona li pali ala"], ans: 1 },
            { type: "mc", q: "tenpo sike kama la, jan Sonja li pana e lipu seme?", options: ["lipu ku", "lipu su", "lipu pu", "lipu tenpo"], ans: 2 },
            { type: "mc", q: "lipu pu la, nasin pi jan seme li lon?", options: ["nasin pi jan ale", "nasin pi jan Sonja", "nasin pi jan Pije", "nasin pi jan Kipo"], ans: 1 },
            { type: "mc", q: "jan mute li kepeken toki pona lon nasin seme?", options: ["lon nasin sama taso", "lon nasin ante lili", "lon nasin ike", "lon nasin pi lipu pu taso"], ans: 1 },
            { type: "mc", q: "jan li ken ala ken toki e ni: 'nasin mi li weka tan lipu pu'?", options: ["ken", "ken ala", "jan Sonja taso li ken", "ni li ike"], ans: 0 },
            { type: "mc", q: "lipu ni li toki e tenpo seme?", options: ["tenpo kama", "tenpo open", "tenpo pini suli", "tenpo moli"], ans: 1 },
            { type: "mc", q: "jan mute li kama sona e toki pona anu seme?", options: ["jan lili taso", "jan mute", "jan ala", "jan Sonja taso"], ans: 1 }
        ]
    },
    {
        id: "r4",
        tpTitle: "ilo sitelen",
        level: "Easy",
        creator: "jan Lakuse",
        url: "https://raacz.neocities.org/toki-pona/beginner-material/stories/story-2/",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
        text: `
        "mama mi lo jo e ilo. ilo li ken pali e sitelen. ilo li mani mute. mi wile kepeken ilo. taso, mama li wile ala e ni. mi awen, mi awen, mi awen. tenpo ni la, mi mama li lukin ala. mi tawa ilo. mi wile kama jo e ilo. taso ilo li suli! luka mi li lili. ilo li tawa anpa. pakala a!"
        `,
        translation: `
        "my parent has a tool. The tool can make pictures. The tool is very expensive. I want to use the tool. But, my parent doesnt want me to. I wait, I wait, I wait. Now, my parent is not watching. I go towards the tool. I want to get the tool. But the tool is big! My hands are small. The tool falls. Damn it!"
        `,
        quiz: [
            { type: "mc", q: "open la (2001), jan Sonja li pana e lipu tawa jan ale lon seme?", options: ["lon tomo sona", "lon ma Kanata", "lon linluwi", "lon esun"], ans: 2 },
            { type: "mc", q: "nimi pi toki sin ni li seme?", options: ["toki Inli", "toki pona", "toki Kanse", "toki Epelanto"], ans: 1 },
            { type: "mc", q: "kulupu pi toki pona li kama lon anu seme?", options: ["lon", "lon ala", "ona li moli", "ona li awen lon"], ans: 0 },
            { type: "mc", q: "jan Sonja en jan kulupu li pali e seme tawa nimi?", options: ["ona li weka e nimi ale", "ona li pali e nimi sin li ante e nimi", "ona li toki e ni: nimi li ike", "ona li pali ala"], ans: 1 },
            { type: "mc", q: "tenpo sike kama la, jan Sonja li pana e lipu seme?", options: ["lipu ku", "lipu su", "lipu pu", "lipu tenpo"], ans: 2 },
            { type: "mc", q: "lipu pu la, nasin pi jan seme li lon?", options: ["nasin pi jan ale", "nasin pi jan Sonja", "nasin pi jan Pije", "nasin pi jan Kipo"], ans: 1 },
            { type: "mc", q: "jan mute li kepeken toki pona lon nasin seme?", options: ["lon nasin sama taso", "lon nasin ante lili", "lon nasin ike", "lon nasin pi lipu pu taso"], ans: 1 },
            { type: "mc", q: "jan li ken ala ken toki e ni: 'nasin mi li weka tan lipu pu'?", options: ["ken", "ken ala", "jan Sonja taso li ken", "ni li ike"], ans: 0 },
            { type: "mc", q: "lipu ni li toki e tenpo seme?", options: ["tenpo kama", "tenpo open", "tenpo pini suli", "tenpo moli"], ans: 1 },
            { type: "mc", q: "jan mute li kama sona e toki pona anu seme?", options: ["jan lili taso", "jan mute", "jan ala", "jan Sonja taso"], ans: 1 }
        ]
    },
    {
        id: "r5",
        tpTitle: "supa monsi pi palisa kiwen tu wan",
        level: "Easy",
        creator: "jan Lakuse",
        url: "https://raacz.neocities.org/toki-pona/beginner-material/stories/story-3/",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
        text: `
        "o kama lukin e supa monsi. ona li lili mute a li tawa ni: sina tawa lon ma li wile e supa lon tenpo lili taso. ‘supa’ li kiwen ala, li len. nasin li ni: sina wile ala kepeken supa la o pini e ona. ona li pini la palisa kiwen tu wan li lon li sama palisa suli wan. kiwen sike li wan e palisa kiwen tu wan lon insa. len loje li wan e palisa kiwen lon sewi. sina wile kepeken supa la o open e supa. ni la palisa kiwen tu wan li kama wan ala lon sewi lon anpa. lon anpa la, palisa kiwen tu wan li ken awen pona lon ma. lon sewi la, palisa kiwen tu wan li supa e len loje.

        tenpo pini la mi jo e supa ante pi nasin sama, taso kule ona li laso. mi weka e ona lon ma pi sona mi ala. ni la mi wile esun e ona sin. mi lukin e ona lon tomo esun pi mani lili. mi esun e ona kepeken mani tu tu.

        ike la mi kepeken ala supa ni lon tenpo mute. mi tawa lon ma la ona li pona, taso mi ni lon tenpo mute ala. tenpo mute la mi awen lon insa pi tomo mi. a, mi lukin e supa ni la mi toki insa e ni tawa mi: mi o tawa lon ma!"
        `,
        translation: `
        "Come look at the butt surface. It is oh so very small and for this: You are moving outside and need a surface for just a little time. The ‘surface’ is not hard, and is cloth. This is the way: When you do not want to use the surface, close it. When it is closed, three hard sticks exist and are like one big stick. A hard circle unites the three hard sticks in the middle. Red cloth unites the hard sticks at the top. When you want to use the surface, open the surface. With this, three hard sticks stop uniting at the top and the bottom. At the bottom, the three sticks can stay well on the earth. At the top, the three sticks can make the red fabric a surface.

        In the past I had another surface of the same system, but its colour was blue. I left it somewhere I don’t know. With this, I needed to buy a new one. I saw it at a small-money store. I bought it for four monies.

        Unfortunately I do not use the surface at many times. When I move outside it is good, but I do this at not many times. Many times, I stay at the inside of my house. Oh, When I see this surface I internally communicate this to myself: I should do movement outside!"
        `,
        quiz: [
            { type: "mc", q: "open la (2001), jan Sonja li pana e lipu tawa jan ale lon seme?", options: ["lon tomo sona", "lon ma Kanata", "lon linluwi", "lon esun"], ans: 2 },
            { type: "mc", q: "nimi pi toki sin ni li seme?", options: ["toki Inli", "toki pona", "toki Kanse", "toki Epelanto"], ans: 1 },
            { type: "mc", q: "kulupu pi toki pona li kama lon anu seme?", options: ["lon", "lon ala", "ona li moli", "ona li awen lon"], ans: 0 },
            { type: "mc", q: "jan Sonja en jan kulupu li pali e seme tawa nimi?", options: ["ona li weka e nimi ale", "ona li pali e nimi sin li ante e nimi", "ona li toki e ni: nimi li ike", "ona li pali ala"], ans: 1 },
            { type: "mc", q: "tenpo sike kama la, jan Sonja li pana e lipu seme?", options: ["lipu ku", "lipu su", "lipu pu", "lipu tenpo"], ans: 2 },
            { type: "mc", q: "lipu pu la, nasin pi jan seme li lon?", options: ["nasin pi jan ale", "nasin pi jan Sonja", "nasin pi jan Pije", "nasin pi jan Kipo"], ans: 1 },
            { type: "mc", q: "jan mute li kepeken toki pona lon nasin seme?", options: ["lon nasin sama taso", "lon nasin ante lili", "lon nasin ike", "lon nasin pi lipu pu taso"], ans: 1 },
            { type: "mc", q: "jan li ken ala ken toki e ni: 'nasin mi li weka tan lipu pu'?", options: ["ken", "ken ala", "jan Sonja taso li ken", "ni li ike"], ans: 0 },
            { type: "mc", q: "lipu ni li toki e tenpo seme?", options: ["tenpo kama", "tenpo open", "tenpo pini suli", "tenpo moli"], ans: 1 },
            { type: "mc", q: "jan mute li kama sona e toki pona anu seme?", options: ["jan lili taso", "jan mute", "jan ala", "jan Sonja taso"], ans: 1 }
        ]
    },
    {
        id: "r6",
        tpTitle: "sike musi",
        level: "Easy",
        creator: "jan Lakuse",
        url: "https://raacz.neocities.org/toki-pona/beginner-material/stories/story-4/",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
        text: `
        "suno li seli. taso, telo li lete pona. mi musi kepeken sike. mi musi mute a. sike li tawa sewi. sike li tawa anpa. sike li tawa weka. mi wile alasa! sike lon seme? a, mi jo e ona. taso, a! mi pilin pakala. mi jo ala e ijo ante... mi jo ala e jan musi poka."
        `,
        translation: `
        "The sun is hot. But the water is cool. I play using a ball. I play a lot!  the ball goes towards the sky. the ball comes down. The ball goes away. I need to find it. Where is the ball? I have it. But, I feel upset. I do not have another thing. I do not have a nearby playmate."
        `,
        quiz: [
            { type: "mc", q: "open la (2001), jan Sonja li pana e lipu tawa jan ale lon seme?", options: ["lon tomo sona", "lon ma Kanata", "lon linluwi", "lon esun"], ans: 2 },
            { type: "mc", q: "nimi pi toki sin ni li seme?", options: ["toki Inli", "toki pona", "toki Kanse", "toki Epelanto"], ans: 1 },
            { type: "mc", q: "kulupu pi toki pona li kama lon anu seme?", options: ["lon", "lon ala", "ona li moli", "ona li awen lon"], ans: 0 },
            { type: "mc", q: "jan Sonja en jan kulupu li pali e seme tawa nimi?", options: ["ona li weka e nimi ale", "ona li pali e nimi sin li ante e nimi", "ona li toki e ni: nimi li ike", "ona li pali ala"], ans: 1 },
            { type: "mc", q: "tenpo sike kama la, jan Sonja li pana e lipu seme?", options: ["lipu ku", "lipu su", "lipu pu", "lipu tenpo"], ans: 2 },
            { type: "mc", q: "lipu pu la, nasin pi jan seme li lon?", options: ["nasin pi jan ale", "nasin pi jan Sonja", "nasin pi jan Pije", "nasin pi jan Kipo"], ans: 1 },
            { type: "mc", q: "jan mute li kepeken toki pona lon nasin seme?", options: ["lon nasin sama taso", "lon nasin ante lili", "lon nasin ike", "lon nasin pi lipu pu taso"], ans: 1 },
            { type: "mc", q: "jan li ken ala ken toki e ni: 'nasin mi li weka tan lipu pu'?", options: ["ken", "ken ala", "jan Sonja taso li ken", "ni li ike"], ans: 0 },
            { type: "mc", q: "lipu ni li toki e tenpo seme?", options: ["tenpo kama", "tenpo open", "tenpo pini suli", "tenpo moli"], ans: 1 },
            { type: "mc", q: "jan mute li kama sona e toki pona anu seme?", options: ["jan lili taso", "jan mute", "jan ala", "jan Sonja taso"], ans: 1 }
        ]
    },
    {
        id: "r7",
        tpTitle: "kili sin",
        level: "Easy",
        creator: "jan Lakuse",
        url: "https://raacz.neocities.org/toki-pona/beginner-material/stories/story-5/",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
        text: `
        "mi lukin e kili. mi sona ala e kili. kili li jelo lili laso lili li pona lukin. mi esun e kili sin. mi kama lon tomo mi. mi tu e kili. mi moku e kili ni kepeken nasin seme? sike lili pimeja kiwen li moku ala moku? mi wile kama sona. mi uta e sike pimeja. a, sona sin pi kili sin: sike pimeja li moku ala!"
        `,
        translation: `
        "I see a fruit. I do not recognize the fruit. The fruit is a little yellow, a little blue, and looks appealing. I buy the new fruit. i come to my home. I split the fruit. How should I eat this fruit? Is the small dark round seed food? I want to find out. I put the seed in my mouth. Ah, new information about the new fruit: the seed is not food!"
        `,
        quiz: [
            { type: "mc", q: "open la (2001), jan Sonja li pana e lipu tawa jan ale lon seme?", options: ["lon tomo sona", "lon ma Kanata", "lon linluwi", "lon esun"], ans: 2 },
            { type: "mc", q: "nimi pi toki sin ni li seme?", options: ["toki Inli", "toki pona", "toki Kanse", "toki Epelanto"], ans: 1 },
            { type: "mc", q: "kulupu pi toki pona li kama lon anu seme?", options: ["lon", "lon ala", "ona li moli", "ona li awen lon"], ans: 0 },
            { type: "mc", q: "jan Sonja en jan kulupu li pali e seme tawa nimi?", options: ["ona li weka e nimi ale", "ona li pali e nimi sin li ante e nimi", "ona li toki e ni: nimi li ike", "ona li pali ala"], ans: 1 },
            { type: "mc", q: "tenpo sike kama la, jan Sonja li pana e lipu seme?", options: ["lipu ku", "lipu su", "lipu pu", "lipu tenpo"], ans: 2 },
            { type: "mc", q: "lipu pu la, nasin pi jan seme li lon?", options: ["nasin pi jan ale", "nasin pi jan Sonja", "nasin pi jan Pije", "nasin pi jan Kipo"], ans: 1 },
            { type: "mc", q: "jan mute li kepeken toki pona lon nasin seme?", options: ["lon nasin sama taso", "lon nasin ante lili", "lon nasin ike", "lon nasin pi lipu pu taso"], ans: 1 },
            { type: "mc", q: "jan li ken ala ken toki e ni: 'nasin mi li weka tan lipu pu'?", options: ["ken", "ken ala", "jan Sonja taso li ken", "ni li ike"], ans: 0 },
            { type: "mc", q: "lipu ni li toki e tenpo seme?", options: ["tenpo kama", "tenpo open", "tenpo pini suli", "tenpo moli"], ans: 1 },
            { type: "mc", q: "jan mute li kama sona e toki pona anu seme?", options: ["jan lili taso", "jan mute", "jan ala", "jan Sonja taso"], ans: 1 }
        ]
    },
    {
        id: "r8",
        tpTitle: "tawa suli",
        level: "Easy",
        creator: "jan Lakuse",
        url: "https://raacz.neocities.org/toki-pona/beginner-material/stories/story-6/",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
        text: `
        "mi tawa kepeken noka. mi lukin e nena suli mute. mi lukin e walo mute. mi lukin e jan ala. mi lukin e tomo ala. noka mi li pilin ike. mi wile lape. taso mi pilin lete. mi ken ala lape. mi tawa. mi tawa. mi tawa. mi lukin e tomo lili pimeja. a, sewi li pona! jan li pana e tomo e seli e moku. mi lape pona. tenpo suno kama la mi tawa."
        `,
        translation: `
        "I walk. i see many mountains. I see a lot of snow. I see no people. I see no buildings. my feet hurt. I want to sleep. But, I am cold, I cannot sleep. I walk, I walk, I walk. I see a small dark cave. Ah, the Divine is good! Someone provided a shelter, warmth, and good. I rest well. The next day, I move."
        `,
        quiz: [
            { type: "mc", q: "open la (2001), jan Sonja li pana e lipu tawa jan ale lon seme?", options: ["lon tomo sona", "lon ma Kanata", "lon linluwi", "lon esun"], ans: 2 },
            { type: "mc", q: "nimi pi toki sin ni li seme?", options: ["toki Inli", "toki pona", "toki Kanse", "toki Epelanto"], ans: 1 },
            { type: "mc", q: "kulupu pi toki pona li kama lon anu seme?", options: ["lon", "lon ala", "ona li moli", "ona li awen lon"], ans: 0 },
            { type: "mc", q: "jan Sonja en jan kulupu li pali e seme tawa nimi?", options: ["ona li weka e nimi ale", "ona li pali e nimi sin li ante e nimi", "ona li toki e ni: nimi li ike", "ona li pali ala"], ans: 1 },
            { type: "mc", q: "tenpo sike kama la, jan Sonja li pana e lipu seme?", options: ["lipu ku", "lipu su", "lipu pu", "lipu tenpo"], ans: 2 },
            { type: "mc", q: "lipu pu la, nasin pi jan seme li lon?", options: ["nasin pi jan ale", "nasin pi jan Sonja", "nasin pi jan Pije", "nasin pi jan Kipo"], ans: 1 },
            { type: "mc", q: "jan mute li kepeken toki pona lon nasin seme?", options: ["lon nasin sama taso", "lon nasin ante lili", "lon nasin ike", "lon nasin pi lipu pu taso"], ans: 1 },
            { type: "mc", q: "jan li ken ala ken toki e ni: 'nasin mi li weka tan lipu pu'?", options: ["ken", "ken ala", "jan Sonja taso li ken", "ni li ike"], ans: 0 },
            { type: "mc", q: "lipu ni li toki e tenpo seme?", options: ["tenpo kama", "tenpo open", "tenpo pini suli", "tenpo moli"], ans: 1 },
            { type: "mc", q: "jan mute li kama sona e toki pona anu seme?", options: ["jan lili taso", "jan mute", "jan ala", "jan Sonja taso"], ans: 1 }
        ]
    },
    {
        id: "r9",
        tpTitle: "esun mute",
        level: "Easy",
        creator: "jan Lakuse",
        url: "https://raacz.neocities.org/toki-pona/beginner-material/stories/story-7/",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
        text: `
        "jan mute li lon esun. mi wile esun e kala. "o esun e kasi!" jan li toki.  mi wile e kala e kasi ala. "o esun e waso!" jan ante li toki. mi wile e kala e kasi ala e waso ala. "o esun e pan suwi!" jan ante li toki. mi lukin e pan suwi. ona li pona mute lukin. mi wile e kala e pan suwi e kasi ala e aso ala."
        `,
        translation: `
        "Many people are at the market. I want to buy fish. "Buy flowers!" someone says. I want fish, not flowers. "Buy birds!" someone else says. I want a fish, no plants, and no birds. "Buy pastries!" someone else says. I see the pastries. They look beautiful. I want fish, and pastries, no plants, and no birds."
        `,
        quiz: [
            { type: "mc", q: "open la (2001), jan Sonja li pana e lipu tawa jan ale lon seme?", options: ["lon tomo sona", "lon ma Kanata", "lon linluwi", "lon esun"], ans: 2 },
            { type: "mc", q: "nimi pi toki sin ni li seme?", options: ["toki Inli", "toki pona", "toki Kanse", "toki Epelanto"], ans: 1 },
            { type: "mc", q: "kulupu pi toki pona li kama lon anu seme?", options: ["lon", "lon ala", "ona li moli", "ona li awen lon"], ans: 0 },
            { type: "mc", q: "jan Sonja en jan kulupu li pali e seme tawa nimi?", options: ["ona li weka e nimi ale", "ona li pali e nimi sin li ante e nimi", "ona li toki e ni: nimi li ike", "ona li pali ala"], ans: 1 },
            { type: "mc", q: "tenpo sike kama la, jan Sonja li pana e lipu seme?", options: ["lipu ku", "lipu su", "lipu pu", "lipu tenpo"], ans: 2 },
            { type: "mc", q: "lipu pu la, nasin pi jan seme li lon?", options: ["nasin pi jan ale", "nasin pi jan Sonja", "nasin pi jan Pije", "nasin pi jan Kipo"], ans: 1 },
            { type: "mc", q: "jan mute li kepeken toki pona lon nasin seme?", options: ["lon nasin sama taso", "lon nasin ante lili", "lon nasin ike", "lon nasin pi lipu pu taso"], ans: 1 },
            { type: "mc", q: "jan li ken ala ken toki e ni: 'nasin mi li weka tan lipu pu'?", options: ["ken", "ken ala", "jan Sonja taso li ken", "ni li ike"], ans: 0 },
            { type: "mc", q: "lipu ni li toki e tenpo seme?", options: ["tenpo kama", "tenpo open", "tenpo pini suli", "tenpo moli"], ans: 1 },
            { type: "mc", q: "jan mute li kama sona e toki pona anu seme?", options: ["jan lili taso", "jan mute", "jan ala", "jan Sonja taso"], ans: 1 }
        ]
    },
    {
        id: "r10",
        tpTitle: "olin mun",
        level: "Easy",
        creator: "jan Lakuse",
        url: "https://raacz.neocities.org/toki-pona/beginner-material/stories/story-8/",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
        text: `
        "mi en jan olin li lukin e mun. jan olin li sona mute e mun. mi sona ale e mun. jan olin li pana e sona mun. "mun ni li laso. a, mun ni li lete. a, ni li mun ma ala. ni li ilo jan." mi kute e toki ona. kalama uta ona li suwi tawa mi. mi pilin lape. lukin mi li pini. mi lape la mi lukin e mun mute pi jan olin mi."
        `,
        translation: `
        "Me and my partner are looking at the night sky. My partner knows a lot about astronomy. I know nothing about astronomy. My partner teaches me about astronomy. "The night-sky is green. The astrological bodies are cold. that is not a planet. that is a satelite. I listen to him talk. His words are soothing to me. I feel sleepy. My eyes close. While I sleep, I see the many space objects my partner told me about. "
        `,
        quiz: [
            { type: "mc", q: "open la (2001), jan Sonja li pana e lipu tawa jan ale lon seme?", options: ["lon tomo sona", "lon ma Kanata", "lon linluwi", "lon esun"], ans: 2 },
            { type: "mc", q: "nimi pi toki sin ni li seme?", options: ["toki Inli", "toki pona", "toki Kanse", "toki Epelanto"], ans: 1 },
            { type: "mc", q: "kulupu pi toki pona li kama lon anu seme?", options: ["lon", "lon ala", "ona li moli", "ona li awen lon"], ans: 0 },
            { type: "mc", q: "jan Sonja en jan kulupu li pali e seme tawa nimi?", options: ["ona li weka e nimi ale", "ona li pali e nimi sin li ante e nimi", "ona li toki e ni: nimi li ike", "ona li pali ala"], ans: 1 },
            { type: "mc", q: "tenpo sike kama la, jan Sonja li pana e lipu seme?", options: ["lipu ku", "lipu su", "lipu pu", "lipu tenpo"], ans: 2 },
            { type: "mc", q: "lipu pu la, nasin pi jan seme li lon?", options: ["nasin pi jan ale", "nasin pi jan Sonja", "nasin pi jan Pije", "nasin pi jan Kipo"], ans: 1 },
            { type: "mc", q: "jan mute li kepeken toki pona lon nasin seme?", options: ["lon nasin sama taso", "lon nasin ante lili", "lon nasin ike", "lon nasin pi lipu pu taso"], ans: 1 },
            { type: "mc", q: "jan li ken ala ken toki e ni: 'nasin mi li weka tan lipu pu'?", options: ["ken", "ken ala", "jan Sonja taso li ken", "ni li ike"], ans: 0 },
            { type: "mc", q: "lipu ni li toki e tenpo seme?", options: ["tenpo kama", "tenpo open", "tenpo pini suli", "tenpo moli"], ans: 1 },
            { type: "mc", q: "jan mute li kama sona e toki pona anu seme?", options: ["jan lili taso", "jan mute", "jan ala", "jan Sonja taso"], ans: 1 }
        ]
    },
    {
        id: "r11",
        tpTitle: "noke telo",
        level: "Easy",
        creator: "jan Lakuse",
        url: "https://raacz.neocities.org/toki-pona/beginner-material/stories/story-9/",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
        text: `
        "ma li seli mute. mi pilin seli. mi wile e lete. jan mute li pilin sama mi. mi mute li alasa e lete. a, telo li lon. ona li lete ala lete? mi pilin e telo kepeken luka mi. telo li lete. mi weka e len pi noka mi. tenpo ni la, noka mi len ala. mi pana e noka mi tawa telo. pilin suwi a! pilin pona! jan mute li lukin e pali mi e pilin pona mi. ona kin li weka e len li pana e noka tawa telo. lon anpa pi suno seli la mi ale li pilin pona tan lete pi telo noka."
        `,
        translation: `
        "the land is very hot. I feel hot. I want to cool down. many people feel like me. we are searching for the cold. Ah there is water here. Is it cold? I use my hand to feel the water. The water is cold. I take off my socks. At that time, my foot is exposed. I put my foot in the water. It felt good. A good feeling! Many people watch my work and my happiness. They too remove their socks and put their feet into the water. Under the hot sun, we all feel good because of the cold water on our feet."
        `,
        quiz: [
            { type: "mc", q: "open la (2001), jan Sonja li pana e lipu tawa jan ale lon seme?", options: ["lon tomo sona", "lon ma Kanata", "lon linluwi", "lon esun"], ans: 2 },
            { type: "mc", q: "nimi pi toki sin ni li seme?", options: ["toki Inli", "toki pona", "toki Kanse", "toki Epelanto"], ans: 1 },
            { type: "mc", q: "kulupu pi toki pona li kama lon anu seme?", options: ["lon", "lon ala", "ona li moli", "ona li awen lon"], ans: 0 },
            { type: "mc", q: "jan Sonja en jan kulupu li pali e seme tawa nimi?", options: ["ona li weka e nimi ale", "ona li pali e nimi sin li ante e nimi", "ona li toki e ni: nimi li ike", "ona li pali ala"], ans: 1 },
            { type: "mc", q: "tenpo sike kama la, jan Sonja li pana e lipu seme?", options: ["lipu ku", "lipu su", "lipu pu", "lipu tenpo"], ans: 2 },
            { type: "mc", q: "lipu pu la, nasin pi jan seme li lon?", options: ["nasin pi jan ale", "nasin pi jan Sonja", "nasin pi jan Pije", "nasin pi jan Kipo"], ans: 1 },
            { type: "mc", q: "jan mute li kepeken toki pona lon nasin seme?", options: ["lon nasin sama taso", "lon nasin ante lili", "lon nasin ike", "lon nasin pi lipu pu taso"], ans: 1 },
            { type: "mc", q: "jan li ken ala ken toki e ni: 'nasin mi li weka tan lipu pu'?", options: ["ken", "ken ala", "jan Sonja taso li ken", "ni li ike"], ans: 0 },
            { type: "mc", q: "lipu ni li toki e tenpo seme?", options: ["tenpo kama", "tenpo open", "tenpo pini suli", "tenpo moli"], ans: 1 },
            { type: "mc", q: "jan mute li kama sona e toki pona anu seme?", options: ["jan lili taso", "jan mute", "jan ala", "jan Sonja taso"], ans: 1 }
        ]
    },
    {
        id: "r12",
        tpTitle: "pan mani",
        level: "Easy",
        creator: "jan Lakuse",
        url: "https://raacz.neocities.org/toki-pona/beginner-material/stories/story-10/",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
        text: `
        "mi tawa lon nasin pi tomo mute. mi pilin e kon pona suwi pi pan seli. kon li kama tan seme? noka mi li alasa e kon. mi kama lon tomo esun pan. "o kama pona a!" jan pali li toki. "tenpo pini poka la mi pini e pan sin. insa pan li jo e ko kili loje. ona li seli. sina o esun! mi toki, "mi o pana e mani seme?" "o pana e mani tutu." mi alasa e lipu mani tutu. mi pana tawa jan. jan li pana e pan seli tawa mi. esun pona. mi open e uta mi. mi lukin moku. taso pan li seli li pakala e uta mi. "ike!" mi toki. "o awen lili o pakala ala e sina." jan pali li toki.
        `,
        translation: `
        "I move on a road in the city. I smell the pleasent scent of hot bread. Where is the smell coming from? my fear search for the smell. I arrive at a bread store. "Welcome!" the worker says. "I just finished new bread." "The bread's inside have a red fruit jam" It is hot, You should buy (some)!" I say, "How much is it?" "Give me four (dollars)." I search for the four (dollars). I give it to the person. The person gives me hot bread. Fair transaction. I open my mouth. I try to eat (it). But the bread is hot and damages my mouth. "Ouch!" I communicate. "Wait a little, and it wont hurt you." The working person says.
        `,
        quiz: [
            { type: "mc", q: "open la (2001), jan Sonja li pana e lipu tawa jan ale lon seme?", options: ["lon tomo sona", "lon ma Kanata", "lon linluwi", "lon esun"], ans: 2 },
            { type: "mc", q: "nimi pi toki sin ni li seme?", options: ["toki Inli", "toki pona", "toki Kanse", "toki Epelanto"], ans: 1 },
            { type: "mc", q: "kulupu pi toki pona li kama lon anu seme?", options: ["lon", "lon ala", "ona li moli", "ona li awen lon"], ans: 0 },
            { type: "mc", q: "jan Sonja en jan kulupu li pali e seme tawa nimi?", options: ["ona li weka e nimi ale", "ona li pali e nimi sin li ante e nimi", "ona li toki e ni: nimi li ike", "ona li pali ala"], ans: 1 },
            { type: "mc", q: "tenpo sike kama la, jan Sonja li pana e lipu seme?", options: ["lipu ku", "lipu su", "lipu pu", "lipu tenpo"], ans: 2 },
            { type: "mc", q: "lipu pu la, nasin pi jan seme li lon?", options: ["nasin pi jan ale", "nasin pi jan Sonja", "nasin pi jan Pije", "nasin pi jan Kipo"], ans: 1 },
            { type: "mc", q: "jan mute li kepeken toki pona lon nasin seme?", options: ["lon nasin sama taso", "lon nasin ante lili", "lon nasin ike", "lon nasin pi lipu pu taso"], ans: 1 },
            { type: "mc", q: "jan li ken ala ken toki e ni: 'nasin mi li weka tan lipu pu'?", options: ["ken", "ken ala", "jan Sonja taso li ken", "ni li ike"], ans: 0 },
            { type: "mc", q: "lipu ni li toki e tenpo seme?", options: ["tenpo kama", "tenpo open", "tenpo pini suli", "tenpo moli"], ans: 1 },
            { type: "mc", q: "jan mute li kama sona e toki pona anu seme?", options: ["jan lili taso", "jan mute", "jan ala", "jan Sonja taso"], ans: 1 }
        ]
    },
    {
        id: "a1",
        type: "audio",
        tpTitle: "tawa lon linja",
        level: "hard",
        src: "assets/audio/tawalonlinja.mp3",
        creator: "jan Usawi",
        url: "https://janusawi.bandcamp.com/track/tawa-lon-linja",
        license: "CC BY-NC-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
        text: `jan seme li ken olin
        e pona mi e ike mi?
        jan seme li pona tawa mi?
        mi awen wan
        ni li ike e mi

        selo la mi pona tawa sina
        insa mi kin li pona
        taso ona li pakala lili
        sina wile la mi ken monsuta ala
        taso mi wile ala pakala

        mi lukin e sina li tawa lon linja
        sama jasima mi ante jasima sina
        olin la mi tawa lon linja
        sina wile e ona la o anu ala e mi
        e mi 
        e mi
        o anu ala e mi
        e mi
        o olin e mi
        taso o anu ala e mi

        mi ken jan olin lon jasima
        sina wile e ona anu seme?
        o
        tenpo pimeja la pilin sina li toki mute e jan pi sama sina
        e jan pi ante mi
        taso mi ken ala lukin ala e linja loje ni
        mi sewi mute a
        mute li lon anpa 
        o kama jo e luka mi

        selo la mi pona tawa sina
        insa mi kin li…
        ken jo e olin sina
        taso sina wile la 
        mi monsuta ala
        taso tenpo kama la 
        mi tu li pakala

        mi lukin e sina li tawa lon linja
        sama jasima mi ante jasima sina
        olin la mi tawa lon linja
        sina wile e ona la o anu ala e mi
        e mi 
        e mi
        o anu ala e mi
        e mi
        o olin e mi
        taso o anu ala e

        nasin ike ni
        sina sona, mi sona
        sina pona poka ona
        o pana ala e pilin ike tawa mi
        mi wile olin taso a! 

        mi lukin e sina li tawa lon linja
        sama jasima mi ante jasima sina
        olin la mi tawa lon linja
        sina wile e ona la o anu ala e mi
        e mi 
        e mi
        o anu ala e mi
        e mi
        o olin e mi
        taso o anu ala e mi`,
        translation: `
        who can love, 
        the good and the bad in me?
        who can be good to me?
        I'm still alone,
        it hurts me.

        on the surface, I'm good for you,
        my vibes are good too,
        but they are a little broken.
        if you want, I can stop being afraid,
        but I don't want to break.

        i see you walking on the tightrope,
        the reflection of me is different from yours.
        when I love, i walk on the tightrope.
        if you want them, don't choose me.
        (love) me,
        (love) me,
        don't choose me,
        (love) me,
        love me,
        but don't choose me.

        i can be the reflection of a loving person,
        do you want this?
        oh.
        in the dark, your feelings tell a lot about people like you,
        about people different than me.
        but I can't unsee this red line.
        I'm very high up,
        many are below,
        come hold my hand.

        on the surface, I'm good for you,
        my vibes are...
        can have your love.
        but if you want,
        I won't be afraid,
        but in the future,
        we will break.

        I see you walking on a tightrope,
        the reflection of me is different from yours.
        when I love, i walk on a tightrope.
        if you want them, don't choose me.
        (love) me,
        (love) me,
        don't choose me,
        (love) me,
        love me,
        but don't choose of me.

        this bad path,
        you know, I know,
        you are good around them.
        dont give me bad feelings.
        i only want to love!

        I see you walking on a tightrope,
        the reflection of me is different from yours.
        when I love, i walk on a tightrope.
        if you want them, don't choose me.
        (love) me,
        (love) me,
        don't choose of me,
        (love) me,
        love me,
        but don't choose of me.
        `,
        quiz: [
            { type: "mc", q: "jan li lukin e sitelin lon tenpo seme?", options: ["tenpo ni (Now)", "tenpo pini (Past)", "tenpo kama (Future)"], ans: 1 },
            { type: "mc", q: "sitelin li lon lipu seme?", options: ["lipu pi nasin ma (Nature book)", "lipu musi (Comic)", "lipu nanpa (Math book)"], ans: 0 },
            { type: "mc", q: "soweli suli li moku e seme?", options: ["kili (Fruit)", "soweli lili (Small animal)", "jan (Person)"], ans: 1 },
            { type: "mc", q: "jan li sitelin e sitelin nanpa seme?", options: ["nanpa wan", "nanpa tu", "nanpa mute"], ans: 0 },
            { type: "mc", q: "jan suli li toki e ni: sitelin li ____.", options: ["soweli (Animal)", "atu (Hat)", "ike (Bad)"], ans: 1 },
            { type: "mc", q: "sitelin li hatu anu seme?", options: ["ona li hatu", "ona li hatu ala", "mi sona ala"], ans: 1 },
            { type: "mc", q: "jan li toki tawa jan seme?", options: ["jan lili (Children)", "jan suli (Adults)", "jan ala (Nobody)"], ans: 1 },
            { type: "mc", q: "soweli suli li seme?", options: ["ona li lape", "ona li moku", "ona li tawa"], ans: 1 },
            { type: "mc", q: "jan li wile sona e ni: sitelin li ____ tawa jan suli.", options: ["pona (Good)", "ike (Scary/Bad)", "suli (Big)"], ans: 1 },
            { type: "mc", q: "ni li sitelin pi jan lawa lili. ni li lon ala lon?", options: ["lon (True)", "lon ala (False)"], ans: 0 }
        ]
    }
];