import React from 'react'

export default function Home(props) {
  return (
    <div>
      Hello World
      <button onClick={()=>props.history.push(process.env.REACT_APP_FEATURE)}>feature</button>
    </div>
  )
}
