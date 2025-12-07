/**
 * TOKI PONA EDUCATIONAL DATA
 * File: js/data.js
 * * PART 1: UI & FOUNDATIONS (Lessons 1-4 + CP1)
 */

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

// --- LESSON 1: Philosophy & Sounds ---
const LESSON_01 = {
    id: "1",
    type: "lesson",
    title: "Philosophy & Sounds",
    desc: "Introduction to the philosophy of simplicity (nasin) and the phonology (kalama) of Toki Pona.",
    vocab: [
        { word: "jan",  type: "content word", def: "A person, human, somebody.", ex: "mi jan. (I am a person.)" },
        { word: "pona", type: "content word", def: "Positive, fix, make better, good, .", ex: "toki pona. (Simple language / Good language.)" },
        { word: "ike",  type: "content word", def: "Negative, bad, problem.", ex: "ni li ike. (This is complex/bad.)" },
        { word: "toki", type: "content word", def: "Communication, language, to speak.", ex: "toki pona. (Simple language.)" }
    ],
    grammar: `
        <h3>1. The Mindset</h3>
        <p>Toki Pona is a language of simplicity and context. Before you speak, understand these core principles:</p>
        <ul>
            <li><strong>Context is King:</strong> There is rarely a single, absolute translation for any sentence. Meaning is highly context-sensitive.</li>
            <li><strong>Implied Politeness:</strong> You do not need words like "please" and "thank you." Politeness is the default assumption.</li>
            <li><strong>Gratitude:</strong> Instead of empty formulas, express gratitude by telling someone <em>why</em> you are thankful or that they are good.</li>
        </ul>

        <h3>2. Proper Names (Loan Words)</h3>
        <p>Toki Pona has a small vocabulary. When talking about names of specific people or places, we use "Loan Words."</p>
        <ul>
            <li><strong>Capitalization:</strong> Loan words are the only words that are capitalized.</li>
            <li><strong>The Adjective Rule:</strong> Loan words act like content words but cannot occur as the "head" (main word) of a phrase. They must modify a Toki Pona noun.</li>
        </ul>
        <div class="grammar-box">
            <p><strong>Examples:</strong></p>
            <ul>
                <li>❌ <em>Mary li toki.</em> (Incorrect. 'Mary' cannot stand alone).</li>
                <li>✅ <em>jan Mary li toki.</em> ("The Mary-person speaks").</li>
                <li>✅ <em>ma Kanata.</em> ("Canada-land").</li>
            </ul>
        </div>

        <h3>3. Pronunciation</h3>
        <p>While the interpretation is flexible, the sounds are consistent.</p>
        <div class="grammar-box">
            <p><strong>The 5 Vowels:</strong></p>
            <ul>
                <li><strong>a:</strong> "Ah" like <strong>a</strong> in "F<strong>a</strong>ther". (Example: <em>jan</em>).</li>
                <li><strong>e:</strong> "Eh" like <strong>e</strong> in "B<strong>e</strong>d". (Example: <em>ken</em>).</li>
                <li><strong>i:</strong> "Ee" like <strong>ee</strong> in "S<strong>ee</strong>". (Example: <em>li</em>).</li>
                <li><strong>o:</strong> "Oh" like <strong>o</strong> in "M<strong>o</strong>re". (Example: <em>toki</em>).</li>
                <li><strong>u:</strong> "Ooh" like <strong>oo</strong> in "M<strong>oo</strong>n". (Example: <em>moku</em>).</li>
            </ul>
            <hr style="opacity:0.2; margin: 1rem 0;">
            <p><strong>The 9 Consonants:</strong></p>
            <ul>
                <li><strong>j:</strong> Like <strong>y</strong> in "<strong>Y</strong>es". (Example: <em>jan</em> sounds like "yan").</li>
                <li><strong>k:</strong> Like <strong>k</strong> in "S<strong>k</strong>ip". (Example: <em>kalama</em>).</li>
                <li><strong>l:</strong> Like <strong>l</strong> in "<strong>L</strong>ife". (Example: <em>lape</em>).</li>
                <li><strong>m:</strong> Like <strong>m</strong> in "<strong>M</strong>oon". (Example: <em>mute</em>).</li>
                <li><strong>n:</strong> Like <strong>n</strong> in "<strong>N</strong>o". (Example: <em>ni</em>).</li>
                <li><strong>p:</strong> Like <strong>p</strong> in "S<strong>p</strong>in". (Example: <em>pona</em>).</li>
                <li><strong>s:</strong> Like <strong>s</strong> in "<strong>S</strong>un". (Example: <em>sina</em>).</li>
                <li><strong>t:</strong> Like <strong>t</strong> in "S<strong>t</strong>op". (Example: <em>toki</em>).</li>
                <li><strong>w:</strong> Like <strong>w</strong> in "<strong>W</strong>e". (Example: <em>wile</em>).</li>
            </ul>
            <p><strong>Stress:</strong> Always stress the <strong>first</strong> syllable of a word. (e.g., <em><strong>KA</strong>-la-ma</em>).
        </div>
    `,
    story: `
        <p><b>toki!</b> (Hello!)</p>
        <p><b>ni li toki pona.</b> (This is simple language.)</p>
        <p><b>jan Keli li pona.</b> (Kelly is good.)</p>
    `,
    quiz: [
        { type: "mc",      q: "What does <b>'toki pona'</b> mean?", options: ["Simple language", "Good person", "Talking bad"], ans: 0 },
        { type: "mc",      q: "Select the word for <b>'Bad'</b> or <b>'Complex'</b>.", options: ["pona", "ike", "jan"], ans: 1 },
        { type: "mc",      q: "Which sentence is grammatically correct?", options: ["Mary li toki.", "jan Mary li toki.", "jan mary li toki."], ans: 1 },
        { type: "mc",      q: "Which of these is <b>WRONG</b>?", options: ["mi jan.", "mi pona.", "mi li jan."], ans: 2 },
        { type: "builder", q: "Translate: <b>'The person is good.'</b>", correctSentence: "jan li pona", words: ["jan", "li", "pona", "ike", "suli", "mi"] }
    ]
};

// --- LESSON 2: The Foundation of Being ---
const LESSON_02 = {
    id: "2",
    type: "lesson",
    title: "The Foundation of Being",
    desc: "Mastering the basic Subject-Predicate structure and the 'mi/sina' exception.",
    vocab: [
        { word: "li",   type: "syntactical particle", def: "Marks the start of the predicate in a sentence.", ex: "jan li suli. (The person is big.)" },
        { word: "mi",   type: "pronoun", def: "I, me, we, us.", ex: "mi jan. (I am a person.)" },
        { word: "sina", type: "pronoun", def: "You. (singular & plural)", ex: "sina pona. (You are good.)" },
        { word: "suli", type: "content word", def: "Big, heavy, tall, wide, long, important.", ex: "jan li suli. (The person is important/big.)" },
        { word: "lili", type: "content word", def: "Small, short, few, piece, young.", ex: "soweli li lili. (The animal is small.)" }
    ],
    grammar: `
        <h3>1. The Basic Sentence Structure</h3>
        <p>A basic sentence in Toki Pona follows a strict formula: <strong>X li Y</strong>.</p>
        <ul>
             <li><strong>X (Subject):</strong> The "main character" or what the sentence is about.</li>
             <li><strong>li (Particle):</strong> A grammatical word that separates the subject from the predicate. It acts like an equals sign or a highlighter for the verb.</li>
             <li><strong>Y (Predicate):</strong> The action, description, or identity of the subject.</li>
        </ul>
        <p><strong>Example:</strong> <em>soweli li moku.</em> ("The animal eats").</p>

        <h3>2. The "li" Omission Rule</h3>
        <p>The particle <strong>li</strong> is used in almost every sentence to mark the verb, but there is one critical exception you must memorize.</p>
        <p><strong>The Rule:</strong> If the subject is exactly <strong>mi</strong> (I/We) or exactly <strong>sina</strong> (You), you must <strong>omit</strong> the word <em>li</em>.</p>
        <div class="grammar-box">
            <p><strong>Compare these examples:</strong></p>
            <ul>
                 <li>✅ <strong>mi moku.</strong> (I eat. No 'li').</li>
                 <li>✅ <strong>sina pona.</strong> (You are good. No 'li').</li>
                 <li>❌ <strong>mi li moku.</strong> (Incorrect. Never use 'li' with 'mi').</li>
                 <li>✅ <strong>jan li moku.</strong> (The person eats. 'jan' is not 'mi' or 'sina', so 'li' is required).</li>
            </ul>
        </div>

        <h3>3. "To Be" and Plurals</h3>
        <p>Toki Pona relies on context for plurality and states of being.</p>
        <ul>
            <li><strong>No "To Be":</strong> There are no words for "am," "is," or "are."  To say "I am good," you simply say "I good" (<em>mi pona</em>).</li>
            <li><strong>Plurals:</strong> Pronouns cover both singular and plural entities. <strong>mi</strong> means "I" or "We."  <strong>sina</strong> means "You" or "Y'all".</li>
        </ul>
    `,
    story: `
        <p><b>mi jan. sina jan. mi suli. sina lili. jan li toki. toki li pona. jan li ike. jan li suli.</b></p>
        <p>I'm a person. You are a person. I am old, you are young. People speak. The language is good. people are bad. People are big</p>
    `,
    quiz: [
        { type: "builder", q: "Build: <b>'I am a person.'</b>", correctSentence: "mi jan", words: ["mi", "jan", "li", "suli", "sina"] },
        { type: "builder", q: "Build: <b>'You are good.'</b>", correctSentence: "sina pona", words: ["sina", "pona", "li", "mi", "jan"] },
        { type: "builder", q: "Build: <b>'The person is big.'</b>", correctSentence: "jan li suli", words: ["jan", "li", "suli", "mi", "pona", "sina"] },
        { type: "mc",      q: "Translate: <b>'mi suli'</b>", options: ["I am big/important", "You are big", "The person is big"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'sina lili'</b>", options: ["I am small", "You are small", "They are small"], ans: 1 },
        { type: "mc",      q: "Translate: <b>'jan li pona'</b>", options: ["I am good", "You are good", "The person is good"], ans: 2 },
        { type: "mc",      q: "Translate: <b>'I am good.'</b>", options: ["mi pona", "mi li pona", "jan mi pona"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'The person is small.'</b>", options: ["jan lili", "jan li lili", "lili li jan"], ans: 1 },
        { type: "mc",      q: "Translate: <b>'You are big.'</b>", options: ["sina li suli", "sina suli", "mi suli"], ans: 1 },
        { type: "mc",      q: "Which sentence is <b>INCORRECT</b>?", options: ["mi suli.", "jan li suli.", "mi li suli."], ans: 2 },
        { type: "mc",      q: "Which sentence is <b>INCORRECT</b>?", options: ["sina pona.", "sina li pona.", "jan li pona."], ans: 1 },
        { type: "mc",      q: "When do you use <b>'li'</b>?", options: ["Always", "Only with 'mi'", "When the subject is NOT 'mi' or 'sina'"], ans: 2 },
        { type: "mc",      q: "What is the opposite of <b>'suli'</b>?", options: ["pona", "lili", "ike"], ans: 1 },
        { type: "builder", q: "Build: <b>'The thing is bad.'</b> (ijo = thing)", correctSentence: "ijo li ike", words: ["ijo", "li", "ike", "suli", "mi"] },
        { type: "mc",      q: "True or False: <b>'mi'</b> can mean 'We'.", options: ["True", "False"], ans: 0 }
    ]
};

// --- LESSON 3: Objects & Causation ---
const LESSON_03 = {
    id: "3",
    type: "lesson",
    title: "Objects & Causation",
    desc: "Using 'e' for objects and understanding causative verbs.",
    vocab: [
        { word: "e",      type: "syntactical particle", def: "Marks the start of a direct object.", ex: "mi moku e kili. (I eat fruit.)" },
        { word: "moku",   type: "content word", def: "To consume (food or liquid), food.", ex: "soweli li moku. (The animal eats.)" },
        { word: "kili",   type: "content word", def: "Edible parts of plants, fruit, vegetables.", ex: "kili li suwi. (Fruit is sweet.)" },
        { word: "lukin",  type: "content word/preverb", def: "See, look, watch, read, or eyes.", ex: "mi lukin e sina. (I see you.)" },
        { word: "pali",   type: "content word", def: "To do, work, make, product, task, work, labor.", ex: "mi pali e tomo. (I build a house.)" },
        { word: "soweli", type: "content word", def: "warm blooded land mammal, beast.", ex: "soweli li moku. (The animal eats.)" }
    ],
    grammar: `
        <h3>1. The Object Marker "e"</h3>
        <p>To talk about the thing receiving an action (the direct object), we add a new section to our formula:</p>
        <p class="text-xl text-center"><strong>X li Y + [e Z]</strong></p>
        <ul>
            <li><strong>Z (Direct Object):</strong> The thing receiving the action or the stimulus being experienced.</li>
            <li><strong>e:</strong> The particle that alerts the listener "Here comes the object!" It marks the object or stimulus.</li>
        </ul>
        <div class="grammar-box" style="border-left-color:var(--success)">
            <p><strong>Example:</strong> <em>soweli li moku e kili.</em></p>
            <ul>
                <li><strong>soweli:</strong> The animal (Subject)</li>
                <li><strong>moku:</strong> Eats (Predicate)</li>
                <li><strong>kili:</strong> Fruit (Direct Object, marked by 'e').</li>
            </ul>
        </div>
    `,
    story: `
        <p><b>mi lukin e soweli. soweli li suli. soweli li moku e kili. sina lukin e kili. sina pali. sina moku e kili. moku li pona.</b></p>
        <p>I see the animal. The animal is big. The animal eats fruit. You see the fruit. You work. You eat the fruit. Eating is good.</p>
    `,
    quiz: [
        { type: "builder", q: "Build: <b>'I eat fruit.'</b>", correctSentence: "mi moku e kili", words: ["mi", "kili", "e", "moku", "li", "soweli"] },
        { type: "builder", q: "Build: <b>'The animal sees me.'</b>", correctSentence: "soweli li lukin e mi", words: ["soweli", "mi", "lukin", "e", "li", "pona"] },
        { type: "builder", q: "Build: <b>'You make a house.'</b>", correctSentence: "sina pali e tomo", words: ["sina", "pali", "e", "tomo", "li", "lukin"] },
        { type: "mc",      q: "What does <b>'soweli'</b> mean?", options: ["Plant", "Animal/Beast", "Person"], ans: 1 },
        { type: "mc",      q: "What is <b>'kili'</b>?", options: ["Fruit/Vegetable", "Meat", "Water"], ans: 0 },
        { type: "mc",      q: "Which word means <b>'To work/make'</b>?", options: ["pali", "moku", "lukin"], ans: 0 },
        { type: "mc",      q: "What does the particle <b>'e'</b> do?", options: ["Marks the subject", "Marks the verb", "Marks the direct object"], ans: 2 },
        { type: "mc",      q: "Which sentence implies <b>'I am food'</b>?", options: ["mi moku.", "mi moku e ijo.", "mi li moku."], ans: 0 },
        { type: "mc",      q: "Which sentence implies <b>'I eat the person'</b>?", options: ["mi moku jan.", "mi moku e jan.", "jan li moku e mi."], ans: 1 },
        { type: "mc",      q: "Translate: <b>'mi pona e tomo'</b>.", options: ["The house is good.", "I like the house.", "I fix (make good) the house."], ans: 2 },
        { type: "mc",      q: "How do you say: <b>'I make the item small (shrink it).'</b>", options: ["mi lili e ijo.", "mi ijo lili.", "mi lili ijo."], ans: 0 },
        { type: "builder", q: "Build: <b>'I fix the tool.'</b>", correctSentence: "mi pona e ilo", words: ["mi", "pona", "e", "ilo", "li", "ike"] },
        { type: "mc",      q: "Which is <b>INCORRECT</b>?", options: ["mi lukin e sina.", "ona li pali e tomo.", "mi moku kili."], ans: 2 },
        { type: "mc",      q: "Which is <b>INCORRECT</b>?", options: ["soweli li moku.", "soweli moku e kili.", "soweli li moku e kili."], ans: 1 },
        { type: "builder", q: "Build: <b>'The person sees the fruit.'</b>", correctSentence: "jan li lukin e kili", words: ["jan", "li", "lukin", "e", "kili", "soweli"] }
    ]
};

// --- LESSON 4: Describing Things ---
const LESSON_04 = {
    id: "4",
    type: "lesson",
    title: "Describing Things",
    desc: "Adding specificity through modifiers and the particle 'pi'.",
    vocab: [
        { word: "pi",   type: "syntactical particle", def: "Groups following words into one modifer for previous word.", ex: "poki pi telo wawa. (Container of strong water.)" },
        { word: "loje", type: "content word", def: "Reddish pigment.", ex: "kili loje. (Red fruit.)" },
        { word: "tomo", type: "content word", def: "Indoor space, dwelling.", ex: "tomo mi. (My house.)" },
        { word: "ilo",  type: "content word", def: "Tool, device, machine.", ex: "ilo moku. (Eating tool / Fork.)" },
        { word: "wawa", type: "content word", def: "Confidence, power, energy, intense.", ex: "telo wawa. (Coffee.)" }
    ],
    grammar: `
        <h3>1. Phrases and Modifiers</h3>
        <p>To be specific, we build phrases. A phrase consists of a <strong>head</strong> (the main word) followed by <strong>modifiers</strong>.</p>
        <p><strong>The Golden Rule:</strong> Modifiers always follow the head.</p>
        <div class="grammar-box">
            <ul>
                 <li><strong>tomo waso</strong> = "House of bird" -> A birdhouse (Head is 'house').</li>
                 <li><strong>waso tomo</strong> = "Bird of house" -> A housebird/pet (Head is 'bird').</li>
                 <li><strong>soweli suli pimeja</strong> = An animal that is big AND dark.</li>
            </ul>
        </div>

        <h3>2. The Particle "pi"</h3>
        <p>What if you want to modify a noun with a <em>phrase</em> rather than just a single word? We use <strong>pi</strong> to regroup the modifiers.</p>
        <p>Compare these two examples:</p>
        <ul>
            <li><strong>poki telo wawa</strong> = (poki telo) + wawa. A "water-container" that is strong. -> <em>A durable water bottle</em>.</li>
            <li><strong>poki pi telo wawa</strong> = poki + (telo wawa). A container of "strong water". -> <em>A cup of coffee</em>.</li>
        </ul>
        
        <h3>3. The "pi" Trap</h3>
        <p><strong>⚠️ Crucial Rule:</strong> <em>pi</em> is used to mark the head of a phrase acting as a modifier. It is <strong>never</strong> used for single-word modifiers.</p>
        <ul>
            <li>✅ <strong>jan pona</strong> (Good person).</li>
            <li>❌ <strong>jan pi pona</strong> (Incorrect. Do not use 'pi' here).</li>
        </ul>
    `,
    story: `
        <p><b>mi lukin e tomo. tomo li loje. tomo li suli. soweli wawa li lon. sina pali e ilo. ilo li ilo pi pali tomo. sina moku e kili. kili li kili pi tomo loje.</b></p>
        <p>I see a house. The house is red. The house is big. The strong animal is there. You work with a tool. The tool is a tool for working on houses. You eat fruit. The fruit is fruit from the red house.</p>
    `,
    quiz: [
        { type: "builder", q: "Build: <b>'Red house.'</b>", correctSentence: "tomo loje", words: ["tomo", "loje", "pi", "li", "e"] },
        { type: "builder", q: "Build: <b>'Strong animal.'</b>", correctSentence: "soweli wawa", words: ["soweli", "wawa", "pi", "li", "jan"] },
        { type: "mc",      q: "Translate: <b>'jan pona'</b>", options: ["Good person (Friend)", "Person of good", "Fix person"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'ilo moku'</b>", options: ["Food tool (Fork/Spoon)", "Eating a tool", "Tool food"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'tomo jan'</b>", options: ["Somebody's house", "Human house", "House person"], ans: 1 },
        { type: "mc",      q: "Translate: <b>'telo wawa'</b>", options: ["Strong water (Coffee/Alcohol)", "Water power", "Water is strong"], ans: 0 },
        { type: "mc",      q: "When do you use <b>'pi'</b>?", options: ["To make plurals", "When the modifier is a group of words", "To mark the object"], ans: 1 },
        { type: "mc",      q: "Translate: <b>'poki pi telo wawa'</b>", options: ["Strong bottle of water", "Bottle of [strong water]", "Water bottle is strong"], ans: 1 },
        { type: "mc",      q: "Translate: <b>'ilo pi moku lili'</b>", options: ["Tool for [small eating] (Snack fork)", "Small eating tool", "Small tool for eating"], ans: 0 },
        { type: "mc",      q: "Which is <b>WRONG</b>? (Red fruit)", options: ["kili loje", "kili pi loje"], ans: 1 },
        { type: "mc",      q: "Which is <b>WRONG</b>? (My house)", options: ["tomo mi", "tomo pi mi"], ans: 1 },
        { type: "mc",      q: "Select the correct structure for: <b>'House of the good person'</b>", options: ["tomo jan pona", "tomo pi jan pona"], ans: 1 },
        { type: "builder", q: "Build: <b>'I have a strong tool.'</b>", correctSentence: "mi jo e ilo wawa", words: ["mi", "jo", "e", "ilo", "wawa", "pi", "li"] },
        { type: "builder", q: "Build: <b>'Container of red water.'</b>", correctSentence: "poki pi telo loje", words: ["poki", "pi", "telo", "loje", "li", "e"] },
        { type: "mc",      q: "Translate: <b>'jan pi sona suli'</b>", options: ["Big knowledgeable person", "Person of [big knowledge] (Expert)", "Person knows big"], ans: 1 }
    ]
};

// --- CHECKPOINT 1 ---
const CHECKPOINT_01 = {
    id: "c1",
    type: "test",
    title: "Checkpoint 1: Foundations",
    desc: "Test your mastery of Lessons 1 through 4 (Basics, Objects, & Description).",
    grammar: `<h3>Review: The Core Formula</h3><p>Remember: <strong>Subject + li + Verb + e + Object</strong>.</p><p>Exception: No <em>li</em> when subject is <em>mi</em> or <em>sina</em>.</p>`,
    quiz: [
        { type: "mc",      q: "Translate: <b>'mi moku'</b>", options: ["I eat", "I am food", "I am a person"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'jan li moku'</b>", options: ["The person eats", "I eat", "The person is food"], ans: 0 },
        { type: "mc",      q: "Which sentence is correct?", options: ["mi li suli", "mi suli", "jan suli"], ans: 1 },
        { type: "mc",      q: "Which sentence is correct?", options: ["sina li pona", "sina pona", "jan pona li"], ans: 1 },
        { type: "builder", q: "Build: <b>'The person is big.'</b>", correctSentence: "jan li suli", words: ["jan", "li", "suli", "mi", "sina"] },
        { type: "builder", q: "Build: <b>'I am good.'</b>", correctSentence: "mi pona", words: ["mi", "pona", "li", "jan", "suli"] },
        { type: "mc",      q: "What does <b>'e'</b> mark?", options: ["The subject", "The verb", "The direct object"], ans: 2 },
        { type: "mc",      q: "Translate: <b>'mi lukin e sina'</b>", options: ["I look like you", "I see you", "You see me"], ans: 1 },
        { type: "mc",      q: "Translate: <b>'soweli li moku e kili'</b>", options: ["The animal eats fruit", "The animal is fruit", "Fruit eats the animal"], ans: 0 },
        { type: "builder", q: "Build: <b>'I eat fruit.'</b>", correctSentence: "mi moku e kili", words: ["mi", "moku", "e", "kili", "li", "soweli"] },
        { type: "builder", q: "Build: <b>'You see the house.'</b>", correctSentence: "sina lukin e tomo", words: ["sina", "lukin", "e", "tomo", "li", "pona"] },
        { type: "mc",      q: "Translate: <b>'tomo loje'</b>", options: ["Red house", "House red", "Blood house"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'jan pona'</b>", options: ["Good person (Friend)", "Fix person", "Person of good"], ans: 0 },
        { type: "mc",      q: "What is <b>'ilo moku'</b>?", options: ["Food tool (Fork/Spoon)", "Eating machine", "Tool food"], ans: 0 },
        { type: "builder", q: "Build: <b>'Big animal.'</b>", correctSentence: "soweli suli", words: ["soweli", "suli", "li", "e", "mi"] },
        { type: "mc",      q: "When do you use <b>'pi'</b>?", options: ["Always", "When a modifier has its own modifiers", "For plural nouns"], ans: 1 },
        { type: "mc",      q: "Translate: <b>'telo wawa'</b> (No pi)", options: ["Strong water (Coffee/Alcohol)", "Water power", "Water of strength"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'poki pi telo wawa'</b> (With pi)", options: ["Cup of strong water", "Strong cup of water", "Water cup is strong"], ans: 0 },
        { type: "mc",      q: "Which is <b>WRONG</b>?", options: ["jan pi pona", "jan pona", "jan pi pona lukin"], ans: 0 },
        { type: "builder", q: "Build: <b>'Container of red water.'</b>", correctSentence: "poki pi telo loje", words: ["poki", "pi", "telo", "loje", "li", "e"] },
        { type: "mc",      q: "What is <b>'ike'</b>?", options: ["Bad / Complex / Evil", "Good / Simple", "Big"], ans: 0 },
        { type: "mc",      q: "What is <b>'lili'</b>?", options: ["Small / Few", "Big / Many", "Long"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'The animal is bad.'</b>", options: ["soweli li ike", "soweli ike", "soweli pi ike"], ans: 0 },
        { type: "builder", q: "Build: <b>'I fix (make good) the house.'</b>", correctSentence: "mi pona e tomo", words: ["mi", "pona", "e", "tomo", "li", "pi"] },
        { type: "mc",      q: "Translate: <b>'jan suli'</b>", options: ["Adult / Big person", "Child", "Fat person"], ans: 0 },
        { type: "mc",      q: "Which implies <b>'I go to the house'</b>?", options: ["mi tawa tomo", "mi tawa e tomo", "mi tomo tawa"], ans: 0 },
        { type: "builder", q: "Build: <b>'Small good fruit.'</b>", correctSentence: "kili lili pona", words: ["kili", "lili", "pona", "pi", "li"] },
        { type: "mc",      q: "Translate: <b>'ilo'</b>", options: ["Tool / Device", "Thing", "Food"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'kili'</b>", options: ["Fruit / Vegetable", "Meat", "Animal"], ans: 0 },
        { type: "builder", q: "Build: <b>'The person sees the big animal.'</b>", correctSentence: "jan li lukin e soweli suli", words: ["jan", "li", "lukin", "e", "soweli", "suli", "pi"] }
    ]
};

    // --- LESSON 5: Prepositions & Negation ---
const LESSON_05 = {
    id: "5",
    type: "lesson",
    title: "Prepositions & Negation",
    desc: "Understanding prepositions, and the 'Causative' trap.",
    vocab: [
        { word: "ala",     type: "content word/particle", def: "No, nothing, erase, delete, negate, zero.", ex: "mi moku ala. (I am not eating.)" },
        { word: "lape",    type: "content word", def: "Sleep, rest, a state of dormancy.", ex: "o lape. (Go to sleep.)" },
        { word: "sama",   type: "content word/preposition", def: "Same, similar, peer, similar to, same as.", ex: "ona li sama mi. (She is like me.)" },
        { word: "tawa",    type: "content word/preposition", def: "motion, to, for, marks recipient", ex: "mi tawa tomo. (I go to the house.)" },
        { word: "lon",     type: "content word/preposition", def: "exist, real, true, physical, marks context (location or time)", ex: "mi lon ma. (I am on the land.)" },
        { word: "en",      type: "syntactical particle", def: "connects multiple subjects", ex: "mi en sina. (Me and you.)" },
        { word: "kepeken", type: "content word/preposition", def: "Using, by means of, To use.", ex: "mi kepeken ilo. (I use a tool.)" }
    ],
    grammar: `
        <h3>1. Prepositions (Location & Direction)</h3>
        <p>Prepositions describe relationships (location, direction, origin). In Toki Pona, they mark indirect objects and do <strong>not</strong> use the particle <em>e</em>.</p>
        <div class="grammar-box">
            <ul>
                <li><strong>lon (In/At/On):</strong> <br><em>mi lon tomo.</em> ("I am in the house").</li>
                <li><strong>tawa (To/Towards):</strong> <br><em>mi tawa tomo.</em> ("I go to the house").</li>
                <li><strong>kepeken (With/Using):</strong> <br><em>mi kepeken ilo.</em> ("I use tools").</li>
                <li><strong>sama (Like/Similar):</strong> <br><em>mi sama sina.</em> ("I am like you").</li>
                <li><strong>tan (From/Because of):</strong> <br><em>mi tan ma.</em> ("I am from the land").</li>
            </ul>
        </div>
        <ul>
             <li><strong>As the main verb:</strong> <em>mi lon tomo.</em> ("I am in the house").</li>
            <li><strong>Modifying the action:</strong> <em>mi moku lon tomo.</em> ("I eat in the house").</li>
        </ul>

        <h3>2. The "Causative" Trap (tawa vs tawa e)</h3>
        <p>Using <em>e</em> changes the meaning completely. If you add <em>e</em>, you are "causing" the action to happen to the object.</p>
        <div class="grammar-box">
            <ul>
                 <li>✅ <strong>mi tawa tomo.</strong> ("I go to the house." Intransitive motion).</li>
                 <li>⚠️ <strong>mi tawa e tomo.</strong> ("I move the house." Causative: I cause the house to move).</li>
            </ul>
        </div>

        <h3>3. The "Kepeken" Rule</h3>
        <p><em>kepeken</em> means "using." The object of <em>kepeken</em> is the tool being used. Standard grammar dictates that you do <strong>not</strong> use <em>e</em> here.</p>
        <ul>
             <li>✅ <strong>mi kepeken ilo.</strong> ("I use tools").</li>
             <li>❌ <strong>mi kepeken e ilo.</strong> (Non-standard usage).</li>
        </ul>

        <h3>4. Negation (ala)</h3>
        <p>To say "not" or "no," simply place <strong>ala</strong> after the word you are negating.</p>
        <ul>
             <li><strong>mi pali ala.</strong> ("I will not work").</li>
             <li><strong>jan ala li lon.</strong> ("No person is here" / Nobody is here).</li>
             <li><strong>mi lon ala tomo.</strong> ("I am not in the house").</li>
        </ul>
    `,
    story: `
        <p><b>mi li tawa tomo. soweli li lon ala. sina lape lon tomo. mi lape ala. mi pali kepeken ilo. mi sama ala sina.</b></p>
        <p>I'm going to the house. The animal is not there. You are sleeping in the house. I am not sleeping. I work using a tool. I am not the same as you.</p>
    `,
    quiz: [
        { type: "builder", q: "Build: <b>'I am not sleeping.'</b>", correctSentence: "mi lape ala", words: ["mi", "lape", "ala", "li", "e", "tawa"] },
        { type: "builder", q: "Build: <b>'I go to the house.'</b>", correctSentence: "mi tawa tomo", words: ["mi", "tawa", "tomo", "e", "li", "lon"] },
        { type: "builder", q: "Build: <b>'Me and you.'</b>", correctSentence: "mi en sina", words: ["mi", "en", "sina", "li", "e", "tawa"] },
        { type: "mc",      q: "Translate: <b>'mi tawa tomo'</b>", options: ["I move the house", "I go to the house", "I like the house"], ans: 1 },
        { type: "mc",      q: "Translate: <b>'mi tawa e tomo'</b> (Note the 'e')", options: ["I go to the house", "I move the house", "The house moves"], ans: 1 },
        { type: "mc",      q: "How do you say: <b>'I use a tool.'</b>", options: ["mi kepeken e ilo", "mi kepeken ilo", "mi ilo kepeken"], ans: 1 },
        { type: "mc",      q: "What does <b>'ala'</b> mean?", options: ["All/Everything", "No/Not/Zero", "Person"], ans: 1 },
        { type: "mc",      q: "Translate: <b>'jan ala'</b>", options: ["Nobody (Person-None)", "Bad person", "Dead person"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'suno li lon'</b>", options: ["The sun is here (exists)", "The sun is hot", "I see the sun"], ans: 0 },
        { type: "mc",      q: "Which is <b>INCORRECT</b>?", options: ["mi kepeken ilo.", "mi kepeken e ilo.", "mi moku kepeken ilo."], ans: 1 },
        { type: "mc",      q: "Which is <b>INCORRECT</b>? (Joining subjects)", options: ["mi en sina", "jan en soweli", "moku en lape"], ans: 2 },
        { type: "mc",      q: "Which is <b>INCORRECT</b>? (Negation)", options: ["mi lape ala.", "mi ala lape.", "ona li moku ala."], ans: 1 },
        { type: "builder", q: "Build: <b>'I eat using a tool.'</b>", correctSentence: "mi moku kepeken ilo", words: ["mi", "moku", "kepeken", "ilo", "e", "li"] },
        { type: "builder", q: "Build: <b>'The animal is on the land.'</b>", correctSentence: "soweli li lon ma", words: ["soweli", "li", "lon", "ma", "tawa", "e"] },
        { type: "mc",      q: "Translate: <b>'mi en sina li lape'</b>", options: ["Me and you sleep", "I sleep with you", "We are sleeping"], ans: 0 }
    ]
};

// --- LESSON 6: Context & Complex Thoughts ---
const LESSON_06 = {
    id: "6",
    type: "lesson",
    title: "Context & Complex Thoughts",
    desc: "Using 'la' for context and splitting complex sentences.",
    vocab: [
        { word: "la",    type: "syntactical particle", def: "marks the previous information as context for the next statement.", ex: "tenpo ni la mi lape. (Now, I sleep.)" },
        { word: "tenpo", type: "content word", def: "Time, event, moment, duration.", ex: "tenpo suno. (Sun-time / Day.)" },
        { word: "ni",    type: "pronoun", def: "This, that, these, those", ex: "jan ni. (That person.)" },
        { word: "sona",  type: "content word/preverb", def: "knowledge, data, to know, to know how to.", ex: "mi sona e ni. (I know this.)" },
        { word: "wile",  type: "content word/preverb", def: "want, wish, desire, to want to, must, should", ex: "mi wile moku. (I want to eat.)" }
    ],
    grammar: `
        <h3>1. The Context Formula (la)</h3>
        <p>The particle <strong>la</strong> allows you to establish context <em>before</em> stating the main sentence. The formula is: <strong>[ Context ] la [ Main Sentence ]</strong>.</p>
        <p>This single particle covers three major English concepts:</p>
        <ul>
             <li><strong>Time (When):</strong> <em>tenpo ni la mi lape.</em> ("At this time, I sleep" OR "Now, I sleep").</li>
             <li><strong>Condition (If):</strong> <em>mi jo e mani la mi esun e kili.</em> ("If I have money, I buy fruit").</li>
             <li><strong>Perspective (As for...):</strong> <em>mi la ni li pona.</em> ("In my context, this is good" OR "In my opinion, this is good").</li>
        </ul>

        <h3>2. "Relative Clauses" (Splitting Sentences)</h3>
        <p>In English, we embed sentences inside others (e.g., "The man <em>who walks</em> is good"). <strong>Toki Pona does not allow this</strong>.</p>
        <p>Instead, you must split the thought into two separate sentences. We often use the word <strong>ni</strong> (this/that) to bridge them together.</p>
        
        <div class="grammar-box">
            <p><strong>Example:</strong> "The dog that sleeps is cute."</p>
            <ul>
                <li>❌ <strong>soweli pi lape li suwi.</strong> (Incorrect grammar).</li>
                <li>✅ <strong>Step 1:</strong> <em>soweli li lape.</em> ("The dog sleeps").</li>
                <li>✅ <strong>Step 2:</strong> <em>soweli ni li suwi.</em> ("That dog is cute").</li>
            </ul>
        </div>
    `,
    story: `
        <p><b>tenpo ni la sina lape. sina sona ala e ni: soweli li kama. soweli ni li wile moku. mi wile tawa weka. mi wile e ilo wawa. soweli la mi lili.</b></p>
        <p>you are sleeping right now. you dont know that the animal is coming. The animal is hungry. I want to escape. I want a tool of power. I am small compared to the animal.</p>
    `,
    quiz: [
        { type: "builder", q: "Build: <b>'If you want, I go.'</b>", correctSentence: "sina wile la mi tawa", words: ["sina", "wile", "la", "mi", "tawa", "li", "e"] },
        { type: "builder", q: "Build: <b>'Now (At this time), I sleep.'</b>", correctSentence: "tenpo ni la mi lape", words: ["tenpo", "ni", "la", "mi", "lape", "li"] },
        { type: "builder", q: "Build: <b>'To me (In my context), this is good.'</b>", correctSentence: "mi la ni li pona", words: ["mi", "la", "ni", "li", "pona", "e"] },
        { type: "mc",      q: "Translate: <b>'tenpo ni'</b>", options: ["Time is this", "Now (This time)", "Past time"], ans: 1 },
        { type: "mc",      q: "Translate: <b>'mi la sina suli'</b>", options: ["I am big like you", "In my opinion, you are big", "You and I are big"], ans: 1 },
        { type: "mc",      q: "Translate: <b>'mi sona e ni'</b>", options: ["I know this", "I know the person", "This person knows"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'If I sleep...'</b> (Context)", options: ["mi lape la...", "la mi lape...", "mi lape..."], ans: 0 },
        { type: "mc",      q: "Translate: <b>'That person'</b>", options: ["jan ni", "ni jan", "jan pi ni"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'I want food.'</b>", options: ["mi wile e moku", "mi wile moku", "mi moku wile"], ans: 0 },
        { type: "mc",      q: "How do you say <b>'The person who sleeps is good'</b>?", options: ["jan lape li pona", "jan ni li lape: ona li pona", "jan pi lape li pona"], ans: 1 },
        { type: "mc",      q: "What does <b>'ona'</b> refer to in: 'jan ni li suli. ona li lape.'", options: ["Me", "That person (jan ni)", "You"], ans: 1 },
        { type: "builder", q: "Build: <b>'This person is good.'</b>", correctSentence: "jan ni li pona", words: ["jan", "ni", "li", "pona", "la", "mi"] },
        { type: "mc",      q: "What is <b>'sona'</b>?", options: ["To eat", "To know/wisdom", "To want"], ans: 1 },
        { type: "mc",      q: "What is <b>'wile'</b>?", options: ["To want/need", "To go", "To do"], ans: 0 },
        { type: "mc",      q: "What does <b>'la'</b> separate?", options: ["Subject and Verb", "Verb and Object", "Context and Main Sentence"], ans: 2 }
    ]
};

// --- LESSON 7: Numbers & Ordinals ---
const LESSON_07 = {
    id: "7",
    type: "lesson",
    title: "Numbers & Ordinals",
    desc: "Mastering the number system and order.",
    vocab: [
        { word: "nanpa", type: "content word/particle", def: "Number, count, measure, ordinal marker.", ex: "jan nanpa wan. (First person.)" },
        { word: "wan",   type: "content word", def: "One, singular, combine, mix, join", ex: "jan wan. (One person.)" },
        { word: "tu",    type: "content word", def: "Two, separate, split, divide", ex: "jan tu. (Two people.)" },
        { word: "luka",  type: "content word", def: "Five, hand, arm, to use hand to do something", ex: "jan luka. (Five people.)" },
        { word: "mute",  type: "content word", def: "Many, several, very, twenty.", ex: "jan mute. (Twenty people / Many people.)" },
        { word: "ale",   type: "content word/particle", def: "All, every, universe, everything, one hundred.", ex: "jan ale. (100 people.)" }
    ],
    grammar: `
        <h3>1. The Basics (0-99)</h3>
        <p>For small numbers, Toki Pona uses a simple additive system. You simply sum the words to equal the value.</p>
        <ul>
            <li><strong>ale:</strong> 100</li>
             <li><strong>mute:</strong> 20</li>
             <li><strong>luka:</strong> 5</li>
             <li><strong>tu:</strong> 2</li>
             <li><strong>wan:</strong> 1</li>
        </ul>
        <div class="grammar-box">
            <p><strong>Example: 36</strong></p>
             <p><em>mute luka luka luka wan</em> (20 + 5 + 5 + 5 + 1).</p>
        </div>

        <h3>2. Big Numbers (100+)</h3>
        <p>For numbers larger than 100, we use the <strong>nasin nanpa pona</strong> system. This treats <strong>ale</strong> as a multiplier (x100).</p>
        <ul>
             <li><strong>Multiplication:</strong> Any number before <em>ale</em> multiplies it.</li>
             <li><strong>Explicit One:</strong> Unlike small numbers, you must say <em>wan</em> before <em>ale</em> if the multiplier is 1 (e.g., <em>wan ale</em> = 100).</li>
             <li><strong>Groups:</strong> Split large numbers into groups of two digits (Base 100).</li>
        </ul>
        <div class="grammar-box">
            <ul>
                 <li><strong>300:</strong> <em>tu wan ale</em> (3 x 100).</li>
                 <li><strong>1,000:</strong> <em>luka luka ale</em> (10 x 100).</li>
                 <li><strong>12,345:</strong> <em>wan ale ale (10,000) mute ale (2,000) tu wan ale (300) mute mute luka (45)</em>.</li>
            </ul>
        </div>

        <h3>3. Decimals</h3>
        <p>To create decimals, use the word <strong>ala</strong> (zero/nothing) as the decimal point.</p>
        <ul>
             <li><strong>0.01:</strong> <em>ala wan</em> (Point + 1).</li>
             <li><strong>1.91:</strong> <em>wan ala [91]</em> (1 + Point + 91).</li>
        </ul>
        
        <h3>4. Ordinals (nanpa)</h3>
        <p>To make an ordinal (First, Second, Third), attach <strong>nanpa</strong> and a number to the noun.</p>
        <ul>
            <li><strong>jan nanpa wan:</strong> The first person.</li>
        </ul>
    `,
    story: `
        <p><b>tenpo ni la soweli mute li kama. soweli tu li suli. soweli nanpa wan li wile moku e sina. soweli nanpa tu li wile moku e mi. mi kepeken ilo luka. ilo nanpa wan li wawa. tenpo lili la soweli ale li tawa.</b></p>
        <p>Currenly many animals are coming. Two animals are big. The first animal wants to eat you. The second animal wants to eat me. I am using hand tools. The first still is strong. In a short time the animals will leave</p>
    `,
    quiz: [
        { type: "builder", q: "Build: <b>'Two people'</b>", correctSentence: "jan tu", words: ["jan", "tu", "wan", "nanpa", "li"] },
        { type: "builder", q: "Build: <b>'Five things'</b>", correctSentence: "ijo luka", words: ["ijo", "luka", "tu", "mute", "e"] },
        { type: "mc",      q: "What number is <b>'tu wan'</b>?", options: ["1", "3 (2+1)", "21"], ans: 1 },
        { type: "mc",      q: "What number is <b>'luka luka tu'</b>?", options: ["7", "12 (5+5+2)", "552"], ans: 1 },
        { type: "mc",      q: "What is <b>'mute'</b> as a specific number?", options: ["10", "20", "100"], ans: 1 },
        { type: "builder", q: "Build: <b>'26' (20 + 5 + 1)</b>", correctSentence: "mute luka wan", words: ["mute", "luka", "wan", "tu", "ale"] },
        { type: "mc",      q: "Translate: <b>'jan nanpa wan'</b>", options: ["One person", "The first person", "Person number one"], ans: 1 },
        { type: "mc",      q: "Translate: <b>'ilo nanpa tu'</b>", options: ["Two tools", "The second tool", "Tool number two"], ans: 1 },
        { type: "builder", q: "Build: <b>'The first book (Book number one).'</b>", correctSentence: "lipu nanpa wan", words: ["lipu", "nanpa", "wan", "tu", "li"] },
        { type: "mc",      q: "What is <b>'ale'</b>?", options: ["100 / All / Everything", "Zero", "Infinity"], ans: 0 },
        { type: "mc",      q: "How do you say <b>'Many people'</b>?", options: ["jan mute", "jan ale", "jan pi mute"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'mi nanpa tu.'</b>", options: ["I have two.", "I am the second.", "I am two."], ans: 1 },
        { type: "mc",      q: "Which is <b>WRONG</b> for 'Three people'?", options: ["jan tu wan", "jan wan tu", "jan nanpa tu wan"], ans: 2 },
        { type: "mc",      q: "Which implies <b>'The second person'</b>?", options: ["jan tu", "jan nanpa tu"], ans: 1 },
        { type: "builder", q: "Build: <b>'All things'</b>", correctSentence: "ijo ale", words: ["ijo", "ale", "mute", "nanpa", "li"] }
    ]
};

// --- LESSON 8: Questions & Preverbs ---
const LESSON_08 = {
    id: "8",
    type: "lesson",
    title: "Questions & Preverbs",
    desc: "Mastering the art of asking questions and using preverbs to modify actions.",
    vocab: [
        { word: "seme",  type: "syntactical particle", def: "What, who, which.", ex: "ni li seme? (What is this?)" },
        { word: "kama",  type: "content word/preverb", def: "to arrive, come, future, become, manage to", ex: "mi kama sona. (I learn / start to know.)" },
        { word: "ken",   type: "content word/preverb", def: "ability, permission, possibility, maybe, to allow, to enable, to be able to", ex: "mi ken toki. (I can speak.)" },
        { word: "wile",  type: "content word/preverb", def: "to want, to wish, desire, to want to, must, should", ex: "mi wile moku. (I want to eat.)" },
        { word: "sona",  type: "content word/preverb", def: "knowledge, data, to know, to know how to.", ex: "mi sona e ni. (I know this.)" },
        { word: "awen",  type: "content word/preverb", def: "to stay, remain, wait, pause, protect, continue, continue to", ex: "o awen pali. (Keep working.)" },
        { word: "alasa", type: "content word/preverb", def: "hunt, search, attempt, try to", ex: "mi alasa pini. (I try to finish.)" }
    ],
    grammar: `
        <h3>1. Forming Questions</h3>
         <p>Toki Pona offers three distinct methods to ask questions, depending on the type of answer you need.</p>
        
        <h4>A. The "X ala X" Method (Yes/No)</h4>
         <p>To ask a binary Yes/No question, repeat the verb with <strong>ala</strong> in the middle. This literally asks "Does X happen or not happen?"</p>
        <ul>
            <li><strong>Statement:</strong> <em>soweli li moku.</em> (The animal eats).</li>
             <li><strong>Question:</strong> <em>soweli li moku ala moku?</em> ("Does the animal eat?").</li>
        </ul>

        <h4>B. The "Anu Seme" Method (Yes/No)</h4>
         <p>Alternatively, you can append <strong>anu seme</strong> ("or what?") to the end of a sentence.</p>
        <ul>
             <li><em>ma sina li lete anu seme?</em> ("Is it cold where you are?").</li>
        </ul>

        <h4>C. The "Seme" Method (Open-Ended)</h4>
         <p>To ask for specific information (Who, What, Where), replace the unknown word with <strong>seme</strong>.</p>
        <ul>
             <li><strong>jan seme li toki?</strong> ("Who speaks?" - <em>seme</em> replaces the subject).</li>
            <li><strong>ni li seme?</strong> ("What is this?" - <em>seme</em> replaces the predicate).</li>
            <li><strong>sina lon seme?</strong> ("Where are you?" - <em>seme</em> replaces the location).</li>
        </ul>

        <h3>2. Preverbs</h3>
         <p>Preverbs are special words placed <strong>before</strong> the predicate to change the nature of the action (volition, ability, process, etc.). The structure is: <strong>X li [Preverb] Y</strong>.</p>
        <div class="grammar-box">
            <ul>
                 <li><strong>wile</strong> (Want/Need): <em>mi wile pana.</em> ("I want to give").</li>
                 <li><strong>sona</strong> (Know how): <em>waso li sona pali.</em> ("Birds know how to build").</li>
                 <li><strong>awen</strong> (Continue): <em>o awen pali.</em> ("Keep working!").</li>
                 <li><strong>kama</strong> (Become/Start): <em>mi kama sona.</em> ("I come to know" = I learn).</li>
                 <li><strong>ken</strong> (Can): <em>sina ken toki.</em> ("You can speak").</li>
                 <li><strong>alasa</strong> (Try): <em>mi alasa pini.</em> ("I am trying to finish").</li>
            </ul>
        </div>
    `,
    story: `
        <p><b>sina lape ala lape? soweli li kama. sina sona ala sona e ni? soweli ni li seme? mi sona ala. mi ken ala awen lon ni. mi wile tawa. mi alasa tawa ma sin. sina wile kama tawa anu seme?</b></p>
        <p>Are you sleeping? Animals came. Did you know that? What are those animals? I dont know. I cannot stay here. I want to go. I am trying to go to a new land. Do you want to come or what?</p>
    `,
    quiz: [
        { type: "builder", q: "Build: <b>'What is this?'</b>", correctSentence: "ni li seme", words: ["ni", "li", "seme", "e", "jan", "kama"] },
        { type: "builder", q: "Build: <b>'Who is that?'</b>", correctSentence: "jan ni li seme", words: ["jan", "ni", "li", "seme", "sina", "e"] },
        { type: "builder", q: "Build: <b>'Do you want?' (Yes/No)</b>", correctSentence: "sina wile ala wile", words: ["sina", "wile", "ala", "wile", "li", "seme"] },
        { type: "mc",      q: "Translate: <b>'mi kama sona'</b>", options: ["I know", "I am learning (coming to know)", "I want to know"], ans: 1 },
        { type: "mc",      q: "Translate: <b>'mi ken toki'</b>", options: ["I can speak", "I speak", "I try to speak"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'ona li alasa lape'</b>", options: ["He sleeps", "He tries to sleep", "He needs to sleep"], ans: 1 },
        { type: "mc",      q: "Translate: <b>'I want to eat.'</b>", options: ["mi moku wile", "mi wile moku", "mi wile e moku"], ans: 1 },
        { type: "mc",      q: "Translate: <b>'Keep working.'</b>", options: ["o awen pali", "o pali awen", "o kama pali"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'They know how to build.'</b>", options: ["ona li sona pali", "ona li pali sona", "ona li ken pali"], ans: 0 },
        { type: "mc",      q: "Where does <b>'seme'</b> go?", options: ["Always at the start", "Replaces the unknown word", "Always at the end"], ans: 1 },
        { type: "mc",      q: "How do you ask: <b>'Is it good?'</b> (Yes/No)", options: ["ni li pona seme?", "ni li pona ala pona?", "ni li pona ala?"], ans: 1 },
        { type: "mc",      q: "Translate: <b>'sina lon seme?'</b>", options: ["Who are you?", "Where are you? (You are at what?)", "What are you?"], ans: 1 },
        { type: "mc",      q: "Which is <b>INCORRECT</b>? (Preverb order)", options: ["mi wile moku.", "mi moku wile.", "mi ken moku."], ans: 1 },
        { type: "builder", q: "Build: <b>'I try to finish.'</b>", correctSentence: "mi alasa pini", words: ["mi", "alasa", "pini", "lukin", "e", "li"] },
        { type: "mc",      q: "True or False: <b>'wile'</b> can mean 'Need' and 'Must' too.", options: ["True", "False"], ans: 0 }
    ]
};

// --- CHECKPOINT 2 ---
const CHECKPOINT_02 = {
    id: "c2",
    type: "test",
    title: "Checkpoint 2: Logic & Context",
    desc: "Test your mastery of Lessons 5 through 8 (Prepositions, Context, Numbers, Questions).",
    grammar: `<h3>Review: Logic</h3><p><strong>la:</strong> Sets the context (If/When).<br><strong>ala:</strong> Negation (No/Not).<br><strong>seme:</strong> Question word.</p>`,
    quiz: [
        // Prepositions
        { type: "mc",      q: "Translate: <b>'mi lon tomo'</b>", options: ["I am in the house", "I go to the house", "I am a house"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'mi kepeken ilo'</b>", options: ["I use a tool", "I see a tool", "I make a tool"], ans: 0 },
        { type: "mc",      q: "Which word means <b>'To / Towards'</b>?", options: ["tawa", "lon", "tan"], ans: 0 },
        { type: "builder", q: "Build: <b>'I go to the land.'</b>", correctSentence: "mi tawa ma", words: ["mi", "tawa", "ma", "e", "lon", "li"] },
        { type: "mc",      q: "What happens if you add <b>'e'</b> to a preposition?", options: ["It becomes causative (Make it move)", "It becomes plural", "It becomes a question"], ans: 0 },
        
        // Negation
        { type: "mc",      q: "Translate: <b>'mi lape ala'</b>", options: ["I am not sleeping", "I sleep a lot", "I will sleep"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'jan ala'</b>", options: ["Nobody", "Some people", "Bad person"], ans: 0 },
        { type: "builder", q: "Build: <b>'I do not eat.'</b>", correctSentence: "mi moku ala", words: ["mi", "moku", "ala", "e", "li", "jan"] },
        { type: "mc",      q: "Which is correct?", options: ["mi ala lape", "mi lape ala", "ala mi lape"], ans: 1 },
        
        // Context (la)
        { type: "mc",      q: "What does <b>'la'</b> do?", options: ["Separates Context from Main Sentence", "Marks the object", "Marks the verb"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'tenpo ni la'</b>", options: ["Now / At this time", "Time is this", "Yesterday"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'sina wile la mi tawa'</b>", options: ["If you want, I go", "You want to go", "I want you to go"], ans: 0 },
        { type: "builder", q: "Build: <b>'If I sleep, I am good.'</b>", correctSentence: "mi lape la mi pona", words: ["mi", "lape", "la", "mi", "pona", "e"] },
        
        // Numbers
        { type: "mc",      q: "What number is <b>'tu'</b>?", options: ["2", "1", "5"], ans: 0 },
        { type: "mc",      q: "What number is <b>'luka'</b>?", options: ["5", "10", "20"], ans: 0 },
        { type: "mc",      q: "Calculate: <b>'luka luka tu'</b>", options: ["12", "7", "552"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'mute'</b>", options: ["20 / Many", "100", "Zero"], ans: 0 },
        { type: "builder", q: "Build: <b>'Three people.'</b>", correctSentence: "jan tu wan", words: ["jan", "tu", "wan", "luka", "nanpa"] },
        { type: "mc",      q: "Translate: <b>'jan nanpa wan'</b>", options: ["The first person", "One person", "Person number"], ans: 0 },
        
        // Questions & Preverbs
        { type: "mc",      q: "What is <b>'seme'</b>?", options: ["What/Who (Question word)", "Yes", "No"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'ni li seme?'</b>", options: ["What is this?", "Who is this?", "Is this good?"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'sina lon seme?'</b>", options: ["Where are you?", "Who are you?", "What are you?"], ans: 0 },
        { type: "mc",      q: "What is a <b>'Yes/No'</b> question structure?", options: ["verb + ala + verb", "verb + seme", "seme + verb"], ans: 0 },
        { type: "builder", q: "Build: <b>'Do you want?'</b>", correctSentence: "sina wile ala wile", words: ["sina", "wile", "ala", "wile", "seme", "li"] },
        { type: "mc",      q: "Translate: <b>'mi kama sona'</b>", options: ["I learn (come to know)", "I know", "I want to know"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'mi ken toki'</b>", options: ["I can speak", "I speak", "I try to speak"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'mi wile lape'</b>", options: ["I want to sleep", "I sleep", "I must sleep"], ans: 0 },
        { type: "builder", q: "Build: <b>'I try to finish.'</b>", correctSentence: "mi alasa pini", words: ["mi", "alasa", "pini", "lukin", "e", "li"] },
        { type: "mc",      q: "Translate: <b>'ona li sona pali'</b>", options: ["They know how to build", "They build knowledge", "They want to build"], ans: 0 }
    ]
};

    // --- LESSON 9: Commands & Connections ---
const LESSON_09 = {
    id: "9",
    type: "lesson",
    title: "Commands & Connections",
    desc: "Giving orders, offering choices, and the 'And' rules.",
    vocab: [
        { word: "o",      type: "syntactical particle", def: "marks a vocative or an imperative, should.", ex: "jan o! (Hey person!)" },
        { word: "anu",    type: "content word/ particle", def: "seperatives multiple possibilities, choice, select, decide.", ex: "telo anu kili? (Water or fruit?)" },
        { word: "taso",   type: "syntactical particle", def: "marks a sentence as qualifying or contradictory.", ex: "mi wile, taso mi ken ala. (I want, but I can't.)" },
        { word: "kin",    type: "syntactical particle", def: "too, also, as well.", ex: "mi kin. (Me too.)" },
        { word: "namako", type: "content word", def: "spice, ornament, extra, additional.", ex: "moku namako. (Spicy/Fancy food.)" }
    ],
    grammar: `
        <h3>1. Commands & Wishes (o)</h3>
        <p>The particle <strong>o</strong> is used for direct address and commands.</p>
        <ul>
            <li><strong>Commands (Imperative):</strong> Replace <em>li</em> with <em>o</em> to turn a sentence into a command. <br><em>sina o tawa.</em> ("You go!") → Often shortened to <em>o tawa!</em> ("Go!").</li>
            <li><strong>Addressing (Vocative):</strong> Place <em>o</em> after a name or noun to call for attention. <br><em>jan Su o.</em> ("Hey Su!").</li>
            <li><strong>Wishes:</strong> When used with a third person, it expresses a wish. <br><em>ona o lape.</em> ("May they sleep").</li>
        </ul>

        <h3>2. The "And" Rules</h3>
        <p>Toki Pona does not have a single word for "and" that connects everything. You must use specific particles based on what you are connecting.</p>
        <div class="grammar-box">
            <ul>
                <li><strong>Connecting Subjects (en):</strong> Use <strong>en</strong>. <br><em>jan <strong>en</strong> soweli li moku.</em> ("Person and animal eat").</li>
                <li><strong>Connecting Predicates (li):</strong> Repeat <strong>li</strong>. <br><em>ona <strong>li</strong> moku <strong>li</strong> lape.</em> ("They eat and sleep").</li>
                <li><strong>Connecting Objects (e):</strong> Repeat <strong>e</strong>. <br><em>mi moku <strong>e</strong> kili <strong>e</strong> pan.</em> ("I eat fruit and bread").</li>
            </ul>
        </div>
        <p><strong>Note:</strong> <em>en</em> is ONLY for subjects. Never use it to connect verbs or objects.</p>

        <h3>3. Or, But, Also</h3>
        <ul>
            <li><strong>anu (Or):</strong> Connects phrases or words. <br><em>waso anu kala.</em> ("Bird or fish").</li>
            <li><strong>taso (But/Only):</strong> Used at the start of a sentence for "But", or after a noun for "Only". <br><em>ona taso li pali.</em> ("Only they work").</li>
            <li><strong>kin (Also/Indeed):</strong> Adds emphasis or "too". <br><em>ona kin li pali.</em> ("They also work").</li>
        </ul>
    `,
    story: `
        <p><b>jan lili o, sina o kama! mi en sina li tawa li alasa. mi wile lukin e ma e suno. sina wile e moku anu telo? mi jo e ilo taso. taso mi kin wile e moku. kili li namako. sewi o, ma o pona!</b></p>
        <p>Hey kid, you come here! You and me are traveling and hunting. I want to see world and the sun. do you want food or water? I only have tools. But, i also want food. fruits are treats. Oh sky, let the land be good.</p>
    `,
    quiz: [
        { type: "builder", q: "Build: <b>'Hey person!' (Vocative)</b>", correctSentence: "jan o", words: ["jan", "o", "li", "e", "ni"] },
        { type: "builder", q: "Build: <b>'Eat!' (Command)</b>", correctSentence: "o moku", words: ["o", "moku", "li", "sina", "e"] },
        { type: "builder", q: "Build: <b>'Listen!'</b>", correctSentence: "o kute", words: ["o", "kute", "li", "toki", "lukin"] },
        { type: "mc",      q: "Translate: <b>'telo anu kili'</b>", options: ["Water and fruit", "Water or fruit", "Water with fruit"], ans: 1 },
        { type: "mc",      q: "Translate: <b>'mi kin'</b>", options: ["Me too / Indeed", "My kin", "I can"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'moku namako'</b>", options: ["Spice / Extra food", "Bad food", "Main meal"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'I want, but I can't.'</b>", options: ["mi wile taso mi ken ala", "mi wile anu mi ken ala", "mi wile kin mi ken ala"], ans: 0 },
        { type: "mc",      q: "How do you say <b>'Fruit AND bread'</b> (Objects)?", options: ["kili en pan", "kili e pan", "e kili e pan"], ans: 2 },
        { type: "mc",      q: "How do you say <b>'Me AND you'</b> (Subjects)?", options: ["mi en sina", "mi li sina", "mi e sina"], ans: 0 },
        { type: "mc",      q: "Which particle connects <b>multiple verbs</b>?", options: ["en", "li", "e"], ans: 1 },
        { type: "mc",      q: "Which particle connects <b>multiple subjects</b>?", options: ["en", "li", "o"], ans: 0 },
        { type: "mc",      q: "What does <b>'o'</b> indicate?", options: ["A command or calling someone", "A question", "A statement"], ans: 0 },
        { type: "mc",      q: "Which is <b>INCORRECT</b>? (Connecting objects)", options: ["mi moku e kili e pan", "mi moku e kili en pan", "mi moku e kili li pan"], ans: 1 },
        { type: "builder", q: "Build: <b>'I eat and sleep.'</b>", correctSentence: "mi moku li lape", words: ["mi", "moku", "li", "lape", "en", "e"] },
        { type: "mc",      q: "Translate: <b>'sina o tawa'</b>", options: ["You go! (Command)", "You are going", "Go you?"], ans: 0 }
    ]
};

// --- LESSON 10: People & Society ---
const LESSON_10 = {
    id: "10",
    type: "lesson",
    title: "People & Society",
    desc: "Words for gender, family, and groups.",
    vocab: [
        { word: "ona",    type: "pronoun", def: "He, she, it, they.", ex: "ona li pona. (They are good.)" },
        { word: "mama",   type: "content word", def: "caretaker, guardian, originator, creator.", ex: "mama mi. (My parent.)" },
        { word: "mije",   type: "content word", def: "Man, husband, male.", ex: "mije ni. (That man.)" },
        { word: "meli",   type: "content word", def: "Woman, wife, female.", ex: "meli pona. (Good woman.)" },
        { word: "tonsi",  type: "content word", def: "Non-binary, trans, gender-non-conforming.", ex: "jan tonsi. (Non-binary person.)" },
        { word: "kulupu", type: "content word", def: "Group, community, society, team, crowd, company.", ex: "kulupu toki. (Language community.)" }
    ],
    grammar: `
        <h3>Usage Note</h3>
        <p><strong>ona</strong> is the universal pronoun. It covers he, she, and they. Toki Pona does not distinguish gender in pronouns.</p>
    `,
    story: `
        <p><b>ona li mama mi.</b> (She is my mother.)</p>
        <p><b>kulupu li suli.</b> (The group is big.)</p>
    `,
    quiz: [
        { type: "builder", q: "Build: <b>'She is my parent.'</b>", correctSentence: "ona li mama mi", words: ["ona", "li", "mama", "mi", "e", "jan"] },
        { type: "builder", q: "Build: <b>'The group speaks.'</b>", correctSentence: "kulupu li toki", words: ["kulupu", "li", "toki", "e", "mi", "ona"] },
        { type: "builder", q: "Build: <b>'That man is strong.'</b>", correctSentence: "mije ni li wawa", words: ["mije", "ni", "li", "wawa", "meli", "pona"] },
        { type: "mc",      q: "Translate: <b>'meli pona'</b>", options: ["Good woman/Wife", "Good man", "Good person"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'jan tonsi'</b>", options: ["Leader", "Non-binary/Trans person", "Warrior"], ans: 1 },
        { type: "mc",      q: "Translate: <b>'mama sina'</b>", options: ["Your parent", "My parent", "Parenting"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'He / She / They'</b>", options: ["ona", "mi", "ni"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Man / Husband'</b>", options: ["mije", "meli", "jan"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Group / Community'</b>", options: ["kulupu", "mute", "ale"], ans: 0 },
        { type: "mc",      q: "What is a <b>'kulupu toki'</b>?", options: ["Language community/group", "Talking person", "Many words"], ans: 0 },
        { type: "mc",      q: "True or False: Toki Pona has separate words for 'He' and 'She'.", options: ["True", "False (Use 'ona')"], ans: 1 },
        { type: "mc",      q: "What does <b>'mama'</b> include?", options: ["Only mothers", "Only fathers", "Mothers, Fathers, Creators, Originators"], ans: 2 },
        { type: "mc",      q: "Which is <b>INCORRECT</b>?", options: ["ona li mije.", "ona mije.", "mije li pona."], ans: 1 },
        { type: "builder", q: "Build: <b>'Good wife.'</b>", correctSentence: "meli pona", words: ["meli", "pona", "li", "mije", "e"] },
        { type: "mc",      q: "Translate: <b>'ona li suli'</b>", options: ["They are big/important", "I am big", "You are big"], ans: 0 }
    ]
};

// --- LESSON 11: The Body ---
const LESSON_11 = {
    id: "11",
    type: "lesson",
    title: "The Body",
    desc: "Parts of the physical self.",
    vocab: [
        { word: "luka",  type: "content word", def: "Five, hand, arm, to use hand to do something.", ex: "jan luka. (Five people.)" },
        { word: "noka",   type: "content word", def: "Foot, leg, roots, base, to use foot or leg to do something.", ex: "noka mi. (My foot.)" },
        { word: "uta",    type: "content word", def: "Mouth, lips, throat, to use mouth or throat to do something.", ex: "uta mi. (My mouth.)" },
        { word: "sijelo", type: "content word", def: "Body, form, physical state, torso.", ex: "sijelo mi. (My body.)" },
        { word: "lawa",   type: "content word", def: "Head, mind, brain, control, lead, guide, rule, law", ex: "jan lawa. (Leader/Head person.)" },
        { word: "insa",   type: "content word", def: "Inside, internal, center, guts, core, within, insert.", ex: "insa mi. (My stomach/inside.)" },
        { word: "sinpin", type: "content word", def: "vertical surface, wall, opposite of 'supa'", ex: "sinpin tomo. (Wall of house.)" },
        { word: "monsi",  type: "content word", def: "Back, rear, behind.", ex: "lon monsi. (At the back.)" },
        { word: "selo",   type: "content word", def: "Outer layer, boundary, to protect something that is at risk, to fully surround", ex: "selo mi. (My skin.)" }
    ],
    grammar: `
        <h3>Body Metaphors</h3>
        <p><strong>lawa</strong> means 'head', but also 'to lead' or 'control'.<br><strong>noka</strong> is 'foot', but also the 'bottom' of something.</p>
    `,
    story: `
        <p><b>o lawa e kulupu.</b> (Lead the group.)</p>
        <p><b>sijelo mi li pona.</b> (My body is good.)</p>
    `,
    quiz: [
        { type: "builder", q: "Build: <b>'My hand is small.'</b>", correctSentence: "luka mi li lili", words: ["luka", "mi", "li", "lili", "suli", "noka"] },
        { type: "builder", q: "Build: <b>'Lead the group.'</b>", correctSentence: "o lawa e kulupu", words: ["o", "lawa", "e", "kulupu", "li", "jan"] },
        { type: "builder", q: "Build: <b>'Look at my face.'</b>", correctSentence: "o lukin e sinpin mi", words: ["o", "lukin", "e", "sinpin", "mi", "monsi"] },
        { type: "mc",      q: "Translate: <b>'noka'</b>", options: ["Foot / Leg / Bottom", "Hand / Arm", "Head"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'monsi'</b>", options: ["Back / Behind", "Front / Face", "Inside"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'insa'</b>", options: ["Inside / Stomach", "Outside / Skin", "Head"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Mouth'</b>", options: ["uta", "luka", "noka"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Skin / Bark / Shell'</b>", options: ["selo", "sijelo", "sinpin"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Head / To Lead'</b>", options: ["lawa", "luka", "sewi"], ans: 0 },
        { type: "mc",      q: "What does <b>'jan lawa'</b> mean?", options: ["Head person (Leader)", "Hand person", "Tall person"], ans: 0 },
        { type: "mc",      q: "If 'noka' is foot, what is <b>'noka tomo'</b>?", options: ["The house's floor/bottom", "The house's roof", "The house's door"], ans: 0 },
        { type: "mc",      q: "What part of a house is <b>'sinpin tomo'</b>?", options: ["Wall / Front", "Floor", "Roof"], ans: 0 },
        { type: "mc",      q: "Which is <b>INCORRECT</b>? (Possession)", options: ["luka mi", "luka pi mi", "luka sina"], ans: 1 },
        { type: "builder", q: "Build: <b>'My body is good.'</b>", correctSentence: "sijelo mi li pona", words: ["sijelo", "mi", "li", "pona", "ike", "e"] },
        { type: "mc",      q: "Translate: <b>'I have two hands.'</b>", options: ["mi jo e luka tu", "mi luka tu", "mi jo luka tu"], ans: 0 }
    ]
};

// --- LESSON 12: Nature & Elements ---
const LESSON_12 = {
    id: "12",
    type: "lesson",
    title: "Nature & Elements",
    desc: "The physical world around us.",
    vocab: [
        { word: "ma",    type: "content word", def: "Land, earth, country, place, world, outdoors, territory.", ex: "ma pona. (Good land.)" },
        { word: "suno",  type: "content word", def: "Sun, light, brightness.", ex: "suno li wawa. (The sun is strong.)" },
        { word: "mun",   type: "content word", def: "Moon, star, planet, celestial body.", ex: "mun li loje. (The moon is red.)" },
        { word: "telo",  type: "content word", def: "Water, liquid, wet, to wet.", ex: "telo kili. (Fruit juice.)" },
        { word: "kon",   type: "content word", def: "Air, wind, spirit, soul, meaning, breath.", ex: "kon li lete. (The wind is cold.)" },
        { word: "lete",  type: "content word", def: "Cold, freeze, raw.", ex: "telo lete. (Cold water.)" },
        { word: "ko",    type: "content word", def: "an object that is not 'telo' or 'kiwen'.", ex: "ko jaki. (Mud/dirt.)" },
        { word: "seli",  type: "content word", def: "Fire, heat, warm, to burn, to cook (with fire).", ex: "telo seli. (Hot water.)" },
        { word: "kiwen", type: "content word", def: "Hard objects, metal, rock, stiff", ex: "ilo kiwen. (Metal tool.)" }
    ],
    grammar: `
        <h3>Nature Words</h3>
        <p><strong>telo</strong> is any liquid. <strong>kiwen</strong> is any hard substance (metal, rock, plastic).</p>
    `,
    story: `
        <p><b>suno li seli.</b> (The sun is hot.)</p>
        <p><b>mi moku e telo.</b> (I drink water.)</p>
    `,
    quiz: [
        { type: "builder", q: "Build: <b>'The sun is strong.'</b>", correctSentence: "suno li wawa", words: ["suno", "li", "wawa", "mun", "telo", "ma"] },
        { type: "builder", q: "Build: <b>'Cold air (wind).'</b>", correctSentence: "kon lete", words: ["kon", "lete", "seli", "li", "e"] },
        { type: "builder", q: "Build: <b>'I drink water.'</b>", correctSentence: "mi moku e telo", words: ["mi", "moku", "e", "telo", "li", "ko"] },
        { type: "mc",      q: "Translate: <b>'telo seli'</b>", options: ["Hot water", "Cold water", "Ice"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'ma'</b>", options: ["Land / Country / Earth", "Sky", "Water"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'ko'</b>", options: ["Powder / Clay / Paste", "Rock", "Air"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Stone / Metal / Hard'</b>", options: ["kiwen", "ko", "ma"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Moon / Star'</b>", options: ["mun", "suno", "kon"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Fire / Heat'</b>", options: ["seli", "lete", "telo"], ans: 0 },
        { type: "mc",      q: "Which word describes <b>Ice</b>?", options: ["telo kiwen (Hard water)", "telo seli", "telo kon"], ans: 0 },
        { type: "mc",      q: "Which word describes <b>Mud</b>?", options: ["ko", "kiwen", "kon"], ans: 0 },
        { type: "mc",      q: "What is <b>'kon'</b>?", options: ["Air / Spirit / Wind", "Fire", "Earth"], ans: 0 },
        { type: "mc",      q: "Which is <b>WRONG</b>? (Hot sun)", options: ["suno seli", "suno pi seli", "suno li seli (Sentence)"], ans: 1 },
        { type: "builder", q: "Build: <b>'The stone is hard.'</b>", correctSentence: "kiwen li kiwen", words: ["kiwen", "li", "kiwen", "ko", "e", "pona"] },
        { type: "mc",      q: "Translate: <b>'suno li pimeja'</b>", options: ["The sun is dark (Eclipse)", "The sun is bright", "The sun is hot"], ans: 0 }
    ]
};

// --- CHECKPOINT 3: The World ---
const CHECKPOINT_03 = {
    id: "c3",
    type: "test",
    title: "Checkpoint 3: The World",
    desc: "Test your mastery of Lessons 9 through 12 (Commands, People, Body, Nature).",
    grammar: `<h3>Review: Connections</h3><p><strong>en:</strong> Joins Subjects.<br><strong>li:</strong> Joins Verbs.<br><strong>e:</strong> Joins Objects.</p>`,
    quiz: [
        // Commands & Connectors
        { type: "mc",      q: "How do you give a command?", options: ["Use 'o'", "Use 'li'", "Use 'e'"], ans: 0 },
        { type: "builder", q: "Build: <b>'Hey person!'</b>", correctSentence: "jan o", words: ["jan", "o", "li", "e", "ni"] },
        { type: "builder", q: "Build: <b>'Eat!' (Command)</b>", correctSentence: "o moku", words: ["o", "moku", "li", "sina"] },
        { type: "mc",      q: "Which particle connects <b>Subjects</b>?", options: ["en", "li", "e"], ans: 0 },
        { type: "mc",      q: "Which particle connects <b>Objects</b>?", options: ["e", "en", "li"], ans: 0 },
        { type: "builder", q: "Build: <b>'Me and you.'</b>", correctSentence: "mi en sina", words: ["mi", "en", "sina", "li", "e"] },
        { type: "mc",      q: "Translate: <b>'telo anu kili'</b>", options: ["Water or fruit", "Water and fruit", "Water with fruit"], ans: 0 },
        { type: "mc",      q: "What does <b>'taso'</b> mean?", options: ["But / Only", "And", "Or"], ans: 0 },
        
        // People & Gender
        { type: "mc",      q: "Translate: <b>'ona'</b>", options: ["He/She/They/It", "You", "Me"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'mije'</b>", options: ["Man / Male", "Woman", "Parent"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'meli'</b>", options: ["Woman / Female", "Man", "Child"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'mama'</b>", options: ["Parent / Creator", "Food", "Earth"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'kulupu'</b>", options: ["Group / Community", "Person", "Place"], ans: 0 },
        { type: "builder", q: "Build: <b>'My mother (parent).'</b>", correctSentence: "mama meli mi", words: ["mama", "meli", "mi", "ona", "li"] },
        
        // The Body
        { type: "mc",      q: "What is <b>'luka'</b>?", options: ["Hand / Arm", "Foot / Leg", "Head"], ans: 0 },
        { type: "mc",      q: "What is <b>'noka'</b>?", options: ["Foot / Leg", "Hand", "Body"], ans: 0 },
        { type: "mc",      q: "What is <b>'lawa'</b>?", options: ["Head / To Lead", "Face", "Stomach"], ans: 0 },
        { type: "mc",      q: "What is <b>'sinpin'</b>?", options: ["Face / Front / Wall", "Back", "Inside"], ans: 0 },
        { type: "mc",      q: "What is <b>'monsi'</b>?", options: ["Back / Rear", "Front", "Head"], ans: 0 },
        { type: "builder", q: "Build: <b>'My body.'</b>", correctSentence: "sijelo mi", words: ["sijelo", "mi", "luka", "noka", "li"] },
        { type: "mc",      q: "Translate: <b>'uta'</b>", options: ["Mouth", "Eye", "Ear"], ans: 0 },
        
        // Nature & Elements
        { type: "mc",      q: "Translate: <b>'ma'</b>", options: ["Land / Earth", "Sky", "Water"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'telo'</b>", options: ["Water / Liquid", "Fire", "Air"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'suno'</b>", options: ["Sun / Light", "Moon", "Star"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'mun'</b>", options: ["Moon / Star", "Sun", "Earth"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'kon'</b>", options: ["Air / Wind / Spirit", "Fire", "Dirt"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'kiwen'</b>", options: ["Rock / Hard / Metal", "Mud", "Soft"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'seli'</b>", options: ["Fire / Heat", "Cold", "Water"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'lete'</b>", options: ["Cold", "Hot", "Warm"], ans: 0 },
        { type: "builder", q: "Build: <b>'Hot sun.'</b>", correctSentence: "suno seli", words: ["suno", "seli", "lete", "li", "e"] }
    ]
};

   // --- LESSON 13: Life Forms ---
const LESSON_13 = {
    id: "13",
    type: "lesson",
    title: "Life Forms",
    desc: "Plants, animals, and existence.",
    vocab: [
        { word: "kasi",  type: "content word", def: "non-edible vegetation", ex: "kasi suli. (Big tree.)" },
        { word: "soko",  type: "content word", def: "Fungus, mushroom.", ex: "moku soko. (Mushroom food.)" },
        { word: "akesi", type: "content word", def: "Reptile, amphibian.", ex: "akesi lili. (Lizard.)" },
        { word: "waso",  type: "content word", def: "Bird, flying creature.", ex: "waso li tawa sewi. (Bird flies up.)" },
        { word: "kala",  type: "content word", def: "Fish, sea creature.", ex: "kala li lon telo. (Fish is in water.)" },
        { word: "pipi",  type: "content word", def: "Bug, insect, spider.", ex: "pipi mute. (Many bugs.)" },
        { word: "moli",  type: "content word", def: "Death, die, kill.", ex: "ona li moli. (He is dead.)" },
        { word: "pan",   type: "content word", def: "Starchy staple foods (rice, wheat, corn, bread).", ex: "mi moku e pan. (I eat bread.)" }
    ],
    grammar: `
        <h3>Grouping Animals</h3>
        <p>Toki Pona groups animals by features: <strong>waso</strong> (flying), <strong>kala</strong> (swimming), <strong>soweli</strong> (land mammal), <strong>akesi</strong> (creepy/crawly/reptile).</p>
    `,
    story: `
        <p><b>kala li moku e pipi.</b> (The fish eats the bug.)</p>
        <p><b>kasi li kama suli.</b> (The plant becomes big.)</p>
    `,
    quiz: [
        { type: "builder", q: "Build: <b>'The fish swims (moves).'</b>", correctSentence: "kala li tawa", words: ["kala", "li", "tawa", "waso", "moku", "e"] },
        { type: "builder", q: "Build: <b>'The bird eats bugs.'</b>", correctSentence: "waso li moku e pipi", words: ["waso", "li", "moku", "e", "pipi", "soweli"] },
        { type: "builder", q: "Build: <b>'The plant dies.'</b>", correctSentence: "kasi li moli", words: ["kasi", "li", "moli", "lape", "pan", "e"] },
        { type: "mc",      q: "Translate: <b>'akesi'</b>", options: ["Reptile / Amphibian", "Cute animal", "Bird"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'pan'</b>", options: ["Bread / Grain / Rice", "Meat", "Fruit"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'soko'</b>", options: ["Mushroom / Fungus", "Tree", "Flower"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Bird / Flying thing'</b>", options: ["waso", "kala", "pipi"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Bug / Insect / Spider'</b>", options: ["pipi", "akesi", "soweli"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Death / To die'</b>", options: ["moli", "lape", "weka"], ans: 0 },
        { type: "mc",      q: "What category is a <b>Frog</b>?", options: ["akesi", "soweli", "kala"], ans: 0 },
        { type: "mc",      q: "What category is a <b>Bat</b> (Flying mammal)?", options: ["waso (usually)", "kala", "pipi"], ans: 0 },
        { type: "mc",      q: "What is <b>'pan suwi'</b>?", options: ["Sweet bread / Cake", "Rice", "Wheat"], ans: 0 },
        { type: "mc",      q: "Which is <b>INCORRECT</b>? (Fish flying)", options: ["kala li tawa sewi", "kala li tawa telo", "kala li lon telo"], ans: 0 },
        { type: "builder", q: "Build: <b>'I kill the bug.'</b>", correctSentence: "mi moli e pipi", words: ["mi", "moli", "e", "pipi", "li", "lape"] },
        { type: "mc",      q: "Translate: <b>'kasi suli'</b>", options: ["Big plant / Tree", "Small flower", "Forest"], ans: 0 }
    ]
};

// --- LESSON 14: Colors & Art ---
const LESSON_14 = {
    id: "14",
    type: "lesson",
    title: "Colors & Art",
    desc: "Visual description and creativity.",
    vocab: [
        { word: "kule",    type: "content word", def: "Color, colorful, to paint.", ex: "kule li pona. (Color is good.)" },
        { word: "jelo",    type: "content word", def: "Yellow-light green pigment.", ex: "suno jelo. (Yellow sun.)" },
        { word: "laso",    type: "content word", def: "Blue-green pigment.", ex: "telo laso. (Blue water.)" },
        { word: "pimeja",  type: "content word", def: "Black, dark.", ex: "tomo pimeja. (Dark room.)" },
        { word: "walo",    type: "content word", def: "White, light, pale.", ex: "ma walo. (Snow/White land.)" },
        { word: "sitelen", type: "content word", def: "Symbol, picture, writing, representation.", ex: "sitelen mi. (My writing/drawing.)" },
        { word: "musi",    type: "content word", def: "Fun, art, game, entertainment, interesting.", ex: "kalama musi. (Music.)" }
    ],
    grammar: `
        <h3>Combining Colors</h3>
        <p>Combine words for more colors: <br><strong>laso jelo</strong> (Yellow-Green) <br><strong>loje pimeja</strong> (Dark Red / Brown).</p>
    `,
    story: `
        <p><b>mi sitelen e kasi laso.</b> (I draw a green plant.)</p>
        <p><b>ni li musi.</b> (This is fun.)</p>
    `,
    quiz: [
        { type: "builder", q: "Build: <b>'Yellow sun.'</b>", correctSentence: "suno jelo", words: ["suno", "jelo", "loje", "li", "e"] },
        { type: "builder", q: "Build: <b>'I paint the house.'</b>", correctSentence: "mi kule e tomo", words: ["mi", "kule", "e", "tomo", "sitelen", "li"] },
        { type: "builder", q: "Build: <b>'Dark room.'</b>", correctSentence: "tomo pimeja", words: ["tomo", "pimeja", "walo", "li", "e"] },
        { type: "mc",      q: "Translate: <b>'laso'</b>", options: ["Blue / Green", "Red", "Yellow"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'walo'</b>", options: ["White / Light", "Black / Dark", "Colorful"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'sitelen'</b>", options: ["Image / Writing / Symbol", "Sound", "Tool"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Black / Dark'</b>", options: ["pimeja", "walo", "jelo"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Art / Fun / Game'</b>", options: ["musi", "kule", "pali"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'To draw / To write'</b>", options: ["sitelen", "kule", "toki"], ans: 0 },
        { type: "mc",      q: "What color is <b>'laso jelo'</b>?", options: ["Yellow-Green", "Purple", "Orange"], ans: 0 },
        { type: "mc",      q: "What color is <b>'loje pimeja'</b>?", options: ["Dark Red / Brown", "Pink", "Orange"], ans: 0 },
        { type: "mc",      q: "What is <b>'kalama musi'</b>?", options: ["Music (Entertaining sound)", "Speech", "Noise"], ans: 0 },
        { type: "mc",      q: "Which is <b>INCORRECT</b>? (Blue water)", options: ["telo laso", "telo pi laso", "telo li laso (Sentence)"], ans: 1 },
        { type: "builder", q: "Build: <b>'White paper.'</b>", correctSentence: "lipu walo", words: ["lipu", "walo", "pimeja", "e", "li"] },
        { type: "mc",      q: "Translate: <b>'telo pimeja'</b>", options: ["Oil / Ink / Dark liquid", "Clear water", "Milk"], ans: 0 }
    ]
};

// --- LESSON 15: Objects & Tools ---
const LESSON_15 = {
    id: "15",
    type: "lesson",
    title: "Objects & Tools",
    desc: "Interacting with physical things.",
    vocab: [
        { word: "ijo",    type: "content word", def: "Thing, object, something.", ex: "ijo ni. (This thing.)" },
        { word: "lipu",   type: "content word", def: "document, website, book, flat bendable object, leaf.", ex: "lipu sona. (Book of knowledge.)" },
        { word: "poki",   type: "content word", def: "Container of things.", ex: "poki telo. (Water cup.)" },
        { word: "len",    type: "content word", def: "Clothing, cloth, to hide, hidden, secret, private.", ex: "len mi. (My clothes.)" },
        { word: "supa",   type: "content word", def: "Horizontal surface, surface that can have things on it.", ex: "supa lape. (Bed.)" },
        { word: "leko",   type: "content word", def: "Block, square, tile, blocky object.", ex: "leko kiwen. (Brick.)" },
        { word: "palisa", type: "content word", def: "Stick, rod, long solid object.", ex: "palisa kasi. (Branch.)" },
        { word: "open",   type: "content word", def: "To begin, start, open, beginning, access.", ex: "o open e lupa. (Open the door.)" },
        { word: "sike",   type: "content word", def: "Circle, sphere, spiral, round thing, cycle, loop.", ex: "sike li tawa. (The wheel moves.)" },
        { word: "linja",  type: "content word", def: "Long flexible object, to connect.", ex: "linja lawa. (Hair.)" },
        { word: "kiki",   type: "content word", def: "Spiky, sharp, angle, triangular.", ex: "kasi kiki. (Cactus.)"}
    ],
    grammar: `
        <h3>Compound Words</h3>
        <p><strong>supa lape</strong> = Surface for sleep (Bed). <br><strong>ilo toki</strong> = Tool for talk (Phone).</p>
    `,
    story: `
        <p><b>o pana e lipu.</b> (Give me the paper.)</p>
        <p><b>mi lon supa.</b> (I am on the chair/furniture.)</p>
    `,
    quiz: [
        { type: "builder", q: "Build: <b>'I have a box.'</b>", correctSentence: "mi jo e poki", words: ["mi", "jo", "e", "poki", "supa", "li"] },
        { type: "builder", q: "Build: <b>'Open the door.'</b>", correctSentence: "o open e lupa", words: ["o", "open", "e", "lupa", "poki", "li"] },
        { type: "builder", q: "Build: <b>'Long rope (thread).'</b>", correctSentence: "linja suli", words: ["linja", "suli", "lili", "palisa", "e"] },
        { type: "mc",      q: "Translate: <b>'supa'</b>", options: ["Furniture / Surface / Table", "Box", "Stick"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'leko'</b>", options: ["Block / Square / Stairs", "Circle", "Line"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'sike'</b>", options: ["Circle / Ball / Wheel", "Square", "Triangle"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Stick / Rod'</b>", options: ["palisa", "linja", "lipu"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Clothing / Fabric'</b>", options: ["len", "selo", "poki"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Paper / Book / Flat thing'</b>", options: ["lipu", "leko", "supa"], ans: 0 },
        { type: "mc",      q: "What is a <b>'supa lape'</b>?", options: ["Bed (Sleep surface)", "Desk", "Chair"], ans: 0 },
        { type: "mc",      q: "What is an <b>'ilo toki'</b>?", options: ["Phone / Communication device", "Microphone", "Talking tool (Parrot)"], ans: 0 },
        { type: "mc",      q: "What is <b>'linja lawa'</b>?", options: ["Hair (Head lines)", "Brain", "Hat"], ans: 0 },
        { type: "mc",      q: "Which is <b>INCORRECT</b>? (Open the bottle)", options: ["open e poki", "poki open", "open poki (Missing 'e')"], ans: 2 },
        { type: "builder", q: "Build: <b>'The wheel moves.'</b>", correctSentence: "sike li tawa", words: ["sike", "li", "tawa", "leko", "e", "pona"] },
        { type: "mc",      q: "Translate: <b>'poki telo'</b>", options: ["Water bottle / Cup", "Water box", "Swimming pool"], ans: 0 }
    ]
};

// --- LESSON 16: Space & Movement ---
const LESSON_16 = {
    id: "16",
    type: "lesson",
    title: "Space & Movement",
    desc: "Describing where things are.",
    vocab: [
        { word: "anpa",  type: "content word", def: "Down, bottom, below, shame, defeat, humble.", ex: "ona li anpa. (He is low/humble.)" },
        { word: "sewi",  type: "content word", def: "Up, top, above, sky, divine, inspiring, sacred, raise.", ex: "tomo sewi. (Tower/Church.)" },
        { word: "weka",  type: "content word", def: "Absent, remove, vanish, ignore, omit, away, missing, loss, delete, abandon, leave, far.", ex: "ona li weka. (He is away.)" },
        { word: "poka",  type: "content word", def: "Nearby, side, next to, nearby, hip.", ex: "lon poka mi. (By my side.)" },
        { word: "nasin", type: "content word", def: "Way, path, direction, road, custom, method, doctrine.", ex: "nasin pona. (The good path.)" },
        { word: "nena",  type: "content word", def: "Bump, hill, nose, button, protrusion.", ex: "nena ma. (Hill.)" },
        { word: "lupa",  type: "content word", def: "Hole, door, window, orifice, entrance, to dig, gap", ex: "lupa tomo. (Door.)" }
    ],
    grammar: `
        <h3>Direction</h3>
        <p><strong>tawa sewi</strong> = Go up. <br><strong>lon anpa</strong> = At the bottom.</p>
    `,
    story: `
        <p><b>waso li tawa sewi.</b> (The bird goes up.)</p>
        <p><b>o weka e ijo ike.</b> (Remove the bad things.)</p>
    `,
    quiz: [
        { type: "builder", q: "Build: <b>'Go down.'</b>", correctSentence: "o tawa anpa", words: ["o", "tawa", "anpa", "sewi", "li", "e"] },
        { type: "builder", q: "Build: <b>'The bird is high up.'</b>", correctSentence: "waso li lon sewi", words: ["waso", "li", "lon", "sewi", "anpa", "e"] },
        { type: "builder", q: "Build: <b>'Look at my nose.'</b>", correctSentence: "o lukin e nena mi", words: ["o", "lukin", "e", "nena", "mi", "nasin"] },
        { type: "mc",      q: "Translate: <b>'nasin'</b>", options: ["Way / Path / Method", "Street", "Car"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'weka'</b>", options: ["Away / Absent / Removed", "Here", "Near"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'lupa'</b>", options: ["Hole / Door / Window", "Wall", "Floor"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Side / Next to'</b>", options: ["poka", "monsi", "sinpin"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Bump / Hill / Nose'</b>", options: ["nena", "ma", "sewi"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Sky / Divine / Up'</b>", options: ["sewi", "kon", "anpa"], ans: 0 },
        { type: "mc",      q: "How do you say <b>'Fly up'</b>?", options: ["tawa sewi", "lon sewi", "sewi tawa"], ans: 0 },
        { type: "mc",      q: "What does <b>'ona li anpa'</b> mean?", options: ["He is bowing/humble/low", "He is tall", "He is flying"], ans: 0 },
        { type: "mc",      q: "What is a <b>'lupa tomo'</b>?", options: ["Door / Window", "Chimney", "Basement"], ans: 0 },
        { type: "mc",      q: "Which is <b>INCORRECT</b>? (Beside me)", options: ["lon poka mi", "lon poka pi mi", "lon mi poka"], ans: 2 },
        { type: "builder", q: "Build: <b>'Remove (make away) the trash.'</b>", correctSentence: "o weka e jaki", words: ["o", "weka", "e", "jaki", "li", "sewi"] },
        { type: "mc",      q: "Translate: <b>'nasin pona'</b>", options: ["The good path / Daoism", "Good road", "Simple street"], ans: 0 }
    ]
};

// --- CHECKPOINT 4: Description ---
const CHECKPOINT_04 = {
    id: "c4",
    type: "test",
    title: "Checkpoint 4: Description",
    desc: "Test your mastery of Lessons 13 through 16 (Animals, Colors, Objects, Space).",
    grammar: `<h3>Review: Space & Color</h3><p><strong>Compound Colors:</strong> <em>laso jelo</em> (Green-yellow).<br><strong>Space:</strong> <em>lon anpa</em> (at the bottom).</p>`,
    quiz: [
        // Life Forms
        { type: "mc",      q: "What is a <b>'soweli'</b>?", options: ["Land Mammal / Animal", "Bird", "Fish"], ans: 0 },
        { type: "mc",      q: "What is a <b>'waso'</b>?", options: ["Bird / Flying thing", "Fish", "Bug"], ans: 0 },
        { type: "mc",      q: "What is a <b>'kala'</b>?", options: ["Fish / Sea creature", "Lizard", "Bird"], ans: 0 },
        { type: "mc",      q: "What is a <b>'kasi'</b>?", options: ["Plant / Tree / Leaf", "Mushroom", "Meat"], ans: 0 },
        { type: "mc",      q: "What is a <b>'pipi'</b>?", options: ["Bug / Insect", "Snake", "Mouse"], ans: 0 },
        { type: "mc",      q: "What is a <b>'akesi'</b>?", options: ["Reptile / Amphibian", "Cute animal", "Bird"], ans: 0 },
        { type: "builder", q: "Build: <b>'The plant grows.'</b>", correctSentence: "kasi li kama suli", words: ["kasi", "li", "kama", "suli", "moli", "e"] },
        
        // Colors
        { type: "mc",      q: "Translate: <b>'loje'</b>", options: ["Red", "Blue", "White"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'jelo'</b>", options: ["Yellow", "Red", "Black"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'laso'</b>", options: ["Blue / Green", "Yellow", "Red"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'pimeja'</b>", options: ["Black / Dark", "White", "Bright"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'walo'</b>", options: ["White / Light", "Black", "Colorful"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'kule'</b>", options: ["Color / Painted", "Clear", "Dark"], ans: 0 },
        { type: "builder", q: "Build: <b>'Green water.'</b>", correctSentence: "telo laso", words: ["telo", "laso", "jelo", "li", "e"] },
        
        // Objects & Tools
        { type: "mc",      q: "What is a <b>'lipu'</b>?", options: ["Paper / Book / Flat thing", "Box", "Stick"], ans: 0 },
        { type: "mc",      q: "What is a <b>'poki'</b>?", options: ["Container / Box / Cup", "Tool", "Table"], ans: 0 },
        { type: "mc",      q: "What is a <b>'supa'</b>?", options: ["Surface / Furniture", "Wall", "Ceiling"], ans: 0 },
        { type: "mc",      q: "What is a <b>'palisa'</b>?", options: ["Stick / Rod", "Circle", "Square"], ans: 0 },
        { type: "mc",      q: "What is a <b>'len'</b>?", options: ["Clothing / Cloth", "Skin", "Hair"], ans: 0 },
        { type: "mc",      q: "What is a <b>'ilo'</b>?", options: ["Tool / Device", "Food", "Place"], ans: 0 },
        { type: "builder", q: "Build: <b>'Phone (Speech tool).'</b>", correctSentence: "ilo toki", words: ["ilo", "toki", "pi", "moku", "kute"] },
        { type: "mc",      q: "Translate: <b>'sike'</b>", options: ["Circle / Ball / Wheel", "Square", "Line"], ans: 0 },
        
        // Space & Movement
        { type: "mc",      q: "Translate: <b>'anpa'</b>", options: ["Down / Bottom / Floor", "Up", "Side"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'sewi'</b>", options: ["Up / Top / Sky", "Down", "Inside"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'poka'</b>", options: ["Side / Next to", "Front", "Back"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'nasin'</b>", options: ["Way / Path / Method", "House", "Tree"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'weka'</b>", options: ["Away / Absent", "Here", "Near"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'lupa'</b>", options: ["Hole / Door", "Wall", "Floor"], ans: 0 },
        { type: "builder", q: "Build: <b>'Look back.'</b>", correctSentence: "o lukin e monsi", words: ["o", "lukin", "e", "monsi", "sinpin", "sewi"] },
        { type: "mc",      q: "What does <b>'tawa sewi'</b> mean?", options: ["Go up / Fly", "Go down", "Go home"], ans: 0 }
    ]
};

    // --- LESSON 17: Senses & Emotion ---
const LESSON_17 = {
    id: "17",
    type: "lesson",
    title: "Senses & Emotion",
    desc: "Feeling and communicating.",
    vocab: [
        { word: "pilin",  type: "content word", def: "Feeling, emotion, heart, touch, opinion.", ex: "pilin pona. (Good feeling.)" },
        { word: "olin",   type: "content word", def: "affection, appreciation, respect, compassion.", ex: "mi olin e sina. (I love you.)" },
        { word: "kute",   type: "content word", def: "Ear, hear, listen, obey.", ex: "o kute! (Listen!)" },
        { word: "kalama", type: "content word", def: "Sound, noise, voice, vibration, to produce a sound.", ex: "kalama suli. (Loud noise.)" },
        { word: "nimi",   type: "content word", def: "Word, name, define.", ex: "nimi mi li... (My name is...)" },
        { word: "unpa",   type: "content word", def: "Sexual activity, erotic.", ex: "unpa li musi. (Sex is fun.)" },
        { word: "mu",     type: "content word", def: "Animal noise (Woof, Meow, Moo).", ex: "soweli li toki e mu. (The animal says mu.)" },
        { word: "suwi",   type: "content word", def: "Pleasant sensory experiences, sweet, cute, fragrant.", ex: "soweli suwi. (Cute animal.)" },
        { word: "jaki",   type: "content word", def: "Unpleasant sensory experiences, dirty, gross, toxic.", ex: "telo jaki. (Dirty water.)" },
        { word: "nasa",   type: "content word", def: "Strange, weird, silly, crazy, drunk.", ex: "jan nasa. (Crazy/Silly person.)" },
        { word: "utala",  type: "content word", def: "Fight, compete, battle, challenge, struggle, competition, attack.", ex: "o utala ala. (Do not fight.)" },
        { word: "monsuta", type: "content word", def: "Fear, nervousness, dread, scary, monster.", ex: "mi monsuta. (I'm scared.)" }
    ],
    grammar: `
        <h3>Feelings</h3>
        <p><strong>mi pilin pona</strong> = I feel good / I am happy.</p>
    `,
    story: `
        <p><b>mi olin e mama mi.</b> (I love my parents.)</p>
        <p><b>o kute e kalama musi.</b> (Listen to the music.)</p>
    `,
    quiz: [
        { type: "builder", q: "Build: <b>'I love you.'</b>", correctSentence: "mi olin e sina", words: ["mi", "olin", "e", "sina", "pilin", "li"] },
        { type: "builder", q: "Build: <b>'My name is Jan.'</b>", correctSentence: "nimi mi li Jan", words: ["nimi", "mi", "li", "Jan", "e", "toki"] },
        { type: "builder", q: "Build: <b>'Listen to the sound.'</b>", correctSentence: "o kute e kalama", words: ["o", "kute", "e", "kalama", "li", "mu"] },
        { type: "mc",      q: "Translate: <b>'pilin'</b>", options: ["Feeling / Heart / Touch", "Thinking / Head", "Speaking"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'suwi'</b>", options: ["Sweet / Cute", "Sour", "Bitter"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'jaki'</b>", options: ["Dirty / Gross / Toxic", "Clean", "Funny"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Sound / Noise'</b>", options: ["kalama", "toki", "mu"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Weird / Crazy / Drunk'</b>", options: ["nasa", "pona", "ike"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'To fight / War'</b>", options: ["utala", "alasa", "pali"], ans: 0 },
        { type: "mc",      q: "What does <b>'mi pilin pona'</b> mean?", options: ["I feel good (Happy)", "I am a good person", "I touch good things"], ans: 0 },
        { type: "mc",      q: "What is <b>'telo nasa'</b>?", options: ["Crazy water (Alcohol)", "Dirty water", "Sweet water"], ans: 0 },
        { type: "mc",      q: "What is <b>'mu'</b>?", options: ["Any animal sound", "A cow", "Music"], ans: 0 },
        { type: "mc",      q: "Which is <b>INCORRECT</b>? (I love you)", options: ["mi olin e sina", "mi olin sina (Missing 'e')", "sina olin e mi"], ans: 1 },
        { type: "builder", q: "Build: <b>'Cute animal.'</b>", correctSentence: "soweli suwi", words: ["soweli", "suwi", "jaki", "li", "e"] },
        { type: "mc",      q: "Translate: <b>'jan utala'</b>", options: ["Soldier / Fighter", "Angry person", "Bad person"], ans: 0 }
    ]
};

// --- LESSON 18: Abstract Concepts I ---
const LESSON_18 = {
    id: "18",
    type: "lesson",
    title: "Abstract Concepts I",
    desc: "Change, sameness, and truth.",
    vocab: [
        { word: "ante",   type: "content word", def: "Different, other, changed, to modify, to transform.", ex: "ma ante. (Other land.)" },
        { word: "sin",    type: "content word", def: "New, fresh, repeat, update, additionally, another.", ex: "ilo sin. (New tool.)" },
        { word: "pini",   type: "content word", def: "finish, end, shut, close, quit, stop, past.", ex: "mi pini moku. (I finish eating.)" },
        { word: "pakala", type: "content word", def: "Broken, destroyed, mistake, hurt, fail.", ex: "ilo li pakala. (The tool is broken.)" },
        { word: "isipin", type: "content word", def: "to think, brainstorm, ponder.", ex: "mi isipin e seli moku. (I'm thinking about cooking.)"}
    ],
    grammar: `
        <h3>Time Modifiers</h3>
        <p><strong>pini</strong> can mark the past/completion: <br><em>mi pini lape.</em> (I finished sleeping.)</p>
    `,
    story: `
        <p><b>mi wile e ijo ante.</b> (I want a different thing.)</p>
        <p><b>ona li sama.</b> (They are the same.)</p>
    `,
    quiz: [
        { type: "builder", q: "Build: <b>'I finished eating.'</b>", correctSentence: "mi pini moku", words: ["mi", "pini", "moku", "kama", "li", "e"] },
        { type: "builder", q: "Build: <b>'The tool is broken.'</b>", correctSentence: "ilo li pakala", words: ["ilo", "li", "pakala", "pini", "sin", "e"] },
        { type: "builder", q: "Build: <b>'I stay here.'</b>", correctSentence: "mi awen lon ni", words: ["mi", "awen", "lon", "ni", "tawa", "e"] },
        { type: "mc",      q: "Translate: <b>'sama'</b>", options: ["Same / Similar", "Different", "New"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'ante'</b>", options: ["Different / Other", "Same", "Old"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'sin'</b>", options: ["New / Fresh", "Old", "Broken"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Mistake / Break / Accident'</b>", options: ["pakala", "ante", "ike"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Extra / Spice'</b>", options: ["namako", "sin", "pini"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'End / Finished / Past'</b>", options: ["pini", "awen", "kama"], ans: 0 },
        { type: "mc",      q: "What does <b>'tenpo pini'</b> mean?", options: ["Past time (History)", "Future time", "Now"], ans: 0 },
        { type: "mc",      q: "What does <b>'tenpo kama'</b> mean?", options: ["Coming time (Future)", "Past time", "Now"], ans: 0 },
        { type: "mc",      q: "How do you say <b>'Another way'</b>?", options: ["nasin ante", "nasin sama", "nasin sin"], ans: 0 },
        { type: "mc",      q: "Which is <b>INCORRECT</b>? (I finish eating)", options: ["mi moku pini", "mi pini moku", "mi pini e moku"], ans: 0 },
        { type: "builder", q: "Build: <b>'New house.'</b>", correctSentence: "tomo sin", words: ["tomo", "sin", "namako", "li", "e"] },
        { type: "mc",      q: "Translate: <b>'ona li sama mi'</b>", options: ["They are like me", "They are me", "They like me"], ans: 0 }
    ]
};

// --- LESSON 19: Abstract Concepts II ---
const LESSON_19 = {
    id: "19",
    type: "lesson",
    title: "Abstract Concepts II",
    desc: "Exchange and causality.",
    vocab: [
        { word: "pana",   type: "content word", def: "To give, send, provide, submit, release.", ex: "mi pana e ijo. (I give a thing.)" },
        { word: "jo",     type: "content word", def: "To have, hold, carry, contain.", ex: "mi jo e ilo. (I have a tool.)" },
        { word: "lanpan", type: "content word", def: "To take, seize, steal, catch.", ex: "ona li lanpan e kili. (He stole the fruit.)" },
        { word: "mani",   type: "content word", def: "Money, think of value, large domesticated animal, wealth.", ex: "mi jo e mani. (I have money.)" },
        { word: "esun",   type: "content word", def: "Market, shop, trade, business.", ex: "tomo esun. (Shop/Market.)" },
        { word: "tan",    type: "content word/preposition", def: "From, because of, cause, origin.", ex: "mi kama tan ma. (I come from the land.)" },
        { word: "usawi",  type: "content word", def: "Magic, supernatural, occult, incomprehensible", ex: "ona utala mi kepeken toki usawi. (they attacked me with enchantments.)" }
    ],
    grammar: `
        <h3>Cause and Effect</h3>
        <p><strong>tan</strong> marks the origin. <br><em>mi lape tan ni.</em> (I sleep because of this.)</p>
    `,
    story: `
        <p><b>mi pana e mani tawa sina.</b> (I give money to you.)</p>
        <p><b>ona li alasa e sona.</b> (She seeks knowledge.)</p>
    `,
    quiz: [
        { type: "builder", q: "Build: <b>'I give money.'</b>", correctSentence: "mi pana e mani", words: ["mi", "pana", "e", "mani", "lanpan", "li"] },
        { type: "builder", q: "Build: <b>'I have a house.'</b>", correctSentence: "mi jo e tomo", words: ["mi", "jo", "e", "tomo", "esun", "li"] },
        { type: "builder", q: "Build: <b>'I cry because of this.'</b>", correctSentence: "mi telo oko tan ni", words: ["mi", "telo", "oko", "tan", "ni", "li"] },
        { type: "mc",      q: "Translate: <b>'tan'</b>", options: ["Because / From", "To", "With"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'mani'</b>", options: ["Money / Wealth", "Paper", "Stone"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'lanpan'</b>", options: ["Steal / Take / Seize", "Give", "Buy"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Market / Shop'</b>", options: ["esun", "tomo", "mani"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'To have / Hold'</b>", options: ["jo", "pana", "alasa"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'To give / Send'</b>", options: ["pana", "jo", "kama"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'tan seme?'</b>", options: ["Why? (From what?)", "Where?", "How?"], ans: 0 },
        { type: "mc",      q: "What is a <b>'tomo esun'</b>?", options: ["Shop / Store", "Bank", "House"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'mi kama tan ma'</b>", options: ["I come from the country", "I go to the country", "I like the country"], ans: 0 },
        { type: "mc",      q: "Which is <b>INCORRECT</b>? (I have money)", options: ["mi jo mani (Missing 'e')", "mi jo e mani", "mi mani (I am money)"], ans: 0 },
        { type: "builder", q: "Build: <b>'He stole the food.'</b>", correctSentence: "ona li lanpan e moku", words: ["ona", "li", "lanpan", "e", "moku", "pana"] },
        { type: "mc",      q: "Translate: <b>'ilo alasa'</b>", options: ["Hunting tool / Weapon", "Cooking tool", "Searching person"], ans: 0 }
    ]
};

// --- LESSON 20: Modern Life ---
const LESSON_20 = {
    id: "20",
    type: "lesson",
    title: "Modern Life",
    desc: "Newer words for modern concepts (Ku Suli).",
    vocab: [
        { word: "misikeke", type: "content word", def: "Medicine, cure, medical.", ex: "tomo misikeke. (Hospital.)" },
        { word: "linluwi",  type: "content word", def: "Network, internet, web, connection.", ex: "kulupu linluwi. (Online community.)" },
        { word: "jasima",   type: "content word", def: "Mirror, reflect, reverse.", ex: "ilo jasima. (Mirror.)" },
        { word: "majuna",   type: "content word", def: "Old, ancient.", ex: "jan majuna. (Old person.)" },
        { word: "kipisi",   type: "content word", def: "To cut, split, slice.", ex: "ilo kipisi. (Knife/Scissors.)" },
        { word: "meso",     type: "content word", def: "Middle, average, medium.", ex: "lon meso. (In the middle.)" },
        { word: "a",        type: "particle", def: "Ah! Ha!", ex: "pona a! (Good, wow!)" }
    ],
    grammar: `
        <h3>Course Complete!</h3>
        <p>You have now seen every word in the standard reference. Go forth and speak good!</p>
    `,
    story: `
        <p><b>mi kepeken ilo linluwi.</b> (I use the internet.)</p>
        <p><b>pona a!</b> (Yay!)</p>
    `,
    quiz: [
        { type: "builder", q: "Build: <b>'Internet (Web group).'</b>", correctSentence: "kulupu linluwi", words: ["kulupu", "linluwi", "tomo", "ilo", "li"] },
        { type: "builder", q: "Build: <b>'Good job! (Exclamation)'</b>", correctSentence: "pona a", words: ["pona", "a", "ike", "kin", "li"] },
        { type: "builder", q: "Build: <b>'Cut the fruit.'</b>", correctSentence: "o kipisi e kili", words: ["o", "kipisi", "e", "kili", "linluwi", "telo"] },
        { type: "mc",      q: "Translate: <b>'misikeke'</b>", options: ["Medicine / Cure", "Magic", "Science"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'jasima'</b>", options: ["Mirror / Reflection", "Screen", "Window"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'majuna'</b>", options: ["Old / Ancient", "New", "Young"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Internet / Network'</b>", options: ["linluwi", "kon", "kulupu"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'To cut / Split'</b>", options: ["kipisi", "tu", "pakala"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'Middle / Average'</b>", options: ["meso", "insa", "pini"], ans: 0 },
        { type: "mc",      q: "What is a <b>'tomo misikeke'</b>?", options: ["Hospital", "Pharmacy", "Doctor's house"], ans: 0 },
        { type: "mc",      q: "What is an <b>'ilo kipisi'</b>?", options: ["Knife / Scissors", "Saw", "Both"], ans: 2 },
        { type: "mc",      q: "What does <b>'a'</b> add to a sentence?", options: ["Emotion / Emphasis", "Question", "Negation"], ans: 0 },
        { type: "mc",      q: "Which is <b>INCORRECT</b>? (Old house)", options: ["tomo majuna", "tomo pi majuna", "tomo li majuna (Sentence)"], ans: 1 },
        { type: "builder", q: "Build: <b>'Look in the mirror.'</b>", correctSentence: "o lukin e jasima", words: ["o", "lukin", "e", "jasima", "meso", "mi"] },
        { type: "mc",      q: "Translate: <b>'lon meso'</b>", options: ["In the middle", "At the end", "At the start"], ans: 0 }
    ]
};

// --- CHECKPOINT 5: Mastery ---
const CHECKPOINT_05 = {
    id: "c5",
    type: "test",
    title: "Checkpoint 5: Mastery",
    desc: "Test your mastery of Lessons 17 through 20 (Abstract, Emotion, Trade, Modern).",
    grammar: `<h3>Final Review</h3><p><strong>Abstract:</strong> <em>tan</em> (because), <em>ante</em> (different).<br><strong>Emotion:</strong> <em>pilin</em> (heart/feeling).</p>`,
    quiz: [
        // Senses & Emotion
        { type: "mc",      q: "Translate: <b>'pilin'</b>", options: ["Feeling / Heart", "Head", "Hand"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'olin'</b>", options: ["Love", "Hate", "Indifference"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'kute'</b>", options: ["Hear / Listen / Ear", "See", "Smell"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'kalama'</b>", options: ["Sound / Noise", "Silence", "Picture"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'suwi'</b>", options: ["Sweet / Cute", "Sour", "Bitter"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'jaki'</b>", options: ["Dirty / Gross", "Clean", "Nice"], ans: 0 },
        { type: "builder", q: "Build: <b>'I feel good.'</b>", correctSentence: "mi pilin pona", words: ["mi", "pilin", "pona", "e", "li", "olin"] },
        { type: "mc",      q: "What is <b>'mu'</b>?", options: ["Animal sound", "Music", "Speech"], ans: 0 },
        
        // Abstract Concepts I
        { type: "mc",      q: "Translate: <b>'ante'</b>", options: ["Different / Other", "Same", "One"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'sama'</b>", options: ["Same / Similar", "Different", "Opposite"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'sin'</b>", options: ["New / Fresh", "Old", "Broken"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'pini'</b>", options: ["End / Finished", "Start", "Middle"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'pakala'</b>", options: ["Break / Mistake", "Fix", "Good"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'awen'</b>", options: ["Stay / Wait / Keep", "Go", "Change"], ans: 0 },
        { type: "builder", q: "Build: <b>'The new tool.'</b>", correctSentence: "ilo sin", words: ["ilo", "sin", "namako", "li", "e"] },
        
        // Abstract Concepts II & Trade
        { type: "mc",      q: "Translate: <b>'pana'</b>", options: ["Give / Send", "Take", "Keep"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'jo'</b>", options: ["Have / Hold", "Give", "Drop"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'alasa'</b>", options: ["Hunt / Gather / Try", "Sleep", "Run"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'lanpan'</b>", options: ["Steal / Seize", "Give", "Buy"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'mani'</b>", options: ["Money / Wealth", "Paper", "Rock"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'esun'</b>", options: ["Shop / Market", "House", "School"], ans: 0 },
        { type: "mc",      q: "What is <b>'tan'</b>?", options: ["Because / From", "To", "With"], ans: 0 },
        { type: "builder", q: "Build: <b>'I give money.'</b>", correctSentence: "mi pana e mani", words: ["mi", "pana", "e", "mani", "esun", "li"] },
        
        // Modern Words (Ku)
        { type: "mc",      q: "Translate: <b>'misikeke'</b>", options: ["Medicine", "Magic", "Science"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'linluwi'</b>", options: ["Internet / Network", "Rope", "Line"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'jasima'</b>", options: ["Mirror / Reflect", "Window", "Door"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'kipisi'</b>", options: ["Cut / Split", "Hit", "Break"], ans: 0 },
        { type: "builder", q: "Build: <b>'Hospital (Medicine House).'</b>", correctSentence: "tomo misikeke", words: ["tomo", "misikeke", "linluwi", "li", "e"] },
        { type: "mc",      q: "What does <b>'a'</b> mean?", options: ["Emotion / Emphasis", "Question", "No"], ans: 0 },
        { type: "mc",      q: "Translate: <b>'majuna'</b>", options: ["Old / Ancient", "New", "Young"], ans: 0 }
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
    LESSON_01, LESSON_02, LESSON_03, LESSON_04, CHECKPOINT_01,
    LESSON_05, LESSON_06, LESSON_07, LESSON_08, CHECKPOINT_02,
    LESSON_09, LESSON_10, LESSON_11, LESSON_12, CHECKPOINT_03,
    LESSON_13, LESSON_14, LESSON_15, LESSON_16, CHECKPOINT_04,
    LESSON_17, LESSON_18, LESSON_19, LESSON_20, CHECKPOINT_05,
    FINAL_EXAM
];

// =========================================
// 4. MEDIA LIBRARY
// =========================================
const mediaLibrary = [
    {
        id: "r1",
        type: "text",
        title: "jan Telakoman (lipu tenpo - nanpa akesi)",
        tpTitle: "lipu tenpo o kama pona",
        level: "Medium",
        text: `<p>toki pona li seme? toki pona li nasin toki suli anu toki lili suwi taso? mi mute li sona e ni: toki pona li ijo suli li nasin pona. taso jan mute li sona ala e ni. tenpo pini lili la mi mute li toki e ni: kulupu ISO li pana ala e nimi lili ilo tawa toki pona tan seme? kulupu ISO la toki pona li toki suli ala tan seme? jan mute li kepeken toki pona. taso lipu anu sitelen tawa anu ijo sama ni la ijo pi nanpa lili li lon toki pona.</p>

<p>ni la mi mute li toki e ni: mi o pali e lipu tenpo! <span class="vocab-tip" data-tooltip= "periodical magazine in toki pona">lipu tenpo</span> li seme? lipu tenpo li lipu sama ni: kulupu pi jan sitelen li pali e lipu sin lon tenpo mute. lipu sin ale pi lipu tenpo li jo e nimi sama, taso lipu sin ale li jo e nanpa ante. lipu tenpo pi sona sin li ken pana e lipu sin lon tenpo suno ale. lipu tenpo pi nasin ante li ken pana e lipu sin lon tenpo mun ale anu tenpo sike suno ale.</p>

<p>lipu tenpo li ken pona mute tawa toki pona! jan pi toki pona li pali e lipu tenpo la ken la kulupu ISO li lukin e ni li toki e ni: toki pona li nasin toki suli! taso <span class="vocab-tip" data-tooltip= "small defining tool">nimi lili ilo</span> pi kulupu ISO li suli ala. lipu tenpo li ken pana e ijo ante pona tawa toki pona.</p>

<p>jan wan li taso la ona li ken pana e lipu. taso ona li ken ala pali e lipu mute. ante la lipu ona li ken weka. lipu ona li awen la jan ante li ken weka e sona ona. taso lipu tenpo la jan pona mute pi toki pona li kama kulupu sitelen. jan ale lon kulupu sitelen li kepeken e wawa ona tawa ijo sama. jan ale li kepeken e sona pona li kepeken e tenpo wile tawa ni: ona li pana e ijo pini pi pona mute. lipu wan pi lipu nanpa li awen lon tenpo suli. jan mute li lukin e ona li kama sona e ijo tan ona lon tenpo suli.</p>

<p>ni li lipu tenpo nanpa wan lon toki pona. taso mi mute li toki ala e ni: mi mute taso li ken pali e lipu tenpo. sina o pali e lipu tenpo ante! seme li suli tawa sina? seme pi pali sina li mute a? moku pona anu nasin pilin anu sitelen musi li pona tawa sina, anu seme? o pali e lipu tenpo tawa ona!</p>

<p>lipu tenpo sina la sina ken pali e lipu sin lon tenpo suno ale anu <span class="vocab-tip" data-tooltip= "year">sike suno</span> ale. ni li suli ala. ken la lipu sina li lili li jo e lipu lili pi nanpa lili taso. ale li pona. ijo suli li ni: o pana e ijo pona lon toki pona. sina pali e ni la o pana e ona tawa mi mute, o pana e ona tawa jan ale!</p>`,
        
        translation: `<p>What is Toki Pona? Is Toki Pona a major language system, or just a cute little talk? We know this: Toki Pona is a significant thing and a good system. But many people do not know this. A short time ago, we said this: Why does the ISO group not give a code (small tool name) to Toki Pona? Does the ISO group think Toki Pona is not a major language? Many people use Toki Pona. However, regarding books, films, or similar things, there are few numbered items in Toki Pona.</p>
<p>Therefore, we said this: We should create a periodical (lipu tenpo)! What is a periodical? A periodical is a document like this: A group of writers creates a new document many times. Every new issue of the periodical has the same name, but every new issue has a different number. A periodical of new knowledge might release a new document every day. A periodical of different ways might release a new document every month or every year.</p>
<p>A periodical can be very good for Toki Pona! If Toki Pona speakers create a periodical, perhaps the ISO group will look at this and say: Toki Pona is a major language! But, the ISO group's code is not the big thing. A periodical can provide other good things for Toki Pona.</p>
<p>If there is only one person, they can release a book. But they cannot create many books. Otherwise, their books might disappear. If their book stays, other people might forget their knowledge. However, with a periodical, many good friends of Toki Pona become a writing group. Everyone in the writing group uses their power for the same thing. Everyone uses good knowledge and uses willing time for this: they release a finished thing of great goodness.</p>
<p>One issue of a numbered document stays for a long time. Many people read it and learn things from it for a long time.</p>
<p>This is the first lipu tenpo in Toki Pona. But we do not say this: Only we can create a periodical. You should create a different periodical! What is important to you? Which of your works are plentiful? Is good food, or philosophy, or comics good to you, or something else? Create a periodical for that!</p>
<p>As for your periodical, you can create a new issue every day or every year. This is not important. Maybe your document is small and has only a few small pages. Everything is good. The important thing is this: Give good things in Toki Pona. If you do this, give it to us, give it to everyone!</p>`,
        quiz: [
  {
    type: "mc",
    q: "jan mute li pilin e ni: toki pona li seme?",
    options: [
      "nasin toki suli",
      "toki lili suwi taso",
      "ilo pi kulupu ISO",
      "moku pona"
    ],
    ans: 0
  },
  {
    type: "mc",
    q: "jan sitelen li toki e kulupu seme?",
    options: [
      "kulupu ISO",
      "kulupu pi lipu tenpo",
      "jan Telakoman",
      "kulupu UN"
    ],
    ans: 1
  },
  {
    type: "mc",
    q: "lipu tenpo li seme?",
    options: [
      "jan wan li pali e lipu wan taso",
      "lipu li jo e nanpa lili",
      "kulupu li pali e lipu sin lon tenpo mute",
      "lipu pi nasin pilin taso"
    ],
    ans: 2
  },
  {
    type: "mc",
    q: "lipu tenpo pi 'sona sin' en lipu tenpo pi 'nasin ante' li ante tan seme?",
    options: [
      "tenpo pana",
      "jan pali",
      "ma",
      "kalama"
    ],
    ans: 1
  },
  {
    type: "mc",
    q: "jan sitelen li wile pali e lipu tenpo tan ijo ISO. ona li wile pali e lipu tan seme kin?",
    options: [
      "ona li wile e mani",
      "lipu tenpo li ken pana e ijo pona tawa toki pona",
      "ona li wile e moku",
      "ona li wile ala pali"
    ],
    ans: 1
  },
  {
    type: "mc",
    q: "jan wan li pali e lipu la ike li seme?",
    options: [
      "ona li ken ala pali e lipu mute",
      "ona li suli mute",
      "lipu ona li pona mute",
      "jan ante li lukin mute e lipu ona"
    ],
    ans: 0
  },
  {
    type: "mc",
    q: "kulupu sitelen li pona tan seme?",
    options: [
      "jan ale li pali e ijo ante",
      "jan ale li lape",
      "jan ale li kepeken e wawa tawa ijo sama",
      "ona li jo e mani mute"
    ],
    ans: 2
  },
  {
    type: "mc",
    q: "lipu ni li seme?",
    options: [
      "lipu tenpo nanpa wan",
      "lipu tenpo nanpa tu",
      "lipu pi kulupu ISO",
      "lipu pi jan Telakoman taso"
    ],
    ans: 0
  },
  {
    type: "mc",
    q: "jan sitelen li toki e ijo seme tawa pali lipu?",
    options: [
      "moku pona, nasin pilin, sitelen musi",
      "ilo utala, moli, pakala",
      "mani, esun, tomo",
      "kalama musi taso"
    ],
    ans: 0
  },
  {
    type: "mc",
    q: "ijo suli li seme?",
    options: [
      "lipu li suli",
      "sina pana e lipu lon tenpo suno ale",
      "sina pana e ijo pona lon toki pona",
      "lipu li jo e nanpa mute"
    ],
    ans: 2
  }
]
    },
    {
        id: "r2",
        title: "jan Telakoman (lipu tenpo - nanpa akesi)",
        tpTitle: "tenpo pini pi toki pona",
        level: "Easy",
        text: `<p>open la (2001) jan Sonja li pana e lipu tawa jan ale lon linluwi. lipu ni la ona li pana e sona pi toki sin. nimi pi toki sin ni li toki pona. </p>
               <p>tenpo kama ni la kulupu pi toki pona li kama lon. jan mute li kama sona e toki pona. jan Sonja en jan kulupu li toki e ijo mute pi toki pona. ona mute li pali e nimi sin li ante e nimi li pali e nasin toki sin tawa toki pona. ni li tenpo open pi toki pona. </p>
               <p>tenpo sike kama la jan Sonja li pana e lipu pu tawa ma ale. lipu ni la jan Sonja li pana e nasin ona pi toki pona. jan mute li kepeken toki pona lon nasin ante lili. taso tenpo kama ni la jan li ken toki e ni: nasin toki mi li weka mute anu weka lili tan lipu pu.</p>`,
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
        id: "a1",
        type: "audio",
        title: "Podcast: The Good Path",
        tpTitle: "kalama: nasin pona",
        level: "Medium",
        src: "assets/audio/podcast_01.mp3",
        text: `jan o, kute! tenpo ni la mi toki e nasin pona.
        nasin pona li simple. ona li jo ala e ike.
        sina wile e pilin pona la, o lukin e ijo lili lon poka sina.`,
        translation: `People, listen! Right now I am talking about the simple path (Toki Pona philosophy).
        The simple path is simple. It has no negativity.
        If you want a good feeling, look at the small things beside you.`,
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
