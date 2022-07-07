import styled from "styled-components";
import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarker,
  FaMedium,
  FaPaperPlane,
} from "react-icons/fa";
import { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

const ContactForm = ({ addNewFormData }) => {
  const githubLink = "https://github.com/Jose-Escobedo";
  const linkedInLink = "https://www.linkedin.com/in/jose-escobedo-89b943232/";
  const mediumLink = "https://medium.com/@escobedo.jose";
  const linkClick = (url) => {
    window.location.assign(url);
  };

  const blankForm = {
    name: "",
    email: "",
    message: "",
  };

  const [newFormData, setFormData] = useState(blankForm);

  const { name, email, message } = newFormData;

  const handleNameChange = (e) => {
    setFormData({
      ...newFormData,
      name: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setFormData({
      ...newFormData,
      email: e.target.value,
    });
  };

  const handleMessageChange = (e) => {
    setFormData({
      ...newFormData,
      message: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: `${process.env.REACT_APP_MAILER_EMAIL}`,
      Password: `${process.env.REACT_APP_MAILER_PASSWORD}`,
      To: `${process.env.REACT_APP_MAILER_EMAIL}`,
      From: `${process.env.REACT_APP_MAILER_EMAIL}`,
      Subject: `Message from ${newFormData.name}`,
      Body: `Email: ${newFormData.email} Message: ${newFormData.message}`,
    }).then((message) => alert(message));
    setFormData(blankForm);
  };

  return (
    <ContactFormStyled>
      <div className="contact-wrapper">
        <form
          id="contact-form"
          className="form-horizontal"
          onSubmit={handleFormSubmit}
        >
          <div className="form-group">
            <input
              type="text"
              id="name"
              placeholder="NAME"
              name="name"
              value={newFormData.name}
              onChange={handleNameChange}
              required
            />
            <input
              type="email"
              id="email"
              placeholder="EMAIL"
              name="email"
              value={newFormData.email}
              onChange={handleEmailChange}
              required
            />
            <textarea
              rows="6"
              placeholder="MESSAGE"
              name="message"
              value={newFormData.message}
              onChange={handleMessageChange}
              required
            ></textarea>
            <button
              className="btn btn-primary send-button"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div className="alt-send-button">
                <FaPaperPlane className="paper-plane" />
                <span className="send-text">SEND</span>
              </div>
            </button>
          </div>
        </form>

        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <FaMapMarker />
              <span className="contact-text">Los Angeles, California</span>
            </li>

            <li className="list-item">
              <FaEnvelope />
              <span className="contact-text">
                <a href="mailto:jose@escobedojose.dev" title="Send me an email">
                  jose@escobedojose.dev
                </a>
              </span>
            </li>
          </ul>

          <div className="social-media-container">
            <ul className="social-media-list">
              <li onClick={(e) => linkClick(githubLink)}>
                <a className="contact-icon" href={githubLink}>
                  <FaGithub />
                </a>
              </li>
              <li onClick={(e) => linkClick(linkedInLink)}>
                <a className="contact-icon" href={linkedInLink}>
                  <FaLinkedin />
                </a>
              </li>
              <li onClick={(e) => linkClick(mediumLink)}>
                <a className="contact-icon" href={mediumLink}>
                  <FaMedium />
                </a>
              </li>
            </ul>
          </div>

          <div className="copyright">Jose Escobedo &copy;2022</div>
        </div>
      </div>
    </ContactFormStyled>
  );
};

const ContactFormStyled = styled.div`
  min-height: 100%;
  min-width: 100%;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;

  .contact-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 1em;
    position: relative;
    width: 100%;
    background: linear-gradient(#010106, var(--background-dark-grey))
      padding-box;

    @media screen and (max-width: 1100px) {
      flex-direction: column;
      width: 100%;
      padding-bottom: 3em;
    }
  }

  .form-horizontal {
    width: 50%;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    padding: 2em;
    @media screen and (max-width: 1100px) {
      width: 100%;
      padding: 0.5em;
    }
    @media screen and (max-width: 410px) {
      padding: 0.4em;
    }
  }
  .form-group {
    width: 100%;
  }

  .form-group input {
    width: 100%;
    background-color: transparent;
    color: var(--white-color);
    border: none;
    border: 1px solid var(--white-color);
    padding: 0.5em 0.5em;
    @media screen and (max-width: 760px) {
      font-size: 0.9rem;
    }
    @media screen and (max-width: 435px) {
      font-size: 0.7rem;
    }
  }

  textarea {
    width: 100%;
    max-width: 100%;
    max-height: 150%;
    background-color: transparent;
    color: var(--white-color);
    letter-spacing: 1px;
    border: 1px solid var(--white-color);
    padding: 0.5em 0.5em;
    @media screen and (max-width: 760px) {
      font-size: 0.9rem;
    }

    @media screen and (max-width: 435px) {
      font-size: 0.7rem;
    }
  }

  .paper-plane {
    color: white;
  }

  .send-button {
    margin-top: 15px;
    width: 100%;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
    border-radius: 0.2em;
    border: transparent;
    padding-top: 0.2em;
    background: linear-gradient(darkcyan, var(--primary-color)) padding-box;
    cursor: pointer;
  }

  .alt-send-button {
    width: 100%;
    height: 34px;
    transition: all 0.2s ease-in-out;
  }

  .send-text {
    display: block;
    margin-top: 6px;
    font: 700 12px "Montserrat", sans-serif;
    letter-spacing: 2px;
    color: white;
  }

  .alt-send-button:hover {
    transform: translate3d(0px, -29px, 0px);
  }

  /* Begin Right Contact Page */
  .direct-contact-container {
    width: 50%;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 2em;
    @media screen and (max-width: 1100px) {
      font-size: 0.5rem;
      padding: 1em;
      width: 100%;
      align-items: center;
      span {
        max-width: 100%;
      }
    }

    @media screen and (max-width: 435px) {
      font-size: 0.3rem;
    }
  }

  /* Location, Phone, Email Section */
  .contact-list {
    list-style-type: none;
    padding: 1em 0;
    display: flex;
    flex-direction: column;
  }

  .list-item {
    line-height: 0.5em;
    color: #aaa;
    display: flex;
    align-items: center;
    margin-bottom: 1em;
    @media screen and (max-width: 480px) {
      margin-bottom: 1.6em;
      line-height: 1em;
      font-size: 1rem;
      a {
        font-size: 0.7rem;
      }
    }
  }

  .contact-text {
    letter-spacing: 1.9px;

    color: var(--white-color);
    text-decoration: none;
    margin-left: 1.5em;
  }

  .contact-list span {
    font-size: 0.8rem;
    @media screen and (max-width: 480px) {
      font-size: 0.7rem;
    }
    @media screen and (max-width: 435px) {
      font-size: 0.5rem;
    }
    @media screen and (max-width: 410px) {
      font-size: 0.6rem;
    }
  }

  .contact-text a {
    text-decoration: none;
    transition-duration: 0.2s;

    @media screen and (max-width: 435px) {
      font-size: 0.5rem;
    }
    @media screen and (max-width: 410px) {
      font-size: 0.6rem;
    }
  }

  .contact-text a:hover {
    color: #fff;
    text-decoration: none;
  }

  /* Social Media Icons */
  .social-media-list {
    position: relative;
    font-size: 22px;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
  }

  .social-media-list li a {
    color: #fff;
  }

  .social-media-list li {
    position: relative;
    display: inline-block;
    min-height: 60px;
    width: 60px;
    justify-content: space-between;
    line-height: 60px;
    border-radius: 50%;
    color: #fff;
    background-color: rgb(27, 27, 27);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    @media screen and (max-width: 410px) {
      min-height: 55px;
      min-width: 55px;
    }
  }

  .social-media-list li:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
    line-height: 60px;
    border-radius: 50%;
    opacity: 0;
    box-shadow: 0 0 0 1px #fff;
    transition: all 0.2s ease-in-out;
  }

  .social-media-list li:hover {
    background-color: #fff;
  }

  .social-media-list li:hover:after {
    opacity: 1;
    transform: scale(1.12);
    transition-timing-function: cubic-bezier(0.37, 0.74, 0.15, 1.65);
  }

  .social-media-list li:hover a {
    color: #000;
  }

  .copyright {
    font: 300 14px "Montserrat", sans-serif;
    color: var(--white-color);
    letter-spacing: 1px;
    text-align: center;
    margin-top: 1.2rem;
    @media screen and (max-width: 480px) {
      margin-top: 1rem;
    }
  }

  .social-media-container {
    padding: 1em;
    width: 100%;
    border-top: 1px solid var(--white-color);
    border-bottom: 1px solid var(--white-color);
  }
`;
export default ContactForm;
