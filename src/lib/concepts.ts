import stealth1 from "@/assets/concept-stealth-1.jpg";
import stealth2 from "@/assets/concept-stealth-2.jpg";
import stealth3 from "@/assets/concept-stealth-3.jpg";
import crimson1 from "@/assets/concept-crimson-1.jpg";
import crimson2 from "@/assets/concept-crimson-2.jpg";
import crimson3 from "@/assets/concept-crimson-3.jpg";
import urban1 from "@/assets/concept-urban-1.jpg";
import urban2 from "@/assets/concept-urban-2.jpg";
import urban3 from "@/assets/concept-urban-3.jpg";
import stealthVid from "@/assets/concept-stealth.mp4";
import crimsonVid from "@/assets/concept-crimson.mp4";
import urbanVid from "@/assets/concept-urban.mp4";

export type Concept = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  cover: string;
  video: string;
  images: string[];
  specs: { label: string; value: string }[];
};

export const concepts: Concept[] = [
  {
    slug: "stealth-black-series",
    title: "Stealth Black Series",
    tagline: "Shadows that move at 200 km/h.",
    description:
      "Murdered-out paint, blacked-out wheels and a stance that doesn't blink. The Stealth Series is for buyers who believe attention should be earned, not chased.",
    cover: stealth1,
    video: stealthVid,
    images: [stealth1, stealth2, stealth3],
    specs: [
      { label: "Finish", value: "Matte Black PPF" },
      { label: "Wheels", value: '20" Forged Dark' },
      { label: "Interior", value: "Black Nappa + Carbon" },
      { label: "Status", value: "Available" },
    ],
  },
  {
    slug: "crimson-performance",
    title: "Crimson Performance",
    tagline: "Loud paint. Louder exhaust.",
    description:
      "A no-apologies build for drivers who like their cars seen and heard. Sport tuned, leather wrapped, and ready for the open highway between Surat and Bardoli.",
    cover: crimson1,
    video: crimsonVid,
    images: [crimson1, crimson2, crimson3],
    specs: [
      { label: "Paint", value: "Inferno Red" },
      { label: "Exhaust", value: "Sport Cat-Back" },
      { label: "Interior", value: "Black + Red Stitch" },
      { label: "Status", value: "Reserved" },
    ],
  },
  {
    slug: "urban-luxury",
    title: "Urban Luxury",
    tagline: "Where the boardroom meets the boulevard.",
    description:
      "Hand-picked premium SUVs prepared for executive use — chauffeur-grade cabins, panoramic glass, and pearl white exteriors that age like a watch.",
    cover: urban1,
    video: urbanVid,
    images: [urban1, urban2, urban3],
    specs: [
      { label: "Paint", value: "Pearl White" },
      { label: "Glass", value: "Panoramic Roof" },
      { label: "Interior", value: "Cream Nappa" },
      { label: "Status", value: "Available" },
    ],
  },
];

export const getConcept = (slug: string) => concepts.find(c => c.slug === slug);
