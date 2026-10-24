# KX_digital — landing page

Talabalar, magistrantlar va o‘qituvchilar uchun o‘quv va ilmiy ishlar xizmatining bir sahifali sayti.
Toza HTML + CSS + vanilla JavaScript — hech qanday framework yoki build jarayoni kerak emas.

```
kx-digital/
├── index.html        — sahifa tuzilmasi, SEO teglar, ikonkalar (SVG sprite)
├── css/style.css     — dizayn tokenlari (ranglar, shriftlar, oraliqlar) va barcha uslublar
├── js/main.js        — kontent (SITE obyekti) va interaktivlik
├── assets/
│   ├── logo-mark.png — saytdagi logo (menyu va footer)
│   ├── logo-512.png  — katta logo (Google / schema.org)
│   ├── favicon-32.png, apple-touch-icon.png — brauzer va telefon ikonkalari
│   └── og-image.png  — Telegram, Facebook va boshqalarda havola ulashilganda chiqadigan rasm (1200×630)
└── README.md
```

---

## 1. Saytni kompyuterda ochish

**Eng oson usul:** `index.html` faylini ikki marta bosing — sayt brauzerda ochiladi.

**Tavsiya etiladigan usul** (nusxalash tugmalari va boshqa funksiyalar to‘liq ishlashi uchun) — kichik lokal server:

```bash
npx serve .
```

yoki Python o‘rnatilgan bo‘lsa:

```bash
python -m http.server 8080
```

So‘ng brauzerda `http://localhost:8080` (yoki terminalda ko‘rsatilgan manzil)ni oching.

---

## 2. Matn va raqamlarni qayerdan o‘zgartirish

### `js/main.js` → `SITE` obyekti (fayl boshida)

| Nima                         | Qayerda                    |
|------------------------------|----------------------------|
| Statistika raqamlari         | `SITE.stats`               |
| Asosiy xizmatlar (6 ta)      | `SITE.services`            |
| Qo‘shimcha xizmatlar, tablar | `SITE.extras`, `SITE.extraCategories` |
| “Nega aynan biz?”            | `SITE.advantages`          |
| “Qanday ishlaymiz” qadamlari | `SITE.steps`               |
| Mijozlar fikrlari            | `SITE.reviews`             |
| FAQ savol-javoblari          | `SITE.faq`                 |
| Telegram havolalari          | `SITE.links`               |

Misol — bajarilgan buyurtmalar sonini o‘zgartirish:

```js
{ value: 5000, suffix: '+', label: 'Bajarilgan buyurtmalar' },
//       ↑ shu raqamni almashtiring
```

Yangi qo‘shimcha xizmat qo‘shish:

```js
{ title: 'Kitob tahlili', cats: ['study'], icon: 'book' },
```

`cats` — qaysi tablarda ko‘rinishi: `study` (O‘qish uchun), `science` (Ilmiy), `interactive` (Interaktiv).
`icon` — `index.html` oxiridagi `<symbol id="i-...">` nomlaridan biri (`i-` qo‘shimchasisiz).

> ⚠️ **Muhim:** `SITE.reviews` dagi fikrlar **namunaviy**. Haqiqiy mijoz fikrlariga (ruxsat bilan) almashtiring.
> FAQ dagi muddatlar va to‘lov usullarini ham o‘z amaliyotingizga moslab tekshirib chiqing.

### `index.html` da (statik matnlar)

- Hero sarlavhasi va tavsifi, asosiy taklif banneri, yakuniy CTA, footer.
- `<head>` ichidagi `title`, `description`, Open Graph va JSON-LD ma’lumotlari.

### `css/style.css` da (dizayn)

Fayl boshidagi `:root { ... }` blokida barcha ranglar, shriftlar va oraliqlar bor. Masalan, aksent (oltin) rangni
o‘zgartirish uchun `--gold-500` qiymatini almashtiring. Tungi mavzu ranglari pastroqda, `[data-theme="dark"]` blokida.

---

## 3. Internetga bepul joylash

### A) Netlify (eng tez — 1 daqiqa)

1. <https://app.netlify.com/drop> sahifasini oching (ro‘yxatdan o‘tish talab qilinadi).
2. `kx-digital` papkasini sahifaga sudrab tashlang.
3. Tayyor! Sayt `https://nimadir.netlify.app` manzilida ochiladi. **Site settings → Change site name** orqali nomni o‘zgartirish mumkin.

### B) GitHub Pages

1. GitHub'da yangi repozitoriy yarating (masalan, `kx-digital`).
2. Papkadagi barcha fayllarni repozitoriyga yuklang (**Add file → Upload files**). `index.html` repozitoriy ildizida bo‘lishi kerak.
3. **Settings → Pages → Source:** `Deploy from a branch`, branch: `main`, papka: `/ (root)` → **Save**.
4. 1–2 daqiqadan keyin sayt `https://<foydalanuvchi>.github.io/kx-digital/` manzilida ochiladi.

### C) Vercel

1. Loyihani GitHub'ga yuklang (B bandidagi 1–2-qadamlar).
2. <https://vercel.com/new> → repozitoriyni tanlang → **Framework Preset: Other** → **Deploy**.
3. Sayt `https://kx-digital.vercel.app` kabi manzilda ochiladi.

---

## 4. O‘z domeningizni ulash (masalan, `kxdigital.uz`)

1. Domenni ro‘yxatdan o‘tkazing (`.uz` domenlari — cctld.uz da ro‘yxatdagi registratorlar orqali).
2. Hosting panelida domen qo‘shing:
   - **Netlify:** Domain management → Add a domain
   - **Vercel:** Project → Settings → Domains → Add
   - **GitHub Pages:** Settings → Pages → Custom domain
3. Hosting ko‘rsatgan DNS yozuvlarini registratoringiz panelida kiriting (odatda `A` yozuv asosiy domen uchun va `CNAME` yozuv `www` uchun).
4. DNS yangilanishini kuting (bir necha daqiqadan 24 soatgacha). HTTPS sertifikati avtomatik beriladi.
5. **Muhim:** `index.html` dagi barcha `https://kx-digital.netlify.app/` manzillarini (canonical, `og:url`, `og:image`, `twitter:image`, JSON-LD) haqiqiy domeningizga almashtiring. Aks holda Telegramda havola ulashilganda rasm chiqmaydi.

---

## 5. Joylashdan oldin tekshirish ro‘yxati

- [ ] `SITE.stats` dagi raqamlar haqiqiy
- [ ] Namunaviy fikrlar haqiqiylariga almashtirilgan
- [ ] `https://kx-digital.netlify.app/` o‘z domeningizga almashtirilgan (agar domen ulasangiz)
- [ ] Barcha Telegram havolalari ochiladi
- [ ] Telefonda ko‘rinishi tekshirilgan
- [ ] Google Search Console'ga sayt qo‘shilgan (ixtiyoriy, SEO uchun foydali)

---

## 6. Joriy joylashuv

- Sayt: **https://kx-digital.netlify.app**
- Kod: **https://github.com/uktamovgiyos54-cell/kx-digital**

Netlify GitHub repoga ulangan: `main` branchiga har bir `git push` qilinganda sayt **avtomatik** yangilanadi
(odatda 1 daqiqa ichida). Qo‘lda joylash shart emas.

```bash
git add .
git commit -m "O'zgarish tavsifi"
git push
```
