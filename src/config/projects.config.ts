export interface Project {
  id: string;
  name: string;
  description: string;
  language: string;
  topics: string[];
  frontendUrl?: string;
  backendUrl?: string;
  liveUrl?: string;
  image?: string;
}

export const projectsData: Project[] = [
  {
    id: 'aureodream-dealsmaharaja',
    name: 'AureoDream & DealsMaharaja',
    description: 'Developed as part of my professional work, building cross-platform Flutter applications for Web, Android, and iOS with backend services, REST APIs, Firebase, and real-time functionality.',
    language: 'Flutter',
    topics: [
      'Flutter',
      'Dart',
      'Firebase',
      'WebSocket',
      'REST API',
    ],
    frontendUrl: '',
    backendUrl: '',
    liveUrl: 'https://www.aureodream.com',
    image: '/projects/aureodream.png',
  },

  {
    id: 'mocknode',
    name: 'MockNode',
    description:
      'REST API mocking platform designed to help developers create and test mock APIs for frontend and application development.',
    language: 'Flutter | Golang',
    topics: [
      'Golang',
      'REST API',
      'API Mocking',
      'Backend',
    ],
    frontendUrl: 'https://github.com/saifwork/mocknode-frontend',
    backendUrl: 'https://github.com/saifwork/mocknode-backend',
    liveUrl: 'https://www.mocknode.in/',
    image: '/projects/mocknode.png',
  },

  {
    id: 'meengle',
    name: 'Meengle',
    description:
      'Cross-platform social application with real-time communication using WebRTC and a Golang WebSocket signaling backend.',
    language: 'Flutter | Golang',
    topics: [
      'Flutter',
      'Dart',
      'WebRTC',
      'WebSocket',
      'Golang',
    ],
    frontendUrl: 'https://github.com/saifwork/meengle-frontend',
    backendUrl: 'https://github.com/saifwork/meengle',
    liveUrl: 'https://meengle.onrender.com',
    image: '/projects/meengle.png',
  },

  {
    id: 'melooha',
    name: 'Melooha',
    description:
      'Cross-platform application developed for Web, Android, and iOS with a focus on reusable components and production-ready application architecture.',
    language: 'Flutter',
    topics: [
      'Flutter',
      'Dart',
      'Cross Platform',
      'REST API',
    ],
    frontendUrl: '',
    backendUrl: '',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.melooha.app',
    image: '/projects/melooha.png',
  },

  {
    id: 'telegram-url-shortener',
    name: 'Telegram URL Shortener',
    description:
      'Golang microservice for URL shortening with link management and click statistics, using Redis caching for faster access and retrieval.',
    language: 'Golang',
    topics: [
      'Golang',
      'Microservices',
      'Redis',
      'REST API',
      'Telegram Bot',
    ],
    frontendUrl: '',
    backendUrl: 'https://github.com/saifwork/Url-Shortner-Service',
    liveUrl: 'https://web.telegram.org/k/#@ClipURLBot',
    image: '/projects/telegram-url-shortener.png',
  },

  {
    id: 'telegram-yt-downloader',
    name: 'Telegram YouTube Downloader',
    description:
      'Telegram bot for downloading YouTube videos with quality selection ranging from audio-only to 360p, 480p, 720p, and 1080p, using CLI tools for video processing.',
    language: 'Golang',
    topics: [
      'Golang',
      'Telegram Bot',
      'YouTube',
      'CLI',
      'Video Processing',
    ],
    frontendUrl: '',
    backendUrl: 'https://github.com/saifwork/Video-Downloader-Service',
    liveUrl: 'https://web.telegram.org/k/#@QuickVidLoaderBot',
    image: '/projects/telegram-yt-downloader.png',
  },
];