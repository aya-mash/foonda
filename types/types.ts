import { JsonValue } from "@prisma/client/runtime/library";

export type Industry = {
  id: string;
  name: string;
  subIndustries: string[];
};

// User Type
export type User = {
  id: string;
  clerkUserId: string;
  email: string;
  name?: string;
  imageUrl?: string;
  industry?: string;
  subIndustry?: string;
  industryInsight?: IndustryInsight;
  createdAt: Date;
  updatedAt: Date;
  bio?: string;
  experience?: number;
  skills: string[];
  assessments: Assessment[];
  resume?: Resume;
  coverLetter: CoverLetter[];
};

//Question Type
export type Question = {
  question: string;
  answer: string;
  userAnswer: string;
  isCorrect: boolean;
  explanation: string;
  correctAnswer: string;
};

// Assessment Type
export type Assessment = {
  id: string;
  userId: string;
  user: User;
  quizScore: number;
  questions: Question[];
  category: string;
  improvementTip?: string;
  createdAt: Date;
  updatedAt: Date;
};

// Resume Type
export type Resume = {
  id: string;
  userId: string;
  user: User;
  content: string;
  atsScore?: number;
  feedback?: string;
  createdAt: Date;
  updatedAt: Date;
};

// CoverLetter Type
export type CoverLetter = {
  id: string;
  userId: string;
  content?: string | null;
  jobDescription?: string | null;
  companyName: string;
  jobTitle: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
};

//Entry Type
export type Entry = {
  title: string;
  organization: string;
  startDate: string;
  endDate?: string;
  description: string;
  current: boolean;
};

type SalaryRange = JsonValue & {
  role: string;
  min: number;
  max: number;
  median: number;
  location?: string;
};

// IndustryInsight Type
export type IndustryInsight = {
  id: string;
  industry: string;
  users?: User[];
  salaryRanges: SalaryRange[];
  growthRate: number;
  demandLevel: "High" | "Medium" | "Low";
  topSkills: string[];
  marketOutlook: "Positive" | "Neutral" | "Negative";
  keyTrends: string[];
  recommendedSkills: string[];
  lastUpdated: Date;
  nextUpdate: Date;
};
