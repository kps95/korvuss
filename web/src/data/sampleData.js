const sharedVideoUrl = "/intro.mov";

export const transparencyBadges = [
  {
    id: "dna-uploaded",
    label: "DNA Uploaded",
    description: "Breeder-provided DNA panel is attached to the profile.",
  },
  {
    id: "health-docs-uploaded",
    label: "Health Docs Uploaded",
    description: "Health testing and veterinary proof are attached.",
  },
  {
    id: "raw-video-available",
    label: "Raw Video Available",
    description: "Unedited movement or handling footage is available.",
  },
  {
    id: "pedigree-uploaded",
    label: "Pedigree Uploaded",
    description: "Pedigree or registration proof is attached.",
  },
  {
    id: "breeder-provided",
    label: "Breeder Provided",
    description: "Narrative notes are written by the kennel.",
  },
];

export const documents = [
  {
    id: "doc-rune-dna",
    title: "Obsidian Rune DNA Panel",
    documentType: "DNA panel",
    linkedDogIds: ["obsidian-rune"],
    linkedLitterIds: ["rune-x-onyx-winter-2026"],
    issueDate: "2025-10-05",
    uploadedDate: "2026-01-10",
    visibility: "public",
    previewThumbnail:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
    fileUrl: "#dna-rune",
    flags: ["verified", "public"],
    summary:
      "Embark DNA summary uploaded by Korvus Kennels with coat, color, and trait notes.",
  },
  {
    id: "doc-rune-health",
    title: "Obsidian Rune Health Clearance Packet",
    documentType: "health certificate",
    linkedDogIds: ["obsidian-rune"],
    linkedLitterIds: [],
    issueDate: "2025-11-12",
    uploadedDate: "2026-01-10",
    visibility: "public",
    previewThumbnail:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=80",
    fileUrl: "#health-rune",
    flags: ["verified", "public"],
    summary:
      "Veterinary health summary, vaccination record, and breeding clearance notes.",
  },
  {
    id: "doc-rune-pedigree",
    title: "Obsidian Rune Registration & Pedigree",
    documentType: "pedigree",
    linkedDogIds: ["obsidian-rune"],
    linkedLitterIds: [],
    issueDate: "2025-06-18",
    uploadedDate: "2026-01-10",
    visibility: "public",
    previewThumbnail:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
    fileUrl: "#pedigree-rune",
    flags: ["public"],
    summary:
      "Registration papers and pedigree summary showing sire and dam lineage.",
  },
  {
    id: "doc-onyx-health",
    title: "Velvet Onyx Health Summary",
    documentType: "health certificate",
    linkedDogIds: ["velvet-onyx"],
    linkedLitterIds: ["rune-x-onyx-winter-2026"],
    issueDate: "2025-12-02",
    uploadedDate: "2026-01-08",
    visibility: "public",
    previewThumbnail:
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=900&q=80",
    fileUrl: "#health-onyx",
    flags: ["verified", "public"],
    summary:
      "Pre-breeding vet clearance, vaccine timing, and litter support notes.",
  },
  {
    id: "doc-onyx-pedigree",
    title: "Velvet Onyx Pedigree Proof",
    documentType: "registration papers",
    linkedDogIds: ["velvet-onyx"],
    linkedLitterIds: [],
    issueDate: "2025-04-25",
    uploadedDate: "2026-01-08",
    visibility: "public",
    previewThumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    fileUrl: "#pedigree-onyx",
    flags: ["public"],
    summary:
      "Registration paper upload with lineage references used on the family tree module.",
  },
  {
    id: "doc-litter-record",
    title: "Rune x Nyx Litter Record",
    documentType: "litter paperwork",
    linkedDogIds: ["obsidian-rune", "velvet-onyx", "onyx-heir", "sable-halo"],
    linkedLitterIds: ["rune-x-onyx-winter-2026"],
    issueDate: "2026-02-12",
    uploadedDate: "2026-02-16",
    visibility: "public",
    previewThumbnail:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    fileUrl: "#litter-record",
    flags: ["verified", "public"],
    summary:
      "Birth date, weights, litter count, and early care notes uploaded by the kennel.",
  },
  {
    id: "doc-puppy-package",
    title: "Korvus Puppy Take-Home Packet",
    documentType: "care instructions",
    linkedDogIds: ["onyx-heir", "sable-halo"],
    linkedLitterIds: ["rune-x-onyx-winter-2026"],
    issueDate: "2026-03-01",
    uploadedDate: "2026-03-04",
    visibility: "public",
    previewThumbnail:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80",
    fileUrl: "#puppy-packet",
    flags: ["public"],
    summary:
      "Feeding, crate, socialization, travel, and follow-up care instructions for buyers.",
  },
];

export const mediaAssets = [
  {
    id: "media-rune-side",
    title: "Rune side stack",
    dogId: "obsidian-rune",
    litterId: null,
    mediaType: "image",
    angle: "side",
    url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80",
    sourceLabel: "Breeder provided",
    photographerCredit: "Korvus Kennels",
    isRaw: false,
    uploadedDate: "2026-01-10",
    puppyAgeAtCapture: null,
    notes: "Stacked on level concrete with natural light. No body reshaping edits.",
    annotations: ["Short coupling", "Strong rear width", "Clean outline"],
  },
  {
    id: "media-rune-front",
    title: "Rune front stack",
    dogId: "obsidian-rune",
    litterId: null,
    mediaType: "image",
    angle: "front",
    url: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=900&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=900&q=80",
    sourceLabel: "Breeder provided",
    photographerCredit: "Korvus Kennels",
    isRaw: false,
    uploadedDate: "2026-01-10",
    puppyAgeAtCapture: null,
    notes: "Front viewed square with neutral stance.",
    annotations: ["Chest width", "Straight pasterns"],
  },
  {
    id: "media-rune-rear",
    title: "Rune rear stack",
    dogId: "obsidian-rune",
    litterId: null,
    mediaType: "image",
    angle: "rear",
    url: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=900&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=900&q=80",
    sourceLabel: "Breeder provided",
    photographerCredit: "Korvus Kennels",
    isRaw: false,
    uploadedDate: "2026-01-10",
    puppyAgeAtCapture: null,
    notes: "Rear assembly shown after a short walk to avoid over-stacking.",
    annotations: ["Clean tracking", "Rear balance"],
  },
  {
    id: "media-rune-head",
    title: "Rune head and rope close-up",
    dogId: "obsidian-rune",
    litterId: null,
    mediaType: "image",
    angle: "head",
    url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80",
    sourceLabel: "Photographer provided",
    photographerCredit: "North Yard Media",
    isRaw: false,
    uploadedDate: "2026-01-16",
    puppyAgeAtCapture: null,
    notes: "Color corrected only. No facial sharpening.",
    annotations: ["Head width", "Rope detail", "Muzzle depth"],
  },
  {
    id: "media-rune-walk",
    title: "Rune raw movement clip",
    dogId: "obsidian-rune",
    litterId: null,
    mediaType: "video",
    angle: "movement",
    url: sharedVideoUrl,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1504595403659-9088ce801e29?auto=format&fit=crop&w=900&q=80",
    sourceLabel: "Raw video",
    photographerCredit: "Korvus Kennels",
    isRaw: true,
    uploadedDate: "2026-01-18",
    puppyAgeAtCapture: null,
    notes: "Unedited walk-around and down-back clip from a phone capture.",
    annotations: ["No cut points", "Natural pace"],
  },
  {
    id: "media-onyx-side",
    title: "Nyx side stack",
    dogId: "velvet-onyx",
    litterId: null,
    mediaType: "image",
    angle: "side",
    url: "https://images.unsplash.com/photo-1548247416-ec66f4900b2c?auto=format&fit=crop&w=900&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1548247416-ec66f4900b2c?auto=format&fit=crop&w=900&q=80",
    sourceLabel: "Breeder provided",
    photographerCredit: "Korvus Kennels",
    isRaw: false,
    uploadedDate: "2026-01-08",
    puppyAgeAtCapture: null,
    notes: "Natural side stack after light conditioning work.",
    annotations: ["Topline hold", "Balanced underline"],
  },
  {
    id: "media-onyx-front",
    title: "Nyx front stack",
    dogId: "velvet-onyx",
    litterId: null,
    mediaType: "image",
    angle: "front",
    url: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=900&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=900&q=80",
    sourceLabel: "Breeder provided",
    photographerCredit: "Korvus Kennels",
    isRaw: false,
    uploadedDate: "2026-01-08",
    puppyAgeAtCapture: null,
    notes: "Natural front with minimal leash pressure.",
    annotations: ["Chest", "Front alignment"],
  },
  {
    id: "media-onyx-walk",
    title: "Nyx raw movement clip",
    dogId: "velvet-onyx",
    litterId: null,
    mediaType: "video",
    angle: "movement",
    url: sharedVideoUrl,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=900&q=80",
    sourceLabel: "Raw video",
    photographerCredit: "Korvus Kennels",
    isRaw: true,
    uploadedDate: "2026-01-12",
    puppyAgeAtCapture: null,
    notes: "Phone video, no stabilization, natural pace.",
    annotations: ["Down-back", "Walk-around"],
  },
  {
    id: "media-heir-side",
    title: "Onyx Heir side stack",
    dogId: "onyx-heir",
    litterId: "rune-x-onyx-winter-2026",
    mediaType: "image",
    angle: "side",
    url: "https://images.unsplash.com/photo-1504595403659-9088ce801e29?auto=format&fit=crop&w=900&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1504595403659-9088ce801e29?auto=format&fit=crop&w=900&q=80",
    sourceLabel: "Breeder provided",
    photographerCredit: "Korvus Kennels",
    isRaw: false,
    uploadedDate: "2026-03-08",
    puppyAgeAtCapture: "6 weeks",
    notes: "Six-week side stack, natural daylight, no body edits.",
    annotations: ["Short back", "Rear angulation"],
  },
  {
    id: "media-heir-front",
    title: "Onyx Heir front stack",
    dogId: "onyx-heir",
    litterId: "rune-x-onyx-winter-2026",
    mediaType: "image",
    angle: "front",
    url: "https://images.unsplash.com/photo-1517840545244-4b3cd4cdb6b7?auto=format&fit=crop&w=900&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1517840545244-4b3cd4cdb6b7?auto=format&fit=crop&w=900&q=80",
    sourceLabel: "Breeder provided",
    photographerCredit: "Korvus Kennels",
    isRaw: false,
    uploadedDate: "2026-03-08",
    puppyAgeAtCapture: "6 weeks",
    notes: "Front stack at six weeks.",
    annotations: ["Front width", "Expression"],
  },
  {
    id: "media-heir-head",
    title: "Onyx Heir head close-up",
    dogId: "onyx-heir",
    litterId: "rune-x-onyx-winter-2026",
    mediaType: "image",
    angle: "head",
    url: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=900&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=900&q=80",
    sourceLabel: "Photographer provided",
    photographerCredit: "North Yard Media",
    isRaw: false,
    uploadedDate: "2026-03-10",
    puppyAgeAtCapture: "6 weeks",
    notes: "Edited for exposure only.",
    annotations: ["Head shape", "Pigment"],
  },
  {
    id: "media-heir-walk",
    title: "Onyx Heir movement clip",
    dogId: "onyx-heir",
    litterId: "rune-x-onyx-winter-2026",
    mediaType: "video",
    angle: "movement",
    url: sharedVideoUrl,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80",
    sourceLabel: "Raw video",
    photographerCredit: "Korvus Kennels",
    isRaw: true,
    uploadedDate: "2026-03-11",
    puppyAgeAtCapture: "6 weeks",
    notes: "Full hallway walk clip available on request.",
    annotations: ["Phone capture", "No trims"],
  },
  {
    id: "media-halo-side",
    title: "Sable Halo side stack",
    dogId: "sable-halo",
    litterId: "rune-x-onyx-winter-2026",
    mediaType: "image",
    angle: "side",
    url: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=900&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=900&q=80",
    sourceLabel: "Breeder provided",
    photographerCredit: "Korvus Kennels",
    isRaw: false,
    uploadedDate: "2026-03-08",
    puppyAgeAtCapture: "6 weeks",
    notes: "Natural side stack.",
    annotations: ["Topline", "Balance"],
  },
  {
    id: "media-halo-front",
    title: "Sable Halo front stack",
    dogId: "sable-halo",
    litterId: "rune-x-onyx-winter-2026",
    mediaType: "image",
    angle: "front",
    url: "https://images.unsplash.com/photo-1548247416-ec66f4900b2c?auto=format&fit=crop&w=900&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1548247416-ec66f4900b2c?auto=format&fit=crop&w=900&q=80",
    sourceLabel: "Breeder provided",
    photographerCredit: "Korvus Kennels",
    isRaw: false,
    uploadedDate: "2026-03-08",
    puppyAgeAtCapture: "6 weeks",
    notes: "Front stack after play session.",
    annotations: ["Chest width", "Pasterns"],
  },
  {
    id: "media-halo-head",
    title: "Sable Halo head close-up",
    dogId: "sable-halo",
    litterId: "rune-x-onyx-winter-2026",
    mediaType: "image",
    angle: "head",
    url: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=900&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=900&q=80",
    sourceLabel: "Photographer provided",
    photographerCredit: "North Yard Media",
    isRaw: false,
    uploadedDate: "2026-03-10",
    puppyAgeAtCapture: "6 weeks",
    notes: "Edited for color balance only.",
    annotations: ["Eye set", "Expression"],
  },
  {
    id: "media-halo-walk",
    title: "Sable Halo movement clip",
    dogId: "sable-halo",
    litterId: "rune-x-onyx-winter-2026",
    mediaType: "video",
    angle: "movement",
    url: sharedVideoUrl,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&fit=crop&w=900&q=80",
    sourceLabel: "Raw video",
    photographerCredit: "Korvus Kennels",
    isRaw: true,
    uploadedDate: "2026-03-11",
    puppyAgeAtCapture: "6 weeks",
    notes: "Full gait clip available in buyer portal.",
    annotations: ["Uncut", "Phone capture"],
  },
  {
    id: "media-litter-interaction",
    title: "Litter interaction clip",
    dogId: null,
    litterId: "rune-x-onyx-winter-2026",
    mediaType: "video",
    angle: "temperament",
    url: sharedVideoUrl,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?auto=format&fit=crop&w=900&q=80",
    sourceLabel: "Raw video",
    photographerCredit: "Korvus Kennels",
    isRaw: true,
    uploadedDate: "2026-03-12",
    puppyAgeAtCapture: "7 weeks",
    notes: "Shows litter recovery after noise exposure and handler engagement.",
    annotations: ["Recovery speed", "Human focus"],
  },
];

export const dogs = [
  {
    id: "obsidian-rune",
    profileType: "stud",
    name: "Obsidian Rune",
    callName: "Rune",
    registeredName: "Korvus Obsidian Rune",
    sex: "Male",
    dateOfBirth: "2024-03-19",
    dob: "March 19, 2024",
    status: "active stud",
    kennelName: "Korvus Kennels",
    campName: "Korvus Main Program",
    color: "Blue Tan Merle",
    traitTags: ["Big rope", "Compact", "Merle", "Tan points"],
    weight: "31 lb",
    height: "13 in",
    compactnessNotes: "Short-backed male with dense bone and clean coupling.",
    temperamentNotes:
      "Clear-headed, social with strangers after introduction, and steady in busy environments.",
    description:
      "Compact, balanced stud with documented structure notes, raw movement footage, and a strong transparency package.",
    structureSummary:
      "Short-backed male with broad chest, correct width up front, and a balanced rear assembly.",
    stackNotes:
      "Stacks naturally without excessive hand placement and keeps his topline clean through the stop.",
    frontRearNotes:
      "Front is square with sufficient width; rear is muscular without appearing overloaded.",
    movementNotes:
      "Moves with efficient reach and good rear drive. Raw phone footage is available for buyers and partner kennels.",
    toplineNotes: "Carries a level topline with a strong loin and short coupling.",
    muzzleHeadRopeNotes:
      "Broad skull, strong muzzle fill, and rope detail shown through close-up media.",
    bodyProportionNotes:
      "Reads compact without losing balance or shoulder placement.",
    breederCommentary:
      "Rune consistently sires short backs, confident temperaments, and expressive heads. Those notes are breeder observations, not third-party awards.",
    judgeCommentary:
      "Optional show critique space is available when the kennel wants to enter ring feedback manually.",
    badgeIds: [
      "breeder-provided",
      "dna-uploaded",
      "health-docs-uploaded",
      "raw-video-available",
      "pedigree-uploaded",
    ],
    dnaPanelSummary:
      "Breeder-provided DNA panel uploaded with color, coat, and trait markers summarized in plain language.",
    dna: "Blue tan merle with breeder-uploaded panel summary.",
    studFee: 4000,
    fee: 4000,
    price: 4000,
    depositStatus: "Inquiry only",
    availabilityStatus: "Open for approved pairings",
    deliveryOptions:
      "On-site live cover coordination or shipment workflow handled after approval.",
    puppyPackageSummary:
      "Stud packet includes pairing notes, document bundle, and breeding support communication.",
    sireLabel: "Blacksmith Vandal",
    damLabel: "Korvus Night Bloom",
    littermateLabels: ["Ash Harbor", "Grim Echo"],
    offspringIds: ["onyx-heir", "sable-halo"],
    previousLitterIds: ["rune-x-onyx-winter-2026"],
    breedingNotes:
      "Best paired to females needing improved compactness and clearer head type without losing temperament.",
    traitsProduced: ["Compact outline", "Short back", "Head type", "Calm recovery"],
    sampleOffspringGalleryIds: ["media-heir-side", "media-halo-side"],
    familyTree: [
      { label: "Sire", value: "Blacksmith Vandal" },
      { label: "Dam", value: "Korvus Night Bloom" },
      { label: "Offspring", value: "Onyx Heir, Sable Halo" },
    ],
    documentIds: ["doc-rune-dna", "doc-rune-health", "doc-rune-pedigree"],
    mediaIds: [
      "media-rune-side",
      "media-rune-front",
      "media-rune-rear",
      "media-rune-head",
      "media-rune-walk",
    ],
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",
    contactReason: "Stud Inquiry",
    primaryCtaLabel: "Request stud service",
    secondaryCtaLabel: "View transparency docs",
  },
  {
    id: "velvet-onyx",
    profileType: "female",
    name: "Velvet Onyx",
    callName: "Nyx",
    registeredName: "Korvus Velvet Onyx",
    sex: "Female",
    dateOfBirth: "2024-06-02",
    dob: "June 2, 2024",
    status: "active female",
    kennelName: "Korvus Kennels",
    campName: "Korvus Main Program",
    color: "Testable Chocolate Tan",
    traitTags: ["Compact", "Testable chocolate", "Tan points", "Raw video available"],
    weight: "26 lb",
    height: "12.5 in",
    compactnessNotes:
      "Balanced female with enough body and rib without appearing heavy.",
    temperamentNotes:
      "Easy in the house, thoughtful in new spaces, and highly people-focused with puppies.",
    description:
      "Foundation female with uploaded health packet, pedigree proof, and litter support records.",
    structureSummary:
      "Feminine headpiece with good width, smooth shoulder placement, and a balanced rear.",
    stackNotes:
      "Shows comfortably with minimal hand stacking and keeps her underline clean.",
    frontRearNotes:
      "Straight front, tidy feet, and enough rear without looking overdone.",
    movementNotes:
      "Steady, efficient mover with raw clips included for buyers who want a more candid look.",
    toplineNotes: "Level topline that holds well through short walk and stack transitions.",
    muzzleHeadRopeNotes:
      "Strong width of skull with enough muzzle fill to complement Rune without duplicating him.",
    bodyProportionNotes:
      "Compact but still athletic enough to carry herself cleanly post-whelp.",
    breederCommentary:
      "Nyx contributes calmer recovery, social confidence, and a consistently easy off-switch in the house.",
    judgeCommentary: "",
    badgeIds: [
      "breeder-provided",
      "health-docs-uploaded",
      "raw-video-available",
      "pedigree-uploaded",
    ],
    dnaPanelSummary:
      "Health summary and pedigree packet are uploaded. DNA panel language remains breeder-entered until a full file is attached.",
    dna: "Health packet uploaded; additional DNA detail available in breeding notes.",
    price: null,
    depositStatus: "Not applicable",
    availabilityStatus: "Active female",
    deliveryOptions: "Not a sales profile",
    puppyPackageSummary: "Not applicable",
    sireLabel: "Nocturne Vale",
    damLabel: "Korvus Black Silk",
    littermateLabels: ["Ivory Riot"],
    offspringIds: ["onyx-heir", "sable-halo"],
    previousLitterIds: ["rune-x-onyx-winter-2026"],
    breedingNotes:
      "Selected for Rune to preserve compactness while adding softer temperament recovery and strong mothering.",
    traitsProduced: ["Front width", "Expression", "House temperament"],
    sampleOffspringGalleryIds: ["media-heir-front", "media-halo-front"],
    familyTree: [
      { label: "Sire", value: "Nocturne Vale" },
      { label: "Dam", value: "Korvus Black Silk" },
      { label: "Offspring", value: "Onyx Heir, Sable Halo" },
    ],
    documentIds: ["doc-onyx-health", "doc-onyx-pedigree", "doc-litter-record"],
    mediaIds: ["media-onyx-side", "media-onyx-front", "media-onyx-walk"],
    image:
      "https://images.unsplash.com/photo-1548247416-ec66f4900b2c?auto=format&fit=crop&w=900&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1548247416-ec66f4900b2c?auto=format&fit=crop&w=1200&q=80",
    contactReason: "Breeding Program Inquiry",
    primaryCtaLabel: "Ask about this pairing",
    secondaryCtaLabel: "View litter docs",
  },
  {
    id: "onyx-heir",
    profileType: "puppy",
    name: "Onyx Heir",
    callName: "Heir",
    registeredName: "Korvus Onyx Heir",
    sex: "Male",
    dateOfBirth: "2026-02-11",
    dob: "February 11, 2026",
    status: "available",
    kennelName: "Korvus Kennels",
    campName: "Rune x Nyx Winter 2026",
    color: "Blue Tan Merle",
    traitTags: ["Big rope", "Compact", "Merle", "Raw video available"],
    weight: "9.6 lb",
    height: "Age-based",
    compactnessNotes:
      "Very short-backed puppy with a clean topline for his age and enough rib.",
    temperamentNotes:
      "Outgoing first puppy from the box, quick recovery after noise, and easily engages handlers.",
    description:
      "Available male with side, front, head, and raw movement uploads plus litter paperwork and puppy packet preview.",
    structureSummary:
      "Strong outline for age with promising front width and clean proportions.",
    stackNotes:
      "Shown in natural puppy stacks across multiple upload dates so buyers can compare consistency.",
    frontRearNotes:
      "Front is open enough for age; rear assembly is still developing and documented honestly over time.",
    movementNotes:
      "Raw hallway video is linked so buyers can inspect him without heavy editing or staged pacing.",
    toplineNotes: "Topline stays clean during stack and short gait clips.",
    muzzleHeadRopeNotes:
      "Promising head width and rope development shown through close-up stills.",
    bodyProportionNotes:
      "Compact body with a short back and enough balance to remain athletic as he matures.",
    breederCommentary:
      "Heir is the most forward puppy in the litter and the first one we show to sport-minded homes.",
    judgeCommentary: "",
    badgeIds: [
      "breeder-provided",
      "health-docs-uploaded",
      "raw-video-available",
      "pedigree-uploaded",
    ],
    dnaPanelSummary:
      "Litter paperwork, parent DNA files, and take-home packet are attached. Individual DNA is not claimed unless uploaded.",
    dna: "Parent DNA and litter paperwork uploaded.",
    price: 6800,
    depositStatus: "Open",
    availabilityStatus: "Available",
    deliveryOptions:
      "Pickup, flight nanny, or insured ground transport available after final clearance.",
    puppyPackageSummary:
      "Microchip, vaccine record, deworming schedule, take-home packet, contract, and breeder support.",
    sireId: "obsidian-rune",
    damId: "velvet-onyx",
    litterId: "rune-x-onyx-winter-2026",
    sireLabel: "Obsidian Rune",
    damLabel: "Velvet Onyx",
    littermateLabels: ["Sable Halo"],
    offspringIds: [],
    previousLitterIds: [],
    breedingNotes:
      "This puppy is a direct product of the Rune x Nyx pairing selected for compactness, expression, and recovery.",
    traitsProduced: [],
    sampleOffspringGalleryIds: [],
    familyTree: [
      { label: "Sire", value: "Obsidian Rune" },
      { label: "Dam", value: "Velvet Onyx" },
      { label: "Litter", value: "Rune x Nyx Winter 2026" },
    ],
    documentIds: ["doc-litter-record", "doc-puppy-package"],
    mediaIds: ["media-heir-side", "media-heir-front", "media-heir-head", "media-heir-walk"],
    image:
      "https://images.unsplash.com/photo-1504595403659-9088ce801e29?auto=format&fit=crop&w=900&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1504595403659-9088ce801e29?auto=format&fit=crop&w=1200&q=80",
    contactReason: "Puppy Inquiry",
    primaryCtaLabel: "Apply for this puppy",
    secondaryCtaLabel: "See raw stack off media",
  },
  {
    id: "sable-halo",
    profileType: "puppy",
    name: "Sable Halo",
    callName: "Halo",
    registeredName: "Korvus Sable Halo",
    sex: "Female",
    dateOfBirth: "2026-02-11",
    dob: "February 11, 2026",
    status: "reserved",
    kennelName: "Korvus Kennels",
    campName: "Rune x Nyx Winter 2026",
    color: "Chocolate Tan",
    traitTags: ["Compact", "Tan points", "Sweet temperament", "Raw video available"],
    weight: "9.1 lb",
    height: "Age-based",
    compactnessNotes:
      "Balanced female puppy with a clean short body and tidy outline.",
    temperamentNotes:
      "People-oriented and quick to settle after stimulation. Excellent for a companion-focused home.",
    description:
      "Reserved female retained on the site to show honest litter context, media progression, and documentation availability.",
    structureSummary:
      "Well-balanced female with a clean stack and developing front.",
    stackNotes:
      "Documented at matching ages to make side-by-side litter comparison easier.",
    frontRearNotes:
      "Moderate width through the front with enough rear to stay balanced.",
    movementNotes:
      "Raw clip shows a softer, more thoughtful mover than her brother.",
    toplineNotes: "Carries herself level for age.",
    muzzleHeadRopeNotes:
      "Clean expression with enough muzzle fill and clear pigment.",
    bodyProportionNotes:
      "Compact proportions without looking compressed or heavy.",
    breederCommentary:
      "Halo is reserved, but we keep her page visible to show the full litter story and compare development honestly.",
    judgeCommentary: "",
    badgeIds: [
      "breeder-provided",
      "health-docs-uploaded",
      "raw-video-available",
    ],
    dnaPanelSummary:
      "Parent proof and litter packet are available. Individual buyer updates are kept within the same litter record set.",
    dna: "Parent proof uploaded.",
    price: 6200,
    depositStatus: "Secured",
    availabilityStatus: "Reserved",
    deliveryOptions:
      "Travel plan arranged directly with the buyer after final health clearance.",
    puppyPackageSummary:
      "Same Korvus take-home packet, vaccine record, contract summary, and breeder support.",
    sireId: "obsidian-rune",
    damId: "velvet-onyx",
    litterId: "rune-x-onyx-winter-2026",
    sireLabel: "Obsidian Rune",
    damLabel: "Velvet Onyx",
    littermateLabels: ["Onyx Heir"],
    offspringIds: [],
    previousLitterIds: [],
    breedingNotes:
      "Retained on-site as a transparency example rather than a sales listing.",
    traitsProduced: [],
    sampleOffspringGalleryIds: [],
    familyTree: [
      { label: "Sire", value: "Obsidian Rune" },
      { label: "Dam", value: "Velvet Onyx" },
      { label: "Litter", value: "Rune x Nyx Winter 2026" },
    ],
    documentIds: ["doc-litter-record", "doc-puppy-package"],
    mediaIds: ["media-halo-side", "media-halo-front", "media-halo-head", "media-halo-walk"],
    image:
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=900&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=1200&q=80",
    contactReason: "Puppy Inquiry",
    primaryCtaLabel: "Join the waitlist",
    secondaryCtaLabel: "Compare litter media",
  },
];

export const litters = [
  {
    id: "rune-x-onyx-winter-2026",
    title: "Rune x Nyx | Winter 2026",
    sireId: "obsidian-rune",
    damId: "velvet-onyx",
    breedingDate: "2025-12-14",
    birthDate: "2026-02-11",
    litterCount: 2,
    statusSummary: {
      available: 1,
      reserved: 1,
      sold: 0,
    },
    puppyIds: ["onyx-heir", "sable-halo"],
    mediaIds: [
      "media-heir-side",
      "media-halo-side",
      "media-litter-interaction",
      "media-heir-walk",
      "media-halo-walk",
    ],
    documentIds: ["doc-rune-dna", "doc-onyx-health", "doc-litter-record", "doc-puppy-package"],
    breederNotes:
      "This pairing was selected for compact structure, clearer head type, calmer home temperaments, and better recovery in busy environments.",
    dnaSummary:
      "Parent proof and breeder-entered pairing rationale are attached. Claims are labeled as breeder provided unless supported by uploaded documents.",
    expectedTraits: ["Compact outlines", "Head type", "Calm recovery", "Raw media transparency"],
    growthTimeline: [
      {
        week: "Week 2",
        note: "Weights stabilized, strong nursing, and early handling started.",
      },
      {
        week: "Week 5",
        note: "Stack photos and first interaction clips uploaded after environmental exposure.",
      },
      {
        week: "Week 7",
        note: "Raw movement clips and take-home packet preview added for buyers.",
      },
    ],
  },
];

export const kennelProgram = {
  eyebrow: "Kennel transparency showcase",
  title: "Built for buyers who want proof, not hype",
  story:
    "Korvus Kennels presents each dog and litter as a premium portfolio with breeder notes clearly separated from uploaded proof. The goal is to help buyers inspect structure, lineage, health records, and litter development without digging through outside channels.",
  philosophy: [
    "Select pairings for structure, temperament, and long-term maintainability.",
    "Show breeder observations clearly without presenting them as outside verification.",
    "Keep raw media, timeline records, and document uploads visible enough to build trust.",
  ],
  transparencyCommitments: [
    "Breeder-provided notes are labeled as breeder provided.",
    "Uploaded documents are separated from descriptive copy.",
    "Raw media and edited media are labeled independently.",
    "Reserved and sold puppies remain visible when useful for litter context.",
  ],
  healthCommitments: [
    "Parent health records and litter paperwork are attached when available.",
    "Vaccination, deworming, and take-home guidance are organized by litter.",
    "No auto-generated ranking or outside claims are shown without breeder input.",
  ],
  careRoutine: [
    "Daily handling and calm exposure work.",
    "Structured feeding and cleaning rhythm.",
    "Age-appropriate crate, surface, and household sound work.",
  ],
  socializationApproach: [
    "Gradual exposure, recovery tracking, and handler observation notes.",
    "Temperament clips included in the litter media timeline.",
  ],
  feedingApproach: [
    "Food plan, supplements, and transition instructions are included in the puppy packet.",
  ],
  shippingPickup:
    "Pickup, flight nanny, or insured ground transport can be arranged after final health clearance and contract review.",
  contractSummary:
    "Contract summary, health guarantee overview, and take-home expectations are all presented in plain language before inquiry.",
  featuredStudIds: ["obsidian-rune"],
  featuredFemaleIds: ["velvet-onyx"],
  featuredPuppyIds: ["onyx-heir", "sable-halo"],
  featuredLitterIds: ["rune-x-onyx-winter-2026"],
};

export const transparencyModules = [
  {
    id: "whats-included",
    title: "What's Included",
    description:
      "Take-home packet, vaccine record, deworming notes, contract summary, and breeder support overview.",
  },
  {
    id: "health-dna",
    title: "Health & DNA",
    description:
      "Parent DNA panels, health packets, and plain-language summaries separated from breeder commentary.",
  },
  {
    id: "raw-videos",
    title: "See Raw Videos",
    description:
      "Movement and temperament clips remain labeled as raw so buyers can evaluate without over-produced editing.",
  },
  {
    id: "meet-parents",
    title: "Meet the Parents",
    description:
      "Stud and female pages show structure notes, family tree data, documents, and sample offspring.",
  },
  {
    id: "delivery-pickup",
    title: "Delivery / Pickup",
    description:
      "Travel, local pickup, and puppy release workflow are explained before deposit conversations.",
  },
  {
    id: "contracts-guarantees",
    title: "Contracts & Guarantees",
    description:
      "Contract summary and guarantee language are surfaced as buyer education, not hidden after inquiry.",
  },
];

export const stackOffComparisons = [
  {
    id: "litter-side-by-side",
    title: "Rune x Nyx litter comparison",
    leftDogId: "onyx-heir",
    rightDogId: "sable-halo",
    defaultAngle: "side",
  },
  {
    id: "parents-movement",
    title: "Parent movement comparison",
    leftDogId: "obsidian-rune",
    rightDogId: "velvet-onyx",
    defaultAngle: "movement",
  },
];

export const products = [
  {
    id: "hoodie",
    name: "Shadow Sigil Hoodie",
    price: 72,
    description: "Heavyweight fleece with Korvus rune embroidery and stormliner hood.",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "collar",
    name: "Obsidian Collar",
    price: 48,
    description: "Latigo leather, brass hardware, laser-etched crest for daily wear.",
    image:
      "https://images.unsplash.com/photo-1546484959-f9a9c6c4d929?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "lead",
    name: "Hex Weave Lead",
    price: 58,
    description: "Biothane lead with midnight weave, secure for urban or field work.",
    image:
      "https://images.unsplash.com/photo-1542293787938-4d273c3600f9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "tee",
    name: "Ravenmark Tee",
    price: 32,
    description: "Soft cotton tee with metallic sigil print; unisex, tailored fit.",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80",
  },
];

export const testimonials = [
  {
    name: "Mara L.",
    quote:
      "Korvus kept every document and raw clip organized in one place. It felt premium, but it also felt honest.",
  },
  {
    name: "Jordan P.",
    quote:
      "The structure notes, litter timeline, and parent proof answered most of our questions before the first call.",
  },
  {
    name: "Elena & Kai",
    quote:
      "The site made it easy to compare puppies without hype. We could see the documents, the raw clips, and the breeder notes separately.",
  },
];

export const faqs = [
  {
    question: "Do you ship puppies?",
    answer:
      "Yes. We coordinate pickup, flight nanny, or insured ground transport once the puppy is cleared for travel.",
  },
  {
    question: "Can I view documents before placing a deposit?",
    answer:
      "Yes. Public-proof documents, litter paperwork, and breeder-entered summaries are visible before inquiry so buyers can evaluate with context.",
  },
  {
    question: "Are breeder notes the same as outside verification?",
    answer:
      "No. Breeder observations are labeled as breeder provided. Uploaded files and paperwork are shown separately so buyers can tell the difference.",
  },
  {
    question: "Do reserved puppies stay on the site?",
    answer:
      "Yes. Reserved or sold puppies can remain visible to show honest litter context, media progression, and production consistency.",
  },
];

export const galleryItems = [
  {
    id: "gallery-rune-stack",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80",
    caption: "Obsidian Rune side stack with natural light and minimal edit notes.",
  },
  {
    id: "gallery-onyx-stack",
    image:
      "https://images.unsplash.com/photo-1548247416-ec66f4900b2c?auto=format&fit=crop&w=900&q=80",
    caption: "Velvet Onyx front and side sessions captured for litter planning transparency.",
  },
  {
    id: "gallery-heir",
    image:
      "https://images.unsplash.com/photo-1504595403659-9088ce801e29?auto=format&fit=crop&w=900&q=80",
    caption: "Onyx Heir stack progression at six weeks.",
  },
  {
    id: "gallery-temperament",
    image:
      "https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&fit=crop&w=900&q=80",
    caption: "Litter interaction session paired with raw temperament clips.",
  },
];

export const studs = dogs
  .filter((dog) => dog.profileType === "stud")
  .map((dog) => ({
    ...dog,
    fee: dog.studFee,
  }));

export const females = dogs.filter((dog) => dog.profileType === "female");

export const puppies = dogs.filter((dog) => dog.profileType === "puppy");

export const getDogById = (id) => dogs.find((dog) => dog.id === id);

export const getLitterById = (id) => litters.find((litter) => litter.id === id);

export const getDogsByIds = (ids = []) =>
  ids.map((id) => getDogById(id)).filter(Boolean);

export const getDocumentsByIds = (ids = []) =>
  documents.filter((document) => ids.includes(document.id));

export const getMediaByIds = (ids = []) =>
  mediaAssets.filter((asset) => ids.includes(asset.id));

export const getBadgesByIds = (ids = []) =>
  transparencyBadges.filter((badge) => ids.includes(badge.id));

export const getDogDocuments = (dogId) =>
  documents.filter((document) => document.linkedDogIds.includes(dogId));

export const getDogMedia = (dogId) =>
  mediaAssets.filter((asset) => asset.dogId === dogId);

export const getLitterDocuments = (litterId) =>
  documents.filter((document) => document.linkedLitterIds.includes(litterId));

export const getLitterMedia = (litterId) =>
  mediaAssets.filter((asset) => asset.litterId === litterId);

export const getRelatedLitterForDog = (dog) =>
  dog?.litterId ? getLitterById(dog.litterId) : null;
