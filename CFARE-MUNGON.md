# PLUMBON24 – Çfarë mungon para publikimit

Ana teknike e faqes është gati. Këto pika varen nga klienti ose nga publikimi.

## 1. Informacion nga klienti
- [x] **Numri i telefonit** → `lib/site.ts` (fusha `phone`). Butonat "Call Now" shfaqen vetë.
- [ ] **Cilat shërbime ofrojnë realisht** (nga 20) → `published: false` te `lib/services/catalog/*.ts` për ato që nuk i ofrojnë.
      Kujdes: gas, backflow dhe linjat e ujit/kanalizimit nën rrugë kërkojnë licencë në NYC.
- [x] **Lagjet që mbulojnë** → `lib/service-areas.ts`
- [x] **A ofrojnë "Free Estimate"?** → `features.freeEstimates` te `lib/site.ts`
- [x] **A ofrojnë shërbim emergjence?** → `features.emergencyService` te `lib/site.ts`
- [x] **Orari i punës** (opsionale) → `openingHours` te `lib/site.ts`
- [ ] **Link i Google Business Profile** (opsionale) → `profiles.googleBusinessProfile` te `lib/site.ts`

## 2. Publikimi
- [ ] **Domain-i** → `NEXT_PUBLIC_SITE_URL` (shih `.env.example`)
- [ ] **Email-i i formularit** → çelës Resend ose SendGrid (`RESEND_API_KEY` / `SENDGRID_API_KEY`).
      Pa këtë, formulari nuk dërgon kërkesa.
- [ ] **Hostimi** (p.sh. Vercel)
- [ ] **Google Search Console** → dorëzo `https://domain/sitemap.xml`

## 3. Përmbajtja
- [x] **Foto reale** të punës së tyre, në vend të fotove stock nga Pexels (`public/images/`)
- [ ] **Rishikimi i faqeve ligjore** (Privacy, Terms, Accessibility) nga klienti ose një jurist
- [ ] **Vlerësime reale** nga klientët → `lib/reviews.ts`. Seksioni shfaqet vetë.
