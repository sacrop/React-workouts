import React from 'react'

const student = (props) => {
  return (
    <div>
    <h1>{props.name}</h1>
    <h2>{props.age}</h2>
    <h3>{props.branch}</h3>
</div>
  )
}
export default student;