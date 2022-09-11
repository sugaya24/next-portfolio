import React from 'react';
import Link from 'next/link';
import {
  Box,
  Flex,
  Link as CuiLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  Container,
  Spacer,
  ButtonGroup,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: Array<NavItem> = [
  {
    label: `Home`,
    href: ``,
  },
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
    href: `posts/page/1`,
  },
];

const DesktopNav = () => {
  const linkColor = useColorModeValue(`gray.600`, `gray.200`);
  const linkHoverColor = useColorModeValue(`gray.800`, `white`);

  return (
    <Stack
      mr={8}
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
      zIndex={`10`}
    >
      <Container maxW={`container.md`} p={0}>
        <Flex h={16} alignItems={`center`} justifyContent={`space-between`}>
          <Spacer />

          <Flex alignItems={`center`}>
            <Stack direction={{ base: `row-reverse`, md: `row` }} spacing={0}>
              <DesktopNav />

              <Box display={{ base: `inline-block`, md: `none` }}>
                <Menu>
                  <MenuButton
                    m={0}
                    as={IconButton}
                    icon={<HamburgerIcon w={5} h={5} />}
                    rounded={`full`}
                    variant={`ghost`}
                    cursor={`pointer`}
                    aria-label={`Toggle Navigation`}
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
              <ButtonGroup mr={4}>
                <IconButton
                  className="some------"
                  mr={4}
                  onClick={toggleColorMode}
                  rounded="full"
                  variant="outline"
                  icon={colorMode === `light` ? <MoonIcon /> : <SunIcon />}
                  aria-label={`Toggle dark mode`}
                />
              </ButtonGroup>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
