export interface ArticlePhotoItem {
  src: string;
  alt: string;
  caption: string;
  photographer: string;
  photographerHref: string;
  sourceHref: string;
  licenseHref: string;
  verifiedAt: string;
  afterSection?: string;
  useOnCard: boolean;
}

// Photo pages, named photographers, and the free Pexels license verified October 16, 2026.
// Stock imagery is editorial context, never client, team, or performance proof.
const licenseHref = "https://www.pexels.com/license/";
const verifiedAt = "2026-10-16";
export const articlePhotography: Record<string, ArticlePhotoItem> = {
  "small-business-website-quote-kansas-city": {
    src: "/images/blog/pexels/5424636.webp",
    alt: "Person reviewing printed design documents beside an open laptop",
    caption: "A useful website quote makes the content, design work, and approval responsibilities visible before the project starts.",
    photographer: "Amina Filkins",
    photographerHref: "https://www.pexels.com/@amina-filkins/",
    sourceHref: "https://www.pexels.com/photo/crop-man-with-documents-and-laptop-at-table-5424636/",
    afterSection: "pages-and-content", useOnCard: true, licenseHref, verifiedAt
  },
  "website-redesign-checklist-kansas-city": {
    src: "/images/blog/pexels/196645.webp",
    alt: "Hand-drawn page wireframes and layout notes on paper beside a keyboard",
    caption: "Map the page structure and customer journey before choosing the final visual design.",
    photographer: "picjumbo.com",
    photographerHref: "https://www.pexels.com/@picjumbo-com-55570/",
    sourceHref: "https://www.pexels.com/photo/white-printer-paper-196645/",
    afterSection: "message-and-structure", useOnCard: true, licenseHref, verifiedAt
  },
  "website-builder-vs-custom-website-for-small-businesses": {
    src: "/images/blog/pexels/285814.webp",
    alt: "Laptop and desktop monitors displaying website design layouts",
    caption: "The right build approach depends on the editing workflow, page structure, and customer actions the site must support.",
    photographer: "Tranmautritam",
    photographerHref: "https://www.pexels.com/@tranmautritam/",
    sourceHref: "https://www.pexels.com/photo/macbook-pro-displaying-website-version-2-on-table-285814/",
    useOnCard: true, licenseHref, verifiedAt
  },
  "small-business-website-checklist-kansas-city": {
    src: "/images/blog/pexels/948050.webp",
    alt: "Website design workspace with a desktop monitor, laptop, keyboard, and notebook",
    caption: "Review the same customer path on different screen sizes before calling a website ready to launch.",
    photographer: "Tranmautritam",
    photographerHref: "https://www.pexels.com/@tranmautritam/",
    sourceHref: "https://www.pexels.com/photo/apple-imac-on-brown-wooden-desk-948050/",
    afterSection: "mobile-and-accessibility", useOnCard: true, licenseHref, verifiedAt
  },
  "google-ads-ai-ask-advisor-kansas-city": {
    src: "/images/blog/pexels/5466250.webp",
    alt: "Laptop displaying bar and line charts during a data review",
    caption: "Check the business signals behind any AI recommendation. This illustrative dashboard is stock imagery, not a Hometown campaign result or Google Ads screenshot.",
    photographer: "Antoni Shkraba",
    photographerHref: "https://www.pexels.com/@shkrabaanthony/",
    sourceHref: "https://www.pexels.com/photo/statistics-displayed-on-a-monitor-5466250/",
    afterSection: "what-google-announced", useOnCard: true, licenseHref, verifiedAt
  },
  "google-ads-kansas-city-small-business-budget-guide": {
    src: "/images/blog/pexels/7413936.webp",
    alt: "Printed charts and a clipboard arranged on a wooden table",
    caption: "A campaign budget needs a measurement plan. These illustrative reports are not actual client or advertising results.",
    photographer: "RDNE Stock project",
    photographerHref: "https://www.pexels.com/@rdne/",
    sourceHref: "https://www.pexels.com/photo/business-analytics-printout-on-wooden-table-7413936/",
    afterSection: "economics", useOnCard: true, licenseHref, verifiedAt
  },
  "seo-vs-google-ads-kansas-city-small-businesses": {
    src: "/images/blog/pexels/7693745.webp",
    alt: "Two people comparing printed charts with information on a laptop",
    caption: "Compare channels against the same business goal, time horizon, and capacity to handle qualified inquiries.",
    photographer: "Yan Krukau",
    photographerHref: "https://www.pexels.com/@yankrukov/",
    sourceHref: "https://www.pexels.com/photo/colleagues-looking-at-graphs-7693745/",
    afterSection: "decision-framework", useOnCard: true, licenseHref, verifiedAt
  },
  "local-seo-checklist-kansas-city-small-businesses": {
    src: "/images/blog/pexels/8970645.webp",
    alt: "Business planning clipboard and stationery next to an open laptop",
    caption: "Keep a record of the services, locations, and customer actions your local SEO work is intended to support.",
    photographer: "Leeloo The First",
    photographerHref: "https://www.pexels.com/@leeloothefirst/",
    sourceHref: "https://www.pexels.com/photo/business-plan-by-laptop-8970645/",
    afterSection: "baseline", useOnCard: true, licenseHref, verifiedAt
  },
  "ministry-website-design-project-salvation": {
    src: "/images/blog/pexels/7818115.webp",
    alt: "Open notebook with handwritten planning notes beside a laptop",
    caption: "Event and ministry sites need a clear content plan for dates, registration, and next steps. This stock planning scene is separate from the real Project Salvation website shown above.",
    photographer: "Leeloo The First",
    photographerHref: "https://www.pexels.com/@leeloothefirst/",
    sourceHref: "https://www.pexels.com/photo/close-up-shot-of-an-open-notebook-with-notes-7818115/",
    useOnCard: false, licenseHref, verifiedAt
  },
  "what-should-a-contractor-website-include": {
    src: "/images/blog/pexels/6790048.webp",
    alt: "Close-up of hands drilling into a wooden workpiece in a workshop",
    caption: "A process detail can support an explanation, but your own job photography should provide the project proof on a contractor website.",
    photographer: "Tima Miroshnichenko",
    photographerHref: "https://www.pexels.com/@tima-miroshnichenko/",
    sourceHref: "https://www.pexels.com/photo/a-person-doing-carpentry-6790048/",
    useOnCard: true, licenseHref, verifiedAt
  },
  "deck-contractor-website-design-kansas-city": {
    src: "/images/blog/pexels/7480737.webp",
    alt: "Carpenter reviewing a paper plan at a workshop wall",
    caption: "Planning imagery can illustrate the process. The DecksRXKC website screenshot above is the actual project; this stock photograph does not show the client or its work.",
    photographer: "cottonbro studio",
    photographerHref: "https://www.pexels.com/@cottonbro/",
    sourceHref: "https://www.pexels.com/photo/man-holding-table-project-in-carpentry-7480737/",
    useOnCard: false, licenseHref, verifiedAt
  }
};

export function getBlogCardPhoto(slug: string) {
  const photo = articlePhotography[slug];
  return photo?.useOnCard ? photo : undefined;
}
