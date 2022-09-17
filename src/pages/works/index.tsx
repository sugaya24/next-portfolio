import React from 'react';
import Work from '@/components/Work';
import { worksData } from '@/data/worksData';
import { Box, Heading, Grid } from '@chakra-ui/react';
import { colors } from 'lib/theme';
import Head from 'next/head';

const WorksPage = () => {
  return (
    <>
      <Head>
        <title>Works | Yuki Sugaya Portfolio</title>
        <meta name="description" content="Yuki Sugaya Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box mb={16}>
        <Heading
          as={`h2`}
          px={2}
          mb={8}
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
          {worksData.map(({ title, src, slug, stackIcon }) => (
            <Work
              key={title}
              title={title}
              src={src}
              slug={slug}
              stackIcon={stackIcon}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default WorksPage;
