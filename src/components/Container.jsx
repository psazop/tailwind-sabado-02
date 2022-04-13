import React from 'react'

const Container = ( props ) => {
  return (
    <div className="container mx-auto grid place-content-center min-h-screen">
        { props.children }
    </div>
  )
}

export default Container