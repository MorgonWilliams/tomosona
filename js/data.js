const UI_TEXT = {
    en: {
        welcome: "Nasin Toki: The Complete Course",
        intro: "Master the language of good. 120+ words, 20 lessons, zero clutter.",
        start: "Start Course",
        lesson: "Lesson",
        test: "Checkpoint",
        vocab: "Vocabulary",
        grammar: "Grammar & Concepts",
        story: "Reading Practice",
        quiz: "Quick Quiz",
        next: "CONTINUE",
        finish: "COMPLETE LESSON",
        score: "Lesson Complete!",
        scoreMsg: "You scored:",
        back: "Back",
        outline: "Curriculum Overview",
        tapToFlip: "Tap cards to flip",
        simpleTitle: "Simple",
        simpleDesc: "Learn to express complex thoughts using basic concepts.",
        modularTitle: "Modular",
        modularDesc: "Combine words like lego bricks to create meaning.",
        positiveTitle: "Positive",
        positiveDesc: "A language designed to frame thoughts in a good way.",
        dictTitle: "Dictionary",
        dictDesc: "All words learned so far.",
        startNode: "Start",
        perfect: "Perfect!",
        good: "Good Job!",
        tryAgain: "Try Again",
        homeNav: "Home",
        pathNav: "Course",
        wordsNav: "Words",
        advancedNav: "Advanced",
        advancedTitle: "Advanced Studies",
        advancedDesc: "Deep dives into numbers, time, and complex grammar."
    },
    tp: {
        welcome: "nasin toki",
        intro: "o kama sona e toki pona. nimi ale li lon.",
        start: "o tawa nasin",
        lesson: "sona",
        test: "kipisi kute",
        vocab: "nimi sin",
        grammar: "nasin toki",
        story: "musi toki",
        quiz: "pilin sona",
        next: "TAWA",
        finish: "PINI SONA",
        score: "pini pona!",
        scoreMsg: "nanpa sina:",
        back: "tawa",
        outline: "lukin nasin",
        tapToFlip: "o luka e lipu",
        simpleTitle: "pona",
        simpleDesc: "toki e ijo suli kepeken nimi lili.",
        modularTitle: "lili",
        modularDesc: "o kama sona e ijo lili. o wan e ona.",
        positiveTitle: "pilin",
        positiveDesc: "toki ni li tawa pilin pona.",
        dictTitle: "lipu nimi",
        dictDesc: "nimi ale pi kama sona.",
        startNode: "open",
        perfect: "pona mute!",
        good: "pona!",
        tryAgain: "o kama sona sin.",
        homeNav: "tomo",
        pathNav: "nasin",
        wordsNav: "nimi",
        advancedNav: "suli",
        advancedTitle: "sona suli",
        advancedDesc: "o kama sona e nanpa e tenpo e ijo mute."
    }
};

const curriculum = [
    // --- MODULE 0: FOUNDATIONS ---
    {
        id: 1, type: "lesson", title: "The Mindset", desc: "General Principles",
        vocab: [],
        grammar: `
        <h3>The Philosophy of 'Pona'</h3>
        <p>Toki Pona forces you to focus on the <strong>essence</strong> of a thought rather than complex details.</p>

        <h3>1. Implied Politeness</h3>
        <p>There are no words for "please" or "thank you." Politeness is the default assumption. We express gratitude by telling someone <em>why</em> they are good.</p>

        <h3>2. No Tense</h3>
        <p>Verbs do not change form. Time is understood through context words (like "today" or "past").</p>

        <h3>3. Ponification (Deconstruction)</h3>
        <p>We do not translate words directly; we translate meaning. If you don't know the word, describe what it does.</p>
        <div class="grammar-box" style="background: white; border-color: var(--primary-light);">
            <ul>
                <li><strong>Friend</strong> &rarr; Good person (jan pona)</li>
                <li><strong>Car</strong> &rarr; Moving structure (tomo tawa)</li>
            </ul>
        </div>
        `,
        story: `<p>Welcome to the simple way. [cite_start]In this course, you will learn to break down the world into basic concepts[cite: 5, 6].</p>`,
        quiz: [
            { q: "How is time/tense handled?", options: ["Verbs change endings", "It is impossible", "Context words"], ans: 2 },
            { q: "True or False: You must always say 'please'.", options: ["True", "False"], ans: 1 },
            { q: "What is the core goal?", options: ["Memorize dictionary", "Simplify meaning", "Speak fast"], ans: 1 }
        ]
    },
    {
        id: 2, type: "lesson", title: "The Sounds", desc: "Phonology & Pronunciation",
        vocab: [
            { word: "jelo", def: "yellow", type: "adj", ex: "suno jelo." },
            { word: "jan", def: "person", type: "noun", ex: "jan li toki." },
            { word: "toki", def: "language, talk", type: "n/v", ex: "toki pona." },
            { word: "kalama", def: "sound, noise", type: "noun", ex: "kalama musi." },
            { word: "pona", def: "good", type: "adj", ex: "pona a!" }
        ],
        grammar: `
        <h3>The Sounds of Toki Pona</h3>
        <p>Toki Pona is phonetic. What you see is what you say. It uses only 14 letters.</p>
        
        <h3>1. The 5 Vowels</h3>
        <p>These are pure vowels, identical to Spanish, Italian, or Japanese.</p>
        <ul>
            <li><strong>a</strong> as in f<strong>a</strong>ther</li>
            <li><strong>e</strong> as in b<strong>e</strong>d</li>
            <li><strong>i</strong> as in sk<strong>i</strong> (Never like "eye")</li>
            <li><strong>o</strong> as in m<strong>o</strong>re</li>
            <li><strong>u</strong> as in f<strong>oo</strong>d</li>
        </ul>

        <h3>2. The 9 Consonants</h3>
        <p>Most consonants (<strong>k, l, m, n, p, s, t, w</strong>) are pronounced exactly as in English.</p>
        
        <div class="grammar-box" style="background: #fff3e0; border-color: #ffb74d;">
            <p><strong>⚠️ The 'J' Rule:</strong></p>
            <p>The letter <strong>j</strong> always sounds like the English <strong>y</strong> (as in "You").</p>
            <ul>
                <li><strong>jelo</strong> sounds like "Yellow".</li>
                <li><strong>jan</strong> sounds like "Yawn".</li>
                <li>It is <em>never</em> pronounced like the 'J' in "Jump".</li>
            </ul>
        </div>

        <h3>3. Stress</h3>
        <p>Always place the stress on the <strong>first</strong> syllable of a word.</p>
        <p><strong>TO</strong>-ki ... <strong>PO</strong>-na ... <strong>KA</strong>-la-ma.</p>
        `,
        story: `<p><b>toki!</b> (Hello!)</p><p><b>jan li toki kepeken kalama pona.</b> (The person speaks using good sounds.)</p><p><b>o kute e kalama.</b> (Listen to the sound.)</p>`,
        quiz: [
            { q: "How is 'j' pronounced?", options: ["Like 'j' in Jump", "Like 'y' in Yes", "Like 'h' in Hello"], ans: 1 },
            { q: "Where is the stress?", options: ["First syllable", "Last syllable", "Random"], ans: 0 },
            { q: "Translate: 'jelo'", options: ["Jello", "Yellow", "Hello"], ans: 1 },
            { q: "Which letter is NOT in Toki Pona?", options: ["k", "z", "s"], ans: 1 },
            { q: "How is 'i' pronounced?", options: ["Like 'eye'", "Like 'ski'", "Like 'it'"], ans: 1 }
        ]
    },

    // --- MODULE 1: BASIC SENTENCES ---
    {
        id: 3, type: "lesson", title: "Subject & Predicate", desc: "X li Y",
        vocab: [
            { word: "mi", def: "I, we, me", type: "pronoun", ex: "mi moku." },
            { word: "sina", def: "you", type: "pronoun", ex: "sina pona." },
            { word: "li", def: "(particle) separates subject and verb", type: "particle", ex: "jan li moku." },
            { word: "pona", def: "good, simple, to fix", type: "adj/v", ex: "ona li pona." },
            { word: "soweli", def: "animal, beast", type: "noun", ex: "soweli li lape." }
        ],
        grammar: `
        <h3>The Basic Structure: X li Y</h3>
                <p>The particle <strong>li</strong> acts as the separator between the Subject and the Predicate.</p>
        
        <div class="grammar-box" style="background: white; border-color: var(--primary-light);">
            <p><strong>soweli li pona.</strong><br>(Animal = Good. / The animal is good.)</p>
        </div>

        <h3>The Exception: mi & sina</h3>
        [cite_start]<p>If the subject is <em>exactly</em> <strong>mi</strong> (I) or <strong>sina</strong> (You), you must drop the <strong>li</strong>[cite: 66, 125].</p>
        
        <div class="grammar-box" style="background: #e8f5e9; border-color: #66bb6a;">
            <ul>
                <li>✅ <strong>mi pona.</strong> (I am good.)</li>
                <li>✅ <strong>sina soweli.</strong> (You are an animal.)</li>
                <li>❌ <em>mi li pona.</em> (Incorrect!)</li>
            </ul>
        </div>
        `,
        story: `<p><b>mi jan.</b> (I am a person.)</p><p><b>sina soweli.</b> (You are an animal.)</p><p><b>soweli li pona.</b> (The animal is good.)</p>`,
        quiz: [
            { q: "Translate: 'I am good'", options: ["mi pona", "mi li pona", "pona mi"], ans: 0 },
            { q: "Translate: 'The animal is good'", options: ["soweli pona", "soweli li pona", "li soweli pona"], ans: 1 },
            { q: "Identify the ERROR:", options: ["sina pona", "jan li pona", "sina li pona"], ans: 2 },
            { q: "What does 'li' do?", options: ["Marks the object", "Separates subject/predicate", "Means 'and'"], ans: 1 }
        ]
    },
    {
        id: 4, type: "lesson", title: "The Direct Object", desc: "X li Y e Z",
        vocab: [
            { word: "e", def: "(particle) marks direct object", type: "particle", ex: "mi moku e kili." },
            { word: "moku", def: "eat, drink, food", type: "n/v", ex: "mi moku." },
            { word: "kili", def: "fruit, vegetable", type: "noun", ex: "kili li pona." },
            { word: "lukin", def: "see, look, eyes", type: "n/v", ex: "mi lukin e sina." },
            { word: "jo", def: "have, carry", type: "verb", ex: "mi jo e ilo." }
        ],
        grammar: `
        <h3>The Object Marker: e</h3>
        [cite_start]<p>If the subject does an action <strong>to</strong> something, we mark that thing with <strong>e</strong>[cite: 69].</p>

        <div class="grammar-box" style="background: white; border-color: var(--primary-light);">
            <p><strong>Formula:</strong> Subject + li + Action + <span style="color:var(--primary); font-weight:900;">e</span> + Object</p>
            <p><strong>soweli li moku e kili.</strong><br>(Animal eats &rarr; fruit.)</p>
        </div>

        <h3>Transitive vs Intransitive</h3>
        <ul>
            <li><strong>mi moku.</strong> (I eat. - General activity)</li>
            <li><strong>mi moku e kili.</strong> (I eat the fruit. - Specific target)</li>
        </ul>
        `,
        story: `<p><b>mi moku e kili.</b> (I eat fruit.)</p><p><b>soweli li lukin e mi.</b> (The animal sees me.)</p><p><b>mi jo e moku.</b> (I have food.)</p>`,
        quiz: [
            { q: "Translate: 'I see the fruit'", options: ["mi lukin kili", "mi lukin e kili", "mi e lukin kili"], ans: 1 },
            { q: "Translate: 'The animal eats'", options: ["soweli li moku", "soweli moku", "soweli li moku e"], ans: 0 },
            { q: "What marks the direct object?", options: ["li", "e", "pi"], ans: 1 },
            { q: "Translate: 'jo'", options: ["To eat", "To have", "To see"], ans: 1 }
        ]
    },

    // --- MODULE 2: MODIFIERS ---
    {
        id: 5, type: "lesson", title: "Modifiers", desc: "Adjectives & Phrase Order",
        vocab: [
            { word: "tomo", def: "house, room, structure", type: "noun", ex: "tomo mi." },
            { word: "waso", def: "bird, flying creature", type: "noun", ex: "waso li tawa." },
            { word: "suli", def: "big, important", type: "adj", ex: "jan suli." },
            { word: "lili", def: "small, little", type: "adj", ex: "tomo lili." },
            { word: "pimeja", def: "black, dark", type: "adj", ex: "soweli pimeja." }
        ],
        grammar: `
        <h3>Modifier Order</h3>
        [cite_start]<p>In Toki Pona, modifiers always follow the head word[cite: 73].</p>

        <div class="grammar-box" style="background: white; border-color: var(--primary-light);">
            <ul>
                [cite_start]<li><strong>tomo waso</strong> = Bird-house (Head is house) [cite: 75]</li>
                [cite_start]<li><strong>waso tomo</strong> = House-bird / Indoor bird (Head is bird) [cite: 76]</li>
            </ul>
        </div>
        `,
        story: `<p><b>mi lukin e waso suli.</b> (I see a big bird.)</p><p><b>tomo waso li lili.</b> (The birdhouse is small.)</p><p><b>soweli pimeja li moku e kili.</b> (The dark animal eats fruit.)</p>`,
        quiz: [
            { q: "Translate: 'Big house'", options: ["suli tomo", "tomo suli", "tomo li suli"], ans: 1 },
            { q: "Translate: 'waso tomo'", options: ["Birdhouse", "House-bird"], ans: 1 },
            { q: "Translate: 'tomo waso'", options: ["Birdhouse", "House-bird"], ans: 0 },
            { q: "What is the 'head' word in 'jan pona'?", options: ["jan", "pona"], ans: 0 }
        ]
    },
    {
        id: 6, type: "lesson", title: "The Particle 'pi'", desc: "Regrouping Modifiers",
        vocab: [
            { word: "pi", def: "(particle) of, regrouping", type: "particle", ex: "poki pi telo wawa." },
            { word: "poki", def: "container, bowl, cup", type: "noun", ex: "poki li lon." },
            { word: "telo", def: "water, liquid", type: "noun", ex: "telo li pona." },
            { word: "wawa", def: "strong, power, energy", type: "adj", ex: "telo wawa (coffee)." }
        ],
        grammar: `
        <h3>The Function of 'pi'</h3>
        <p><strong>pi</strong> regroups modifiers. [cite_start]It is used when a modifier consists of two or more words[cite: 79].</p>

        <div class="grammar-box" style="background: white; border-color: var(--primary-light);">
            <p><strong>1. poki telo wawa</strong><br>= Container + Liquid + Strong.<br>&rarr; A sturdy water-bottle.</p>
            <hr>
            <p><strong>2. poki <span style="color:var(--primary); font-weight:900;">pi</span> telo wawa</strong><br>= Container of (Liquid + Strong).<br>&rarr; [cite_start]A cup of coffee[cite: 80].</p>
        </div>
        `,
        story: `<p><b>mi jo e poki pi telo wawa.</b> (I have a cup of coffee.)</p><p><b>telo wawa li pona tawa mi.</b> (Coffee is good to me.)</p><p><b>poki ni li wawa.</b> (This cup is strong.)</p>`,
        quiz: [
            { q: "What does 'pi' do?", options: ["Marks the object", "Regroups modifiers", "Means 'and'"], ans: 1 },
            { q: "Translate: 'Bag of red water'", options: ["poki telo loje", "poki pi telo loje", "poki loje telo"], ans: 1 },
            { q: "Translate: 'Strong water-bottle'", options: ["poki telo wawa", "poki pi telo wawa"], ans: 0 },
            { q: "Identify ERROR:", options: ["jan pi pona", "jan pona", "tomo pi telo"], ans: 0 }
        ]
    },

    // --- MODULE 3: COMPLEXITY ---
    {
        id: 7, type: "lesson", title: "Negation", desc: "Using 'ala'",
        vocab: [
            { word: "ala", def: "no, not, zero", type: "particle", ex: "mi lape ala." },
            { word: "lape", def: "sleep, rest", type: "verb", ex: "ona li lape." },
            { word: "pali", def: "work, do, make", type: "verb", ex: "mi pali e tomo." },
            { word: "ni", def: "this, that", type: "pronoun", ex: "ni li pona." }
        ],
        grammar: `
        <h3>The Word 'ala'</h3>
        [cite_start]<p>To negate a word or phrase, append <strong>ala</strong> immediately after it[cite: 83].</p>

        <div class="grammar-box" style="background: white; border-color: var(--primary-light);">
            <ul>
                [cite_start]<li><strong>mi pali ala.</strong> (I will not work.) [cite: 84]</li>
                [cite_start]<li><strong>jan ala li lon.</strong> (No person is here / Nobody is here.) [cite: 85]</li>
            </ul>
        </div>
        `,
        story: `<p><b>mi pali. taso sina pali ala.</b> (I work. But you don't work.)</p><p><b>jan ala li lape.</b> (Nobody sleeps.)</p><p><b>ni li pona ala.</b> (This is not good.)</p>`,
        quiz: [
            { q: "Translate: 'I do not sleep'", options: ["mi lape ala", "mi ala lape", "mi li lape ala"], ans: 0 },
            { q: "Translate: 'No person'", options: ["jan ala", "ala jan", "jan li ala"], ans: 0 },
            { q: "Where does 'ala' go?", options: ["Before the word", "After the word"], ans: 1 }
        ]
    },
    {
        id: 8, type: "lesson", title: "Prepositions", desc: "lon, tawa, kepeken",
        vocab: [
            { word: "lon", def: "at, in, on, exist", type: "prep", ex: "mi lon tomo." },
            { word: "tawa", def: "to, towards, for", type: "prep", ex: "mi tawa sina." },
            { word: "kepeken", def: "using, with", type: "prep", ex: "mi moku kepeken ilo." },
            { word: "tan", def: "from, because of", type: "prep", ex: "mi kama tan ma." },
            { word: "ilo", def: "tool, device", type: "noun", ex: "ilo li pona." }
        ],
        grammar: `
        <h3>Prepositions</h3>
        <p>Prepositions mark indirect objects. [cite_start]They do <strong>not</strong> use <em>e</em>[cite: 105].</p>

        <h3>1. lon (Location)</h3>
        <p><strong>mi lon tomo.</strong> (I am in the house.)</p>

        <h3>2. tawa (Direction)</h3>
        <p><strong>mi tawa tomo.</strong> (I go to the house.)</p>

        <h3>3. kepeken (Instrument)</h3>
        [cite_start]<p><strong>ona li kepeken ilo.</strong> (They use tools.) Note: Do not use <em>e</em> here! [cite: 111]</p>
        `,
        story: `<p><b>mi lon tomo.</b> (I am in the house.)</p><p><b>mi tawa esun.</b> (I go to the market.)</p><p><b>mi pali kepeken ilo.</b> (I work using tools.)</p>`,
        quiz: [
            { q: "Translate: 'I am in the house'", options: ["mi lon tomo", "mi lon e tomo", "mi li lon tomo"], ans: 0 },
            { q: "Translate: 'I go to you'", options: ["mi tawa sina", "mi tawa e sina", "mi li tawa sina"], ans: 0 },
            { q: "True/False: Prepositions use 'e'.", options: ["True", "False"], ans: 1 }
        ]
    },
    {
        id: 9, type: "lesson", title: "Preverbs", desc: "wile, sona, kama, ken",
        vocab: [
            { word: "wile", def: "want, need", type: "preverb", ex: "mi wile moku." },
            { word: "sona", def: "know (how to)", type: "preverb", ex: "mi sona pali." },
            { word: "ken", def: "can, able to", type: "preverb", ex: "mi ken tawa." },
            { word: "kama", def: "come, become, start", type: "preverb", ex: "mi kama sona." },
            { word: "awen", def: "stay, keep doing", type: "preverb", ex: "o awen pali." },
            { word: "open", def: "open, start", type: "preverb", ex: "mi open pali." },
            { word: "pini", def: "end, finish", type: "preverb", ex: "mi pini pali." }
        ],
        grammar: `
        <h3>Changing the Action</h3>
        [cite_start]<p>Preverbs go <strong>before</strong> the main verb to change its nature[cite: 115].</p>

        <div class="grammar-box" style="background: white; border-color: var(--primary-light);">
            <ul>
                [cite_start]<li><strong>mi <span style="color:var(--primary);">wile</span> ala toki.</strong> (I don't want to talk.) [cite: 117]</li>
                <li><strong>sina <span style="color:var(--primary);">ken</span> toki.</strong> (You can speak.)</li>
                [cite_start]<li><strong>mi <span style="color:var(--primary);">kama</span> sona.</strong> (I come to know / I learned.) [cite: 227]</li>
            </ul>
        </div>
        `,
        story: `<p><b>mi wile moku.</b> (I want to eat.)</p><p><b>taso mi ken ala.</b> (But I cannot.)</p><p><b>mi kama sona e pali.</b> (I am learning the work.)</p>`,
        quiz: [
            { q: "Translate: 'I want to talk'", options: ["mi wile toki", "mi toki wile", "mi wile e toki"], ans: 0 },
            { q: "Translate: 'I can work'", options: ["mi ken pali", "mi pali ken", "mi ken e pali"], ans: 0 },
            { q: "Translate: 'I learned'", options: ["mi kama sona", "mi sona kama", "mi pini sona"], ans: 0 }
        ]
    },
    {
        id: 10, type: "lesson", title: "Conjunctions", desc: "en, anu, and repetition",
        vocab: [
            { word: "en", def: "and (subjects only)", type: "particle", ex: "mi en sina." },
            { word: "anu", def: "or", type: "particle", ex: "moku anu telo." },
            { word: "taso", def: "but, only", type: "particle", ex: "mi wile, taso..." },
            { word: "kin", def: "indeed, too", type: "particle", ex: "mi kin." }
        ],
        grammar: `
        <h3>No Universal 'And'</h3>
        <p>Toki Pona does not have a single word for "and".</p>

        <h3>1. Joining Subjects (en)</h3>
        [cite_start]<p>Use <strong>en</strong> only for subjects[cite: 121].</p>
        <p><strong>mi <span style="color:var(--primary);">en</span> sina li tawa.</strong> (You and I go.)</p>

        <h3>2. Joining Verbs (li)</h3>
        [cite_start]<p>Repeat the <strong>li</strong>[cite: 123].</p>
        <p><strong>ona li moku <span style="color:var(--primary);">li</span> lape.</strong> (They eat and sleep.)</p>

        <h3>3. Joining Objects (e)</h3>
        [cite_start]<p>Repeat the <strong>e</strong>[cite: 127].</p>
        <p><strong>mi moku e kili <span style="color:var(--primary);">e</span> pan.</strong> (I eat fruit and bread.)</p>
        `,
        story: `<p><b>jan en soweli li lape.</b> (The person and the animal sleep.)</p><p><b>mi moku e kili e telo.</b> (I consume fruit and water.)</p><p><b>mi wile tawa, taso mi lape.</b> (I want to go, but I sleep.)</p>`,
        quiz: [
            { q: "Translate: 'Me and you'", options: ["mi en sina", "mi li sina", "mi e sina"], ans: 0 },
            { q: "Translate: 'Eat and sleep'", options: ["moku en lape", "moku li lape", "moku e lape"], ans: 1 },
            { q: "What connects subjects?", options: ["en", "li", "anu"], ans: 0 }
        ]
    },

    // --- MODULE 4: THE PHYSICAL WORLD ---
    {
        id: 11, type: "lesson", title: "Nature & Elements", desc: "Basic matter",
        vocab: [
            { word: "ma", def: "land, earth, country", type: "noun", ex: "ma pona." },
            { word: "suno", def: "sun, light", type: "noun", ex: "suno li seli." },
            { word: "mun", def: "moon, star", type: "noun", ex: "mun li walo." },
            { word: "telo", def: "water, liquid", type: "noun", ex: "telo li lete." },
            { word: "ko", def: "semi-solid, paste, powder", type: "noun", ex: "ko jaki." },
            { word: "kon", def: "air, wind, spirit", type: "noun", ex: "kon li tawa." },
            { word: "kiwen", def: "hard thing, rock, metal", type: "noun", ex: "kiwen li suli." },
            { word: "kasi", def: "plant, tree, herb", type: "noun", ex: "kasi li laso." },
            { word: "soko", def: "fungus, mushroom", type: "noun", ex: "soko lili." }
        ],
        grammar: `
        <h3>Matter States</h3>
        <p>Toki Pona divides matter by texture/state:</p>
        <ul>
            <li><strong>telo:</strong> Liquid.</li>
            [cite_start]<li><strong>ko:</strong> Squishy/Powder (Mud, gum, clay)[cite: 434].</li>
            [cite_start]<li><strong>kiwen:</strong> Hard (Stone, metal, glass)[cite: 431].</li>
            [cite_start]<li><strong>kon:</strong> Gas/Invisible (Air, soul)[cite: 437].</li>
        </ul>
        `,
        story: `<p><b>ma li jo e kiwen e kasi.</b> (The land has rocks and plants.)</p><p><b>kon li tawa.</b> (The wind blows.)</p><p><b>suno li seli e telo.</b> (The sun heats the water.)</p>`,
        quiz: [
            { q: "What is 'ko'?", options: ["Hard rock", "Squishy/Paste", "Gas"], ans: 1 },
            { q: "Translate: 'Hard rock'", options: ["kiwen", "ko", "kon"], ans: 0 },
            { q: "Translate: 'Air'", options: ["kon", "kiwen", "ma"], ans: 0 }
        ]
    },
    {
        id: 12, type: "lesson", title: "Shapes & Space", desc: "Geometry and orientation",
        vocab: [
            { word: "sike", def: "round, circle, ball, cycle", type: "noun", ex: "sike suno." },
            { word: "leko", def: "block, square, stairs", type: "noun", ex: "leko kiwen." },
            { word: "linja", def: "line, string, hair, rope", type: "noun", ex: "linja mute." },
            { word: "palisa", def: "stick, rod, pointy thing", type: "noun", ex: "palisa kasi." },
            { word: "supa", def: "horizontal surface, furniture", type: "noun", ex: "supa lape (bed)." },
            { word: "sinpin", def: "vertical surface, wall, face", type: "noun", ex: "sinpin tomo." },
            { word: "lupa", def: "hole, door, window", type: "noun", ex: "lupa li open." },
            { word: "nena", def: "bump, hill, nose, button", type: "noun", ex: "nena suli." }
        ],
        grammar: `
        <h3>describing Shapes</h3>
        <p>Objects are often named by their shape:</p>
        <ul>
            [cite_start]<li><strong>sike:</strong> Anything round (ball, wheel, year)[cite: 611].</li>
            [cite_start]<li><strong>palisa:</strong> Anything long and hard (stick, branch)[cite: 572].</li>
            [cite_start]<li><strong>linja:</strong> Anything long and flexible (hair, rope)[cite: 474].</li>
        </ul>
        `,
        story: `<p><b>sike suno li lon sewi.</b> (The sun-circle is in the sky.)</p><p><b>mi lape lon supa.</b> (I sleep on the surface/bed.)</p><p><b>lupa li lon sinpin.</b> (A hole/door is in the wall.)</p>`,
        quiz: [
            { q: "What is 'sike'?", options: ["Square", "Round/Circle", "Line"], ans: 1 },
            { q: "Translate: 'Rope'", options: ["linja", "palisa", "leko"], ans: 0 },
            { q: "Translate: 'Bed (Sleeping surface)'", options: ["supa lape", "sinpin lape", "lupa lape"], ans: 0 }
        ]
    },
    {
        id: 13, type: "lesson", title: "Spatial Directions", desc: "Up, Down, Side",
        vocab: [
            { word: "sewi", def: "up, sky, divine", type: "noun", ex: "lon sewi." },
            { word: "anpa", def: "down, floor, humble", type: "noun", ex: "lon anpa." },
            { word: "poka", def: "side, hip, nearby", type: "noun", ex: "lon poka." },
            { word: "monsi", def: "back, rear, behind", type: "noun", ex: "lon monsi." },
            { word: "insa", def: "inside, stomach, center", type: "noun", ex: "lon insa." },
            { word: "selo", def: "outside, skin, shell, bark", type: "noun", ex: "selo kasi." },
            { word: "nasin", def: "path, way, method", type: "noun", ex: "nasin pona." }
        ],
        grammar: `
        <h3>Location</h3>
        [cite_start]<p>These words function as nouns but are often used with <em>lon</em>[cite: 482].</p>
        <ul>
            <li><strong>lon sewi:</strong> At up (Above).</li>
            <li><strong>lon anpa:</strong> At down (Below).</li>
            <li><strong>lon insa:</strong> At inside (Inside).</li>
        </ul>
        `,
        story: `<p><b>waso li lon sewi.</b> (The bird is above.)</p><p><b>mi lon insa tomo.</b> (I am inside the house.)</p><p><b>jan li tawa lon nasin.</b> (The person walks on the path.)</p>`,
        quiz: [
            { q: "Translate: 'Above'", options: ["lon sewi", "lon anpa", "lon insa"], ans: 0 },
            { q: "Translate: 'Inside'", options: ["lon insa", "lon selo", "lon poka"], ans: 0 },
            { q: "What is 'nasin'?", options: ["Path/Way", "Sky", "Floor"], ans: 0 }
        ]
    },

    // --- MODULE 5: THE SELF & SOCIETY ---
    {
        id: 14, type: "lesson", title: "The Body", desc: "Anatomy",
        vocab: [
            { word: "sijelo", def: "body, torso, physical state", type: "noun", ex: "sijelo mi." },
            { word: "lawa", def: "head, mind, control", type: "noun", ex: "lawa mi." },
            { word: "luka", def: "hand, arm, five", type: "noun", ex: "luka mi." },
            { word: "noka", def: "foot, leg, bottom", type: "noun", ex: "noka mi." },
            { word: "uta", def: "mouth, lips", type: "noun", ex: "uta mi." },
            { word: "kute", def: "ear, hearing", type: "noun", ex: "kute mi." },
            { word: "oko", def: "eye (often merged with lukin)", type: "noun", ex: "oko mi." }
        ],
        grammar: `
        <h3>Simplified Anatomy</h3>
        <p>Toki Pona groups body parts by function:</p>
        <ul>
            [cite_start]<li><strong>luka:</strong> Hand, arm, and the number 5[cite: 484].</li>
            [cite_start]<li><strong>noka:</strong> Foot, leg, and the bottom of things[cite: 556].</li>
            [cite_start]<li><strong>lawa:</strong> Head and the concept of "control"[cite: 456].</li>
        </ul>
        `,
        story: `<p><b>lawa mi li pilin pona.</b> (My head/mind feels good.)</p><p><b>mi kepeken luka mi.</b> (I use my hands.)</p><p><b>noka li tawa.</b> (The legs move.)</p>`,
        quiz: [
            { q: "What is 'luka'?", options: ["Head", "Hand/Arm", "Foot"], ans: 1 },
            { q: "What is 'lawa'?", options: ["Head/Control", "Leg", "Mouth"], ans: 0 },
            { q: "Translate: 'Mouth'", options: ["uta", "oko", "kute"], ans: 0 }
        ]
    },
    {
        id: 15, type: "lesson", title: "People & Society", desc: "Roles and Groups",
        vocab: [
            { word: "meli", def: "woman, female", type: "noun", ex: "jan meli." },
            { word: "mije", def: "man, male", type: "noun", ex: "jan mije." },
            { word: "tonsi", def: "non-binary, trans", type: "noun", ex: "jan tonsi." },
            { word: "mama", def: "parent, creator", type: "noun", ex: "mama mi." },
            { word: "kulupu", def: "group, community", type: "noun", ex: "kulupu pona." },
            { word: "esun", def: "market, shop, trade", type: "noun", ex: "tawa esun." },
            { word: "mani", def: "money, wealth, livestock", type: "noun", ex: "mani mute." }
        ],
        grammar: `
        <h3>Gender and Roles</h3>
        <p>Toki Pona words are gender-neutral by default (*jan* = person). To specify gender, use adjectives:</p>
        <ul>
            <li><strong>jan meli:</strong> Female person.</li>
            <li><strong>jan mije:</strong> Male person.</li>
            [cite_start]<li><strong>jan tonsi:</strong> Non-binary person[cite: 656].</li>
        </ul>
        `,
        story: `<p><b>mama mi li lon tomo.</b> (My parent is at home.)</p><p><b>mi esun e kili.</b> (I trade/buy fruit.)</p><p><b>kulupu li toki.</b> (The community talks.)</p>`,
        quiz: [
            { q: "Translate: 'Woman'", options: ["jan meli", "jan mije", "jan tonsi"], ans: 0 },
            { q: "What is 'mani'?", options: ["Money/Wealth", "Food", "House"], ans: 0 },
            { q: "Translate: 'Group'", options: ["kulupu", "esun", "mama"], ans: 0 }
        ]
    },
    {
        id: 16, type: "lesson", title: "Conflict & Action", desc: "Strong verbs",
        vocab: [
            { word: "utala", def: "fight, hit, war", type: "verb", ex: "jan utala." },
            { word: "alasa", def: "hunt, gather, try", type: "verb", ex: "alasa kili." },
            { word: "lanpan", def: "take, seize, steal", type: "verb", ex: "lanpan e mani." },
            { word: "moli", def: "die, kill, dead", type: "verb", ex: "soweli li moli." },
            { word: "pakala", def: "break, mistake, accident", type: "verb", ex: "ilo li pakala." },
            { word: "weka", def: "away, absent, remove", type: "adj", ex: "ona li weka." }
        ],
        grammar: `
        <h3>Destructive Actions</h3>
        <ul>
            <li><strong>pakala:</strong> Can mean "broken" (adjective) or "to break" (verb) or "Mistake!" (interjection) [cite_start][cite: 567].</li>
            <li><strong>moli:</strong> Means "dead" or "to die". [cite_start]To say "kill", use <em>moli e...</em> (To make dead)[cite: 521].</li>
        </ul>
        `,
        story: `<p><b>mi alasa e moku.</b> (I hunt/forage for food.)</p><p><b>ilo mi li pakala.</b> (My tool is broken.)</p><p><b>o weka e jaki.</b> (Remove the dirt!) [cite: 674]</p>`,
        quiz: [
            { q: "Translate: 'Fight'", options: ["utala", "alasa", "lanpan"], ans: 0 },
            { q: "Translate: 'Broken'", options: ["pakala", "moli", "weka"], ans: 0 },
            { q: "What is 'alasa'?", options: ["Hunt/Try", "Fight", "Sleep"], ans: 0 }
        ]
    },

    // --- MODULE 6: ABSTRACT CONCEPTS ---
    {
        id: 17, type: "lesson", title: "Abstract Qualities", desc: "Describing the state of things",
        vocab: [
            { word: "sin", def: "new, fresh", type: "adj", ex: "ilo sin." },
            { word: "majuna", def: "old, ancient", type: "adj", ex: "jan majuna." },
            { word: "ante", def: "different, other, change", type: "adj", ex: "ma ante." },
            { word: "sama", def: "same, similar", type: "adj", ex: "ona li sama." },
            { word: "suwi", def: "sweet, cute", type: "adj", ex: "soweli suwi." },
            { word: "jaki", def: "dirty, gross", type: "adj", ex: "telo jaki." },
            { word: "ike", def: "bad, evil, complex", type: "adj", ex: "jan ike." },
            { word: "nasa", def: "strange, crazy, drunk", type: "adj", ex: "jan nasa." },
            { word: "jasima", def: "reflect, mirror, opposite", type: "noun", ex: "jasima suno." }
        ],
        grammar: `
        <h3>Opposites</h3>
        <ul>
            <li><strong>pona</strong> (good) vs <strong>ike</strong> (bad/complex).</li>
            [cite_start]<li><strong>sin</strong> (new) vs <strong>majuna</strong> (old)[cite: 496].</li>
            <li><strong>jaki</strong> (dirty) vs <strong>suwi</strong> (sweet/cute) (contextually).</li>
        </ul>
        `,
        story: `<p><b>tomo sin li pona.</b> (The new house is good.)</p><p><b>telo jaki li ike.</b> (Dirty water is bad.)</p><p><b>soweli suwi li lape.</b> (The cute animal sleeps.)</p>`,
        quiz: [
            { q: "Translate: 'Old'", options: ["majuna", "sin", "ante"], ans: 0 },
            { q: "Translate: 'Bad'", options: ["ike", "pona", "suwi"], ans: 0 },
            { q: "Translate: 'Cute'", options: ["suwi", "jaki", "nasa"], ans: 0 }
        ]
    },
    {
        id: 18, type: "lesson", title: "Communication & Art", desc: "Expressing ideas",
        vocab: [
            { word: "sitelen", def: "image, write, draw", type: "noun", ex: "sitelen pona." },
            { word: "nimi", def: "word, name", type: "noun", ex: "nimi mi." },
            { word: "kalama", def: "sound, voice", type: "noun", ex: "kalama musi." },
            { word: "musi", def: "fun, art, game", type: "noun", ex: "tomo musi." },
            { word: "kule", def: "color, painted", type: "adj", ex: "sitelen kule." },
            { word: "linluwi", def: "network, internet, connection", type: "noun", ex: "kulupu linluwi." }
        ],
        grammar: `
        <h3>Creativity</h3>
        [cite_start]<p><strong>musi</strong> covers all forms of entertainment: art, dance, games, and fun[cite: 533].</p>
        [cite_start]<p><strong>sitelen</strong> is any visual representation: writing, drawing, or symbols[cite: 619].</p>
        `,
        story: `<p><b>mi sitelen e nimi.</b> (I write words.)</p><p><b>kalama musi li pona.</b> (Music is good.)</p><p><b>mi kepeken linluwi.</b> (I use the internet.) [cite: 472]</p>`,
        quiz: [
            { q: "What is 'sitelen'?", options: ["Image/Write", "Sound", "Game"], ans: 0 },
            { q: "Translate: 'Name'", options: ["nimi", "sitelen", "kulupu"], ans: 0 },
            { q: "Translate: 'Music'", options: ["kalama musi", "kalama ike", "kalama suli"], ans: 0 }
        ]
    },
    {
        id: 19, type: "lesson", title: "Animals & Life", desc: "Specific creatures",
        vocab: [
            { word: "akesi", def: "reptile, amphibian, non-cute animal", type: "noun", ex: "akesi li loje." },
            { word: "kala", def: "fish, sea creature", type: "noun", ex: "kala li tawa." },
            { word: "pipi", def: "bug, insect", type: "noun", ex: "pipi lili." },
            { word: "mu", def: "(animal noise)", type: "interjection", ex: "soweli li mu." },
            { word: "misikeke", def: "medicine, cure", type: "noun", ex: "telo misikeke." }
        ],
        grammar: `
        <h3>Categorizing Life</h3>
        <ul>
            <li><strong>soweli:</strong> Mammals/Land animals.</li>
            <li><strong>waso:</strong> Birds/Flying things.</li>
            [cite_start]<li><strong>kala:</strong> Fish/Swimming things[cite: 403].</li>
            [cite_start]<li><strong>akesi:</strong> Reptiles/Amphibians/"Scary" things[cite: 343].</li>
            [cite_start]<li><strong>pipi:</strong> Bugs/Insects[cite: 590].</li>
        </ul>
        `,
        story: `<p><b>kala li lon telo.</b> (Fish are in the water.)</p><p><b>akesi li moku e pipi.</b> (The lizard eats the bug.)</p><p><b>soweli li mu.</b> (The animal says 'mu'.)</p>`,
        quiz: [
            { q: "Translate: 'Fish'", options: ["kala", "akesi", "pipi"], ans: 0 },
            { q: "Translate: 'Bug'", options: ["pipi", "soweli", "kala"], ans: 0 },
            { q: "What sound does an animal make?", options: ["mu", "a", "o"], ans: 0 }
        ]
    },
    {
        id: 20, type: "lesson", title: "Particles & Emotion", desc: "Flavor words",
        vocab: [
            { word: "kin", def: "indeed, too, also", type: "particle", ex: "mi kin." },
            { word: "namako", def: "spice, extra, adornment", type: "noun", ex: "moku namako." },
            { word: "a", def: "(emotion!)", type: "interjection", ex: "pona a!" },
            { word: "n", def: "hmm...", type: "interjection", ex: "n..." }
        ],
        grammar: `
        <h3>Adding Emotion</h3>
        <p><strong>a</strong> is used to add emphasis or emotion to the previous word.</p>
        <p><strong>pona a!</strong> (So good! / Wow!).</p>
        
        <h3>Adding Emphasis</h3>
        <p><strong>kin</strong> means "also" or "indeed".</p>
        [cite_start]<p><strong>mi kin wile tawa.</strong> (I *also* want to go.)[cite: 425].</p>
        `,
        story: `<p><b>ni li pona a!</b> (This is great!) [cite: 206]</p><p><b>mi kin.</b> (Me too.)</p><p><b>o pana e namako.</b> (Add spice/extra.)</p>`,
        quiz: [
            { q: "Translate: 'So good!'", options: ["pona a!", "pona kin", "pona namako"], ans: 0 },
            { q: "Translate: 'Me too'", options: ["mi kin", "mi a", "mi namako"], ans: 0 }
        ]
    }
];

const advancedCurriculum = [
    {
        id: "A1", type: "advanced", title: "nasin nanpa pona", desc: "Big Numbers",
        vocab: [
            { word: "ale", def: "100, number multiplier", type: "num", ex: "wan ale (100)" }
        ],
        grammar: `
            <h3>Base 100 System</h3>
            <p>For big numbers, split them into groups of two digits. <strong>ale</strong> is the multiplier.</p>
            <ul>
                <li><strong>wan ale</strong> = 100 (1 × 100)</li>
                <li><strong>wan ale ale</strong> = 10,000 (1 × 100²)</li>
            </ul>
        `,
        story: `<p><b>mi jo e mani mute.</b> (I have much money.)</p>`,
        quiz: [
            { q: "What is 'wan ale'?", options: ["100", "101", "110"], ans: 0 }
        ]
    }
];
