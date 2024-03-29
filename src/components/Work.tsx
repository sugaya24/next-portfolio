import Link from 'next/link';
import {
  Box,
  useColorModeValue,
  useColorMode,
  Heading,
  Stack,
  Link as CuiLink,
  HStack,
  chakra,
} from '@chakra-ui/react';
import NextImage from 'next/image';

type Props = {
  title: string;
  src: string;
  slug: string;
  stackIcon: any;
};

const Work: React.FC<Props> = ({ title, src, slug, stackIcon }) => {
  const { colorMode } = useColorMode();
  const CustomImage = chakra(NextImage, {
    shouldForwardProp: (prop) =>
      [
        `width`,
        `height`,
        `objectFit`,
        `src`,
        `alt`,
        `placeholder`,
        `blurDataURL`,
      ].includes(prop),
  });

  return (
    <Box>
      <Link href={`/works/[title]`} as={`/works/${slug}`} passHref>
        <CuiLink>
          <Box
            p={4}
            bg={useColorModeValue(`white`, `gray.800`)}
            boxShadow={useColorModeValue(`base`, `dark-lg`)}
            rounded={`lg`}
            border={`1px solid ${useColorModeValue(`#ccc`, `#444`)}`}
            cursor={`pointer`}
            _hover={{
              border: `1px solid ${useColorModeValue(`#bbb`, `#888`)}`,
              boxShadow: useColorModeValue(`xl`, `sm`),
              transition: `all .2s ease-in-out`,
            }}
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
                      backgroundSize: `contain`,
                    }
                  : {}
              }
            >
              <CustomImage
                rounded={`lg`}
                width={`1600`}
                height={`1200`}
                objectFit={`contain`}
                src={src}
                alt={title}
                placeholder="blur"
                blurDataURL={src}
              />
            </Box>
            <Stack mt={`32px`} align={`center`}>
              <HStack>
                {stackIcon &&
                  stackIcon.map((icon: any, index: number) => (
                    <Box key={index}>{icon}</Box>
                  ))}
              </HStack>
              <Heading fontSize={`xl`} fontFamily={`body`} fontWeight={500}>
                {title}
              </Heading>
            </Stack>
          </Box>
        </CuiLink>
      </Link>
    </Box>
  );
};

export default Work;
