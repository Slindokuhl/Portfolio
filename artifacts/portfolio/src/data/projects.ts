export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Student Performance System",
    description:
      "Web-based system to track and manage student academic performance with real-time analytics. Built during university innovation lab internship.",
    tags: ["React", "Firebase", "Web App", "Analytics"],
    liveUrl: "https://studentmanagementsytem-96ac6.web.app/login",
    githubUrl: "https://github.com/slindokuhle",
    image: "/images/student-performance.png",
  },
  {
    title: "Attendify",
    description:
      "Smart attendance management app with QR code scanning and real-time reporting. Streamlines the attendance process for educators and events.",
    tags: ["Mobile First", "Firebase", "QR Code", "Real-time"],
    liveUrl: "https://scholarship-832f3.web.app/",
    githubUrl: "https://github.com/slindokuhle",
    image: "/images/attendify.png",
  },
  {
    title: "DC Delivery",
    description:
      "Food delivery platform connecting customers with local restaurants for fast, reliable delivery. Location-based ordering built on Laravel and Firebase, optimized for performance and cost at scale.",
    tags: ["Laravel", "Firebase", "Food Delivery", "Geolocation"],
    liveUrl: "https://dcdelivery.co.za",
    githubUrl: "https://github.com/slindokuhle",
    image: "/images/dc-delivery.png",
  },
  {
    title: "Crolix Meet",
    description:
      "Online meeting app for real-time team collaboration. Features high-quality video and audio streaming built on top of Agora SDK.",
    tags: ["WebRTC", "Agora SDK", "Online Meeting", "Collaboration"],
    liveUrl: "https://crolix-vmeetchat.vercel.app/",
    githubUrl: "https://github.com/slindokuhle",
    image: "/images/crolix-meet.png",
  },
];
