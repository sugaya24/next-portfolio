import React from 'react';
import {
  Box,
  Heading,
  Center,
  Image,
  Text,
  Grid,
  GridItem,
  Link as CuiLink,
  useBreakpointValue,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { FaFileAlt, FaLinkedin } from 'react-icons/fa';
import { colors } from 'lib/theme';
import { skills } from '@/components/About';
import Head from 'next/head';

const profileSrc = `/images/profile.jpeg`;

const ProfileSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Grid w={`100%`} h={`100%`} templateColumns={{ base: `1`, md: `1fr 2fr` }}>
      <Center>
        <GridItem
          mx={{ base: `16`, md: `4` }}
          my={{ base: `8`, md: `4` }}
          borderRadius={`50%`}
          bgGradient={colors.headingGradient}
        >
          <Image p={`6px`} src={profileSrc} borderRadius={`50%`} />
        </GridItem>
      </Center>
      <Center>
        <GridItem mx={`20px`}>
          <Heading mb={{ base: `5`, md: `10` }}>
            {isMobile ? (
              <>
                Hello!
                <br />
                I&apos;m Yuki Sugaya.
              </>
            ) : (
              <>Hello! I&apos;m Yuki Sugaya.</>
            )}
          </Heading>
          <Text mb={`5`}>
            I&apos;m a Front-end Developer and primarily focus on writing clean,
            elegant and efficient code. Specialize in React.js.
          </Text>
          <Box mb={10}>{skills}</Box>
          <HStack>
            <CuiLink
              mr={`2`}
              href={`https://docs.google.com/document/d/1l_A6gOWWpp_sb9BMtj42Wz4LBzcXWK06zB_LLY84u5A/edit`}
            >
              <HStack textDecor={`underline`}>
                <Icon as={FaFileAlt} />
                <Heading as={`h3`} size={`md`}>
                  RESUME
                </Heading>
              </HStack>
            </CuiLink>
            <CuiLink href={`https://www.linkedin.com/in/yukisugaya/`}>
              <HStack>
                <Icon as={FaLinkedin} />
                <Heading as={`h3`} size={`md`} textDecor={`underline`}>
                  LinkedIn
                </Heading>
              </HStack>
            </CuiLink>
          </HStack>
        </GridItem>
      </Center>
    </Grid>
  );
};

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About | Yuki Sugaya Portfolio</title>
        <meta name="description" content="Yuki Sugaya Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box h={`100%`} pb={`16`} display={`flex`} flexDir={`column`}>
        <Box w={`100%`}>
          <Heading
            as={`h2`}
            p={2}
            bgClip={`text`}
            bgGradient={colors.headingGradient}
          >
            About Me
          </Heading>
        </Box>
        <Center w={`100%`} h={`100%`} flex={{ base: `0`, md: `1 0 auto` }}>
          <ProfileSection />
        </Center>
      </Box>
    </>
  );
};

export default AboutPage;
