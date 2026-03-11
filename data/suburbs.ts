export type SuburbPageType = "stump-grinding" | "tree-service";

export interface SuburbData {
  slug: string;
  name: string;
  city: string;
  county: string;
  state: string;
  serviceType: SuburbPageType;
  serviceLabel: string;
  nearbySuburbs: string[]; // slugs
  intro: string;
  bodyParagraph: string;
  commonJobs: string[];
  metaTitle: string;
  metaDescription: string;
  heroSubtitle?: string;
  localExpertiseParagraph?: string;
  faqs?: Array<{ question: string; answer: string }>;
}

export const SUBURBS: SuburbData[] = [
  // ─── STUMP GRINDING PAGES ────────────────────────────────────────────────
  {
    slug: "naperville-stump-grinding",
    city: "Naperville",
    name: "Naperville",
    county: "DuPage & Will",
    state: "IL",
    serviceType: "stump-grinding",
    serviceLabel: "Stump Grinding",
    nearbySuburbs: ["wheaton-stump-grinding", "downers-grove-stump-grinding", "glen-ellyn-stump-grinding", "darien-stump-grinding"],
    intro:
      "Naperville homeowners trust Chicago Stump Grinding for fast, professional stump grinding. Whether you're clearing storm damage, prepping a yard for landscaping, or just tired of mowing around an old stump, our crew serves all of Naperville and surrounding DuPage County neighborhoods.",
    bodyParagraph:
      "Naperville's mature tree canopy means stump grinding is one of the most common home services in the city. Oak, maple, elm, and ash stumps are our specialty. We work in neighborhoods from Wheatland Township to downtown Naperville, arriving on time and leaving your yard cleaner than we found it.",
    commonJobs: [
      "Storm-damaged tree stump removal",
      "Old oak and maple stump grinding",
      "Yard prep before new landscaping",
      "Stump grinding for fence or deck installation",
      "Multiple-stump grinding for new construction",
    ],
    metaTitle: "Naperville Stump Grinding | Tree Stump Removal in Naperville IL",
    metaDescription:
      "Professional stump grinding in Naperville, IL. Fast tree stump removal for homeowners in Naperville and nearby DuPage County. Request a free quote today.",
  },
  {
    slug: "hinsdale-stump-grinding",
    city: "Hinsdale",
    name: "Hinsdale",
    county: "DuPage",
    state: "IL",
    serviceType: "stump-grinding",
    serviceLabel: "Stump Grinding",
    nearbySuburbs: ["oak-brook-stump-grinding", "western-springs-stump-grinding", "burr-ridge-stump-grinding", "la-grange-stump-grinding"],
    intro:
      "Chicago Stump Grinding provides premium stump grinding services in Hinsdale, IL. Hinsdale's large lots and historic trees make professional stump grinding essential — we handle jobs of every size with care for your landscaping.",
    bodyParagraph:
      "Hinsdale's established estates and mature tree lines mean stump grinding projects range from single ornamental stumps to clearing multiple large hardwood stumps after a major renovation. Our equipment is sized right for Hinsdale's typical lot sizes and we take care to protect existing landscaping, stone features, and irrigation systems.",
    commonJobs: [
      "Large hardwood stump grinding on estate lots",
      "Stump removal before landscape renovation",
      "Grinding stumps near retaining walls and stone features",
      "Multiple stump grinding for yard redesign",
      "Post-storm emergency stump grinding",
    ],
    metaTitle: "Hinsdale Stump Grinding | Tree Stump Removal in Hinsdale IL",
    metaDescription:
      "Expert stump grinding in Hinsdale, IL. We grind stumps of all sizes on Hinsdale's large residential lots. Free quote — same-week service available.",
  },
  {
    slug: "downers-grove-stump-grinding",
    city: "Downers Grove",
    name: "Downers Grove",
    county: "DuPage",
    state: "IL",
    serviceType: "stump-grinding",
    serviceLabel: "Stump Grinding",
    nearbySuburbs: ["naperville-stump-grinding", "wheaton-stump-grinding", "darien-stump-grinding", "elmhurst-stump-grinding"],
    intro:
      "Fast and affordable stump grinding in Downers Grove, IL. Chicago Stump Grinding serves homeowners throughout Downers Grove with professional stump removal and cleanup.",
    bodyParagraph:
      "Downers Grove is one of DuPage County's most established communities, with mature trees throughout its neighborhoods. We handle everything from small ornamental stumps near patios to large old-growth stumps left from tree removal projects. Our crew covers all Downers Grove neighborhoods including north, south, and central areas.",
    commonJobs: [
      "Mature oak and elm stump grinding",
      "Stump grinding for new patio or deck areas",
      "Subdivision lot stump clearing",
      "Stump removal after tree service work",
      "Root grinding near sidewalks and driveways",
    ],
    metaTitle: "Downers Grove Stump Grinding | Tree Stump Removal in Downers Grove IL",
    metaDescription:
      "Professional stump grinding in Downers Grove, IL. Local stump removal service for DuPage County homeowners. Fast response, fair pricing. Free quote.",
  },
  {
    slug: "glen-ellyn-stump-grinding",
    city: "Glen Ellyn",
    name: "Glen Ellyn",
    county: "DuPage",
    state: "IL",
    serviceType: "stump-grinding",
    serviceLabel: "Stump Grinding",
    nearbySuburbs: ["wheaton-stump-grinding", "naperville-stump-grinding", "elmhurst-stump-grinding", "downers-grove-stump-grinding"],
    intro:
      "Glen Ellyn homeowners rely on Chicago Stump Grinding for fast, professional stump grinding. We serve all Glen Ellyn neighborhoods and can typically schedule within days.",
    bodyParagraph:
      "Glen Ellyn's older neighborhoods are full of beautiful mature trees — and occasional stumps that need to go. Whether you're dealing with a stump left after a tree removal or clearing space for a new project, our crew brings professional equipment and a commitment to clean, careful work.",
    commonJobs: [
      "Grinding stumps in older Glen Ellyn neighborhoods",
      "Stump removal near sidewalks and parkways",
      "Yard-clearing for landscape redesign",
      "Storm damage stump grinding",
      "Stump grinding near fences and utility lines",
    ],
    metaTitle: "Glen Ellyn Stump Grinding | Tree Stump Removal in Glen Ellyn IL",
    metaDescription:
      "Stump grinding in Glen Ellyn, IL. Professional tree stump removal for homeowners in Glen Ellyn and DuPage County. Same-week service. Free quote today.",
  },
  {
    slug: "oak-brook-stump-grinding",
    city: "Oak Brook",
    name: "Oak Brook",
    county: "DuPage",
    state: "IL",
    serviceType: "stump-grinding",
    serviceLabel: "Stump Grinding",
    nearbySuburbs: ["hinsdale-stump-grinding", "burr-ridge-stump-grinding", "elmhurst-stump-grinding", "downers-grove-stump-grinding"],
    intro:
      "Professional stump grinding in Oak Brook, IL. Chicago Stump Grinding serves Oak Brook's residential and commercial properties with efficient, thorough stump removal.",
    bodyParagraph:
      "Oak Brook properties — from upscale residential estates to commercial campuses — benefit from our professional stump grinding service. We have the equipment to handle stumps of all sizes and can work around existing landscaping, sprinkler systems, and hardscaping without damage.",
    commonJobs: [
      "Commercial property stump grinding",
      "Large estate stump removal",
      "Stumps near irrigation systems",
      "Multi-stump clearing for landscape redesign",
      "Emergency stump removal after storm damage",
    ],
    metaTitle: "Oak Brook Stump Grinding | Tree Stump Removal in Oak Brook IL",
    metaDescription:
      "Expert stump grinding in Oak Brook, IL. Residential and commercial stump removal in Oak Brook and DuPage County. Free estimates, fast service.",
  },
  {
    slug: "western-springs-stump-grinding",
    city: "Western Springs",
    name: "Western Springs",
    county: "Cook",
    state: "IL",
    serviceType: "stump-grinding",
    serviceLabel: "Stump Grinding",
    nearbySuburbs: ["hinsdale-stump-grinding", "la-grange-stump-grinding", "burr-ridge-stump-grinding", "downers-grove-stump-grinding"],
    intro:
      "Chicago Stump Grinding provides expert stump grinding in Western Springs, IL. Our crew serves Western Springs homeowners with professional service and cleanup every time.",
    bodyParagraph:
      "Western Springs is a beautiful Cook County suburb with lush residential landscapes. Our stump grinding service is a popular choice for homeowners preparing yards for new landscaping or simply removing old stumps that have become eyesores or hazards. We protect your lawn and garden throughout the process.",
    commonJobs: [
      "Stump grinding for yard renovation projects",
      "Hardwood stump removal in residential neighborhoods",
      "Stump grinding near flower beds and garden areas",
      "Post-tree-removal grinding",
      "Stump removal for new fence installation",
    ],
    metaTitle: "Western Springs Stump Grinding | Tree Stump Removal in Western Springs IL",
    metaDescription:
      "Stump grinding in Western Springs, IL. Professional stump removal for Cook County homeowners. Fast, clean, and affordable. Request your free quote.",
  },
  {
    slug: "la-grange-stump-grinding",
    city: "La Grange",
    name: "La Grange",
    county: "Cook",
    state: "IL",
    serviceType: "stump-grinding",
    serviceLabel: "Stump Grinding",
    nearbySuburbs: ["western-springs-stump-grinding", "hinsdale-stump-grinding", "burr-ridge-stump-grinding", "darien-stump-grinding"],
    intro:
      "La Grange residents choose Chicago Stump Grinding for reliable, affordable stump grinding. We serve all of La Grange and the surrounding Cook County communities.",
    bodyParagraph:
      "La Grange is a charming Cook County village where many homeowners deal with old stumps from the community's mature tree population. Our team handles everything from small ornamental tree stumps to large oak stumps, always leaving your yard clean and ready for whatever comes next.",
    commonJobs: [
      "Oak and maple stump grinding",
      "Stump removal for patio or walkway projects",
      "Ornamental tree stump grinding",
      "Stump clearing for vegetable gardens",
      "Storm damage stump grinding",
    ],
    metaTitle: "La Grange Stump Grinding | Tree Stump Removal in La Grange IL",
    metaDescription:
      "Professional stump grinding in La Grange, IL. Local stump removal service serving La Grange and Cook County. Same-week appointments. Free quotes.",
  },
  {
    slug: "burr-ridge-stump-grinding",
    city: "Burr Ridge",
    name: "Burr Ridge",
    county: "DuPage & Cook",
    state: "IL",
    serviceType: "stump-grinding",
    serviceLabel: "Stump Grinding",
    nearbySuburbs: ["hinsdale-stump-grinding", "oak-brook-stump-grinding", "la-grange-stump-grinding", "darien-stump-grinding"],
    intro:
      "Chicago Stump Grinding serves Burr Ridge homeowners with professional stump grinding and stump removal. Same-week scheduling, fair pricing, and complete cleanup.",
    bodyParagraph:
      "Burr Ridge is known for its large upscale properties and mature landscapes. Stump grinding on Burr Ridge properties often involves substantial stumps from large hardwoods. Our commercial-grade equipment handles these efficiently while taking care to protect your landscaping investments.",
    commonJobs: [
      "Large estate stump grinding",
      "Multiple stump clearing for yard redesign",
      "Grinding stumps near driveways and gates",
      "Hardwood stump removal after tree service",
      "New construction lot clearing",
    ],
    metaTitle: "Burr Ridge Stump Grinding | Tree Stump Removal in Burr Ridge IL",
    metaDescription:
      "Expert stump grinding in Burr Ridge, IL. Professional stump removal for Burr Ridge residential properties. Free on-site estimates. Book today.",
  },
  {
    slug: "elmhurst-stump-grinding",
    city: "Elmhurst",
    name: "Elmhurst",
    county: "DuPage",
    state: "IL",
    serviceType: "stump-grinding",
    serviceLabel: "Stump Grinding",
    nearbySuburbs: ["glen-ellyn-stump-grinding", "oak-brook-stump-grinding", "downers-grove-stump-grinding", "wheaton-stump-grinding"],
    intro:
      "Chicago Stump Grinding provides fast, reliable stump grinding throughout Elmhurst, IL. From single stumps to multi-stump jobs, our Elmhurst team handles it all.",
    bodyParagraph:
      "Elmhurst is a DuPage County favorite with tree-lined streets and well-maintained residential neighborhoods. After a tree removal — planned or due to storm damage — grinding the stump is the final step to restoring your yard. We serve all Elmhurst neighborhoods with quick turnaround and professional results.",
    commonJobs: [
      "Post-storm stump grinding",
      "Stump removal before landscaping projects",
      "Tree stump grinding near sidewalks",
      "Root grinding for parkway stumps",
      "Multiple stump clearing after yard renovation",
    ],
    metaTitle: "Elmhurst Stump Grinding | Tree Stump Removal in Elmhurst IL",
    metaDescription:
      "Stump grinding in Elmhurst, IL. Fast, professional tree stump removal for DuPage County homeowners. Request your free estimate today.",
  },
  {
    slug: "wheaton-stump-grinding",
    city: "Wheaton",
    name: "Wheaton",
    county: "DuPage",
    state: "IL",
    serviceType: "stump-grinding",
    serviceLabel: "Stump Grinding",
    nearbySuburbs: ["glen-ellyn-stump-grinding", "naperville-stump-grinding", "elmhurst-stump-grinding", "downers-grove-stump-grinding"],
    intro:
      "Chicago Stump Grinding serves Wheaton, IL homeowners with professional stump grinding and stump removal. Count on fast service and thorough cleanup throughout DuPage County.",
    bodyParagraph:
      "Wheaton's beautiful residential neighborhoods are home to many mature trees — and occasionally the stumps left after they need to come down. Our team is experienced with all common Wheaton tree species and can grind stumps in tight spaces, near fences, or in difficult-access back yards.",
    commonJobs: [
      "Ash and oak stump grinding in residential areas",
      "Stump removal near garden beds",
      "Grinding stumps left from city tree programs",
      "Multiple-stump grinding for yard cleanup",
      "Parkway stump removal",
    ],
    metaTitle: "Wheaton Stump Grinding | Tree Stump Removal in Wheaton IL",
    metaDescription:
      "Professional stump grinding in Wheaton, IL. Local stump removal for DuPage County homeowners. Fast quotes, same-week service. Call today.",
  },
  {
    slug: "darien-stump-grinding",
    city: "Darien",
    name: "Darien",
    county: "DuPage",
    state: "IL",
    serviceType: "stump-grinding",
    serviceLabel: "Stump Grinding",
    nearbySuburbs: ["naperville-stump-grinding", "burr-ridge-stump-grinding", "downers-grove-stump-grinding", "la-grange-stump-grinding"],
    intro:
      "Chicago Stump Grinding provides reliable stump grinding in Darien, IL. Our team handles residential stump removal throughout Darien with fair pricing and same-week availability.",
    bodyParagraph:
      "Darien homeowners often call us after a tree removal job leaves a stump behind. We work with all tree species common to the area and provide thorough grinding and complete wood chip cleanup. Whether you're seeding new grass or installing a patio, we'll leave the surface ready.",
    commonJobs: [
      "Stump grinding after tree removal service",
      "Yard prep for new grass seeding",
      "Stumps near driveways and walkways",
      "Back yard stump removal",
      "Multi-stump grinding for landscaping projects",
    ],
    metaTitle: "Darien Stump Grinding | Tree Stump Removal in Darien IL",
    metaDescription:
      "Stump grinding in Darien, IL. Professional tree stump removal for Darien and DuPage County. Fast response, clean results. Request a free quote.",
  },
  {
    slug: "lemont-stump-grinding",
    city: "Lemont",
    name: "Lemont",
    county: "Cook, DuPage & Will",
    state: "IL",
    serviceType: "stump-grinding",
    serviceLabel: "Stump Grinding",
    nearbySuburbs: ["homer-glen-stump-grinding", "darien-stump-grinding", "burr-ridge-stump-grinding", "naperville-stump-grinding"],
    intro:
      "Chicago Stump Grinding serves Lemont, IL with professional stump grinding and tree stump removal. We offer competitive pricing and reliable service for Lemont homeowners.",
    bodyParagraph:
      "Lemont is a growing southwest suburban community where many homeowners have older trees on larger lots. Our team is equipped to handle stumps of any size, and we take pride in leaving your yard cleaner than we found it. We serve Lemont's neighborhoods including the historic downtown area and newer residential developments.",
    commonJobs: [
      "Large lot stump grinding",
      "Stump removal near limestone outcroppings",
      "Post-storm stump and tree cleanup",
      "Stump grinding for garden expansion",
      "Multiple stump clearing for new construction",
    ],
    metaTitle: "Lemont Stump Grinding | Tree Stump Removal in Lemont IL",
    metaDescription:
      "Professional stump grinding in Lemont, IL. Expert stump removal for Cook, DuPage, and Will County homeowners. Free on-site quotes. Book today.",
  },
  {
    slug: "homer-glen-stump-grinding",
    city: "Homer Glen",
    name: "Homer Glen",
    county: "Will",
    state: "IL",
    serviceType: "stump-grinding",
    serviceLabel: "Stump Grinding",
    nearbySuburbs: ["lemont-stump-grinding", "darien-stump-grinding", "burr-ridge-stump-grinding", "naperville-stump-grinding"],
    intro:
      "Chicago Stump Grinding provides professional stump grinding in Homer Glen, IL. We serve Will County homeowners throughout Homer Glen with fast, reliable service.",
    bodyParagraph:
      "Homer Glen is a spacious southwest suburb where large lots often include mature trees. When those trees come down — or when you just want to reclaim your yard — our stump grinding service gets the job done efficiently. We serve all of Homer Glen including neighborhoods near Stony Creek and the forest preserve borders.",
    commonJobs: [
      "Large property stump clearing",
      "Oak and hickory stump grinding",
      "Stump grinding near forest preserve lots",
      "Yard prep for new landscaping or structures",
      "Storm damage stump removal",
    ],
    metaTitle: "Homer Glen Stump Grinding | Tree Stump Removal in Homer Glen IL",
    metaDescription:
      "Stump grinding in Homer Glen, IL. Professional stump removal for Will County homeowners. Serving Homer Glen and nearby suburbs. Request a free quote.",
  },

  // ─── TREE SERVICE PAGES ──────────────────────────────────────────────────
  {
    slug: "hinsdale-tree-service",
    city: "Hinsdale",
    name: "Hinsdale",
    county: "DuPage",
    state: "IL",
    serviceType: "tree-service",
    serviceLabel: "Tree Service",
    nearbySuburbs: ["oak-brook-tree-service", "western-springs-tree-service", "burr-ridge-tree-service", "elmhurst-tree-service"],
    intro:
      "Chicago Tree & Stump Specialists provides expert tree service in Hinsdale, IL. From routine trimming to full removals, we keep Hinsdale's trees healthy and properties safe.",
    bodyParagraph:
      "Hinsdale's estate properties and mature tree canopy require knowledgeable, careful tree care. Our certified professionals handle everything from crown thinning and deadwood removal to full tree removal and stump grinding. We work carefully around Hinsdale's luxury landscaping and historic property features.",
    commonJobs: [
      "Tree trimming and crown thinning",
      "Dead branch and hazard limb removal",
      "Tree removal near structures",
      "Storm damage cleanup and emergency tree service",
      "Tree health assessment and consulting",
    ],
    metaTitle: "Hinsdale Tree Service | Tree Trimming & Removal in Hinsdale IL",
    metaDescription:
      "Expert tree service in Hinsdale, IL. Professional tree trimming, removal, and storm cleanup for Hinsdale homeowners. Free estimates. Call today.",
  },
  {
    slug: "glen-ellyn-tree-service",
    city: "Glen Ellyn",
    name: "Glen Ellyn",
    county: "DuPage",
    state: "IL",
    serviceType: "tree-service",
    serviceLabel: "Tree Service",
    nearbySuburbs: ["wheaton-tree-service", "elmhurst-tree-service", "hinsdale-tree-service", "oak-brook-tree-service"],
    intro:
      "Chicago Tree & Stump Specialists offers full tree service in Glen Ellyn, IL. We provide trimming, pruning, removal, and stump grinding for Glen Ellyn homeowners.",
    bodyParagraph:
      "Glen Ellyn's beautiful neighborhoods and tree-lined streets are a point of pride for the community. Our tree service team helps protect that beauty by providing expert pruning, hazard removal, and tree health care. We also offer complete tree removal when a tree is dead, damaged, or dangerously positioned.",
    commonJobs: [
      "Annual tree trimming and pruning",
      "Hazardous limb removal",
      "Tree removal near homes and power lines",
      "Storm damage response",
      "Stump grinding after tree removal",
    ],
    metaTitle: "Glen Ellyn Tree Service | Tree Trimming & Removal in Glen Ellyn IL",
    metaDescription:
      "Professional tree service in Glen Ellyn, IL. Expert tree trimming, pruning, and removal for DuPage County homeowners. Free quotes. Book today.",
  },
  {
    slug: "oak-brook-tree-service",
    city: "Oak Brook",
    name: "Oak Brook",
    county: "DuPage",
    state: "IL",
    serviceType: "tree-service",
    serviceLabel: "Tree Service",
    nearbySuburbs: ["hinsdale-tree-service", "burr-ridge-tree-service", "elmhurst-tree-service", "wheaton-tree-service"],
    intro:
      "Chicago Tree & Stump Specialists provides commercial and residential tree service in Oak Brook, IL. Our certified crew handles all tree care needs for Oak Brook properties.",
    bodyParagraph:
      "Oak Brook's premium residential and commercial properties deserve high-quality tree care. Our team provides thorough, professional service including trimming, structural pruning, crown reduction, and complete tree removal. We work efficiently on large properties and are experienced with commercial grounds maintenance.",
    commonJobs: [
      "Commercial property tree trimming",
      "Structural pruning for large trees",
      "Crown reduction and thinning",
      "Emergency tree removal after storms",
      "Complete tree and stump service packages",
    ],
    metaTitle: "Oak Brook Tree Service | Tree Trimming & Removal in Oak Brook IL",
    metaDescription:
      "Expert tree service in Oak Brook, IL. Residential and commercial tree trimming, pruning, and removal. Serving DuPage County. Free estimates.",
  },
  {
    slug: "western-springs-tree-service",
    city: "Western Springs",
    name: "Western Springs",
    county: "Cook",
    state: "IL",
    serviceType: "tree-service",
    serviceLabel: "Tree Service",
    nearbySuburbs: ["hinsdale-tree-service", "burr-ridge-tree-service", "lemont-tree-service", "homer-glen-tree-service"],
    intro:
      "Chicago Tree & Stump Specialists offers professional tree service in Western Springs, IL. We provide trimming, removal, and full-service tree care for Cook County homeowners.",
    bodyParagraph:
      "Western Springs homeowners rely on our team for seasonal tree trimming, emergency storm cleanup, and complete tree removal when needed. We take care of your trees and your yard throughout every project, from setup to final cleanup.",
    commonJobs: [
      "Seasonal tree trimming and pruning",
      "Fruit tree pruning",
      "Dead tree removal",
      "Storm damage assessment and cleanup",
      "Stump grinding after removal",
    ],
    metaTitle: "Western Springs Tree Service | Tree Trimming & Removal in Western Springs IL",
    metaDescription:
      "Professional tree service in Western Springs, IL. Expert tree trimming and removal for Cook County homeowners. Same-week service. Free quote.",
  },
  {
    slug: "burr-ridge-tree-service",
    city: "Burr Ridge",
    name: "Burr Ridge",
    county: "DuPage & Cook",
    state: "IL",
    serviceType: "tree-service",
    serviceLabel: "Tree Service",
    nearbySuburbs: ["hinsdale-tree-service", "oak-brook-tree-service", "lemont-tree-service", "western-springs-tree-service"],
    intro:
      "Chicago Tree & Stump Specialists serves Burr Ridge, IL with comprehensive tree service. Expert tree care for Burr Ridge's upscale residential properties.",
    bodyParagraph:
      "Burr Ridge properties feature impressive mature trees that require expert care to stay healthy and safe. Our certified professionals handle everything from routine annual pruning to large-scale removals and emergency storm response. We're experienced working on large lots with high-value landscaping.",
    commonJobs: [
      "Large tree trimming on estate lots",
      "Hazard tree assessment and removal",
      "Crown thinning for wind load reduction",
      "Tree removal near pools and structures",
      "Complete yard clearing for renovation projects",
    ],
    metaTitle: "Burr Ridge Tree Service | Tree Trimming & Removal in Burr Ridge IL",
    metaDescription:
      "Expert tree service in Burr Ridge, IL. Professional tree trimming, pruning, and removal for Burr Ridge residential properties. Free estimates.",
  },
  {
    slug: "elmhurst-tree-service",
    city: "Elmhurst",
    name: "Elmhurst",
    county: "DuPage",
    state: "IL",
    serviceType: "tree-service",
    serviceLabel: "Tree Service",
    nearbySuburbs: ["glen-ellyn-tree-service", "oak-brook-tree-service", "wheaton-tree-service", "hinsdale-tree-service"],
    intro:
      "Chicago Tree & Stump Specialists provides full tree service in Elmhurst, IL. Trimming, pruning, removal, and stump grinding for DuPage County homeowners.",
    bodyParagraph:
      "Elmhurst's tree-lined neighborhoods make professional tree care a regular need for local homeowners. We offer a full range of tree services — from annual maintenance pruning to emergency removal — with careful attention to your property and landscaping during every job.",
    commonJobs: [
      "Annual tree pruning and maintenance",
      "Dead tree and hazard limb removal",
      "Tree removal near homes and garages",
      "Storm damage tree service",
      "Stump grinding to complete removal projects",
    ],
    metaTitle: "Elmhurst Tree Service | Tree Trimming & Removal in Elmhurst IL",
    metaDescription:
      "Professional tree service in Elmhurst, IL. Expert tree trimming, pruning, and removal for DuPage County homeowners. Request your free estimate today.",
  },
  {
    slug: "wheaton-tree-service",
    city: "Wheaton",
    name: "Wheaton",
    county: "DuPage",
    state: "IL",
    serviceType: "tree-service",
    serviceLabel: "Tree Service",
    nearbySuburbs: ["glen-ellyn-tree-service", "elmhurst-tree-service", "oak-brook-tree-service", "hinsdale-tree-service"],
    intro:
      "Chicago Tree & Stump Specialists offers professional tree service in Wheaton, IL. From trimming to full removal, we provide expert tree care throughout DuPage County.",
    bodyParagraph:
      "Wheaton homeowners have some of the most beautiful residential landscapes in DuPage County, including magnificent old oaks and maples. Our tree service team works to keep those trees healthy while ensuring they remain safe. We also handle removals, storm cleanup, and stump grinding when needed.",
    commonJobs: [
      "Oak and maple tree trimming",
      "Crown cleaning and deadwood removal",
      "Tree removal for home additions",
      "Storm damage and emergency tree service",
      "Stump removal after tree work",
    ],
    metaTitle: "Wheaton Tree Service | Tree Trimming & Removal in Wheaton IL",
    metaDescription:
      "Expert tree service in Wheaton, IL. Professional tree trimming, removal, and storm cleanup for DuPage County homeowners. Free quotes. Call today.",
  },
  {
    slug: "lemont-tree-service",
    city: "Lemont",
    name: "Lemont",
    county: "Cook, DuPage & Will",
    state: "IL",
    serviceType: "tree-service",
    serviceLabel: "Tree Service",
    nearbySuburbs: ["homer-glen-tree-service", "burr-ridge-tree-service", "western-springs-tree-service", "hinsdale-tree-service"],
    intro:
      "Chicago Tree & Stump Specialists provides expert tree service in Lemont, IL. We offer full tree care, removal, and stump grinding for Lemont homeowners and properties.",
    bodyParagraph:
      "Lemont is a scenic southwest suburb with large residential lots and significant tree cover. Our team serves all Lemont neighborhoods with professional tree trimming, health assessments, and removal services. We're experienced with the variety of hardwood species common to the Lemont area.",
    commonJobs: [
      "Large property tree trimming",
      "Hardwood tree care and pruning",
      "Tree removal near outbuildings and fences",
      "Storm damage tree service",
      "Stump grinding to complete removal",
    ],
    metaTitle: "Lemont Tree Service | Tree Trimming & Removal in Lemont IL",
    metaDescription:
      "Professional tree service in Lemont, IL. Expert tree trimming, pruning, and removal for Cook, DuPage, and Will County homeowners. Free estimates.",
  },
  {
    slug: "homer-glen-tree-service",
    city: "Homer Glen",
    name: "Homer Glen",
    county: "Will",
    state: "IL",
    serviceType: "tree-service",
    serviceLabel: "Tree Service",
    nearbySuburbs: ["lemont-tree-service", "burr-ridge-tree-service", "western-springs-tree-service", "wheaton-tree-service"],
    intro:
      "Chicago Tree & Stump Specialists serves Homer Glen, IL with professional tree service. Expert tree care, trimming, removal, and stump grinding for Will County homeowners.",
    bodyParagraph:
      "Homer Glen's spacious residential properties often feature impressive mature trees including oaks, hickories, and maples. Our team provides expert care for these trees and handles removal when necessary. We're equipped for large property work and experienced with the tree species common to Will County.",
    commonJobs: [
      "Large lot tree trimming and care",
      "Tree removal on wooded properties",
      "Hazard tree assessment",
      "Storm cleanup and emergency tree service",
      "Full stump grinding services after removal",
    ],
    metaTitle: "Homer Glen Tree Service | Tree Trimming & Removal in Homer Glen IL",
    metaDescription:
      "Expert tree service in Homer Glen, IL. Professional tree trimming, removal, and stump grinding for Will County homeowners. Free quotes. Call today.",
  },
];

export function getSuburbBySlug(slug: string): SuburbData | undefined {
  return SUBURBS.find((s) => s.slug === slug);
}

export function getSuburbsByService(serviceType: SuburbPageType): SuburbData[] {
  return SUBURBS.filter((s) => s.serviceType === serviceType);
}

export function getNearbySuburbs(currentSlug: string, count: number): SuburbData[] {
  return SUBURBS.filter((s) => s.slug !== currentSlug).slice(0, count);
}
