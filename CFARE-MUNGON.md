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
- [x] **Licencat**: klienti i ka (2026-10-18). Badge-i "Licensed" u hoq më 2026-11-10 (lloji i licencës i pakonfirmuar). "Insured" jo ende.

---

## 1. Pyetje për klientin

### Në pritje
- [ ] **Numri i licencës + sigurimi (insurance)**: kur t'i japë → `site.credentials.licenseNumber` dhe `insured: true` te `lib/site.ts`. Badge-i bëhet vetë "Licensed & Insured" me numrin.
- [ ] **Google Business Profile**: kanë **zyrë** te 235 43rd St → profil normal me **adresë publike** (jo service-area). Shto edhe 5 boroughs si zonë shërbimi. Linku → `profiles.googleBusinessProfile` te `lib/site.ts`
- [ ] **Review reale**: vijnë pasi të hapet GBP. → `lib/reviews.ts`. Seksioni shfaqet vetë. Vetëm review të vërteta, fjalë për fjalë.
- [x] **Domain-i**: `plumbon24.com`, i blerë dhe i lidhur.

### Shërbimet ✅ (2026-10-18)
- [x] Klienti bën gjithçka **përveç punës jashtë ndërtesës** (water service dhe main sewer deri te rruga).
      → U fshehën `water-line-services` dhe `sewer-line-services` (`published: false`). Për t'i rikthyer: `published: true`.
- [x] Gas Line dhe Backflow: **po** i bën. Mbeten në faqe.
- [x] Sprinklers dhe boilers: **po**. U shtuan si shërbime.
- [x] **2026-11-10: u fshehën shërbimet që kërkojnë licencë të veçantë** përtej LMP-së (`published: false`):
      `fire-sprinkler-systems` (Master Fire Suppression Piping Contractor), `gas-line-plumbing` (GWQ për punëtorët),
      `backflow-prevention` (PE/RA për DEP + tester i certifikuar NYS DOH), `boiler-heating-services` (oil burner / inspektime).
      Tekstet që i përmendnin (hero, About, FAQ, Commercial, Maintenance, panelet Residential/Commercial) u pastruan.
      Hero dhe galeria nuk tregojnë më foto me boilera/sprinkler. Repiping kaloi te kategoria "Kitchens, Bathrooms & Projects".
      Për t'i rikthyer: `published: true` + rikthe tekstet (shih git log).
- [x] **2026-11-10 (më vonë): klienti nuk lejohet të përdorë fjalën "plumbing"** (as në makina). Kudo "plumbing" → **"piping"**,
      "plumber" → "piping contractor" / "technician". URL-të u ndërruan (`/services/emergency-piping` etj.) me redirect 308
      nga të vjetrat te `next.config.ts`. Schema: `Plumber` → `HVACBusiness`.
- [x] Klienti bën edhe **heating** (steam pipe repair): `boiler-heating-services` u rikthye, me steam pipe repair.
- Gjithsej **17 shërbime** në faqe. Boilers mbeten te kartat e faqes kryesore dhe në footer.
- [x] **GBP**: kategoria, përshkrimi dhe shërbimet u rregulluan (2026-11-10).
- [x] **Badge "Licensed"**: u hoq (2026-11-10, `credentials.licensed: false` te `lib/site.ts`). Zhduket nga hero
      (kalon në 2 kolona), faktet e shërbimeve dhe FAQ "Are you licensed?". Për ta rikthyer: `licensed: true`.

### Opsionale
- [ ] **Videoja**: a duan ta vendosim në faqe?
- [ ] **Mënyrat e pagesës** (cash, card, Zelle, check?)
- [ ] **Gjuhët që flasin** (p.sh. English, Albanian, Spanish?). Në NYC kjo vlen si pikë shitjeje.
- [ ] **Facebook** (nëse kanë)

---

## 2. Publikimi (teknike)
- [x] **Domain-i**: `plumbon24.com` (Namecheap). `NEXT_PUBLIC_SITE_URL=https://www.plumbon24.com` në Vercel.
- [x] **Email-i i formularit** (2026-10-27): Resend, domain-i `plumbon24.com` i verifikuar, dërguesi `website@plumbon24.com`, kërkesat shkojnë te `info@plumbon24.com`. Testi me formular: ✅ erdhi.
      Email-i i domain-it: Google Workspace (MX, SPF, DKIM, DMARC në Namecheap).
- [x] **Hostimi**: Vercel (`plumbon24-six.vercel.app`), variablat e mjedisit në Production.
      → [x] U lidh `plumbon24.com` + `www` te Vercel (2026-10-29). Apex bën 308 te `www`.
- [x] **Google Search Console** (2026-10-29): domain-i u verifikua, u kërkua indeksimi i faqes kryesore. **Bing**: u importua nga GSC.
- [ ] **Google Business Profile**: vendos aty linkun e faqes dhe numrin e njëjtë (NAP i njëjtë kudo).
- [ ] **Test pas publikimit**: dërgo një kërkesë provë nga formulari (me foto), provo "Call Now" në celular, kontrollo faqen në telefon.
      → **2026-11-12: forma online raportohet se nuk punon.** Testi direkt te `/api/contact` (pa foto) ktheu `ok: true`,
        pra serveri dhe Resend punojnë (u dërgua një email "TEST – please ignore" te `info@plumbon24.com`; **erdhi** ✅).
        Testi në shfletues (Edge, desktop) te `https://www.plumbon24.com/contact` me një foto 6.3 MB: `200`, "Request received" ✅.
        Në pritje: ku/si nuk punon (telefon? iPhone/HEIC? faqja kryesore apo /contact? lokalisht?) dhe mesazhi që shfaqet.

---

## 3. Përmbajtja
- [ ] **Faqet ligjore** (Privacy, Terms, Accessibility): t'i rishikojë klienti ose një jurist.
- [ ] **Fotot stock që kanë mbetur** (rrugë NYC, gaz, kapak kanalizimi, rubinet, pompë, etj.): zëvendësoji kur të vijnë më shumë foto reale.
- [ ] **Faqja About**: një paragraf i shkurtër për pronarin/historinë e kompanisë do e bënte më personale. (Pyet klientin.)

---

## 4. SEO lokale (jashtë faqes, peshon më shumë se vetë faqja)

### Nga klienti / ne bashkë me klientin
- [ ] **Google Business Profile**: profili është krijuar; **po presim të bëhet aktiv** (2026-11-12). Kategoria dhe shërbimet
      u rregulluan më 2026-11-10 (pa fjalën "plumbing"/"plumber"). Kur të jetë publik: linku → `profiles.googleBusinessProfile` te `lib/site.ts`. Shto:
      - NAP identik me faqen: `PLUMBON24 MECHANICAL INC`, `235 43rd St, Brooklyn, NY 11232`, `(917) 702-0072`
      - Service areas: Manhattan, Brooklyn, Queens, Bronx, Staten Island
      - Orari Mon–Fri 9–5 + "Open 24 hours" për emergjencat (ose shënim në përshkrim)
      - Linkun e faqes, shërbimet, 10+ foto reale nga `plumbon24-materiale`
      - Postime të rregullta (1 në javë: projekt, foto, këshillë)
- [ ] **Review në Google**: t'u kërkojë klientëve të kënaqur review pas çdo pune (me link direkt nga GBP → "Ask for reviews"). Synimi: 10+ review në 2–3 muajt e parë, dhe t'u përgjigjet të gjithave.
- [ ] **Citations (NAP i njëjtë kudo)**: profil në Yelp, Angi, HomeAdvisor, Thumbtack, BBB, Facebook, Nextdoor, Apple Maps (Business Connect), Bing Places. Emri, adresa dhe telefoni duhet të jenë **saktësisht** si në faqe.
- [ ] **Backlinks**: link nga furnitorët, kontraktorët partnerë, shoqatat lokale (p.sh. Chamber of Commerce), komuniteti shqiptar në NYC.

### Nga ne (teknike)
- [x] **Domain + `NEXT_PUBLIC_SITE_URL`** (2026-10-29).
- [x] **Google Search Console** (2026-10-29).
- [x] **Bing Webmaster Tools** (2026-10-29): importuar nga GSC.
- [x] **Faqe për çdo kategori shërbimesh** (2026-11-12): `/services/category/repairs`, `/heating-hot-water-fixtures`,
      `/kitchens-bathrooms-projects`, `/residential-commercial`. Lidhen nga `/services` (në vend të `#`), menuja, breadcrumbs dhe sitemap.
      Teksti i tyre është te `serviceCategories` në `lib/services/index.ts`. Kategoria pa shërbime të publikuara nuk merr faqe.
- [ ] **Faqe për çdo borough** (`/service-areas/queens` etj.), me përmbajtje unike për secilin (lloje ndërtesash, probleme tipike, projekte aty). Vetëm kur kemi informacion real, ndryshe Google i sheh si "doorway pages".
- [ ] **Licensed & Insured + numri i licencës** në faqe dhe në schema, kur ta japë klienti.
- [ ] **Review në schema** (`aggregateRating`), vetëm me review reale të verifikueshme.
- [x] **Lighthouse audit** (2026-10-19, lokalisht): Accessibility 100, Best Practices 100, SEO 100 në të gjitha faqet. Performance desktop 99, CLS 0. Mobile 80–92 (luhatje e madhe; edhe /terms del njësoj, pra është kostoja e Next/React, jo e faqes).
      → [x] **PageSpeed Insights** te URL-ja reale (2026-10-29): 100 në të katër kategoritë, desktop dhe mobile.
- [x] **Koordinatat `geo`** në schema (OpenStreetMap + US Census, 2026-10-19).
- [x] **Google Tag Manager `GTM-T7G4NV6H`** (2026-11-12, në kod): ngarkohet në çdo faqe nga `app/layout.tsx` (`@next/third-parties`).
      dataLayer: `phone_click` (`phone_number`, `page_path`) për çdo link `tel:`; `generate_lead` (`form_id`, `form_location`, `service_type`)
      vetëm pas `response.ok` nga `/api/contact` (jo kur dështon, jo për honeypot). Asnjë e dhënë e klientit në dataLayer.
      Faqja Privacy u përditësua (seksioni "Advertising measurement"). Testuar lokalisht në Chrome headless: 18/18.
      → [ ] **Brenda GTM**: triggers Custom Event `generate_lead` + `phone_click`, Conversion Linker, tag-et Google Ads Conversion
        (Conversion ID + Label nga Google Ads), pastaj **Submit/Publish** containerin.
      → [ ] **Test live** me GTM Preview / Tag Assistant te https://www.plumbon24.com pas deploy-it.
      → [ ] Opsionale: GA4 nga brenda GTM (jo në kod) + Vercel Analytics.
- [ ] **Kontroll mujor** në Search Console: cilat fjalë sjellin vizita, cilat faqe nuk janë indeksuar.
