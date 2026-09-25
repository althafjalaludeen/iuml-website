# IUML Institutional Website — Foundation Phase Walkthrough

The foundation phase for the **Indian Union Muslim League (IUML)** institutional website has been established. The architecture prioritizes data integrity, accessibility, responsive editorial layout, and strict adherence to institutional constraints.

---

## 1. Core Principles Enforced

- **Branding Restraint**: Temporary text identity (`IUML` / `Indian Union Muslim League`) in place; no invented logos, crests, or monograms. Created future-ready `public/brand/` directory.
- **Content Integrity**: Zero invented historical facts, committee members, statistics, metrics, counters, or campaign claims. All sections feature clearly demarcated neutral placeholders.
- **Visual Design**: Editorial, institutional aesthetic built on Deep Green (`#0c3b28`), Primary Green (`#165a3a`), Ivory (`#f7f4ec`), White (`#ffffff`), and Charcoal (`#1c1f1c`), with gold used sparingly (`#a6853d`). High-grade typography pairing Cormorant Garamond (headings) and Inter (body/UI).
- **Navigation & Canonical Routing**: All canonical routes (`/`, `/about`, `/history`, `/committee`, `/committee/[id]`, `/activities`, `/events`, `/media`, `/contact`, `/privacy`, `/terms`) are wired up with zero 404s.

---

## 2. Browser Verification Highlights

### Desktop Homepage & Editorial Layout
![Desktop Homepage](file:///C:/Users/HP/.gemini/antigravity-ide/brain/f5ffd341-54f5-4bcb-8af7-f105ab149919/homepage_desktop_1789999349537.png)

### Editorial Sections
![Homepage Editorial Sections](file:///C:/Users/HP/.gemini/antigravity-ide/brain/f5ffd341-54f5-4bcb-8af7-f105ab149919/homepage_desktop_middle_1789999374968.png)

### Subpage Architecture (History & Committee Profile)
````carousel
![History Page](file:///C:/Users/HP/.gemini/antigravity-ide/brain/f5ffd341-54f5-4bcb-8af7-f105ab149919/history_page_1789999607342.png)
<!-- slide -->
![Committee Directory](file:///C:/Users/HP/.gemini/antigravity-ide/brain/f5ffd341-54f5-4bcb-8af7-f105ab149919/committee_page_1789999671832.png)
<!-- slide -->
![Member Profile Template](file:///C:/Users/HP/.gemini/antigravity-ide/brain/f5ffd341-54f5-4bcb-8af7-f105ab149919/member_profile_template_1789999841658.png)
<!-- slide -->
![Activities Page](file:///C:/Users/HP/.gemini/antigravity-ide/brain/f5ffd341-54f5-4bcb-8af7-f105ab149919/activities_page_1789999883139.png)
<!-- slide -->
![Contact Page](file:///C:/Users/HP/.gemini/antigravity-ide/brain/f5ffd341-54f5-4bcb-8af7-f105ab149919/contact_page_1790000039700.png)
````

### Mobile Viewport (375px)
````carousel
![Mobile Header Closed](file:///C:/Users/HP/.gemini/antigravity-ide/brain/f5ffd341-54f5-4bcb-8af7-f105ab149919/mobile_header_closed_1790000089754.png)
<!-- slide -->
![Mobile Menu Open](file:///C:/Users/HP/.gemini/antigravity-ide/brain/f5ffd341-54f5-4bcb-8af7-f105ab149919/mobile_header_open_1790000148570.png)
````

---

## 3. Verification Recording
A video recording of the browser subagent's verification run is saved at:
![Browser Verification Session](file:///C:/Users/HP/.gemini/antigravity-ide/brain/f5ffd341-54f5-4bcb-8af7-f105ab149919/foundation_test_1789999235987.webp)
