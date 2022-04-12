import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactFormComponent = () => {
    let onChange = (value) => {
        console.log("Captcha value:", value);
    }

    return (
        <div>
            <ReCAPTCHA
                sitekey="6LfFg2kfAAAAAHg3tfTEogpQKVJfefuncvAcpoAv"
                onChange={onChange}
            />
        </div>
    )
}
export default ContactFormComponent;