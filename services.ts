export type Service = {
  slug: string;
  title: string;
  blurb: string;
  intro: string;
  bullets: string[];
  lead: string;
};

export const services: Service[] = [
  {
    slug: "channel-letters",
    title: "Channel Letters",
    blurb: "Illuminated aluminum & acrylic letters with LED backlighting.",
    intro:
      "Channel letters are the signature of a storefront — your name built in three dimensions and lit so it reads from the road after dark. We fabricate every set in our West Houston shop, so you control the depth, the finish and the glow.",
    bullets: [
      "Front-lit, halo-lit (backlit) or unlit aluminum",
      "Custom depths from 3\" to 12\" returns",
      "Energy-efficient LED modules, UL listed",
      "Painted, stainless, brushed or acrylic faces",
      "We handle the Houston permit packet for you",
    ],
    lead: "Send us your logo and a photo of your building — we'll mock up your letters at real scale before anything is cut.",
  },
  {
    slug: "led-digital",
    title: "LED & Digital",
    blurb: "Programmable message boards controllable from any device.",
    intro:
      "A digital message center lets you change the message the moment your plans change. Ours are built for Texas heat, controlled from your phone or laptop, and sized to fit what your jurisdiction will actually permit.",
    bullets: [
      "Full-color and monochrome boards",
      "Cloud scheduling from any device",
      "Weather-rated cabinets for outdoor use",
      "Volume and brightness auto-scheduling",
      "Content design and animation included",
    ],
    lead: "Tell us the road your board will face and we'll size it for the speed and distance your drivers travel.",
  },
  {
    slug: "monument-signs",
    title: "Monument Signs",
    blurb: "Masonry, foam and aluminum ground signs for properties.",
    intro:
      "Monument signs sit at the entrance and set the tone before anyone walks in. We build them in masonry veneer, high-density foam or aluminum composite, with tenant panels that are easy to change as your building fills up.",
    bullets: [
      "Masonry, EIFS, foam or ACM construction",
      "Illuminated or non-illuminated",
      "Removable tenant panels and directory cards",
      "Internal or exterior lighting",
      "Drainage and footing engineered for the site",
    ],
    lead: "We can match your existing architectural materials so the monument looks like it was always there.",
  },
  {
    slug: "pylon-pole",
    title: "Pylon & Pole",
    blurb: "Tall freestanding structures for highway visibility.",
    intro:
      "When drivers pass at 55, height is the only thing that works. Pylon and pole signs raise your brand above the treeline — engineered, anchored and maintained so it stays plumb through every storm season.",
    bullets: [
      "Single and double-sided structures",
      "Engineered wind-load calculations",
      "LED or fluorescent cabinet lighting",
      "Cabinet access and routine maintenance",
      "Rush repair on damaged panels",
    ],
    lead: "We'll survey sightlines from both directions before we recommend a height.",
  },
  {
    slug: "vehicle-wraps",
    title: "Vehicle Wraps",
    blurb: "Decals to full color-change fleet wraps. 5–7 yr durability.",
    intro:
      "Your vans are moving billboards that already run your route every day. We design, print and install wraps that survive the sun and the car wash, and we can panel-wrap a whole fleet on one schedule.",
    bullets: [
      "Partial, full and color-change wraps",
      "Cast vinyl rated 5–7 years outdoors",
      "Fleet numbering and branding programs",
      "Printed and applied in-house",
      "Removal that leaves paint intact",
    ],
    lead: "Send your fleet list and we'll quote the whole program, not just one van.",
  },
  {
    slug: "banners-graphics",
    title: "Banners & Graphics",
    blurb: "Heavy-duty vinyl and mesh printed on our UV flatbed.",
    intro:
      "Grand openings, construction screens, sales events — banners have to look sharp up close and survive a week of wind. We print on our own UV flatbed, so a rush order really is a rush order.",
    bullets: [
      "Vinyl, mesh and fabric substrates",
      "Hemis, grommets and pole pockets",
      "UV flatbed printing up to large formats",
      "Same-week turnaround on most runs",
      "Reusable designs for recurring events",
    ],
    lead: "Tell us the event date and we'll work backwards to a delivery that beats it.",
  },
  {
    slug: "window-graphics",
    title: "Window Graphics",
    blurb: "Cut vinyl, frosted film, perforated one-way wraps.",
    intro:
      "Storefront glass is free advertising space you're already paying rent for. We cut, print and apply graphics that read from the sidewalk while keeping your view and your daylight.",
    bullets: [
      "Cut vinyl lettering and logos",
      "Frosted privacy film with patterns",
      "Perforated one-way window film",
      "Hours, promos and seasonal changes",
      "Clean removal with no residue",
    ],
    lead: "We can template a design on your glass before committing to a full install.",
  },
  {
    slug: "ada-signs",
    title: "ADA Signs",
    blurb: "Code-compliant braille and tactile wayfinding.",
    intro:
      "ADA interior signage has exacting rules about character height, contrast, braille and mounting height. We build to the standard so your building passes inspection the first time.",
    bullets: [
      "Tactile characters and Grade 2 braille",
      "Contrast and character-height compliance",
      "Room ID, directional and restroom plates",
      "Corrosion-resistant substrates",
      "Mounting templates for your contractor",
    ],
    lead: "Send your floor plan and we'll produce a room-number schedule with the correct plate for each door.",
  },
  {
    slug: "installation-service",
    title: "Installation & Service",
    blurb: "Permitted installs, repair and LED retrofits.",
    intro:
      "A sign is only as good as the last time someone looked at it. Our licensed crew handles the lift, the permit, the electrical and the follow-up repair — no hand-offs to a subcontractor you've never met.",
    bullets: [
      "Permitted installs across Harris County",
      "Lift and crane work with a licensed crew",
      "LED and transformer retrofits",
      "Storm damage and emergency service",
      "Scheduled cleaning and inspections",
    ],
    lead: "Ask about a yearly service visit — it's far cheaper than a rebuild.",
  },
  {
    slug: "decals-labels",
    title: "Decals & Labels",
    blurb: "Die-cut stickers and product labels in any quantity.",
    intro:
      "From a single die-cut sticker to a run of product labels, we print and cut in-house. You get proofing before the press runs and a quantity that matches what you actually need.",
    bullets: [
      "Die-cut, kiss-cut and roll labels",
      "Weatherproof and dishwasher-safe options",
      "Clear, white and metallic stocks",
      "No minimum on many jobs",
      "Barcode and variable-data printing",
    ],
    lead: "Send artwork or a rough sketch — we'll tell you what will and won't cut cleanly.",
  },
  {
    slug: "custom-stamps",
    title: "Custom Stamps",
    blurb: "Self-inking, notary and office stamps, made locally.",
    intro:
      "Notary stamps, return-address stamps and date stamps are still the fastest way to move paperwork. We make them on the premises, so a worn-out die doesn't cost you a week.",
    bullets: [
      "Self-inking and pre-inked models",
      "Texas notary seal requirements",
      "Return address and date stamps",
      "Replacement dies and ink refills",
      "Most orders ready same day",
    ],
    lead: "Bring your current stamp in and we'll match or improve it.",
  },
  {
    slug: "laser-engraving",
    title: "Laser Engraving",
    blurb: "Plaques, awards, donor walls and branded gifts.",
    intro:
      "Engraved pieces carry weight in a way printed items don't. We laser engrave metal, acrylic and wood for plaques, awards, donor walls and branded gifts — small runs welcome.",
    bullets: [
      "Brass, aluminum, acrylic and wood",
      "Donor walls and building plaques",
      "Employee recognition awards",
      "Branded promotional gifts",
      "Proofing before the final run",
    ],
    lead: "Tell us the occasion and the budget; we'll suggest a material that reads more expensive than it is.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
