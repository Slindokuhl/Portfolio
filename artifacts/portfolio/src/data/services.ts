export interface Service {
  id: string;
  title: string;
  tagline: string;
  forWho: string;
  includes: string[];
  timeline: string;
  priceZar: string;
  priceUsd: string;
  proof: { label: string; href: string };
  stack?: string[];
  featured?: boolean;
}

export const WHATSAPP_NUMBER = "27848038960";
export const CONTACT_EMAIL = "slindokuhleatlehang1998@gmail.com";

export const SERVICES: Service[] = [
  {
    id: "flutter-ios",
    title: "Flutter iOS Release Setup — No Mac Needed",
    tagline: "Get your Flutter app building, signed and on TestFlight automatically.",
    forWho: "Flutter developers, startups and agencies stuck on iOS builds",
    includes: [
      "Codemagic or GitHub Actions pipeline for iOS (and Android)",
      "Certificates, provisioning profiles and code signing sorted",
      "Automatic upload to TestFlight on every release",
      "App Store Connect setup and first submission guidance",
      "Short handover video so your team can run it",
    ],
    timeline: "2–4 days",
    priceZar: "R4,500",
    priceUsd: "$250",
    proof: { label: "Watch how I do it", href: "https://www.youtube.com/watch?v=hQDBZsAe0Is" },
    featured: true,
  },
  {
    id: "laravel-deploy",
    title: "Laravel Push-to-Deploy + Server Hardening",
    tagline: "Stop uploading files by hand. Push to GitHub, and it's live.",
    forWho: "Laravel/PHP freelancers, agencies and businesses on shared hosting or VPS",
    includes: [
      "GitHub Actions pipeline that deploys on every push",
      "Works with shared hosting (FTP) or VPS (SSH)",
      "Free SSL with Let's Encrypt and forced HTTPS",
      "Security headers, firewall rules and database hardening",
    ],
    timeline: "1–3 days",
    priceZar: "R2,500",
    priceUsd: "$150",
    proof: { label: "Watch how I do it", href: "https://www.youtube.com/watch?v=Oi2z8ivNx8E" },
  },
  {
    id: "firebase-cost",
    title: "Firebase Cost & Speed Audit",
    tagline: "Cut your Firestore bill and make your app load faster.",
    forWho: "Startups and apps whose Firebase usage or bill keeps growing",
    includes: [
      "Audit of reads, writes and listeners across your app",
      "Caching strategy with real-time only where it matters",
      "Implementation of the fixes, not just a report",
      "Before/after numbers so you see the savings",
    ],
    timeline: "3–5 days",
    priceZar: "R5,000",
    priceUsd: "$300",
    proof: { label: "Case study: 82% fewer reads", href: "/case-studies/dc-delivery-firebase-optimization" },
  },
  {
    id: "website",
    title: "Business Website or Web App",
    tagline: "A fast, professional site that brings you customers.",
    forWho: "Small businesses, schools and startups in South Africa and beyond",
    includes: [
      "Custom design, mobile-friendly and fast",
      "Built with React or Laravel, hosted and secured with SSL",
      "Contact forms, WhatsApp button and Google Maps",
      "On-page SEO so customers find you on Google",
      "Domain, hosting and email setup if you need it",
    ],
    timeline: "1–3 weeks",
    priceZar: "R6,000",
    priceUsd: "$350",
    proof: { label: "See my projects", href: "/projects" },
  },
  {
    id: "ecommerce-store",
    title: "Full E-commerce Store",
    tagline: "A complete fashion or retail store like the big brands, with your own admin to run it.",
    forWho: "Clothing brands, retailers and businesses ready to sell online",
    includes: [
      "Storefront with products, sizes, colours, search, filters and wishlist",
      "Cart, checkout and online payments (PayFast, Yoco, Ozow or Stripe)",
      "Customer accounts, order history and email order updates",
      "Admin dashboard: products, stock, orders, discounts and sales reports",
      "Hosted on HostAfrica with domain, SSL, backups and SEO",
    ],
    stack: ["Medusa", "PostgreSQL", "MySQL", "Firebase", "React", "Laravel", "HostAfrica"],
    timeline: "3–6 weeks",
    priceZar: "R18,000",
    priceUsd: "$1,000",
    proof: { label: "See my projects", href: "/projects" },
  },
  {
    id: "delivery-platform",
    title: "Delivery Platform: Store, Driver App & Admin",
    tagline: "Your own ordering and delivery system, from the customer's order to the driver's door.",
    forWho: "Shops, restaurants, pharmacies and delivery businesses",
    includes: [
      "Customer app and website to browse, order, pay and track live",
      "Driver app with order alerts, navigation and proof of delivery",
      "Admin dashboard for orders, drivers, stores, payouts and reports",
      "Live order tracking and push notifications",
      "Android and iOS apps published to the stores, server hosted on HostAfrica",
    ],
    stack: ["Flutter", "Firebase", "PostgreSQL", "MySQL", "Medusa", "Laravel", "HostAfrica"],
    timeline: "6–10 weeks",
    priceZar: "R45,000",
    priceUsd: "$2,500",
    proof: { label: "Case study: a delivery app I built", href: "/case-studies/dc-delivery-firebase-optimization" },
  },
];

export const PROCESS_STEPS = [
  { title: "Message me", text: "Tell me what you need on WhatsApp or email. I reply the same day." },
  { title: "Fixed quote", text: "You get a clear price and timeline before any work starts. No surprises." },
  { title: "I build it", text: "You get progress updates, and payment is 50% upfront, 50% on delivery." },
  { title: "Handover", text: "Everything is documented and explained, with 14 days of free fixes." },
];

export function whatsappLink(serviceTitle?: string): string {
  const text = serviceTitle
    ? `Hi Slindokuhle, I found you on slindokuhle.com and I'm interested in: ${serviceTitle}.`
    : "Hi Slindokuhle, I found you on slindokuhle.com and I'd like to discuss a project.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
