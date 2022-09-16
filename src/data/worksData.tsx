import { TWorkData } from '@/pages/works/[title]';
import { Text } from '@chakra-ui/react';
import {
  SiReact,
  SiRedux,
  SiMaterialui,
  SiNextdotjs,
  SiChakraui,
  SiTypescript,
  SiMongodb,
  SiSocketdotio,
  SiTailwindcss,
  SiFirebase,
  SiAmazons3,
} from 'react-icons/si';

export const worksData: TWorkData[] = [
  {
    id: 6,
    title: `Question Box`,
    link: {
      url: `https://job-interview-questions.vercel.app`,
      github: `https://github.com/sugaya24/job-interview-questions`,
    },
    slug: `question-box`,
    src: `/images/question-box_image.png`,
    stack: [
      `Next.js`,
      `TypeScript`,
      `Chakra UI`,
      `Firebase`,
      `MongoDB`,
      `Amazon S3`,
    ],
    stackIcon: [
      <SiNextdotjs key={`SiNextdotjs`} />,
      <SiTypescript key={`SiTypescript`} />,
      <SiChakraui key={`SiChakraui`} />,
      <SiFirebase key={`SiFirebase`} />,
      <SiMongodb key={`MongoDB`} />,
      <SiAmazons3 key={`Amazons3`} />,
    ],
    description: (
      <>
        <Text>
          This is an application built in Next.js that allows you to post
          questions and get answers. I used rich text editor framework named
          Lexical made by Facebook. It also has a search function, and is a
          simple CRUD application with the features you would expect to find in
          a simple CRUD application with the added functionality needed in a
          commonly found application.
          <br />
          You can also register users using firebase auth. The profile image is
          stored using Amazon S3 to store the object.
        </Text>
      </>
    ),
  },
  {
    id: 5,
    title: `Resume builder`,
    link: {
      url: `https://resume-builder-sigma-indol.vercel.app`,
      github: `https://github.com/sugaya24/resume-builder`,
    },
    slug: `resume-builder`,
    src: `/images/resume-builder_image.png`,
    stack: [`Next.js`, `TypeScript`, `Tailwind CSS`],
    stackIcon: [
      <SiNextdotjs key={`SiNextdotjs`} />,
      <SiTypescript key={`SiTypescript`} />,
      <SiTailwindcss key={`SiTailwindcss`} />,
    ],
    description: (
      <>
        <Text>
          This application allows you to create a resume by simply entering the
          required fields. The design is already done, so all you need to think
          about is entering your work history, personal information, and other
          information.
        </Text>
      </>
    ),
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
      `Next.js`,
      `TypeScript`,
      `Chakra UI`,
      `MongoDB`,
      `Socket.io`,
      `NextAuth`,
    ],
    stackIcon: [
      <SiNextdotjs key={`SiNextdotjs`} />,
      <SiTypescript key={`SiTypescript`} />,
      <SiChakraui key={`SiChakraui`} />,
      <SiMongodb key={`SiMongodb`} />,
      <SiSocketdotio key={`SiSocketio`} />,
    ],
    description: (
      <>
        <Text>
          It is a realtime chat app that uses Socket.io and NextAuth. It uses
          React Hooks to manage state and useEffect to manage lifecycle. It uses
          TypeScript to type check the code.
        </Text>
      </>
    ),
  },
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
    description: (
      <>
        <Text>
          It&apos;s a simple calendar app made by React that allow to register,
          edit, and delete schedules. It uses Redux to manage state. It also
          displays the date of the month other than today. It has to deal with
          the number of weeks displayed differently depending on the month. It
          also has to deal with the height of the component depending on the
          number of weeks.
        </Text>
      </>
    ),
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
    description: (
      <>
        <Text>
          It is a clone of the popular wordle game. It uses React Hooks to
          manage state and useEffect to manage lifecycle. It uses TypeScript to
          type check the code.
        </Text>
      </>
    ),
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
    stack: [`Next.js`, `TypeScript`, `Chakra UI`],
    stackIcon: [
      <SiNextdotjs key={`SiNextdotjs`} />,
      <SiTypescript key={`SiTypescript`} />,
      <SiChakraui key={`SiChakraui`} />,
    ],
    description: (
      <>
        <Text>
          It is a dashboard that shows the current price of cryptocurrencies. It
          uses React Hooks to manage state and useEffect to manage lifecycle. It
          uses TypeScript to type check the code.
        </Text>
      </>
    ),
  },
];
