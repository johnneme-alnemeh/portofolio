import React from 'react'

function ProjCardBack(props) {
  return (
    <div className="card">
        <p className="bold">{props.title}</p>
        <p >{props.about}</p>
    </div>
  )
}

export default ProjCardBack
