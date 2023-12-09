import Image from 'next/image'
import {
  Badge,
  Box,
  Container,
  Link,
  List,
  ListItem,
  Tag,
  Text,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Article from '@/layouts/article'
import WorkTitle from './components/work'

export default function ECommerceStore() {
  return (
    <Article title='Music'>
      <Container>
        <Box display='flex' flexDirection='column' rowGap={6}>
          <WorkTitle>
            Music <Badge>2023</Badge>
          </WorkTitle>
          <Box textAlign='center'>
            <Image
              src='/'
              alt='No photo yet :('
              width={720}
              height={400}
              style={{ borderRadius: '0.75rem' }}
            />
          </Box>
          <Text
            maxWidth='lg'
            width='full'
            position='relative'
            textIndent='1rem'
          >
            Music is a music platform that provides a space for users to
            showcase and share their own music while also exploring and
            listening to music from other creators.
          </Text>
          <List display='flex' flexDirection='column' rowGap={4}>
            <ListItem
              display='flex'
              flexDirection={{ base: 'column', md: 'row' }}
              alignItems={{ base: 'start', md: 'center' }}
              gap={2}
            >
              <Tag variant='solid' colorScheme='teal'>
                Website 1
              </Tag>
              <Link href='https://music-skyrossel.vercel.app/' target='_blank'>
                https://music-skyrossel.vercel.app/ <ExternalLinkIcon />
              </Link>
            </ListItem>
            <ListItem
              display='flex'
              flexDirection={{ base: 'column', md: 'row' }}
              alignItems={{ base: 'start', md: 'center' }}
              gap={2}
            >
              <Tag variant='solid' colorScheme='teal'>
                Platform
              </Tag>
              <Text width={{ base: 'full', md: 'max-content' }}>
                Windows/macOS/Linux/iOS/Android
              </Text>
            </ListItem>
            <ListItem
              display='flex'
              flexDirection={{ base: 'column', md: 'row' }}
              alignItems={{ base: 'start', md: 'center' }}
              gap={2}
            >
              <Tag variant='solid' colorScheme='teal'>
                Stack
              </Tag>
              <Text>
                NextJS, Material UI, Supabase (React Hook Form, Query String,
                Use Sound)
              </Text>
            </ListItem>
          </List>
        </Box>
      </Container>
    </Article>
  )
}
