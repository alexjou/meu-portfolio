import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Mode from './Mode'

const Nav = () => {
  const Navfunc = () => {
    document.querySelector('#NavLink').classList.toggle('nav-active')
    document.querySelector('#Burger').classList.toggle('toogle')
  }
  return (
    <>
      <nav data-aos="fade-in">
        {/* <div id="Container"> */}
        <div id="NavContentWrapper">
          <h2 id="NavTitle">
            <Link to="/meu-portfolio/">Portfolio</Link>
          </h2>
          <ul id="NavLink">
            <li>
              <NavLink activeClassName="active" to="/" />
            </li>
            <li>
              <a href="#About" onClick={Navfunc}>Sobre</a>
            </li>
            <li>
              <a href="#ShortProjects" onClick={Navfunc}>Projetos</a>
            </li>
            <li>
              <a href="#ShortSkill" onClick={Navfunc}>Habilidades</a>
            </li>
            <li>
              <a href="#ShortService" onClick={Navfunc}>Serviços</a>
            </li>
            <li>
              <a href="#Subscribe" onClick={Navfunc}>Contato</a>
            </li>
            <li>
              <a href="#Footer" onClick={Navfunc}>Redes Sociais</a>
            </li>
            <li>
              <Mode />
            </li>
          </ul>
          <div onClick={Navfunc} id="Burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
        </div>
        {/* </div> */}
      </nav>
    </>
  )
}
export default Nav
