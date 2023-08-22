import dynamic from 'next/dynamic'
import React from 'react'

const NoSsr = ({ children }: React.PropsWithChildren<{}>) => (
  <React.Fragment>{children}</React.Fragment>
)

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false
})