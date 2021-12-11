import { colors } from '../../lib/theme';
import { Box, Heading, Grid } from '@chakra-ui/react';
import React from 'react';
import Work from './Work';

const workData = [
  {
    title: `Calender`,
    src: `/images/calendar_image.png`,
  },
  {
    title: `Chat`,
    src: `/images/react_firebase_chat_image.png`,
  },
  {
    title: `Weather Forecast`,
    src: `/images/weather_image.png`,
  },
  {
    title: `Twitter Clone`,
    src: `/images/react_twitter_clone_image.png`,
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
      >
        {workData.map(({ title, src }) => (
          <Work key={title} title={title} src={src} />
        ))}
      </Grid>
    </Box>
  );
};

export default Works;
