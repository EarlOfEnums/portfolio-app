import React from 'react'

export default function Feature(props) {
  return (
    <div>
      Feature, bitches!
      <button onClick={()=>props.history.push(process.env.REACT_APP_HOME)}>home?</button>
    </div>
  )
}
