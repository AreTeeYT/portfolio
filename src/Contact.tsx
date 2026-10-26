
import { IconContext } from 'react-icons'
import './Contact.css'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function ContactMe(){

    return(
    <>
        <section id="contact-section">
            <div className="contact-box">
                <form>
                    <div className='input-field'>
                        <label>Name</label>
                        <input></input>
                    </div>
                    <div className='input-field'>
                        <label>Email</label>
                        <input></input>
                    </div>
                    <div className='input-field'>
                        <label>Message</label>
                        <textarea rows={10}></textarea>
                    </div>
                    <div className='input-field'>
                        <input type="submit" value="Send Message"/>
                    </div>
                </form>
            </div>
            <div className="contact-box">
                <div id="socials-box">
                    <div className='social-link'>
                        <a href="https://github.com/AreTeeYT" target='_blank'>
                            <IconContext value={{size: "2.5em",className: "social-icon"}}>
                                <FaGithub/>
                            </IconContext>
                            <div>
                                <p className='social-link-text'>GitHub: @AreTeeYT</p>
                            </div>
                        </a>
                    </div>
                    <div className='social-link'>
                        <a href='https://www.linkedin.com/in/robert-mound-2782a82a1/' target='_blank'>
                            <IconContext value={{size: "2.5em", className: "social-icon"}}>
                                <FaLinkedin/>
                            </IconContext>
                            <div>
                                <p className='social-link-text'>LinkedIn: Robert Mound</p>
                            </div>
                        </a>
                    </div>
                    <div className='social-link'>
                        <a href="https://www.instagram.com/rob_mound" target='_blank'>
                            <IconContext value={{size: "2.5em",className: "social-icon"}}>
                                <FaInstagram/>
                            </IconContext>
                            <div>
                                <p className='social-link-text'>Instagram: @rob_mound</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}