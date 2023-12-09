'use client'

import NextLink from 'next/link'
import { useEffect } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Divider,
  Button,
} from '@chakra-ui/react'
import Article from '@/layouts/article'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Article title='Error'>
      <Container maxW='container.md'>
        <Box display='flex' flexDirection='column' rowGap={4}>
          <Box>
            <Heading>Error</Heading>
            <Text>Something went wrong. Please try later.</Text>
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
