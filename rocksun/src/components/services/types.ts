import { LucideIcon } from 'lucide-react';

export interface ServiceType {
  icon: LucideIcon;
  title: string;
  description: string;
  details: Record<string, string[]>;
}