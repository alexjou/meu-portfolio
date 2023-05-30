import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <section id="Footer">
        <div id="Container">
          <div data-aos="fade-in" id="FooterContentWrapper">
            <div data-aos="fade-down" id="FooterSingleCotent">
              <h2>Redes Sociais</h2>
              <ol>
                <li>
                  <a
                    href="http://www.github.com/alexjou"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/alex-jou/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/alex.joubert.581"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i> Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/alex.legend_/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                </li>
              </ol>
            </div>

            {/* <div id="ShareButtons">
              <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
                <a className="a2a_dd" href="https://www.addtoany.com/share"></a>
                <a className="a2a_button_facebook"></a>
                <a className="a2a_button_twitter"></a>
                <a className="a2a_button_email"></a>
                <a className="a2a_button_pinterest"></a>
                <a className="a2a_button_reddit"></a>
                <a className="a2a_button_telegram"></a>
                <a className="a2a_button_linkedin"></a>
                <a className="a2a_button_whatsapp"></a>
                <a className="a2a_button_google_gmail"></a>
                <a className="a2a_button_facebook_messenger"></a>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <footer>Álex Joubert - {year} </footer>
    </>
  )
}
export default Footer
