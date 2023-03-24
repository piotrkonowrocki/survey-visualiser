import React from 'react'
import {NextPage} from 'next'

import MasterPage from '@/components/masterpages/masterpage'
import {DemoContent} from '@/components/ui/demo/demo'

const Home: NextPage = () => {
  return (
    <MasterPage>
      <DemoContent />
    </MasterPage>
  )
}

export default Home
