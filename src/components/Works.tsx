import { colors } from '../../lib/theme';
import {
  Box,
  Heading,
  Grid,
  Button,
  ButtonGroup,
  Center,
  Icon,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import Work from './Work';
import { worksData } from '@/data/worksData';
import { AiOutlineRight } from 'react-icons/ai';

const Works = () => {
  return (
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
        mb={8}
        templateColumns={{ base: `repeat(1,1fr)`, sm: `repeat(2,1fr)` }}
        gap={`6`}
      >
        {worksData.slice(0, 4).map(({ title, src, slug, stackIcon }) => (
          <Work
            key={title}
            title={title}
            src={src}
            slug={slug}
            stackIcon={stackIcon}
          />
        ))}
      </Grid>
      <Center mb={`8`}>
        <Link href={`/works`} _hover={{ textDecor: `none` }}>
          <ButtonGroup>
            <Button
              variant={`ghost`}
              colorScheme={`pink`}
              textTransform={`uppercase`}
            >
              More &nbsp; <Icon as={AiOutlineRight} />
            </Button>
          </ButtonGroup>
        </Link>
      </Center>
    </Box>
  );
};

export default Works;
