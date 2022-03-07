import {
  Box,
  Center,
  useColorModeValue,
  useColorMode,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';

type Props = {
  title: string;
  src: string;
};

const Work: React.FC<Props> = ({ title, src }) => {
  const { colorMode } = useColorMode();

  return (
    <Center p={4}>
      <Box
        role={`group`}
        p={4}
        maxW={`330px`}
        w={`full`}
        bg={useColorModeValue(`white`, `gray.800`)}
        boxShadow={`2xl`}
        rounded={`lg`}
        pos={`relative`}
        zIndex={-1}
      >
        <Box
          rounded={`lg`}
          pos={`relative`}
          _after={
            colorMode === `dark`
              ? {
                  content: `""`,
                  w: `full`,
                  h: `full`,
                  pos: `absolute`,
                  top: 3,
                  left: 0,
                  backgroundImage: `url(${src})`,
                  filter: `blur(15px)`,
                  zIndex: -1,
                  backgroundSize: `cover`,
                }
              : {}
          }
          _groupHover={{
            _after: {
              filter: `blur(20px)`,
            },
          }}
        >
          <Image
            rounded={`lg`}
            width={`100%`}
            objectFit={`contain`}
            src={src}
          />
        </Box>
        <Stack pt={10} align={`center`}>
          <Text color={`gray.500`} fontSize={`sm`}>
            tags...
          </Text>
          <Heading fontSize={`xl`} fontFamily={`body`} fontWeight={500}>
            {title}
          </Heading>
          <Stack direction={`row`} align={`center`}></Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default Work;
