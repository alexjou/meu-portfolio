import React from 'react'
import AboutSrc from './img/me.jpeg'

const ShortAbout = () => {
  const year = new Date().getFullYear()
  const age = year - 1994
  return (
    <>
      <section id="About">
        <div id="Container">
          <div id="AboutCOntentWrapper">
            <div id="AboutDesc" data-aos="fade-up">
              <h2>Um pouco sobre mim</h2>
              <p>
                Tenho {age} anos, Sou bastante curioso, gosto muito de aprender coisas novas,
                quando terminei a faculdade, em 2017, não me interessei em seguir
                carreira como desenvolvedor, pois já trabalhava com meus pais.
                Me interessei pelo desenvolvimento em 2020, quando comecei a
                trabalhar remotamente, estou me especializando em aplicativos
                Android e IOS, trabalhando hoje com ReactJS para web e
                React Native para mobile.
              </p>
              <p>
                Sou também um jovem aventureiro que ama a natureza, paisagem,
                trilhas e linhas de códigos. Quando sobra um tempinho traço
                rotas de viagens, faço roteiros e meto o pé na estrada. Estou
                terminando um curso técnico de guia de turismo, Fiz alguns cursos
                online, pequenos aplicativos e no que precisar aprendo rápido.
              </p>

            </div>
            <div id="AboutImage" data-aos="fade-down">
              <img src={AboutSrc} alt="Error" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default ShortAbout
