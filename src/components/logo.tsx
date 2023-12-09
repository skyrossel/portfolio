import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Footprint from '@/components/icon/footprint'

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;
  column-gap: 0.25rem;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.75rem;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    <Link href='/' title='Home page'>
      <LogoBox>
        <Footprint width='1.25rem' height='1.25rem' />
        <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')}>
          Sky Rossel
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
