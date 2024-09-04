import "./newsletter.css";

function Newsletter(){
    return (
        <div id="newsletter" className="newsletter">
            <div className="newsletterInfo">
                <h3>Suscríbete a nuestro Newsletter</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
                massa ex.
                </p>
            </div>
            <div className="userInfo">
                <div className="input">
                <input
                    type="text"
                    placeholder="Ingresa tu correo electrónico"
                />
                </div>
                <button className="empezar">
                Suscribirse
                </button>
            </div>
        </div>
    );
}

export default Newsletter;