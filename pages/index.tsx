import React from 'react'
import {Text} from '@effortless-ui'
import {NextPage} from 'next'

import Container from '@/components/layout/container'
import MasterPage from '@/components/masterpages/masterpage'
import Visualiser from '@/features/visualiser/Visualiser'
import {theme} from '@/styles/theme'

const Home: NextPage = () => {
  return (
    <MasterPage>
      <Container>
        <Text tag="h1" cs={{color: theme.color.white}}>
          📈 TD/DX survey visualiser
        </Text>
        <Visualiser />
      </Container>
    </MasterPage>
  )
}

export default Home
