import { TWorkData } from '@/pages/works/[title]';
import {
  SiReact,
  SiRedux,
  SiMaterialui,
  SiNextdotjs,
  SiChakraui,
  SiTypescript,
  SiMongodb,
  SiSocketdotio,
} from 'react-icons/si';

export const worksData: TWorkData[] = [
  {
    id: 1,
    title: `Calendar`,
    link: {
      url: `https://react-calendar-c6a939.netlify.app/`,
      github: `https://github.com/sugaya24/react-calendar`,
    },
    slug: `calendar`,
    src: `/images/calendar_image.png`,
    stack: [`React`, `Redux`, `Material-UI`],
    stackIcon: [
      <SiReact key={`SiReact`} />,
      <SiRedux key={`SiRedux`} />,
      <SiMaterialui key={`SiMaterialui`} />,
    ],
    description: `It's a simple calendar app made by React that allow to register, edit, and delete schedules. It uses Redux to manage state. It also displays the date of the month other than today. It has to deal with the number of weeks displayed differently depending on the month. It also has to deal with the height of the component depending on the number of weeks.`,
  },
  {
    id: 2,
    title: `Wordle Clone`,
    link: {
      url: `https://wordle-clone-gamma.vercel.app/`,
      github: `https://github.com/sugaya24/wordle-clone`,
    },
    slug: `wordle-clone`,
    src: `/images/wordle-clone_image.png`,
    stack: [`React`, `TypeScript`, `Chakra UI`],
    stackIcon: [
      <SiReact key={`SiReact`} />,
      <SiTypescript key={`SiTypescript`} />,
      <SiChakraui key={`SiChakraui`} />,
    ],
    description: `It is a clone of the popular wordle game. It uses React Hooks to manage state and useEffect to manage lifecycle. It uses TypeScript to type check the code.`,
  },
  {
    id: 3,
    title: `Realtime Chat`,
    link: {
      url: `https://next-socketio-chat.herokuapp.com/`,
      github: `https://github.com/sugaya24/next-socketio-chat`,
    },
    slug: `realtime-chat`,
    src: `/images/next-socketio-chat_image.png`,
    stack: [
      `React`,
      `Next.js`,
      `TypeScript`,
      `Chakra UI`,
      `MongoDB`,
      `Socket.io`,
      `NextAuth`,
    ],
    stackIcon: [
      <SiReact key={`SiReact`} />,
      <SiNextdotjs key={`SiNextdotjs`} />,
      <SiTypescript key={`SiTypescript`} />,
      <SiChakraui key={`SiChakraui`} />,
      <SiMongodb key={`SiMongodb`} />,
      <SiSocketdotio key={`SiSocketio`} />,
    ],
    description: `It is a realtime chat app that uses Socket.io and NextAuth. It uses React Hooks to manage state and useEffect to manage lifecycle. It uses TypeScript to type check the code.`,
  },
  {
    id: 4,
    title: `Crypto Dashboard`,
    link: {
      url: `https://crypto-dashboard-gamma.vercel.app/`,
      github: `https://github.com/sugaya24/crypto-dashboard`,
    },
    slug: `crypto-dashboard`,
    src: `/images/crypto-dashboard_image.png`,
    stack: [`React`, `Next.js`, `TypeScript`, `Chakra UI`],
    stackIcon: [
      <SiReact key={`SiReact`} />,
      <SiNextdotjs key={`SiNextdotjs`} />,
      <SiTypescript key={`SiTypescript`} />,
      <SiChakraui key={`SiChakraui`} />,
    ],
    description: `It is a dashboard that shows the current price of cryptocurrencies. It uses React Hooks to manage state and useEffect to manage lifecycle. It uses TypeScript to type check the code.`,
  },
];
