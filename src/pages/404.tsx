import NextLink from 'next/link'
import {
  Box,
  Container,
  Heading,
  Text,
  Divider,
  Button,
} from '@chakra-ui/react'
import Article from '@/layouts/article'

export default function NotFound() {
  return (
    <Article title='Not Found'>
      <Container maxW='container.md'>
        <Box display='flex' flexDirection='column' rowGap={4}>
          <Box>
            <Heading>Not Found</Heading>
            <Text>The page you&apos;re looking for was not found.</Text>
          </Box>
          <Divider />
          <Button as={NextLink} href='/' colorScheme='teal'>
            Return to Home
          </Button>
        </Box>
      </Container>
    </Article>
  )
}
