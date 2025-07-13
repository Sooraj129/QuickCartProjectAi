import type { LucideIcon } from "lucide-react";

 export interface AiTool {
  title: string;
  description: string;
  Icon: LucideIcon;
  bg: {
    from: string;
    to: string;
  };
  path: string;
}

 export interface Testimonial {
  image: string;
  name: string;
  title: string;
  content: string;
  rating: number;
}

 export interface Creation {
  id: number;
  user_id: string;
  prompt: string;
  content: string;
  type: string;
  publish: boolean;
  likes: string[];
  created_at: string;
  updated_at: string;
  __v?: number;
}
