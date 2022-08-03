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
              <h2> &lt; Um pouco sobre mim /&gt;</h2>
              <p>
                Tenho {age} anos, Sou bastante curioso, gosto muito de aprender coisas novas,
                quando terminei a faculdade, em 2017, não me interessei em seguir
                carreira como desenvolvedor, pois já trabalhava com meus pais.
              </p>
              <p>
                Mas em 2019, graças a um amigo que sempre me incentivava, me chamou
                para trabalhar com alguns freelancers, começei a estudar novamente e
                vi que era aquilo que eu queria para minha vida, foi quando comecei
                trabalhar remotamente, que tive o contato com novas tecnologias, foi
                onde me incentivou ainda mais a estudar pretendo me especializar em
                aplicativos Android e IOS.
              </p>
              <p>
                Sou também um jovem aventureiro que ama a natureza, paisagem,
                trilhas e linhas de códigos. Quando sobra um tempinho traço
                rotas de viagens, faço roteiros e meto o pé na estrada. Estou
                terminando um curso técnico de guia de turismo, Fiz alguns cursos
                online, participei de vários projetos, tanto Web quanto Mobile, fiz
                alguns aplicativos pessoais e no que precisar aprendo rápido.
              </p>
              <p>
                As tecnologias que tenho mais experiência hoje é ReactJS para web e
                React Native para mobile e Firebase como Back-End.
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
