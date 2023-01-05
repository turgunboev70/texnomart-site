import React from 'react'

const Error = ({error}) => {
  return (
    <p style={{color : "red", marginBottom: "10px", textAlign: "center"}}>
        {error}
    </p>
  )
}

export default Error