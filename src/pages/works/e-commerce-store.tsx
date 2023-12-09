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
    <Article title='E-Commerce-Store'>
      <Container>
        <Box display='flex' flexDirection='column' rowGap={6}>
          <WorkTitle>
            E-Commerce-Store <Badge>2023</Badge>
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
            Admin Dashboard ( for owners to oversee and generate products for
            their website ) + Store ( for showcasing and selling products ).
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
              <Link
                href='https://admin-dashboard-skyrossel.vercel.app/'
                target='_blank'
              >
                https://admin-dashboard-skyrossel.vercel.app/{' '}
                <ExternalLinkIcon />
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
                NextJS, Shadcn UI, Prisma (Axios, Query String, Cloudinary)
              </Text>
            </ListItem>
            <ListItem
              display='flex'
              flexDirection={{ base: 'column', md: 'row' }}
              alignItems={{ base: 'start', md: 'center' }}
              gap={2}
            >
              <Tag variant='solid' colorScheme='teal'>
                Website 2
              </Tag>
              <Link href='https://store-skyrossel.vercel.app/' target='_blank'>
                https://store-skyrossel.vercel.app/ <ExternalLinkIcon />
              </Link>
            </ListItem>
          </List>
        </Box>
      </Container>
    </Article>
  )
}
