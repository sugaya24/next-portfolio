import {
  Box,
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
    <Box>
      <Box
        p={4}
        bg={useColorModeValue(`white`, `gray.800`)}
        boxShadow={useColorModeValue(`base`, `dark-lg`)}
        rounded={`lg`}
      >
        <Box
          rounded={`lg`}
          pos={`relative`}
          zIndex={0}
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
        >
          <Image
            rounded={`lg`}
            width={`100%`}
            objectFit={`contain`}
            src={src}
          />
        </Box>
        <Stack mt={`32px`} align={`center`}>
          <Text color={`gray.500`} fontSize={`sm`}>
            tags...
          </Text>
          <Heading fontSize={`xl`} fontFamily={`body`} fontWeight={500}>
            {title}
          </Heading>
          <Stack direction={`row`} align={`center`}></Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Work;
