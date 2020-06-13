import React from "react"

import Layout from "../components/layout"
import SubTitle from "../components/subtitle/subtitle"
import SEO from "../components/seo"
import ContactImg from "../images/contact.png"

import "./contact.css"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="section--contact">
      <SubTitle title="Contact" />
      <div className="contact--form-wrapper">
        <div>
          <p className="contact--intro">Hi, let's get in touch!</p>
          <img
            className="contact--img"
            src={ContactImg}
            alt="illustration of someone on the phone"
          ></img>
        </div>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honepot="bot-field"
        >
          <input
            type="hidden"
            aria-label="text"
            name="form-name"
            value="contact"
          />
          <p className="contact--input-wrapper">
            <label htmlFor="name" className="contact--label">
              Your Name
            </label>
            <input
              className="contact--input"
              type="text"
              name="name"
              id="name"
              placeholder=" Darth Vader"
              aria-label="text"
              required
            />
          </p>
          <p className="contact--input-wrapper">
            <label htmlFor="email" className="contact--label">
              Your Email
            </label>
            <input
              className="contact--input"
              type="email"
              name="email"
              id="email"
              placeholder="darthvader@deathstar.com"
              aria-label="text"
              required
            />
          </p>
          <p className="contact--input-wrapper contact--input-wrapper__textarea">
            <label htmlFor="message" className="contact--label">
              Message
            </label>
            <textarea
              className="contact--input"
              name="message"
              id="message"
              placeholder="No, I am your father."
              rows="8"
              aria-label="text"
              required
            ></textarea>
          </p>
          <p className="contact--button">
            <button className="button--primary" type="submit">
              Send
            </button>
          </p>
        </form>
      </div>
    </section>
  </Layout>
)

export default Contact
