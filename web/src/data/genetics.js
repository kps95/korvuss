export const lociDetails = [
  {
    key: "A",
    title: "A Locus — Agouti",
    description:
      "Pattern system for tan points, sable, and recessive black. Only shows when K locus is ky/ky.",
    genotypes: [
      { label: "a/a", detail: "Recessive black; solid dog when paired with ky/ky." },
      {
        label: "at/at",
        detail: "Full tan points (tri); avoid KB and heavy brindle to keep points clean.",
      },
      { label: "at/a", detail: "Carries tan; points may be faint if no brindle." },
      { label: "aw/*", detail: "Wild sable; shaded, wolfy look (rare in Frenchies)." },
    ],
    insights: [
      "Requires ky/ky on K locus to show.",
      "KB fully blocks tan; Kbr distorts it.",
    ],
  },
  {
    key: "K",
    title: "K Locus — Dominant Black / Brindle / Clear",
    description: "Gates whether Agouti patterns are visible.",
    genotypes: [
      { label: "KB/*", detail: "Dominant black; hides tri/tan." },
      { label: "Kbr/*", detail: "Brindle overlay; interrupts tan points." },
      { label: "ky/ky", detail: "Clear; allows full A locus expression." },
    ],
    insights: [
      "For clean tan points or tri, avoid KB and Kbr.",
      "Most color breeders target ky/ky to unlock patterns.",
    ],
  },
  {
    key: "B",
    title: "B Locus — Testable Chocolate (b)",
    description:
      "Recessive chocolate; cornerstone for isabella and new shade lines.",
    genotypes: [
      { label: "b/b", detail: "Full testable chocolate; brown pigment." },
      { label: "b/n", detail: "Carrier; visual only when paired." },
      { label: "n/n", detail: "No testable chocolate." },
    ],
    insights: [
      "b/b + dd = Isabella.",
      "b/b + co/co = New Shade; add dd for New Shade Isabella.",
    ],
  },
  {
    key: "CO",
    title: "CO Locus — Cocoa (co)",
    description:
      "Recessive cocoa; pairs with B locus for New Shade and pink/caramel lines.",
    genotypes: [
      { label: "co/co", detail: "Full cocoa expression." },
      { label: "co/n", detail: "Carrier." },
      { label: "n/n", detail: "No cocoa." },
    ],
    insights: [
      "co/co + b/b = New Shade (chocolate stack).",
      "co/co + intensity + cream = Caramel; add pink modifiers for Pink/Caramel Pink.",
    ],
  },
  {
    key: "D",
    title: "D Locus — Dilution (d)",
    description: "Dilutes pigment to blue/lilac tones.",
    genotypes: [
      { label: "dd", detail: "Full dilution (black → blue, chocolate → isabella)." },
      { label: "d/n", detail: "Carrier." },
      { label: "n/n", detail: "No dilution." },
    ],
    insights: [
      "dd + b/b = Isabella.",
      "dd + co/co + b/b = New Shade Isabella.",
    ],
  },
  {
    key: "E",
    title: "E Locus — Cream & Mask (E/e/EM)",
    description:
      "Cream overrides most color; EM adds a mask. Crucial ingredient for pink and caramel influence.",
    genotypes: [
      { label: "e/e", detail: "Full cream; masks most other colors." },
      { label: "EM/*", detail: "Black mask (if pigment present)." },
      { label: "E/*", detail: "Normal expression (no override unless EM present)." },
    ],
    insights: [
      "Cream can hide elite chocolate stacks—DNA test cream dogs.",
      "Needed for pink lines alongside cocoa and intensity.",
    ],
  },
  {
    key: "I",
    title: "Intensity Locus (I/i)",
    description: "Lightens reds/tans; essential for caramel and pink.",
    genotypes: [
      { label: "I/I", detail: "Maximum lightening (peach/sand)." },
      { label: "I/i", detail: "Intermediate lightening." },
      { label: "i/i", detail: "No lightening." },
    ],
    insights: [
      "Caramel = co/co + intensity.",
      "Pink and caramel pink need strong intensity plus cream and pigment suppression.",
    ],
  },
];

export const comboHighlights = [
  {
    title: "Isabella",
    genes: ["b/b", "dd"],
    description: "Diluted testable chocolate; lavender-taupe coat, lighter eyes.",
  },
  {
    title: "New Shade",
    genes: ["b/b", "co/co"],
    description: "Rich cool chocolate; premium when combined with tri/fluffy/pink carriers.",
  },
  {
    title: "New Shade Isabella",
    genes: ["b/b", "co/co", "dd"],
    description: "Pale cool lavender-gray; top of market aside from pink variants.",
  },
  {
    title: "Caramel",
    genes: ["co/co", "I/I (or strong I/i)", "cream influence"],
    description: "Golden/peach tone; intensity applied to cocoa.",
  },
  {
    title: "Caramel Pink",
    genes: ["co/co", "b/b", "I/I", "cream", "pigment suppression"],
    description: "Soft gold-pink coat, pink nose/eye rims; extremely rare.",
  },
  {
    title: "Pink",
    genes: ["co/co", "intensity", "cream", "pigment suppression", "no KB"],
    description: "Light coat, fully pink pigment; requires multiple recessives aligned.",
  },
];

export const strategyRows = [
  {
    title: "Produce Pink",
    requirements: "co/co + I/I + e/e + pigment suppression + ky/ky",
    probability: "~6% if both parents are carriers for each recessive; 100% if both are homozygous.",
    insight:
      "Carrier x carrier still yields low odds that all recessives align—plan litters accordingly.",
  },
  {
    title: "Produce Caramel Pink",
    requirements: "b/b + co/co + e/e + I/I + pink modifiers",
    probability: "Up to 25% per pup if both parents carry each recessive; 100% if both are homozygous.",
    insight: "High-value outcome; confirm carriers via DNA before pairing.",
  },
  {
    title: "Produce New Shade",
    requirements: "b/b + co/co (add dd for NS Isabella)",
    probability: "25% from carrier x carrier; 100% if both parents are b/b co/co.",
    insight: "b/b co/co parents give 100% New Shade; carriers give 25% on average.",
  },
];
