/**
 * TOKI PONA EDUCATIONAL DATA
 * File: js/data.js
 */

const UI_TEXT = {
    en: {
        welcome: "Nasin Toki: The Complete Course",
        intro: "Master the language of good. 130+ words, 20 lessons, zero clutter.",
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
        advancedTitle: "Advanced Studies",
        advancedDesc: "Deep dives into complex topics."
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
        advancedTitle: "sona suli",
        advancedDesc: "sona pi ijo ike."
    }
};

const curriculum = [
    // --- LESSON 1 ---
    {
        id: 1, 
        type: "lesson", 
        title: "Orientation: Mindset & Sounds", 
        desc: "Introduction to the philosophy of simplicity (nasin) and the phonology (kalama) of Toki Pona.",
        vocab: [
            { word: "jan", def: "A person, human, somebody.", type: "noun", ex: "mi jan. (I am a person.)" },
            { word: "pona", def: "Good, simple, positive, fixing.", type: "adj/verb", ex: "toki pona. (Simple language / Good language.)" },
            { word: "ike", def: "Bad, complex, negative, difficult.", type: "adj", ex: "ni li ike. (This is complex/bad.)" },
            { word: "toki", def: "Speech, language, talking.", type: "noun/verb", ex: "toki pona. (Simple language.)" }
        ],
        grammar: `
        <h3>1. The Philosophy</h3>
        <p>Toki Pona is a "Simple Language." It changes how you think.</p>
        <ul>
            <li><strong>pona (Good):</strong> In this language, "Good" and "Simple" are the same word. If something is simple, it is good.</li>
            <li><strong>ike (Bad):</strong> "Bad" and "Complex" are the same word. If something is too complicated, it is bad.</li>
        </ul>

        <h3>2. Proper Names (Loan Words)</h3>
        <p>Toki Pona words are always lowercase. Proper names (Cities, People) are capitalized, BUT they must be treated as adjectives.</p>
        <ul>
            <li>❌ <strong>Mary li toki.</strong> (Wrong. "Mary" is not a Toki Pona noun.)</li>
            <li>✅ <strong>jan Mary li toki.</strong> (Correct. "The Mary-person speaks.")</li>
            <li>✅ <strong>ma Kanata.</strong> (Canada-land.)</li>
        </ul>

        <h3>3. Pronunciation Rules</h3>
        <p><strong>⚠️ The Golden Rule:</strong> Stress the FIRST syllable. (<strong>KA</strong>-la-ma).</p>
        <div class="grammar-box" style="background:var(--bg-card)">
            <p><strong>Consonants:</strong></p>
            <ul>
                <li><strong>j</strong> = Sounds like "Y" in "<strong>Y</strong>es". (jan = yan).</li>
                <li><strong>All others</strong> = Same as English (k, l, m, n, p, s, t, w).</li>
            </ul>
        </div>
        `,
        story: `
        <p><b>toki!</b> (Hello!)</p>
        <p><b>ni li toki pona.</b> (This is simple language.)</p>
        <p><b>jan Keli li pona.</b> (Kelly is good.)</p>
        `,
        quiz: [
        // 1. Toki Pona to English
        { 
        type: "mc", 
        q: "What does <b>'toki pona'</b> mean?", 
        options: ["Simple language", "Good person", "Talking bad"], 
        ans: 0 
        },
        // 2. English to Toki Pona
        { 
        type: "mc", 
        q: "Select the word for <b>'Bad'</b> or <b>'Complex'</b>.", 
        options: ["pona", "ike", "jan"], 
        ans: 1 
        },
        // 3. Find the Correct Sentence (Grammar)
        {    
        type: "mc", 
        q: "Which sentence is grammatically correct?", 
        options: ["Mary li toki.", "jan Mary li toki.", "jan mary li toki."], 
        ans: 1 
        },
        // 4. Find the Incorrect Sentence
        { 
        type: "mc", 
        q: "Which of these is <b>WRONG</b>?", 
        options: ["mi jan.", "mi pona.", "mi li jan."], 
        ans: 2 
        },
        // 5. Sentence Builder
        { 
        type: "builder", 
        q: "Translate: <b>'The person is good.'</b>", 
        correctSentence: "jan li pona", // The target answer
        words: ["jan", "li", "pona", "ike", "suli", "mi"] // Shuffled words + distractors
        }
        ]
    },

    // --- LESSON 2 ---
    {
        id: 2, 
        type: "lesson", 
        title: "The Foundation of Being", 
        desc: "Mastering the basic Subject-Predicate structure and the 'mi/sina' exception.",
        vocab: [
            { word: "li", def: "A grammar word. It separates the 'Subject' from the 'Verb'.", type: "particle", ex: "jan li suli. (The person is big.)" },
            { word: "mi", def: "I, me, we, us.", type: "pronoun", ex: "mi jan. (I am a person.)" },
            { word: "sina", def: "You.", type: "pronoun", ex: "sina pona. (You are good.)" },
            { word: "suli", def: "Big, tall, long, important, adult.", type: "adj", ex: "jan li suli. (The person is important/big.)" },
            { word: "lili", def: "Small, short, young, little.", type: "adj", ex: "soweli li lili. (The animal is small.)" }
        ],
        grammar: `
        <h3>1. The Magic Word "li"</h3>
        <p>Toki Pona does not use "is/am/are". Instead, we use <strong>li</strong> to separate the Subject from the Action/Description.</p>
        
        <div class="grammar-box">
            <p style="text-align:center; font-size:1.2rem;"><strong>Subject + li + Action</strong></p>
            <p><strong>jan li suli.</strong></p>
            <p>(Person <strong>-></strong> Big.)</p>
        </div>

        <h3>2. The "Me & You" Rule</h3>
        <p>If the subject is exactly <strong>mi</strong> (I) or <strong>sina</strong> (You), you do <strong>not</strong> use <em>li</em>.</p>
        <ul>
            <li>✅ <strong>mi suli.</strong> (I am big.)</li>
            <li>❌ <strong>mi li suli.</strong> (Wrong.)</li>
            <li>✅ <strong>jan li suli.</strong> (The person is big.)</li>
        </ul>
        `,
        story: `
        <p><b>mi jan.</b> (I am a person.)</p>
        <p><b>sina suli.</b> (You are big/important.)</p>
        <p><b>jan li lili.</b> (The person is small.)</p>
        `,
    quiz: [
    { 
        type: "mc", 
        q: "Which sentence is correct?", 
        options: ["mi li suli.", "mi suli.", "mi e suli."], 
        ans: 1 
    },
    { 
        type: "mc", 
        q: "Translate: <b>'The person is small.'</b>", 
        options: ["jan lili.", "jan li lili.", "lili li jan."], 
        ans: 1 
    },
    { 
        type: "builder", 
        q: "Build: <b>'You are good.'</b>", 
        correctSentence: "sina pona", 
        words: ["sina", "pona", "li", "mi", "jan"] 
    },
    { 
        type: "mc", 
        q: "When do you DROP the word 'li'?", 
        options: ["Always", "Never", "When subject is mi or sina"], 
        ans: 2 
    },
    { 
        type: "builder", 
        q: "Build: <b>'I am a person.'</b>", 
        correctSentence: "mi jan", 
        words: ["mi", "jan", "li", "suli", "sina"] 
    }   
    ]
    },

    // --- LESSON 3 ---
    {
        id: 3, 
        type: "lesson", 
        title: "Objects & Causation", 
        desc: "Using 'e' for objects and understanding causative verbs.",
        vocab: [
            { word: "e", def: "A grammar word. It marks the TARGET of an action.", type: "particle", ex: "mi moku e kili. (I eat fruit.)" },
            { word: "moku", def: "To eat, drink, or food.", type: "verb/noun", ex: "soweli li moku. (The animal eats.)" },
            { word: "lukin", def: "To see, look, watch, or eyes.", type: "verb", ex: "mi lukin e sina. (I see you.)" },
            { word: "pali", def: "To do, work, make, build.", type: "verb", ex: "mi pali e tomo. (I build a house.)" },
            { word: "soweli", def: "Animal, beast, land mammal.", type: "noun", ex: "soweli li moku. (The animal eats.)" }
        ],
        grammar: `
        <h3>1. The Target Marker "e"</h3>
        <p>We use <strong>e</strong> to mark the direct object (the target of the action).</p>
        <div class="grammar-box" style="border-color:var(--success)">
            <p><strong>mi moku e kili.</strong></p>
            <p>(I eat [Target:] fruit.)</p>
        </div>

        <h3>2. Causative Verbs ("Making it X")</h3>
        <p>In Toki Pona, almost any word can be a verb. If you use a descriptive word with <strong>e</strong>, it often means "to cause" or "to make".</p>
        <ul>
            <li><strong>pona</strong> (Good) -> <strong>mi pona e tomo.</strong> (I make-good the house = I fix the house.)</li>
            <li><strong>tomo</strong> (House) -> <strong>mi tomo e waso.</strong> (I house the bird = I put the bird in a house.)</li>
        </ul>
        `,
        story: `
        <p><b>mi moku e kili.</b> (I eat fruit.)</p>
        <p><b>soweli li lukin e mi.</b> (The animal watches me.)</p>
        <p><b>mi pona e ilo.</b> (I fix the tool.)</p>
        `,
    quiz: [
    { 
        type: "mc", 
        q: "What does the particle <b>'e'</b> do?", 
        options: ["Ends the sentence", "Marks the direct object", "Marks the subject"], 
        ans: 1 
    },
    { 
        type: "builder", 
        q: "Build: <b>'I eat fruit.'</b>", 
        correctSentence: "mi moku e kili", 
        words: ["mi", "kili", "e", "moku", "li", "soweli"] 
    },
    { 
        type: "mc", 
        q: "Translate: <b>'mi pona e tomo.'</b>", 
        options: ["I fix the house.", "The house is good.", "I like the house."], 
        ans: 0 
    },
    { 
        type: "mc", 
        q: "Which is the <b>INCORRECT</b> sentence?", 
        options: ["mi lukin e sina.", "ona li pali e tomo.", "mi moku kili."], 
        ans: 2 
    },
    { 
        type: "builder", 
        q: "Build: <b>'The animal sees me.'</b>", 
        correctSentence: "soweli li lukin e mi", 
        words: ["soweli", "mi", "lukin", "e", "li", "pona"] 
    }
    ]
    },

    // --- LESSON 4 ---
    {
        id: 4, 
        type: "lesson", 
        title: "Describing Things", 
        desc: "Adding specificity through modifiers and the particle 'pi'.",
        vocab: [
            { word: "pi", def: "A grammar word. It regroups modifiers like a parenthesis ( ).", type: "particle", ex: "poki pi telo wawa. (Container of strong water.)" },
            { word: "loje", def: "Red.", type: "adj", ex: "kili loje. (Red fruit.)" },
            { word: "tomo", def: "House, building, room.", type: "noun", ex: "tomo mi. (My house.)" },
            { word: "ilo", def: "Tool, device, machine.", type: "noun", ex: "ilo moku. (Eating tool / Fork.)" },
            { word: "wawa", def: "Strong, powerful, energetic, intense.", type: "adj", ex: "telo wawa. (Strong water / Alcohol or Coffee.)" }
        ],
        grammar: `
        <h3>1. Describing Words come AFTER</h3>
        <p>In Toki Pona, the main object comes first.</p>
        <ul>
            <li><strong>tomo loje</strong> (House Red = Red House)</li>
            <li><strong>ilo moku</strong> (Tool Eating = Fork/Spoon)</li>
        </ul>

        <h3>2. The "pi" Rule</h3>
        <p>Use <strong>pi</strong> ONLY when the <em>description itself</em> is more than one word.</p>
        <ul>
            <li><strong>poki telo wawa</strong> = (Water-Container) that is Strong. (A sturdy bottle).</li>
            <li><strong>poki pi telo wawa</strong> = Container of (Water Strong). (A cup of Coffee).</li>
        </ul>
        <p><strong>Note:</strong> Do NOT use <em>pi</em> for single adjectives. <em>tomo pi loje</em> is wrong. Just <em>tomo loje</em>.</p>
        `,
        story: `
        <p><b>mi jo e ilo moku.</b> (I have a fork/eating-tool.)</p>
        <p><b>tomo loje li suli.</b> (The red house is big.)</p>
        <p><b>mi moku e telo wawa.</b> (I drink coffee/strong-water.)</p>
        `,
    quiz: [
    { 
        type: "mc", 
        q: "Translate: <b>'Red house'</b>", 
        options: ["tomo loje", "loje tomo", "tomo pi loje"], 
        ans: 0 
    },
    { 
        type: "builder", 
        q: "Build: <b>'I have a strong tool.'</b>", 
        correctSentence: "mi jo e ilo wawa", 
        words: ["mi", "jo", "e", "ilo", "wawa", "pi", "li"] 
    },
    { 
        type: "mc", 
        q: "When do you use <b>'pi'</b>?", 
        options: ["For plural nouns", "When an adjective modifies another adjective", "For all colors"], 
        ans: 1 
    },
    { 
        type: "mc", 
        q: "Translate: <b>'poki pi telo wawa'</b>", 
        options: ["Strong water bottle", "A bottle of strong water", "Water bottle is strong"], 
        ans: 1 
    },
    { 
        type: "builder", 
        q: "Build: <b>'Eating tool (Fork)'</b>", 
        correctSentence: "ilo moku", 
        words: ["ilo", "moku", "pi", "e", "li"] 
    }
    ]
    },

    {
    id: "1",
    type: "test",
    title: "Checkpoint 1: The Basics",
    desc: "Test your understanding of mi, sina, li, and basic objects.",
    grammar: `
        <h3>Review: The Core Structure</h3>
        <ul>
            <li><strong>li:</strong> Separates Subject and Verb. (<em>jan <strong>li</strong> moku</em>).</li>
            <li><strong>mi / sina:</strong> Do NOT use 'li'. (<em>mi moku</em>).</li>
            <li><strong>e:</strong> Marks the object/target. (<em>mi moku <strong>e</strong> kili</em>).</li>
            <li><strong>pi:</strong> Use only for "adjective of an adjective". (<em>tomo <strong>pi</strong> telo wawa</em>).</li>
        </ul>
    `,quiz: [
    // --- VOCAB (5) ---
    { type: "mc", q: "Translate: <b>'soweli'</b>", options: ["Animal", "Plant", "Person"], ans: 0 },
    { type: "mc", q: "Translate: <b>'pona'</b>", options: ["Bad/Complex", "Good/Simple", "Big"], ans: 1 },
    { type: "mc", q: "Translate: <b>'ilo'</b>", options: ["Tool", "House", "Sun"], ans: 0 },
    { type: "mc", q: "Translate: <b>'lukin'</b>", options: ["To eat", "To see", "To sleep"], ans: 1 },
    { type: "mc", q: "Translate: <b>'wawa'</b>", options: ["Water", "Strong/Power", "Small"], ans: 1 },

    // --- GRAMMAR (5) ---
    { type: "mc", q: "Which particle marks the <b>Direct Object</b>?", options: ["li", "pi", "e"], ans: 2 },
    { type: "mc", q: "Select the correct structure:", options: ["mi li moku.", "mi moku.", "moku mi."], ans: 1 },
    { type: "mc", q: "When do you use <b>'pi'</b>?", options: ["Multiple adjectives (Adj of Adj)", "Plural nouns", "Verbs"], ans: 0 },
    { type: "mc", q: "Where does the adjective go?", options: ["Before the noun", "After the noun"], ans: 1 },
    { type: "mc", q: "Translate: <b>'I am not eating.'</b>", options: ["mi moku ala.", "mi ala moku.", "ala mi moku."], ans: 0 },

    // --- TRANSLATION (5) ---
    { type: "mc", q: "Translate: <b>'tomo loje'</b>", options: ["Red house", "Big house", "House paint"], ans: 0 },
    { type: "mc", q: "Translate: <b>'ilo moku'</b>", options: ["Food tool (Fork/Spoon)", "Edible tool", "Tool eats"], ans: 0 },
    { type: "mc", q: "Translate: <b>'telo wawa'</b>", options: ["Weak water", "Strong water (Coffee/Alcohol)", "Big river"], ans: 1 },
    { type: "mc", q: "Translate: <b>'jan lili'</b>", options: ["Small person / Child", "Big person", "Bad person"], ans: 0 },
    { type: "mc", q: "Translate: <b>'mi en sina'</b>", options: ["Me and you", "Me or you", "I am you"], ans: 0 },

    // --- BUILDER (5) ---
    { type: "builder", q: "Build: <b>'I eat fruit.'</b>", correctSentence: "mi moku e kili", words: ["mi", "moku", "e", "kili", "li", "pona"] },
    { type: "builder", q: "Build: <b>'The person is big.'</b>", correctSentence: "jan li suli", words: ["jan", "li", "suli", "mi", "e", "lili"] },
    { type: "builder", q: "Build: <b>'Container of strong water.'</b>", correctSentence: "poki pi telo wawa", words: ["poki", "pi", "telo", "wawa", "li", "e", "pona"] },
    { type: "builder", q: "Build: <b>'You are good.'</b>", correctSentence: "sina pona", words: ["sina", "pona", "li", "mi", "jan", "e"] },
    { type: "builder", q: "Build: <b>'I fix (make good) the house.'</b>", correctSentence: "mi pona e tomo", words: ["mi", "pona", "e", "tomo", "li", "suli", "lukin"] }
]

    },

    // --- LESSON 5 ---
    {
        id: 5, 
        type: "lesson", 
        title: "Location & Negation", 
        desc: "Locating objects, saying 'no', and connecting ideas.",
        vocab: [
            { word: "ala", def: "No, not, zero.", type: "particle", ex: "mi moku ala. (I am not eating.)" },
            { word: "tawa", def: "To, towards, going to.", type: "prep/verb", ex: "mi tawa tomo. (I go to the house.)" },
            { word: "lon", def: "In, at, on.", type: "prep/verb", ex: "mi lon ma. (I am on the land.)" },
            { word: "en", def: "And (only for subjects).", type: "particle", ex: "mi en sina. (Me and you.)" },
            { word: "kepeken", def: "Using, with.", type: "prep/verb", ex: "mi kepeken ilo. (I use a tool.)" }
        ],
        grammar: `
        <h3>1. Prepositions</h3>
        <p>Words like <strong>lon</strong> (at) and <strong>tawa</strong> (to) are prepositions. You don't need 'e' with them.</p>
        <ul>
            <li><strong>mi tawa tomo.</strong> (I go-to House.)</li>
            <li><strong>mi lon ma.</strong> (I am-at Land.)</li>
        </ul>

        <h3>2. Saying "No" (ala)</h3>
        <p>Put <strong>ala</strong> after the word to cancel it.</p>
        <ul>
            <li><strong>mi lape ala.</strong> (I sleep NOT.)</li>
            <li><strong>jan ala.</strong> (Person None = Nobody.)</li>
        </ul>

        <h3>3. The word "And"</h3>
        <p>Toki Pona has no universal "and".</p>
        <ul>
            <li><strong>Subjects:</strong> Use <strong>en</strong>. (<em>mi <strong>en</strong> sina</em> = Me and you).</li>
            <li><strong>Objects:</strong> Repeat <strong>e</strong>. (<em>mi moku e kili <strong>e</strong> pan</em> = I eat fruit and bread).</li>
            <li><strong>Verbs:</strong> Repeat <strong>li</strong>. (<em>ona li moku <strong>li</strong> lape</em> = She eats and sleeps).</li>
        </ul>
        `,
        story: `
        <p><b>mi lon tomo.</b> (I am in the house.)</p>
        <p><b>mi tawa esun.</b> (I go to the market.)</p>
        <p><b>mi pali ala.</b> (I am not working.)</p>
        `,
    quiz: [
    { 
        type: "builder", 
        q: "Build: <b>'I am not sleeping.'</b>", 
        correctSentence: "mi lape ala", 
        words: ["mi", "lape", "ala", "li", "e", "tawa"] 
    },
    { 
        type: "mc", 
        q: "Translate: <b>'mi tawa tomo.'</b>", 
        options: ["I am at the house.", "I go to the house.", "The house moves."], 
        ans: 1 
    },
    { 
        type: "mc", 
        q: "How do you say 'Me and you'?", 
        options: ["mi en sina", "mi li sina", "mi e sina"], 
        ans: 0 
    },
    { 
        type: "builder", 
        q: "Build: <b>'The person is in the room.'</b>", 
        correctSentence: "jan li lon tomo", 
        words: ["jan", "li", "lon", "tomo", "e", "tawa"] 
    },
    { 
        type: "mc", 
        q: "Which word means 'No' or 'Not'?", 
        options: ["ala", "ali", "ike"], 
        ans: 0 
    }
    ]
    },

    // --- LESSON 6 ---
    {
        id: 6, 
        type: "lesson", 
        title: "Context & Comparisons", 
        desc: "Using 'la' for context, if/then, and comparisons.",
        vocab: [
            { word: "la", def: "A grammar word. It separates Context from the Main Sentence.", type: "particle", ex: "tenpo ni la mi lape. (Now, I sleep.)" },
            { word: "tenpo", def: "Time, moment, duration.", type: "noun", ex: "tenpo suno. (Sun-time / Day.)" },
            { word: "ni", def: "This, that.", type: "pronoun", ex: "jan ni. (That person.)" },
            { word: "sona", def: "To know, understand, wisdom.", type: "verb", ex: "mi sona e ni. (I know this.)" },
            { word: "wile", def: "To want, need, desire.", type: "verb", ex: "mi wile moku. (I want to eat.)" }
        ],
        grammar: `
        <h3>1. The Context Box "la"</h3>
        <p><strong>[ Context ] la [ Main Sentence ]</strong></p>
        <p>This covers "If", "When", and "In the context of".</p>
        <ul>
            <li><strong>Time:</strong> <em>tenpo ni <strong>la</strong> mi pali.</em> (Time this -> I work. = "Now I work.")</li>
            <li><strong>Condition:</strong> <em>sina wile <strong>la</strong> mi tawa.</em> (You want -> I go. = "If you want, I go.")</li>
        </ul>

        <h3>2. Comparisons</h3>
        <p>Toki Pona has no word for "more" or "less". We use <strong>la</strong>.</p>
        <p>To say "I am bigger than you", we say: <br><strong>"In the context of you, I am big."</strong></p>
        <div class="grammar-box">
            <p><strong>sina la, mi suli.</strong></p>
            <p>(Compared to you, I am big.)</p>
        </div>
        `,
        story: `
        <p><b>tenpo ni la mi lape.</b> (Now, I sleep.)</p>
        <p><b>sina wile la mi tawa.</b> (If you want, I go.)</p>
        <p><b>tomo mi la tomo sina li suli.</b> (Compared to my house, your house is big.)</p>
        `,
        quiz: [
    { 
        type: "mc", 
        q: "What does <b>'la'</b> mark?", 
        options: ["The object", "The context", "The verb"], 
        ans: 1 
    },
    { 
        type: "builder", 
        q: "Build: <b>'If you want, I go.'</b>", 
        correctSentence: "sina wile la mi tawa", 
        words: ["sina", "wile", "la", "mi", "tawa", "li", "e"] 
    },
    { 
        type: "mc", 
        q: "Translate: <b>'tenpo ni la'</b>", 
        options: ["This time", "Now (At this time...)", "Time is this"], 
        ans: 1 
    },
    { 
        type: "builder", 
        q: "Build: <b>'Compared to me, you are big.'</b>", 
        correctSentence: "mi la sina suli", 
        words: ["mi", "la", "sina", "suli", "li", "e", "pona"] 
    },
    { 
        type: "mc", 
        q: "True or False: Toki Pona has a specific word for 'More'.", 
        options: ["True", "False (Use 'la' for comparison)"], 
        ans: 1 
    }
    ]
    },

    // --- LESSON 7 ---
    {
        id: 7, 
        type: "lesson", 
        title: "Numbers & Ordinals", 
        desc: "Mastering the number system and order.",
        vocab: [
            { word: "nanpa", def: "Number, ordinal marker.", type: "noun", ex: "jan nanpa wan. (First person.)" },
            { word: "wan", def: "One.", type: "num", ex: "jan wan. (One person.)" },
            { word: "tu", def: "Two.", type: "num", ex: "jan tu. (Two people.)" },
            { word: "luka", def: "Five (literally 'hand').", type: "num", ex: "jan luka. (Five people.)" },
            { word: "mute", def: "Many, or Twenty.", type: "num", ex: "jan mute. (Twenty people / Many people.)" },
            { word: "ale", def: "All, Everything, or 100.", type: "num", ex: "jan ale. (100 people.)" }
        ],
        grammar: `
        <h3>1. The Basics (0-99)</h3>
        <p>Toki Pona uses an additive system for small numbers. You sum the words.</p>
        <ul>
            <li><strong>1</strong> = wan</li>
            <li><strong>2</strong> = tu</li>
            <li><strong>5</strong> = luka</li>
            <li><strong>20</strong> = mute</li>
            <li><strong>36</strong> = mute luka luka luka wan (20+5+5+5+1)</li>
        </ul>

        <h3>2. Ordinals (Order)</h3>
        <p>Use <strong>nanpa</strong> to make a number an ordinal (1st, 2nd, 3rd).</p>
        <ul>
            <li><strong>jan tu</strong> = Two people.</li>
            <li><strong>jan nanpa tu</strong> = The second person.</li>
        </ul>

        <h3>3. Large Numbers (100+)</h3>
        <p>For big numbers, we use <strong>ale</strong> (100) as a multiplier (Base 100).</p>
        <ul>
            <li><strong>wan ale</strong> = 100 (1 × 100). *Note: You must say 'wan'.</li>
            <li><strong>tu ale</strong> = 200 (2 × 100).</li>
            <li><strong>wan ale ale</strong> = 10,000 (100 × 100).</li>
            <li><strong>12,345</strong> = <strong>wan ale ale</strong> (10k), <strong>mute tu wan ale</strong> (2300), <strong>mute mute luka</strong> (45).</li>
        </ul>

        <h3>4. Decimals</h3>
        <p>Use <strong>ala</strong> (zero) as the decimal point.</p>
        <ul>
            <li><strong>0.01</strong> = ala wan. (Point one).</li>
            <li><strong>0.10</strong> = ala luka luka. (Point ten).</li>
        </ul>
        `,
        story: `
        <p><b>mi jo e mani mute.</b> (I have much money.)</p>
        <p><b>jan nanpa wan li lon.</b> (The first person is here.)</p>
        <p><b>wan ale.</b> (100.)</p>
        `,
quiz: [
    { 
        type: "builder", 
        q: "Build: <b>'Three people' (2 + 1)</b>", 
        correctSentence: "jan tu wan", 
        words: ["jan", "tu", "wan", "luka", "li"] 
    },
    { 
        type: "mc", 
        q: "What number is <b>'luka'</b>?", 
        options: ["2", "5", "10"], 
        ans: 1 
    },
    { 
        type: "mc", 
        q: "Translate: <b>'jan nanpa wan'</b>", 
        options: ["One person", "The first person", "Number one"], 
        ans: 1 
    },
    { 
        type: "builder", 
        q: "Build: <b>'20' (mute)</b>", 
        correctSentence: "mute", 
        words: ["mute", "luka", "tu", "ale"] 
    },
    { 
        type: "mc", 
        q: "What is <b>'wan ale'</b>?", 
        options: ["100", "101", "10"], 
        ans: 0 
    }
]
    },

    // --- LESSON 8 ---
    {
        id: 8, 
        type: "lesson", 
        title: "Questions & Preverbs", 
        desc: "Asking questions and using preverbs like 'try' and 'can'.",
        vocab: [
            { word: "seme", def: "What? Who? (Question word).", type: "particle", ex: "ni li seme? (What is this?)" },
            { word: "kama", def: "To come, to become, to start.", type: "preverb", ex: "mi kama sona. (I learn.)" },
            { word: "ken", def: "Can, able to, possible.", type: "preverb", ex: "mi ken toki. (I can speak.)" },
            { word: "wile", def: "Want, need, must.", type: "preverb", ex: "mi wile lape. (I want to sleep.)" },
            { word: "alasa", def: "To hunt, forage. PREVERB: To try/attempt.", type: "verb", ex: "mi alasa pini. (I try to finish.)" }
        ],
        grammar: `
        <h3>1. Asking Questions</h3>
        <ul>
            <li><strong>Replace the unknown with 'seme':</strong> <br><em>ni li kili.</em> (This is fruit) -> <em>ni li <strong>seme</strong>?</em> (This is what?)</li>
            <li><strong>Yes/No:</strong> Repeat the verb with <em>ala</em>. <br><em>sina moku <strong>ala</strong> moku?</em> (Do you eat?)</li>
        </ul>

        <h3>2. Preverbs</h3>
        <p>These little words go BEFORE the main action to change its vibe.</p>
        <ul>
            <li><strong>ken</strong> (Can): <em>mi ken lape.</em> (I can sleep.)</li>
            <li><strong>wile</strong> (Want/Must): <em>mi wile lape.</em> (I want to sleep.)</li>
            <li><strong>kama</strong> (Become): <em>mi kama sona.</em> (I come to know = I learn.)</li>
            <li><strong>alasa</strong> (Try): <em>mi alasa lape.</em> (I try to sleep.)</li>
            <li><strong>sona</strong> (Know how): <em>mi sona lape.</em> (I know how to sleep.)</li>
        </ul>
        `,
        story: `
        <p><b>sina wile seme?</b> (What do you want?)</p>
        <p><b>mi alasa sona e toki.</b> (I am trying to know/learn the language.)</p>
        <p><b>sina ken ala ken toki?</b> (Can you speak?)</p>
        `,
quiz: [
    { 
        type: "mc", 
        q: "Which word indicates a question?", 
        options: ["seme", "sina", "sona"], 
        ans: 0 
    },
    { 
        type: "builder", 
        q: "Build: <b>'What is this?'</b>", 
        correctSentence: "ni li seme", 
        words: ["ni", "li", "seme", "e", "jan", "kama"] 
    },
    { 
        type: "mc", 
        q: "Translate: <b>'mi kama sona.'</b>", 
        options: ["I learn (come to know).", "I know the future.", "I went to know."], 
        ans: 0 
    },
    { 
        type: "builder", 
        q: "Build: <b>'I can speak.'</b>", 
        correctSentence: "mi ken toki", 
        words: ["mi", "ken", "toki", "lape", "e", "li"] 
    },
    { 
        type: "mc", 
        q: "How do you ask a Yes/No question?", 
        options: ["Use 'seme'", "Repeat verb with 'ala' (Verb ala Verb)", "Say 'anu'"], 
        ans: 1 
    }
]
    },

    {
    id: "2",
    type: "test",
    title: "Checkpoint 2: Context & Time",
    desc: "Prove your mastery of prepositions, numbers, and 'la'.",
    grammar: `
        <h3>Review: Context & Negation</h3>
        <ul>
            <li><strong>ala:</strong> Put after a word to say "No" or "Not". (<em>mi lape <strong>ala</strong></em>).</li>
            <li><strong>la:</strong> "In the context of X..." (<em>tenpo ni <strong>la</strong>...</em> = Now...).</li>
            <li><strong>seme:</strong> Replaces the unknown word in questions.</li>
            <li><strong>Preverbs:</strong> <em>ken</em> (can), <em>wile</em> (want), <em>kama</em> (become).</li>
        </ul>
    `,
quiz: [
    // --- GRAMMAR: PREPOSITIONS & NEGATION (5) ---
    { type: "mc", q: "Translate: <b>'mi lape ala'</b>", options: ["I am not sleeping", "I sleep a lot", "I will sleep"], ans: 0 },
    { type: "builder", q: "Build: <b>'I go to the house.'</b>", correctSentence: "mi tawa tomo", words: ["mi", "tawa", "tomo", "e", "li", "lon"] },
    { type: "mc", q: "Which word means <b>'At/In/On'</b>?", options: ["lon", "tawa", "kepeken"], ans: 0 },
    { type: "builder", q: "Build: <b>'You and me.' (Subject)</b>", correctSentence: "sina en mi", words: ["sina", "en", "mi", "li", "e"] },
    { type: "mc", q: "Does 'lon' (at) require the particle 'e'?", options: ["Yes", "No"], ans: 1 },

    // --- GRAMMAR: CONTEXT 'la' (5) ---
    { type: "mc", q: "What does <b>'la'</b> separate?", options: ["Context and Main Sentence", "Subject and Verb", "Verb and Object"], ans: 0 },
    { type: "builder", q: "Build: <b>'If you want, I go.'</b>", correctSentence: "sina wile la mi tawa", words: ["sina", "wile", "la", "mi", "tawa", "li", "e"] },
    { type: "mc", q: "Translate: <b>'tenpo ni la'</b>", options: ["Now (At this time...)", "Time is this", "Later"], ans: 0 },
    { type: "mc", q: "How do you compare two things?", options: ["Using 'la' (X la Y li...)", "Using 'mute'", "Using 'sama'"], ans: 0 },
    { type: "builder", q: "Build: <b>'Compared to me, you are good.'</b>", correctSentence: "mi la sina pona", words: ["mi", "la", "sina", "pona", "li", "suli"] },

    // --- VOCAB: NUMBERS (5) ---
    { type: "mc", q: "What is <b>'wan ale'</b>?", options: ["100", "101", "10"], ans: 0 },
    { type: "builder", q: "Build: <b>'Three' (2 + 1)</b>", correctSentence: "tu wan", words: ["tu", "wan", "luka", "mute"] },
    { type: "mc", q: "What is <b>'luka'</b>?", options: ["5 (Hand)", "2", "10"], ans: 0 },
    { type: "mc", q: "Translate: <b>'jan nanpa wan'</b>", options: ["The first person", "One person", "Number one"], ans: 0 },
    { type: "builder", q: "Build: <b>'20'</b>", correctSentence: "mute", words: ["mute", "ale", "luka", "tu"] },

    // --- VOCAB: QUESTIONS & PREVERBS (5) ---
    { type: "mc", q: "What is <b>'seme'</b>?", options: ["Question word (What/Who)", "Exclamation", "No"], ans: 0 },
    { type: "mc", q: "Translate: <b>'mi ken toki'</b>", options: ["I can speak", "I want to speak", "I speak"], ans: 0 },
    { type: "builder", q: "Build: <b>'What is this?'</b>", correctSentence: "ni li seme", words: ["ni", "li", "seme", "jan", "pona"] },
    { type: "mc", q: "Translate: <b>'mi wile lape'</b>", options: ["I want to sleep", "I can sleep", "I try to sleep"], ans: 0 },
    { type: "builder", q: "Build: <b>'I learn (come to know).'</b>", correctSentence: "mi kama sona", words: ["mi", "kama", "sona", "li", "e", "wile"] }
]
    },

    // --- LESSON 9: COMMANDS & CONNECTIONS ---
    {
        id: 9, 
        type: "lesson", 
        title: "Commands & Connections", 
        desc: "Giving orders, offering choices, and advanced connections.",
        vocab: [
            { word: "o", def: "Hey! (Calling attention) or Do it! (Commands).", type: "particle", ex: "jan o! (Hey person!)" },
            { word: "anu", def: "Or.", type: "particle", ex: "telo anu kili? (Water or fruit?)" },
            { word: "taso", def: "But, however, only.", type: "particle", ex: "mi wile, taso mi ken ala. (I want, but I can't.)" },
            { word: "kin", def: "Indeed, too, also, really.", type: "particle", ex: "mi kin. (Me too.)" },
            { word: "namako", def: "Extra, spice, accessory.", type: "noun", ex: "moku namako. (Spicy/Fancy food.)" }
        ],
        grammar: `
        <h3>1. The Command "o"</h3>
        <p>Use <strong>o</strong> to talk TO someone, or to tell them to do something.</p>
        <ul>
            <li><strong>jan o!</strong> (Hey person!)</li>
            <li><strong>o moku!</strong> (Eat!)</li>
            <li><strong>sina o lape.</strong> (You, sleep! / Go to sleep.)</li>
        </ul>

        <h3>2. Splitting Sentences (Relative Clauses)</h3>
        <p>Toki Pona does not have "who" or "that". You cannot say "The man who eats is big." You must split it.</p>
        <p><strong>Method:</strong> Use <em>ni</em> (this) to bridge them.</p>
        <div class="grammar-box">
            <p><strong>jan ni li suli: ona li moku.</strong></p>
            <p>(That person is big: they eat.)</p>
        </div>
        `,
        story: `
        <p><b>jan o, o kute!</b> (Hey people, listen!)</p>
        <p><b>mi wile moku, taso mi jo ala e mani.</b> (I want to eat, but I have no money.)</p>
        <p><b>jan ni li pona: ona li pana e mani.</b> (That person is good: they give money.)</p>
        `,
quiz: [
    { 
        type: "mc", 
        q: "How do you say <b>'Hey!'</b>?", 
        options: ["a!", "o!", "ni!"], 
        ans: 1 
    },
    { 
        type: "builder", 
        q: "Build: <b>'Eat!' (Command)</b>", 
        correctSentence: "o moku", 
        words: ["o", "moku", "li", "sina", "e"] 
    },
    { 
        type: "mc", 
        q: "Translate: <b>'moku anu lape'</b>", 
        options: ["Eat and sleep", "Eat or sleep", "Eat then sleep"], 
        ans: 1 
    },
    { 
        type: "builder", 
        q: "Build: <b>'I want, but I can't.'</b>", 
        correctSentence: "mi wile taso mi ken ala", 
        words: ["mi", "wile", "taso", "ken", "ala", "li", "anu"] 
    },
    { 
        type: "mc", 
        q: "How do you handle 'The man who eats' (Relative Clauses)?", 
        options: ["Use 'pi'", "Split into two sentences with 'ni'", "Use 'seme'"], 
        ans: 1 
    }
]
    },

    // --- LESSON 10: PEOPLE & SOCIETY ---
    {
        id: 10, type: "lesson", title: "People & Society", desc: "Words for gender, family, and groups.",
        vocab: [
            { word: "ona", def: "He, she, it, they.", type: "pronoun", ex: "ona li pona. (They are good.)" },
            { word: "mama", def: "Parent, mother, father, creator.", type: "noun", ex: "mama mi. (My parent.)" },
            { word: "mije", def: "Man, husband, male.", type: "noun", ex: "mije ni. (That man.)" },
            { word: "meli", def: "Woman, wife, female.", type: "noun", ex: "meli pona. (Good woman.)" },
            { word: "tonsi", def: "Non-binary, trans, gender-non-conforming.", type: "noun", ex: "jan tonsi. (Non-binary person.)" },
            { word: "kulupu", def: "Group, community, society, company.", type: "noun", ex: "kulupu toki. (Language community.)" }
        ],
        grammar: `<h3>Usage Note</h3><p><strong>ona</strong> is the universal pronoun. It covers he, she, and they. Toki Pona does not distinguish gender in pronouns.</p>`,
        story: `<p><b>ona li mama mi.</b> (She is my mother.)</p><p><b>kulupu li suli.</b> (The group is big.)</p>`,
        quiz: [
    { 
        type: "mc", 
        q: "What does <b>'ona'</b> mean?", 
        options: ["He/She/It/They", "You", "We"], 
        ans: 0 
    },
    { 
        type: "builder", 
        q: "Build: <b>'She is my parent.'</b>", 
        correctSentence: "ona li mama mi", 
        words: ["ona", "li", "mama", "mi", "e", "jan"] 
    },
    { 
        type: "mc", 
        q: "Translate: <b>'meli pona'</b>", 
        options: ["Good woman", "Good man", "Good person"], 
        ans: 0 
    },
    { 
        type: "mc", 
        q: "Translate: <b>'jan tonsi'</b>", 
        options: ["Leader", "Non-binary person", "Warrior"], 
        ans: 1 
    },
    { 
        type: "builder", 
        q: "Build: <b>'The group speaks.'</b>", 
        correctSentence: "kulupu li toki", 
        words: ["kulupu", "li", "toki", "e", "mi", "ona"] 
    }
]
},

    // --- LESSON 11: THE BODY ---
    {
        id: 11, type: "lesson", title: "The Body", desc: "Parts of the physical self.",
        vocab: [
            { word: "luka", def: "Hand, arm.", type: "noun", ex: "luka mi. (My hand.)" },
            { word: "noka", def: "Foot, leg.", type: "noun", ex: "noka mi. (My foot.)" },
            { word: "uta", def: "Mouth, lips.", type: "noun", ex: "uta mi. (My mouth.)" },
            { word: "sijelo", def: "Body, torso, physical state.", type: "noun", ex: "sijelo mi. (My body.)" },
            { word: "lawa", def: "Head, mind, to control/lead.", type: "noun/verb", ex: "jan lawa. (Leader/Head person.)" },
            { word: "insa", def: "Inside, stomach, center.", type: "noun", ex: "insa mi. (My stomach/inside.)" },
            { word: "sinpin", def: "Face, front, wall.", type: "noun", ex: "sinpin tomo. (Wall of house.)" },
            { word: "monsi", def: "Back, rear, behind.", type: "noun", ex: "lon monsi. (At the back.)" }
        ],
        grammar: `<h3>Body Metaphors</h3><p><strong>lawa</strong> means 'head', but also 'to lead' or 'control'.<br><strong>noka</strong> is 'foot', but also the 'bottom' of something.</p>`,
        story: `<p><b>o lawa e kulupu.</b> (Lead the group.)</p><p><b>sijelo mi li pona.</b> (My body is good.)</p>`,
        quiz: [
    { type: "mc", q: "What does <b>'lawa'</b> mean?", options: ["Head / To lead", "Hand", "Foot"], ans: 0 },
    { type: "builder", q: "Build: <b>'My hand is small.'</b>", correctSentence: "luka mi li lili", words: ["luka", "mi", "li", "lili", "suli", "noka"] },
    { type: "mc", q: "Translate: <b>'noka'</b>", options: ["Foot / Leg / Bottom", "Hand / Arm", "Head"], ans: 0 },
    { type: "mc", q: "Which word means <b>'Face'</b> or <b>'Front'</b>?", options: ["sinpin", "monsi", "lupa"], ans: 0 },
    { type: "builder", q: "Build: <b>'Open the mouth.'</b>", correctSentence: "o open e uta", words: ["o", "open", "e", "uta", "noka", "luka"] }
]    
},

    // --- LESSON 12: NATURE ---
    {
        id: 12, type: "lesson", title: "Nature & Elements", desc: "The physical world around us.",
        vocab: [
            { word: "ma", def: "Land, earth, country, place.", type: "noun", ex: "ma pona. (Good land.)" },
            { word: "suno", def: "Sun, light, brightness.", type: "noun", ex: "suno li wawa. (The sun is strong.)" },
            { word: "mun", def: "Moon, star, night sky object.", type: "noun", ex: "mun li loje. (The moon is red.)" },
            { word: "telo", def: "Water, liquid, wet.", type: "noun", ex: "telo kili. (Fruit juice.)" },
            { word: "kon", def: "Air, wind, spirit, soul.", type: "noun", ex: "kon li lete. (The wind is cold.)" },
            { word: "ko", def: "Powder, paste, clay, semi-solid.", type: "noun", ex: "ko jaki. (Mud/dirt.)" },
            { word: "seli", def: "Fire, heat, warm.", type: "adj/noun", ex: "telo seli. (Hot water.)" },
            { word: "kiwen", def: "Stone, rock, hard object, metal.", type: "noun", ex: "ilo kiwen. (Metal tool.)" }
        ],
        grammar: `<h3>Nature Words</h3><p><strong>telo</strong> is any liquid. <strong>kiwen</strong> is any hard substance (metal, rock, plastic).</p>`,
        story: `<p><b>suno li seli.</b> (The sun is hot.)</p><p><b>mi moku e telo.</b> (I drink water.)</p>`,
        quiz: [
    { type: "mc", q: "Translate: <b>'telo seli'</b>", options: ["Hot water", "Cold water", "Ice"], ans: 0 },
    { type: "builder", q: "Build: <b>'The sun is strong.'</b>", correctSentence: "suno li wawa", words: ["suno", "li", "wawa", "mun", "telo", "ma"] },
    { type: "mc", q: "What is <b>'kiwen'</b>?", options: ["Hard object / Rock / Metal", "Soft / Mud", "Air"], ans: 0 },
    { type: "mc", q: "Translate: <b>'kon'</b>", options: ["Air / Wind / Spirit", "Fire", "Earth"], ans: 0 },
    { type: "builder", q: "Build: <b>'I am on the land.'</b>", correctSentence: "mi lon ma", words: ["mi", "lon", "ma", "telo", "li", "e"] }
]
    },

    {
    id: "3",
    type: "test",
    title: "Checkpoint 3: The World",
    desc: "Commands, body parts, and nature vocabulary.",
    grammar: `
        <h3>Review: World & Connections</h3>
        <ul>
            <li><strong>o:</strong> Use for commands (<em>o moku!</em>) or calling names (<em>jan Keli o!</em>).</li>
            <li><strong>ona:</strong> He, She, It, They. (Gender neutral).</li>
            <li><strong>Metaphors:</strong> <em>lawa</em> (Head/Lead), <em>noka</em> (Foot/Bottom).</li>
        </ul>
    `,
    quiz: [
    // --- COMMANDS & PEOPLE (5) ---
    { type: "mc", q: "How do you give a command?", options: ["Use 'o' (o moku!)", "Use 'li'", "Use 'e'"], ans: 0 },
    { type: "builder", q: "Build: <b>'Hey person!'</b>", correctSentence: "jan o", words: ["jan", "o", "li", "e", "ni"] },
    { type: "mc", q: "Translate: <b>'ona'</b>", options: ["He/She/It/They", "I", "You"], ans: 0 },
    { type: "mc", q: "Translate: <b>'mije'</b>", options: ["Man", "Woman", "Parent"], ans: 0 },
    { type: "builder", q: "Build: <b>'Listen!'</b>", correctSentence: "o kute", words: ["o", "kute", "li", "toki", "lukin"] },

    // --- BODY (5) ---
    { type: "mc", q: "What is <b>'luka'</b>?", options: ["Hand/Arm", "Foot/Leg", "Head"], ans: 0 },
    { type: "mc", q: "Translate: <b>'lawa'</b>", options: ["Head / Control", "Body", "Face"], ans: 0 },
    { type: "builder", q: "Build: <b>'My body is good.'</b>", correctSentence: "sijelo mi li pona", words: ["sijelo", "mi", "li", "pona", "lawa", "ike"] },
    { type: "mc", q: "Translate: <b>'sinpin'</b>", options: ["Face / Front / Wall", "Back / Rear", "Inside"], ans: 0 },
    { type: "mc", q: "What is <b>'insa'</b>?", options: ["Inside / Stomach", "Outside / Skin", "Head"], ans: 0 },

    // --- NATURE (5) ---
    { type: "mc", q: "Translate: <b>'ma'</b>", options: ["Land / Earth", "Sky", "Water"], ans: 0 },
    { type: "builder", q: "Build: <b>'Red moon.'</b>", correctSentence: "mun loje", words: ["mun", "loje", "li", "suno", "pimeja"] },
    { type: "mc", q: "What is <b>'telo'</b>?", options: ["Water / Liquid", "Fire", "Stone"], ans: 0 },
    { type: "mc", q: "Translate: <b>'ko'</b>", options: ["Powder / Paste / Mud", "Rock", "Air"], ans: 0 },
    { type: "builder", q: "Build: <b>'The fire is hot.'</b>", correctSentence: "seli li wawa", words: ["seli", "li", "wawa", "telo", "kiwen", "e"] },

    // --- MIXED (5) ---
    { type: "mc", q: "Translate: <b>'mama'</b>", options: ["Parent / Creator", "Child", "Friend"], ans: 0 },
    { type: "builder", q: "Build: <b>'The group listens.'</b>", correctSentence: "kulupu li kute", words: ["kulupu", "li", "kute", "toki", "e", "jan"] },
    { type: "mc", q: "What is <b>'anu'</b>?", options: ["Or", "And", "But"], ans: 0 },
    { type: "mc", q: "Translate: <b>'taso'</b>", options: ["But / Only", "Also", "Or"], ans: 0 },
    { type: "builder", q: "Build: <b>'Me too.'</b>", correctSentence: "mi kin", words: ["mi", "kin", "taso", "anu", "li"] }
]
    },

    // --- LESSON 13: LIFE & DEATH ---
    {
        id: 13, type: "lesson", title: "Life Forms", desc: "Plants, animals, and existence.",
        vocab: [
            { word: "kasi", def: "Plant, tree, leaf, herb, wood.", type: "noun", ex: "kasi suli. (Big tree.)" },
            { word: "soko", def: "Fungus, mushroom.", type: "noun", ex: "moku soko. (Mushroom food.)" },
            { word: "akesi", def: "Reptile, amphibian, non-cute animal.", type: "noun", ex: "akesi lili. (Lizard.)" },
            { word: "waso", def: "Bird, flying creature.", type: "noun", ex: "waso li tawa sewi. (Bird flies up.)" },
            { word: "kala", def: "Fish, sea creature.", type: "noun", ex: "kala li lon telo. (Fish is in water.)" },
            { word: "pipi", def: "Bug, insect, spider.", type: "noun", ex: "pipi mute. (Many bugs.)" },
            { word: "moli", def: "Death, to die, to kill.", type: "verb/noun", ex: "ona li moli. (He is dead.)" }
        ],
        grammar: `<h3>Grouping Animals</h3><p>Toki Pona groups animals by features: <strong>waso</strong> (flying), <strong>kala</strong> (swimming), <strong>soweli</strong> (land mammal), <strong>akesi</strong> (creepy/crawly/reptile).</p>`,
        story: `<p><b>kala li moku e pipi.</b> (The fish eats the bug.)</p><p><b>kasi li kama suli.</b> (The plant becomes big.)</p>`,
        quiz: [
    { type: "mc", q: "What is a <b>'waso'</b>?", options: ["Bird / Flying creature", "Fish", "Bug"], ans: 0 },
    { type: "builder", q: "Build: <b>'The fish swims (moves).'</b>", correctSentence: "kala li tawa", words: ["kala", "li", "tawa", "waso", "moku", "e"] },
    { type: "mc", q: "Translate: <b>'kasi'</b>", options: ["Plant / Tree", "Animal", "Mushroom"], ans: 0 },
    { type: "mc", q: "Which is a <b>'soweli'</b>?", options: ["Dog / Cat / Cow", "Spider", "Eagle"], ans: 0 },
    { type: "builder", q: "Build: <b>'Bug' (Small animal)</b>", correctSentence: "pipi", words: ["pipi", "akesi", "soweli", "lili"] }
]
    },

    // --- LESSON 14: COLORS & ART ---
    {
        id: 14, type: "lesson", title: "Colors & Art", desc: "Visual description and creativity.",
        vocab: [
            { word: "kule", def: "Color, colorful, to paint.", type: "noun/verb", ex: "kule li pona. (Color is good.)" },
            { word: "jelo", def: "Yellow, light green.", type: "adj", ex: "suno jelo. (Yellow sun.)" },
            { word: "laso", def: "Blue, green (nature colors).", type: "adj", ex: "telo laso. (Blue water.)" },
            { word: "pimeja", def: "Black, dark.", type: "adj", ex: "tomo pimeja. (Dark room.)" },
            { word: "walo", def: "White, light, pale.", type: "adj", ex: "ma walo. (Snow/White land.)" },
            { word: "sitelen", def: "Image, picture, writing, symbol.", type: "noun", ex: "sitelen mi. (My writing/drawing.)" },
            { word: "musi", def: "Fun, art, game, entertainment.", type: "noun/verb", ex: "kalama musi. (Music.)" }
        ],
        grammar: `<h3>Combining Colors</h3><p>Combine words for more colors: <br><strong>laso jelo</strong> (Yellow-Green) <br><strong>loje pimeja</strong> (Dark Red / Brown).</p>`,
        story: `<p><b>mi sitelen e kasi laso.</b> (I draw a green plant.)</p><p><b>ni li musi.</b> (This is fun.)</p>`,
        quiz: [
    { type: "mc", q: "Translate: <b>'laso'</b>", options: ["Blue / Green", "Red", "Yellow"], ans: 0 },
    { type: "builder", q: "Build: <b>'Yellow sun.'</b>", correctSentence: "suno jelo", words: ["suno", "jelo", "loje", "li", "e"] },
    { type: "mc", q: "What is <b>'pimeja'</b>?", options: ["Black / Dark", "White / Light", "Colorful"], ans: 0 },
    { type: "mc", q: "Translate: <b>'sitelen'</b>", options: ["Image / Writing / Symbol", "Sound", "Tool"], ans: 0 },
    { type: "builder", q: "Build: <b>'I paint (color) the house.'</b>", correctSentence: "mi kule e tomo", words: ["mi", "kule", "e", "tomo", "sitelen", "li"] }
]
    },

    // --- LESSON 15: OBJECTS ---
    {
        id: 15, type: "lesson", title: "Objects & Tools", desc: "Interacting with physical things.",
        vocab: [
            { word: "ijo", def: "Thing, object, something.", type: "noun", ex: "ijo ni. (This thing.)" },
            { word: "ilo", def: "Tool, machine, device.", type: "noun", ex: "ilo toki. (Phone/Speech tool.)" },
            { word: "lipu", def: "Paper, book, flat object, card.", type: "noun", ex: "lipu sona. (Book of knowledge.)" },
            { word: "poki", def: "Container, box, cup, bowl.", type: "noun", ex: "poki telo. (Water cup.)" },
            { word: "len", def: "Clothing, cloth, fabric, hidden.", type: "noun", ex: "len mi. (My clothes.)" },
            { word: "supa", def: "Horizontal surface, furniture, table, chair.", type: "noun", ex: "supa lape. (Bed.)" },
            { word: "leko", def: "Block, square, stairs.", type: "noun", ex: "leko kiwen. (Brick.)" },
            { word: "palisa", def: "Stick, rod, long solid object.", type: "noun", ex: "palisa kasi. (Branch.)" }
        ],
        grammar: `<h3>Compound Words</h3><p><strong>supa lape</strong> = Surface for sleep (Bed). <br><strong>ilo toki</strong> = Tool for talk (Phone).</p>`,
        story: `<p><b>o pana e lipu.</b> (Give me the paper.)</p><p><b>mi lon supa.</b> (I am on the chair/furniture.)</p>`,
        quiz: [
    { type: "mc", q: "What is a <b>'supa'</b>?", options: ["Flat surface / Furniture", "Box", "Stick"], ans: 0 },
    { type: "builder", q: "Build: <b>'I have a box.'</b>", correctSentence: "mi jo e poki", words: ["mi", "jo", "e", "poki", "supa", "li"] },
    { type: "mc", q: "Translate: <b>'len'</b>", options: ["Clothing / Fabric", "Tool", "Book"], ans: 0 },
    { type: "mc", q: "What is a <b>'palisa'</b>?", options: ["Stick / Rod", "Square block", "Hole"], ans: 0 },
    { type: "builder", q: "Build: <b>'Bed' (Sleep surface)</b>", correctSentence: "supa lape", words: ["supa", "lape", "moku", "ilo", "pi"] }
]
    },

    // --- LESSON 16: SPACE & MOVEMENT ---
    {
        id: 16, type: "lesson", title: "Space & Movement", desc: "Describing where things are.",
        vocab: [
            { word: "anpa", def: "Down, low, bottom, floor, humble.", type: "adj/noun", ex: "ona li anpa. (He is low/humble.)" },
            { word: "sewi", def: "Up, high, sky, divine.", type: "adj/noun", ex: "tomo sewi. (Tower/Church.)" },
            { word: "weka", def: "Away, absent, removed.", type: "adj", ex: "ona li weka. (He is away.)" },
            { word: "poka", def: "Side, next to, nearby, with.", type: "noun/prep", ex: "lon poka mi. (By my side.)" },
            { word: "nasin", def: "Way, path, road, method, doctrine.", type: "noun", ex: "nasin pona. (The good path.)" },
            { word: "nena", def: "Bump, hill, nose, button.", type: "noun", ex: "nena ma. (Hill.)" },
            { word: "lupa", def: "Hole, door, window, orifice.", type: "noun", ex: "lupa tomo. (Door.)" }
        ],
        grammar: `<h3>Direction</h3><p><strong>tawa sewi</strong> = Go up. <br><strong>lon anpa</strong> = At the bottom.</p>`,
        story: `<p><b>waso li tawa sewi.</b> (The bird goes up.)</p><p><b>o weka e ijo ike.</b> (Remove the bad things.)</p>`,
        quiz: [
    { type: "mc", q: "Translate: <b>'sewi'</b>", options: ["Up / High / Divine", "Down / Floor", "Side"], ans: 0 },
    { type: "builder", q: "Build: <b>'Go down.'</b>", correctSentence: "o tawa anpa", words: ["o", "tawa", "anpa", "sewi", "li", "e"] },
    { type: "mc", q: "What is <b>'monsi'</b>?", options: ["Back / Behind", "Front / Face", "Inside"], ans: 0 },
    { type: "mc", q: "Translate: <b>'poka'</b>", options: ["Side / Next to", "Top", "Bottom"], ans: 0 },
    { type: "builder", q: "Build: <b>'The bird is high up.'</b>", correctSentence: "waso li lon sewi", words: ["waso", "li", "lon", "sewi", "anpa", "e"] }
]
    },

    {
    id: "4",
    type: "test",
    title: "Checkpoint 4: Colors & Space",
    desc: "Describing position, colors, and compound objects.",
    grammar: `
        <h3>Review: Description & Position</h3>
        <ul>
            <li><strong>Colors:</strong> Combine them. <em>laso jelo</em> (Yellow-ish Green).</li>
            <li><strong>Space:</strong> <em>anpa</em> (down), <em>sewi</em> (up), <em>monsi</em> (back).</li>
            <li><strong>Prepositions:</strong> <em>tawa</em> (to), <em>lon</em> (at). No 'e' needed!</li>
        </ul>
    `,
    quiz: [
    // --- LIFE FORMS (5) ---
    { type: "mc", q: "What is a <b>'kala'</b>?", options: ["Fish", "Bird", "Mammal"], ans: 0 },
    { type: "mc", q: "Translate: <b>'akesi'</b>", options: ["Reptile / Amphibian", "Cute animal", "Tree"], ans: 0 },
    { type: "builder", q: "Build: <b>'The plant grows (becomes big).'</b>", correctSentence: "kasi li kama suli", words: ["kasi", "li", "kama", "suli", "e", "moku"] },
    { type: "mc", q: "Which is a <b>'pipi'</b>?", options: ["Ant / Bee", "Dog", "Fish"], ans: 0 },
    { type: "mc", q: "Translate: <b>'soko'</b>", options: ["Mushroom / Fungus", "Fruit", "Meat"], ans: 0 },

    // --- COLORS (5) ---
    { type: "mc", q: "Translate: <b>'walo'</b>", options: ["White / Light", "Black / Dark", "Red"], ans: 0 },
    { type: "builder", q: "Build: <b>'Green water.'</b>", correctSentence: "telo laso", words: ["telo", "laso", "jelo", "li", "e"] },
    { type: "mc", q: "What is <b>'loje'</b>?", options: ["Red", "Blue", "Yellow"], ans: 0 },
    { type: "mc", q: "Translate: <b>'kule'</b>", options: ["Color", "Sound", "Shape"], ans: 0 },
    { type: "builder", q: "Build: <b>'Dark room.'</b>", correctSentence: "tomo pimeja", words: ["tomo", "pimeja", "walo", "li", "e"] },

    // --- OBJECTS (5) ---
    { type: "mc", q: "What is a <b>'lipu'</b>?", options: ["Paper / Book / Flat thing", "Box", "Stick"], ans: 0 },
    { type: "builder", q: "Build: <b>'Phone' (Talk tool)</b>", correctSentence: "ilo toki", words: ["ilo", "toki", "pi", "moku", "kute"] },
    { type: "mc", q: "Translate: <b>'leko'</b>", options: ["Block / Square / Stairs", "Circle", "Line"], ans: 0 },
    { type: "mc", q: "What is a <b>'lupa'</b>?", options: ["Hole / Door / Window", "Wall", "Roof"], ans: 0 },
    { type: "builder", q: "Build: <b>'I have clothes.'</b>", correctSentence: "mi jo e len", words: ["mi", "jo", "e", "len", "leko", "li"] },

    // --- SPACE (5) ---
    { type: "mc", q: "Translate: <b>'nasin'</b>", options: ["Way / Path / Method", "House", "Tree"], ans: 0 },
    { type: "builder", q: "Build: <b>'Look back.'</b>", correctSentence: "o lukin e monsi", words: ["o", "lukin", "e", "monsi", "sinpin", "sewi"] },
    { type: "mc", q: "What is <b>'anpa'</b>?", options: ["Low / Down / Humble", "High / Arrogant", "Side"], ans: 0 },
    { type: "mc", q: "Translate: <b>'nena'</b>", options: ["Bump / Hill / Nose", "Hole", "Flat"], ans: 0 },
    { type: "builder", q: "Build: <b>'God' (Divine person)</b>", correctSentence: "jan sewi", words: ["jan", "sewi", "anpa", "ma", "li"] }
]
    },

    // --- LESSON 17: EMOTION & SOUND ---
    {
        id: 17, type: "lesson", title: "Senses & Emotion", desc: "Feeling and communicating.",
        vocab: [
            { word: "pilin", def: "Feeling, emotion, heart, touch.", type: "noun/verb", ex: "pilin pona. (Good feeling.)" },
            { word: "olin", def: "Love, respect (emotional).", type: "noun/verb", ex: "mi olin e sina. (I love you.)" },
            { word: "kute", def: "Ear, to hear, to listen, to obey.", type: "verb", ex: "o kute! (Listen!)" },
            { word: "kalama", def: "Sound, noise, voice.", type: "noun", ex: "kalama suli. (Loud noise.)" },
            { word: "nimi", def: "Word, name.", type: "noun", ex: "nimi mi li... (My name is...)" },
            { word: "unpa", def: "Sexual activity, erotic.", type: "verb/noun", ex: "unpa li musi. (Sex is fun.)" },
            { word: "mu", def: "Animal noise (Woof, Meow, Moo).", type: "interjection", ex: "soweli li toki e mu. (The animal says mu.)" }
        ],
        grammar: `<h3>Feelings</h3><p><strong>mi pilin pona</strong> = I feel good / I am happy. <br><strong>mi pilin ike</strong> = I feel bad / I am sad/sick.</p>`,
        story: `<p><b>mi olin e mama mi.</b> (I love my parents.)</p><p><b>o kute e kalama musi.</b> (Listen to the music.)</p>`,
        quiz: [
    { type: "mc", q: "What is <b>'pilin'</b>?", options: ["Feeling / Heart / Touch", "Thinking / Head", "Speaking"], ans: 0 },
    { type: "builder", q: "Build: <b>'I love you.'</b>", correctSentence: "mi olin e sina", words: ["mi", "olin", "e", "sina", "pilin", "li"] },
    { type: "mc", q: "Translate: <b>'kalama'</b>", options: ["Sound / Noise", "Picture", "Color"], ans: 0 },
    { type: "mc", q: "What is <b>'mu'</b>?", options: ["Animal noise", "Cow", "Music"], ans: 0 },
    { type: "builder", q: "Build: <b>'I hear a sound.'</b>", correctSentence: "mi kute e kalama", words: ["mi", "kute", "e", "kalama", "pilin", "li"] }
]
    },

    // --- LESSON 18: ABSTRACT I ---
    {
        id: 18, type: "lesson", title: "Abstract Concepts I", desc: "Change, sameness, and truth.",
        vocab: [
            { word: "ante", def: "Different, other, changed.", type: "adj", ex: "ma ante. (Other land.)" },
            { word: "sama", def: "Same, similar, like.", type: "adj/prep", ex: "ona li sama mi. (She is like me.)" },
            { word: "sin", def: "New, fresh, another.", type: "adj", ex: "ilo sin. (New tool.)" },
            { word: "pini", def: "End, tip, finished, past.", type: "noun/adj", ex: "mi pini moku. (I finish eating.)" },
            { word: "namako", def: "Extra, spice, accessory.", type: "noun", ex: "moku namako. (Spice.)" },
            { word: "pakala", def: "Mistake, break, accident, damn!", type: "noun/verb", ex: "ilo li pakala. (The tool is broken.)" }
        ],
        grammar: `<h3>Time Modifiers</h3><p><strong>pini</strong> can mark the past/completion: <br><em>mi pini lape.</em> (I finished sleeping.)</p>`,
        story: `<p><b>mi wile e ijo ante.</b> (I want a different thing.)</p><p><b>ona li sama.</b> (They are the same.)</p>`,
        quiz: [
    { type: "mc", q: "Translate: <b>'sama'</b>", options: ["Same / Similar", "Different", "New"], ans: 0 },
    { type: "builder", q: "Build: <b>'I finished eating.'</b>", correctSentence: "mi pini moku", words: ["mi", "pini", "moku", "kama", "li", "e"] },
    { type: "mc", q: "What is <b>'ante'</b>?", options: ["Different / Other", "Same", "Old"], ans: 0 },
    { type: "mc", q: "Translate: <b>'pakala'</b>", options: ["Mistake / Break", "Fix", "Good"], ans: 0 },
    { type: "builder", q: "Build: <b>'New day (sun).'</b>", correctSentence: "suno sin", words: ["suno", "sin", "pini", "namako", "li"] }
]
    },

    // --- LESSON 19: ABSTRACT II ---
    {
        id: 19, type: "lesson", title: "Abstract Concepts II", desc: "Exchange and causality.",
        vocab: [
            { word: "alasa", def: "To hunt, forage, seek, try.", type: "verb", ex: "mi alasa e moku. (I hunt for food.)" },
            { word: "pana", def: "To give, send, emit, release.", type: "verb", ex: "mi pana e ijo. (I give a thing.)" },
            { word: "jo", def: "To have, hold, carry, contain.", type: "verb", ex: "mi jo e ilo. (I have a tool.)" },
            { word: "lanpan", def: "To take, seize, steal, catch.", type: "verb", ex: "ona li lanpan e kili. (He stole the fruit.)" },
            { word: "mani", def: "Money, large domesticated animal, wealth.", type: "noun", ex: "mi jo e mani. (I have money.)" },
            { word: "esun", def: "Market, shop, trade, business.", type: "noun", ex: "tomo esun. (Shop/Market.)" },
            { word: "tan", def: "From, because of, cause.", type: "prep", ex: "mi kama tan ma. (I come from the land.)" }
        ],
        grammar: `<h3>Cause and Effect</h3><p><strong>tan</strong> marks the origin. <br><em>mi lape tan ni.</em> (I sleep because of this.)</p>`,
        story: `<p><b>mi pana e mani tawa sina.</b> (I give money to you.)</p><p><b>ona li alasa e sona.</b> (She seeks knowledge.)</p>`,
        quiz: [
    { type: "mc", q: "What is <b>'mani'</b>?", options: ["Money / Wealth", "Food", "House"], ans: 0 },
    { type: "builder", q: "Build: <b>'I give money.'</b>", correctSentence: "mi pana e mani", words: ["mi", "pana", "e", "mani", "lanpan", "li"] },
    { type: "mc", q: "Translate: <b>'tan'</b>", options: ["Because / From", "To", "With"], ans: 0 },
    { type: "mc", q: "What is <b>'lanpan'</b>?", options: ["Steal / Seize", "Give", "Buy"], ans: 0 },
    { type: "builder", q: "Build: <b>'I cry because of this.'</b>", correctSentence: "mi telo oko tan ni", words: ["mi", "telo", "oko", "tan", "ni", "li"] }
]
    },

    // --- LESSON 20: MODERN WORDS ---
    {
        id: 20, type: "lesson", title: "Modern Life", desc: "Newer words for modern concepts (Ku Suli).",
        vocab: [
            { word: "misikeke", def: "Medicine, cure, medical.", type: "noun", ex: "tomo misikeke. (Hospital.)" },
            { word: "linluwi", def: "Network, internet, web, connection.", type: "noun", ex: "kulupu linluwi. (Online community.)" },
            { word: "jasima", def: "Mirror, reflect, reverse.", type: "noun/verb", ex: "ilo jasima. (Mirror.)" },
            { word: "majuna", def: "Old, ancient.", type: "adj", ex: "jan majuna. (Old person.)" },
            { word: "kipisi", def: "To cut, split, slice.", type: "verb", ex: "ilo kipisi. (Knife/Scissors.)" },
            { word: "meso", def: "Middle, average, medium.", type: "adj", ex: "lon meso. (In the middle.)" },
            { word: "a", def: "Ah! Ha! (Emotion word).", type: "interjection", ex: "pona a! (Good, wow!)" }
        ],
        grammar: `<h3>Course Complete!</h3><p>You have now seen every word in the standard reference. Go forth and speak good!</p>`,
        story: `<p><b>mi kepeken ilo linluwi.</b> (I use the internet.)</p><p><b>pona a!</b> (Yay!)</p>`,
        quiz: [
    { type: "mc", q: "What is <b>'misikeke'</b>?", options: ["Medicine / Medical", "Magic", "Science"], ans: 0 },
    { type: "builder", q: "Build: <b>'Internet (Web group).'</b>", correctSentence: "kulupu linluwi", words: ["kulupu", "linluwi", "tomo", "ilo", "li"] },
    { type: "mc", q: "Translate: <b>'jasima'</b>", options: ["Mirror / Reflection", "Screen", "Window"], ans: 0 },
    { type: "mc", q: "What is <b>'kipisi'</b>?", options: ["Cut / Slice", "Hit", "Break"], ans: 0 },
    { type: "builder", q: "Build: <b>'Good job! (Exclamation)'</b>", correctSentence: "pona a", words: ["pona", "a", "ike", "kin", "li"] }
]
    },
    {
    id: "5",
    type: "test",
    title: "Final Exam: Full Mastery",
    desc: "The ultimate test of all 20 lessons and 120+ words.",
    grammar: `
        <h3>Review: Abstract & Advanced</h3>
        <ul>
            <li><strong>tan:</strong> Because of / From. (<em>mi lape <strong>tan</strong> ni</em>).</li>
            <li><strong>pilin:</strong> Feeling / Heart. (<em>mi <strong>pilin</strong> pona</em>).</li>
            <li><strong>Communication:</strong> <em>linluwi</em> (Internet), <em>misikeke</em> (Medicine).</li>
        </ul>
    `,
    quiz: [
    // --- BASICS (5) ---
    { type: "mc", q: "Translate: <b>'toki pona'</b>", options: ["Simple/Good Language", "Talking People", "Bad Speech"], ans: 0 },
    { type: "builder", q: "Build: <b>'I eat fruit.'</b>", correctSentence: "mi moku e kili", words: ["mi", "moku", "e", "kili", "li", "pona"] },
    { type: "mc", q: "Which word marks the <b>object</b>?", options: ["e", "li", "la"], ans: 0 },
    { type: "mc", q: "Translate: <b>'jan lili'</b>", options: ["Child / Small person", "Big person", "Parent"], ans: 0 },
    { type: "builder", q: "Build: <b>'You are good.'</b>", correctSentence: "sina pona", words: ["sina", "pona", "li", "mi", "jan"] },

    // --- INTERMEDIATE (5) ---
    { type: "mc", q: "Translate: <b>'tenpo ni la'</b>", options: ["Now", "Later", "Never"], ans: 0 },
    { type: "builder", q: "Build: <b>'I can sleep.'</b>", correctSentence: "mi ken lape", words: ["mi", "ken", "lape", "wile", "li", "e"] },
    { type: "mc", q: "What is <b>'seme'</b>?", options: ["What/Who", "Yes", "No"], ans: 0 },
    { type: "mc", q: "Translate: <b>'luka'</b>", options: ["Hand/Arm", "Foot", "Head"], ans: 0 },
    { type: "builder", q: "Build: <b>'Blue water.'</b>", correctSentence: "telo laso", words: ["telo", "laso", "jelo", "li", "e"] },

    // --- ADVANCED (5) ---
    { type: "mc", q: "Translate: <b>'pilin'</b>", options: ["Feeling / Heart", "Thinking", "Head"], ans: 0 },
    { type: "builder", q: "Build: <b>'I give money.'</b>", correctSentence: "mi pana e mani", words: ["mi", "pana", "e", "mani", "lanpan", "li"] },
    { type: "mc", q: "What is <b>'tan'</b>?", options: ["Because / From", "To", "With"], ans: 0 },
    { type: "mc", q: "Translate: <b>'linluwi'</b>", options: ["Internet / Network", "Line", "Phone"], ans: 0 },
    { type: "builder", q: "Build: <b>'Hospital' (Medicine House)</b>", correctSentence: "tomo misikeke", words: ["tomo", "misikeke", "linluwi", "li", "e"] },

    // --- MASTERY (5) ---
    { type: "mc", q: "Translate: <b>'pini'</b>", options: ["End / Past / Tip", "Start", "Middle"], ans: 0 },
    { type: "builder", q: "Build: <b>'If you want, I go.'</b>", correctSentence: "sina wile la mi tawa", words: ["sina", "wile", "la", "mi", "tawa", "li", "e"] },
    { type: "mc", q: "What is <b>'taso'</b>?", options: ["But / Only", "And", "Or"], ans: 0 },
    { type: "mc", q: "Translate: <b>'ante'</b>", options: ["Different / Other", "Same", "New"], ans: 0 },
    { type: "builder", q: "Build: <b>'I love my parent.'</b>", correctSentence: "mi olin e mama mi", words: ["mi", "olin", "e", "mama", "mi", "li", "ona"] }
]
    }   

];
