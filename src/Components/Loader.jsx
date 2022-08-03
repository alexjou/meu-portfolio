import React from 'react'
import LoaderImg from './img/Loader.gif'
import disableScroll from 'disable-scroll'

const Loader = () => {
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelector('#Loader').style.transform = 'translateX(120%)'
      disableScroll.off()
      document.querySelector('html').style.background = '#0D1117'
      document.querySelector('body').style.background = '#0D1117'
      document.querySelector('html').style.color = '#fff'
      document.querySelector('body').style.color = '#fff'
    })
  })
  disableScroll.on()
  return (
    <>
      <section id="Loader">
        <div id="LoaderImg">
          <img src={LoaderImg} alt="Carregando..." />
          <div id="LoaderDesc">
            <h2>Carregando...</h2>
          </div>
        </div>
      </section>
    </>
  )
}
export default Loader
