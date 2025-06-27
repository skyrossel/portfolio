import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { BiLogoTelegram } from 'react-icons/bi'
import TypeIt from 'typeit-react'
import {
  useColorModeValue,
  Box,
  Container,
  Heading,
  Flex,
  Text,
  Badge,
  Link,
  List,
  ListItem,
  Icon,
} from '@chakra-ui/react'
import Article from '@/layouts/article'
import Section from '@/components/ui/section'

export default function Home() {
  return (
    <Article title='Homepage'>
      <Container>
        <Box
          display='flex'
          flexDirection='column'
          rowGap={6}
          paddingBottom={{ sm: 3.5 }}
        >
          <RoughNotationGroup show>
            <Section delay='0.1'>
              <Box
                backgroundColor={useColorModeValue(
                  'whiteAlpha.500',
                  'whiteAlpha.200',
                )}
                backdropFilter='blur(0.75rem)'
                textAlign='center'
                borderRadius='lg'
                p={3}
              >
                <TypeIt
                  options={{
                    speed: 100,
                    deleteSpeed: 100,
                    cursor: false,
                    loop: true,
                  }}
                  getBeforeInit={(instance) => {
                    instance
                      .type('helo')
                      .move(-3)
                      .delete(1)
                      .type('H')
                      .move(2)
                      .type('l')
                      .move(null, { to: 'END' })
                      .type(", I'm an artist")
                      .delete(9)
                      .type('a producer')
                      .delete(8)
                      .type('frontend developer :)')

                    return instance
                  }}
                />
              </Box>
            </Section>
            <Section delay='0.2'>
              <Heading variant='section-title'>Work</Heading>
              <Text
                maxWidth='lg'
                width='full'
                position='relative'
                textIndent='1rem'
              >
                Sky is a{' '}
                <RoughNotation
                  type='bracket'
                  brackets='top'
                  color={useColorModeValue('#525252', '#FFFFFFEB')}
                >
                  front-end developer
                </RoughNotation>{' '}
                from Tashkent city. He&apos;s passionate about creating digital
                services and enjoys building various things according to his
                interests. By the way, he&apos;s a{' '}
                <RoughNotation
                  type='underline'
                  color={useColorModeValue('#525252', '#FFFFFFEB')}
                >
                  freelancer
                </RoughNotation>
                . Sky has expertise in launching products, starting from the
                planning phase to the execution phase, and he also utilizes
                coding to solve real-life problems. As a product{' '}
                <RoughNotation
                  type='circle'
                  color={useColorModeValue('#525252', '#FFFFFFEB')}
                >
                  manager
                </RoughNotation>{' '}
                ,he saw himself sometimes. In his free time, Sky enjoys spending
                time with his loved ones.
              </Text>
            </Section>
            <Section delay='0.3'>
              <Heading variant='section-title'>Bio</Heading>
              <Box
                display='flex'
                flexDirection='column'
                rowGap={2}
                position='relative'
              >
                <Flex
                  flexDirection={{ base: 'column', md: 'row' }}
                  alignItems={{ base: 'flex-start', md: 'center' }}
                  columnGap={2}
                >
                  <Heading as='h3' variant='bio-title'>
                    28.09.2003:
                  </Heading>
                  <Box>
                    <Text>
                      Originally born in{' '}
                      <RoughNotation
                        type='strike-through'
                        color={useColorModeValue('#525252', '#FFFFFFEB')}
                      >
                        Nukus
                      </RoughNotation>
                      , but my family had to relocate to{' '}
                      <RoughNotation
                        type='underline'
                        color={useColorModeValue('#525252', '#FFFFFFEB')}
                      >
                        Tashkent
                      </RoughNotation>{' '}
                      due to my father&apos;s job promotion. I&apos;ve been
                      living here since 2007.
                    </Text>
                  </Box>
                </Flex>
                <Flex
                  flexDirection={{ base: 'column', md: 'row' }}
                  alignItems={{ base: 'flex-start', md: 'center' }}
                  columnGap={2}
                >
                  <Heading as='h3' variant='bio-title'>
                    06.07.2021:
                  </Heading>
                  <Box>
                    <Text>
                      Currently attending{' '}
                      <Box as='br' display={{ base: 'block', sm: 'none' }} />
                      <RoughNotation
                        type='box'
                        color={useColorModeValue('#525252', '#FFFFFFEB')}
                      >
                        Webster University
                      </RoughNotation>
                      , a prestigious American university, where I&apos;m in my
                      third year studying at the Faculty of{' '}
                      <RoughNotation
                        type='circle'
                        color={useColorModeValue('#525252', '#FFFFFFEB')}
                      >
                        Economics
                      </RoughNotation>
                      .
                    </Text>
                  </Box>
                </Flex>
                <Flex
                  flexDirection={{ base: 'column', md: 'row' }}
                  alignItems={{ base: 'flex-start', md: 'center' }}
                  columnGap={2}
                >
                  <Heading as='h3' variant='bio-title'>
                    14.01.2023:
                  </Heading>
                  <Box>
                    <Text>
                      Completed a nine-month course called
                      <Box as='br' />
                      <RoughNotation
                        type='highlight'
                        color={useColorModeValue('#525252', '#FFFFFFEB')}
                      >
                        <Box
                          as='span'
                          color={useColorModeValue(
                            'whiteAlpha.900',
                            'gray.800',
                          )}
                        >
                          Frontend Developer
                        </Box>
                      </RoughNotation>{' '}
                      at{' '}
                      <RoughNotation
                        type='underline'
                        color={useColorModeValue('#525252', '#FFFFFFEB')}
                      >
                        PROWEB
                      </RoughNotation>
                      , which is one of Uzbekistan&apos;s specialized
                      educational centers for IT training.
                    </Text>
                  </Box>
                </Flex>
                <Flex
                  flexDirection={{ base: 'column', md: 'row' }}
                  alignItems={{ base: 'flex-start', md: 'center' }}
                  columnGap={2}
                >
                  <Heading as='h3' variant='bio-title'>
                    01.03.2023:
                  </Heading>
                  <Box>
                    <Text>
                      Commenced acquiring knowledge and practical experience in
                      utilizing{' '}
                      <RoughNotation
                        type='bracket'
                        brackets='left'
                        color={useColorModeValue('#525252', '#FFFFFFEB')}
                        padding={2}
                      >
                        frameworks
                      </RoughNotation>
                      , UI components, and{' '}
                      <RoughNotation
                        type='bracket'
                        brackets='right'
                        color={useColorModeValue('#525252', '#FFFFFFEB')}
                        padding={2}
                      >
                        databases
                      </RoughNotation>{' '}
                      such as:
                    </Text>
                    <Box display='flex' flexDirection='column' rowGap='0.25rem'>
                      <Flex columnGap='0.25rem'>
                        <Badge>Nextjs</Badge>
                        <Badge>Reactjs</Badge>
                        <Badge>Threejs</Badge>
                      </Flex>
                      <Flex columnGap='0.25rem'>
                        <Badge>Chakra UI</Badge>
                        <Badge>Material UI</Badge>
                        <Badge>Shadcn UI</Badge>
                      </Flex>
                      <Flex columnGap='0.25rem'>
                        <Badge>Prisma</Badge>
                        <Badge>Mongodb</Badge>
                        <Badge>Supabase</Badge>
                        <Badge>Neon</Badge>
                      </Flex>
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Section>
            <Section delay='0.4'>
              <Heading variant='section-title'>I like</Heading>
              <Box textAlign='center'>
                Art, Music,{' '}
                <Link href='https://www.vogue.com/' target='_blank'>
                  Fashion
                </Link>
                , Playing Guitar,{' '}
                <Link href='https://global.canon/' target='_blank'>
                  Photography
                </Link>
                , Canon, Machine Learning,{' '}
                <Link href='https://www.vangoghmuseum.nl/' target='_blank'>
                  Museum
                </Link>
                , Van Gogh.
              </Box>
            </Section>
            <Section delay='0.5'>
              <Heading variant='section-title'>On the web</Heading>
              <List display='flex' flexDirection='column' rowGap={2}>
                <ListItem width='max-content'>
                  <Link
                    href='https://github.com/skyrossel'
                    target='_blank'
                    color={useColorModeValue('grey.800', 'whiteAlpha.900')}
                    display='flex'
                    alignItems='center'
                    columnGap='0.25rem'
                    cursor='pointer'
                  >
                    <Icon as={IoLogoGithub} />
                    Github
                  </Link>
                </ListItem>
                <ListItem width='max-content'>
                  <Link
                    href='https://uz.linkedin.com/in/%D0%B0%D0%BB%D0%B8%D0%B1%D0%B5%D0%BA-%D0%B0%D0%BB%D0%BB%D0%B0%D0%BD%D0%B0%D0%B7%D0%B0%D1%80%D0%BE%D0%B2-89421b2a0'
                    target='_blank'
                    color={useColorModeValue('grey.800', 'whiteAlpha.900')}
                    display='flex'
                    alignItems='center'
                    columnGap='0.25rem'
                    cursor='pointer'
                  >
                    <Icon as={IoLogoLinkedin} />
                    Linkedin
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href='https://instagram.com/acceptmycondolences'
                    target='_blank'
                    color={useColorModeValue('grey.800', 'whiteAlpha.900')}
                    display='flex'
                    alignItems='center'
                    columnGap='0.25rem'
                    cursor='pointer'
                  >
                    <Icon as={IoLogoInstagram} />
                    Instagram
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href='https://t.me/acceptmycondolences'
                    target='_blank'
                    color={useColorModeValue('grey.800', 'whiteAlpha.900')}
                    display='flex'
                    alignItems='center'
                    columnGap='0.25rem'
                    cursor='pointer'
                  >
                    <Icon as={BiLogoTelegram} />
                    Telegram
                  </Link>
                </ListItem>
              </List>
            </Section>
          </RoughNotationGroup>
        </Box>
      </Container>
    </Article>
  )
}
