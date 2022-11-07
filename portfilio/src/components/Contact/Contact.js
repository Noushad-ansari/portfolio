import React, { useRef,useState } from 'react';
import "./contact.css"
import emailjs from '@emailjs/browser';
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const [state,setState] = useState({
        user_name:"",
        user_subject:"",
        user_email:"",
        message:"",
    })
   const {user_name,user_subject,user_email,message} =  state

    const sendEmail = (e) => {
        console.log(state.name,state,)
        e.preventDefault();

        emailjs.sendForm('service_raxvy5m', 'template_nmghk3b', formRef.current, 'rKMuy3G05aLuyNHEm')
            .then((result) => {
                console.log(result.text);
                setDone(true)
                toast.success("Thankyou I will get back to you soon...!")
            }, (error) => {
                console.log(error.text);
            });
    };


    const handleChange = (e)=>{
       setState({
        ...state,
        [e.target.name ]: e.target.value
       })
    }


    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +91 823-332-282-84
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            naushad1308@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Address} alt="" />
                            08, Bombay House, Neharu Nagar, 324002, kota
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={sendEmail}>
                        <input   type="text" placeholder="Name" name="user_name" value={user_name}  onChange={handleChange} required / >
                        <input   type="text" placeholder="Subject" name="user_subject" value={user_subject} onChange={handleChange} required / >
                        <input   type="text" placeholder="Email" name="user_email" value={user_email} onChange={handleChange} required / >
                        <textarea  rows="5" placeholder="Message" name="message" value={message} onChange={handleChange}/>
                        <button className='button'>Submit</button>
                        <ToastContainer />
                        {/* {done && "Thank you..."} */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact