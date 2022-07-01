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

const ContactForm = () => {
  const githubLink = "https://github.com/Jose-Escobedo";
  const linkedInLink = "https://www.linkedin.com/in/jose-escobedo-89b943232/";
  const mediumLink = "https://medium.com/@escobedo.jose";
  const linkClick = (url) => {
    window.location.assign(url);
  };
  return (
    <ContactFormStyled>
      <div className="contact-wrapper">
        <form id="contact-form" className="form-horizontal">
          <div className="form-group">
            <input
              type="text"
              id="name"
              placeholder="NAME"
              name="name"
              required
            />
            <input
              type="email"
              id="email"
              placeholder="EMAIL"
              name="email"
              required
            />
            <textarea
              rows="6"
              placeholder="MESSAGE"
              name="message"
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
  height: 100%;
  width: 100%;
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
  }

  .form-horizontal {
    width: 50%;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    padding: 2em;
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
  }

  textarea {
    width: 100%;
    max-width: 100%;
    background-color: transparent;
    color: var(--white-color);
    letter-spacing: 1px;
    border: 1px solid var(--white-color);
    padding: 0.5em 0.5em;
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
  }

  .contact-text {
    letter-spacing: 1.9px;
    font-size: 0.5em;
    color: var(--white-color);
    text-decoration: none;
    margin-left: 1.5em;
  }

  .contact-list span {
    font-size: 0.8em;
  }

  .contact-text a {
    text-decoration: none;
    transition-duration: 0.2s;
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
  }

  .social-media-container {
    padding: 1em;
    width: 100%;
    border-top: 1px solid var(--white-color);
    border-bottom: 1px solid var(--white-color);
  }
`;
export default ContactForm;
