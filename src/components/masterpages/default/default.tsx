import React, {FC} from 'react'

interface IDefaultMasterpageProps {
  children: React.ReactNode
}

const DefaultMasterpage: FC<IDefaultMasterpageProps> = ({children}) => <main>{children}</main>

export default DefaultMasterpage
