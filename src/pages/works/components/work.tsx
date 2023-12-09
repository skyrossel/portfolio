import NextLink from 'next/link'
import { Box, Heading, Link } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

interface WorkTitleProps {
  children: React.ReactNode
}

const WorkTitle: React.FC<WorkTitleProps> = ({ children }) => {
  return (
    <Box display='flex' alignItems='center' columnGap={1}>
      <Link as={NextLink} href='/works'>
        Works
      </Link>
      <ChevronRightIcon />
      <Heading
        as='h2'
        display='inline-flex'
        alignItems='center'
        columnGap={3}
        fontSize='xl'
      >
        {children}
      </Heading>
    </Box>
  )
}

export default WorkTitle
