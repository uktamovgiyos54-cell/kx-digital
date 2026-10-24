/* =========================================================
   KX_digital — main.js
   Saytdagi barcha o‘zgaruvchan matnlar shu yerdagi SITE obyektida.
   Matn, raqam yoki havolani o‘zgartirish uchun faqat SITE ni tahrirlang.
   ========================================================= */

const SITE = {
  links: {
    manager: 'https://t.me/kx_manager',
    channel: 'https://t.me/Slaydlar_Mustaqilishi',
    reviews: 'https://t.me/Kx_Fikrlar',
    phone: '+998886679666',
  },

  // Statistika: value — raqam (sanab chiqadi), prefix/suffix — oldi/orqasidagi belgi
  stats: [
    { value: 50000, suffix: '+', label: 'Bajarilgan buyurtmalar' },
    { value: 35000, suffix: '+', label: 'Mamnun mijozlar' },
    { value: 17, suffix: '+', label: 'Xizmat turlari' },
    { value: 24, suffix: '/7', label: 'Qo‘llab-quvvatlash' },
  ],

  // Asosiy xizmatlar. icon — index.html dagi <symbol id="i-..."> nomi.
  // wide: true — katta ekranda kartochka ikki ustun egallaydi; featured: true — to‘q rangli kartochka
  services: [
    { icon: 'presentation', title: 'Taqdimot (slayd) yaratish', desc: 'Mavzungiz bo‘yicha zamonaviy dizayndagi, mazmunli slaydlar. PowerPoint yoki PDF formatida.', tag: 'Eng ko‘p so‘raladi', wide: true },
    { icon: 'file', title: 'Referat yaratish', desc: 'Talablarga mos tuzilma, adabiyotlar ro‘yxati va to‘g‘ri rasmiylashtirilgan referat.' },
    { icon: 'pen', title: 'Mustaqil ish yaratish', desc: 'Fan va mavzu bo‘yicha o‘qituvchi talablarini hisobga olgan holda tayyorlangan mustaqil ish.' },
    { icon: 'layers', title: 'Kurs ishi yaratish', desc: 'Nazariy va amaliy qismlari bilan to‘liq kurs ishi — himoyaga tayyor holda.' },
    { icon: 'cap', title: 'Diplom ishi (BMI) yaratish', desc: 'Bitiruv malakaviy ishi: rejadan tortib himoya taqdimotigacha bosqichma-bosqich hamkorlik.', wide: true, featured: true },
    { icon: 'image', title: 'AI yordamida rasm yaratish', desc: 'Taqdimot, maqola yoki ijtimoiy tarmoq uchun sun’iy intellekt yordamida noyob rasmlar.' },
  ],

  // Qo‘shimcha xizmatlar uchun turkumlar (tablar)
  extraCategories: [
    { id: 'all', label: 'Barchasi' },
    { id: 'study', label: 'O‘qish uchun' },
    { id: 'science', label: 'Ilmiy' },
    { id: 'interactive', label: 'Interaktiv' },
  ],
  extras: [
    { title: 'Insho / Esse', cats: ['study'], icon: 'pen' },
    { title: 'Krossvord', cats: ['interactive'], icon: 'sparkles' },
    { title: 'Flesh kartalar', cats: ['interactive', 'study'], icon: 'layers' },
    { title: 'Quiz / Test', cats: ['interactive'], icon: 'check' },
    { title: 'Rezyume', cats: ['study'], icon: 'file' },
    { title: 'Maqola', cats: ['science'], icon: 'book' },
    { title: 'Tezis', cats: ['science'], icon: 'file' },
    { title: 'Infografika', cats: ['study'], icon: 'image' },
    { title: 'Fayl yoki URL bo‘yicha taqdimot', cats: ['study'], icon: 'presentation' },
    { title: 'Tinglash mashqlari', cats: ['interactive', 'study'], icon: 'message' },
    { title: 'Saralash o‘yini', cats: ['interactive'], icon: 'sparkles' },
  ],

  advantages: [
    { icon: 'zap', title: 'Tez bajarish', desc: 'Shoshilinch buyurtmalarni ham qabul qilamiz — ish kelishilgan muddatdan kechikmaydi.' },
    { icon: 'shield', title: 'Yuqori sifat va antiplagiat', desc: 'Har bir ish noldan yoziladi va topshirishdan oldin antiplagiat tizimida tekshiriladi.' },
    { icon: 'wallet', title: 'Hamyonbop narx', desc: 'Talabalar byudjetiga mos narxlar, doimiy mijozlar uchun chegirmalar.' },
    { icon: 'refresh', title: 'Bepul tuzatishlar', desc: 'O‘qituvchi yoki ilmiy rahbar izohlari bo‘yicha tuzatishlar bepul kiritiladi.' },
    { icon: 'lock', title: 'To‘liq maxfiylik', desc: 'Ismingiz, ishingiz va yozishmalaringiz hech qachon uchinchi shaxslarga berilmaydi.' },
    { icon: 'stamp', title: 'OAK talablariga mos', desc: 'Ilmiy ishlar OAK va OTM standartlari bo‘yicha to‘g‘ri rasmiylashtiriladi.' },
  ],

  steps: [
    { title: 'Telegramda yozasiz', desc: '@kx_manager ga ish turi, fan va mavzuni yuborasiz.' },
    { title: 'Mavzu va muddatni kelishamiz', desc: 'Talablar, hajm, muddat va narx aniq belgilanadi.' },
    { title: 'Ish tayyorlanadi', desc: 'Mutaxassis ishni bajaradi, kerak bo‘lsa oraliq natijani ko‘rsatadi.' },
    { title: 'Tayyor ishni olasiz va tekshirasiz', desc: 'Ishni ko‘rib chiqasiz, zarur bo‘lsa bepul tuzatish kiritamiz.' },
  ],

  // NAMUNAVIY fikrlar — haqiqiy mijoz fikrlariga almashtiring
  reviews: [
    { name: 'Dilnoza R.', place: 'TDIU, 3-kurs talabasi', service: 'Kurs ishi', text: 'Kurs ishimni uch kunda tayyorlab berishdi. Rahbarim faqat ikkita kichik izoh berdi, ularni ham bir kunda tuzatishdi.' },
    { name: 'Jasur T.', place: 'SamDU magistranti', service: 'Ilmiy maqola', text: 'Maqolam OAK ro‘yxatidagi jurnalda chop etildi. Jarayonning har bosqichida nima bo‘layotganini aytib turishdi.' },
    { name: 'Malika A.', place: 'Maktab o‘qituvchisi', service: 'Taqdimot', text: 'Ochiq dars uchun taqdimot buyurtma qildim. Dizayni chiroyli, slaydlar ortiqcha matnga to‘lmagan — aynan kerakli narsa.' },
  ],

  faq: [
    { q: 'Narxi qancha?', a: 'Narx ish turi, hajmi, murakkabligi va muddatiga qarab belgilanadi. Taqdimot va referat kabi kichik ishlar arzon, kurs va diplom ishlari alohida kelishiladi. Aniq narxni bilish uchun @kx_manager ga ish turi va talablarni yozing — bir necha daqiqada javob beramiz.' },
    { q: 'Qancha vaqtda tayyor bo‘ladi?', a: 'Taqdimot, referat va mustaqil ishlar odatda 1 kun ichida, kurs ishi bir necha kunda, diplom ishi esa hajmiga qarab 1–4 haftada tayyorlanadi. Shoshilinch buyurtmalar ham qabul qilinadi.' },
    { q: 'To‘lov qanday amalga oshiriladi?', a: 'To‘lov bank kartasiga o‘tkazma orqali (Click, Payme va boshqa ilovalar) amalga oshiriladi. Katta ishlar uchun bosqichma-bosqich to‘lash mumkin — tafsilotlarni menejer bilan kelishasiz.' },
    { q: 'Tuzatish kiritsa bo‘ladimi?', a: 'Ha. Kelishilgan talablar doirasidagi tuzatishlar bepul kiritiladi. O‘qituvchi yoki rahbaringiz izohlarini yuboring — ishni qayta ko‘rib chiqamiz.' },
    { q: 'Antiplagiat foizi qanday?', a: 'Ishlar noldan yoziladi va topshirishdan oldin tekshiriladi. Originallik foizi OTM yoki jurnal talabiga moslashtiriladi — kerakli foizni buyurtma berishda ayting.' },
    { q: 'OAK jurnalida nashr qancha vaqt oladi?', a: 'Bu tanlangan jurnal yoki konferensiyaning navbati va chiqish jadvaliga bog‘liq — odatda 2 haftadan 3 oygacha. Menejer sizga mos va eng tez variantlarni taklif qiladi.' },
  ],
};

/* ---------- Yordamchi funksiyalar ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const EXT = 'target="_blank" rel="noopener noreferrer"';

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const icon = (name) => `<svg class="i" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const fmt = (n) => n.toLocaleString('ru-RU').replace(/ /g, ' '); // 5 000 ko‘rinishida

/* ---------- Kontentni chizish ---------- */
function renderStats() {
  $('#stats-list').innerHTML = SITE.stats.map((s) => `
    <li class="stat">
      <div class="stat__value"><span data-count="${s.value}">${reducedMotion ? fmt(s.value) : 0}</span><span class="stat__suffix">${esc(s.suffix || '')}</span></div>
      <div class="stat__label">${esc(s.label)}</div>
    </li>`).join('');
}

function renderServices() {
  $('#services-grid').innerHTML = SITE.services.map((s, i) => `
    <article class="service reveal${s.wide ? ' service--wide' : ''}${s.featured ? ' service--featured' : ''}">
      ${s.tag ? `<span class="service__tag">${esc(s.tag)}</span>` : `<span class="service__num" aria-hidden="true">0${i + 1}</span>`}
      <div class="service__icon">${icon(s.icon)}</div>
      <h3 class="service__title">${esc(s.title)}</h3>
      <p class="service__desc">${esc(s.desc)}</p>
      <a class="service__link" href="${SITE.links.manager}" ${EXT} aria-label="${esc(s.title)} — buyurtma berish">
        Buyurtma berish ${icon('arrow')}
      </a>
    </article>`).join('');
}

function renderExtras(cat = 'all') {
  const tabs = $('#extras-tabs');
  if (!tabs.children.length) {
    tabs.innerHTML = SITE.extraCategories.map((c, i) => `
      <button class="tab" type="button" role="tab" id="tab-${c.id}" data-cat="${c.id}"
        aria-selected="${i === 0}" aria-controls="extras-list" tabindex="${i === 0 ? 0 : -1}">${esc(c.label)}</button>`).join('');
  }
  const items = SITE.extras.filter((e) => cat === 'all' || e.cats.includes(cat));
  const list = $('#extras-list');
  list.setAttribute('aria-labelledby', `tab-${cat}`);
  list.innerHTML = items.map((e, i) => `
    <li class="chip">${icon(e.icon)}${esc(e.title)}</li>`).join('');
}

function renderAdvantages() {
  $('#why-list').innerHTML = SITE.advantages.map((a, i) => `
    <li class="why__item reveal">
      <span class="why__icon">${icon(a.icon)}</span>
      <h3 class="why__title">${esc(a.title)}</h3>
      <p class="why__desc">${esc(a.desc)}</p>
    </li>`).join('');
}

function renderSteps() {
  $('#steps-list').innerHTML = SITE.steps.map((s, i) => `
    <li class="step reveal">
      <span class="step__num" aria-hidden="true">${i + 1}</span>
      <div class="step__body">
        <h3 class="step__title"><span class="sr-only">${i + 1}-qadam: </span>${esc(s.title)}</h3>
        <p class="step__desc">${esc(s.desc)}</p>
      </div>
    </li>`).join('');
}

function renderReviews() {
  const stars = Array.from({ length: 5 }, () => icon('star')).join('');
  $('#reviews-list').innerHTML = SITE.reviews.map((r, i) => `
    <figure class="review reveal">
      <div class="review__stars" role="img" aria-label="5 dan 5 baho">${stars}</div>
      <blockquote class="review__text">“${esc(r.text)}”</blockquote>
      <figcaption class="review__meta">
        <span class="review__avatar" aria-hidden="true">${esc(r.name.charAt(0))}</span>
        <span><span class="review__name">${esc(r.name)}</span><br><span class="review__info">${esc(r.place)}</span></span>
        <span class="review__service">${esc(r.service)}</span>
      </figcaption>
    </figure>`).join('');
}

function renderFaq() {
  $('#faq-list').innerHTML = SITE.faq.map((f, i) => `
    <div class="acc reveal">
      <h3>
        <button class="acc__btn" type="button" id="faq-btn-${i}" aria-expanded="false" aria-controls="faq-panel-${i}">
          <span>${esc(f.q)}</span>
          <span class="acc__icon" aria-hidden="true">${icon('plus')}</span>
        </button>
      </h3>
      <div class="acc__panel" id="faq-panel-${i}" role="region" aria-labelledby="faq-btn-${i}" hidden>
        <div class="acc__inner"><p>${esc(f.a)}</p></div>
      </div>
    </div>`).join('');
}

function renderFormOptions() {
  const all = [...SITE.services.map((s) => s.title), 'Ilmiy maqola / tezis va OAK nashri', ...SITE.extras.map((e) => e.title), 'Boshqa'];
  $('#qf-service').innerHTML = '<option value="" disabled selected>Tanlang…</option>' +
    all.map((t) => `<option>${esc(t)}</option>`).join('');
}

/* ---------- Xatti-harakatlar ---------- */
function initTheme() {
  const btn = $('#theme-toggle');
  const root = document.documentElement;
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const isDark = () => root.dataset.theme ? root.dataset.theme === 'dark' : mq.matches;
  const sync = () => {
    const dark = isDark();
    btn.setAttribute('aria-label', dark ? 'Kunduzgi rejimga o‘tish' : 'Tungi rejimga o‘tish');
    btn.setAttribute('aria-pressed', String(dark));
  };
  btn.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('kx-theme', next); } catch (e) { /* maxfiy rejim */ }
    sync();
  });
  mq.addEventListener('change', sync);
  sync();
}

function initNav() {
  const nav = $('#nav');
  const burger = $('#nav-burger');
  const menu = $('#nav-menu');
  const desktop = window.matchMedia('(min-width: 1024px)');

  const setOpen = (open) => {
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Menyuni yopish' : 'Menyuni ochish');
    menu.classList.toggle('is-open', open);
    document.body.classList.toggle('is-locked', open);
  };
  burger.addEventListener('click', () => setOpen(burger.getAttribute('aria-expanded') !== 'true'));
  $$('a', menu).forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) { setOpen(false); burger.focus(); }
  });
  desktop.addEventListener('change', () => setOpen(false));

  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Faol bo‘limni belgilash
  const links = $$('.nav__links a');
  const sections = links.map((a) => $(a.getAttribute('href'))).filter(Boolean);
  const setActive = (id) => links.forEach((a) => {
    const on = a.getAttribute('href') === `#${id}`;
    a.classList.toggle('is-active', on);
    if (on) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) setActive(en.target.id); });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => io.observe(s));
  // Hero ustida hech narsa belgilanmasin
  const hero = $('#top');
  new IntersectionObserver(([en]) => { if (en.isIntersecting) setActive(''); }, { rootMargin: '-45% 0px -50% 0px' }).observe(hero);
}

function initTabs() {
  const tabs = $('#extras-tabs');
  const select = (btn, focus) => {
    $$('.tab', tabs).forEach((t) => {
      const on = t === btn;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
    });
    if (focus) btn.focus();
    renderExtras(btn.dataset.cat);
  };
  tabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab');
    if (btn) select(btn);
  });
  // Klaviatura: chap/o‘ng strelkalar
  tabs.addEventListener('keydown', (e) => {
    const list = $$('.tab', tabs);
    const idx = list.indexOf(document.activeElement);
    if (idx < 0) return;
    let next = null;
    if (e.key === 'ArrowRight') next = list[(idx + 1) % list.length];
    if (e.key === 'ArrowLeft') next = list[(idx - 1 + list.length) % list.length];
    if (e.key === 'Home') next = list[0];
    if (e.key === 'End') next = list[list.length - 1];
    if (next) { e.preventDefault(); select(next, true); }
  });
}

function initAccordion() {
  $('#faq-list').addEventListener('click', (e) => {
    const btn = e.target.closest('.acc__btn');
    if (!btn) return;
    const item = btn.closest('.acc');
    const panel = $(`#${btn.getAttribute('aria-controls')}`);
    const open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', String(open));
    if (open) {
      panel.hidden = false;
      requestAnimationFrame(() => item.classList.add('is-open'));
    } else {
      item.classList.remove('is-open');
      const done = () => { if (btn.getAttribute('aria-expanded') === 'false') panel.hidden = true; };
      if (reducedMotion) done(); else panel.addEventListener('transitionend', done, { once: true });
    }
  });
}

function initReveal() {
  const els = $$('.reveal');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el) => io.observe(el));
}

function initCounters() {
  const nums = $$('[data-count]');
  if (reducedMotion) return;
  const run = (el) => {
    const target = Number(el.dataset.count);
    const dur = 1600;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(Math.max((now - start) / dur, 0), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
  }, { threshold: 0.5 });
  nums.forEach((n) => io.observe(n));
}

let toastTimer;
function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('is-visible'), 4500);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (e) {
    // Eski brauzerlar yoki http uchun zaxira usul
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
    ta.remove();
    return ok;
  }
}

function initCopyButtons() {
  $$('[data-copy]').forEach((btn) => {
    const label = $('span', btn);
    btn.addEventListener('click', async () => {
      const ok = await copyText(btn.dataset.copy);
      if (!ok) { toast('Nusxalab bo‘lmadi. Raqam: +998 88 667 96 66'); return; }
      btn.classList.add('is-done');
      if (label) label.textContent = 'Nusxalandi';
      toast('Telefon raqami nusxalandi');
      setTimeout(() => { btn.classList.remove('is-done'); if (label) label.textContent = 'Nusxalash'; }, 2200);
    });
  });
}

function initQuickForm() {
  const form = $('#quick-form');
  const err = $('#qf-error');
  const date = $('#qf-deadline');
  const today = new Date();
  date.min = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

  const fmtDate = (v) => { const [y, m, d] = v.split('-'); return `${d}.${m}.${y}`; };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fields = ['name', 'service', 'topic', 'deadline'].map((n) => form.elements[n]);
    let firstBad = null;
    fields.forEach((f) => {
      const bad = !f.value.trim();
      f.setAttribute('aria-invalid', String(bad));
      if (bad && !firstBad) firstBad = f;
    });
    if (firstBad) {
      err.textContent = 'Iltimos, barcha maydonlarni to‘ldiring.';
      firstBad.focus();
      return;
    }
    err.textContent = '';

    const [name, service, topic, deadline] = fields.map((f) => f.value.trim());
    const text = [
      'Assalomu alaykum! Buyurtma bermoqchiman.',
      '',
      `Ism: ${name}`,
      `Xizmat turi: ${service}`,
      `Mavzu: ${topic}`,
      `Muddat: ${fmtDate(deadline)}`,
    ].join('\n');

    // Telegramni darhol ochamiz (popup bloklanmasligi uchun), nusxalash parallel bajariladi
    window.open(SITE.links.manager, '_blank', 'noopener,noreferrer');
    copyText(text).then((ok) => {
      toast(ok ? 'Matn nusxalandi, menejerga yuboring' : 'Telegram ochildi — ma’lumotlaringizni menejerga yozing');
    });
  });

  form.addEventListener('input', (e) => {
    if (e.target.value.trim()) e.target.setAttribute('aria-invalid', 'false');
  });
}

/* ---------- Ishga tushirish ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderStats();
  renderServices();
  renderExtras();
  renderAdvantages();
  renderSteps();
  renderReviews();
  renderFaq();
  renderFormOptions();

  initTheme();
  initNav();
  initTabs();
  initAccordion();
  initReveal();
  initCounters();
  initCopyButtons();
  initQuickForm();

  $('#year').textContent = new Date().getFullYear();
});
