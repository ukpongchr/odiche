import { 
  Heart, 
  Brain, 
  Bone, 
  Eye, 
  FileText, 
  Video, 
  Clock, 
  CreditCard, 
  Users, 
  ShieldCheck,
  Stethoscope,
  Activity,
  Plus
} from 'lucide-react';
import { Service, Doctor, Testimonial, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'General Emergency',
    description: '24/7 rapid response for critical health situations with fully equipped ambulances and emergency staff.',
    icon: Activity
  },
  {
    id: 's2',
    title: 'Obstetrics & Gynaecology',
    description: 'Comprehensive maternal care, prenatal services, and women\'s health management.',
    icon: Heart
  },
  {
    id: 's3',
    title: 'Paediatrics',
    description: 'Specialized medical care for infants, children, and adolescents in a child-friendly environment.',
    icon: Users
  },
  {
    id: 's4',
    title: 'Surgery',
    description: 'Modern surgical procedures performed by expert surgeons with advanced post-op care.',
    icon: Stethoscope
  },
  {
    id: 's5',
    title: 'Laboratory Services',
    description: 'Accurate and timely diagnostic testing with our state-of-the-art automated lab equipment.',
    icon: FileText
  },
  {
    id: 's6',
    title: 'Pharmacy',
    description: 'Fully stocked in-house pharmacy ensuring authentic medications are always available.',
    icon: Plus
  }
];

export const FEATURES = [
  {
    title: 'Electronic Health Records',
    description: 'We maintain secure digital records to ensure seamless care and history tracking.',
    icon: FileText
  },
  {
    title: 'Telemedicine Consultations',
    description: 'Consult with our doctors remotely when you cannot make it to the hospital.',
    icon: Video
  },
  {
    title: '24/7 Availability',
    description: 'Our emergency unit and pharmacy are open round the clock for your needs.',
    icon: Clock
  },
  {
    title: 'Flexible Payment Options',
    description: 'We accept various payment methods including health insurance and transfers.',
    icon: CreditCard
  },
  {
    title: 'Community Focused',
    description: 'Dedicated to serving families in Umuahia Village, Obingwa, and surrounding areas.',
    icon: Users
  },
  {
    title: 'Patient Privacy',
    description: 'Strict adherence to medical confidentiality and patient data protection.',
    icon: ShieldCheck
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. Chioma Okeke',
    specialty: 'Chief Medical Director',
    image: 'https://images.unsplash.com/photo-1576669801775-ff43c5ab549d?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Over 20 years of experience in General Medicine and Hospital Management.'
  },
  {
    id: 'd2',
    name: 'Dr. Emeka Okafor',
    specialty: 'Surgeon',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Specialist in general surgery with a focus on minimally invasive procedures.'
  },
  {
    id: 'd3',
    name: 'Dr. Adanna Nwosu',
    specialty: 'Paediatrician',
    image: 'https://images.unsplash.com/photo-1643297654416-0c1327fa2e60?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Dedicated to child healthcare and developmental wellness.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Chinedu I.',
    role: 'Patient',
    content: "The emergency team was incredibly fast and professional. They saved my father's life during a crisis. Highly recommended for anyone in Obingwa.",
    rating: 5
  },
  {
    id: 't2',
    name: 'Nneka U.',
    role: 'Maternity Patient',
    content: "My delivery experience at Odiche was wonderful. The nurses were so caring and the environment was very clean.",
    rating: 5
  },
  {
    id: 't3',
    name: 'Samuel O.',
    role: 'Surgery Patient',
    content: "I had a minor surgery here and the recovery was smooth. The doctors explained everything clearly.",
    rating: 5
  }
];