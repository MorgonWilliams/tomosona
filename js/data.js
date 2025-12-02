/**
 * TOKI PONA EDUCATIONAL DATA
 * File: js/data.js
 */

const UI_TEXT = {
    en: {
        welcome: "The simple way to learn Toki Pona",
        intro: "Master the language of good in 18 simple lessons. No clutter, no distractions, just you and 120 words.",
        start: "Start Journey",
        lesson: "Lesson",
        test: "Checkpoint",
        vocab: "New Vocabulary",
        grammar: "Grammar Rules",
        story: "Story Time",
        quiz: "Quick Quiz",
        next: "CONTINUE",
        finish: "COMPLETE LESSON",
        score: "Lesson Complete!",
        scoreMsg: "You scored:",
        back: "Back",
        outline: "Curriculum Overview",
        tapToFlip: "Tap cards to flip",
        simpleTitle: "Simple",
        simpleDesc: "Learn to express complex thoughts using only ~120 words.",
        modularTitle: "Modular",
        modularDesc: "Combine basic concepts like lego bricks to create meaning.",
        positiveTitle: "Positive",
        positiveDesc: "A language designed to frame thoughts in a good way.",
        dictTitle: "Dictionary",
        dictDesc: "All words learned so far.",
        startNode: "Start",
        perfect: "Perfect!",
        good: "Good Job!",
        tryAgain: "Try Again",
        homeNav: "Home",
        pathNav: "Path",
        wordsNav: "Words",
        advancedNav: "Advanced",
        advancedTitle: "Advanced Studies",
        advancedDesc: "Deep dives into numbers, time, and complex grammar."
    },
    tp: {
        welcome: "nasin pona pi kama sona",
        intro: "o kama sona e toki pona kepeken nasin lili. ijo ike li lon ala. sina en nimi 120 taso li lon.",
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
    // --- SECTION 1: BASICS ---
    {
        id: 1, type: "lesson", title: "Me & You (Basics)", desc: "Pronouns and Identity",
        vocab: [
            { word: "mi", def: "I, me, we, us", type: "pronoun", ex: "mi moku. (I eat.)" },
            { word: "sina", def: "you", type: "pronoun", ex: "sina pona. (You are good.)" },
            { word: "jan", def: "person, human, to personify", type: "n/v/adj", ex: "jan li lape. (The person sleeps.)" },
            { word: "pona", def: "good, simple, to fix", type: "n/v/adj", ex: "mi pona. (I am good.)" },
            { word: "moku", def: "food, to eat/drink", type: "n/v/adj", ex: "mi moku. (I eat.)" }
        ],
        grammar: `
            <h3>1. The Golden Rule: X li Y</h3>
            <p>Welcome to Toki Pona! In English, we worry about verb tenses and complex grammar. Here, we care about <strong>context</strong>.</p>
            
            <p>A basic sentence has a Subject (what we are talking about) and a Predicate (what it is or does).</p>
            
            <h3>2. The Exception: "mi" and "sina"</h3>
            <p>Usually, we use a separator word called <code>li</code>. However, if the subject is exactly <strong>mi</strong> (I/we) or <strong>sina</strong> (you), we skip the separator!.</p>
            
            <div class="grammar-box" style="background: white; border-color: var(--primary-light);">
                <ul>
                    <li><strong>mi moku.</strong> = I eat. (or "I am eating")</li>
                    <li><strong>sina pona.</strong> = You are good. (or "You fix")</li>
                </ul>
            </div>
            
            <p><strong>Note:</strong> There is no word for "am", "is", or "are". We simply place the description next to the subject.</p>
        `,
        story: `<p><b>mi jan.</b> (I am a person.)</p><p><b>sina jan.</b> (You are a person.)</p><p><b>mi pona.</b> (I am good.)</p>`,
        quiz: [
            { q: "Translate: 'I eat'", options: ["mi moku", "sina moku", "moku mi"], ans: 0 },
            { q: "What does 'pona' mean?", options: ["Bad", "Good/Simple", "Person"], ans: 1 },
            { q: "Translate: 'You are good'", options: ["sina pona", "mi pona", "sina moku"], ans: 0 },
            { q: "Translate to English: 'mi jan'", options: ["I am a person", "You are a person", "Person eats"], ans: 0 },
            { q: "Translate to English: 'sina moku'", options: ["I eat", "You eat", "Good food"], ans: 1 },
            { q: "Identify the ERROR:", options: ["mi moku", "sina pona", "mi li moku"], ans: 2 },
            { q: "Identify the ERROR:", options: ["sina li jan", "sina jan", "mi jan"], ans: 0 },
            { q: "Build sentence: 'I am good'", options: ["mi pona", "pona mi", "mi li pona"], ans: 0 },
            { q: "Build sentence: 'You eat'", options: ["moku sina", "sina moku", "sina li moku"], ans: 1 },
            { q: "What is 'jan'?", options: ["Food", "Person", "Good"], ans: 1 }
        ]
    },
    {
        id: 2, type: "lesson", title: "The Separator 'li'", desc: "Talking about others",
        vocab: [
            { word: "li", def: "(separator) between subject and verb", type: "particle", ex: "jan li lape." },
            { word: "suli", def: "big, size, to grow", type: "n/v/adj", ex: "tomo li suli." },
            { word: "lili", def: "small, few, to shrink", type: "n/v/adj", ex: "waso lili." },
            { word: "telo", def: "water, liquid, wet, to wash", type: "n/v/adj", ex: "mi moku e telo." },
            { word: "suno", def: "sun, light, to shine", type: "n/v/adj", ex: "suno li seli." }
        ],
        grammar: `
            <h3>The Predicate Marker: 'li'</h3>
            <p>In Lesson 1, we learned that <em>mi</em> and <em>sina</em> are special. For <strong>everyone and everything else</strong>, we need a way to separate the Subject from the Action. That is what <strong>li</strong> does.</p>
            
            <p>Think of <strong>li</strong> as an equals sign (=) or an arrow pointing to the action. It has no meaning on its own; it is just a grammatical road sign.</p>

            <div class="grammar-box" style="background: white; border-color: var(--primary-light);">
                <p><strong>Formula:</strong> Subject + <span style="color:var(--primary); font-weight:900;">li</span> + Action</p>
            </div>

            <ul>
                <li><strong>telo <span style="color:var(--primary);">li</span> pona.</strong> <br> (Water = Good)</li>
                <li><strong>jan <span style="color:var(--primary);">li</span> suli.</strong> <br> (Person = Big)</li>
            </ul>
            
            <p><strong>Wait, is it "The person IS big" or "The person GREW"?</strong><br>
            It can be both! Toki Pona relies on context. Adjectives (big) and Verbs (to grow) often look the same.</p>
        `,
        story: `<p><b>suno li suli.</b> (The sun is big.)</p><p><b>mi jan lili.</b> (I am a small person.)</p><p><b>telo li pona.</b> (The water is good.)</p>`,
        quiz: [
            { q: "Translate: 'The water is small.'", options: ["telo lili.", "telo li lili.", "mi telo lili."], ans: 1 }, 
            { q: "Which sentence is INCORRECT?", options: ["mi li moku.", "jan li moku.", "sina moku."], ans: 0 },
            { q: "Translate: 'The sun is big'", options: ["suno li suli", "suno suli", "suli li suno"], ans: 0 },
            { q: "Translate to English: 'telo li pona'", options: ["Water is good", "Good water", "I am water"], ans: 0 },
            { q: "Translate to English: 'jan li suli'", options: ["The person is big", "The big person", "I am big"], ans: 0 },
            { q: "Identify the ERROR:", options: ["jan li moku", "suno li suli", "sina li pona"], ans: 2 },
            { q: "Identify the ERROR:", options: ["telo pona", "telo li pona", "mi pona"], ans: 0 },
            { q: "Build sentence: 'Water is good'", options: ["telo li pona", "telo pona", "pona li telo"], ans: 0 },
            { q: "Build sentence: 'The person eats'", options: ["jan moku", "jan li moku", "moku li jan"], ans: 1 },
            { q: "What is 'lili'?", options: ["Big", "Small", "Water"], ans: 1 }
        ]
    },
    {
        id: 3, type: "lesson", title: "Direct Objects 'e'", desc: "Doing things to things",
        vocab: [
            { word: "e", def: "(separator) introduces direct object", type: "particle", ex: "mi lukin e sina." },
            { word: "kili", def: "fruit, vegetable", type: "n/v/adj", ex: "mi moku e kili." },
            { word: "lukin", def: "eye, to see, visual", type: "n/v/adj", ex: "ona li lukin." },
            { word: "jo", def: "to have, possession", type: "n/v/adj", ex: "mi jo e mani." },
            { word: "waso", def: "bird, flying animal", type: "n/v/adj", ex: "waso li tawa." }
        ],
        grammar: `
            <h3>The Direct Object Marker: 'e'</h3>
            <p>When you do something <strong>TO</strong> something else, you need to mark the target. We use the particle <strong>e</strong> for this.</p>
            
            <p>Think of <strong>e</strong> as an arrow (&rarr;) pointing to the object receiving the action.</p>

            <div class="grammar-box" style="background: white; border-color: var(--primary-light);">
                <p><strong>Formula:</strong> Subject + <em>li</em> + Action + <span style="color:var(--accent); font-weight:900;">e</span> + Object</p>
            </div>

            <ul>
                <li><strong>mi moku <span style="color:var(--accent);">e</span> kili.</strong><br>(I eat &rarr; fruit.)</li>
                <li><strong>jan li lukin <span style="color:var(--accent);">e</span> waso.</strong><br>(The person sees &rarr; the bird.)</li>
            </ul>
            
            <p><strong>Common Mistake:</strong> Do not use 'e' if you are just describing a state (e.g., "I am good"). Only use it for transitive actions (doing something to something).</p>
        `,
        story: `<p><b>mi lukin e waso.</b> (I see a bird.)</p><p><b>waso li lukin e mi.</b> (The bird sees me.)</p><p><b>waso li moku e kili.</b> (The bird eats fruit.)</p>`,
        quiz: [
            { q: "Translate: 'I have water.'", options: ["mi jo telo.", "mi jo e telo.", "mi telo e jo."], ans: 1 }, 
            { q: "What is 'kili'?", options: ["Tool", "Fruit/Veg", "Animal"], ans: 1 },
            { q: "Translate: 'The person eats fruit'", options: ["jan li moku e kili", "jan moku kili", "jan li moku kili"], ans: 0 },
            { q: "Translate to English: 'mi lukin e suno'", options: ["I see the sun", "The sun sees me", "I am the sun"], ans: 0 },
            { q: "Translate to English: 'waso li jo e moku'", options: ["The bird has food", "The bird eats", "I have a bird"], ans: 0 },
            { q: "Identify the ERROR:", options: ["mi lukin e sina", "mi lukin sina", "sina lukin e mi"], ans: 1 },
            { q: "Identify the ERROR:", options: ["jan li jo e kili", "mi jo e kili", "mi li jo e kili"], ans: 2 },
            { q: "Build sentence: 'I see a bird'", options: ["mi lukin e waso", "mi lukin waso", "waso li lukin e mi"], ans: 0 },
            { q: "Build sentence: 'You have fruit'", options: ["sina jo e kili", "sina jo kili", "sina li jo e kili"], ans: 0 },
            { q: "What is 'lukin'?", options: ["To eat", "To see", "To have"], ans: 1 }
        ]
    },
    {
        id: 4, type: "lesson", title: "Modifiers & Adjectives", desc: "Describing things",
        vocab: [
            { word: "loje", def: "red, redness, to redden", type: "n/v/adj", ex: "kili loje." },
            { word: "walo", def: "white, whiteness", type: "n/v/adj", ex: "tomo walo." },
            { word: "tomo", def: "house, structure, indoor", type: "n/v/adj", ex: "mi lon tomo." },
            { word: "tawa", def: "movement, to go, moving", type: "n/v/adj", ex: "mi tawa tomo." },
            { word: "ni", def: "this, that", type: "pronoun", ex: "ni li pona." }
        ],
        grammar: `
            <h3>Adjectives Follow Nouns</h3>
            <p>In English, we say "Red house". In Toki Pona, the order is flipped: "House red". The main word (the <strong>head</strong>) comes first, and the describers (modifiers) follow it.</p>

            <div class="grammar-box" style="background: white; border-color: var(--primary-light);">
                <p><strong>Formula:</strong> Noun + Modifier + Modifier</p>
            </div>

            <ul>
                <li><strong>jan pona</strong> = Person + Good (Friend)</li>
                <li><strong>tomo loje</strong> = House + Red (Red house)</li>
                <li><strong>waso lili</strong> = Bird + Small (Small bird)</li>
            </ul>
            
            <p><strong>Stacking:</strong> You can stack them! <em>tomo loje suli</em> = "House red big" (Big red house).</p>
        `,
        story: `<p><b>waso ni li lili.</b> (This bird is small.)</p><p><b>waso lili li loje.</b> (The small bird is red.)</p><p><b>mi tawa tomo walo.</b> (I go to the white house.)</p>`,
        quiz: [
            { q: "Translate: 'Red fruit'", options: ["loje kili", "kili loje", "kili li loje"], ans: 1 }, 
            { q: "Translate: 'That small house'", options: ["tomo lili ni", "ni tomo lili", "tomo ni lili"], ans: 0 },
            { q: "Translate: 'Good person'", options: ["jan pona", "pona jan", "jan li pona"], ans: 0 },
            { q: "Translate to English: 'tomo walo'", options: ["White house", "Big house", "My house"], ans: 0 },
            { q: "Translate to English: 'waso loje'", options: ["Red bird", "Small bird", "Eating bird"], ans: 0 },
            { q: "Identify the ERROR:", options: ["kili loje", "loje kili", "tomo suli"], ans: 1 },
            { q: "Identify the ERROR:", options: ["jan pona", "jan ni", "ni jan"], ans: 2 },
            { q: "Build sentence: 'This person is good'", options: ["jan ni li pona", "jan pona li ni", "ni jan li pona"], ans: 0 },
            { q: "Build sentence: 'I see a red bird'", options: ["mi lukin e waso loje", "mi lukin e loje waso", "mi lukin waso loje"], ans: 0 },
            { q: "What is 'tawa'?", options: ["House", "To go/Move", "To sleep"], ans: 1 }
        ]
    },
    {
        id: 5, type: "lesson", title: "Prepositions", desc: "Location and Tools",
        vocab: [
            { word: "lon", def: "in, at, true, to exist", type: "n/v/adj/prep", ex: "mi lon tomo." },
            { word: "kepeken", def: "to use, with, using", type: "n/v/adj/prep", ex: "mi moku kepeken ilo." },
            { word: "sama", def: "same, like, sibling", type: "n/v/adj/prep", ex: "ona li sama mi." },
            { word: "ilo", def: "tool, device, useful", type: "n/v/adj", ex: "ilo moku (fork/spoon)." }
        ],
        grammar: `
            <h3>Prepositions (Location & Tools)</h3>
            <p>Prepositions like <strong>lon</strong> (at/in) and <strong>kepeken</strong> (with/using) connect words differently. They usually don't need the 'e' marker because they have their own built-in direction.</p>

            <div class="grammar-box" style="background: white; border-color: var(--primary-light);">
                <p><strong>Formula:</strong> Subject + <em>li</em> + Verb + Preposition + Noun</p>
            </div>

            <ul>
                <li><strong>mi lon tomo.</strong><br>(I am <strong>at</strong> the house.)</li>
                <li><strong>mi moku kepeken ilo.</strong><br>(I eat <strong>using</strong> a tool.)</li>
                <li><strong>ona li sama mi.</strong><br>(They are <strong>like</strong> me.)</li>
            </ul>
            
            <p><strong>Note:</strong> Sometimes 'lon' acts as the main verb ("to be present/to exist").</p>
        `,
        story: `<p><b>waso loje li lon tomo.</b> (The red bird is in the house.)</p><p><b>mi moku kepeken ilo.</b> (I eat using a tool.)</p><p><b>waso li sama mi.</b> (The bird is like me.)</p>`,
        quiz: [
            { q: "Translate: 'I am at the house.'", options: ["mi lon tomo.", "mi li lon tomo.", "mi lon e tomo."], ans: 0 }, 
            { q: "Translate: 'Using a tool'", options: ["kepeken ilo", "lon ilo", "tawa ilo"], ans: 0 },
            { q: "Translate: 'He eats with a spoon'", options: ["ona li moku kepeken ilo", "ona li moku e ilo", "ona li kepeken moku"], ans: 0 },
            { q: "Translate to English: 'jan li sama mi'", options: ["The person is like me", "The person sees me", "I like the person"], ans: 0 },
            { q: "Translate to English: 'ilo moku'", options: ["Eating tool (cutlery)", "Food tool", "I eat tool"], ans: 0 },
            { q: "Identify the ERROR:", options: ["mi lon e tomo", "mi lon tomo", "jan li lon tomo"], ans: 0 },
            { q: "Identify the ERROR:", options: ["mi moku kepeken ilo", "mi moku e kepeken ilo", "mi kepeken ilo"], ans: 1 },
            { q: "Build sentence: 'I am in the water'", options: ["mi lon telo", "mi lon e telo", "mi li lon telo"], ans: 0 },
            { q: "Build sentence: 'You are like a bird'", options: ["sina sama waso", "sina sama e waso", "sina li sama waso"], ans: 0 },
            { q: "What is 'lon'?", options: ["To eat", "In/At/True", "Tool"], ans: 1 }
        ]
    },
    // --- TEST 1 ---
    {
        id: "T1", type: "test", title: "Checkpoint 1", desc: "Testing Lessons 1-5",
        vocab: [],
        grammar: "This test covers: mi/sina, li, e, adjectives, and basic prepositions.",
        story: "",
        quiz: [
            { q: "Translate: 'I see that red house.'", options: ["mi lukin e tomo loje ni.", "mi lukin tomo loje ni.", "mi li lukin e tomo ni loje."], ans: 0 },
            { q: "Translate: 'The person eats good food.'", options: ["jan moku e moku pona.", "jan li moku e moku pona.", "jan li moku pona e moku."], ans: 1 },
            { q: "Which word means 'water'?", options: ["suno", "telo", "tomo"], ans: 1 },
            { q: "Does 'sina' take 'li'?", options: ["Yes", "No", "Only if followed by 'ni'"], ans: 1 },
            { q: "Translate: 'waso suli'", options: ["Small bird", "Big bird", "Big fruit"], ans: 1 },
            { q: "Identify the ERROR:", options: ["mi moku", "sina moku", "jan moku"], ans: 2 },
            { q: "Identify the ERROR:", options: ["telo li pona", "telo pona", "mi pona"], ans: 1 },
            { q: "Translate to English: 'tomo ni li loje'", options: ["This house is red", "Red house is this", "I see a red house"], ans: 0 },
            { q: "Build sentence: 'The person has a tool'", options: ["jan li jo e ilo", "jan jo e ilo", "jan li jo ilo"], ans: 0 },
            { q: "Build sentence: 'I use water'", options: ["mi kepeken telo", "mi kepeken e telo", "mi li kepeken telo"], ans: 0 }
        ]
    },
    // --- SECTION 2: STRUCTURE ---
    {
        id: 6, type: "lesson", title: "The Particle 'pi'", desc: "Grouping modifiers",
        vocab: [
            { word: "pi", def: "(separator) of, regrouping", type: "particle", ex: "tomo pi telo nasa." },
            { word: "kalama", def: "sound, noisy, to make noise", type: "n/v/adj", ex: "kalama musi." },
            { word: "musi", def: "fun, artistic, to play", type: "n/v/adj", ex: "jan musi." },
            { word: "nasa", def: "strange, crazy, to drive crazy", type: "n/v/adj", ex: "jan nasa." },
            { word: "telo nasa", def: "alcohol (crazy water)", type: "noun phrase", ex: "mi moku e telo nasa." }
        ],
        grammar: `
            <h3>The 'Of' Particle: 'pi'</h3>
            <p>Toki Pona groups words from left to right. Sometimes, this gets messy. <strong>pi</strong> helps us regroup modifiers.</p>
            
            <p>Use <strong>pi</strong> when you want to describe a noun with a <em>phrase</em> (2+ words), not just a single word.</p>

            <div class="grammar-box" style="background: white; border-color: var(--primary-light);">
                <p><strong>Default:</strong> A B C = (A B) C<br>
                <strong>With pi:</strong> A <strong>pi</strong> B C = A (B C)</p>
            </div>

            <ul>
                <li><strong>tomo telo nasa</strong> = (Water-house) that is crazy. (A weird restroom?)</li>
                <li><strong>tomo <span style="color:var(--advanced);">pi</span> telo nasa</strong> = House of (Crazy Water). (A bar/pub!)</li>
            </ul>
            
            <p><strong>Rule of Thumb:</strong> Never use <em>pi</em> if only one word follows it. It's for grouping <em>two or more</em> modifiers.</p>
        `,
        story: `<p><b>waso li kalama.</b> (The bird makes noise.)</p><p><b>kalama ni li kalama musi.</b> (That sound is music.)</p><p><b>tomo pi waso loje li lili.</b> (The red bird's house is small.)</p>`,
        quiz: [
            { q: "Translate: 'A bag of red water'", options: ["poki telo loje", "poki pi telo loje", "poki loje telo"], ans: 1 }, 
            { q: "When do you use 'pi'?", options: ["To say 'of'", "To separate subject/verb", "To regroup multiple modifiers"], ans: 2 },
            { q: "Translate: 'Crazy person'", options: ["jan nasa", "jan pi nasa", "nasa jan"], ans: 0 },
            { q: "Translate to English: 'ilo kalama'", options: ["Sound tool (Instrument)", "Loud tool", "Tool noise"], ans: 0 },
            { q: "Translate to English: 'tomo pi jan pona'", options: ["House of a friend", "Good person house", "Friend's good house"], ans: 0 },
            { q: "Identify the ERROR:", options: ["jan pi pona", "jan pona", "jan pi pona lukin"], ans: 0 },
            { q: "Identify the ERROR:", options: ["telo pi nasa", "telo nasa", "telo pi nasa mute"], ans: 0 },
            { q: "Build sentence: 'House of water'", options: ["tomo pi telo", "tomo telo", "tomo li telo"], ans: 0 },
            { q: "Build sentence: 'Water house (bathroom)'", options: ["tomo telo", "tomo pi telo", "telo tomo"], ans: 0 },
            { q: "What is 'musi'?", options: ["Crazy", "Fun/Art", "Noise"], ans: 1 }
        ]
    },
    {
        id: 7, type: "lesson", title: "Negation & Yes/No", desc: "Saying No",
        vocab: [
            { word: "ala", def: "no, not, zero, nothing", type: "n/v/adj", ex: "mi lape ala." },
            { word: "lape", def: "sleep, sleeping, to sleep", type: "n/v/adj", ex: "ona li lape." },
            { word: "wawa", def: "strong, power, to strengthen", type: "n/v/adj", ex: "jan wawa." },
            { word: "pali", def: "work, activity, to make", type: "n/v/adj", ex: "mi pali." },
            { word: "ken", def: "can, possible, ability", type: "n/v/adj", ex: "mi ken tawa." }
        ],
        grammar: `
            <h3>Negation with 'ala'</h3>
            <p>To say "not", put <strong>ala</strong> after the word you are negating.</p>
            <ul>
                <li><strong>mi lape ala.</strong> = I am not sleeping. (I sleep not)</li>
                <li><strong>jan ala.</strong> = Nobody. (Person none)</li>
            </ul>

            <h3>Yes/No Questions</h3>
            <p>To ask a question, repeat the verb with 'ala' in the middle. It literally means "Verb or not Verb?".</p>
            
            <div class="grammar-box" style="background: white; border-color: var(--primary-light);">
                <p><strong>Formula:</strong> Verb + <em>ala</em> + Verb?</p>
            </div>

            <ul>
                <li><strong>sina lape ala lape?</strong><br>(Are you sleeping?)</li>
                <li><strong>ona li pona ala pona?</strong><br>(Is it good?)</li>
            </ul>
        `,
        story: `<p><b>taso, mi lape ala.</b> (But, I do not sleep.)</p><p><b>sina lape ala lape?</b> (Are you sleeping?)</p><p><b>waso li wawa.</b> (The bird is strong.)</p>`,
        quiz: [
            { q: "Translate: 'I am not working.'", options: ["mi pali ala.", "mi ala pali.", "mi li pali ala."], ans: 0 }, 
            { q: "Ask: 'Is it good?'", options: ["ni li pona?", "ni li pona ala pona?", "ni ala ni pona?"], ans: 1 },
            { q: "Translate: 'Nothing'", options: ["ala", "pali", "wawa"], ans: 0 },
            { q: "Translate to English: 'sina ken ala ken?'", options: ["Can you?", "Do you allow?", "Are you able not able?"], ans: 0 },
            { q: "Translate to English: 'mi lape ala'", options: ["I do not sleep", "I sleep no", "Sleep is not me"], ans: 0 },
            { q: "Identify the ERROR:", options: ["mi moku ala", "mi ala moku", "jan li moku ala"], ans: 1 },
            { q: "Identify the ERROR:", options: ["sina pona ala pona?", "sina pona ala?", "sina pona ala pona"], ans: 1 },
            { q: "Build sentence: 'I cannot'", options: ["mi ken ala", "mi ala ken", "mi li ken ala"], ans: 0 },
            { q: "Build sentence: 'Do you eat?'", options: ["sina moku ala moku?", "sina moku ala?", "sina ala moku?"], ans: 0 },
            { q: "What is 'wawa'?", options: ["Work", "Strong/Power", "Sleep"], ans: 1 }
        ]
    },
    {
        id: 8, type: "lesson", title: "Gender & Imperatives", desc: "Commands & People",
        vocab: [
            { word: "meli", def: "woman, female, feminine", type: "n/v/adj", ex: "jan meli." },
            { word: "mije", def: "man, male, masculine", type: "n/v/adj", ex: "jan mije." },
            { word: "o", def: "hey! (vocative/imperative)", type: "particle", ex: "jan o, kute." },
            { word: "kute", def: "ear, to hear, auditory", type: "n/v/adj", ex: "o kute!" },
            { word: "mama", def: "parent, creator, to create", type: "n/v/adj", ex: "mama mi." }
        ],
        grammar: `
            <h3>Addressing People (Vocative)</h3>
            <p>To call someone's name, use <strong>o</strong>.</p>
            <ul>
                <li><strong>jan Ken o, toki.</strong> = Hey Ken, hello.</li>
            </ul>

            <h3>Commands (Imperative)</h3>
            <p>To give an order, replace <em>li</em> with <strong>o</strong>. If the subject is implied, just start with <em>o</em>.</p>

            <div class="grammar-box" style="background: white; border-color: var(--primary-light);">
                <p><strong>Formula:</strong> Subject + <span style="color:var(--accent); font-weight:900;">o</span> + Action</p>
            </div>

            <ul>
                <li><strong>o moku!</strong> = Eat!</li>
                <li><strong>sina o lape.</strong> = You should sleep.</li>
                <li><strong>mi mute o tawa!</strong> = Let's go! (Us O Go)</li>
            </ul>
        `,
        story: `<p><b>waso o, o kute!</b> (Bird, listen!)</p><p><b>o moku e kili ni.</b> (Eat this fruit.)</p><p><b>mama o, o lukin e waso mi.</b> (Mom, look at my bird.)</p>`,
        quiz: [
            { q: "How to say 'Listen!'", options: ["mi kute.", "kute!", "o kute!"], ans: 2 }, 
            { q: "Translate: 'jan mije'", options: ["Man", "Woman", "Child"], ans: 0 },
            { q: "Translate: 'Hey Mom,'", options: ["mama o,", "o mama,", "mama li,"], ans: 0 },
            { q: "Translate to English: 'jan meli'", options: ["Woman", "Man", "Parent"], ans: 0 },
            { q: "Translate to English: 'o lape'", options: ["Sleep!", "I sleep", "He sleeps"], ans: 0 },
            { q: "Identify the ERROR:", options: ["sina o moku", "mi o moku", "o moku"], ans: 1 },
            { q: "Identify the ERROR:", options: ["jan Ken o", "o jan Ken", "jan o"], ans: 1 },
            { q: "Build sentence: 'Work!'", options: ["o pali!", "pali!", "sina pali"], ans: 0 },
            { q: "Build sentence: 'Hey person, look!'", options: ["jan o, o lukin!", "jan o lukin!", "o jan, lukin!"], ans: 0 },
            { q: "What is 'kute'?", options: ["To speak", "To hear/Listen", "To see"], ans: 1 }
        ]
    },
    {
        id: 9, type: "lesson", title: "Pre-verbs", desc: "Want, Can, Need",
        vocab: [
            { word: "wile", def: "want, need, must, desire", type: "n/v/adj", ex: "mi wile moku." },
            { word: "sona", def: "know, wisdom, to understand", type: "n/v/adj", ex: "mi sona e ni." },
            { word: "kama", def: "come, event, to arrive/happen", type: "n/v/adj", ex: "ona li kama suli." },
            { word: "awen", def: "stay, wait, endurance", type: "n/v/adj", ex: "o awen pali." }
        ],
        grammar: `
            <h3>Pre-verbs (Helpers)</h3>
            <p>Some words can sit <strong>before</strong> the main action to add extra meaning. These are called pre-verbs.</p>

            <div class="grammar-box" style="background: white; border-color: var(--primary-light);">
                <p><strong>Formula:</strong> Subject + <em>li</em> + <span style="color:var(--advanced);">Helper</span> + Main Verb</p>
            </div>

            <ul>
                <li><strong>mi <span style="color:var(--advanced);">wile</span> moku.</strong><br>(I <em>want</em> to eat.)</li>
                <li><strong>mi <span style="color:var(--advanced);">ken</span> lape.</strong><br>(I <em>can</em> sleep.)</li>
                <li><strong>mi <span style="color:var(--advanced);">kama</span> sona.</strong><br>(I <em>come</em> to know = I learn.)</li>
                <li><strong>mi <span style="color:var(--advanced);">awen</span> pali.</strong><br>(I <em>continue</em> to work.)</li>
            </ul>
        `,
        story: `<p><b>mi wile tawa.</b> (I want to go.)</p><p><b>mi wile kama sona.</b> (I want to learn/know.)</p><p><b>waso li awen lon tomo.</b> (The bird stays in the house.)</p>`,
        quiz: [
            { q: "Translate: 'I need to sleep.'", options: ["mi lape wile.", "mi wile lape.", "mi lape."], ans: 1 }, 
            { q: "What is 'kama'?", options: ["Go", "Come/Become", "Food"], ans: 1 },
            { q: "Translate: 'I know how to work'", options: ["mi sona pali", "mi pali sona", "mi sona e pali"], ans: 0 },
            { q: "Translate to English: 'mi awen lape'", options: ["I keep sleeping", "I stop sleeping", "I want sleep"], ans: 0 },
            { q: "Translate to English: 'ona li kama suli'", options: ["He becomes big", "He comes big", "He is big"], ans: 0 },
            { q: "Identify the ERROR:", options: ["mi wile moku", "mi moku wile", "mi kama moku"], ans: 1 },
            { q: "Identify the ERROR:", options: ["ona li sona toki", "ona li toki sona", "mi sona toki"], ans: 1 },
            { q: "Build sentence: 'I want to go'", options: ["mi wile tawa", "mi tawa wile", "wile mi tawa"], ans: 0 },
            { q: "Build sentence: 'Keep working'", options: ["o awen pali", "o pali awen", "awen pali"], ans: 0 },
            { q: "What is 'sona'?", options: ["To want", "To know", "To stay"], ans: 1 }
        ]
    },
    {
        id: 10, type: "lesson", title: "Pre-verb: lukin", desc: "Trying vs Seeing",
        vocab: [
            { word: "lukin", def: "eye, to see, to try", type: "n/v/adj", ex: "mi lukin pali." },
            { word: "pali", def: "work, activity, to make", type: "n/v/adj", ex: "mi pali e tomo." },
            { word: "toki", def: "speech, language, to talk", type: "n/v/adj", ex: "toki pona." },
            { word: "open", def: "start, open, to begin", type: "n/v/adj", ex: "o open e lupa." }
        ],
        grammar: `
            <h3>'lukin' as a Helper</h3>
            <p>We learned that <strong>lukin</strong> means "to see". When used as a pre-verb (helper), it means "to seek to" or "to try".</p>

            <ul>
                <li><strong>mi lukin e tomo.</strong><br>(I see the house.)</li>
                <li><strong>mi <span style="color:var(--advanced);">lukin</span> pali e tomo.</strong><br>(I <em>try</em> to make a house.)</li>
            </ul>
            
            <p><strong>Note:</strong> Some speakers use the word <em>alasa</em> (hunt/gather) for "try", but <em>lukin</em> is very common in standard Toki Pona.</p>
        `,
        story: `<p><b>mi lukin open e lupa.</b> (I try to open the door.)</p><p><b>mi lukin toki tawa jan.</b> (I try to talk to people.)</p><p><b>mi open tawa.</b> (I start going.)</p>`,
        quiz: [
            { q: "Translate: 'mi lukin tawa.'", options: ["I see movement.", "I try to move.", "I look at the move."], ans: 1 }, 
            { q: "How to say 'Start speaking'", options: ["open toki", "toki open", "kama toki"], ans: 0 },
            { q: "Translate: 'I try to work'", options: ["mi lukin pali", "mi pali lukin", "mi lukin e pali"], ans: 0 },
            { q: "Translate to English: 'mi open moku'", options: ["I start eating", "I eat openly", "I open the food"], ans: 0 },
            { q: "Translate to English: 'toki pona'", options: ["Good language", "Speak good", "Language fix"], ans: 0 },
            { q: "Identify the ERROR:", options: ["mi lukin lape", "mi lape lukin", "mi wile lukin lape"], ans: 1 },
            { q: "Identify the ERROR:", options: ["o open e lupa", "o lupa open", "o open"], ans: 1 },
            { q: "Build sentence: 'Try to listen'", options: ["o lukin kute", "o kute lukin", "lukin kute"], ans: 0 },
            { q: "Build sentence: 'I speak'", options: ["mi toki", "mi li toki", "toki mi"], ans: 0 },
            { q: "What is 'open'?", options: ["To close", "To start/Open", "To see"], ans: 1 }
        ]
    },
    // --- TEST 2 ---
    {
        id: "T2", type: "test", title: "Checkpoint 2", desc: "Testing Lessons 6-10",
        vocab: [],
        grammar: "Covers: pi, negation, yes/no, vocatives, imperatives, pre-verbs.",
        story: "",
        quiz: [
            { q: "Translate: 'Do you want to eat?'", options: ["sina wile ala wile moku?", "sina wile moku ala moku?", "sina moku wile ala wile?"], ans: 0 },
            { q: "Translate: 'Hey man, look!'", options: ["jan mije o, o lukin!", "jan mije, lukin!", "o jan mije, lukin!"], ans: 0 },
            { q: "Translate: 'tomo pi jan wawa'", options: ["Strong person's house", "Strong house person", "Person of strong house"], ans: 0 },
            { q: "Which means 'I try to fly'?", options: ["mi tawa sewi lukin.", "mi lukin tawa sewi.", "mi wile tawa sewi."], ans: 1 },
            { q: "Translate: 'Don't go.'", options: ["o tawa ala.", "ala tawa.", "sina tawa ala."], ans: 0 },
            { q: "Identify the ERROR:", options: ["tomo pi telo", "tomo pi telo nasa", "jan pi pona"], ans: 2 },
            { q: "Identify the ERROR:", options: ["sina wile ala wile", "sina wile ala", "sina wile ala wile moku"], ans: 1 },
            { q: "Translate to English: 'mi awen pali'", options: ["I keep working", "I stop working", "I wait to work"], ans: 0 },
            { q: "Build sentence: 'I know you'", options: ["mi sona e sina", "mi sona sina", "mi li sona e sina"], ans: 0 },
            { q: "Build sentence: 'Good water (for drinking)'", options: ["telo pona", "telo pi pona", "pona telo"], ans: 0 }
        ]
    },
    // --- SECTION 3: COMPLEXITY ---
    {
        id: 11, type: "lesson", title: "Questions with 'seme'", desc: "What, Who, Where",
        vocab: [
            { word: "seme", def: "what, which, who", type: "question", ex: "ni li seme?" },
            { word: "tan", def: "from, because, origin", type: "n/v/adj/prep", ex: "mi kama tan ma." },
            { word: "ma", def: "land, earth, country", type: "n/v/adj", ex: "ma pona." },
            { word: "suwi", def: "sweet, cute, candy", type: "n/v/adj", ex: "soweli suwi." }
        ],
        grammar: `
            <h3>The Question Word: 'seme'</h3>
            <p>In English, we move words around to ask questions ("Who are you?"). In Toki Pona, you just <strong>fill in the blank</strong> with the word <strong>seme</strong>.</p>

            <div class="grammar-box" style="background: white; border-color: var(--primary-light);">
                <p><strong>Rule:</strong> Replace the unknown info with <em>seme</em>.</p>
            </div>

            <ul>
                <li><strong>ni li kili.</strong> (This is fruit.) <br>&rarr; <strong>ni li <span style="color:var(--accent);">seme</span>?</strong> (This is what?)</li>
                
                <li><strong>jan li moku.</strong> (Person eats.) <br>&rarr; <strong>jan <span style="color:var(--accent);">seme</span> li moku?</strong> (Who eats?)</li>
                
                <li><strong>sina lon tomo.</strong> (You are at home.) <br>&rarr; <strong>sina lon <span style="color:var(--accent);">seme</span>?</strong> (Where are you?)</li>
            </ul>
        `,
        story: `<p><b>ni li ma seme?</b> (What land is this?)</p><p><b>jan seme li lon?</b> (Who is here?)</p><p><b>mi kama tan ma suwi.</b> (I come from the pleasant land.)</p>`,
        quiz: [
            { q: "Translate: 'Who are you?'", options: ["sina seme?", "sina jan seme?", "seme sina?"], ans: 1 }, 
            { q: "Translate: 'sina wile e seme?'", options: ["What do you want?", "Who wants?", "Where is the desire?"], ans: 0 },
            { q: "Translate: 'Where is the house?'", options: ["tomo li lon seme?", "tomo li seme?", "lon seme tomo?"], ans: 0 },
            { q: "Translate to English: 'ni li seme?'", options: ["What is this?", "Who is this?", "Where is this?"], ans: 0 },
            { q: "Translate to English: 'ma suwi'", options: ["Cute land", "Sweet earth", "Land candy"], ans: 0 },
            { q: "Identify the ERROR:", options: ["jan seme li moku?", "seme jan li moku?", "sina wile seme?"], ans: 1 },
            { q: "Identify the ERROR:", options: ["tan seme?", "sina tan seme?", "sina kama tan seme?"], ans: 1 },
            { q: "Build sentence: 'Who is eating?'", options: ["jan seme li moku?", "seme li moku?", "jan li moku seme?"], ans: 0 },
            { q: "Build sentence: 'I come from the house'", options: ["mi kama tan tomo", "mi tan tomo", "mi kama tomo"], ans: 0 },
            { q: "What is 'tan'?", options: ["To go", "From/Because", "To stay"], ans: 1 }
        ]
    },
    {
        id: 12, type: "lesson", title: "Conjunctions", desc: "And, Or",
        vocab: [
            { word: "en", def: "and (joins subjects)", type: "particle", ex: "mi en sina." },
            { word: "anu", def: "or", type: "particle", ex: "moku anu telo." },
            { word: "taso", def: "but, only", type: "particle", ex: "mi wile, taso mi ken ala." },
            { word: "kin", def: "also, too, indeed", type: "particle", ex: "mi kin." }
        ],
        grammar: `
            <h3>Connecting Words</h3>
            <p>There is no single word for "and" that connects everything. We have specific tools for specific jobs.</p>

            <div class="grammar-box" style="background: white; border-color: var(--primary-light);">
                <p><strong>1. 'en' (Subject And):</strong> Connects Subjects ONLY.<br>
                <em>mi <strong>en</strong> sina li tawa.</em> (You and I go.)</p>
                
                <p><strong>2. 'li' (Action And):</strong> Connects Verbs.<br>
                <em>ona li moku <strong>li</strong> lape.</em> (She eats and sleeps.)</p>
                
                <p><strong>3. 'e' (Object And):</strong> Connects Objects.<br>
                <em>mi lukin e suno <strong>e</strong> mun.</em> (I see the sun and the moon.)</p>
            </div>
            
            <p><strong>anu</strong> means "or". It works pretty much everywhere!</p>
        `,
        story: `<p><b>mi en waso li tawa.</b> (The bird and I go.)</p><p><b>mi wile moku anu lape.</b> (I want to eat or sleep.)</p><p><b>mi wile tawa, taso mi wawa ala.</b> (I want to go, but I am not strong.)</p>`,
        quiz: [
            { q: "Translate: 'Me and you'", options: ["mi en sina", "mi li sina", "mi anu sina"], ans: 0 }, 
            { q: "Translate: 'Coffee or Tea'", options: ["telo wawa en telo kasi", "telo wawa anu telo kasi"], ans: 1 },
            { q: "Translate: 'But I am small'", options: ["taso mi lili", "mi lili taso", "en mi lili"], ans: 0 },
            { q: "Translate to English: 'mi kin'", options: ["Me too", "I can", "My kin"], ans: 0 },
            { q: "Translate to English: 'jan en waso'", options: ["Person and bird", "Person or bird", "Bird person"], ans: 0 },
            { q: "Identify the ERROR:", options: ["mi moku en lape", "mi moku li lape", "mi en sina li lape"], ans: 0 },
            { q: "Identify the ERROR:", options: ["taso mi wile", "mi taso wile", "en mi wile"], ans: 2 },
            { q: "Build sentence: 'You and I eat'", options: ["sina en mi li moku", "sina en mi moku", "sina li mi li moku"], ans: 0 },
            { q: "Build sentence: 'Water or food'", options: ["telo anu moku", "telo en moku", "telo taso moku"], ans: 0 },
            { q: "What is 'anu'?", options: ["And", "Or", "But"], ans: 1 }
        ]
    },
    {
        id: 13, type: "lesson", title: "Context 'la' (Basic)", desc: "Setting the scene",
        vocab: [
            { word: "la", def: "(separator) context marker", type: "particle", ex: "tenpo ni la..." },
            { word: "tenpo", def: "time, moment, duration", type: "n/v/adj", ex: "tenpo ni." },
            { word: "pini", def: "end, past, to finish", type: "n/v/adj", ex: "tenpo pini." },
            { word: "kama", def: "coming, future, to happen", type: "n/v/adj", ex: "tenpo kama." }
        ],
        grammar: `
            <h3>Context First: 'la'</h3>
            <p>The particle <strong>la</strong> is powerful. It allows you to set the <strong>context</strong> before saying your main sentence.</p>

            <div class="grammar-box" style="background: white; border-color: var(--primary-light);">
                <p><strong>Formula:</strong> Context + <span style="color:var(--advanced); font-weight:900;">la</span> + Main Sentence</p>
            </div>

            <ul>
                <li><strong>tenpo ni <span style="color:var(--advanced);">la</span> mi lape.</strong><br>(Time this | I sleep &rarr; Now, I sleep.)</li>
                <li><strong>mi <span style="color:var(--advanced);">la</span> ni li pona.</strong><br>(Me | this is good &rarr; In my opinion, this is good.)</li>
            </ul>
            
            <p>This is how we do "In the morning...", "In my opinion...", etc.</p>
        `,
        story: `<p><b>tenpo ni la mi lili.</b> (At this time, I am small.)</p><p><b>tenpo pini la mi lon tomo.</b> (In the past, I was at the house.)</p><p><b>mi la ni li pona.</b> (To me, this is good.)</p>`,
        quiz: [
            { q: "Translate: 'Now'", options: ["tenpo ni la", "la tenpo ni", "ni tenpo la"], ans: 0 }, 
            { q: "Translate: 'In my opinion...'", options: ["mi la...", "la mi...", "mi pilin..."], ans: 0 },
            { q: "Translate: 'In the future...'", options: ["tenpo kama la...", "tenpo pini la...", "tenpo ni la..."], ans: 0 },
            { q: "Translate to English: 'tenpo pini'", options: ["Past", "Future", "Present"], ans: 0 },
            { q: "Translate to English: 'mi la ni li ike'", options: ["To me, this is bad", "I am bad", "This is my bad"], ans: 0 },
            { q: "Identify the ERROR:", options: ["tenpo ni la mi moku", "mi moku la tenpo ni", "tenpo pini la mi lape"], ans: 1 },
            { q: "Identify the ERROR:", options: ["mi la", "sina la", "la mi"], ans: 2 },
            { q: "Build sentence: 'Today I work'", options: ["tenpo suno ni la mi pali", "mi pali tenpo suno ni", "tenpo ni la mi pali"], ans: 0 },
            { q: "Build sentence: 'I finish'", options: ["mi pini", "mi li pini", "pini mi"], ans: 0 },
            { q: "What is 'tenpo'?", options: ["Time", "Temple", "Place"], ans: 0 }
        ]
    },
    {
        id: 14, type: "lesson", title: "Context 'la' (Conditionals)", desc: "If... then...",
        vocab: [
            { word: "moli", def: "die, dead, death, to kill", type: "n/v/adj", ex: "ona li moli." },
            { word: "pakala", def: "break, mistake, to damage", type: "n/v/adj", ex: "ilo li pakala." },
            { word: "sike", def: "circle, ball, round, year", type: "n/v/adj", ex: "sike suno." },
            { word: "ale", def: "all, everything, abundant", type: "n/v/adj", ex: "ale li pona." }
        ],
        grammar: `
            <h3>If / Then Statements</h3>
            <p>The <strong>la</strong> particle is also used for "If... then..." statements. The first part is the condition (the "If"), and the second part is the result (the "Then").</p>

            <div class="grammar-box" style="background: white; border-color: var(--primary-light);">
                <p><strong>Formula:</strong> (If Condition) + <span style="color:var(--advanced); font-weight:900;">la</span> + (Then Result)</p>
            </div>

            <ul>
                <li><strong>sina moku <span style="color:var(--advanced);">la</span> sina suli.</strong><br>(You eat &rarr; you big. = If you eat, you grow.)</li>
                <li><strong>suno li moli <span style="color:var(--advanced);">la</span> mi lape.</strong><br>(Sun dies &rarr; I sleep. = When the sun sets, I sleep.)</li>
            </ul>
        `,
        story: `<p><b>suno li moli la mi lape.</b> (If the sun dies [sets], I sleep.)</p><p><b>mi lape la mi pilin pona.</b> (If I sleep, I feel good.)</p><p><b>ale li pona.</b> (Everything is good.)</p>`,
        quiz: [
            { q: "Translate: 'If he comes...'", options: ["ona li kama la...", "la ona li kama...", "kama ona la..."], ans: 0 }, 
            { q: "What does 'pakala' mean?", options: ["Fix", "Break/Mistake", "Good"], ans: 1 },
            { q: "Translate: 'If I sleep, I feel good.'", options: ["mi lape la mi pilin pona.", "mi pilin pona la mi lape.", "la mi lape mi pilin pona."], ans: 0 },
            { q: "Translate to English: 'ale li pona'", options: ["Everything is good", "Good is everything", "All good people"], ans: 0 },
            { q: "Translate to English: 'sike suno'", options: ["Year (sun circle)", "Sun ball", "Round sun"], ans: 0 },
            { q: "Identify the ERROR:", options: ["mi lape la", "la mi lape", "sina moku la"], ans: 1 },
            { q: "Identify the ERROR:", options: ["ona li moli", "ona moli", "moli li pona"], ans: 1 },
            { q: "Build sentence: 'If you go, I go'", options: ["sina tawa la mi tawa", "sina tawa mi tawa la", "la sina tawa mi tawa"], ans: 0 },
            { q: "Build sentence: 'I break the tool'", options: ["mi pakala e ilo", "mi pakala ilo", "mi li pakala e ilo"], ans: 0 },
            { q: "What is 'ale'?", options: ["Nothing", "All/Everything", "Some"], ans: 1 }
        ]
    },
    {
        id: 15, type: "lesson", title: "Colors & Numbers", desc: "Simple counting",
        vocab: [
            { word: "kule", def: "color, paint, to color", type: "n/v/adj", ex: "kule loje." },
            { word: "jelo", def: "yellow, yellowish", type: "n/v/adj", ex: "suno jelo." },
            { word: "laso", def: "blue, green", type: "adj", ex: "kasi laso." },
            { word: "pimeja", def: "black, dark", type: "adj", ex: "mije pimeja." },
            { word: "wan", def: "one", type: "num", ex: "kili wan." },
            { word: "tu", def: "two", type: "num", ex: "kili tu." },
            { word: "mute", def: "many, 3+", type: "num", ex: "kili mute." }
        ],
        grammar: `
            <h3>Counting in Toki Pona</h3>
            <p>Traditionally, Toki Pona uses a very simple system: <em>wan</em> (1), <em>tu</em> (2), and <em>mute</em> (many). However, for precise numbers, we use the <strong>nasin nanpa pona</strong> system.</p>

            <h3>1. Small Numbers (Add them up)</h3>
            <p>For 1-99, we just add words together:</p>
            <ul>
                <li><strong>wan</strong> = 1</li>
                <li><strong>tu</strong> = 2</li>
                <li><strong>luka</strong> = 5 (hand)</li>
                <li><strong>mute</strong> = 20</li>
            </ul>
            <p><em>Example:</em> <strong>mute luka tu</strong> = 20 + 5 + 2 = <strong>27</strong>.</p>

            <h3>2. Big Numbers (The 'ale' Multiplier)</h3>
            <p>For numbers over 100, <strong>ale</strong> acts as a multiplier. We split numbers into groups of two digits.</p>
            
            <div class="grammar-box" style="background: white; border-color: var(--primary-light);">
                <p><strong>wan ale</strong> = 100 (1 × 100)</p>
                <p><strong>tu ale</strong> = 200 (2 × 100)</p>
                <p><strong>wan ale ale</strong> = 10,000 (100 × 100)</p>
            </div>
            
            <p>To say <strong>123</strong>, we say "100 and 23":<br>
            <strong>wan ale mute tu wan</strong>.</p>
        `,
        story: `<p><b>mi lukin e waso tu.</b> (I see two birds.)</p><p><b>waso wan li jelo.</b> (One bird is yellow.)</p><p><b>waso ante li laso.</b> (The other bird is blue.)</p><p><b>kule mute li lon.</b> (Many colors are present.)</p>`,
        quiz: [
            { q: "Translate: 'Three birds'", options: ["waso tu wan", "waso mute", "waso san"], ans: 1 }, 
            { q: "Translate: 'Black'", options: ["walo", "loje", "pimeja"], ans: 2 },
            { q: "Translate: 'One house'", options: ["tomo wan", "wan tomo", "tomo li wan"], ans: 0 },
            { q: "Translate to English: 'laso'", options: ["Blue/Green", "Red", "Yellow"], ans: 0 },
            { q: "Translate to English: 'jan mute'", options: ["Many people", "Two people", "One person"], ans: 0 },
            { q: "Identify the ERROR:", options: ["kili tu", "tu kili", "kili mute"], ans: 1 },
            { q: "Identify the ERROR:", options: ["kule jelo", "jelo kule", "tomo kule"], ans: 1 },
            { q: "Build sentence: 'Two small birds'", options: ["waso lili tu", "waso tu lili", "tu waso lili"], ans: 0 },
            { q: "Build sentence: 'Yellow sun'", options: ["suno jelo", "suno li jelo", "jelo suno"], ans: 0 },
            { q: "What is 'wan'?", options: ["Two", "One", "Many"], ans: 1 }
        ]
    },
    // --- TEST 3 ---
    {
        id: "T3", type: "test", title: "Checkpoint 3", desc: "Testing Lessons 11-15",
        vocab: [],
        grammar: "Covers: seme, en/anu, la (context/if), colors, numbers.",
        story: "",
        quiz: [
            { q: "Translate: 'Where are you?'", options: ["sina lon seme?", "sina seme?", "seme lon sina?"], ans: 0 },
            { q: "Translate: 'You and me'", options: ["sina en mi", "sina anu mi", "sina la mi"], ans: 0 },
            { q: "Translate: 'If I eat, I sleep.'", options: ["mi moku la mi lape.", "mi lape la mi moku.", "mi moku e lape."], ans: 0 },
            { q: "Translate: 'Many blue fish'", options: ["kala laso mute", "kala mute laso", "laso kala mute"], ans: 0 },
            { q: "What is 'tenpo pini'?", options: ["Future", "Past", "Now"], ans: 1 },
            { q: "Identify the ERROR:", options: ["sina en mi li tawa", "mi moku en lape", "telo anu moku"], ans: 1 },
            { q: "Identify the ERROR:", options: ["tenpo ni la", "la tenpo ni", "tenpo pini la"], ans: 1 },
            { q: "Translate to English: 'tomo kule'", options: ["Painted/Colorful house", "House color", "Paint house"], ans: 0 },
            { q: "Build sentence: 'What is this?'", options: ["ni li seme?", "seme li ni?", "ni seme?"], ans: 0 },
            { q: "Build sentence: 'One big bird'", options: ["waso suli wan", "waso wan suli", "wan waso suli"], ans: 0 }
        ]
    },
    // --- SECTION 4: ADVANCED ---
    {
        id: 16, type: "lesson", title: "Body & Feelings", desc: "Sijelo en Pilin",
        vocab: [
            { word: "sijelo", def: "body, physical state", type: "n/v/adj", ex: "sijelo mi." },
            { word: "lawa", def: "head, mind, to lead/control", type: "n/v/adj", ex: "jan lawa." },
            { word: "luka", def: "hand, arm", type: "n/v/adj", ex: "luka mi." },
            { word: "noka", def: "foot, leg", type: "n/v/adj", ex: "noka mi." },
            { word: "pilin", def: "feeling, heart, to touch", type: "n/v/adj", ex: "mi pilin pona." }
        ],
        grammar: `
            <h3>The Concept of 'pilin'</h3>
            <p>The word <strong>pilin</strong> is versatile. It covers your heart, your emotions, and your sense of touch.</p>
            
            <ul>
                <li><strong>mi pilin.</strong> = I feel / I touch / I think.</li>
                <li><strong>mi pilin pona.</strong> = I feel good (I am happy).</li>
                <li><strong>mi pilin ike.</strong> = I feel bad (I am sad/sick).</li>
            </ul>

            <h3>Body Parts as Metaphors</h3>
            <p>Toki Pona simplifies anatomy. <strong>lawa</strong> is the head, but also means "to control" or "to lead". <strong>luka</strong> is the hand/arm, but implies interaction.</p>
            
            <div class="grammar-box" style="background: white; border-color: var(--primary-light);">
                <p><strong>Tip:</strong> If you want to say "I am sad", strictly speaking you say "mi pilin ike". But context is king! If you are holding your stomach, it means "I feel sick."</p>
            </div>
        `,
        story: `<p><b>lawa mi li pilin pona.</b> (My mind feels good.)</p><p><b>mi pilin e sijelo mi.</b> (I feel my body.)</p><p><b>noka mi li wawa.</b> (My legs are strong.)</p>`,
        quiz: [
            { q: "Translate: 'My hand'", options: ["luka mi", "noka mi", "lawa mi"], ans: 0 }, 
            { q: "Translate: 'I am happy'", options: ["mi pilin pona", "mi pilin ike", "mi lawa pona"], ans: 0 },
            { q: "Translate: 'My head hurts'", options: ["lawa mi li pakala/ike", "mi lawa ike", "ike lawa mi"], ans: 0 },
            { q: "Translate to English: 'mi pilin e luka sina'", options: ["I touch your hand", "I feel like your hand", "My hand feels you"], ans: 0 },
            { q: "Translate to English: 'sijelo mi'", options: ["My body", "My head", "My foot"], ans: 0 },
            { q: "Identify the ERROR:", options: ["mi pilin pona", "mi pilin e pona", "mi pilin"], ans: 1 },
            { q: "Identify the ERROR:", options: ["lawa mi", "mi lawa", "luka mi"], ans: 1 },
            { q: "Build sentence: 'I feel bad'", options: ["mi pilin ike", "mi ike pilin", "mi li pilin ike"], ans: 0 },
            { q: "Build sentence: 'Head and foot'", options: ["lawa en noka", "lawa anu noka", "lawa noka"], ans: 0 },
            { q: "What is 'lawa'?", options: ["Hand", "Head/Control", "Leg"], ans: 1 }
        ]
    },
    {
        id: 17, type: "lesson", title: "Proper Names", desc: "Unofficial Words",
        vocab: [
            { word: "toki", def: "language, talk", type: "noun", ex: "toki Inli (English)." },
            { word: "ma", def: "land, country", type: "noun", ex: "ma Kanata." },
            { word: "jan", def: "person", type: "noun", ex: "jan Meri." },
            { word: "nena", def: "bump, hill, nose", type: "noun", ex: "nena Ewelese." }
        ],
        grammar: `
            <h3>Proper Names (Loan Words)</h3>
            <p>Names of people, places, and languages are <strong>adjectives</strong> in Toki Pona. You cannot use a name by itself; it must describe a noun.</p>
            
            <p>Names are always capitalized.</p>

            <div class="grammar-box" style="background: white; border-color: var(--primary-light);">
                <p><strong>Wrong:</strong> <em>Ken li tawa.</em> (Ken goes.)</p>
                <p><strong>Right:</strong> <strong>jan</strong> Ken li tawa. (Person Ken goes.)</p>
            </div>

            <ul>
                <li><strong>ma Kanata</strong> = Canada (Land Canada)</li>
                <li><strong>toki Inli</strong> = English (Language English)</li>
                <li><strong>jan Meri</strong> = Mary (Person Mary)</li>
            </ul>
        `,
        story: `<p><b>jan Ken li lon.</b> (Ken is here.)</p><p><b>ona li kama tan ma Eulo.</b> (He comes from Europe.)</p><p><b>ona li toki kepeken toki Inli.</b> (He speaks English.)</p>`,
        quiz: [
            { q: "Translate: 'Canada is good.'", options: ["Kanata li pona.", "ma Kanata li pona.", "pona Kanata."], ans: 1 }, 
            { q: "Translate: 'I am Susan.'", options: ["mi Susan.", "mi jan Susan.", "mi li Susan."], ans: 1 },
            { q: "Translate: 'Europe'", options: ["ma Eulo", "Eulo", "tomo Eulo"], ans: 0 },
            { q: "Translate to English: 'toki Inli'", options: ["English language", "Inland talk", "My language"], ans: 0 },
            { q: "Translate to English: 'jan Lisa'", options: ["Lisa", "Girl", "Friend"], ans: 0 },
            { q: "Identify the ERROR:", options: ["mi tawa ma Paris", "mi tawa Paris", "ma Paris li pona"], ans: 1 },
            { q: "Identify the ERROR:", options: ["jan Ken", "ma Ken", "ken"], ans: 2 },
            { q: "Build sentence: 'Ken eats'", options: ["jan Ken li moku", "Ken li moku", "jan Ken moku"], ans: 0 },
            { q: "Build sentence: 'I speak English'", options: ["mi toki Inli", "mi toki e toki Inli", "mi toki kepeken toki Inli"], ans: 2 },
            { q: "What is 'nena'?", options: ["Name", "Bump/Hill/Nose", "Land"], ans: 1 }
        ]
    },
    {
        id: 18, type: "lesson", title: "Advanced Time", desc: "Tense Nuances",
        vocab: [
            { word: "open", def: "start, begin", type: "pre-verb", ex: "mi open pali." },
            { word: "pini", def: "finish, end", type: "pre-verb", ex: "mi pini moku." },
            { word: "mun", def: "moon, star, month", type: "noun", ex: "mun li suli." },
            { word: "suno", def: "sun, day", type: "noun", ex: "suno li kama." }
        ],
        grammar: `
            <h3>Time and Tense</h3>
            <p>Toki Pona verbs do not change. <em>moku</em> can mean "eat", "ate", or "will eat".</p>
            
            <p>How do we know when something happens? We use <strong>Context</strong> (Lesson 13) or <strong>Time Words</strong>.</p>

            <div class="grammar-box" style="background: white; border-color: var(--primary-light);">
                <p><strong>tenpo pini</strong> = Past (Finished time)<br>
                <strong>tenpo ni</strong> = Present (This time)<br>
                <strong>tenpo kama</strong> = Future (Coming time)</p>
            </div>

            <ul>
                <li><strong>tenpo pini la mi moku.</strong><br>(In the past, I ate.)</li>
                <li><strong>mi kama moku.</strong><br>(I come to eat = I start eating.)</li>
                <li><strong>mi pini moku.</strong><br>(I finish eating.)</li>
            </ul>
        `,
        story: `<p><b>tenpo suno ni la mi pini e tawa.</b> (Today, I finish the journey.)</p><p><b>waso mi li awen sama jan pona.</b> (My bird remains like a good friend.)</p><p><b>mi open e pali sin.</b> (I start a new activity.)</p>`,
        quiz: [
            { q: "Translate: 'I finished eating.'", options: ["mi pini moku.", "mi moku pini.", "mi lape."], ans: 0 }, 
            { q: "How to say 'Today'", options: ["tenpo suno ni", "suno pi ni", "tenpo pimeja"], ans: 0 },
            { q: "Translate: 'I start to learn'", options: ["mi open kama sona", "mi kama sona open", "mi open e kama sona"], ans: 0 },
            { q: "Translate to English: 'mun'", options: ["Moon/Month", "Sun", "Earth"], ans: 0 },
            { q: "Translate to English: 'mi pini lape'", options: ["I finished sleeping", "I stop to sleep", "I sleep late"], ans: 0 },
            { q: "Identify the ERROR:", options: ["mi open pali", "mi pali open", "mi pini pali"], ans: 1 },
            { q: "Identify the ERROR:", options: ["tenpo suno ni", "tenpo mun ni", "tenpo ni suno"], ans: 2 },
            { q: "Build sentence: 'This month'", options: ["tenpo mun ni", "mun ni", "tenpo ni mun"], ans: 0 },
            { q: "Build sentence: 'I finish the work'", options: ["mi pini e pali", "mi pini pali", "mi pali pini"], ans: 0 },
            { q: "What is 'suno'?", options: ["Moon", "Sun/Day", "Star"], ans: 1 }
        ]
    },
    // --- TEST 4 ---
    {
        id: "T4", type: "test", title: "Final Exam", desc: "The Ultimate Test",
        vocab: [],
        grammar: "This is the final test of the entire curriculum.",
        story: "",
        quiz: [
            { q: "Translate: 'If the red bird flies, I am happy.'", options: ["waso loje li tawa la mi pilin pona.", "waso loje li tawa e mi pilin pona.", "la waso loje tawa mi pilin pona."], ans: 0 },
            { q: "Translate: 'Ken's big house.'", options: ["tomo suli pi jan Ken", "tomo pi jan Ken suli", "tomo suli jan Ken"], ans: 0 },
            { q: "Translate: 'Do not kill.'", options: ["o moli ala.", "moli ala.", "ala moli."], ans: 0 },
            { q: "Translate: 'I want to speak Toki Pona.'", options: ["mi wile toki kepeken toki pona.", "mi wile toki pona.", "Both are acceptable."], ans: 2 },
            { q: "What is 'jan pona'?", options: ["Good person / Friend", "Fixing person", "Good life"], ans: 0 },
            { q: "Translate: 'What is this?'", options: ["ni li seme?", "ni li tan seme?", "seme li ni?"], ans: 0 },
            { q: "Translate: 'Two hands'", options: ["luka tu", "luka wan", "noka tu"], ans: 0 },
            { q: "Identify the ERROR:", options: ["mi wile moku", "mi moku wile", "mi kama moku"], ans: 1 },
            { q: "Identify the ERROR:", options: ["tomo pi telo", "tomo pi telo nasa", "jan pi pona"], ans: 2 },
            { q: "Build sentence: 'I eat fruit'", options: ["mi moku e kili", "mi moku kili", "mi li moku e kili"], ans: 0 }
        ]
    }
];

const advancedCurriculum = [
    {
        id: "A1", type: "advanced", title: "nasin nanpa pona", desc: "Big Numbers & Decimals",
        vocab: [
            { word: "ale", def: "100, number multiplier", type: "num", ex: "wan ale (100)" },
            { word: "ala", def: "0, decimal point", type: "num", ex: "ala wan (0.01)" }
        ],
        grammar: `
            <h3>1. Base 100 System</h3>
            <p>For big numbers, split them into groups of two digits. <strong>ale</strong> is the multiplier.</p>
            <ul>
                <li><strong>wan ale</strong> = 100 (1 × 100)</li>
                <li><strong>wan ale ale</strong> = 10,000 (1 × 100²)</li>
            </ul>
            <p>Example: 12,345 -> <strong>1, 23, 45</strong> -> <em>wan ale ale, mute tu wan ale, mute mute luka</em>.</p>
            
            <h3>2. Decimals</h3>
            <p>Use <strong>ala</strong> as the decimal point.</p>
            <ul>
                <li><strong>3.14</strong> = tu wan <strong>ala</strong> wan mute</li>
                <li><strong>0.01</strong> = <strong>ala</strong> wan</li>
            </ul>
        `,
        story: `<p><b>tenpo ni la mi jo e mani mute ale!</b> (Now I have 2,000 monies!)</p><p><b>esun la, ilo ni li wan ala mute.</b> (At the shop, this tool costs 1.20)</p>`,
        quiz: [
            { q: "What is 'wan ale'?", options: ["100", "101", "110"], ans: 0 },
            { q: "Translate: '200'", options: ["ale mute", "mute ale", "ale tu"], ans: 1 },
            { q: "Group '12,345'?", options: ["123, 45", "1, 23, 45", "12, 345"], ans: 1 },
            { q: "Translate: 1.20", options: ["wan ala mute", "wan pi mute", "wan en mute"], ans: 0 },
            { q: "What is 'ala' in math?", options: ["Big", "Zero / Decimal Point", "Negative"], ans: 1 }
        ]
    },
    {
        id: "A2", type: "advanced", title: "Time & Calendar", desc: "Months and Days",
        vocab: [
            { word: "esun", def: "market, trade, week", type: "noun", ex: "tenpo esun." },
            { word: "mun", def: "moon, star, month", type: "noun", ex: "tenpo mun." },
            { word: "suno", def: "sun, day", type: "noun", ex: "tenpo suno." }
        ],
        grammar: `<h3>Days & Months</h3><p>Toki Pona counts days and months numerically.</p><ul><li><b>tenpo suno nanpa wan</b> = Day 1 (Monday)</li><li><b>tenpo mun nanpa wan</b> = Month 1 (January)</li></ul>`,
        story: `<p><b>tenpo suno nanpa tu la mi tawa esun.</b> (On Tuesday, I go to the shop.)</p><p><b>tenpo mun nanpa wan la ma li lete.</b> (In January, the land is cold.)</p>`,
        quiz: [
            { q: "Translate: 'Week'", options: ["tenpo suno", "tenpo esun", "tenpo mun"], ans: 1 },
            { q: "Translate: 'January'", options: ["tenpo mun nanpa wan", "tenpo mun wan", "mun open"], ans: 0 },
            { q: "Translate: 'Monday'", options: ["suno open", "tenpo suno nanpa wan", "tenpo esun"], ans: 1 },
            { q: "Translate: 'Day 5'", options: ["tenpo suno nanpa luka", "tenpo suno luka", "suno nanpa tu"], ans: 0 },
            { q: "What is 'tenpo mun'?", options: ["Moon time", "Month", "Night"], ans: 1 }
        ]
    }
];
