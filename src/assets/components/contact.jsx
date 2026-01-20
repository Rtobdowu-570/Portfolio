import React from 'react'
import '../styles/main.css'

const Contact = () => {
  return (
    <>
    <div className="contact-section" id="contact">
        <div className="direct-contact">
            <h1>
                Let’s turn your ideas into reality
            </h1>
            <a href="mailto:gcah4451@gmail.com"> gcah4451@gmail.com <i className="fa fa-envelope"></i></a>
        </div>

        <div className="other-contact">
            <ul className="contact-list">
                <li className="other-contacts">
                    <a href="https://github.com/Rtobdowu-570">Github</a>
                    <p>@Rtobdowu-570</p>
                </li>

                <li className="other-contacts">
                    <a href="https://x.com/AndrewPete38959">X</a>
                    <p>AndrewPete38959Andrew</p>
                </li>

                <li className="other-contacts">
                    <a href="mailto:gcah4451@gmail.com">Email</a>
                    <p>gcah4451@gmail.com</p>
                </li>

                <li className="other-contacts">
                    <a href="https://github.com/Rtobdowu-570">Phone</a>
                    <p>+234 803 878 6290</p>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Contact