import Image from 'next/image'
import NextLink from 'next/link'
import { Box, Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'

interface WorkGridItemProps {
  children: React.ReactNode
  name: string
  title: string
  src: string
}

const WorkGridItem: React.FC<WorkGridItemProps> = ({
  children,
  name,
  title,
  src,
}) => {
  return (
    <Box width='full' textAlign='center'>
      <LinkBox
        as={NextLink}
        href={`/works/${name}`}
        scroll={false}
        cursor='pointer'
      >
        <Box display='flex' flexDirection='column' rowGap={3}>
          <Image
            src={src}
            alt='No photo yet :('
            width={720}
            height={400}
            style={{ borderRadius: '0.75rem' }}
          />
          <Box display='flex' flexDirection='column' rowGap={1}>
            <LinkOverlay as='div' href={`/works/${name}`}>
              <Heading as='h3' fontSize='lg' lineHeight={6}>
                {title}
              </Heading>
            </LinkOverlay>
            <Text fontSize='xs'>{children}</Text>
          </Box>
        </Box>
      </LinkBox>
    </Box>
  )
}

export default WorkGridItem
