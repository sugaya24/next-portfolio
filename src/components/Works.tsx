import { colors } from '../../lib/theme';
import { Box, Heading, Grid } from '@chakra-ui/react';
import React from 'react';
import Work from './Work';

const workData = [
  {
    title: `Calendar`,
    src: `/images/calendar_image.png`,
  },
  {
    title: `Wordle Clone`,
    src: `/images/wordle-clone_image.png`,
  },
  {
    title: `Realtime Chat`,
    src: `/images/next-socketio-chat_image.png`,
  },
  {
    title: `Crypto Dashboard`,
    src: `/images/crypto-dashboard_image.png`,
  },
];

const Works = () => {
  return (
    <Box mb={16}>
      <Heading
        as={`h2`}
        p={2}
        bgClip={`text`}
        bgGradient={colors.headingGradient}
      >
        Works
      </Heading>
      <Grid
        className={`works`}
        as={`section`}
        mt={0}
        templateColumns={{ base: `repeat(1,1fr)`, sm: `repeat(2,1fr)` }}
        gap={`6`}
      >
        {workData.map(({ title, src }) => (
          <Work key={title} title={title} src={src} />
        ))}
      </Grid>
    </Box>
  );
};

export default Works;
