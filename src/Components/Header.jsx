import React from 'react'
import Button from '@material-ui/core/Button'

const Home = () => {
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate
    this.el = el
    this.loopNum = 0
    this.period = parseInt(period, 10) || 2000
    this.txt = ''
    this.tick()
    this.isDeleting = false
  }

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length
    var fullTxt = this.toRotate[i]

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'

    var that = this
    var delta = 200 - Math.random() * 100

    if (this.isDeleting) {
      delta /= 2
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period
      this.isDeleting = true
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false
      this.loopNum++
      delta = 500
    }

    setTimeout(function () {
      that.tick()
    }, delta)
  }

  window.onload = function () {
    var elements = document.getElementsByClassName('typewrite')
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type')
      var period = elements[i].getAttribute('data-period')
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period)
      }
    }
    var css = document.createElement('style')
    css.type = 'text/css'
    css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}'
    document.body.appendChild(css)
  }
  return (
    <>
      <header id="Header">
        <div class="custom-shape-divider-bottom-1612693670">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div id="Container">
          <div id="HeaderContentWrapper">
            <div id="HeaderDesc" data-aos="fade-right">
              <h1>Desenvolvedor de Software</h1>

              <h3
                className="typewrite"
                data-period="2000"
                data-type='[ "Olá, Meu nome é Álex Joubert.", "Desenvolvedor Web", "Desenvolvedor Mobile", "Designer", "Guia de Turismo"]'
              >
                <span className="wrap">Olá, Meu nome é Álex.</span>
              </h3>
              <Button variant="contained" color="secondary" type="button" href="http://bit.ly/JoubertProfile" target="_blank">
                Curriculo
                </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
export default Home
