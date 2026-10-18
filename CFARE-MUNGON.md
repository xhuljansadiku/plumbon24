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
- [x] Email-i mbetet `plumbon24@gmail.com`
- [x] Eksperienca: 15+ vite eksperiencë personale. Kompania sapo është hapur, ndaj **mos shkruaj kurrë** "since 20XX", "in business for 15 years" ose `foundingDate` në schema.
- [x] Fotot: përdorim ato që dërguan + fotot falas me licencë (`docs/IMAGE-CREDITS.md`). Fotot e banjave/kuzhinave të përfunduara janë në rregull.
- [x] Lagjet e projekteve: nuk dihen. Galeria dhe karta te hero mbeten pa lagje.
- [x] Instagram: https://www.instagram.com/plumbon24/ (shtuar në footer dhe te `sameAs` në schema)

## ✅ Të marra nga klienti (2026-10-18)
- [x] Bëjnë **sprinklers**: u shtua `/services/fire-sprinkler-systems` (kategoria Water, Sewer, Gas & Sprinkler Lines)
- [x] Bëjnë **boilers**: u shtua `/services/boiler-heating-services` (kategoria Heating, Hot Water & Fixtures)
- [x] Dërguan foto të reja në WhatsApp: valvola sprinkler, underground, 6 water heaters, combi boilers + manifold radiant
      → [ ] **Shkarko origjinalet** nga WhatsApp (jo screenshot) te `plumbon24-materiale/` dhe vendosi në faqe.
- [ ] **Licenca për sprinklers**: në NYC, puna me sprinkler zakonisht kërkon licencë Master Fire Suppression Piping Contractor (ose kufizime për LMP). Pyet cilën licencë kanë. Faqja nuk pretendon licencë.

---

## 1. Pyetje për klientin

### Në pritje
- [ ] **Licensed & Insured + numri LMP**: klienti pyeti nëse duhet patjetër. Për faqen jo, por mos e shkruaj pa e konfirmuar. Për punën në NYC, shumica e punëve hidraulike kërkojnë LMP (Gas Line dhe Backflow sidomos).
      → Kur ta japë: shfaqet në hero (pranë "15+ Years" dhe adresës), te faktet e faqeve të shërbimeve dhe në footer (duhet shtuar një fushë te `lib/site.ts`).
- [ ] **Google Business Profile**: do ta hapim ne me email-in e klientit. Linku → `profiles.googleBusinessProfile` te `lib/site.ts`
- [ ] **Review reale**: vijnë pasi të hapet GBP. → `lib/reviews.ts`. Seksioni shfaqet vetë. Vetëm review të vërteta, fjalë për fjalë.
- [ ] **Domain-i**: `plumbon24.com` (i lirë më 2026-10-17). Blije sa më shpejt, në emër të klientit. Faqja do jetë `https://www.plumbon24.com`.

### Shërbimet (klienti po i pyet)
- [ ] **Cilat nga këto 20 shërbime i ofrojnë realisht?** (+ sprinklers dhe boilers, të konfirmuara) Ato që nuk i ofrojnë fshihen nga faqja (`published: false`).
      1. Emergency Plumbing
      2. Drain Cleaning
      3. Water Heater Services
      4. Sewer Line Services
      5. Leak Detection & Repair
      6. Pipe Repair & Replacement
      7. Repiping
      8. Water Line Services
      9. Gas Line Plumbing ⚠️ kërkon licencë në NYC
      10. Backflow Prevention ⚠️ kërkon certifikim në NYC
      11. Faucet & Fixture Repair
      12. Toilet Repair & Installation
      13. Garbage Disposal Services
      14. Sump Pump Services
      15. Kitchen Plumbing
      16. Bathroom Plumbing
      17. Plumbing Installation
      18. Plumbing Maintenance
      19. Residential Plumbing
      20. Commercial Plumbing

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
- [ ] **Lighthouse audit** para publikimit (Performance / SEO / Accessibility ≥ 90).
- [ ] **Analytics** (Vercel Analytics, pa cookies) + ndjekja e klikimeve "Call Now" dhe dërgimeve të formularit. Përditëso faqen Privacy.
- [ ] **Kontroll mujor** në Search Console: cilat fjalë sjellin vizita, cilat faqe nuk janë indeksuar.
