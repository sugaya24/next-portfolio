import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ReactNode } from 'react';
import { IconBaseProps } from 'react-icons/lib';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue(`blackAlpha.100`, `whiteAlpha.100`)}
      rounded={`full`}
      w={8}
      h={8}
      cursor={`pointer`}
      as={`a`}
      href={href}
      display={`inline-flex`}
      alignItems={`center`}
      justifyContent={`center`}
      transition={`background 0.3s ease`}
      _hover={{
        bg: useColorModeValue(`blackAlpha.200`, `whiteAlpha.200`),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

type MEDIA_ITEM = {
  name: string;
  href: string;
  iconBase: IconBaseProps;
};

const MEDIA_ITEMS: Array<MEDIA_ITEM> = [
  {
    name: `GitHub`,
    href: `https://github.com/sugaya24`,
    iconBase: <FaGithub />,
  },
  {
    name: `LinkedIn`,
    href: `https://www.linkedin.com/in/yukisugaya/`,
    iconBase: <FaLinkedin />,
  },
];

const Footer = () => {
  return (
    <Box
      className={`footer`}
      bg={useColorModeValue(`gray.50`, `gray.900`)}
      color={useColorModeValue(`gray.700`, `gray.200`)}
    >
      <Container
        as={Stack}
        maxW={`container.lg`}
        py={4}
        direction={{ base: `column`, md: `row` }}
        spacing={4}
        justify={{ base: `center`, md: `space-between` }}
        align={{ base: `center`, md: `center` }}
      >
        <Text>© 2021 Yuki Sugaya. All rights reserved</Text>
        <Stack direction={`row`} spacing={6}>
          {MEDIA_ITEMS.map(({ name, href, iconBase }) => (
            <SocialButton key={name} label={name} href={href}>
              {iconBase}
            </SocialButton>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
