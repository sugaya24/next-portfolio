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
} from '@chakra-ui/react';

export const skills = (
  <Box>
    <Heading as={`h4`} size={`md`} textAlign={`left`} pos={`relative`}>
      Skills
    </Heading>
    <List pt={`2`}>
      <ListItem mb={`2`}>
        🚀 TypeScript, React.js, Next.js, Node.js, Express.js, MongoDB, Firebase
      </ListItem>
      <ListItem>🎨 Tailwind CSS, Chakra UI, Figma</ListItem>
    </List>
  </Box>
);

const About = () => {
  const { colorMode } = useColorMode();

  return (
    <Box my={16}>
      <Grid templateColumns={{ base: `1fr`, md: `2fr 1fr` }}>
        <Center px={4} flexDirection={`column`}>
          <Heading as={`h2`} w={`full`} py={{ base: 2, md: 0 }}>
            Yuki Sugaya
          </Heading>
          <Text as={`p`} w="full" color={`gray`} fontWeight="semibold">
            Frontend Developer
          </Text>
          <Box pt={6} display={{ base: `none`, md: `block` }}>
            {skills}
          </Box>
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
