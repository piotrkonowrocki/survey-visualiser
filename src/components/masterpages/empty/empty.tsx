import React, {FC} from 'react'

interface IEmptyMasterpageProps {
  children: React.ReactNode
}

const EmptyMasterpage: FC<IEmptyMasterpageProps> = ({children}) => {
  return <>{children}</>
}

export default EmptyMasterpage
