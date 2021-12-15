import React from 'react';
import Link from 'next/link';
import {
  Box,
  Flex,
  Link as CuiLink,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  Heading,
  Container,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: Array<NavItem> = [
  {
    label: `Works`,
    href: `works`,
  },
  {
    label: `About`,
    href: `about`,
  },
  {
    label: `Posts`,
    href: `posts`,
  },
];

const DesktopNav = () => {
  const linkColor = useColorModeValue(`gray.600`, `gray.200`);
  const linkHoverColor = useColorModeValue(`gray.800`, `white`);

  return (
    <Stack
      direction={{ base: `row` }}
      display={{ base: `none`, md: `flex` }}
      alignItems={`center`}
      spacing={8}
    >
      {NAV_ITEMS.map(({ href, label }: NavItem) => (
        <Link key={href} href={`/${href}`}>
          <CuiLink
            fontSize={`lg`}
            fontWeight={600}
            lineHeight={`md`}
            color={linkColor}
            _hover={{ textDecoration: `none`, color: linkHoverColor }}
          >
            {label}
          </CuiLink>
        </Link>
      ))}
    </Stack>
  );
};

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box
      className={`navbar`}
      position={`fixed`}
      w={`100%`}
      bg={useColorModeValue(`#ffffff40`, `#20202380`)}
      px={4}
      css={{ backdropFilter: `blur(10px)` }}
      borderBottom={`1px`}
      borderColor={colorMode === `light` ? `gray.200` : `gray.700`}
    >
      <Container maxW={`container.lg`}>
        <Flex h={16} alignItems={`center`} justifyContent={`space-between`}>
          <Box>
            <Link href={`/`}>
              <CuiLink _hover={{ textDecoration: `none` }}>
                <Heading as={`h1`} size={`md`}>
                  YUKI SUGAYA
                </Heading>
              </CuiLink>
            </Link>
          </Box>

          <Flex alignItems={`center`}>
            <Stack direction={`row`} spacing={7}>
              <DesktopNav />
              <Button onClick={toggleColorMode}>
                {colorMode === `light` ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Box display={{ base: `inline-block`, md: `none` }}>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    icon={<HamburgerIcon w={5} h={5} />}
                    rounded={`full`}
                    variant={`ghost`}
                    cursor={`pointer`}
                    aria-label={`Toggle Navigation`}
                    minW={0}
                  />
                  <MenuList alignItems={`center`}>
                    {NAV_ITEMS.map(({ href, label }: NavItem) => (
                      <Link key={href} href={`/${href}`}>
                        <CuiLink>
                          <MenuItem>{label}</MenuItem>
                        </CuiLink>
                      </Link>
                    ))}
                  </MenuList>
                </Menu>
              </Box>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
