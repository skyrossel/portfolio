import { usePathname } from 'next/navigation'
import { Link, useColorModeValue } from '@chakra-ui/react'

interface LinkItemProps {
  children: React.ReactNode
  href: string
  target?: string
}

const LinkItem: React.FC<LinkItemProps> = ({ children, href, target }) => {
  const pathname = usePathname()

  const active = pathname === href
  const inactive = useColorModeValue('gray.800', 'whiteAlpha.900')

  return (
    <Link
      href={href}
      target={target}
      backgroundColor={active ? 'gray.800' : undefined}
      color={active ? 'whiteAlpha.900' : inactive}
      display='inline-flex'
      alignItems='center'
      columnGap='0.25rem'
      padding={2}
    >
      {children}
    </Link>
  )
}

export default LinkItem
