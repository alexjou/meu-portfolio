import React from 'react'
import SskData from './SskData'
import Title from './Title'

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
        </div>
      </section>
    </>
  )
}
export default ShortSkill
