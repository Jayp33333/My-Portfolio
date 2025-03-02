import React from 'react';
import { ABOUT_ME } from '../utils/data';
import ContactInfoCard from '../components/ContactInfoCard.jsx';
import { IoMdMail } from 'react-icons/io';
import { IoPhonePortrait } from 'react-icons/io5';
import { MdOutlineWeb } from 'react-icons/md';

const ContactMe = () => {
  return (
    <section id='contact'>
      <div className='container mx-auto p-10'>
        <div className='w-full lg:w-[60vw] mx-auto'>
          <h4 className='section-title'>Contact Me</h4>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16'>
          <div>
            <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email} />
            <ContactInfoCard icon={<IoPhonePortrait />} text={ABOUT_ME.phone} />
          </div>

          <div>
            <h5 className='md:hidden text-primary text-lg font-medium mt-4 pb-5'>Contact Form</h5>
            <form className='flex flex-col'>
              <input
                type='text'
                name='fullname'
                placeholder='Full Name'
                className='input-box'
                autoComplete='off'
              />

              <input
                type='text'
                name='email'
                placeholder='Email'
                className='input-box'
                autoComplete='off'
              />

              <textarea
                type='text'
                name='message'
                placeholder='Message'
                rows={3}
                className='input-box'
                autoComplete='off'
              ></textarea>

              <button className='action-btn btn-scale-anim'>SUBMIT</button>
            </form>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default ContactMe;