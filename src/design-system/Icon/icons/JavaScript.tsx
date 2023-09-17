import React from 'react'
import Icon, { IconProps } from '../Icon'

const JavaScript = ({ ...props }: IconProps) => {
  return (
    <Icon
      paths={[
        `M0 0H630V630H0V0ZM481.6 528.14C452.4 528.14 435.89 512.91 423.2 492.19L375.09 520.14C392.47 554.48 427.99 580.68 482.97 580.68C539.2 580.68 581.07 551.48 581.07 498.18C581.07 448.74 552.67 426.75 502.37 405.18L487.57 398.84C462.17 387.84 451.17 380.65 451.17 362.89C451.17 348.52 462.16 337.52 479.5 337.52C496.5 337.52 507.45 344.69 517.6 362.89L563.7 333.29C544.2 298.99 517.14 285.89 479.5 285.89C426.63 285.89 392.8 319.69 392.8 364.09C392.8 412.29 421.18 435.09 463.9 453.29L478.7 459.64C505.7 471.45 521.8 478.64 521.8 498.94C521.8 515.88 506.13 528.14 481.6 528.14ZM252.17 527.77C231.83 527.77 223.37 513.82 214.07 497.32L165.88 526.495C179.84 556.04 207.29 580.57 254.69 580.57C307.15 580.57 343.09 552.67 343.09 491.37V289.27H283.89V490.57C283.89 520.16 271.62 527.77 252.17 527.77Z`,
      ]}
      viewBox="0 0 630 630"
      {...props}
    />
  )
}

export default JavaScript