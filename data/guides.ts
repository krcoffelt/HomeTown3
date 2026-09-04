export interface GuidePageItem {
  title: string;
  seoTitle: string;
  description: string;
  path: string;
  category: string;
  heroTitle: string;
  heroIntro: string;
  shortAnswerTitle: string;
  shortAnswer: string;
  publishedAt: string;
  updatedAt: string;
  displayDate: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  keyTakeaways: string[];
  sections: Array<{
    id: string;
    eyebrow: string;
    title: string;
    paragraphs: string[];
    items?: string[];
    callout?: { title: string; body: string };
  }>;
  faqItems: Array<{ question: string; answer: string }>;
  relatedLinks: Array<{ label: string; href: string }>;
  sourceLinks?: Array<{ label: string; href: string; note: string }>;
  ctaTitle: string;
  ctaAccent: string;
  ctaBody: string;
  ctaLinks: Array<{ label: string; href: string }>;
}

export const localSeoChecklistGuide: GuidePageItem = {
  title: "Local SEO Checklist for Kansas City Businesses",
  seoTitle: "Local SEO Checklist for Kansas City Businesses",
  description: "Use this practical Kansas City local SEO checklist to improve your website, Google Business Profile, reviews, service-area signals, and lead tracking.",
  path: "/local-seo-checklist-kansas-city-small-businesses",
  category: "Local SEO",
  heroTitle: "Local SEO checklist for Kansas City businesses",
  heroIntro: "A practical, prioritized guide to improving how your business appears in Google Search and Maps—without creating thin city pages or chasing empty rankings.",
  shortAnswerTitle: "Local SEO works when Google and customers can verify the same clear story.",
  shortAnswer: "Start with an accurate Google Business Profile, a website that clearly explains services and service areas, consistent business information, credible reviews and links, and tracking for calls and forms. In a metro as spread out as Kansas City, relevance and proof are controllable; distance is not.",
  publishedAt: "2026-08-28",
  updatedAt: "2026-08-28",
  displayDate: "August 28, 2026",
  readingTime: "11 min read",
  image: "/images/brand-art/search-discovery.png",
  imageAlt: "Illustration of a Kansas City business being discovered through local search",
  keyTakeaways: [
    "Complete and verify the real business profile before chasing advanced tactics.",
    "Give each important service one clear page and one search intent.",
    "Use service-area language where it helps customers, not as repetitive filler.",
    "Measure qualified calls and forms alongside rankings and traffic."
  ],
  sections: [
    {
      id: "baseline",
      eyebrow: "Start With Evidence",
      title: "Record the local-search baseline before changing anything.",
      paragraphs: [
        "A checklist is only useful when you can tell whether the work helped. Record the search queries, pages, map visibility, calls, form submissions, and qualified leads you already receive. Google Search Console can show which queries expose the website, while Google Business Profile performance can show profile actions. Analytics and call or form tracking connect that visibility to customer behavior.",
        "Choose a small group of commercial priorities rather than tracking every phrase that contains a city. A Kansas City contractor might start with its highest-value service, a broad company category, and two or three cities where it has real customers and proof. That produces a readable baseline and reduces the temptation to create a separate low-value page for every suburb."
      ],
      items: [
        "Export 12 months of Search Console queries and landing pages",
        "Record current Google Business Profile actions and completeness",
        "Test phone, form, booking, and email conversion tracking",
        "Map each priority keyword to one current page"
      ]
    },
    {
      id: "business-profile",
      eyebrow: "Google Business Profile",
      title: "Make the profile complete, accurate, and easy to trust.",
      paragraphs: [
        "Google describes local results through relevance, distance, and prominence. Complete business information helps relevance. The searcher's location influences distance. Reviews, links, and broader recognition can contribute to prominence. No legitimate optimization can guarantee a map position, and a service-area business cannot create proximity simply by listing more cities.",
        "Use the real business name, the most accurate primary category, useful secondary categories, current hours, the correct phone and website, and services customers can actually buy. Add recent, approved photos of the team, work, location, or finished projects. Review the profile after holidays, service changes, moves, and website launches so old details do not undermine trust."
      ],
      items: [
        "Verify ownership and remove duplicate or unauthorized profiles",
        "Match name, phone, URL, hours, and service details to the website",
        "Select categories for the actual business—not a list of desired keywords",
        "Reply to reviews helpfully without incentives or review gating"
      ],
      callout: {
        title: "Service areas describe operations; they do not create a storefront.",
        body: "An Overland Park address may naturally compete differently from a business based in Blue Springs. List the places you genuinely serve, then use the website to explain services, project experience, and customer fit across the metro."
      }
    },
    {
      id: "website-structure",
      eyebrow: "Website Relevance",
      title: "Build clear service pages before adding more location pages.",
      paragraphs: [
        "The website should make three facts obvious: what the company does, who it helps, and where it works. Give high-value services enough room to explain the problem, approach, proof, common questions, and next step. One overloaded page that lists every service and every suburb gives both customers and search engines less clarity.",
        "Location pages can be useful when a city has distinct demand, real customer experience, unique proof, and enough detail to help a resident choose. They become thin when the only change is the city name. A strong Kansas City metro site usually needs a focused service architecture first, followed by a limited set of useful location pages supported by internal links and real examples."
      ],
      items: [
        "Use one descriptive H1 and a readable page title",
        "Explain the service with original copy and visible proof",
        "Connect services, locations, case studies, and contact paths",
        "Keep titles, canonicals, schema, and sitemaps aligned"
      ]
    },
    {
      id: "reputation",
      eyebrow: "Prominence and Trust",
      title: "Earn consistent reviews, citations, and local mentions.",
      paragraphs: [
        "Reviews help prospective customers compare responsiveness, quality, and fit. Ask for honest feedback after a successful engagement, make the request simple, and respond professionally. Do not pay for reviews, filter unhappy customers away from public platforms, or ask people to insert exact keywords. Natural reviews that mention the work and location can be more credible because the customer chose those details.",
        "Citations and links matter most when they come from sources connected to the business: professional associations, chambers, suppliers, clients, local publications, and legitimate industry directories. Keep the business name, phone, website, and location details consistent. A smaller set of accurate profiles is more useful than dozens of low-quality listings nobody visits."
      ],
      items: [
        "Create a repeatable post-project review request",
        "Correct major directory and social-profile inconsistencies",
        "Ask clients and partners for accurate project credits where appropriate",
        "Pursue local coverage only when there is a real story or resource"
      ]
    },
    {
      id: "technical-seo",
      eyebrow: "Technical Foundation",
      title: "Remove crawl, mobile, speed, and conversion friction.",
      paragraphs: [
        "A locally relevant page still has to be accessible. Important pages should return a successful status, use a self-referencing canonical, appear in the correct sitemap, and remain reachable through crawlable internal links. Structured data should describe visible, accurate business information; it cannot compensate for weak content or an inaccessible page.",
        "Test the site on a real phone and a slower connection. Phone numbers should be tappable, forms should be short enough to finish, and buttons should not hide behind menus or overlays. Compress large images, reserve image dimensions to reduce layout movement, and confirm that consent tools or third-party scripts do not block the primary contact path."
      ],
      items: [
        "Check indexing, canonicals, redirects, and XML sitemaps",
        "Validate LocalBusiness, Service, Breadcrumb, and FAQ schema where appropriate",
        "Test Core Web Vitals and mobile contact paths",
        "Fix broken internal links and misleading soft redirects"
      ]
    },
    {
      id: "thirty-day-plan",
      eyebrow: "Execution Plan",
      title: "Turn the checklist into a focused 30-day local SEO sprint.",
      paragraphs: [
        "In week one, establish measurement and repair the Google Business Profile. In week two, improve the most important service page and its contact path. In week three, strengthen reviews, citations, project proof, and internal links. In week four, verify indexing and compare the new data with the baseline. This sequence fixes the foundation before adding content.",
        "After 30 days, choose the next action from evidence. Improve a page that earns impressions but few clicks. Expand proof where visitors reach the page but do not contact the business. Build a new page only when a distinct customer intent, enough supporting detail, and a clear internal-link path all exist. Local SEO should become a measured operating habit, not a one-time burst of city names."
      ],
      callout: {
        title: "One metro, different proof.",
        body: "A Leawood restaurant, Lenexa professional service, and Lee's Summit contractor may all serve the Kansas City area, but the proof, conversion path, and customer questions should differ. Local relevance comes from useful specificity."
      }
    }
  ],
  faqItems: [
    { question: "How long does local SEO take in Kansas City?", answer: "There is no fixed timeline. Technical fixes and profile corrections can be discovered quickly, while competitive ranking improvements often require sustained work across relevance, reputation, links, and customer experience. Track 28- and 90-day movement instead of expecting an overnight map position." },
    { question: "Do I need a page for every Kansas City suburb?", answer: "Usually not. Create a location page only when it serves a distinct customer intent and contains useful local detail, proof, and links. Thin pages that only swap city names can dilute the site and create keyword overlap." },
    { question: "Can a service-area business rank without publishing its home address?", answer: "Yes. Configure the Google Business Profile according to Google's rules for service-area businesses and build website relevance with clear services, legitimate service areas, proof, reviews, and accurate business information." },
    { question: "What should I measure besides rankings?", answer: "Measure organic and profile-driven calls, form submissions, bookings, qualified leads, landing-page engagement, and lead quality. Rankings are useful diagnostics, but the business outcome is a real customer action." }
  ],
  relatedLinks: [
    { label: "Kansas City SEO services", href: "/services/search-engine-optimization" },
    { label: "Kansas City service areas", href: "/locations" },
    { label: "Home-service website strategy", href: "/industries/home-services-website-design-kansas-city" },
    { label: "Website design that converts", href: "/services/website-design" }
  ],
  ctaTitle: "Want a prioritized local SEO plan instead of another generic checklist?",
  ctaAccent: "prioritized local SEO plan",
  ctaBody: "Hometown's free marketing audit reviews your website, local visibility, tracking, and lead path so you know which fix should come first.",
  ctaLinks: [{ label: "Explore SEO Services", href: "/services/search-engine-optimization" }]
};

export const websiteRedesignChecklistGuide: GuidePageItem = {
  title: "Website Redesign Checklist for Kansas City",
  seoTitle: "Website Redesign Checklist for Kansas City",
  description: "Plan a Kansas City small-business website redesign without losing rankings, leads, content, tracking, or the customer paths that already work.",
  path: "/website-redesign-checklist-kansas-city",
  category: "Website Redesign",
  heroTitle: "Website redesign checklist for Kansas City small businesses",
  heroIntro: "Use this before redesign work begins to preserve what already earns trust, fix the parts that block leads, and relaunch without avoidable SEO or tracking problems.",
  shortAnswerTitle: "A redesign should improve business performance—not simply replace the colors.",
  shortAnswer: "Audit the current site, preserve valuable pages and data, define the new conversion path, map every changed URL, test the build on real devices, and verify analytics after launch. The safest redesign changes the things holding the business back while protecting the signals already working.",
  publishedAt: "2026-08-28",
  updatedAt: "2026-08-28",
  displayDate: "August 28, 2026",
  readingTime: "12 min read",
  image: "/images/brand-art/digital-design-workshop.png",
  imageAlt: "Illustrated workshop for planning a small-business website redesign",
  keyTakeaways: [
    "Define measurable goals before discussing style or platform.",
    "Inventory current URLs, traffic, rankings, links, and conversions.",
    "Map changed URLs one-to-one with permanent redirects.",
    "Verify forms, calls, analytics, indexing, and sitemaps after launch."
  ],
  sections: [
    {
      id: "redesign-or-refresh",
      eyebrow: "Make the Right Call",
      title: "Decide whether the site needs a redesign, rebuild, or focused refresh.",
      paragraphs: [
        "A site can feel old without being fundamentally broken. If the structure, platform, and conversion path still work, better copy, new proof, faster images, and cleaner calls to action may create more value than a full rebuild. A redesign becomes more reasonable when the business has changed, the site is hard to maintain, mobile use is poor, service pages are missing, or tracking cannot reliably show what visitors do.",
        "Write down the business problem before choosing the solution. Useful goals include increasing qualified form submissions, reducing confusion about services, making the site easier to update, improving mobile calls, preserving search visibility during a rebrand, or supporting a new service line. Avoid goals such as 'make it modern' unless you can explain what modern presentation should help a customer understand or do."
      ],
      items: [
        "Refresh when the structure works but copy or visuals are dated",
        "Redesign when layout, messaging, and conversion paths need coordinated change",
        "Rebuild when the platform or code blocks performance and maintenance",
        "Set one primary outcome and several measurable supporting metrics"
      ]
    },
    {
      id: "baseline-audit",
      eyebrow: "Protect What Works",
      title: "Audit the current site before wireframes or mockups begin.",
      paragraphs: [
        "The existing site contains evidence you cannot reconstruct after it disappears. Export analytics and Search Console data, crawl every URL, record backlinks, test forms, and identify pages that already generate impressions, visits, calls, or leads. Save the metadata, headings, copy, files, and screenshots needed for comparison. Even an unattractive page may hold rankings or answer a customer question well.",
        "Classify every page as keep, improve, merge, redirect, or remove. Keep pages that serve a clear purpose. Improve pages with useful intent but weak presentation or conversion. Merge overlapping pages only when the combined destination truly covers both needs. Remove content with no audience or business role, and redirect an old URL only to a genuinely relevant replacement."
      ],
      items: [
        "Export at least 12 months of analytics and Search Console data",
        "Crawl all URLs, status codes, titles, canonicals, and internal links",
        "List backlinks, top landing pages, and conversion paths",
        "Archive current copy, forms, integrations, and screenshots"
      ],
      callout: {
        title: "An Independence business may need trust cleanup more than visual novelty.",
        body: "If referrals reach an outdated site and cannot confirm services, proof, or contact details, the redesign brief should prioritize credibility and a short inquiry path—not trendy motion or a complicated navigation system."
      }
    },
    {
      id: "message-and-structure",
      eyebrow: "Rebuild the Customer Path",
      title: "Plan the message, page structure, and proof around real decisions.",
      paragraphs: [
        "The homepage should quickly identify the business, audience, service area, value, and next step. Service pages need enough detail to help a prospect understand fit. Proof should sit near claims: project examples near services, testimonials near objections, and process details near the point where a visitor decides whether contacting the business feels safe.",
        "Design mobile-first because many local prospects arrive from a search result, map listing, referral text, or social profile on a phone. Keep navigation short, make phone and form paths obvious, and avoid forcing visitors through decorative screens. Accessibility, readable type, contrast, keyboard use, and clear form labels improve the experience for more customers and make the site easier to operate."
      ],
      items: [
        "Write the offer and page outline before polishing visual design",
        "Give important services clear, dedicated destinations",
        "Place real proof beside the claims it supports",
        "Design every important action for a phone-sized screen"
      ]
    },
    {
      id: "seo-migration",
      eyebrow: "Preserve Search Equity",
      title: "Create the URL and SEO migration plan before development finishes.",
      paragraphs: [
        "Keep useful URLs unchanged when possible. When a URL must change, map the old address to the closest new equivalent and implement a permanent server-side redirect. Do not point every retired page to the homepage. Update internal links, canonicals, navigation, XML sitemaps, campaign destinations, and important external profiles so users and crawlers reach the final URL directly.",
        "Carry forward the substance that made a page relevant: the customer question, service detail, proof, headings, and internal relationships. A redirect helps transfer signals, but it does not make a thin replacement equivalent to a useful old page. Review title and description changes against the page's intended query rather than rewriting every field for the sake of novelty."
      ],
      items: [
        "Use a one-to-one old URL → new URL migration sheet",
        "Implement and test permanent redirects without chains",
        "Update canonicals, internal links, sitemaps, and ad destinations",
        "Preserve useful content and backlinks—not only the URL"
      ]
    },
    {
      id: "launch-qa",
      eyebrow: "Launch Carefully",
      title: "Test the production build, not only the design preview.",
      paragraphs: [
        "A polished staging preview can still launch with blocked indexing, broken forms, missing analytics, or incorrect redirects. Test the built site across common phones and browsers. Submit every form, tap every phone and email link, confirm thank-you behavior, and verify that lead-source fields and conversion events still fire. Check the 404 page and make sure removed URLs return the intended status.",
        "Review titles, descriptions, canonical URLs, robots directives, structured data, Open Graph images, sitemap entries, and page status codes. Inspect important pages with Search Console after deployment and submit the relevant sitemap. Keep a rollback plan for material failures, but expect some normal search fluctuation while Google recrawls changed pages."
      ],
      items: [
        "Test navigation, buttons, forms, calls, email, and bookings",
        "Verify responsive layout, keyboard use, contrast, and performance",
        "Confirm analytics, consent, conversion events, and attribution",
        "Check indexing, schema, metadata, canonicals, redirects, and sitemaps"
      ]
    },
    {
      id: "post-launch",
      eyebrow: "Measure the Outcome",
      title: "Watch lead quality and search performance after launch.",
      paragraphs: [
        "Compare the new site with the baseline at seven, 28, and 90 days. Watch organic clicks, important query positions, form completion, phone actions, engagement on key pages, and qualified leads. A visually stronger site can still underperform if it attracts the wrong audience or adds friction to the contact path.",
        "Fix critical issues immediately: failed forms, missing tracking, incorrect noindex rules, redirect loops, broken navigation, or a sharp loss tied to removed content. Treat ordinary ranking movement with more patience and evidence. The goal is not to preserve every number forever; it is to protect useful equity while creating a clearer, faster, more measurable customer experience."
      ],
      callout: {
        title: "Kansas City businesses should compare outcomes, not screenshots.",
        body: "A polished Lee's Summit site or Prairie Village brand presence only succeeds when customers understand the offer and take the intended next step. Track those actions before and after launch."
      }
    }
  ],
  faqItems: [
    { question: "How do I know if my small-business website needs a redesign?", answer: "A redesign is worth considering when the site no longer reflects the business, is hard to use on mobile, cannot support clear service pages, loads slowly, is difficult to maintain, or fails to create measurable inquiries. An audit can distinguish those issues from smaller copy or design fixes." },
    { question: "Will a website redesign hurt SEO?", answer: "It can if useful content disappears, URLs change without relevant redirects, internal links break, or indexing settings are wrong. A documented baseline, URL map, tested redirects, preserved content, and post-launch monitoring reduce avoidable risk." },
    { question: "Should all URLs stay the same during a redesign?", answer: "Keep useful URLs when possible, but do not preserve a confusing structure at any cost. When an address changes, map it to the closest relevant new page, implement a permanent redirect, and update internal links and sitemaps." },
    { question: "What should we measure after the redesign?", answer: "Track calls, form submissions, bookings, qualified leads, organic clicks, priority query movement, landing-page engagement, page speed, and form completion. Compare these with a saved pre-launch baseline." }
  ],
  relatedLinks: [
    { label: "Kansas City website design", href: "/services/website-design" },
    { label: "View website work", href: "/work" },
    { label: "Website builder vs. custom", href: "/website-builder-vs-custom-website-for-small-businesses" },
    { label: "Kansas City service areas", href: "/locations" }
  ],
  ctaTitle: "Not sure whether your website needs a refresh or a full redesign?",
  ctaAccent: "refresh or a full redesign?",
  ctaBody: "Hometown's free marketing audit identifies the messaging, mobile, SEO, tracking, and conversion issues that should shape the scope.",
  ctaLinks: [{ label: "Explore Website Design", href: "/services/website-design" }]
};

export const seoVsGoogleAdsGuide: GuidePageItem = {
  title: "SEO vs. Google Ads for Kansas City Businesses",
  seoTitle: "SEO vs. Google Ads for Kansas City Businesses",
  description: "Compare SEO and Google Ads for a Kansas City small business by speed, budget, competition, lead quality, measurement, and long-term value.",
  path: "/seo-vs-google-ads-kansas-city-small-businesses",
  category: "Marketing Strategy",
  heroTitle: "SEO vs. Google Ads for Kansas City businesses",
  heroIntro: "The right first channel depends on how quickly you need demand, what evidence you already have, how competitive the market is, and whether your website can convert the traffic.",
  shortAnswerTitle: "Google Ads can test demand now. SEO can build durable visibility over time.",
  shortAnswer: "Choose Google Ads when you need controlled access to active searches and can measure lead quality. Choose SEO when customers repeatedly search for the service and the business can invest in a stronger long-term position. Fix the website and tracking first when neither channel has a reliable place to send prospects.",
  publishedAt: "2026-08-28",
  updatedAt: "2026-08-28",
  displayDate: "August 28, 2026",
  readingTime: "10 min read",
  image: "/images/brand-art/three-channels.png",
  imageAlt: "Illustration comparing organic search and paid advertising channels",
  keyTakeaways: [
    "Use the business constraint—not agency preference—to choose the first channel.",
    "Ads buy controlled tests; SEO builds assets and relevance that can compound.",
    "Both fail when the offer, landing page, or conversion tracking is weak.",
    "Qualified leads and revenue feedback matter more than clicks or rank alone."
  ],
  sections: [
    {
      id: "core-difference",
      eyebrow: "Two Different Jobs",
      title: "SEO earns visibility while Google Ads purchases auction access.",
      paragraphs: [
        "SEO improves how clearly and credibly a site answers the searches that matter. The work can include technical fixes, service and location structure, useful content, internal links, local profiles, reviews, and authority. Results depend on competition, site history, proximity for local results, content quality, and ongoing execution. Visibility can continue after a specific task ends, but rankings are never permanent or guaranteed.",
        "Google Ads enters an auction when an eligible search occurs. The advertiser controls targeting, keywords, locations, budget, ads, and landing pages within the platform's rules and available inventory. Ads can generate data sooner because the business does not have to earn an organic position first, but traffic stops when campaigns pause and poor targeting can spend money without producing qualified customers."
      ],
      items: [
        "SEO: relevance, technical health, proof, authority, and useful content",
        "Google Ads: auction targeting, bids, budget, ads, and landing pages",
        "SEO visibility can compound but requires patience and maintenance",
        "Ads provide control and speed but charge for traffic"
      ]
    },
    {
      id: "choose-seo",
      eyebrow: "When SEO Fits",
      title: "Choose SEO when repeat search demand and long-term visibility matter.",
      paragraphs: [
        "SEO is a strong fit when customers consistently search for the service, the business plans to serve the market for years, and the website can support detailed service and proof pages. It is especially useful when paid clicks are expensive, buyers research before contacting anyone, or a company wants to reduce long-term dependence on a single paid channel.",
        "The tradeoff is time and uncertainty. A new page may take time to be discovered and trusted, and competitors may already have stronger links, reviews, or local proximity. Good SEO reporting should show completed work, query and page movement, qualified organic traffic, and conversions—not promise a fixed ranking date."
      ],
      callout: {
        title: "An established Overland Park company may already have the raw materials.",
        body: "Years of customers, reviews, projects, and referral traffic can support SEO when the website finally organizes that proof around the services people search for."
      }
    },
    {
      id: "choose-ads",
      eyebrow: "When Google Ads Fits",
      title: "Choose Google Ads when the business needs a measurable demand test.",
      paragraphs: [
        "Ads can make sense when the offer is clear, the business can respond to leads, and there is enough search demand to run a useful test. A campaign can target a specific service and geography, send visitors to a focused page, and measure calls or forms. That makes it useful for a new offer, a seasonal need, an underfilled schedule, or a market where organic visibility is not yet strong.",
        "Ads are not a shortcut around weak economics. The business needs enough margin and close rate to support the expected cost per lead. It also needs a landing page that earns trust and a feedback loop that distinguishes qualified prospects from spam, job seekers, existing customers, and irrelevant inquiries."
      ],
      callout: {
        title: "A Blue Springs home-service business may value speed—but only with capacity.",
        body: "If the team can answer quickly and has room for a profitable service line, a focused search campaign can test demand. If calls go unanswered or the service area is too broad, extra clicks will not solve the operating problem."
      }
    },
    {
      id: "website-first",
      eyebrow: "The Shared Foundation",
      title: "Fix the website when both channels would send traffic into confusion.",
      paragraphs: [
        "SEO and ads both depend on the destination. A searcher needs to understand the service, audience, geography, proof, and next step. If the homepage is vague, service pages are missing, forms fail, or mobile visitors cannot call, more visibility simply exposes the weakness to more people.",
        "Before spending heavily, test the offer and conversion path. Confirm that the page matches the query, loads quickly, presents credible proof, answers common objections, and records the important action. A focused website improvement can raise the value of both existing organic traffic and future paid traffic."
      ],
      items: [
        "Clear service and audience above the fold",
        "Real proof near the decision point",
        "Fast mobile phone, form, or booking path",
        "Analytics and conversion events verified before launch"
      ]
    },
    {
      id: "decision-framework",
      eyebrow: "Choose Deliberately",
      title: "Make the channel decision with five business questions.",
      paragraphs: [
        "First, decide how quickly the business needs leads. Second, estimate what a qualified lead and new customer are worth. Third, verify search demand and competition for the actual service area. Fourth, assess the website and tracking. Fifth, confirm that the team can respond and close the opportunity. The answers often reveal the correct sequence more clearly than a generic channel comparison.",
        "If speed matters and the economics work, start with a controlled ad test while improving the organic foundation. If the company has steady demand and patience but weak visibility, prioritize SEO. If the offer or conversion path is unclear, repair the website first. The most responsible plan solves the tightest constraint instead of splitting a small budget evenly across everything."
      ],
      items: [
        "Timeline: Do you need demand this month or a stronger position this year?",
        "Economics: What qualified lead cost can the business support?",
        "Demand: Are people searching for this service in the target area?",
        "Conversion: Can the page and team turn interest into a customer?"
      ]
    },
    {
      id: "use-both",
      eyebrow: "A Connected System",
      title: "Use SEO and ads together when each channel has a clear job.",
      paragraphs: [
        "Paid search can reveal which terms, offers, and landing pages produce qualified leads. SEO can use that evidence to prioritize durable service pages and helpful content. Organic query data can uncover language and questions that improve ad groups, negative keywords, and landing-page copy. Neither channel should copy the other's metrics blindly, but both can improve the shared customer journey.",
        "A practical sequence is to establish tracking, fix the landing page, run a bounded ad test, and build SEO around confirmed services and customer questions. Review the combined picture: total qualified leads, blended acquisition cost, close rate, and revenue—not separate dashboards competing for credit."
      ],
      callout: {
        title: "An Olathe business can use one channel to de-risk the other.",
        body: "A small paid test can show whether an offer earns calls before the business invests in a large content program. Search Console can then show where organic relevance is beginning to grow."
      }
    }
  ],
  faqItems: [
    { question: "Is SEO or Google Ads better for a small business?", answer: "Neither is universally better. Google Ads is useful for controlled access to active demand, while SEO builds organic relevance and visibility over time. The right first move depends on timeline, economics, competition, website readiness, and lead-response capacity." },
    { question: "Should I fix my website before starting SEO or ads?", answer: "Fix critical clarity, mobile, trust, form, and tracking problems first. Both SEO and Google Ads are less valuable when visitors land on a page that does not match the search or make the next step easy." },
    { question: "Can Google Ads help SEO rankings?", answer: "Paying for Google Ads does not directly buy organic rankings. Ads can produce useful demand, keyword, and conversion evidence that informs SEO priorities, but the organic system remains separate." },
    { question: "Can a Kansas City business use SEO and Google Ads together?", answer: "Yes. Ads can capture or test immediate demand while SEO improves durable service and local visibility. Shared tracking and lead-quality feedback help both channels make better decisions." }
  ],
  relatedLinks: [
    { label: "Kansas City SEO services", href: "/services/search-engine-optimization" },
    { label: "Google Ads management", href: "/services/google-ads-management" },
    { label: "Conversion-focused websites", href: "/services/website-design" },
    { label: "Kansas City service areas", href: "/locations" }
  ],
  ctaTitle: "Need help deciding which marketing constraint to fix first?",
  ctaAccent: "which marketing constraint",
  ctaBody: "The free marketing audit reviews demand, visibility, landing pages, tracking, and lead flow before recommending SEO, ads, or website work.",
  ctaLinks: [
    { label: "Explore SEO", href: "/services/search-engine-optimization" },
    { label: "Explore Google Ads", href: "/services/google-ads-management" }
  ]
};

export const googleAdsSmallBusinessGuide: GuidePageItem = {
  title: "Google Ads for Kansas City Small Businesses",
  seoTitle: "Google Ads for Kansas City Small Businesses",
  description: "Learn how a Kansas City small business can set a Google Ads test budget, choose keywords, prepare a landing page, and track qualified leads.",
  path: "/google-ads-kansas-city-small-business-budget-guide",
  category: "Google Ads",
  heroTitle: "Google Ads for Kansas City small businesses",
  heroIntro: "A responsible first campaign starts with business economics, local demand, a focused landing page, and qualified-lead tracking—not an arbitrary monthly budget.",
  shortAnswerTitle: "Set the test around the customer economics, not a universal spend number.",
  shortAnswer: "Estimate local search demand and click costs, define what a qualified lead is worth, choose a narrow service and geography, and fund enough clicks to learn something. Track calls, forms, lead quality, and closed business. Expand only when the campaign produces evidence the economics can support.",
  publishedAt: "2026-08-28",
  updatedAt: "2026-08-28",
  displayDate: "August 28, 2026",
  readingTime: "11 min read",
  image: "/images/brand-art/connected-growth-v2.png",
  imageAlt: "Illustration of paid search campaigns connected to qualified business leads",
  keyTakeaways: [
    "Start with one valuable service and a realistic service area.",
    "Use demand and economics to set a test—not a generic minimum budget.",
    "Send each search theme to a focused, credible landing page.",
    "Optimize for qualified leads and revenue feedback, not cheap clicks."
  ],
  sections: [
    {
      id: "fit",
      eyebrow: "Campaign Readiness",
      title: "Decide whether Google Ads fits the business before opening the account.",
      paragraphs: [
        "Google Ads is most useful when people already search for the service, the business has room for more customers, and a new customer is valuable enough to support paid acquisition. The offer needs to be clear, competitive, and available in the selected geography. The team also needs to answer promptly; an expensive lead that waits two days for a response is likely to choose another provider.",
        "Ads are a weaker fit when search demand is tiny, margins cannot support the likely click cost, the website is untrustworthy, the offer is hard to explain, or the business cannot track outcomes. Those conditions do not always mean 'never.' They mean the first investment should repair the constraint rather than buy more traffic into it."
      ],
      items: [
        "Customers actively search for the service",
        "The business knows its margins and close rate",
        "The team can answer and qualify leads quickly",
        "A focused landing page and conversion tracking are ready"
      ]
    },
    {
      id: "economics",
      eyebrow: "Lead Economics",
      title: "Work backward from customer value and a sustainable lead cost.",
      paragraphs: [
        "Start with the gross profit from a typical new customer, not total revenue. Estimate the percentage of qualified leads that become customers and the portion of gross profit the business can responsibly spend to acquire one. That creates a target acquisition cost and an approximate target cost per qualified lead. Use conservative assumptions when the data is limited.",
        "For example, if a service creates $1,500 in gross profit, the business might decide it can invest $300 to acquire a customer. If one in four qualified leads closes, the target qualified-lead cost would be about $75. This is a planning example, not a promise. Real performance depends on click prices, demand, landing pages, competition, response speed, and sales quality."
      ],
      items: [
        "Gross profit per new customer—not only sale value",
        "Qualified lead-to-customer close rate",
        "Maximum sustainable customer acquisition cost",
        "Target cost per qualified lead and required lead volume"
      ]
    },
    {
      id: "budget",
      eyebrow: "Test Budget",
      title: "Use Kansas City demand and click estimates to size the test.",
      paragraphs: [
        "Google Keyword Planner can estimate searches, clicks, and click costs for the selected keywords and locations. Build the forecast around the actual service radius rather than the whole country. A Leawood professional service and a Blue Springs home-service company may face different search pools and competition even within the same metro.",
        "Google Ads uses an average daily campaign budget. Google documents a 30.4 multiplier for translating an average daily budget into a monthly planning amount. The useful budget is one that can buy enough relevant clicks and conversions to evaluate the offer without exceeding what the business can afford to lose during the test. A tiny budget spread across many services and cities often produces too little evidence."
      ],
      items: [
        "Forecast the exact services and service area",
        "Review estimated clicks, cost, competition, and conversion assumptions",
        "Concentrate the first test instead of splitting spend across everything",
        "Set a stop-loss and a scheduled review date before launch"
      ],
      callout: {
        title: "Metro-wide targeting can hide expensive waste.",
        body: "A Lee's Summit contractor may not profitably serve every corner of the Kansas City metro. Target the places the team can reach, exclude the rest, and review the actual location report rather than relying only on campaign settings."
      }
    },
    {
      id: "keywords-and-targeting",
      eyebrow: "Search Intent",
      title: "Choose keywords, locations, and exclusions around qualified demand.",
      paragraphs: [
        "Start with searches that name the service and signal a real next step. Group closely related phrases so the ad and landing page can answer them precisely. Review match types carefully, build a negative-keyword list, and inspect the search-terms report after launch. Searches from job seekers, students, do-it-yourself researchers, vendors, or unrelated services can spend budget without creating customers.",
        "Location settings need equal attention. Target people in the area the business can serve, verify whether campaign settings include interest in the location or physical presence, and exclude places outside the operating radius. Schedule ads for times the business can respond when response speed matters, but use data before making aggressive time or device exclusions."
      ],
      items: [
        "Group one service intent per ad group or tightly themed unit",
        "Use negative keywords to remove predictable irrelevant searches",
        "Review search terms and actual user locations regularly",
        "Align ad promise, landing page, and business availability"
      ]
    },
    {
      id: "landing-page",
      eyebrow: "Conversion Path",
      title: "Build a landing page that finishes the promise made in the ad.",
      paragraphs: [
        "The visitor should immediately see the service, service area, reason to trust the business, and next step. Avoid sending every campaign to a generic homepage when a focused service page would answer the search more directly. Use real project proof, reviews, process details, qualifications, or other evidence the business can verify.",
        "Keep forms proportionate to the decision. An initial estimate request may need a name, contact method, location, service, and short description—not a full project intake. Make the phone number tappable, explain what happens after submission, and test the page on mobile and a slower connection. Every added field or visual effect should earn its place."
      ],
      items: [
        "Match the search, ad, headline, and offer",
        "Show local and service-specific proof",
        "Use one primary call, form, booking, or quote action",
        "Test speed, mobile usability, form success, and thank-you behavior"
      ]
    },
    {
      id: "measurement",
      eyebrow: "Optimization",
      title: "Judge the campaign by qualified leads and business outcomes.",
      paragraphs: [
        "Configure primary conversions for completed calls, forms, bookings, or purchases that matter. Treat page views and button clicks as diagnostics unless they represent a real business outcome. Capture the campaign and landing-page context with the lead, then give the ad manager feedback about quality, estimated value, and whether the lead became a customer.",
        "Review the campaign in layers: search terms and locations, ad relevance, landing-page behavior, conversion volume, qualified-lead rate, close rate, and acquisition cost. Expand when a theme repeatedly produces sustainable customers. Repair or narrow when traffic is relevant but the page fails. Stop when the economics remain unsustainable after enough data and responsible optimization."
      ],
      callout: {
        title: "More leads are not always better leads.",
        body: "A Kansas City campaign generating ten vague inquiries can be less valuable than one generating three jobs the business actually wants. Feed sales outcomes back into targeting and reporting."
      }
    }
  ],
  faqItems: [
    { question: "How much should a Kansas City small business spend on Google Ads?", answer: "There is no universal amount. Size the test from local demand, estimated click costs, customer value, close rate, target lead cost, and the number of clicks needed to learn. Use Keyword Planner for the actual service area and set a budget the business can afford to test." },
    { question: "How long should a Google Ads test run?", answer: "The useful duration depends on search volume and conversion volume, not a fixed number of days. Set a review date and stop-loss before launch, then avoid judging the campaign from only a handful of clicks unless there is a critical targeting or tracking problem." },
    { question: "Should Google Ads send traffic to the homepage?", answer: "Only when the homepage directly matches the search and provides a strong conversion path. A focused service or landing page is usually better for a specific campaign because it can align the headline, proof, location, and next step." },
    { question: "What should Google Ads reporting include?", answer: "Report spend, search terms, locations, conversions, qualified leads, lead quality, close rate, customer acquisition cost, and revenue feedback. Clicks and impressions help diagnose delivery but should not define success by themselves." }
  ],
  relatedLinks: [
    { label: "Google Ads management", href: "/services/google-ads-management" },
    { label: "Conversion-focused websites", href: "/services/website-design" },
    { label: "SEO vs. Google Ads", href: "/seo-vs-google-ads-kansas-city-small-businesses" },
    { label: "Wrapped Up Moving case study", href: "/case-studies/wrapped-up-moving" }
  ],
  ctaTitle: "Want to know whether your offer, budget, and landing page are ready for ads?",
  ctaAccent: "ready for ads?",
  ctaBody: "Hometown's free marketing audit reviews the account, offer, conversion path, tracking, and lead economics before recommending the next campaign move.",
  ctaLinks: [{ label: "Explore Google Ads Management", href: "/services/google-ads-management" }]
};

export const smallBusinessWebsiteChecklistGuide: GuidePageItem = {
  title: "Small Business Website Checklist for Kansas City",
  seoTitle: "Small Business Website Checklist for Kansas City",
  description: "Use this Kansas City small-business website checklist to plan pages, local proof, mobile UX, lead capture, SEO basics, and launch tracking.",
  path: "/small-business-website-checklist-kansas-city",
  category: "Small Business Websites",
  heroTitle: "Small business website checklist for Kansas City",
  heroIntro: "Plan the pages, message, local proof, mobile experience, lead capture, SEO foundation, and launch checks a useful business website needs.",
  shortAnswerTitle: "A good small-business website makes the business easy to understand, trust, and contact.",
  shortAnswer: "Start with a clear offer, focused service pages, real proof, accurate service-area information, and one obvious next step. Then make the experience fast and accessible on mobile, establish search-friendly structure, and verify every form, call, analytics event, and sitemap entry before launch.",
  publishedAt: "2026-08-28",
  updatedAt: "2026-08-28",
  displayDate: "August 28, 2026",
  readingTime: "11 min read",
  image: "/images/brand-art/strategy-audit.png",
  imageAlt: "Illustrated checklist for planning a Kansas City small-business website",
  keyTakeaways: [
    "Give every page one clear customer job and next action.",
    "Use real services, projects, people, reviews, and service-area proof.",
    "Design the contact path for mobile customers first.",
    "Launch with analytics, conversion tracking, metadata, and QA complete."
  ],
  sections: [
    {
      id: "website-job",
      eyebrow: "Strategy First",
      title: "Write one sentence that defines the website's job.",
      paragraphs: [
        "A website cannot prioritize everything equally. Decide whether its primary job is generating quote requests, phone calls, bookings, reservations, applications, purchases, visits, or another measurable action. That decision shapes the page order, proof, calls to action, forms, and tracking. Secondary actions can still exist, but the main path should be obvious.",
        "Define the audience with equal care. A homeowner choosing a remodeler needs project proof and service-area clarity. A restaurant guest needs menus, hours, location, and reservations. A professional-service buyer may need credentials, process, and a consultation. Generic website checklists become useful only when every item is tied back to the customer decision."
      ],
      items: [
        "Primary audience and problem",
        "Main service or offer",
        "Geography or service area",
        "One primary measurable action"
      ]
    },
    {
      id: "essential-pages",
      eyebrow: "Page Plan",
      title: "Create the smallest page structure that fully answers the customer.",
      paragraphs: [
        "Most small businesses need a homepage, clear service pages, an about or proof page, contact information, and required legal pages. Location or industry pages should be added when they answer a distinct question and contain useful detail. A portfolio, case studies, menus, team profiles, resources, or FAQs can support the decision when the business has real material to share.",
        "Avoid forcing every service onto one page or publishing dozens of nearly identical city pages. Give valuable services dedicated pages when customers compare them independently. Connect related pages with descriptive internal links so visitors can move from a service to proof, location context, and contact without returning to the homepage."
      ],
      items: [
        "Homepage with offer, audience, proof, and next step",
        "Dedicated pages for important services",
        "About, proof, work, or case-study content",
        "Contact, privacy, terms, and other required operational pages"
      ]
    },
    {
      id: "message-and-proof",
      eyebrow: "Trust and Clarity",
      title: "Say what the business does and prove the claims nearby.",
      paragraphs: [
        "A visitor should not need to decode a slogan to understand the company. Use a direct headline, supporting explanation, service area, and action. Replace vague claims such as 'best quality' with details customers can evaluate: years in business, process, credentials, real projects, approved testimonials, response expectations, guarantees the company truly offers, and examples of who is a good fit.",
        "Use original images whenever possible. Team, location, product, food, process, and finished-project photos build more trust than generic stock images. Add descriptive alternative text for meaningful images, compress files, and avoid placing essential information only inside graphics. Every proof element should be accurate and approved."
      ],
      callout: {
        title: "Local proof should match the kind of business.",
        body: "A Leawood restaurant can show food, atmosphere, menu, and reservation flow. An Overland Park professional service may rely more on expertise, process, outcomes, and consultation details. The same template should not erase those differences."
      }
    },
    {
      id: "mobile-and-accessibility",
      eyebrow: "Usability",
      title: "Make the website fast, readable, and actionable on a phone.",
      paragraphs: [
        "Many local customers arrive on mobile after a search, map result, referral text, email, or social post. Test the smallest common screen sizes, not only a desktop preview. Navigation should be easy to open and close, tap targets should have room, text should be readable without zooming, and important actions should remain visible without covering content.",
        "Accessibility supports more customers and makes the interface more robust. Use semantic headings, labels for form fields, visible focus states, keyboard-operable controls, sufficient contrast, captions where needed, and helpful error messages. Avoid motion that cannot be reduced and auto-playing media that competes with the customer's task."
      ],
      items: [
        "Readable type, contrast, spacing, and heading order",
        "Keyboard navigation and visible focus states",
        "Fast images and stable layout without unexpected shifts",
        "Tappable phone, email, booking, and form actions"
      ]
    },
    {
      id: "seo-and-tracking",
      eyebrow: "Findability and Measurement",
      title: "Build the search and conversion foundation before launch.",
      paragraphs: [
        "Give each indexable page a focused topic, readable title, useful description, one clear H1, self-referencing canonical, and crawlable internal links. Include accurate structured data when it matches visible content. Generate XML sitemaps from the real page inventory, keep staging environments out of search, and verify the production site in Google Search Console.",
        "Install analytics and define the actions that matter: completed forms, calls, emails, bookings, quote starts, or purchases. Test each event in production and preserve campaign attribution with the lead when possible. Traffic without conversion context cannot show whether the website helps the business."
      ],
      items: [
        "Unique titles, descriptions, H1s, canonicals, and share images",
        "Crawlable internal links and accurate XML sitemaps",
        "Visible content aligned with structured data",
        "Verified form, phone, email, booking, and campaign tracking"
      ]
    },
    {
      id: "launch-checklist",
      eyebrow: "Launch and Improve",
      title: "Test every customer path, then keep the site current.",
      paragraphs: [
        "Before launch, review every page on desktop and mobile, test navigation and links, submit forms, tap phone and email actions, verify thank-you states, and check the 404 page. Confirm status codes, redirects, canonicals, robots directives, metadata, schema, sitemaps, analytics, consent behavior, and backups. Ask someone unfamiliar with the project to complete the main task without coaching.",
        "After launch, monitor errors and conversions immediately, then review performance at 28 and 90 days. Update the site when services, hours, people, policies, locations, projects, or offers change. Add content because customers need it and evidence supports it—not because a calendar says the blog is due. A useful small-business website is an operating system that improves with the business."
      ],
      callout: {
        title: "The checklist ends with a real customer action.",
        body: "Whether the business is in Kansas City, Olathe, Lenexa, or Prairie Village, the launch is incomplete until calls, forms, bookings, and attribution have been tested end to end."
      }
    }
  ],
  faqItems: [
    { question: "What pages should a small-business website include?", answer: "Most need a homepage, dedicated pages for important services, an about or proof page, a contact page, and required legal pages. Add locations, industries, case studies, menus, team pages, or resources only when they help a real customer decision." },
    { question: "How many calls to action should a page have?", answer: "A page can repeat one primary action in several useful places and offer a secondary action when needed. Avoid presenting many equally strong choices. The visitor should understand the most important next step." },
    { question: "Does a Kansas City small-business website need local SEO?", answer: "A local business should clearly explain its services and real service area, maintain accurate business information, connect its website to its Google Business Profile, and use search-friendly page structure. Ongoing local SEO depends on competition and growth goals." },
    { question: "How do we know whether the website generates leads?", answer: "Track completed forms, phone and email clicks, bookings, quote starts, and campaign attribution. Review the landing page and source connected to qualified leads, not only total traffic." }
  ],
  relatedLinks: [
    { label: "Kansas City website design", href: "/services/website-design" },
    { label: "Website builder vs. custom", href: "/website-builder-vs-custom-website-for-small-businesses" },
    { label: "Contractor website checklist", href: "/what-should-a-contractor-website-include" },
    { label: "Restaurant website design", href: "/industries/restaurant-website-design-kansas-city" }
  ],
  ctaTitle: "Want a second set of eyes on your website plan?",
  ctaAccent: "second set of eyes",
  ctaBody: "Hometown's free marketing audit reviews the offer, page structure, local proof, mobile lead path, SEO foundation, and tracking before you invest in the wrong fix.",
  ctaLinks: [{ label: "Explore Website Design", href: "/services/website-design" }]
};

export const googleAdsAiAskAdvisorGuide: GuidePageItem = {
  title: "Google Ads AI for Kansas City Small Businesses",
  seoTitle: "Google Ads AI for Kansas City Small Businesses",
  description: "Learn how Kansas City small businesses can use Google Ads Ask Advisor for reporting, troubleshooting, creative ideas, and safer campaign decisions.",
  path: "/google-ads-ai-ask-advisor-kansas-city",
  category: "Google Ads",
  heroTitle: "Google Ads AI for Kansas City small businesses",
  heroIntro: "Google is adding new AI insights, reporting, and Ask Advisor capabilities to Ads and Analytics. Here is what local owners can use now, what still needs human review, and how to protect lead quality.",
  shortAnswerTitle: "Use Ask Advisor as an analyst and assistant—not an unsupervised campaign manager.",
  shortAnswer: "Google's new AI tools can summarize changes, create reports, investigate performance, troubleshoot issues, and suggest campaign or creative improvements. They become useful when the account tracks qualified business outcomes. Review every recommendation for accuracy, budget impact, local targeting, and customer fit before applying it.",
  publishedAt: "2026-09-03",
  updatedAt: "2026-09-03",
  displayDate: "September 3, 2026",
  readingTime: "10 min read",
  image: "/images/brand-art/case-study-results-v2.png",
  imageAlt: "Illustrated campaign dashboard showing Google Ads AI insights and business results",
  keyTakeaways: [
    "Ask Advisor is a beta experience, so availability and capabilities may differ by account.",
    "AI summaries can accelerate analysis but cannot verify whether a lead became a good customer.",
    "Every suggested budget, targeting, creative, or conversion change still needs human approval.",
    "Better call, form, qualified-lead, and sales data gives automated systems better signals."
  ],
  sections: [
    {
      id: "what-google-announced",
      eyebrow: "The August Update",
      title: "What Google added to Ads and Analytics in August 2026.",
      paragraphs: [
        "On August 10, Google announced additional AI and agentic experiences across Google Ads and Google Analytics. Google Analytics is adding AI Overviews on the homepage to summarize important changes since the user's last visit, with the ability to carry an insight into Ask Advisor for deeper analysis. Google also described optional phone or email notifications for those summaries.",
        "In Google Ads, the refreshed homepage can surface personalized AI-powered insight cards and a prompt box for requesting a custom insight. Google also announced prompt-generated visual dashboards in Google Ads, with similar dashboard functionality planned for Google Analytics. Ask Advisor in Analytics can compare campaign performance with anonymized averages from similar businesses through a new benchmarking feature.",
        "These features are not a reason to change every campaign. They are a faster interface for asking questions, organizing data, and finding areas that deserve investigation. Google notes that the newly announced capabilities are currently beta features for English-language accounts, so two Kansas City businesses may not see the same interface at the same time."
      ],
      items: [
        "AI summaries of important Analytics changes",
        "Personalized insight cards on the Google Ads homepage",
        "Prompt-generated reports and visual dashboards",
        "Ask Advisor analysis and anonymized performance benchmarks"
      ]
    },
    {
      id: "what-ask-advisor-can-do",
      eyebrow: "Useful Assistance",
      title: "Ask Advisor can shorten the path from a question to an account investigation.",
      paragraphs: [
        "Google describes Ask Advisor as a conversational experience built with Gemini capabilities inside its marketing products. In an eligible Ads account, an advertiser can ask questions about campaign performance, request reports, troubleshoot performance or policy issues, and get suggestions for text or image creative. Some recommendations can be implemented after the advertiser approves them.",
        "That can help a small business owner who knows the business but does not know where every report lives. Instead of manually assembling several views, the owner can start with a direct question such as why conversions changed, which campaigns are pacing behind a target, or which search themes deserve a closer look. The answer should begin an investigation rather than end one.",
        "Ask Advisor can also help explain platform terminology and organize a reporting view. It cannot sit in a sales conversation, inspect the quality of a completed job, or know why the team failed to answer a phone call unless that information is recorded and returned to the advertising system."
      ],
      items: [
        "Summarize week-over-week campaign performance",
        "Generate or organize reports around a business question",
        "Investigate delivery, policy, or performance issues",
        "Suggest text and image creative for human review"
      ]
    },
    {
      id: "prompts-to-test",
      eyebrow: "Start With Better Questions",
      title: "Five prompts a Kansas City business can use to find actionable problems.",
      paragraphs: [
        "The best prompt names the outcome, date range, campaign scope, and comparison. 'How are my ads doing?' leaves too much undefined. 'Compare qualified phone calls from brand and non-brand Search campaigns during the last 30 days with the previous 30 days' gives the system a clearer job and makes the result easier to verify.",
        "Begin with reporting and diagnosis before asking the tool to change the account. If the response identifies a meaningful issue, open the underlying report, confirm the filters and conversion definition, and compare the explanation with what the sales team actually experienced."
      ],
      items: [
        "Which campaigns generated qualified calls during the last 30 days?",
        "What caused our cost per qualified lead to change from the previous period?",
        "Which Kansas City locations are spending without producing primary conversions?",
        "Show search terms that do not match the services on our landing pages.",
        "Compare mobile and desktop conversion performance for our lead campaigns.",
        "Which recommendation would have the largest budget impact if accepted?"
      ],
      callout: {
        title: "Ask for the geography the business can actually serve.",
        body: "A Blue Springs contractor may discover clicks from the far side of the metro that rarely become profitable jobs. Ask Advisor can help surface the pattern, but the owner still decides whether travel time, job value, and crew capacity justify the targeting."
      }
    },
    {
      id: "data-foundation",
      eyebrow: "Garbage In, Confident Answer Out",
      title: "AI recommendations are only as business-aware as the conversion data behind them.",
      paragraphs: [
        "An account that treats every button click, ten-second phone call, and completed customer sale as equivalent gives the bidding and reporting systems a distorted objective. Define primary conversions around meaningful outcomes such as completed lead forms, qualified calls, bookings, or purchases. Keep page views, scrolls, and early form interactions as secondary diagnostics rather than the main optimization goal.",
        "The next layer is lead quality. Store the campaign and click context with each inquiry, then record whether the lead was relevant, qualified, quoted, won, and valuable. When the business can safely return appropriate offline conversion or value information, Google has more evidence about which interactions lead to real outcomes. Privacy, consent, and data-handling requirements still apply.",
        "This is where a local owner has knowledge the platform does not. An Overland Park professional service may prefer three high-fit consultations over twelve vague forms. A Lee's Summit home-service company may value a specific job type or service radius. Those business definitions should shape conversions before AI is asked to improve performance."
      ],
      items: [
        "Verify forms, calls, bookings, and purchases as primary conversions",
        "Separate qualified leads from spam, vendors, and job seekers",
        "Record lead stage, close outcome, and value where appropriate",
        "Audit consent, retention, and customer-data handling"
      ]
    },
    {
      id: "what-not-to-automate-blindly",
      eyebrow: "Keep Human Control",
      title: "Review budget, targeting, creative, and conversion changes before approval.",
      paragraphs: [
        "Google's help documentation says advertisers are responsible for ensuring accepted Ask Advisor suggestions are accurate and relevant. Treat that as an operating rule. A recommendation may be technically valid inside the platform while conflicting with the business's margins, schedule, service area, brand voice, licensing, inventory, or sales capacity.",
        "Budget increases deserve an explicit forecast and limit. Broader targeting deserves a search-term and location review. New creative needs factual and brand approval, especially because Ask Advisor may source generated images from the landing page or create them with Google AI. A conversion-goal change needs confirmation that the selected action represents business value—not merely an event that is easy to generate.",
        "Apply one material change at a time when practical, record the date and hypothesis, and establish the metric and review window in advance. Reversible experimentation is useful. Accepting a long list of recommendations at once makes it difficult to learn which change improved or damaged performance."
      ],
      items: [
        "Calculate the monthly and customer-acquisition impact of budget changes",
        "Inspect actual search terms and user locations before broadening reach",
        "Verify every claim, image, offer, and service detail in generated creative",
        "Confirm that the optimization goal represents a qualified business outcome"
      ]
    },
    {
      id: "safe-weekly-workflow",
      eyebrow: "A Practical Routine",
      title: "Use a seven-step review before Ask Advisor changes the account.",
      paragraphs: [
        "Start by asking a reporting question tied to a primary business outcome. Confirm the date range, campaigns, attribution view, and conversion action in the underlying report. Compare the finding with qualified-lead and sales feedback. Then ask the tool to explain possible causes and show the evidence behind the recommendation.",
        "Before approval, document the proposed change, expected result, maximum budget exposure, and conditions that would trigger a rollback. Make the change only after checking search intent, geography, landing-page readiness, brand accuracy, and team capacity. Review the result after enough relevant traffic and conversions have accumulated; do not declare success from a short fluctuation.",
        "For a small Kansas City account, the greatest benefit may be time saved finding and explaining a problem—not automatic expansion. Use that saved time to review calls, improve the landing page, answer leads faster, and tell the system which customers were actually valuable."
      ],
      items: [
        "Ask one outcome-based question",
        "Open and verify the underlying report",
        "Compare platform data with lead-quality feedback",
        "Review the recommendation's scope and budget impact",
        "Check targeting, landing page, creative, and capacity",
        "Apply one documented change and schedule the review"
      ],
      callout: {
        title: "The platform sees campaign activity; the business sees customer reality.",
        body: "The safest workflow connects both views. Ask Advisor can reveal where performance changed, while the owner or agency determines whether that change created profitable Kansas City customers."
      }
    }
  ],
  faqItems: [
    {
      question: "What is Ask Advisor in Google Ads?",
      answer: "Ask Advisor is Google's beta conversational assistant for marketing products. In eligible Google Ads accounts, it can answer account questions, generate reports, troubleshoot performance or policy issues, and suggest campaign or creative improvements."
    },
    {
      question: "Can Google Ads Ask Advisor change campaigns automatically?",
      answer: "Ask Advisor can suggest actions and may help implement them after approval. Google says advertisers remain responsible for checking that accepted suggestions are accurate and relevant, so budget, targeting, creative, and conversion changes should always be reviewed."
    },
    {
      question: "Is Ask Advisor available to every Kansas City advertiser?",
      answer: "Not necessarily. Google describes Ask Advisor as a beta experience for eligible English-language accounts, and its documentation says it is not currently available in manager accounts. Availability and capabilities can change as the rollout continues."
    },
    {
      question: "What should a small business configure before using Google Ads AI?",
      answer: "Verify primary conversion tracking, define a qualified lead, connect campaign context to inquiries, review location and search-term data, and establish budget and brand-approval rules. AI analysis is more useful when the underlying business signals are accurate."
    }
  ],
  relatedLinks: [
    { label: "Google Ads management", href: "/services/google-ads-management" },
    { label: "Google Ads budget guide", href: "/google-ads-kansas-city-small-business-budget-guide" },
    { label: "SEO vs. Google Ads", href: "/seo-vs-google-ads-kansas-city-small-businesses" },
    { label: "Conversion-focused websites", href: "/services/website-design" }
  ],
  sourceLinks: [
    {
      label: "Google: Evolve your marketing with new AI tools",
      href: "https://blog.google/products/ads-commerce/google-ads-analytics-ai-updates/",
      note: "Google's August 10, 2026 announcement covering homepage insights, prompt-generated dashboards, Ask Advisor, and benchmarking."
    },
    {
      label: "Google Ads Help: Ask Advisor in Google Ads",
      href: "https://support.google.com/google-ads/answer/16574983?hl=en",
      note: "Current beta documentation covering access, supported tasks, approval, generated creative, availability, and advertiser responsibility."
    }
  ],
  ctaTitle: "Want a human review before Google Ads AI changes your account?",
  ctaAccent: "human review",
  ctaBody: "Hometown's free marketing audit reviews campaign structure, conversion tracking, local targeting, landing pages, and lead quality before recommending the next move.",
  ctaLinks: [{ label: "Explore Google Ads Management", href: "/services/google-ads-management" }]
};

export const guidesBySlug = {
  "local-seo-checklist-kansas-city-small-businesses": localSeoChecklistGuide,
  "website-redesign-checklist-kansas-city": websiteRedesignChecklistGuide,
  "seo-vs-google-ads-kansas-city-small-businesses": seoVsGoogleAdsGuide,
  "google-ads-kansas-city-small-business-budget-guide": googleAdsSmallBusinessGuide,
  "small-business-website-checklist-kansas-city": smallBusinessWebsiteChecklistGuide,
  "google-ads-ai-ask-advisor-kansas-city": googleAdsAiAskAdvisorGuide
} as const;
