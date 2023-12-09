import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface SectionProps {
  children: React.ReactNode
  delay: string
}

const StyleSection = chakra(motion.section, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})

const Section: React.FC<SectionProps> = ({ children, delay }) => {
  return (
    <StyleSection
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: '0.8', delay }}
    >
      <Box display='flex' flexDirection='column' rowGap={4}>
        {children}
      </Box>
    </StyleSection>
  )
}

export default Section
