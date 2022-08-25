import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'

// Styled Components
import Wrapper from '../assets/wrappers/LandingPage'

const Landing = () => {
    return <Wrapper>
        <nav>
            <img src={logo} alt="jobify" className="logo"/>
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
