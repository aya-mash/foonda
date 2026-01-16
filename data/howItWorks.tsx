import { UserPlus, Search, FileEdit, Users, LineChart } from "lucide-react";

export const howItWorks = [
  {
    id: 0,
    title: "Personalized Onboarding",
    description:
      "Tell us about your academic background, interests, and career goals to receive tailored recommendations.",
    icon: <UserPlus className="w-8 h-8 text-primary" />,
  },
  {
    id: 1,
    title: "Explore Opportunities",
    description:
      "Discover universities, TVET colleges, bursaries, and career paths that match your aspirations.",
    icon: <Search className="w-8 h-8 text-primary" />,
  },
  {
    id: 2,
    title: "Build Your Future",
    description:
      "Create ATS-optimised CVs, craft compelling cover letters, and access career-enhancing resources.",
    icon: <FileEdit className="w-8 h-8 text-primary" />,
  },
  {
    id: 3,
    title: "Enhance Your Skills",
    description:
      "Prepare for interviews with AI-powered mock sessions and expert-curated role-specific questions.",
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    id: 4,
    title: "Stay Informed & Grow",
    description:
      "Track your progress, access real-time industry insights, and connect with mentors to elevate your career.",
    icon: <LineChart className="w-8 h-8 text-primary" />,
  },
];
