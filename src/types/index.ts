export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  profession: string;
  company?: string;
  source: string;
  plan?: string;
  created_at: string;
}

export interface Profession {
  id: string;
  label: string;
  emoji: string;
  description: string;
  skills: string[];
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  slug: string;
}

export interface SetupStep {
  number: number;
  title: string;
  description: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

export interface DemoMessage {
  role: "user" | "assistant";
  content: string;
}

export interface DemoChat {
  professionId: string;
  messages: DemoMessage[];
}
