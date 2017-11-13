import React from 'react'

const NotFound = ({staticContext = {} }) => {
  staticContext.notFound = true
  return (
    <div className="">
        <h1>404 - Not Found</h1>
    </div>
  )
}

export default { component: NotFound }