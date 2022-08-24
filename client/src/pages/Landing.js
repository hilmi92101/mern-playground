import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'


const Landing = () => {
    return <main>
        <nav>
            <img src={logo} alt="jobify" className="logo"/>
        </nav>
        <div className="container page">
            <div className="info">
                <h1>job 
                    <span>tracking</span> 
                    app
                </h1>

                <p>I'm baby etsy locavore meditation big mood kale chips pickled bushwick vinyl tbh adaptogen same master cleanse lo-fi iPhone waistcoat</p>

                <button className="btn btn-hero">Login/Register</button>
            </div>

            <img src={main} alt="job hunt" className="img" />

        </div>
    </main>
}

export default Landing
