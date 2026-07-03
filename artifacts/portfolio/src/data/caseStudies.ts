export interface MetricRow {
  metric: string;
  before: string;
  after: string;
  change?: string;
}

export interface CodeBlock {
  language: string;
  label?: string;
  code: string;
}

export interface SolutionStep {
  title: string;
  description: string;
  code?: CodeBlock;
}

export interface CaseStudy {
  slug: string;
  kicker: string;
  category: string;
  project: string;
  date: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  highlightStats: { value: number; suffix: string; label: string }[];
  glowColor: "primary" | "cyan" | "violet";
  problemStatement: string;
  solutionSteps: SolutionStep[];
  metrics: MetricRow[];
  technicalDetails?: { label: string; value: string }[];
  technologies: string[];
  lessonsLearned: string[];
  skillsDemonstrated: string[];
}

const DC_DELIVERY_CASE_STUDY: CaseStudy = {
  slug: "dc-delivery-firebase-optimization",
  kicker: "Case Study",
  category: "Performance",
  project: "DC Delivery",
  date: "2026",
  title: "DC Delivery — Firebase Optimization",
  summary:
    "Cut Firestore reads 82% and made the app load 5x faster by replacing blanket real-time reads with a 24-hour cache and per-feature real-time toggles.",
  challenge: "Platform hitting Firestore read limits (45,000 reads/day)",
  solution: "Implemented 24-hour caching + real-time toggles",
  result: "82% reduction in database reads, 5x faster load times",
  highlightStats: [
    { value: 82, suffix: "%", label: "Fewer Firestore Reads" },
    { value: 5, suffix: "x", label: "Faster Load Times" },
  ],
  glowColor: "cyan",
  problemStatement:
    "DC Delivery's platform was consistently hitting Firestore's daily read quota — around 45,000 reads a day — as usage grew. Every screen load re-fetched collections directly from Firestore, even for data that rarely changed minute-to-minute (delivery zones, pricing tiers, driver rosters). That meant slow page loads, a real risk of the app being throttled once the quota was hit, and rising Firestore billing tied directly to read volume.",
  solutionSteps: [
    {
      title: "24-hour TTL cache with a real-time escape hatch",
      description:
        "Rather than caching everything uniformly, I built a lightweight caching layer with a 24-hour TTL for data that doesn't need second-by-second freshness, paired with a per-feature real-time toggle for the views that do (live delivery tracking, active driver status). That toggle bypasses the cache entirely and falls back to a live Firestore listener, so accuracy isn't sacrificed where it actually matters — the win comes from not paying for real-time reads on data that's effectively static within a day.",
      code: {
        language: "typescript",
        label: "firestoreCache.ts",
        code: `// firestoreCache.ts — 24h TTL cache wrapping Firestore reads
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
      },
    },
  ],
  metrics: [
    { metric: "Firestore reads / day", before: "45,000", after: "~8,100", change: "-82%" },
    { metric: "Page & data load speed", before: "Baseline", after: "5x faster", change: "+400%" },
    { metric: "Read quota headroom", before: "At daily limit", after: "Comfortably within budget", change: "✓" },
  ],
  technologies: ["Firebase", "Firestore", "Laravel", "TypeScript"],
  lessonsLearned: [
    "Not all data needs to be real-time — segmenting by freshness requirements is the real lever.",
    "A per-feature toggle beats an all-or-nothing cache: accuracy stays where it matters, cost drops where it doesn't.",
    "Firestore billing is read-based, so cutting reads is a direct cost optimization, not just a UX one.",
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

const AAPANEL_SECURITY_CASE_STUDY: CaseStudy = {
  slug: "aapanel-security-hardening",
  kicker: "Case Study",
  category: "Infrastructure",
  project: "Schoolmia",
  date: "June 2026",
  title: "Server Security & Infrastructure Hardening",
  summary:
    "Secured Schoolmia's Contabo VPS end-to-end — SSL/TLS with auto-renewing certificates, Nginx hardening, firewall lockdown, database isolation, and a WSL environment that mirrors production before anything ships.",
  challenge: "aaPanel default setup with no SSL, no firewall rules, and a Windows dev / Linux prod mismatch",
  solution: "SSL/TLS, HTTPS redirects, security headers, firewall rules, database hardening, and WSL parity",
  result: "SSL Labs A+ (98/100), 100% HTTPS, zero manual certificate renewals",
  highlightStats: [
    { value: 98, suffix: "/100", label: "SSL Labs Score" },
    { value: 100, suffix: "%", label: "HTTPS Enforced" },
    { value: 0, suffix: "", label: "Manual Cert Renewals" },
  ],
  glowColor: "violet",
  problemStatement:
    "When setting up Schoolmia — a Laravel academic platform — on a Contabo VPS using aaPanel, the default setup was functional but wide open. There was no SSL/TLS, so every request (including login credentials) travelled in plaintext, vulnerable to man-in-the-middle interception. HTTP endpoints had no forced redirect to HTTPS, so a single mistyped URL could send sensitive data unencrypted. aaPanel's own admin interface was exposed on its default public port with no firewall restricting who could reach it. And because local development happened on Windows while production ran Linux, environment-specific bugs (file permissions, path handling, Linux-only services) kept surfacing only after deployment — by which point they were already a production incident. There was also no written security baseline, so none of this was easy to audit, reproduce, or hand off.",
  solutionSteps: [
    {
      title: "SSL/TLS with Let's Encrypt",
      description:
        "Installed free, auto-renewing Let's Encrypt certificates covering all three Schoolmia subdomains, backed by 256-bit AES encryption. Renewal runs automatically via aaPanel's cron integration every 90 days — no manual certificate work, ever.",
      code: {
        language: "bash",
        label: "Certificate issuance",
        code: `sudo /www/server/panel/tools/certbot.py certonly \\
  --webroot \\
  -w /www/wwwroot/schoolmia.com \\
  -d schoolmia.com \\
  -d panel.schoolmia.com \\
  -d studentweb.schoolmia.com`,
      },
    },
    {
      title: "HTTP → HTTPS forced redirects",
      description:
        "Configured Nginx to force every HTTP request onto HTTPS, and added an HSTS header so browsers refuse to downgrade back to plaintext on repeat visits. Users can no longer accidentally send unencrypted data, even via an old bookmark or typed-in HTTP link.",
      code: {
        language: "nginx",
        label: "nginx.conf",
        code: `server {
    listen 80;
    server_name schoolmia.com panel.schoolmia.com studentweb.schoolmia.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
}`,
      },
    },
    {
      title: "Security headers",
      description:
        "Layered on X-Frame-Options to block clickjacking, X-Content-Type-Options to stop MIME-sniffing attacks, X-XSS-Protection as a browser-level XSS backstop, and a Referrer-Policy to limit what gets leaked to third-party links.",
    },
    {
      title: "aaPanel firewall rules",
      description:
        "Locked the firewall down to exactly what needs to be reachable, from where. SSH is IP-restricted to a known location, HTTP stays open only to serve the redirect to HTTPS, and aaPanel's own admin panel was moved off its default port and restricted by IP — invisible to the automated scanners that specifically probe for it.",
    },
    {
      title: "MySQL database hardening",
      description:
        "Removed remote root access entirely and created an application-scoped user with least-privilege access to only the Schoolmia database, reachable exclusively from localhost. Binary logging stayed on for an audit trail. Even a fully compromised web server can no longer reach the database from outside the box.",
      code: {
        language: "sql",
        label: "MySQL hardening",
        code: `CREATE USER 'schoolmia_user'@'localhost' IDENTIFIED BY 'StrongPassword123!@#';
GRANT ALL PRIVILEGES ON schoolmia.* TO 'schoolmia_user'@'localhost';
DELETE FROM mysql.user WHERE Host != 'localhost';
FLUSH PRIVILEGES;`,
      },
    },
    {
      title: "Windows → Linux environment parity via WSL",
      description:
        "Set up WSL running Ubuntu 22.04 with Docker to mirror the production stack locally — same OS family, same services, same file-permission behavior. SSL redirects, Linux-specific path issues, and permission bugs now get caught on a dev machine, before they ever reach production.",
      code: {
        language: "bash",
        label: "WSL setup",
        code: `# Windows PowerShell (Admin)
wsl --install -d Ubuntu-22.04

# Inside WSL: match the production stack
apt install docker.io php8.1 nginx mysql-server -y
docker run -d -p 8888:8888 -p 80:80 -p 443:443 aapanel/aapanel

# Test locally before touching production
php artisan serve`,
      },
    },
  ],
  metrics: [
    { metric: "SSL rating", before: "N/A", after: "A+ (98/100)", change: "✓" },
    { metric: "HTTPS enforced", before: "0%", after: "100%", change: "+100%" },
    { metric: "Certificate renewal", before: "Manual", after: "Automatic (90-day cron)", change: "✓" },
    { metric: "aaPanel admin access", before: "Public, default port", after: "IP-restricted, custom port", change: "✓" },
    { metric: "Database access", before: "Root, remote-accessible", after: "Scoped user, localhost-only", change: "✓" },
    { metric: "Dev / prod parity", before: "Windows ≠ Linux", after: "WSL mirrors production", change: "✓" },
    { metric: "OWASP posture", before: "F (multiple risks)", after: "A (SSL/TLS hardened)", change: "✓" },
  ],
  technicalDetails: [
    { label: "Certificate authority", value: "Let's Encrypt (auto-renewing every 90 days)" },
    { label: "Domains secured", value: "schoolmia.com, panel.schoolmia.com, studentweb.schoolmia.com" },
    { label: "SSL/TLS protocol", value: "TLSv1.2 + TLSv1.3" },
    { label: "Cipher strength", value: "256-bit AES" },
    { label: "SSH (22)", value: "IP-restricted to known location only" },
    { label: "HTTP (80)", value: "Open — redirects to HTTPS" },
    { label: "HTTPS (443)", value: "Open — encrypted traffic only" },
    { label: "aaPanel (8888 → 9234)", value: "IP-restricted + moved to a custom port" },
    { label: "MySQL (3306)", value: "Localhost-only, zero remote access" },
  ],
  technologies: [
    "SSL/TLS",
    "Let's Encrypt",
    "Nginx",
    "aaPanel",
    "Linux / Ubuntu",
    "MySQL Hardening",
    "WSL",
    "Docker",
    "Security Headers",
    "Firewall Rules",
  ],
  lessonsLearned: [
    "SSL/TLS is non-negotiable — even small projects need HTTPS from day one.",
    "Environment parity matters — WSL closed the gap between Windows dev and Linux prod before it caused an incident.",
    "Defense in depth — SSL, headers, firewall, and database isolation each cover a different failure mode.",
    "Automation prevents disasters — auto-renewal means certificates never silently expire.",
    "Document the security baseline — it's what makes the setup auditable and reproducible later.",
  ],
  skillsDemonstrated: [
    "Server Hardening",
    "SSL/TLS Configuration",
    "Nginx Administration",
    "Database Security",
    "Firewall Configuration",
    "Dev/Prod Environment Parity",
  ],
};

export const CASE_STUDIES: CaseStudy[] = [DC_DELIVERY_CASE_STUDY, AAPANEL_SECURITY_CASE_STUDY];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}
