# HVAC Only — Site Rebuild

## Overview
Converting hvaconly.com from WordPress 6.7.5 to a fully static responsive site.

**Stack:** Static HTML + Bootstrap + custom CSS  
**Nginx:** port 8093 → `/home/smokeshow/code/hvaconly/newsite/extracted/hvac_08042026/hvac`  
**Source (new site):** `newsite/extracted/hvac_08042026/hvac/`  
**Source (old WP):** `/home/smokeshow/code/hvaconly/` (WordPress, kept for reference/assets)  
**GitHub:** TBD

## Pages
- index.html, about.html, services.html, heating.html, cooling.html
- air-quality.html, contact.html, reports.html, our-privacy.html, packaged-units.html

---

## Build Progress

### Phase 1 — Nginx Setup ✅
- Pointed nginx port 8093 to static HTML folder (replaced WP root)

### Phase 2 — Front Page Fixes ✅ (2026-04-08)
- Removed `plus_ic.png` decorative spans (both `plus-left` and `plus-right`) from Heating service card
- Fixed Jennifer Kay testimonial photo: HTML referenced `jenn-key.png` (lowercase) but file is `Jenn-key.png` — fixed to `Jenn-key.png`
- Fixed alt text on both testimonial photos (was "User", now proper names)

### Phase 3 — Full SEO ✅ (2026-04-08)
- Added unique meta title + description to all 10 pages (keyword-rich, location-targeted)
- Added canonical tags, robots meta, OG tags, Twitter Card tags to all 10 pages
- Added geo meta tags (geo.region, geo.placename, geo.position, ICBM) to all 10 pages
- Added JSON-LD HVACBusiness schema with full NAP, hours, 17-city areaServed array to all 10 pages
- Created sitemap.xml (all 10 pages, prioritized by importance)
- Created robots.txt with sitemap reference
- Added service area footer line to all 10 pages: Lakewood, Denver, Wheat Ridge, Englewood, Littleton, Arvada, Westminster, Golden, Highlands Ranch, Aurora, Broomfield, Morrison, Evergreen + surrounding Front Range

**Service area targeting (within 25 miles of 80227):** Lakewood, Denver, Wheat Ridge, Englewood, Littleton, Arvada, Westminster, Golden, Highlands Ranch, Aurora, Broomfield, Morrison, Edgewater, Centennial, Lone Tree, Evergreen, Thornton

---

### Phase 4 — Image Alt Text, Contact Form & PHP ✅ (2026-04-08)
- Added descriptive SEO alt text to all 25 content images across 8 pages (aboutImg, airImg, coolingImg, heatingImg, servicesImg, packegedImg, reportsImg, hvac-banner)
- Contact form: added `name` attributes, labels with `for`/`id`, AJAX submit with success/error messaging
- Created `contact-handler.php` — validates fields, sends email to info@hvaconly.com via PHP `mail()`
- Updated nginx config to add PHP-FPM 8.3 block so contact form handler works
- Nginx reloaded successfully

---

### Phase 5 — Mobile Responsiveness ✅ (2026-04-08)
- Hero section: text now stacks ABOVE image on mobile (< 992px) using CSS order — better UX than image-first
- Service pages: fixed content `margin-right: 40px` not being reset on mobile (was cutting into content area)
- Testimonials: removed fixed `min-height` on small screens (< 576px) — now `auto` to prevent overflow clipping
- Footer service area: added `font-size: 13px` / `12px` responsive styles for city list
- Footer nav: added `flex-wrap: wrap` at < 480px so links wrap rather than overflow

---

## Next Up
- Set up GitHub repo
- Review service page content for accuracy (heating, cooling, air-quality, packaged-units)
- Consider adding a Google Maps embed to contact page
