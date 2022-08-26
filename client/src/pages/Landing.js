import main from '../assets/images/main.svg'

// Styled Components
import Wrapper from '../assets/wrappers/LandingPage'

// Components
import { Logo } from '../components'

const Landing = () => {
    return <Wrapper>
        <nav>
            <Logo></Logo>
        </nav>
        <div className="container page">
            <div className="info">
                <h1>Job 
                    <span>Tracking</span> 
                    App
                </h1>

                <p>I'm baby etsy locavore meditation big mood kale chips pickled bushwick vinyl tbh adaptogen same master cleanse lo-fi iPhone waistcoat</p>

                <button className="btn btn-hero">Login/Register</button>
            </div>

            <img src={main} alt="job hunt" className="img main-img" />

        </div>
    </Wrapper>
}

export default Landing
