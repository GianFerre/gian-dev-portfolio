
function Contact() {
    return(
        <div className="parent-form">
            <div className="contact-form-container">
                <h1>Thank you for getting in touch. <br /> What can I do for you today?</h1>
                <form>
                    <div className="form-group">
                        <input placeholder="Name"/>
                        <input placeholder="Email"/>
                    </div>
                    <textarea placeholder="Message"></textarea>
                    <button className="form-button">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;