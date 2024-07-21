
const Contact = () => {

    return (
        <div className="under-nav">
            <div className="dev-bg"></div>
            <div className="blue-bg"></div>
            <main className="contact">
                <form action="mailto:lampekevin@outlook.com" >
                    <label htmlFor="firstname">Firstname:</label>
                    <input type="text" />

                    <label htmlFor="firstname">Lastname:</label>
                    <input type="text" />

                    <label htmlFor="firstname">Email:</label>
                    <input type="text" />

                    <label htmlFor="firstname">Your Message:</label>
                    <textarea name="" id=""></textarea>

                    <input type="submit" value={"Submit"} />
                </form>
            </main>
        </div>
    );
}

export default Contact;
