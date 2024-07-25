
const Contact = () => {

    return (
        <div className="under-nav">
            <div className="dev-bg"></div>
            <div className="blue-bg"></div>
            <main className="contact">
                <form action="https://api.web3forms.com/submit" method="POST" >

                    <input type="hidden" name="access_key" value='9716e2c7-e15a-4a79-a0a3-4c8f46e5e54f' />

                    <label htmlFor="firstname">Firstname</label>
                    <input name="firstname" type="text" required/>

                    <label htmlFor="firstname">Lastname</label>
                    <input name="lastname" type="text" required/>

                    <label htmlFor="firstname">Email</label>
                    <input name="email" type="text" required/>

                    <label htmlFor="firstname">Your Message</label>
                    <textarea name="message" id="" required></textarea>

                    <input type="submit" value={"Submit"} />
                </form>
            </main>
        </div>
    );
}

export default Contact;
