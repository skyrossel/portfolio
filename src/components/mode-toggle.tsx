import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { AnimatePresence, motion } from 'framer-motion'

const ModeToggle = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence initial={false} mode='wait'>
      <motion.div
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        exit={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        title='Theme'
      >
        <IconButton
          onClick={toggleColorMode}
          variant='ghost'
          colorScheme={useColorModeValue('teal', 'orange')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          aria-label='Toggle theme'
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default ModeToggle
