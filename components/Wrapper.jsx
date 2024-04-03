import React from 'react'

const Wrapper = ({children,className}) => {
  return (
    <div className={`${className} max-w-7xl px-4 sm:px-5 mx-auto w-full`} >{children}</div>
  )
}

export default Wrapper