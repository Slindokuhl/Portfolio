export const YOUTUBE_CHANNEL = {
  name: "CodeSlic",
  handle: "@SlicAtle",
  url: "https://www.youtube.com/@SlicAtle",
  subscribeUrl: "https://www.youtube.com/@SlicAtle?sub_confirmation=1",
  tagline: "Eat. Sleep. Code. Repeat.",
  description:
    "Tech tutorials on coding, AI, DevOps, mobile and web apps, and cloud. Every video comes from a real project, not a toy demo, and shows the failed builds too, along with exactly how they get fixed.",
};

export interface YouTubeVideo {
  id: string;
  title: string;
  tags: string[];
}

export const YOUTUBE_VIDEOS: YouTubeVideo[] = [
  {
    id: "7fIxIrVUC70",
    title: "CI/CD Explained for Total Beginners | Web, Android & iOS (Real Project)",
    tags: ["CI/CD", "Beginners"],
  },
  {
    id: "Oi2z8ivNx8E",
    title: "Laravel CI/CD with GitHub Actions + FTP | Auto-Deploy to Shared Hosting (Real Project)",
    tags: ["Laravel", "GitHub Actions"],
  },
  {
    id: "hQDBZsAe0Is",
    title: "Flutter iOS CI/CD Without a Mac | GitHub Actions + Codemagic + TestFlight",
    tags: ["Flutter", "iOS", "Codemagic"],
  },
];
