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

---

## 1. Pyetje për klientin (dërgoja këto)

### Të rëndësishme (rrisin besimin e klientit amerikan)
- [ ] **A janë Licensed & Insured?** Nëse po: numri i licencës (NYC Licensed Master Plumber / LMP #) dhe emri i licencuesit.
      → Shfaqet në hero, footer dhe TrustBar (duhet shtuar një fushë te `lib/site.ts`).
- [ ] **Review reale nga klientët**: linku i Google Business Profile, Yelp ose Facebook, ose screenshot-e të review-ve.
      → `lib/reviews.ts`. Seksioni shfaqet vetë. Vetëm review të vërteta, fjalë për fjalë.
- [ ] **Link i Google Business Profile** (nëse e kanë; nëse jo, rekomandohet ta hapin)
      → `profiles.googleBusinessProfile` te `lib/site.ts`

### Shërbimet
- [ ] **Cilat nga këto 20 shërbime i ofrojnë realisht?** Ato që nuk i ofrojnë fshihen nga faqja (`published: false`).
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
- [ ] **A bëjnë edhe sprinkler / fire protection?** Në fotot e tyre ka valvola sprinkler dhe FDC. Nëse po, mund të shtohet si shërbim.
- [ ] **A bëjnë heating / boilers?** Fotot tregojnë dhoma boileri. Nëse po, mund të shtohet si shërbim.

### Detaje të tjera
- [ ] **Fotot e banjave/kuzhinës së përfunduar**: a janë punë e tyre dhe a kanë të drejtë t'i përdorin? (Duken foto profesionale të fotografuara nga dikush tjetër.)
- [ ] **Ku i kanë bërë projektet?** P.sh. "Bathroom renovation, Park Slope". Me lagjen/llojin e projektit, galeria bind shumë më shumë.
- [ ] **Videoja**: a duan ta vendosim në faqe?
- [ ] **Vitet e eksperiencës**: a është saktë "15+"? Viti kur u themelua kompania?
- [ ] **Mënyrat e pagesës** (cash, card, Zelle, check?) (opsionale)
- [ ] **Gjuhët që flasin** (p.sh. English, Albanian, Spanish?). Në NYC kjo vlen si pikë shitjeje. (opsionale)
- [ ] **Email-i**: a mbetet `plumbon24@gmail.com`, apo do email me domain (p.sh. `info@plumbon24.com`)?
- [ ] **Instagram / Facebook** (nëse kanë)

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
