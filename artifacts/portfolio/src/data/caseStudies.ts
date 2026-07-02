export interface MetricRow {
  metric: string;
  before: string;
  after: string;
  change: string;
}

export interface CaseStudy {
  slug: string;
  kicker: string;
  title: string;
  challenge: string;
  solution: string;
  result: string;
  highlightStats: { value: number; suffix: string; label: string }[];
  problemStatement: string;
  technicalApproach: string;
  codeLanguage: string;
  codeSnippet: string;
  metrics: MetricRow[];
  skillsDemonstrated: string[];
}

export const DC_DELIVERY_CASE_STUDY: CaseStudy = {
  slug: "dc-delivery-firebase-optimization",
  kicker: "Case Study",
  title: "DC Delivery — Firebase Optimization",
  challenge: "Platform hitting Firestore read limits (45,000 reads/day)",
  solution: "Implemented 24-hour caching + real-time toggles",
  result: "82% reduction in database reads, 5x faster load times",
  highlightStats: [
    { value: 82, suffix: "%", label: "Fewer Firestore Reads" },
    { value: 5, suffix: "x", label: "Faster Load Times" },
  ],
  problemStatement:
    "DC Delivery's platform was consistently hitting Firestore's daily read quota — around 45,000 reads a day — as usage grew. Every screen load re-fetched collections directly from Firestore, even for data that rarely changed minute-to-minute (delivery zones, pricing tiers, driver rosters). That meant slow page loads, a real risk of the app being throttled once the quota was hit, and rising Firestore billing tied directly to read volume.",
  technicalApproach:
    "Rather than caching everything uniformly, I built a lightweight caching layer with a 24-hour TTL for data that doesn't need second-by-second freshness, paired with a per-feature real-time toggle for the views that do (live delivery tracking, active driver status). That toggle bypasses the cache entirely and falls back to a live Firestore listener, so accuracy isn't sacrificed where it actually matters — the win comes from not paying for real-time reads on data that's effectively static within a day.",
  codeLanguage: "typescript",
  codeSnippet: `// firestoreCache.ts — 24h TTL cache wrapping Firestore reads
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

async function getCachedCollection<T>(
  path: string,
  forceRealtime = false
): Promise<T[]> {
  const cacheKey = \`fs_cache_\${path}\`;
  const cached = localStorage.getItem(cacheKey);

  if (!forceRealtime && cached) {
    const { data, cachedAt } = JSON.parse(cached);
    if (Date.now() - cachedAt < CACHE_TTL_MS) {
      return data as T[]; // cache hit — zero Firestore reads
    }
  }

  const snapshot = await getDocs(collection(db, path));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as T[];

  localStorage.setItem(
    cacheKey,
    JSON.stringify({ data, cachedAt: Date.now() })
  );
  return data;
}

// Live-tracking views opt out of caching via a per-feature toggle
const deliveries = await getCachedCollection<Delivery>(
  "deliveries",
  liveTrackingEnabled // bypasses cache when true
);`,
  metrics: [
    { metric: "Firestore reads / day", before: "45,000", after: "~8,100", change: "-82%" },
    { metric: "Page & data load speed", before: "Baseline", after: "5x faster", change: "+400%" },
    { metric: "Read quota headroom", before: "At daily limit", after: "Comfortably within budget", change: "✓" },
  ],
  skillsDemonstrated: [
    "Cache Strategy & Optimization",
    "Firestore Performance Tuning",
    "Cost Optimization",
    "Real-time Configuration Management",
    "Firebase",
    "Laravel",
  ],
};
