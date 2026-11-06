export type IntakeField = {
  id: string;
  label: string;
  type?: "textarea" | "email" | "tel" | "url" | "number" | "date" | "time" | "select" | "checklist";
  options?: string[];
  hint?: string;
  required?: boolean;
  maxLength?: number;
};
export const platforms = ["Google", "Yelp", "BBB", "Angi", "HomeAdvisor", "Thumbtack", "Houzz", "Porch", "Bing", "Apple Maps", "Facebook"];
export const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const yesNo = ["Yes", "No", "Not sure"];
export const permissionFields = [
  { id: "permissionListings", label: "I authorize Hometown to create and maintain directory listings on my business’s behalf." },
  { id: "permissionVerification", label: "I authorize use of my phone for directory verification codes. I will share codes when needed." },
  { id: "permissionReviews", label: "I authorize Hometown to reply to reviews on my business’s behalf." },
  { id: "permissionPhotos", label: "I authorize use of the photos and media I provide for my business listings and confirm I have permission to share them." },
  { id: "permissionManager", label: "I authorize adding Hometown as a manager of my directory accounts." }
];
export const sections: { title: string; intro: string; fields: IntakeField[] }[] = [
  { title: "Business basics", intro: "Let’s get your business name right everywhere it appears.", fields: [
    { id: "listingName", label: "Business listing name" }, { id: "legalName", label: "Legal / LLC name" }, { id: "dbas", label: "Any DBAs or other business names" },
    { id: "yearFounded", label: "Year founded", type: "number" }, { id: "ein", label: "EIN (optional)", hint: "Leave this blank if you prefer to share it directly later." },
    { id: "entityType", label: "Entity type", type: "select", options: ["LLC", "Sole proprietor", "Corporation", "Partnership", "Other"] }, { id: "employees", label: "Number of employees", type: "number" }
  ] },
  { title: "Contact details", intro: "Consistent contact details help customers and directories find the right business.", fields: [
    { id: "mainPhone", label: "Main business phone", type: "tel", required: true }, { id: "phoneTexts", label: "Is the main number a cell that can receive texts?", type: "select", options: yesNo },
    { id: "secondaryPhone", label: "Secondary or tracking phone", type: "tel" }, { id: "publicEmail", label: "Public business email", type: "email" },
    { id: "website", label: "Website", type: "url" }, { id: "directoryContact", label: "Best contact for directory calls", hint: "Name, phone, and email." }
  ] },
  { title: "Address & service area", intro: "Your home address will never be shown publicly. We use private addresses only for verification and keep home-based listings set to a service area.", fields: [
    { id: "mailingAddress", label: "Private mailing address for verification postcards", type: "textarea", hint: "Include street, city, state, and ZIP. Please confirm whether the address we have is complete and correct." },
    { id: "officeAddress", label: "Office or PO box (if any)", type: "textarea", hint: "PO boxes cannot be used as a Google storefront address." },
    { id: "googleAddressIsHome", label: "Is the address associated with Google your home?", type: "select", options: yesNo },
    { id: "serviceCities", label: "Cities served", type: "textarea" }, { id: "serviceZips", label: "ZIP codes served", type: "textarea" }, { id: "travelRadius", label: "Maximum travel radius (miles)", type: "number" }
  ] },
  { title: "Business hours", intro: "Confirm the hours customers should see. Mark closed days below.", fields: [
    ...days.flatMap(day => [
      { id: `${day}Status`, label: `${day} availability`, type: "select" as const, options: ["Open", "Closed", "By appointment"] },
      { id: `${day}Open`, label: `${day} opens`, type: "time" as const }, { id: `${day}Close`, label: `${day} closes`, type: "time" as const }
    ]),
    { id: "holidayClosures", label: "Holiday closures", type: "textarea" }, { id: "emergencyWeekend", label: "Emergency or weekend work", type: "textarea" }
  ] },
  { title: "About the owner", intro: "Verification and recovery details stay private unless you give permission to publish your name.", fields: [
    { id: "ownerName", label: "Owner’s full name", required: true }, { id: "ownerEmail", label: "Owner’s email", type: "email", required: true },
    { id: "ownerTitle", label: "Title / role" }, { id: "ownerCell", label: "Cell for verification codes", type: "tel" }, { id: "bestTimes", label: "Best times to reach you" },
    { id: "ownerPublic", label: "May we list your name publicly?", type: "select", options: ["Yes", "No"] }, { id: "recoveryEmail", label: "Personal email for account recovery (private)", type: "email" }
  ] },
  { title: "Categories & services", intro: "Choose the services and customers that fit your business today.", fields: [
    { id: "primaryCategory", label: "Primary category" },
    ...[1,2,3,4].map(n => ({ id: `secondaryCategory${n}`, label: `Secondary category ${n} (optional)` })),
    { id: "services", label: "Services offered", type: "checklist", options: ["Interior painting", "Exterior painting", "Cabinet painting and refinishing", "Deck and fence staining", "Wood rot repair", "Other"] },
    { id: "otherServices", label: "Other services", type: "textarea" }, { id: "customers", label: "Customers served", type: "checklist", options: ["Residential", "Commercial"] },
    { id: "freeEstimates", label: "Free estimates?", type: "select", options: yesNo }, { id: "jobSize", label: "Typical job size or price range" },
    { id: "payments", label: "Payment methods", type: "checklist", options: ["Cash", "Check", "Credit / debit card", "ACH / bank transfer", "Digital wallets", "Other"] },
    { id: "otherPayments", label: "Other payment methods" }, { id: "financing", label: "Financing options" }
  ] },
  { title: "Credentials & trust", intro: "Share what customers should know about your qualifications.", fields: [
    { id: "licenses", label: "License numbers and issuing cities", type: "textarea" }, { id: "insurance", label: "Insurance carrier" }, { id: "bonded", label: "Bonded?", type: "select", options: yesNo },
    { id: "warranty", label: "Warranty terms", type: "textarea" }, { id: "brands", label: "Brands used" }, { id: "memberships", label: "Memberships" },
    { id: "certifications", label: "Ownership, certifications, and designations", type: "textarea", hint: "For example: woman-, veteran-, or minority-owned, WBENC. Distinguish ownership from formal certifications." }, { id: "awards", label: "Awards" }
  ] },
  { title: "Your business story", intro: "Use your own words, or give us notes to turn into listing copy.", fields: [
    { id: "shortDescription", label: "Short description (about 160 characters)", type: "textarea", maxLength: 200 },
    { id: "longDescription", label: "Long description (aim for 500–750 characters)", type: "textarea", maxLength: 750 },
    { id: "difference", label: "What makes your business different?", type: "textarea" }, { id: "languages", label: "Languages spoken" }
  ] },
  { title: "Photos & media", intro: "A shared folder works great. Include a square logo (500px or larger), a cover photo, 10–20 job photos with before and afters, an owner or team photo, and any videos.", fields: [
    { id: "mediaLink", label: "Link to shared photos / videos", type: "url", hint: "Check that Hometown can open the link." }, { id: "mediaNotes", label: "Media notes and photo captions", type: "textarea" }
  ] },
  { title: "Social & existing accounts", intro: "No passwords, please. We’ll use manager invitations to access existing accounts.", fields: [
    ...["Facebook", "Instagram", "Nextdoor", "YouTube", "LinkedIn", "TikTok"].map(name => ({ id: `social${name}`, label: `${name} URL`, type: "url" as const })),
    ...platforms.flatMap(name => [
      { id: `account${name}Exists`, label: `${name}: does an account exist?`, type: "select" as const, options: yesNo },
      { id: `account${name}Email`, label: `${name}: account email`, type: "email" as const },
      { id: `account${name}Manager`, label: `${name}: will you add Hometown as manager?`, type: "select" as const, options: ["Yes", "No", "Need help", "Not applicable"] }
    ])
  ] },
  { title: "Reviews & testimonials", intro: "Help us highlight the work your customers already love.", fields: [
    { id: "reviewLink", label: "Best review link", type: "url" }, { id: "reviewReplies", label: "May we reply to reviews for you?", type: "select", options: ["Yes", "No"] },
    ...[1,2,3].map(n => ({ id: `testimonial${n}`, label: `Testimonial ${n} we may use`, type: "textarea" as const, hint: "Include the quote and the customer’s preferred public name. Aim for 2–3 testimonials." }))
  ] },
  { title: "Permissions & signature", intro: "Review these permissions before sending your intake. All five permissions and your signature are required. If you prefer to withhold a permission, contact Kyle before submitting.", fields: [
    { id: "signature", label: "Typed signature (full name)", required: true }, { id: "signatureDate", label: "Date", type: "date", required: true }
  ] }
];
export type ClientConfig = { name: string; greeting: string; appearance?: "dark"; serviceOptions?: string[]; prefill: Record<string, string | string[]>; needsConfirmation: string[] };
export const intakeClients: Record<string, ClientConfig> = {
  "noble-hardwoods": {
    name: "Noble Hardwoods", greeting: "Clayton", appearance: "dark",
    needsConfirmation: ["mainPhone", "legalName", "dbas", "ownerName", "employees", "primaryCategory"],
    serviceOptions: ["Hardwood floor installation", "Sanding and refinishing", "Hardwood floor repairs", "Dustless sanding", "Stairs and railings", "Custom hardwood floors", "Floor maintenance", "Other"],
    prefill: {
      listingName: "Noble Hardwoods", legalName: "Zera Services, LLC", dbas: "Noble Hardwoods",
      mainPhone: "(816) 312-9131", publicEmail: "info@noblehardwoods.co", website: "https://www.noblehardwoods.co/",
      ownerName: "Clayton Rookstool", ownerTitle: "Owner-Operator", employees: "16",
      primaryCategory: "Wood floor installation service",
      services: ["Hardwood floor installation", "Sanding and refinishing", "Hardwood floor repairs", "Dustless sanding", "Stairs and railings", "Custom hardwood floors"],
      customers: ["Residential"], freeEstimates: "Yes",
      serviceCities: "Kansas City, Overland Park, Leawood, Lenexa, Prairie Village, Mission Hills, Fairway, Westwood, Shawnee, Olathe, Lawrence; Brookside, Waldo, and Briarcliff neighborhoods",
      shortDescription: "Noble Hardwoods installs, refinishes, repairs, and restores hardwood floors for homeowners across the Kansas City metro.",
      longDescription: "Noble Hardwoods provides hardwood floor installation, sanding and refinishing, repairs, dustless sanding, stairs and railings, and custom hardwood floors for homeowners across the Kansas City metro. The team works with solid and engineered hardwood, blends new boards with existing floors, and restores worn or damaged wood. From the first estimate to the final walkthrough, Noble focuses on craftsmanship, clear communication, careful preparation, and respect for the home. Free estimates help homeowners plan the right approach for their floors.",
      socialInstagram: "https://www.instagram.com/noblehardwoodskcmo/", reviewLink: "https://g.page/r/CVDjg6Cs_lh_EAE/review",
      accountGoogleExists: "Yes", accountBBBExists: "Yes",
      ...Object.fromEntries(days.slice(0, 5).flatMap(day => [[`${day}Status`, "Open"], [`${day}Open`, "07:00"], [`${day}Close`, "17:00"]]))
    }
  },
  "acs-painting-kc": {
    name: "ACS Painting KC", greeting: "Ashlie", needsConfirmation: ["legalName", "dbas", "mainPhone", "mailingAddress"],
    prefill: {
      listingName: "ACS Painting KC", legalName: "ACS Painting LLC?", dbas: "Willow Place?", mainPhone: "(816) 459-0239", website: "https://acspaintingkc.com/", publicEmail: "services@acspaintingkc.com",
      mailingAddress: "7416 N Main St Suite B", serviceCities: "Kansas City, North Kansas City, Gladstone, Liberty, Parkville, Riverside",
      primaryCategory: "Painting Contractor", certifications: "Woman-owned", services: ["Interior painting", "Exterior painting", "Cabinet painting and refinishing", "Deck and fence staining", "Wood rot repair"],
      longDescription: "ACS Painting KC is a woman-owned painting company serving Kansas City, North Kansas City and the Northland. We offer interior and exterior painting, cabinet painting and refinishing, deck and fence staining, and wood rot repair. Contact us for a free estimate.",
      ...Object.fromEntries(days.flatMap((day, i) => [[`${day}Status`, i < 5 ? "Open" : "Closed"], ...(i < 5 ? [[`${day}Open`, "08:00"], [`${day}Close`, "18:00"]] : [])]))
    }
  }
};
export function getIntakeClient(slug: string) {
  return Object.hasOwn(intakeClients, slug) ? intakeClients[slug] : undefined;
}
export type Answers = Record<string, string | string[] | boolean>;
export function initialAnswers(client: ClientConfig): Answers {
  return { ...Object.fromEntries(sections.flatMap(section => section.fields.map(field => [field.id, field.type === "checklist" ? [] : ""]))), ...Object.fromEntries(permissionFields.map(field => [field.id, false])), ...Object.fromEntries(Object.entries(client.prefill).flatMap(([key, value]) => [[key, client.needsConfirmation.includes(key) ? "" : value], [`${key}__confirmed`, !client.needsConfirmation.includes(key)]])) };
}

export function getIntakeSections(client: ClientConfig) {
  return sections.map(section => ({
    ...section,
    fields: section.fields.map(field => {
      if (field.id === "services" && client.serviceOptions) return { ...field, options: client.serviceOptions };
      if (client.appearance !== "dark") return field;
      if (field.id === "legalName") return { ...field, hint: "Confirm which LLC owns Noble Hardwoods." };
      if (field.id === "dbas") return { ...field, hint: "Confirm any registered trade names." };
      if (field.id === "employees") return { ...field, hint: "Confirm your current team size." };
      if (field.id === "primaryCategory") return { ...field, hint: "Suggested category. Confirm the best match for your business." };
      return field;
    })
  }));
}
