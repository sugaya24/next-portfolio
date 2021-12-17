import React from 'react';
import {
  Box,
  Heading,
  Image,
  Center,
  Grid,
  useColorMode,
  Container,
  Text,
  ListItem,
  List,
  ListIcon,
} from '@chakra-ui/react';
import { colors } from '../../lib/theme';
import { VscRocket } from 'react-icons/vsc';
import { FaPencilAlt } from 'react-icons/fa';

const skills = (
  <Box>
    <Heading as={`h4`} size={`md`} textAlign={`left`} pos={`relative`}>
      Skills
    </Heading>
    <List pt={`2`}>
      <ListItem mb={`2`}>
        <ListIcon as={VscRocket} />
        TypeScript, React, Next.js, Node.js, Express, MongoDB, Firebase
      </ListItem>
      <ListItem>
        <ListIcon as={FaPencilAlt} />
        Figma, Material-UI, Chakra-UI
      </ListItem>
    </List>
  </Box>
);

const About = () => {
  const { colorMode } = useColorMode();

  return (
    <Box mb={16}>
      <Heading
        as={`h2`}
        p={2}
        bgClip={`text`}
        bgGradient={colors.headingGradient}
      >
        About
      </Heading>
      <Grid templateColumns={{ base: `1fr`, md: `2fr 1fr` }}>
        <Center px={4} flexDirection={`column`}>
          <Heading as={`h2`} py={{ base: 4, md: 2 }}>
            Yuki Sugaya
          </Heading>
          <Text as={`p`} py={2} textAlign={`center`}>
            I&apos;m a Frontend Developer based in Vancouver.
          </Text>
          <Container pt={6} display={{ base: `none`, md: `block` }}>
            {skills}
          </Container>
        </Center>
        <Container
          className="image-box"
          pos={`relative`}
          mt={{ md: 16 }}
          p={4}
          w={`200px`}
          h={`200px`}
          zIndex={`-1`}
          _after={{
            transition: `all .3s ease`,
            content: `""`,
            w: `80%`,
            paddingTop: `80%`,
            pos: `absolute`,
            top: `10%`,
            left: `10%`,
            bgColor: colorMode === `dark` ? `#FFFAAA` : `none`,
            filter: `blur(2px)`,
            borderRadius: `50%`,
            zIndex: -1,
          }}
        >
          <Box>
            <Image src={`/images/work_at_cafe.png`} alt={`work at cafe`} />
          </Box>
        </Container>
      </Grid>
      <Container display={{ md: `none` }}>{skills}</Container>
    </Box>
  );
};

export default About;
