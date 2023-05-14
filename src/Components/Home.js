import { ExternalLink } from "react-external-link"
import diego from '../assets/diego.jpeg'
import rmr from '../assets/rmr.jpeg'
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="Home">
      <section className="AppDescription">
        <p>Welcome to our Snack-a-log Web App. Click on <Link to={`/snacks`}>All Snacks</Link> to view a list of snacks. Use filtering features, add a new snack or edit an existing one :)</p>
      </section>
      <section className="AboutUs">
        <h2 className="about">About Us</h2>
        <div className="about">
          <section className="team">
            <div className="diego">
              <img src={diego} alt="Diego Carrero" />
            </div>
            <div className="info">
              <h4>Diego Carrero</h4>
              <span>Full Stack Web Developer</span>
              <span>Pursuit Fellow 9.4 N&W</span>
              <p>Github: <ExternalLink href="https://github.com/DiegoCarrero" target="_blank">@DiegoCarrero</ExternalLink></p>
              <p>Linkedin: <ExternalLink href="https://www.linkedin.com/in/diegocarrero/" target="_blank">Diego Carrero</ExternalLink></p>
            </div>

            <hr />

            <div className="info">
              <h4>Raydelys Morrobel Reyes</h4>
              <span>Full Stack Web Developer</span>
              <span>Pursuit Fellow 9.4 N&W</span>
              <p>Github: <ExternalLink href="https://github.com/arerimr" target="_blank">@arerimr</ExternalLink ></p>
              <p>Linkedin: <ExternalLink href="https://www.linkedin.com/in/raydelysmr" target="_blank">Raydelys M R</ExternalLink></p>
            </div>
            <div className="raydelys">
              <img src={rmr} alt="Raydelys MR" />
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
