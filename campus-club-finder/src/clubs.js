import musicImage from './assets/music.jpg';

export const clubs = [
  {
    id: 'art',
    name: 'Art Club',
    image: '/images/art.jpg',
    shortDescription: 'Express your creativity through various art forms.',
    description: 'Explore painting, sketching, digital art, and participate in exhibitions with fellow artists.',
    events: [
      { name: 'Canvas Painting Session', date: '2025-06-28' },
      { name: 'Student Art Showcase', date: '2025-07-18' }
    ]
  },
  {
    id: 'coding',
    name: 'Coding Club',
    image: '/images/coding.jpg',
    shortDescription: 'Improve your programming skills through projects.',
    description: 'Collaborate on coding challenges, hackathons, and software development projects while learning new technologies.',
    events: [
      { name: 'JavaScript Workshop', date: '2025-06-25' },
      { name: 'Hackathon Prep', date: '2025-07-15' }
    ]
  },
  {
    id: 'music',
    name: 'Music Club',
    image: './assets/music.jpg',
    shortDescription: 'Jam, perform, and learn with music lovers.',
    description: 'Practice instruments, improve vocal skills, and perform at campus events throughout the year.',
    events: [
      { name: 'Open Mic Night', date: '2025-07-05' },
      { name: 'Summer Concert', date: '2025-07-26' }
    ],
  },
  {
    id: 'photography',
    name: 'Photography Club',
    image: '/images/photography.jpg',
    shortDescription: 'Capture moments and improve your photography skills.',
    description: 'Learn camera techniques, photo editing, and participate in photo walks and exhibitions.',
    events: [
      { name: 'Campus Photo Walk', date: '2025-06-30' },
      { name: 'Photography Exhibition', date: '2025-07-20' }
    ]
  },
  {
    id: 'robotics',
    name: 'Robotics Club',
    image: '/images/robotics.jpg',
    shortDescription: 'Build and code robots with fellow enthusiasts.',
    description: 'Learn about robotics, compete in competitions, and join hands-on workshops every month!',
    events: [
      { name: 'Intro to Arduino', date: '2025-06-20' },
      { name: 'Robotics Expo', date: '2025-07-12' }
    ]
  }
];