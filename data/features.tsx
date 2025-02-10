import {
  BrainCircuit,
  Briefcase,
  FileText,
  GraduationCap,
  LineChart,
  ScrollText,
  UserCheck,
  Users,
} from "lucide-react";

export const features = [
  {
    id: 0,
    icon: <BrainCircuit className="w-10 h-10 mb-4 text-primary" />,
    title: "AI-Powered Career Guidance",
    description:
      "Discover personalized career paths based on your strengths, interests, and educational background with AI-driven insights.",
  },
  {
    id: 1,
    icon: <LineChart className="w-10 h-10 mb-4 text-primary" />,
    title: "Real-Time Industry Insights",
    description:
      "Stay ahead with industry trends, salary data, and career growth opportunities tailored to your field.",
  },
  {
    id: 2,
    icon: <ScrollText className="w-10 h-10 mb-4 text-primary" />,
    title: "Smart Resume & Cover Letter Builder",
    description:
      "Create ATS-optimized resumes and professional cover letters with AI-powered suggestions.",
  },
  {
    id: 3,
    icon: <FileText className="w-10 h-10 mb-4 text-primary" />,
    title: "Interview Preparation Toolkit",
    description:
      "Practice with role-specific questions, mock interviews, and expert feedback to boost your confidence.",
  },
  {
    id: 4,
    icon: <Briefcase className="w-10 h-10 mb-4 text-primary" />,
    title: "Bursary & Scholarship Finder",
    type: "Coming Soon",
    description:
      "Easily explore and apply for bursaries and scholarships from various South African institutions.",
  },
  {
    id: 5,
    icon: <GraduationCap className="w-10 h-10 mb-4 text-primary" />,
    title: "University & TVET College Guide",
    type: "Coming Soon",
    description:
      "Access a comprehensive database of South African universities, TVET colleges, courses, and admission requirements.",
  },
  {
    id: 6,
    icon: <UserCheck className="w-10 h-10 mb-4 text-primary" />,
    title: "Mentorship & Career Coaching",
    type: "Coming Soon",
    description:
      "Connect with industry professionals and mentors for guidance on career growth and skill development.",
  },
  {
    id: 7,
    icon: <Users className="w-10 h-10 mb-4 text-primary" />,
    title: "Community & Networking",
    type: "Coming Soon",
    description:
      "Engage with like-minded individuals, educators, and employers in a collaborative learning environment.",
  },
];
