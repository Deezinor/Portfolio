import React from "react";
import Header from "../components/header";
import ContactForm from "../components/contactForm";

const Contact: React.FC = () => {
  return (
    <section>
      <Header />
      <section className="container mx-auto">
        <div className="flex flex-col justify-center mx-4 mb-8 gap-6">
          <div>
            <p className="w-[40ch]">
              Please feel free to contact <br />
              using the details below <br />
              if you wish to discuss job offer <br />
              or future projects.
            </p>
          </div>
          <div>
            <h2 className="font-bold">Telephone</h2>
            <p>+44 7565 312 904</p>
          </div>
          <div>
            <h2 className="font-bold">Email</h2>
            <p>jboultonwork@gmail.com</p>
          </div>
          <p>Or alternatively, send me a message below</p>
        </div>
        <div className="section flex flex-col justify-center mx-4 gap-6">
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
