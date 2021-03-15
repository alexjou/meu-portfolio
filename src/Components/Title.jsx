import React from 'react'

const Title = (prop) => {
  return (
    <>
      <div id="SectionTitle">
        <h2> {prop.title} </h2>
        <h1> {prop.tit} </h1>
        <p> {prop.desc} </p>
        <div id="line"></div>
      </div>
    </>
  )
}
export default Title
