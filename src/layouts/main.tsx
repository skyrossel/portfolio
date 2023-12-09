import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
import Loader from '@/components/model/voxel-dog-loader'
import Navbar from '@/components/navbar'

interface MainProps {
  children: React.ReactNode
}

const LazyVoxelDog = dynamic(() => import('@/components/model/voxel-dog'), {
  ssr: false,
  loading: () => <Loader />,
})

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <Box as='main'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content="Sky's website is about a boy who loves to code in his spare time. Prior to adopting the name Sky, he was known as 'acceptmycondolences' within certain circles."
        />
        <meta name='author' content='Sky Rossel' />
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
      </Head>

      <Navbar />
      <Container maxWidth='container.md' paddingTop={14} paddingBottom={7}>
        <LazyVoxelDog />
        <Box position='relative' zIndex='50'>
          {children}
        </Box>
      </Container>
    </Box>
  )
}

export default Main
