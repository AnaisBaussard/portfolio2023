import React from 'react'
import Icon, { IconProps } from '../Icon'

const TypeScript = ({ ...props }: IconProps) => {
  return (
    <Icon
      paths={[
        `M357.333 402c-16.933-1.555-38.666-4.833-59.67-27.772v47.19c38.587 25.082 104.951 20.478 128.087-9.668c13.75-17.917 19.417-41.917 9.237-69.099C411 294.333 354 291.333 337.424 260.822c-18.313-49.418 57.212-58.347 93.498-25.054v-44.36c-15.46-9.985-40.044-11.058-57.29-10.126c-45.511 2.457-76.094 28.901-75.638 68.293c-1.96 54.987 60.83 69.145 92.359 94.592c21.413 18.17 19.88 62.235-33.02 57.833zm-179.691 31.514V220.025h-68.778v-35.303h175.655v35.303h-68.921v213.489h-37.956zM480 32v448H32V32h448zm32-32H0v512h512V0z`,
      ]}
      viewBox="0 0 512 512"
      {...props}
    />
  )
}

export default TypeScript