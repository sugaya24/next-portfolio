import { TWorkData } from '@/pages/works/[title]';
import { Box, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react';
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
  SiPrisma,
} from 'react-icons/si';

const colorItem = (color: string) => {
  return (
    <WrapItem>
      <Box w="full" display="flex" flexDir="column" justifyContent="center">
        <Box w="full" display="flex" justifyContent="center">
          <Box w={10} h={10} bgColor={color} rounded="full"></Box>
        </Box>
        <Text textColor="#102326" fontStyle="italic" fontWeight="semi-bold">
          {color}
        </Text>
      </Box>
    </WrapItem>
  );
};

export const worksData: TWorkData[] = [
  {
    id: 7,
    title: `Pomodoro Timer`,
    link: {
      url: `https://pomodoro-timer-seven-gilt.vercel.app`,
      github: `https://github.com/sugaya24/pomodoro-timer`,
    },
    slug: `pomodoro-timer`,
    src: `/images/pomodoro-timer_image.png`,
    stack: [
      `Next.js`,
      `TypeScript`,
      `Tailwind CSS`,
      `Firebase auth`,
      `MongoDB`,
      `Prisma`,
    ],
    stackIcon: [
      <SiNextdotjs key={`SiNextdotjs`} />,
      <SiTypescript key={`SiTypescript`} />,
      <SiTailwindcss key={`SiTailwindcss`} />,
      <SiFirebase key={`SiFirebase`} />,
      <SiMongodb key={`MongoDB`} />,
      <SiPrisma key={`Prisma`} />,
    ],
    description: (
      <>
        <Box mb={8}>
          <Heading as="h1" mb={4}>
            Description
          </Heading>
          <Text>
            Simple Pomodoro By setting a time, you can focus on a task you set.
            You can keep track of the number of rounds you have completed so
            far. Focus and Break time can also be set. You can also use it
            without logging in.
          </Text>
        </Box>
        <Box mb={8}>
          <Heading as="h1" mb={4}>
            The Challenges
          </Heading>
          <Box mb={2}>
            <Heading as="h2" size="md">
              Building REST API
            </Heading>
            <Text>
              Created an API using API routes, a Next.js feature, and designed a
              RESTful API to manage Users and Tasks.
            </Text>
          </Box>
          <Box mb={2}>
            <Heading as="h2" size="md">
              Integration using MongoDB and Prisma
            </Heading>
            <Text>
              Prisma was adopted as the MongoDB ORM. The operation is intuitive
              and easy to understand, and I was able to proceed while
              maintaining a quick development speed with an awareness of
              type-safe development.
            </Text>
          </Box>
          <Box mb={2}>
            <Heading as="h2" size="md">
              Designing UI focused on Modal
            </Heading>
            <Text>
              What I tried to do with this application was to reduce the number
              of pages and screen transitions as much as possible. To achieve
              this, I decided to use Modal, which is basically used for adding
              Tasks and setting Timer.
            </Text>
          </Box>
        </Box>
        <Box mb={8}>
          <Heading as="h1" mb={4}>
            Designing
          </Heading>
          <Heading as="h2" size="md" mb={2}>
            Color Theme
          </Heading>
          <Box
            w="full"
            h="auto"
            p={4}
            display="flex"
            justifyContent="center"
            bgColor="white"
            boxShadow="md"
            rounded="md"
            textColor="black"
          >
            <Wrap spacing={4} justify="center">
              {colorItem(`#102326`)}
              {colorItem(`#2B3D3C`)}
              {colorItem(`#FFF4E6`)}
              {colorItem(`#22B595`)}
              {colorItem(`#C6570D`)}
            </Wrap>
          </Box>
        </Box>
      </>
    ),
  },
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
