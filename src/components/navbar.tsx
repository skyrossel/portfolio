import NextLink from 'next/link'
import { IoLogoGithub } from 'react-icons/io5'
import {
  Box,
  Container,
  Flex,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from '@/components/logo'
import LinkItem from '@/components/link-item'
import ModeToggle from '@/components/mode-toggle'

const Navbar = () => {
  return (
    <Box
      backgroundColor={useColorModeValue('#FFFFFF40', '#20202380')}
      height={14}
      width='full'
      backdropFilter='blur(0.75rem)'
      position='fixed'
      top={0}
      left={0}
      zIndex={100}
    >
      <Container maxWidth='container.md' padding={2}>
        <Flex alignItems='center' justifyContent='space-between' columnGap={4}>
          <Logo />
          <Stack
            width={{ base: 'full', md: 'auto' }}
            display={{ base: 'none', md: 'flex' }}
            direction={{ base: 'column', md: 'row' }}
            flexGrow={1}
            alignItems='center'
          >
            <LinkItem href='/works'>Works</LinkItem>
            <LinkItem
              href='https://github.com/skyrossel/portfolio'
              target='_blank'
            >
              <IoLogoGithub />
              Source
            </LinkItem>
          </Stack>
          <Flex justifyContent='flex-end' columnGap={2}>
            <ModeToggle />
            <Box display={{ base: 'inline-block', md: 'none' }} title='Menu'>
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant='outline'
                  aria-label='Options'
                />
                <MenuList>
                  <MenuItem as={NextLink} href='/'>
                    About
                  </MenuItem>
                  <MenuItem as={NextLink} href='/works'>
                    Works
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem
                    as={NextLink}
                    href='https://github.com/skyrossel/portfolio'
                    target='_blank'
                    display='inline-flex'
                    columnGap='0.25rem'
                  >
                    <IoLogoGithub />
                    View Source
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
