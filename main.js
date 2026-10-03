/* =========================================================
   0. Supabase config
   ========================================================= */
const SUPABASE_URL = "https://ehxqdmbmqhzwsrnumfhe.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_x8MDNhldR8XFzOig9pUKZw_qe0AKSWP";
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


/* =========================================================
   1. Scroll effects
   ========================================================= */
const nav = document.getElementById("nav");
const bar = document.getElementById("progress");
const parallax = document.querySelectorAll("[data-speed]");

addEventListener("scroll", () => {
  const y = scrollY;
  nav.classList.toggle("scrolled", y > 40);
  bar.style.width =
    (y / (document.body.scrollHeight - innerHeight)) * 100 + "%";

  if (y < innerHeight * 1.2)
    parallax.forEach(
      el => (el.style.transform = `translateY(${y * el.dataset.speed}px)`)
    );
}, { passive: true });

const io = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach(el => io.observe(el));

const stars = document.getElementById("stars");

for (let i = 0; i < 40; i++) {
  const s = document.createElement("i");
  s.className = "star";
  s.style.cssText =
    `left:${Math.random() * 100}%;` +
    `top:${Math.random() * 100}%;` +
    `animation-delay:${Math.random() * 4}s;` +
    `animation-duration:${3 + Math.random() * 4}s`;

  stars.appendChild(s);
}


/* ---------- Feature card 3D tilt on hover (desktop only) ---------- */
if (matchMedia("(hover:hover)").matches) {
  document.querySelectorAll(".tilt-card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;

      card.style.transform =
        `rotateY(${px * 10}deg) ` +
        `rotateX(${-py * 10}deg) ` +
        `translateY(-6px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}


/* =========================================================
   2. i18n
   ========================================================= */
const I18N = {
  en: {
    nav_features: "Features",
    nav_read: "Read",
    eyebrow: "The Word, illuminated",
    h1: "Understand Scripture,<br><em>verse by verse.</em>",
    sub: "Read the whole Bible and let AI explain, summarize and connect every passage.",
    cta: "Start reading",
    scroll: "scroll ↓",

    feat_title: "Study with clarity",
    f1t: "Explain",
    f1p: "Plain-language meaning, verse by verse.",
    f2t: "Summarize",
    f2p: "Any chapter distilled into a few sentences.",
    f3t: "Context",
    f3p: "Author, audience, history and setting.",
    f4t: "Cross-references",
    f4p: "Related passages across the whole Bible.",

    reader_title: "The Reader",
    chapter: "Chapter",
    view_en: "English",
    view_ne: "Nepali",
    view_both: "Both",

    prev: "← Previous",
    next: "Next →",
    bookmark: "☆ Save",
    bookmarked: "★ Saved",

    hint: "Tap verses to select them. None selected = whole chapter. Tap the ✦ button to ask AI.",

    chat_title: "Ask Lumen",
    ai_empty: "Choose an action to study this passage.",
    ask_ph: "Ask about this passage…",
    ask_btn: "Ask",
    ai_hint: "AI is a study aid. Traditions differ on many passages.",

    footer: "Made with ✦ · Public-domain and openly licensed texts",

    loading: "Loading…",
    load_fail: "Couldn't load this chapter. Check your connection.",
    thinking: "Thinking",
    backend_err: "AI backend isn't responding. Please try again.",
    no_ne: "No Nepali Bible text was found in the API, showing English only.",

    missing: "Not available in this translation.",
    need_text: "No text to study yet.",

    sign_in: "Sign in",
    sign_up: "Create account",
    sign_out: "Sign out",
    email: "Email",
    password: "Password",

    settings_title: "Settings",
    font_size: "Text size",
    signed_in_as: "Signed in as",

    sync_hint_off:
      "Sign in to save your settings and reading position across devices.",

    sync_hint_on:
      "Your settings sync to your account automatically.",

    auth_err_generic:
      "Something went wrong. Please try again.",

    need_login_bookmark:
      "Sign in to save verses.",

    confirm_sent:
      "Account created. Check your inbox and click the confirmation link, then sign in here.",

    resend_confirm:
      "Resend confirmation email",

    resend_sent:
      "Confirmation email sent again. Check your inbox.",

    unconfirmed_login:
      "This email hasn't been confirmed yet. Check your inbox, or resend below.",

    acts: {
      Explain: "Explain",
      Summarize: "Summarize",
      Context: "Context",
      "Key words": "Key words",
      "Cross-refs": "Cross-refs",
      Simple: "Simple",
      Reflect: "Reflect"
    }
  },

  ne: {
    nav_features: "विशेषताहरू",
    nav_read: "पढ्नुहोस्",

    eyebrow: "वचन, उज्यालोमा",
    h1: "शास्त्र बुझ्नुहोस्,<br><em>पद-पदमा।</em>",

    sub:
      "सम्पूर्ण बाइबल पढ्नुहोस् र AI लाई हरेक खण्डको व्याख्या, सारांश र सम्बन्ध देखाउन दिनुहोस्।",

    cta: "पढ्न सुरु गर्नुहोस्",
    scroll: "तल स्क्रोल गर्नुहोस् ↓",

    feat_title: "स्पष्टताका साथ अध्ययन गर्नुहोस्",

    f1t: "व्याख्या",
    f1p: "प्रत्येक पदको सरल भाषामा अर्थ।",

    f2t: "सारांश",
    f2p: "कुनै पनि अध्यायलाई केही वाक्यमा।",

    f3t: "पृष्ठभूमि",
    f3p: "लेखक, श्रोता, इतिहास र परिवेश।",

    f4t: "सम्बन्धित पदहरू",
    f4p: "सम्पूर्ण बाइबलका जोडिएका खण्डहरू।",

    reader_title: "पाठक",
    chapter: "अध्याय",

    view_en: "अंग्रेजी",
    view_ne: "नेपाली",
    view_both: "दुवै",

    prev: "← अघिल्लो",
    next: "अर्को →",

    bookmark: "☆ सेभ",
    bookmarked: "★ सेभ भयो",

    hint:
      "पदहरू छान्न थिच्नुहोस्। केही नछानेमा सम्पूर्ण अध्याय। AI लाई सोध्न ✦ थिच्नुहोस्।",

    chat_title: "Lumen लाई सोध्नुहोस्",

    ai_empty:
      "यो खण्डको अध्ययन गर्न एउटा कार्य छान्नुहोस्।",

    ask_ph:
      "यस खण्डबारे सोध्नुहोस्…",

    ask_btn:
      "सोध्नुहोस्",

    ai_hint:
      "AI अध्ययनको सहायक मात्र हो। धेरै खण्डमा परम्पराहरू फरक हुन्छन्।",

    footer:
      "✦ सँग बनाइएको · सार्वजनिक र खुला इजाजतका पाठहरू",

    loading:
      "लोड हुँदैछ…",

    load_fail:
      "यो अध्याय लोड गर्न सकिएन। इन्टरनेट जाँच गर्नुहोस्।",

    thinking:
      "सोच्दै",

    backend_err:
      "AI ब्याकइन्डले प्रतिक्रिया दिइरहेको छैन। फेरि प्रयास गर्नुहोस्।",

    no_ne:
      "API मा नेपाली बाइबल पाठ फेला परेन, अंग्रेजी मात्र देखाइँदै छ।",

    missing:
      "यो अनुवादमा उपलब्ध छैन।",

    need_text:
      "अध्ययन गर्न पाठ छैन।",

    sign_in:
      "साइन इन",

    sign_up:
      "खाता बनाउनुहोस्",

    sign_out:
      "साइन आउट",

    email:
      "इमेल",

    password:
      "पासवर्ड",

    settings_title:
      "सेटिङ",

    font_size:
      "पाठको आकार",

    signed_in_as:
      "यस रूपमा साइन इन गरिएको",

    sync_hint_off:
      "उपकरणहरूमा सेटिङ र पढाइ सुरक्षित गर्न साइन इन गर्नुहोस्।",

    sync_hint_on:
      "तपाईंको सेटिङ स्वतः खातामा सिंक हुन्छ।",

    auth_err_generic:
      "समस्या भयो। फेरि प्रयास गर्नुहोस्।",

    need_login_bookmark:
      "पद सेभ गर्न साइन इन गर्नुहोस्।",

    confirm_sent:
      "खाता बनियो। आफ्नो इमेल जाँच गरी पुष्टि लिंकमा क्लिक गर्नुहोस्, त्यसपछि यहाँ साइन इन गर्नुहोस्।",

    resend_confirm:
      "पुष्टि इमेल फेरि पठाउनुहोस्",

    resend_sent:
      "पुष्टि इमेल फेरि पठाइयो। इनबक्स जाँच गर्नुहोस्।",

    unconfirmed_login:
      "यो इमेल अझै पुष्टि भएको छैन। इनबक्स जाँच गर्नुहोस् वा तल पुनः पठाउनुहोस्।",

    acts: {
      Explain: "व्याख्या",
      Summarize: "सारांश",
      Context: "पृष्ठभूमि",
      "Key words": "मुख्य शब्द",
      "Cross-refs": "सम्बन्धित पद",
      Simple: "सरल",
      Reflect: "मनन"
    }
  }
};

let lang = localStorage.getItem("lang") || "en";

const t = k => I18N[lang][k];


/* =========================================================
   3. Books
   ========================================================= */
const BOOKS = [
  ["GEN","Genesis","उत्पत्ति",50],
  ["EXO","Exodus","प्रस्थान",40],
  ["LEV","Leviticus","लेवी",27],
  ["NUM","Numbers","गन्ती",36],
  ["DEU","Deuteronomy","व्यवस्था",34],

  ["JOS","Joshua","यहोशू",24],
  ["JDG","Judges","न्यायकर्ता",21],
  ["RUT","Ruth","रूथ",4],
  ["1SA","1 Samuel","१ शमूएल",31],
  ["2SA","2 Samuel","२ शमूएल",24],

  ["1KI","1 Kings","१ राजा",22],
  ["2KI","2 Kings","२ राजा",25],
  ["1CH","1 Chronicles","१ इतिहास",29],
  ["2CH","2 Chronicles","२ इतिहास",36],
  ["EZR","Ezra","एज्रा",10],

  ["NEH","Nehemiah","नहेमिया",13],
  ["EST","Esther","एस्तर",10],
  ["JOB","Job","अय्यूब",42],
  ["PSA","Psalms","भजनसंग्रह",150],
  ["PRO","Proverbs","हितोपदेश",31],

  ["ECC","Ecclesiastes","उपदेशक",12],
  ["SNG","Song of Solomon","श्रेष्ठगीत",8],
  ["ISA","Isaiah","यशैया",66],
  ["JER","Jeremiah","यर्मिया",52],
  ["LAM","Lamentations","विलाप",5],

  ["EZK","Ezekiel","यहेजकेल",48],
  ["DAN","Daniel","दानिय्येल",12],
  ["HOS","Hosea","होशे",14],
  ["JOL","Joel","योएल",3],
  ["AMO","Amos","आमोस",9],

  ["OBA","Obadiah","ओबदिया",1],
  ["JON","Jonah","योना",4],
  ["MIC","Micah","मीका",7],
  ["NAM","Nahum","नहूम",3],
  ["HAB","Habakkuk","हबकूक",3],

  ["ZEP","Zephaniah","सपन्याह",3],
  ["HAG","Haggai","हाग्गै",2],
  ["ZEC","Zechariah","जकरिया",14],
  ["MAL","Malachi","मलाकी",4],

  ["MAT","Matthew","मत्ती",28],
  ["MRK","Mark","मर्कूस",16],
  ["LUK","Luke","लूका",24],
  ["JHN","John","यूहन्ना",21],
  ["ACT","Acts","प्रेरित",28],

  ["ROM","Romans","रोमी",16],
  ["1CO","1 Corinthians","१ कोरिन्थी",16],
  ["2CO","2 Corinthians","२ कोरिन्थी",13],
  ["GAL","Galatians","गलाती",6],
  ["EPH","Ephesians","एफेसी",6],

  ["PHP","Philippians","फिलिप्पी",4],
  ["COL","Colossians","कलस्सी",4],
  ["1TH","1 Thessalonians","१ थेसलोनिकी",5],
  ["2TH","2 Thessalonians","२ थेसलोनिकी",3],

  ["1TI","1 Timothy","१ तिमोथी",6],
  ["2TI","2 Timothy","२ तिमोथी",4],
  ["TIT","Titus","तीतस",3],
  ["PHM","Philemon","फिलेमोन",1],
  ["HEB","Hebrews","हिब्रू",13],

  ["JAS","James","याकूब",5],
  ["1PE","1 Peter","१ पत्रुस",5],
  ["2PE","2 Peter","२ पत्रुस",3],
  ["1JN","1 John","१ यूहन्ना",5],
  ["2JN","2 John","२ यूहन्ना",1],

  ["3JN","3 John","३ यूहन्ना",1],
  ["JUD","Jude","यहूदा",1],
  ["REV","Revelation","प्रकाश",22]
];


/* =========================================================
   4. Bible API
   ========================================================= */
const API = "https://bible.helloao.org/api/";

const $ = id => document.getElementById(id);

const bookSel = $("book");
const chSel = $("chapter");
const viewSel = $("view");
const tEn = $("tEn");
const tNe = $("tNe");

let data = {
  en: [],
  ne: []
};

let selected = new Set();

let hasNepali = false;

let currentRef = "";

let bookmarked = new Set();

const cache = new Map();


async function loadTranslations() {
  try {
    const r = await fetch(API + "available_translations.json");
    const d = await r.json();

    const list = d.translations || d;

    const name = x =>
      x.englishName || x.name || x.id;

    const en = list.filter(
      x => x.language === "eng"
    );

    const ne = list.filter(
      x =>
        ["npi", "nep", "ne"].includes(x.language) ||
        /nepal/i.test(
          x.languageEnglishName ||
          x.languageName ||
          ""
        )
    );

    en.sort(
      (a, b) =>
        a.id === "BSB"
          ? -1
          : b.id === "BSB"
            ? 1
            : 0
    );

    en.forEach(
      x => tEn.add(new Option(name(x), x.id))
    );

    ne.forEach(
      x => tNe.add(new Option(name(x), x.id))
    );

    hasNepali = ne.length > 0;

  } catch (e) {
    tEn.add(new Option("BSB", "BSB"));
  }

  if (!hasNepali) {
    tNe.hidden = true;

    [...viewSel.options].forEach(o => {
      if (o.value !== "en")
        o.disabled = true;
    });

    viewSel.value = "en";

    showNotice(t("no_ne"));
  }

  tEn.hidden = tEn.options.length < 2;
  tNe.hidden = tNe.options.length < 2;
}


function showNotice(msg) {
  const n = $("notice");
  n.textContent = msg;
  n.hidden = !msg;
}


async function getChapter(tid, book, ch) {
  const key = `${tid}/${book}/${ch}`;

  if (cache.has(key))
    return cache.get(key);

  const r = await fetch(
    `${API}${tid}/${book}/${ch}.json`
  );

  if (!r.ok)
    throw new Error("missing");

  const d = await r.json();

  const content =
    (d.chapter || d).content || [];

  const verses = [];

  content.forEach(it => {
    if (it.type !== "verse")
      return;

    const text = (it.content || [])
      .map(
        p =>
          typeof p === "string"
            ? p
            : (p && p.text) || ""
      )
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();

    verses.push({
      n: it.number,
      t: text
    });
  });

  cache.set(key, verses);

  return verses;
}


async function loadChapter(skipSave) {
  const b = BOOKS[bookSel.value];
  const ch = chSel.value;
  const view = viewSel.value;

  currentRef =
    `${lang === "ne" ? b[2] : b[1]} ${ch}`;

  $("ref").textContent = t("loading");

  $("verses").innerHTML = "";

  selected.clear();

  $("verses").scrollTop = 0;

  const wantEn = view !== "ne";
  const wantNe = view !== "en" && hasNepali;

  const [en, ne] = await Promise.allSettled([
    wantEn
      ? getChapter(tEn.value, b[0], ch)
      : Promise.resolve([]),

    wantNe
      ? getChapter(tNe.value, b[0], ch)
      : Promise.resolve([])
  ]);

  data.en =
    en.status === "fulfilled"
      ? en.value
      : null;

  data.ne =
    ne.status === "fulfilled"
      ? ne.value
      : null;

  if (
    data.en === null &&
    data.ne === null
  ) {
    $("ref").textContent =
      t("load_fail");

    return;
  }

  await loadBookmarksForChapter(
    b[0],
    ch
  );

  renderVerses(
    wantEn,
    wantNe
  );

  updateBookmarkBtn();

  if (!skipSave) {
    saveProfile({
      last_book: +bookSel.value,
      last_chapter: +ch
    });
  }
}


function renderVerses(
  wantEn,
  wantNe
) {
  $("ref").textContent = currentRef;

  const box = $("verses");

  box.className =
    wantEn && wantNe
      ? "both"
      : "";

  box.innerHTML = "";

  const en = new Map(
    (data.en || []).map(
      v => [v.n, v.t]
    )
  );

  const ne = new Map(
    (data.ne || []).map(
      v => [v.n, v.t]
    )
  );

  const nums = [
    ...new Set([
      ...en.keys(),
      ...ne.keys()
    ])
  ].sort(
    (a, b) => a - b
  );

  const bookId =
    BOOKS[bookSel.value][0];

  nums.forEach(n => {
    const el =
      document.createElement("span");

    el.className = "verse";

    if (
      bookmarked.has(
        `${bookId}-${chSel.value}-${n}`
      )
    ) {
      el.classList.add("marked");
    }

    const sup =
      document.createElement("sup");

    sup.textContent = n;

    el.append(sup);

    const line = (cls, txt) => {
      const s =
        document.createElement("span");

      s.className = cls;
      s.textContent = txt;

      el.append(s);
    };

    if (wantEn) {
      en.has(n)
        ? line("en", en.get(n))
        : (
            data.en === null
              ? line(
                  "missing",
                  t("missing")
                )
              : 0
          );
    }

    if (wantNe) {
      ne.has(n)
        ? line("ne", ne.get(n))
        : (
            data.ne === null
              ? line(
                  "missing",
                  t("missing")
                )
              : 0
          );
    }

    el.onclick = () => {
      selected.has(n)
        ? selected.delete(n)
        : selected.add(n);

      el.classList.toggle(
        "sel"
      );

      updateBookmarkBtn();

      if (
        selected.size === 1 &&
        innerWidth <= 640
      ) {
        openChat();
      }
    };

    box.append(el);
  });
}


/* ---------- pickers ---------- */
function fillBooks() {
  const cur =
    bookSel.value || 42;

  bookSel.innerHTML = "";

  BOOKS.forEach(
    (b, i) =>
      bookSel.add(
        new Option(
          lang === "ne"
            ? b[2]
            : b[1],
          i
        )
      )
  );

  bookSel.value = cur;
}


function fillChapters(keep) {
  const cur =
    keep
      ? chSel.value
      : 1;

  chSel.innerHTML = "";

  for (
    let c = 1;
    c <= BOOKS[bookSel.value][3];
    c++
  ) {
    chSel.add(
      new Option(
        `${t("chapter")} ${c}`,
        c
      )
    );
  }

  chSel.value = cur;
}


bookSel.onchange = () => {
  fillChapters(false);
  loadChapter();
};

chSel.onchange = () =>
  loadChapter();

viewSel.onchange = () => {
  saveProfile({
    bible_view: viewSel.value
  });

  loadChapter(true);
};

tEn.onchange = () => {
  saveProfile({
    translation_en: tEn.value
  });

  loadChapter(true);
};

tNe.onchange = () => {
  saveProfile({
    translation_ne: tNe.value
  });

  loadChapter(true);
};


function step(d) {
  let c =
    +chSel.value + d;

  let b =
    +bookSel.value;

  if (c < 1) {
    if (b === 0)
      return;

    bookSel.value = --b;

    fillChapters(false);

    c = BOOKS[b][3];

  } else if (
    c > BOOKS[b][3]
  ) {
    if (
      b === BOOKS.length - 1
    ) {
      return;
    }

    bookSel.value = ++b;

    fillChapters(false);

    c = 1;
  }

  chSel.value = c;

  loadChapter();

  $("reader").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


$("next").onclick = () =>
  step(1);

$("prev").onclick = () =>
  step(-1);


/* =========================================================
   5. Language switch
   ========================================================= */
function applyLang() {
  document.documentElement.lang =
    lang === "ne"
      ? "ne"
      : "en";

  document.body.classList.toggle(
    "ne",
    lang === "ne"
  );

  document
    .querySelectorAll("[data-i18n]")
    .forEach(
      el =>
        (el.textContent =
          t(el.dataset.i18n))
    );

  document
    .querySelectorAll("[data-i18n-html]")
    .forEach(
      el =>
        (el.innerHTML =
          t(el.dataset.i18nHtml))
    );

  document
    .querySelectorAll("[data-i18n-ph]")
    .forEach(
      el =>
        (el.placeholder =
          t(el.dataset.i18nPh))
    );

  document
    .querySelectorAll(".lang button")
    .forEach(
      b =>
        b.classList.toggle(
          "on",
          b.dataset.lang === lang
        )
    );

  buildChips();

  updateAuthUI();

  updateBookmarkBtn();

  if (
    $("out").classList.contains(
      "empty"
    )
  ) {
    $("out").textContent =
      t("ai_empty");
  }

  if (
    !hasNepali &&
    tNe.options.length === 0 &&
    $("notice").textContent
  ) {
    showNotice(
      t("no_ne")
    );
  }

  $("syncHint").textContent =
    currentUser
      ? t("sync_hint_on")
      : t("sync_hint_off");
}


document
  .querySelectorAll(".lang button")
  .forEach(
    b =>
      (b.onclick = () => {
        lang =
          b.dataset.lang;

        localStorage.setItem(
          "lang",
          lang
        );

        if (hasNepali) {
          viewSel.value =
            lang === "ne"
              ? "ne"
              : "en";
        }

        applyLang();

        fillBooks();

        fillChapters(true);

        loadChapter();

        saveProfile({
          lang
        });
      })
  );


/* =========================================================
   6. AI study helper
   ========================================================= */

const ACTIONS = {
  Explain:
    "Explain what this passage means in plain language, verse by verse where helpful.",

  Summarize:
    "Summarize this passage in 3-4 sentences, then give its main theme in one line.",

  Context:
    "Give the historical, cultural and literary context: author, audience, setting, and where it fits in the book.",

  "Key words":
    "Pick 3-5 key words and explain their original Hebrew/Greek meaning and why they matter.",

  "Cross-refs":
    "Suggest 4-6 related passages elsewhere in the Bible and say in one line how each connects.",

  Simple:
    "Explain this passage simply, as if to a curious 12-year-old.",

  Reflect:
    "Write 4 reflection questions and one short practical takeaway."
};


function buildChips() {

  const chips = $("chips");

  if (!chips)
    return;

  chips.innerHTML = "";

  Object.keys(ACTIONS).forEach(k => {

    const b =
      document.createElement("button");

    b.className = "chip";

    b.textContent =
      t("acts")[k] || k;

    b.onclick = () => {

      openChat();

      const passage =
        passageText();

      if (passage) {

        askAI(
          `${ACTIONS[k]}

Bible passage:
${passage}`
        );

      } else {

        askAI(
          ACTIONS[k]
        );

      }

    };

    chips.append(b);

  });

}


/* =========================================================
   ASK BUTTON
   ========================================================= */

$("askBtn").onclick = () => {

  const input =
    $("q");

  if (!input)
    return;

  const q =
    input.value.trim();

  if (!q)
    return;

  /*
   * IMPORTANT:
   * Send the actual question directly.
   * Do NOT prepend Bible passage instructions here.
   */

  askAI(q);

  input.value = "";

};


/* =========================================================
   ENTER KEY
   ========================================================= */

$("q").onkeydown = e => {

  if (
    e.key === "Enter" &&
    !e.shiftKey
  ) {

    e.preventDefault();

    $("askBtn").click();

  }

};


/* =========================================================
   GET CURRENT BIBLE PASSAGE
   ========================================================= */

function passageText() {

  const en =
    new Map(
      (data.en || []).map(
        v => [v.n, v.t]
      )
    );

  const ne =
    new Map(
      (data.ne || []).map(
        v => [v.n, v.t]
      )
    );

  const nums = [
    ...new Set([
      ...en.keys(),
      ...ne.keys()
    ])
  ]
    .sort(
      (a, b) => a - b
    )
    .filter(
      n =>
        !selected.size ||
        selected.has(n)
    );

  return nums
    .map(n =>
      [
        `${n}`,
        en.get(n),
        ne.get(n)
      ]
        .filter(Boolean)
        .join(" ")
    )
    .join("\n");
}


/* =========================================================
   AI — SUPABASE EDGE FUNCTION
   ========================================================= */

async function askAI(userMessage) {

  const out =
    $("out");

  /*
   * The user can now talk to the AI even when
   * no Bible passage is loaded.
   */

  const message =
    String(
      userMessage || ""
    ).trim() || "Hello";


  /*
   * Get Bible passage only as OPTIONAL context.
   */

  const bibleText =
    passageText();


  /*
   * Show loading state.
   */

  out.className = "dots";

  out.textContent =
    t("thinking");


  try {

    /*
     * Get current Supabase session.
     */

    const session =
      (
        await sb.auth.getSession()
      ).data.session;


    /*
     * IMPORTANT:
     *
     * `message` = actual user question
     *
     * `text` = optional Bible context
     *
     * The backend can now distinguish:
     *
     * "hey"
     *
     * from:
     *
     * "Explain John 3:16"
     */

    const requestBody = {

      message:
        message,

      ref:
        currentRef || "",

      text:
        bibleText || "",

      task:
        message,

      language:
        lang || "en",

      lang:
        lang || "en"

    };


    console.log(
      "Lumen AI request:",
      requestBody
    );


    /*
     * Headers
     */

    const headers = {

      "Content-Type":
        "application/json",

      "apikey":
        SUPABASE_ANON_KEY

    };


    /*
     * Add user's Supabase access token
     * when signed in.
     */

    if (
      session &&
      session.access_token
    ) {

      headers.Authorization =
        `Bearer ${session.access_token}`;

    }


    /*
     * Send request to Edge Function.
     */

    const res =
      await fetch(
        `${SUPABASE_URL}/functions/v1/ai`,
        {
          method:
            "POST",

          headers:
            headers,

          body:
            JSON.stringify(
              requestBody
            )
        }
      );


    /*
     * Safely read response.
     */

    const raw =
      await res.text();

    let d = null;

    try {

      d =
        raw
          ? JSON.parse(raw)
          : null;

    } catch {

      d = {
        raw
      };

    }


    console.log(
      "Lumen AI response:",
      res.status,
      d
    );


    /*
     * Handle backend errors.
     */

    if (!res.ok) {

      const errorMessage =
        d?.error ||
        d?.message ||
        d?.raw ||
        `AI request failed (${res.status})`;

      throw new Error(
        errorMessage
      );

    }


    /*
     * Support all common response names.
     */

    const answer =
      d?.response ||
      d?.text ||
      d?.answer ||
      d?.message;


    if (!answer) {

      throw new Error(
        "AI returned an empty response."
      );

    }


    /*
     * Display answer.
     */

    out.className = "";

    out.textContent =
      answer;


  } catch (e) {

    console.error(
      "AI request failed:",
      e
    );


    out.className = "";

    /*
     * Friendly error messages.
     */

    const errorText =
      String(
        e?.message || ""
      );


    if (
      errorText.includes("503")
    ) {

      out.textContent =
        "Gemini is temporarily busy. Please try again in a moment.";

    } else if (
      errorText.includes("429")
    ) {

      out.textContent =
        "Too many AI requests right now. Please wait a moment and try again.";

    } else if (
      errorText.includes("401") ||
      errorText.includes("403")
    ) {

      out.textContent =
        "AI authentication failed. Please check the Supabase AI configuration.";

    } else {

      out.textContent =
        t("backend_err");

    }

  }

}


/* =========================================================
   7. Theme + font size
   ========================================================= */
const root =
  document.documentElement;

const themeBtn =
  $("themeBtn");


function paintThemeBtn() {
  const dark =
    root.dataset.theme ===
    "dark";

  themeBtn.textContent =
    dark ? "☀" : "🌙";

  themeBtn.title =
    dark
      ? "Light mode"
      : "Dark mode";
}


themeBtn.onclick = () => {
  root.dataset.theme =
    root.dataset.theme ===
    "dark"
      ? "light"
      : "dark";

  try {
    localStorage.setItem(
      "theme",
      root.dataset.theme
    );
  } catch (e) {}

  paintThemeBtn();

  saveProfile({
    theme:
      root.dataset.theme
  });
};


paintThemeBtn();


let fontScale =
  parseFloat(
    localStorage.getItem(
      "fontScale"
    )
  ) || 1;


function paintFont() {
  root.style.setProperty(
    "--font-scale",
    fontScale
  );

  $("fontVal").textContent =
    Math.round(
      fontScale * 100
    ) + "%";
}


$("fontMinus").onclick = () => {
  fontScale = Math.max(
    0.8,
    +(
      fontScale - 0.1
    ).toFixed(2)
  );

  paintFont();

  localStorage.setItem(
    "fontScale",
    fontScale
  );

  saveProfile({
    font_scale:
      fontScale
  });
};


$("fontPlus").onclick = () => {
  fontScale = Math.min(
    1.6,
    +(
      fontScale + 0.1
    ).toFixed(2)
  );

  paintFont();

  localStorage.setItem(
    "fontScale",
    fontScale
  );

  saveProfile({
    font_scale:
      fontScale
  });
};


paintFont();


/* =========================================================
   8. Bookmarks
   ========================================================= */
$("bookmarkBtn").onclick =
  async () => {

    if (!currentUser) {
      $("bookmarkBtn").textContent =
        t("need_login_bookmark");

      openAuth("in");

      return;
    }

    const bookId =
      BOOKS[
        bookSel.value
      ][0];

    const ch =
      +chSel.value;

    const nums =
      selected.size
        ? [...selected]
        : [
            ...new Map(
              (
                data.en ||
                data.ne ||
                []
              ).map(
                v => [v.n, 1]
              )
            ).keys()
          ];

    const rows =
      nums.map(n => ({
        user_id:
          currentUser.id,

        book:
          bookId,

        chapter:
          ch,

        verse:
          n
      }));

    await sb
      .from("bookmarks")
      .upsert(
        rows,
        {
          onConflict:
            "user_id,book,chapter,verse"
        }
      );

    await loadBookmarksForChapter(
      bookId,
      ch
    );

    renderVerses(
      viewSel.value !== "ne",
      viewSel.value !== "en" &&
        hasNepali
    );

    updateBookmarkBtn();
  };


async function loadBookmarksForChapter(
  bookId,
  ch
) {
  bookmarked.clear();

  if (!currentUser)
    return;

  const { data: rows } =
    await sb
      .from("bookmarks")
      .select(
        "book,chapter,verse"
      )
      .eq(
        "user_id",
        currentUser.id
      )
      .eq(
        "book",
        bookId
      )
      .eq(
        "chapter",
        ch
      );

  (rows || []).forEach(r =>
    bookmarked.add(
      `${r.book}-${r.chapter}-${r.verse}`
    )
  );
}


function updateBookmarkBtn() {
  const bookId =
    BOOKS[
      bookSel.value
    ][0];

  const nums =
    selected.size
      ? [...selected]
      : [];

  const allMarked =
    nums.length &&
    nums.every(
      n =>
        bookmarked.has(
          `${bookId}-${chSel.value}-${n}`
        )
    );

  $("bookmarkBtn").textContent =
    allMarked
      ? t("bookmarked")
      : t("bookmark");
}


/* =========================================================
   9. Floating draggable AI chat
   ========================================================= */
const fab =
  $("chatFab");

const chatWin =
  $("chatWindow");

const chatHeader =
  $("chatHeader");


function clampToViewport() {
  const r =
    chatWin.getBoundingClientRect();

  const maxLeft =
    innerWidth -
    r.width -
    8;

  const maxTop =
    innerHeight -
    r.height -
    8;

  let left =
    parseFloat(
      chatWin.style.left ||
      r.left
    );

  let top =
    parseFloat(
      chatWin.style.top ||
      r.top
    );

  left = Math.min(
    Math.max(8, left),
    Math.max(8, maxLeft)
  );

  top = Math.min(
    Math.max(8, top),
    Math.max(8, maxTop)
  );

  chatWin.style.left =
    left + "px";

  chatWin.style.top =
    top + "px";

  chatWin.style.right =
    "auto";

  chatWin.style.bottom =
    "auto";
}


function openChat() {
  chatWin.hidden = false;

  chatWin.classList.remove(
    "minimized"
  );

  fab.hidden = false;

  $("fabBadge").hidden =
    true;

  if (innerWidth > 640) {
    const pos =
      JSON.parse(
        localStorage.getItem(
          "chatPos"
        ) || "null"
      );

    if (pos) {
      chatWin.style.left =
        pos.left + "px";

      chatWin.style.top =
        pos.top + "px";

      chatWin.style.right =
        "auto";

      chatWin.style.bottom =
        "auto";

      if (pos.w)
        chatWin.style.width =
          pos.w + "px";

      if (pos.h)
        chatWin.style.height =
          pos.h + "px";

      requestAnimationFrame(
        clampToViewport
      );
    }
  }
}


function closeChat() {
  chatWin.hidden = true;
}


fab.onclick = () =>
  chatWin.hidden
    ? openChat()
    : closeChat();


$("chatClose").onclick =
  closeChat;


$("chatMin").onclick = () =>
  chatWin.classList.toggle(
    "minimized"
  );


function savePos() {
  const r =
    chatWin.getBoundingClientRect();

  localStorage.setItem(
    "chatPos",
    JSON.stringify({
      left: r.left,
      top: r.top,
      w: r.width,
      h: r.height
    })
  );
}


/* ---- dragging (pointer events cover mouse + touch) ---- */
(() => {
  let dragging = false;
  let offX = 0;
  let offY = 0;

  chatHeader.addEventListener(
    "pointerdown",
    e => {
      if (innerWidth <= 640)
        return;

      if (
        e.target.closest("button")
      )
        return;

      dragging = true;

      chatWin.classList.add(
        "dragging"
      );

      const r =
        chatWin.getBoundingClientRect();

      offX =
        e.clientX - r.left;

      offY =
        e.clientY - r.top;

      chatHeader.setPointerCapture(
        e.pointerId
      );
    }
  );

  chatHeader.addEventListener(
    "pointermove",
    e => {
      if (!dragging)
        return;

      let left =
        e.clientX - offX;

      let top =
        e.clientY - offY;

      const r =
        chatWin.getBoundingClientRect();

      left = Math.min(
        Math.max(4, left),
        innerWidth -
          r.width -
          4
      );

      top = Math.min(
        Math.max(4, top),
        innerHeight -
          r.height -
          4
      );

      chatWin.style.left =
        left + "px";

      chatWin.style.top =
        top + "px";

      chatWin.style.right =
        "auto";

      chatWin.style.bottom =
        "auto";
    }
  );

  const endDrag = () => {
    if (dragging) {
      dragging = false;

      chatWin.classList.remove(
        "dragging"
      );

      savePos();
    }
  };

  chatHeader.addEventListener(
    "pointerup",
    endDrag
  );

  chatHeader.addEventListener(
    "pointercancel",
    endDrag
  );
})();


/* ---- resizing via bottom-left handle ---- */
(() => {
  const handle =
    $("resizeHandle");

  let resizing = false;

  let startX = 0;
  let startY = 0;
  let startW = 0;
  let startH = 0;
  let startLeft = 0;

  handle.addEventListener(
    "pointerdown",
    e => {
      if (innerWidth <= 640)
        return;

      resizing = true;

      const r =
        chatWin.getBoundingClientRect();

      startX =
        e.clientX;

      startY =
        e.clientY;

      startW =
        r.width;

      startH =
        r.height;

      startLeft =
        r.left;

      handle.setPointerCapture(
        e.pointerId
      );

      chatWin.classList.add(
        "dragging"
      );
    }
  );

  handle.addEventListener(
    "pointermove",
    e => {
      if (!resizing)
        return;

      const dx =
        e.clientX - startX;

      const dy =
        e.clientY - startY;

      const newW =
        Math.min(
          Math.max(
            300,
            startW - dx
          ),
          innerWidth - 24
        );

      const newH =
        Math.min(
          Math.max(
            320,
            startH + dy
          ),
          innerHeight - 24
        );

      chatWin.style.width =
        newW + "px";

      chatWin.style.height =
        newH + "px";

      chatWin.style.left =
        startLeft +
        (startW - newW) +
        "px";

      chatWin.style.right =
        "auto";
    }
  );

  const endResize = () => {
    if (resizing) {
      resizing = false;

      chatWin.classList.remove(
        "dragging"
      );

      savePos();
    }
  };

  handle.addEventListener(
    "pointerup",
    endResize
  );

  handle.addEventListener(
    "pointercancel",
    endResize
  );
})();


addEventListener(
  "resize",
  () => {
    if (
      !chatWin.hidden &&
      innerWidth > 640
    ) {
      clampToViewport();
    }
  }
);


/* =========================================================
   10. Auth (Supabase)
   ========================================================= */
let currentUser = null;

let authMode = "in";

let pendingEmail = "";


function openAuth(mode) {
  authMode =
    mode || "in";

  document
    .querySelectorAll(".mtab")
    .forEach(
      b =>
        b.classList.toggle(
          "on",
          b.dataset.mode ===
            authMode
        )
    );

  $("authSubmit").textContent =
    authMode === "in"
      ? t("sign_in")
      : t("sign_up");

  $("authMsg").textContent =
    "";

  $("authMsg").className =
    "modal-msg";

  $("resendBtn").hidden =
    true;

  $("authBackdrop").hidden =
    false;
}


function closeAuthModal() {
  $("authBackdrop").hidden =
    true;
}


$("authClose").onclick =
  closeAuthModal;


$("authBackdrop").onclick =
  e => {
    if (
      e.target ===
      $("authBackdrop")
    ) {
      closeAuthModal();
    }
  };


document
  .querySelectorAll(".mtab")
  .forEach(
    b =>
      (b.onclick = () =>
        openAuth(
          b.dataset.mode
        ))
  );


$("authForm").onsubmit =
  async e => {
    e.preventDefault();

    const email =
      $("authEmail")
        .value
        .trim();

    const password =
      $("authPassword")
        .value;

    const msg =
      $("authMsg");

    msg.className =
      "modal-msg";

    msg.textContent =
      "…";

    $("resendBtn").hidden =
      true;

    try {
      if (
        authMode === "in"
      ) {
        const {
          data,
          error
        } =
          await sb.auth.signInWithPassword(
            {
              email,
              password
            }
          );

        if (error) {
          if (
            /confirm/i.test(
              error.message
            )
          ) {
            pendingEmail =
              email;

            msg.className =
              "modal-msg";

            msg.textContent =
              t(
                "unconfirmed_login"
              );

            $("resendBtn").hidden =
              false;

            return;
          }

          throw error;
        }

        closeAuthModal();

      } else {
        const {
          data,
          error
        } =
          await sb.auth.signUp(
            {
              email,
              password
            }
          );

        if (error)
          throw error;

        if (data.session) {
          closeAuthModal();
        } else {
          pendingEmail =
            email;

          msg.className =
            "modal-msg";

          msg.textContent =
            t(
              "confirm_sent"
            );

          $("resendBtn").hidden =
            false;
        }
      }

    } catch (err) {
      msg.className =
        "modal-msg err";

      msg.textContent =
        err.message ||
        t("auth_err_generic");
    }
  };


$("resendBtn").onclick =
  async () => {
    const msg =
      $("authMsg");

    if (!pendingEmail)
      return;

    try {
      const {
        error
      } =
        await sb.auth.resend(
          {
            type: "signup",
            email: pendingEmail
          }
        );

      if (error)
        throw error;

      msg.className =
        "modal-msg";

      msg.textContent =
        t("resend_sent");

    } catch (err) {
      msg.className =
        "modal-msg err";

      msg.textContent =
        err.message ||
        t("auth_err_generic");
    }
  };


$("accountBtn").onclick =
  () =>
    currentUser
      ? openSettings()
      : openAuth("in");


$("signOutBtn").onclick =
  async () => {
    await sb.auth.signOut();
    closeSettings();
  };


function openSettings() {
  $("accountRow").hidden =
    !currentUser;

  $("signOutBtn").hidden =
    !currentUser;

  if (currentUser) {
    $("accountEmail").textContent =
      currentUser.email;
  }

  $("settingsBackdrop").hidden =
    false;
}


function closeSettings() {
  $("settingsBackdrop").hidden =
    true;
}


$("settingsBtn").onclick =
  openSettings;


$("settingsClose").onclick =
  closeSettings;


$("settingsBackdrop").onclick =
  e => {
    if (
      e.target ===
      $("settingsBackdrop")
    ) {
      closeSettings();
    }
  };


function updateAuthUI() {
  const btn =
    $("accountBtn");

  if (currentUser) {
    btn.textContent =
      currentUser.email.split(
        "@"
      )[0];

    btn.classList.add("in");

  } else {
    btn.textContent =
      t("sign_in");

    btn.classList.remove(
      "in"
    );
  }
}


sb.auth.onAuthStateChange(
  async (
    event,
    session
  ) => {
    currentUser =
      session
        ? session.user
        : null;

    updateAuthUI();

    if ($("syncHint")) {
      $("syncHint").textContent =
        currentUser
          ? t("sync_hint_on")
          : t("sync_hint_off");
    }

    if (currentUser)
      await applyProfileFromServer();
  }
);


async function applyProfileFromServer() {
  const {
    data: profile
  } =
    await sb
      .from("profiles")
      .select("*")
      .eq(
        "id",
        currentUser.id
      )
      .single();

  if (!profile)
    return;

  if (profile.theme) {
    root.dataset.theme =
      profile.theme;

    localStorage.setItem(
      "theme",
      profile.theme
    );

    paintThemeBtn();
  }

  if (profile.lang) {
    lang =
      profile.lang;

    localStorage.setItem(
      "lang",
      lang
    );
  }

  if (profile.font_scale) {
    fontScale =
      +profile.font_scale;

    localStorage.setItem(
      "fontScale",
      fontScale
    );

    paintFont();
  }

  applyLang();

  fillBooks();

  if (profile.bible_view)
    viewSel.value =
      profile.bible_view;

  if (
    profile.last_book !=
    null
  ) {
    bookSel.value =
      profile.last_book;
  }

  fillChapters(false);

  if (
    profile.last_chapter
  ) {
    chSel.value =
      profile.last_chapter;
  }

  const applyTr = () => {
    if (
      profile.translation_en &&
      [
        ...tEn.options
      ].some(
        o =>
          o.value ===
          profile.translation_en
      )
    ) {
      tEn.value =
        profile.translation_en;
    }

    if (
      profile.translation_ne &&
      [
        ...tNe.options
      ].some(
        o =>
          o.value ===
          profile.translation_ne
      )
    ) {
      tNe.value =
        profile.translation_ne;
    }
  };

  applyTr();

  loadChapter(true);
}


let saveTimer;


function saveProfile(patch) {
  if (!currentUser)
    return;

  clearTimeout(
    saveTimer
  );

  saveTimer =
    setTimeout(
      async () => {
        await sb
          .from("profiles")
          .update({
            ...patch,
            updated_at:
              new Date().toISOString()
          })
          .eq(
            "id",
            currentUser.id
          );
      },
      500
    );
}


/* =========================================================
   11. Start
   ========================================================= */
(async function init() {
  fillBooks();

  await loadTranslations();

  if (
    hasNepali &&
    lang === "ne"
  ) {
    viewSel.value =
      "ne";
  }

  bookSel.value =
    42;

  applyLang();

  fillChapters(false);

  chSel.value =
    3;

  const {
    data: { session }
  } =
    await sb.auth.getSession();

  currentUser =
    session
      ? session.user
      : null;

  updateAuthUI();

  if (currentUser) {
    await applyProfileFromServer();
  } else {
    loadChapter(true);
  }
})();