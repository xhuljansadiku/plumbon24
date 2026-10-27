# PLUMBON24 – Çfarë mungon para publikimit

Faqja është gati teknikisht. Pikat më poshtë varen nga klienti ose nga publikimi.

---

## ✅ Të marra nga klienti (2026-10-13)
- [x] Numri i telefonit: (917) 702-0072
- [x] Zonat: të 5 boroughs (Manhattan, Brooklyn, Queens, Bronx, Staten Island)
- [x] Emergjenca: po, 24/7
- [x] Free estimate: po
- [x] Orari: Mon–Fri, 9 AM – 5 PM, plus emergjenca 24/7
- [x] Foto reale të punës (`public/images/work/`)

## ✅ Të marra nga klienti (2026-10-17)
- [x] Email-i: `info@plumbon24.com` (ndryshuar 2026-10-26)
- [x] Eksperienca: 15+ vite eksperiencë personale. Kompania sapo është hapur, ndaj **mos shkruaj kurrë** "since 20XX", "in business for 15 years" ose `foundingDate` në schema.
- [x] Fotot: përdorim ato që dërguan + fotot falas me licencë (`docs/IMAGE-CREDITS.md`). Fotot e banjave/kuzhinave të përfunduara janë në rregull.
- [x] Lagjet e projekteve: nuk dihen. Galeria dhe karta te hero mbeten pa lagje.
- [x] Instagram: https://www.instagram.com/plumbon24/ (shtuar në footer dhe te `sameAs` në schema)

## ✅ Të marra nga klienti (2026-10-18)
- [x] Bëjnë **sprinklers**: u shtua `/services/fire-sprinkler-systems` (kategoria Water, Sewer, Gas & Sprinkler Lines)
- [x] Bëjnë **boilers**: u shtua `/services/boiler-heating-services` (kategoria Heating, Hot Water & Fixtures)
- [x] Dërguan foto të reja në WhatsApp: valvola sprinkler, underground, 6 water heaters, combi boilers + manifold radiant
      → [x] Origjinalet u shtuan në faqe (8 foto). Fotoja e hero-s: cilësia në rregull (2026-10-18).
- [x] **Licencat**: klienti i ka (2026-10-18). Faqja tregon "Licensed" (hero, faktet e shërbimeve, FAQ). "Insured" jo ende.

---

## 1. Pyetje për klientin

### Në pritje
- [ ] **Numri i licencës + sigurimi (insurance)**: kur t'i japë → `site.credentials.licenseNumber` dhe `insured: true` te `lib/site.ts`. Badge-i bëhet vetë "Licensed & Insured" me numrin.- [ ] **Google Business Profile**: kanë **zyrë** te 235 43rd St → profil normal me **adresë publike** (jo service-area). Shto edhe 5 boroughs si zonë shërbimi. Linku → `profiles.googleBusinessProfile` te `lib/site.ts`
- [ ] **Review reale**: vijnë pasi të hapet GBP. → `lib/reviews.ts`. Seksioni shfaqet vetë. Vetëm review të vërteta, fjalë për fjalë.
- [ ] **Domain-i**: `plumbon24.com` (i lirë më 2026-10-17). Blije sa më shpejt, në emër të klientit. Faqja do jetë `https://www.plumbon24.com`.

### Shërbimet ✅ (2026-10-18)
- [x] Klienti bën gjithçka **përveç punës jashtë ndërtesës** (water service dhe main sewer deri te rruga).
      → U fshehën `water-line-services` dhe `sewer-line-services` (`published: false`). Për t'i rikthyer: `published: true`.
- [x] Gas Line dhe Backflow: **po** i bën. Mbeten në faqe.
- [x] Sprinklers dhe boilers: **po**. U shtuan si shërbime.
- Gjithsej 20 shërbime në faqe. Boilers zuri vendin e Sewer te kartat e faqes kryesore dhe në footer.

### Opsionale
- [ ] **Videoja**: a duan ta vendosim në faqe?
- [ ] **Mënyrat e pagesës** (cash, card, Zelle, check?)
- [ ] **Gjuhët që flasin** (p.sh. English, Albanian, Spanish?). Në NYC kjo vlen si pikë shitjeje.
- [ ] **Facebook** (nëse kanë)

---

## 2. Publikimi (teknike)
- [ ] **Domain-i**: cili do jetë? → `NEXT_PUBLIC_SITE_URL` (shih `.env.example`)
- [ ] **Email-i i formularit**: çelës Resend ose SendGrid (`RESEND_API_KEY` / `SENDGRID_API_KEY`) dhe një email dërguesi i verifikuar te domain-i.
      ⚠️ Pa këtë, formulari nuk dërgon kërkesa.
- [ ] **Hostimi** (p.sh. Vercel), me variablat e mjedisit.
- [ ] **Google Search Console**: verifiko domain-in dhe dorëzo `https://domain/sitemap.xml`
- [ ] **Google Business Profile**: vendos aty linkun e faqes dhe numrin e njëjtë (NAP i njëjtë kudo).
- [ ] **Test pas publikimit**: dërgo një kërkesë provë nga formulari (me foto), provo "Call Now" në celular, kontrollo faqen në telefon.

---

## 3. Përmbajtja
- [ ] **Faqet ligjore** (Privacy, Terms, Accessibility): t'i rishikojë klienti ose një jurist.
- [ ] **Fotot stock që kanë mbetur** (rrugë NYC, gaz, kapak kanalizimi, rubinet, pompë, etj.): zëvendësoji kur të vijnë më shumë foto reale.
- [ ] **Faqja About**: një paragraf i shkurtër për pronarin/historinë e kompanisë do e bënte më personale. (Pyet klientin.)

---

## 4. SEO lokale (jashtë faqes, peshon më shumë se vetë faqja)

### Nga klienti / ne bashkë me klientin
- [ ] **Google Business Profile**: hape ose verifikoje (business.google.com). Kategoria kryesore: *Plumber*. Shto:
      - NAP identik me faqen: `PLUMBON24 MECHANICAL INC`, `235 43rd St, Brooklyn, NY 11232`, `(917) 702-0072`
      - Service areas: Manhattan, Brooklyn, Queens, Bronx, Staten Island
      - Orari Mon–Fri 9–5 + "Open 24 hours" për emergjencat (ose shënim në përshkrim)
      - Linkun e faqes, shërbimet, 10+ foto reale nga `plumbon24-materiale`
      - Postime të rregullta (1 në javë: projekt, foto, këshillë)
- [ ] **Review në Google**: t'u kërkojë klientëve të kënaqur review pas çdo pune (me link direkt nga GBP → "Ask for reviews"). Synimi: 10+ review në 2–3 muajt e parë, dhe t'u përgjigjet të gjithave.
- [ ] **Citations (NAP i njëjtë kudo)**: profil në Yelp, Angi, HomeAdvisor, Thumbtack, BBB, Facebook, Nextdoor, Apple Maps (Business Connect), Bing Places. Emri, adresa dhe telefoni duhet të jenë **saktësisht** si në faqe.
- [ ] **Backlinks**: link nga furnitorët, kontraktorët partnerë, shoqatat lokale (p.sh. Chamber of Commerce), komuniteti shqiptar në NYC.

### Nga ne (teknike)
- [ ] **Domain + `NEXT_PUBLIC_SITE_URL`**: pa këtë, canonical dhe sitemap tregojnë `localhost`. ⚠️ Mos publiko pa të.
- [ ] **Google Search Console**: verifiko domain-in, dorëzo `sitemap.xml`, kërko indeksimin e faqes kryesore.
- [ ] **Bing Webmaster Tools**: importo nga Search Console.
- [ ] **Faqe për çdo borough** (`/service-areas/queens` etj.), me përmbajtje unike për secilin (lloje ndërtesash, probleme tipike, projekte aty). Vetëm kur kemi informacion real, ndryshe Google i sheh si "doorway pages".
- [ ] **Licensed & Insured + numri i licencës** në faqe dhe në schema, kur ta japë klienti.
- [ ] **Review në schema** (`aggregateRating`), vetëm me review reale të verifikueshme.
- [x] **Lighthouse audit** (2026-10-19, lokalisht): Accessibility 100, Best Practices 100, SEO 100 në të gjitha faqet. Performance desktop 99, CLS 0. Mobile 80–92 (luhatje e madhe; edhe /terms del njësoj, pra është kostoja e Next/React, jo e faqes).
      → [ ] Pas publikimit: provo **PageSpeed Insights** te URL-ja reale (Vercel CDN zakonisht jep më shumë se localhost).
- [x] **Koordinatat `geo`** në schema (OpenStreetMap + US Census, 2026-10-19).
- [ ] **Analytics** (Vercel Analytics, pa cookies) + ndjekja e klikimeve "Call Now" dhe dërgimeve të formularit. Përditëso faqen Privacy.
- [ ] **Kontroll mujor** në Search Console: cilat fjalë sjellin vizita, cilat faqe nuk janë indeksuar.
