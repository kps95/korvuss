# Kennel Transparency Showcase Plan

## 1. Product Summary

Korvus Kennels should present dogs, litters, documents, and media as a kennel-owned luxury showcase instead of a generic listing board. The system should make breeder-entered notes useful without overstating them, while keeping uploaded proof easy to inspect.

Core product principles:

- Kennel-managed content, not public rankings.
- Premium visual presentation with structured trust signals.
- Clear separation between breeder observations and uploaded proof.
- Fast buyer evaluation of structure, lineage, health, and availability.
- Practical admin flow for frequent media and document updates.

## 2. Core User Journeys

Buyer journeys:

- Browse the flagship program page to understand brand story, care routine, proof standards, and featured dogs.
- Open a puppy profile, review availability, stack notes, raw clips, and document uploads, then apply or inquire.
- Open a stud or female profile to inspect lineage, production notes, uploaded DNA or health records, and litter history.
- Open a litter page to compare siblings, review parent pairing rationale, and inspect weekly updates.
- Use Virtual Stack Off compare mode to inspect side, front, head, or movement angles side by side.

Kennel journeys:

- Create or clone a dog profile.
- Attach badge labels such as `DNA Uploaded` or `Raw Video Available`.
- Upload documents, tag them to dogs or litters, choose visibility, and publish.
- Upload stack photos or clips, assign angle metadata, reorder assets, and feature them.
- Archive sold or reserved puppies without removing litter context.

## 3. Information Architecture / New Routes

Current prototype route map:

- `/` home page with program entry points and featured transparency modules.
- `/program` flagship kennel showcase page.
- `/studs` stud roster.
- `/studs/:id` stud profile.
- `/females` female roster.
- `/females/:id` female profile.
- `/puppies` puppy roster.
- `/puppies/:id` puppy profile.
- `/litters` litter roster.
- `/litters/:id` litter detail page.
- `/stack-off` Virtual Stack Off compare view.
- `/admin` content studio starter.

Recommended future route additions:

- `/documents` top-level proof library.
- `/planned-breedings` future pairings and reservation interest capture.
- `/archive` sold puppies, retired dogs, and past litters.

## 4. Detailed Feature Breakdown

Stud / female / puppy profile system:

- Core identity, status, color, tags, DOB, call name, registered name, and kennel name.
- Structure summary, stack notes, front and rear notes, movement, topline, head, and body proportion notes.
- Buyer-facing availability, price or inquiry-only state, package summary, and travel options.
- Proof section containing uploaded documents and clearly labeled badges.
- Lineage section with sire, dam, littermates, offspring, and production notes.

Kennel-submitted proof system:

- Each document stores type, summary, issue date, uploaded date, visibility, preview, and linked dogs or litters.
- Public documents surface in a polished library view instead of a plain file dump.
- Internal-only capability exists in the schema even if not exposed in the prototype UI yet.

Virtual Stack Off:

- Angle tabs for side, front, rear, head, movement, and temperament.
- Compare two dogs side by side.
- Raw versus edited labeling.
- Photographer or breeder source labels.
- Timestamped media and annotation chips.

Kennel showcase / program page:

- Brand story, philosophy, transparency commitments, health commitments, care routine, socialization, feeding, transport, and contracts.
- Featured studs, females, puppies, and litters.
- Documentation preview and testimonial section.

Litter pages:

- Parent cards, dates, litter counts, availability summary, breeder notes, DNA summary, expected traits, puppy cards, timeline, documents, and media.

Buyer transparency modules:

- What's included.
- Health and DNA.
- Raw video access.
- Meet the parents.
- Delivery and pickup.
- Contracts and guarantees.

## 5. Data Model / Schema Design

Primary entities:

- `dog_profiles`
- `litters`
- `litter_puppies`
- `document_assets`
- `document_links`
- `media_assets`
- `transparency_badges`
- `dog_profile_badges`
- `inquiry_submissions`
- `kennel_sections`
- `faq_entries`

Design rules:

- Dog profiles own descriptive narrative and relationship metadata.
- Documents and media are separate asset tables so they can be reused across dogs and litters.
- Badges are normalized so the kennel can add or retire badge labels without hardcoded UI logic.
- Litters are first-class records, not just a tag on a puppy.
- Inquiry submissions should reference either a dog or litter when possible.

## 6. Admin CMS / Upload Workflow

Recommended workflow:

1. Create or clone profile.
2. Fill identity, status, lineage, and buyer CTA data.
3. Upload proof documents and set visibility.
4. Upload photos or videos with angle, raw or edited, capture age, and source metadata.
5. Reorder media, feature hero assets, and publish.
6. Update litter counts, puppy status, and archive state as reservations change.

Admin UX requirements:

- Single content dashboard with counts for dogs, litters, documents, and media.
- Inline visibility state for public, verified, or internal-only assets.
- Drag reorder for galleries.
- Clone profile action for new puppies in the same litter.
- Fast badge toggles for `DNA Uploaded`, `Pedigree Uploaded`, `Raw Video Available`, and `Health Docs Uploaded`.

## 7. Virtual Stack Off UX

UX goals:

- Help buyers compare honestly, not gamify the kennel.
- Keep interaction simple on mobile and spacious on desktop.
- Show context for each asset instead of only the picture.

Recommended interactions:

- Two profile selectors at the top.
- Scrollable angle tab row.
- Two-column compare layout on desktop and one-column stack on mobile.
- Asset cards showing angle, source label, raw or edited state, upload date, and annotations.
- Query-string support so direct links can open a preselected compare view.

## 8. Documentation / Proof Library Design

Presentation rules:

- Surface documents as curated cards with thumbnails, labels, dates, and summaries.
- Group documents by dog or litter when context matters.
- Always label public proof separately from breeder commentary.
- Keep file actions obvious but visually secondary to the summary and trust labels.

Visibility model:

- `public` for buyer-visible proof.
- `verified` as a kennel-controlled label for uploads the kennel considers complete.
- `internal_only` for timelines, breeding notes, or pre-release paperwork.

## 9. Stud / Female / Puppy / Litter Page Designs

Stud page:

- Hero image, status pill, pricing or inquiry CTA, badge strip, structure notes, lineage, documents, and offspring sample media.

Female page:

- Same structural system as stud pages, but with stronger emphasis on litter history, mothering notes, and pairings.

Puppy page:

- Availability, price, package summary, litter link, parent link cards, document packet, and stack-off media.

Litter page:

- Pairing hero, availability summary, puppies grid, weekly timeline, proof library, and media gallery.

## 10. Component Architecture

Implemented reusable components:

- `BadgeList`
- `DogSummaryCard`
- `DogProfileShowcase`
- `DocumentLibrary`
- `LitterCard`
- `MediaGallery`
- `StackOffCompare`

Recommended future components:

- `DocumentUploadForm`
- `MediaUploadQueue`
- `ProfileCloneDialog`
- `VisibilityToggle`
- `SortableMediaGrid`
- `InquiryDrawer`

## 11. API Endpoints

Recommended REST or edge-function surface:

- `GET /api/dogs?profileType=stud|female|puppy&status=available`
- `GET /api/dogs/:slug`
- `POST /api/dogs`
- `PATCH /api/dogs/:id`
- `GET /api/litters`
- `GET /api/litters/:slug`
- `POST /api/litters`
- `PATCH /api/litters/:id`
- `GET /api/documents?visibility=public&documentType=dna`
- `POST /api/documents`
- `POST /api/media`
- `PATCH /api/media/:id/reorder`
- `POST /api/inquiries`
- `GET /api/admin/content-summary`

The current frontend groundwork adds client helpers for dog profiles, litters, documents, and inquiry submissions in `web/src/services/api.js`.

## 12. Database Tables and Relationships

Relationship overview:

- `dog_profiles.sire_id -> dog_profiles.id`
- `dog_profiles.dam_id -> dog_profiles.id`
- `litters.sire_id -> dog_profiles.id`
- `litters.dam_id -> dog_profiles.id`
- `litter_puppies.litter_id -> litters.id`
- `litter_puppies.dog_id -> dog_profiles.id`
- `document_links.document_id -> document_assets.id`
- `document_links.dog_profile_id -> dog_profiles.id`
- `document_links.litter_id -> litters.id`
- `media_assets.dog_profile_id -> dog_profiles.id`
- `media_assets.litter_id -> litters.id`
- `dog_profile_badges.badge_id -> transparency_badges.id`
- `inquiry_submissions.dog_profile_id -> dog_profiles.id`
- `inquiry_submissions.litter_id -> litters.id`

## 13. SEO / Structured Data Recommendations

Recommended metadata:

- Use unique title and description per dog, litter, and program page.
- Add canonical URLs for profile pages.
- Use Open Graph tags with hero media and status context.

Recommended structured data:

- `Organization` for Korvus Kennels.
- `FAQPage` for FAQ content.
- `ImageObject` or `VideoObject` for featured media where practical.
- `Product` only for truly purchasable puppies if the kennel wants price-indexing, otherwise keep inquiry-first.
- `BreadcrumbList` for profile navigation.

## 14. Performance / Image / Video Strategy

Performance recommendations:

- Store originals in Supabase Storage, generate compressed derivatives, and serve width-specific images.
- Lazy-load below-the-fold media.
- Use poster frames for videos and avoid autoplay in galleries.
- Keep compare-mode media lightweight and fetch on demand if the dataset grows.
- Prefer WebP or AVIF for photos and MP4 or HLS for long clips.

## 15. Accessibility and Mobile UX

Accessibility requirements:

- Keyboard-focusable tabs and compare controls.
- Visible focus states on pills, tabs, and CTAs.
- Meaningful alt text for images and context text for videos.
- Sufficient color contrast on status pills and badge chips.
- Clear language for breeder-provided versus uploaded proof.

Mobile requirements:

- One-column collapse for compare panels.
- Wrapping or horizontally scrollable angle tabs.
- Large enough tap targets for selects and CTAs.
- Compress metadata into short lines while preserving trust labels.

## 16. Design System Recommendations

Keep the existing Korvus styling system and extend it rather than replacing it.

Recommended approach:

- Preserve current color tokens, gradient background, and panel treatment.
- Reuse existing `section`, `panel`, `card`, `pill`, and `btn` primitives.
- Add new showcase-only classes for compare mode, document cards, badge groups, and info cards.
- Maintain the dark premium look while increasing density of trust metadata.

## 17. MVP vs Phase 2 vs Phase 3

MVP:

- Program page.
- Rich stud, female, puppy, and litter pages.
- Public proof library cards.
- Virtual Stack Off compare view.
- Static admin dashboard starter.
- Supabase schema foundation.

Phase 2:

- Authenticated admin CRUD.
- Storage uploads and file previews.
- Sortable media galleries.
- Clone profile flow.
- Public documents index page.

Phase 3:

- Buyer portal with private or internal-only docs.
- Draft and publish workflow.
- Audit log for uploads.
- Advanced filtering across traits, status, color, and lineage.

## 18. Acceptance Criteria

- Buyers can open a dog page and see identity, structure notes, lineage, documents, media, and CTA in one flow.
- Buyers can open a litter page and compare puppies with parent context.
- Buyers can use a compare view for at least two profiles and multiple angles.
- Proof uploads are labeled clearly and do not imply outside verification.
- The program page feels premium and connects the entire content model.
- Existing routes and core styling remain intact.

## 19. Repo Integration Plan

What is implemented in this pass:

- Rich seed data for dogs, litters, documents, media, badges, and program content.
- New routes for program, females, litters, and stack-off.
- New reusable components for badges, documents, media, compare mode, and profile detail rendering.
- Upgraded stud and puppy detail pages using the new profile showcase shell.
- Supabase schema additions and client helper groundwork.

What should come next:

- Replace seed data with Supabase-backed fetches.
- Add authenticated admin forms and file upload storage.
- Move homepage feature ordering into the database.

## 20. File-level Implementation Plan If Codebase Access Exists

Files changed in this prototype:

- `web/src/data/sampleData.js`
- `web/src/App.jsx`
- `web/src/App.css`
- `web/src/config/siteConfig.js`
- `web/src/components/Hero.jsx`
- `web/src/components/StudCard.jsx`
- `web/src/components/PuppyCard.jsx`
- `web/src/components/ProductCard.jsx`
- `web/src/pages/HomePage.jsx`
- `web/src/pages/StudDetailPage.jsx`
- `web/src/pages/PuppyDetailPage.jsx`
- `web/src/pages/GalleryPage.jsx`
- `web/src/pages/AdminPage.jsx`
- `web/src/services/api.js`
- `supabase/sql/schema.sql`

Files added in this prototype:

- `web/src/components/BadgeList.jsx`
- `web/src/components/DogSummaryCard.jsx`
- `web/src/components/DocumentLibrary.jsx`
- `web/src/components/MediaGallery.jsx`
- `web/src/components/LitterCard.jsx`
- `web/src/components/StackOffCompare.jsx`
- `web/src/components/DogProfileShowcase.jsx`
- `web/src/pages/ProgramPage.jsx`
- `web/src/pages/FemalesPage.jsx`
- `web/src/pages/FemaleDetailPage.jsx`
- `web/src/pages/LittersPage.jsx`
- `web/src/pages/LitterDetailPage.jsx`
- `web/src/pages/StackOffPage.jsx`
- `KENNEL_TRANSPARENCY_SHOWCASE_PLAN.md`

Next codebase targets:

- `web/src/context/AuthContext.jsx` for admin gating.
- `web/src/services/supabaseClient.js` for storage buckets and signed URLs.
- `supabase/sql/policies.sql` for table-level RLS policies.
- Supabase edge functions for upload signing or admin-only operations.

## 21. Build Order Checklist

- [x] Expand content model.
- [x] Add flagship program route.
- [x] Add female, litter, and stack-off routes.
- [x] Upgrade dog detail pages.
- [x] Add compare-mode UI.
- [x] Extend CSS with isolated showcase classes.
- [x] Append schema groundwork.
- [ ] Replace seed data with live Supabase queries.
- [ ] Add authenticated admin CRUD and upload flows.
- [ ] Add public documents index page.

## A) Sample JSON Schemas

### DogProfile

```json
{
  "id": "obsidian-rune",
  "profileType": "stud",
  "name": "Obsidian Rune",
  "callName": "Rune",
  "registeredName": "Korvus Obsidian Rune",
  "sex": "Male",
  "dateOfBirth": "2024-03-19",
  "status": "active stud",
  "kennelName": "Korvus Kennels",
  "color": "Blue Tan Merle",
  "traitTags": ["Big rope", "Compact", "Merle"],
  "weight": "31 lb",
  "height": "13 in",
  "temperamentNotes": "Clear-headed and social.",
  "structureSummary": "Short-backed and balanced.",
  "breederCommentary": "Breeder-entered production notes.",
  "badgeIds": ["dna-uploaded", "health-docs-uploaded"],
  "documentIds": ["doc-rune-dna", "doc-rune-health"],
  "mediaIds": ["media-rune-side", "media-rune-walk"],
  "sireId": null,
  "damId": null,
  "price": 4000,
  "availabilityStatus": "Open for approved pairings"
}
```

### PuppyProfile

```json
{
  "id": "onyx-heir",
  "profileType": "puppy",
  "name": "Onyx Heir",
  "sex": "Male",
  "dateOfBirth": "2026-02-11",
  "status": "available",
  "litterId": "rune-x-onyx-winter-2026",
  "sireId": "obsidian-rune",
  "damId": "velvet-onyx",
  "price": 6800,
  "depositStatus": "Open",
  "deliveryOptions": "Pickup, flight nanny, or insured ground transport.",
  "puppyPackageSummary": "Microchip, vaccine record, breeder support.",
  "documentIds": ["doc-litter-record", "doc-puppy-package"],
  "mediaIds": ["media-heir-side", "media-heir-front", "media-heir-walk"]
}
```

### LitterProfile

```json
{
  "id": "rune-x-onyx-winter-2026",
  "title": "Rune x Nyx | Winter 2026",
  "sireId": "obsidian-rune",
  "damId": "velvet-onyx",
  "breedingDate": "2025-12-14",
  "birthDate": "2026-02-11",
  "litterCount": 2,
  "statusSummary": {
    "available": 1,
    "reserved": 1,
    "sold": 0
  },
  "puppyIds": ["onyx-heir", "sable-halo"],
  "documentIds": ["doc-rune-dna", "doc-onyx-health", "doc-litter-record"],
  "mediaIds": ["media-heir-side", "media-halo-side", "media-litter-interaction"]
}
```

### MediaAsset

```json
{
  "id": "media-heir-side",
  "dogId": "onyx-heir",
  "litterId": "rune-x-onyx-winter-2026",
  "mediaType": "image",
  "angle": "side",
  "url": "https://example.com/media-heir-side.webp",
  "thumbnailUrl": "https://example.com/media-heir-side-thumb.webp",
  "sourceLabel": "Breeder provided",
  "photographerCredit": "Korvus Kennels",
  "isRaw": false,
  "uploadedDate": "2026-03-08",
  "puppyAgeAtCapture": "6 weeks",
  "notes": "Natural daylight side stack.",
  "annotations": ["Short back", "Rear angulation"]
}
```

### DocumentAsset

```json
{
  "id": "doc-rune-dna",
  "title": "Obsidian Rune DNA Panel",
  "documentType": "DNA panel",
  "linkedDogIds": ["obsidian-rune"],
  "linkedLitterIds": ["rune-x-onyx-winter-2026"],
  "issueDate": "2025-10-05",
  "uploadedDate": "2026-01-10",
  "visibility": "public",
  "fileUrl": "https://example.com/doc-rune-dna.pdf",
  "flags": ["verified", "public"],
  "summary": "Breeder-uploaded DNA summary."
}
```

### TransparencyBadge

```json
{
  "id": "dna-uploaded",
  "label": "DNA Uploaded",
  "description": "Breeder-provided DNA panel attached to profile."
}
```

### InquiryFormSubmission

```json
{
  "id": "submission-001",
  "dogProfileId": "onyx-heir",
  "litterId": "rune-x-onyx-winter-2026",
  "name": "Buyer Name",
  "email": "buyer@example.com",
  "phone": "+1-555-0100",
  "preferredContactMethod": "text",
  "budgetRange": "$6,000-$8,000",
  "timeline": "ready now",
  "transportNeeds": "flight nanny",
  "message": "Interested in the available male.",
  "status": "new"
}
```

## B) Premium Page Mockup Descriptions

Stud profile page:

- Full-width hero image with status pill, fee, badge strip, and inquiry CTA on the right.
- Below the fold, a two-column structure and breeder-commentary section.
- Lower sections for lineage, offspring samples, documents, and stack-off media.

Available puppy page:

- Hero with puppy image, availability, price, and `Apply` CTA.
- Parent links directly below the hero with litter summary callout.
- Mid-page proof library and raw movement section.
- Closing panel for transport, package contents, and buyer support.

Virtual Stack Off compare page:

- Sticky toolbar with two profile selectors and angle tabs.
- Two large media panels underneath with synchronized comparison context.
- Metadata chips for raw versus edited, source label, age at capture, and upload date.

## C) Example Seed Content

Stud:

- Obsidian Rune, active stud, Blue Tan Merle, uploaded DNA and health docs.

Female:

- Velvet Onyx, active female, Testable Chocolate Tan, litter history and pedigree proof.

Litter:

- Rune x Nyx Winter 2026, two puppies, one available and one reserved.

Puppies:

- Onyx Heir, available male with raw movement clip.
- Sable Halo, reserved female kept visible for transparency.

Documentation library set:

- Rune DNA panel.
- Rune health clearance packet.
- Nyx health summary.
- Rune x Nyx litter record.
- Korvus puppy take-home packet.

Gallery set:

- Rune side stack.
- Nyx front stack.
- Onyx Heir side stack.
- Litter interaction raw clip.

## D) Recommended UI Components and State Structure If Using React

Recommended components:

- `ProgramHero`
- `DogSummaryCard`
- `DogProfileShowcase`
- `LitterCard`
- `DocumentLibrary`
- `MediaGallery`
- `StackOffCompare`
- `InquiryForm`
- `AdminContentSummary`
- `UploadQueue`

Recommended page state:

- `filters`: active roster filters such as status or sex.
- `compareSelection`: left profile, right profile, and angle.
- `mediaView`: selected asset group, source filter, raw filter.
- `adminDraft`: current profile or litter draft fields before save.
- `uploadQueue`: optimistic client-side upload states.

## E) Low-risk Implementation Sequence

1. Keep the current styling system and swap shallow sample data for a richer content model.
2. Add the flagship program page and reuse current cards and sections where possible.
3. Upgrade stud and puppy detail pages through a shared profile shell.
4. Add females, litters, and stack-off routes.
5. Append backend schema and client helpers.
6. Replace static seed content with Supabase reads.
7. Add authenticated admin CRUD and upload flows last.
