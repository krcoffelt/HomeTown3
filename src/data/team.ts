import { TeamMember } from '@/types/team';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Lauren Thompson',
    role: 'Team Lead',
    department: 'Leadership',
    bio: 'Blends aesthetics with functionality to create designs that not only look great but drive results.',
    image: '/images/team/lauren-thompson.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/lauren-thompson',
      email: 'lauren@hometown.com'
    },
    expertise: ['Design Strategy', 'Team Leadership', 'Client Relations'],
    yearsOfExperience: 8
  },
  {
    id: '2',
    name: 'Michael Wilson',
    role: 'Full Stack Developer',
    department: 'Development',
    bio: 'Transforms ideas into seamless, high-performing websites with clean code and attention to detail.',
    image: '/images/team/michael-wilson.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/michael-wilson',
      github: 'https://github.com/michaelwilson',
      email: 'michael@hometown.com'
    },
    expertise: ['React', 'Node.js', 'Database Design', 'API Development'],
    yearsOfExperience: 6
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    role: 'Creative Director',
    department: 'Creative',
    bio: 'Crafts compelling narratives that connect with audiences and strengthen brand identity.',
    image: '/images/team/sarah-johnson.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sarah-johnson',
      twitter: 'https://twitter.com/sarahjohnson',
      email: 'sarah@hometown.com'
    },
    expertise: ['Brand Strategy', 'Visual Design', 'Creative Direction'],
    yearsOfExperience: 10
  },
  {
    id: '4',
    name: 'Christopher Miller',
    role: 'UX/UI Designer',
    department: 'Design',
    bio: 'Keeps everything on track, ensuring smooth collaboration and timely delivery.',
    image: '/images/team/christopher-miller.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/christopher-miller',
      twitter: 'https://twitter.com/christophermiller',
      email: 'christopher@hometown.com'
    },
    expertise: ['User Experience', 'Interface Design', 'Prototyping', 'User Research'],
    yearsOfExperience: 5
  }
];
