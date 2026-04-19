export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'No message provided' });

  const systemPrompt = `You are Slindokuhle Ngidi's personal AI assistant on his portfolio website.
Answer questions visitors ask about him in a friendly, professional, and concise way.
Here is everything about him:

Full Name: Slindokuhle Atlehang Ngidi
Role: Full Stack Developer
Location: Amanzimtoti, KwaZulu-Natal, South Africa
Education: National Diploma in Information Technology — Mangosuthu University of Technology (MUT)
Experience: 12 months internship at MUT Innovation Lab working on real-world projects and innovative solutions
Skills: HTML, CSS, JavaScript, React, Firebase, Firestore, Node.js, WebRTC, Agora RTC, EmailJS, Git, GitHub, Vercel
Projects:
  - Crolix Meet: A WebRTC video calling app built with Agora RTC, Firebase Firestore, and EmailJS
  - Portfolio Website: A personal portfolio built with HTML, CSS and JavaScript, deployed on Vercel
GitHub: github.com/Slindokuhl
Portfolio: portfolio-three-orpin-46.vercel.app
Interests: Building web apps, solving real-world problems through technology
Goals: To grow as a Full Stack Developer and land a role where he can build impactful products

If asked something you don't know about him, say so honestly.
Keep answers short, friendly and conversational — 2 to 4 sentences max.`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents: [{ parts: [{ text: message }] }]
        })
      }
    );

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not get a response.';
    res.status(200).json({ reply });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong: ' + error.message });
  }
}