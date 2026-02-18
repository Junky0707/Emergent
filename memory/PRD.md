# AURAVITA - Premium Shopify Theme PRD

## Original Problem Statement
Build a premium Shopify Theme Store theme for Premium DTC Wellness Brands (supplements, skincare, self-care) with full Theme Store compliance.

## Theme Concept
**Name:** AURAVITA  
**Niche:** Premium DTC Wellness Brands  
**Positioning:** "The Clinical Botanist" - bridging clinical efficacy and organic wellness

## Architecture

### React Demo Application
- `/app/frontend/src/` - Complete theme preview demo
- Pages: HomePage, ProductPage, CollectionPage, AboutPage
- Components: Header, Footer, CartDrawer, AnnouncementBar
- Sections: Hero, FeaturedProducts, IngredientBreakdown, BeforeAfterSlider, Testimonials, BrandStory, NewsletterSection, TrustBadges, FeaturedCollections

### Shopify Theme Structure
- `/app/theme/layout/` - theme.liquid
- `/app/theme/templates/` - JSON templates (index.json)
- `/app/theme/sections/` - hero.liquid with schema
- `/app/theme/config/` - settings_schema.json, settings_data.json
- `/app/theme/locales/` - en.default.json

## User Personas
1. **Wellness Brand Founders** - Need premium, conversion-focused storefront
2. **Supplement Companies** - Require ingredient transparency, subscription support
3. **Skincare Brands** - Need before/after results, clinical credibility

## Core Requirements (Static)
- Online Store 2.0 compatibility
- JSON templates with sections everywhere
- WCAG 2.1 accessibility compliance
- Mobile-first responsive design
- Lighthouse 90+ performance target
- No jQuery, minimal JS
- Schema-driven customization

## What's Been Implemented (Jan 2026)
✅ Complete React demo with all major sections
✅ Split-screen hero with asymmetric layout
✅ Featured products with quick add
✅ Ingredient breakdown with expandable cards
✅ Before/After slider (accessible, keyboard-navigable)
✅ Testimonials carousel
✅ Brand story timeline
✅ Newsletter with toast notifications
✅ Product page with sticky ATC, variant selector, subscription toggle
✅ Collection page with filters, sorting, grid toggle
✅ Cart drawer with shipping progress, upsells
✅ Mega menu navigation
✅ Announcement bar with rotation
✅ About page with mission, values, team
✅ Shopify theme layout (theme.liquid)
✅ Homepage JSON template
✅ Hero section with schema
✅ Settings schema with 3 presets
✅ Localization file

## Demo Presets
1. **Clean Clinical** - Light, sage accents, minimalist (supplements)
2. **Warm Botanical** - Earthy tones, textures (skincare)
3. **Modern Luxury** - Dark mode, gold accents (high-end wellness)

## Prioritized Backlog

### P0 (Critical for Theme Store)
- [ ] Complete all Shopify sections (featured-collection, product-grid, etc.)
- [ ] Product template JSON
- [ ] Collection template JSON
- [ ] Theme Check validation pass
- [ ] Performance optimization audit

### P1 (High Value)
- [ ] Search functionality
- [ ] Predictive search
- [ ] Quick view modal
- [ ] Image zoom on product page
- [ ] Size chart section

### P2 (Nice to Have)
- [ ] Wishlist functionality
- [ ] Recently viewed products
- [ ] Back in stock notifications
- [ ] Gift card support

## Technical Specs
- **Fonts:** Playfair Display (headings), DM Sans (body), JetBrains Mono (specs)
- **Colors:** Sage (#2C3E30), Alabaster (#FAFAF9), Terracotta (#A8522E)
- **Spacing:** 80px section padding desktop, 40px mobile

## Next Action Items
1. Complete remaining Shopify sections
2. Run Theme Check for validation
3. Performance audit with Lighthouse
4. Create product/collection JSON templates
5. Build out snippets library
