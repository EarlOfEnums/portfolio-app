import React from 'react'

export default function Home(props) {
  return (
    <div>
      Hello World
      <button onClick={()=>props.history.push('/feature')}>feature</button>
    </div>
  )
}
