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
            { q: "How do you say 'Canada'?", options: ["Kanata", "ma Kanata", "ma kanata"], ans: 1 },
            { q: "Where is the stress placed?", options: ["Last syllable", "First syllable", "Randomly"], ans: 1 },
            { q: "How is 'j' pronounced?", options: ["Like 'y' in Yes", "Like 'j' in Jump"], ans: 0 }
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
            { q: "Which particle separates subject and predicate?", options: ["li", "e", "pi"], ans: 0 },
            { q: "When do you DROP 'li'?", options: ["Always", "With 'mi' or 'sina'", "With 'jan'"], ans: 1 },
            { q: "Translate: 'mi suli'", options: ["I am big", "The person is big", "I is big"], ans: 0 }
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
            { q: "What does 'e' do?", options: ["Separates Subject/Verb", "Marks the Target (Object)", "Means 'and'"], ans: 1 },
            { q: "Translate: 'mi pona e tomo'", options: ["I fix the house", "The house is good", "I am good house"], ans: 0 },
            { q: "Does Toki Pona have verb tenses?", options: ["Yes", "No"], ans: 1 }
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
            { q: "Where do adjectives go?", options: ["Before the noun", "After the noun"], ans: 1 },
            { q: "When do you use 'pi'?", options: ["For multiple modifiers", "For simple adjectives", "Always"], ans: 0 },
            { q: "Translate: 'Red fruit'", options: ["loje kili", "kili loje"], ans: 1 }
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
            { q: "What is the word for 'no' / 'not'?", options: ["ala", "ali", "ike"], ans: 0 },
            { q: "Do prepositions use 'e'?", options: ["Yes", "No"], ans: 1 },
            { q: "How do you say 'Me and you' (Subject)?", options: ["mi en sina", "mi e sina", "mi li sina"], ans: 0 }
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
            { q: "What does 'la' mark?", options: ["The context", "The object", "The subject"], ans: 0 },
            { q: "How do you compare things?", options: ["Using 'la'", "Using 'mute'", "Using 'pi'"], ans: 0 },
            { q: "Translate: 'If you want, I go.'", options: ["sina wile la mi tawa", "mi tawa la sina wile"], ans: 0 }
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
            { q: "What is 'wan ale'?", options: ["100", "101", "110"], ans: 0 },
            { q: "How do you say 'The second person'?", options: ["jan nanpa tu", "jan tu", "nanpa jan tu"], ans: 0 },
            { q: "What word is used for the decimal point?", options: ["ala", "pini", "lili"], ans: 0 }
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
            { q: "What does 'seme' mean?", options: ["What/Question", "Yes", "No"], ans: 0 },
            { q: "Translate: 'I try to eat'", options: ["mi alasa moku", "mi moku alasa", "mi wile moku"], ans: 0 },
            { q: "Translate: 'sina ken toki'", options: ["You can speak", "You speak", "You will speak"], ans: 0 }
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
            { q: "How do you say 'Hey!'?", options: ["o!", "a!", "ni!"], ans: 0 },
            { q: "Translate: 'moku anu lape'", options: ["Eat and sleep", "Eat or sleep", "Eat then sleep"], ans: 1 },
            { q: "How do you say 'The man who sleeps'?", options: ["Split into 2 sentences", "jan li lape...", "jan who lape"], ans: 0 }
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
        quiz: [{q: "What is 'ona'?", options: ["He/She/It", "I/Me", "You"], ans: 0}]
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
        quiz: [{q: "What is 'lawa'?", options: ["Head/Control", "Foot/Walk", "Hand"], ans: 0}]
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
        quiz: [{q: "Translate: 'telo seli'", options: ["Hot water/Tea", "Cold water", "Ice"], ans: 0}]
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
        quiz: [{q: "What is a 'waso'?", options: ["Bird/Flying thing", "Fish", "Bug"], ans: 0}]
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
        quiz: [{q: "Translate: 'laso'", options: ["Blue/Green", "Red", "Black"], ans: 0}]
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
        quiz: [{q: "What is a 'supa'?", options: ["Flat surface/Furniture", "Stick", "Box"], ans: 0}]
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
        quiz: [{q: "What is 'sewi'?", options: ["Up/High/Divine", "Down/Low", "Side"], ans: 0}]
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
        quiz: [{q: "What is 'pilin'?", options: ["Feeling/Heart", "Thinking", "Talking"], ans: 0}]
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
        quiz: [{q: "What is 'pakala'?", options: ["Mistake/Break", "Fix/Good", "New"], ans: 0}]
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
        quiz: [{q: "What is 'pana'?", options: ["Give/Send", "Take", "Have"], ans: 0}]
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
        quiz: [{q: "What is 'misikeke'?", options: ["Medicine", "Food", "Poison"], ans: 0}]
    }
];

const advancedCurriculum = [
    {
        id: "A1", 
        title: "Toki Pona Philosophy", 
        desc: "Deep dive into nasin pona.",
        vocab: [],
        quiz: []
    }
];
