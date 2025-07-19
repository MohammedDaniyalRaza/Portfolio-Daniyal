import { NextResponse } from 'next/server';

const profileData = {
  name: "Mohammed Daniyal Raza",
  title: "Frontend Engineer & Startup Founder",
  bio: "Passionate frontend engineer and founder of UXU Tech, creating innovative digital experiences.",
  country: "Pakistan",
  email: "mohammeddaniyalr@gmail.com",
  phone: "+92 3347725261",
  location: "Karachi, Pakistan",
  website: "https://daniyalraza.dev",
  social: {
    linkedin: "https://www.linkedin.com/in/mohammed-daniyal-raza-aa26b22ba/",
    github: "https://github.com/MohammedDaniyalRaza/",
    twitter: "https://x.com/daniyalrazaqa",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    medium: "https://mohammeddaniyalraza.medium.com/"
  },
  about: "I'm a self-taught Frontend Developer and the founder of UXU Tech, passionate about building clean and user-friendly web interfaces. I specialize in HTML, CSS, JavaScript, TypeScript, and modern frameworks like React and Next.js. I do my best for everything.",
  highlights: [
    "Founder & CEO of UXU Tech Startup",
    "2+ years of Frontend Development Experience", 
    "Expert in React, Next.js, and TypeScript",
    "UI/UX Design Specialist",
    "Full-Stack Development Capabilities",
    "Team Leadership & Project Management"
  ],
  experience: [
    {
      id: 1,
      title: "Founder & CEO",
      company: "UXU Tech",
      period: "2025 - Present",
      location: "Karachi, Pakistan",
      description: "Founded UXU Tech to offer web development and UI/UX services to small businesses and startups. Currently working solo or in collaboration to deliver clean, responsive, and functional websites.",
      achievements: [
        "Completed the first official client project under UXU Tech",
        "Started solo with a laptop, ChatGPT, and a cup of coffee — still building brick by brick",
        "Took the first step towards building a profitable web agency",
        "Handled everything from UI/UX to deployment — solo",
      ]
    },
    {
      id: 2,
      title: "Freelance & Non-Profit Developer",
      company: "Self-employed",
      period: "2024 - 2025",
      location: "Remote / Karachi",
      description: "Started by building free websites for friends, local shops, and small businesses to practice real-world development and help the community.",
      achievements: [
        "Completed 5+ non-profit websites with real users",
        "Worked without payment to gain experience and build trust",
        "Learned client communication and project delivery under pressure",
        "Used modern stacks like React, Vite, Tailwind, and Git"
      ]
    },
    {
      id: 3,
      title: "Customer Service Representative (Team Leader)",
      company: "MCS Digitizing",
      period: "2025 - Present",
      location: "Karachi, Pakistan",
      description: "Worked as a CSR and later promoted to Team Leader at a digitizing company providing embroidery and vector services to international clients.",
      achievements: [
        "Handled client queries through call, chat, and email with professionalism",
        "Led a small team of CSRs to meet daily targets",
        "Improved customer satisfaction and reduced response time",
        "Gained valuable experience in communication and team management"
      ]
    }
    
  ],
  education: [
    {
      id: 1,
      degree: "Matriculation in Computer Science",
      institution: "Dehli School",
      period: "Completed 2023",
      location: "Karachi, Pakistan",
      description: "Completed matriculation with a focus on science and computer studies. Actively participated in tech-related activities and courses.",
      gpa: "N/A",
      coursework: [
        "Computer Science",
        "Physics",
        "Mathematics",
        "Chemistry"
      ]
    }
  ],
  skills: {
    frontend: [
      "React.js", "Next.js", "TypeScript", "JavaScript (ES6+)",
      "HTML5", "CSS3", "Tailwind CSS", "Sass/SCSS", "ShadCN",
      "Redux", "Zustand", "React Query", "Framer Motion"
    ],
    backend: [
      "Node.js", "Express.js", "MongoDB",
      "Supabase", "Firebase", "REST APIs"
    ],
    tools: [
      "Git & GitHub", "VS Code", "Figma", "Adobe XD",
      "Webpack", "Vite", "Docker", "Vercel", "Netlify", "Cursor", "Bolt.new", "Chat GPT", "Kimi"
    ],
    soft: [
      "Team Leadership", "Project Management", "UI/UX Design",
      "Problem Solving", "Communication", "Agile/Scrum"
    ]
  },
  projects: [
    {
      id: 1,
      name: "UXU Tech Platform",
      description: "A full-fledged business website for UXU Tech, showcasing services, portfolio, contact details, FAQs, and about section to attract and engage clients.",
      tech: ["React Js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      status: "Live",
      url: "https://uxutech.vercel.app",
    },    
    {
      id: 2,
      name: "Password Strength Checker",
      description: "A Python-based web app built with Streamlit that evaluates password strength based on length, character variety, and common password patterns.",
      tech: ["Python", "Streamlit"],
      status: "Live",
      url: "https://passwordstrengthchecked.streamlit.app/",
      github: "https://github.com/daniyalraza/password-strength-checker"
    },    
    {
      id: 3,
      name: "Pizza Delivery App",
      description: "A full-stack pizza delivery application with a robust admin panel for order management, menu customization, and real-time delivery tracking.",
      tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Clerk", "COD"],
      status: "Completed",
      url: "https://depizzatownstore.vercel.app/",
      github: "https://github.com/MohammedDaniyalRaza/depizzatown-store"
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Noman Farooq",
      position: "CEO at CYT Racing Company",
      content: "UXU Tech delivered the quality we were expecting and more. Their attention to detail and commitment throughout the project was truly impressive. Highly recommended!",
      rating: 5
    },    
    {
      id: 2,
      name: "Junaid Rana",
      position: "Founder of Pizza Town",
      content: "Even as a non-profit client, I received full dedication from Mohammed and team. They built a beautiful full-stack website with real passion and professionalism.",
      rating: 5
    }
  
  ],
  stats: {
    projectsCompleted: 50,
    clientsSatisfied: 5,
    yearsExperience: 2,
    teamSize: 3
  },
  availability: {
    status: "Available for new projects",
    nextAvailable: "January 2025",
    workingHours: "24/7 hours",
    responseTime: "Within 24 hours"
  },
  lastUpdated: new Date().toISOString()
};

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: profileData,
      timestamp: new Date().toISOString(),
      version: "1.0.0"
    });
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: "Failed to fetch profile data",
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
