import React from 'react'
import SskData from './SskData'
import Title from './Title'

import ReactNative from './img/React.png'
import Firebase from './img/Firebase.png'

const ShortSkill = () => {
  const SingleShortSkill = (prop) => {
    return (
      <>
        <div data-aos-duration="400" data-aos="flip-left" id="SingleSkill">
          <div id="SingleSkillContentWrapper">
            <img src={prop.src} alt="Error" />
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <section id="ShortSkill">
        <div id="Container">
          <Title title="Habilidades" desc="Estas são minhas habilidades e ferramentas" />
          <div id="SkillContentWrappper">
            {SskData.map((data, index) => {
              return <SingleShortSkill key={index} src={data.src} />
            })}
          </div>
          <Title title="" desc="Linguagens que tenho mais experiência" />
          <div id="SkillContentWrappper">
            <div id="Bests">
              <SingleShortSkill src={ReactNative} />
              <h2>ReactJS</h2>
            </div>
            <div id="Bests">
              <SingleShortSkill src={Firebase} />
              <h2>Firebase</h2>
            </div>
            <div id="Bests">
              <SingleShortSkill src={ReactNative} />
              <h2>React Native</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default ShortSkill
