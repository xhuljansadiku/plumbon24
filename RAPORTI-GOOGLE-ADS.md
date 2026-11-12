# Raporti mujor i Google Ads – PLUMBON24

Si përgatitet raporti mujor për klientin, çfarë futet në të dhe ku gjenden numrat.
Muaji i parë bëhet **manualisht**. Automatizimi me Looker Studio vjen më vonë.

---

## Kur
- **Çdo muaj, ditën e 1-rë**, për muajin që sapo mbaroi.
- **Raporti i parë:** 10–30 nëntor 2026 (fushata nisi më 10 nëntor). Dërgohet rreth 1 dhjetorit.

## Të dhënat e llogarisë
| Çfarë | Vlera |
|---|---|
| Llogaria Google | info@plumbon24.com |
| Google Ads ID | AW-18567310428 |
| Google Tag Manager | GTM-KTS5MR48 |
| Fushata | NYC Piping & Heating (Performance Max) |
| Buxheti | $9.60 / ditë (rreth $290 / muaj) |

---

## 1. Mblidh numrat (rreth 5 minuta)

### A. Google Ads: tabela kryesore
1. Hap **Campaigns** dhe zgjidh periudhën e muajit lart djathtas.
2. Duhet të shihen kolonat: **Impressions, Clicks, Cost, Conversions, Cost / conv.**
   Nëse mungon ndonjë, shtoje te **Columns**.
3. Bëj **screenshot**.

### B. Google Ads: konvertimet sipas llojit
1. Te e njëjta tabelë kliko **Segment → Conversions → Conversion action**.
2. Bëj **screenshot**. Aty duken veçmas:

| Emri në Google Ads | Si e quajmë në raport | Çfarë është |
|---|---|---|
| **Contact** | **Quote requests** | Formular i dërguar me sukses në faqe |
| **Calls from ads** | **Calls from ads** | Thirrje direkte nga butoni "Call" te reklama |
| **Click to call** | **Phone taps** | Dikush shtypi numrin te faqja |
| **Clicks to call** | (zakonisht 0) | Klikime në numër brenda faqeve të Google |

### C. Inbox-i
- Te **info@plumbon24.com**, numëro email-et **"New service request"** të atij muaji.
- Hiq testet ("TEST – please ignore").
- Ky numër përfshin **të gjitha** kërkesat. Disa mund të kenë ardhur pa reklamë, p.sh. nga Google Maps ose me rekomandim.

### D. Opsionale
- **Insights and reports → Search terms**: 3–5 kërkimet më të mira, për t'i treguar klientit çfarë kërkojnë njerëzit.
- **Locations**: nga cili borough vijnë më shumë.

➡️ **Ia dërgon Claude-it:** screenshot-et A dhe B, numrin e email-eve, dhe Search terms nëse i ke.

---

## 2. Rregullat e raportit (me ndershmëri)
- **"Phone taps" nuk janë thirrje.** Thuaj "people tapped the phone number", jo "calls". Një person mund të shtypë dhe të mos telefonojë.
- **"Calls from ads"** janë thirrje reale nga reklama. Kur ka të dhëna, përmend sa zgjatën.
- **Leads gjithsej** = Quote requests + Calls from ads. Phone taps jepen veçmas.
- **Kosto për lead** = Cost ÷ (Quote requests + Calls from ads).
- Mos premto rezultate. Muaji i parë është muaj **mësimi** për Google: thuaje këtë qartë.
- Pyete klientin **sa nga këto lead-e u bënë punë reale**. Kjo është e vetmja mënyrë për të ditur fitimin e vërtetë.
- Asnjëherë **"plumber" / "plumbing"** në raport (rregull i klientit).

---

## 3. Shablloni i raportit (anglisht)

> Kur i dërgon Claude-it numrat, ai e plotëson këtë shabllon. Nëse e do në shqip, thuaje.

```
Subject: Google Ads report – [Month Year] – PLUMBON24

Hi [Client name],

Here is your Google Ads summary for [date range].

RESULTS
• Quote requests (website form):     [X]
• Calls from ads:                     [X]
• Phone number taps on the website:   [X]
• Total leads (quotes + calls):       [X]

AD ACTIVITY
• People who saw the ads:             [impressions]
• Clicks to the website:              [clicks]
• Amount spent:                       $[cost]
• Cost per lead:                      $[cost ÷ leads]

WHAT WE DID THIS MONTH
• [e.g. Removed searches unrelated to your work (jobs, DIY, schools)]
• [e.g. Focused ads on the 5 boroughs only]

NEXT MONTH
• [e.g. Keep adding negative keywords from real searches]
• [e.g. Suggestion about budget / Search campaign]

Could you tell me how many of these leads turned into jobs?
That helps us focus the budget on what works best.

Best regards,
[Your name]
```

---

## 4. Para se ta dërgosh
- [ ] Periudha është e saktë (data e fillimit dhe e mbarimit).
- [ ] Numrat në raport përputhen me screenshot-et.
- [ ] "Phone taps" dhe "Calls" janë të ndara.
- [ ] Asnjë "plumber" / "plumbing".
- [ ] Testet nuk janë numëruar.

---

## 5. Historiku

| Muaji | Impr. | Clicks | Cost | Quotes | Calls from ads | Phone taps | Kosto/lead | Shënime |
|---|---|---|---|---|---|---|---|---|
| Nëntor 2026 (10–30) | | | | | | | | Muaj mësimi. Fushata u pastrua më 12 nëntor. |
| Dhjetor 2026 | | | | | | | | |

---

## 6. Më vonë
- **Rreshti "Source: Google Ads" te email-et e formularit**: i propozuar, ende i pabërë. Me të, klienti sheh në inbox cila kërkesë erdhi nga reklama.
- **Looker Studio**: raport automatik që i shkon klientit me email çdo 1 të muajit.
