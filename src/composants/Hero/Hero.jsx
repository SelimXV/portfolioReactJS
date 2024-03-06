import React from "react";
import "./Hero.css";
const Hero = () => {
  return(
      <section className="hero-container">
        <div className="hero-content">
          <h2> Je suis Sélim K</h2>
          <p>
            Futur développeur web full-stack basé à Paris, France.
            J'ai une passion pour le développement web et j'aime créer des sites web et des applications.
          </p>
        </div>

        <div className="hero-img">
            <div>
              <div className="tech-icon">
                <img src="/images/logo512.png"  alt="" />
            </div>
                <img src="/images/SelimWantedJPG.jpg" height={400} alt="" />
            </div>

            <div>
                <div className="tech-icon">
                    <img src="/images/logo1.png"  alt="" />
                </div>
                <div className="tech-icon">
                    <img src="/images/logo2.png"  alt="" />
                </div>
                <div className="tech-icon">
                    <img src="/images/logo3.png" alt="" />
                </div>

            </div>

        </div>





      </section>
  )
}
export default Hero;