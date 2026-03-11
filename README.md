# Chicago Stump Grinding — Next.js Website

Production-ready local SEO website for **chicagostumpgrinding.com**.

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Vercel** (deployment target)

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
├── app/                         # Next.js App Router pages
│   ├── layout.tsx               # Root layout (Header, Footer, metadata)
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles + Tailwind
│   ├── sitemap.ts               # Auto-generated sitemap
│   ├── robots.ts                # Robots.txt config
│   ├── not-found.tsx            # Custom 404
│   ├── stump-grinding/
│   ├── stump-removal/
│   ├── tree-service/
│   ├── tree-removal/
│   ├── service-areas/
│   │   ├── page.tsx             # All service areas index
│   │   └── [slug]/page.tsx      # Dynamic suburb pages (22 total)
│   ├── pricing/
│   ├── about/
│   ├── faq/
│   ├── request-quote/
│   ├── contact/
│   └── blog/
│       ├── page.tsx             # Blog index
│       └── [slug]/page.tsx      # Dynamic blog posts
│
├── components/                  # Reusable components
│   ├── Header.tsx               # Sticky nav with dropdown
│   ├── Footer.tsx               # Full footer with links
│   ├── Hero.tsx                 # Hero section (multiple variants)
│   ├── QuoteForm.tsx            # Lead capture form
│   ├── FAQAccordion.tsx         # FAQ with JSON-LD schema
│   └── UIComponents.tsx         # CTABanner, ServiceCard, Testimonials, etc.
│
├── data/
│   ├── suburbs.ts               # All suburb/city data (22 pages)
│   └── blog-posts.ts            # Blog post content
│
└── lib/
    └── constants.ts             # Site-wide constants (phone, brand, services)
```

---

## SEO Features

- Unique `metadata` (title + description) on every page
- JSON-LD structured data:
  - `LocalBusiness` on homepage
  - `Service` on service/suburb pages
  - `FAQPage` on FAQ accordion components
  - `Article` on blog posts
  - `BreadcrumbList` on suburb and blog pages
- Auto-generated `sitemap.xml` at `/sitemap.xml`
- Auto-generated `robots.txt` at `/robots.txt`
- Static generation for all suburb and blog pages via `generateStaticParams`
- Canonical URLs on every page

---

## Suburb Pages

All 22 suburb pages are generated dynamically from `data/suburbs.ts`.

**Stump Grinding Pages (13):**
- Naperville, Hinsdale, Downers Grove, Glen Ellyn, Oak Brook
- Western Springs, La Grange, Burr Ridge, Elmhurst, Wheaton
- Darien, Lemont, Homer Glen

**Tree Service Pages (9):**
- Hinsdale, Glen Ellyn, Oak Brook, Western Springs, Burr Ridge
- Elmhurst, Wheaton, Lemont, Homer Glen

To add a new suburb, add an entry to `data/suburbs.ts` — no other changes needed.

---

## Adding New Suburb Pages

1. Open `data/suburbs.ts`
2. Add a new `SuburbData` object to the `SUBURBS` array
3. The page is automatically generated, included in sitemap, and linked

---

## Domain Redirect Setup

All additional domains should 301 redirect to their matching suburb pages:

| Domain | → Redirects To |
|--------|----------------|
| napervillestumpgrinding.com | /service-areas/naperville-stump-grinding |
| hinsdalestumpgrinding.com | /service-areas/hinsdale-stump-grinding |
| wheatonstumpgrinding.com | /service-areas/wheaton-stump-grinding |
| elmhurststumpgrinding.com | /service-areas/elmhurst-stump-grinding |
| hinsdaletreeservice.com | /service-areas/hinsdale-tree-service |
| (etc.) | |

Configure these redirects in your domain registrar, Cloudflare, or Vercel.

---

## Deployment to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

Or connect the GitHub repo to Vercel for automatic deployments.

---

## Lead Form Backend

The quote form (`components/QuoteForm.tsx`) currently uses a mock handler. To wire it to a real backend:

1. Create `app/api/quote/route.ts` with a `POST` handler
2. Update the `handleSubmit` function in `QuoteForm.tsx` to POST to `/api/quote`
3. Forward form data to email, CRM, or webhook (e.g. Formspree, Zapier, HubSpot)

---

## Customization Checklist

- [ ] Replace `(312) 555-0188` with real phone number in `lib/constants.ts`
- [ ] Replace email address in `lib/constants.ts`  
- [ ] Add real Google reviews / testimonials in `lib/constants.ts`
- [ ] Add Google Analytics or tracking pixel to `app/layout.tsx`
- [ ] Wire quote form to real email/CRM backend
- [ ] Add real photos (replace emoji icons)
- [ ] Configure domain and 301 redirects
- [ ] Set up Google Business Profile
- [ ] Submit sitemap to Google Search Console
