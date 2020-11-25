import React from 'react'

export default function Feature(props) {
  return (
    <div>
      Feature, bitches!
      <button onClick={()=>props.history.push('/portfolio-app')}>home?</button>
    </div>
  )
}
