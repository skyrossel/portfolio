import { forwardRef, type Ref } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

interface DogContainerProps {
  children: React.ReactNode
}

export const DogContainer = forwardRef<HTMLDivElement, DogContainerProps>(
  function DogContainer(
    { children }: DogContainerProps,
    ref: Ref<HTMLDivElement>,
  ) {
    return (
      <Box
        ref={ref}
        width={[260, 480, 640]}
        height={[260, 480, 640]}
        position='relative'
        margin='auto'
        mt={['-20px', '-60px', '-120px']}
        mb={['-40px', '-140px', '-200px']}
        zIndex={10}
      >
        {children}
      </Box>
    )
  },
)

export const DogSpinner = () => (
  <Spinner
    size='xl'
    position='absolute'
    left='50%'
    top='50%'
    ml='calc(0px - var(--spinner-size) / 2)'
    mt='calc(0px - var(--spinner-size))'
  />
)

const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  )
}

export default Loader
