import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Article from '@/layouts/article'
import Section from '@/components/ui/section'
import WorkGridItem from '@/components/work-grid-item'

export default function Works() {
  return (
    <Article title='Works'>
      <Container>
        <Box
          display='flex'
          flexDirection='column'
          rowGap={6}
          paddingBottom={{ sm: 3.5 }}
        >
          <Heading fontSize='xl' lineHeight={7}>
            Works
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section delay='0.1'>
              <WorkGridItem
                name='e-commerce-store'
                title='E-Commerce-Store'
                src='/'
              >
                Admin Dashboard ( for owners to oversee and generate products
                for their website ) + Store ( for showcasing and selling
                products ).
              </WorkGridItem>
            </Section>
            <Section delay='0.1'>
              <WorkGridItem name='music' title='Music' src='/'>
                Music is a music platform that provides a space for users to
                showcase and share their own music while also exploring and
                listening to music from other creators.
              </WorkGridItem>
            </Section>
          </SimpleGrid>
        </Box>
      </Container>
    </Article>
  )
}
