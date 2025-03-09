import React from 'react'
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {

  return (
    <section
      id="contact"
      className="w-full py-10 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="Contact Me" />
      </div>
      <div className="w-full">
      <ContactLeft />
      </div>
    </section>
  );
}

export default Contact