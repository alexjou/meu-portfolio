import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import Title from './Title'
import Button from '@material-ui/core/Button'

const Subscribe = () => {

  const [data, setData] = useState({
    yourName: '',
    _replyto: '',
    subject: '',
    message: '',
  })
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const TakeData = (val) => {
    const { name, value } = val.target
    setData((preValue) => {
      return { ...preValue, [name]: value }
    })
  }
  const ShowData = () => {
    Swal.fire('Enviado', `Obrigado ${data.yourName} por enviar.`, 'success')
  }
  return (
    <>
      <section id="Subscribe">
        <div id="Container">
          <Title id="SubscribeTitle"
            tit="Contato"
            desc="Escreva qualquer coisa aqui. Eu vou te responder o mais rápido possivel."
          />
          <div data-aos="fade-left" id="ContactContentWrapper">
            <form
              onSubmit={ShowData}
              action="https://formspree.io/f/mqkgrgly"
              method="POST"
            >
              <div id="InputFields">
                <input
                  onChange={TakeData}
                  required
                  type="text"
                  placeholder="Nome..."
                  name="yourName"
                  value={data.yourName}
                />
              </div>
              <div id="InputFields">
                <input
                  onChange={TakeData}
                  placeholder="E-mail..."
                  type="email"
                  name="_replyto"
                  value={data.email}
                />
              </div>
              <div required id="InputFields">
                <input
                  onChange={TakeData}
                  required
                  type="text"
                  placeholder="Título"
                  name="subject"
                  value={data.subject}
                />
              </div>
              <div id="InputFields">
                <textarea
                  onChange={TakeData}
                  type="text"
                  required
                  cols="30"
                  rows="6"
                  placeholder="Sua Menssagem.."
                  name="message"
                  value={data.message}
                ></textarea>
              </div>
              <div id="InputFields">
                <Button variant="contained" color="secondary" type="submit">
                  Enviar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
export default Subscribe
