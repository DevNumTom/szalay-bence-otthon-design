import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import CustomImage from './CustomImage';
export default function Contact() {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let formData = new FormData();
  //   fetch('/', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: new URLSearchParams(formData).toString(),
  //   })
  //     .then(() => console.log('Form successfully submitted'))
  //     .catch((error) => alert(error));
  // };

  return (
    <section id='kapcsolat'>
      <div className='custom-img'>
        <CustomImage
          radius={50}
          src='/images/profilkep_2.jpg'
          alt='Kapcsolat'
        />
      </div>
      <form
        name='contact'
        method='POST'
        data-netlify='true'
        data-netlify-recaptcha='true'
      >
        <input type='hidden' name='form-name' value='contact' />
        <input type='text' name='name' placeholder='Teljes név' />
        <input type='email' name='email' placeholder='E-mail' />
        <input type='text' name='phone' placeholder='Telefon (nem kötelező)' />
        <textarea name='message' placeholder='Üzenet...'></textarea>
        <div data-netlify-recaptcha='true'></div>
        <button type='submit'>
          <FontAwesomeIcon width={20} cursor={'pointer'} icon={faPaperPlane} />
          <span>Küldés</span>
        </button>
      </form>
      <style jsx>{`
        #kapcsolat {
          max-width: 1200px;
          margin: 0 auto 50px;
          width: 80%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          min-height: 500px;
        }
        .custom-img {
          width: 40%;
        }
        form {
          width: 40%;
          text-align: center;
        }
        input,
        textarea {
          border-radius: 16px;
          width: 100%;
          border: 1px solid rgba(0, 0, 0, 0.2);
          outline: none;
          padding: 0 10px;
          -webkit-box-shadow: 10px 10px 14px -9px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 10px 10px 14px -9px rgba(0, 0, 0, 0.75);
          box-shadow: 10px 10px 14px -9px rgba(0, 0, 0, 0.75);
        }
        input {
          margin-bottom: 20px;
          min-height: 50px;
        }
        textarea {
          padding: 10px;
          min-height: 100px;
        }
        button {
          width: 200px;
          border-radius: 16px;
          height: 40px;
          background: rgba(0, 0, 0, 0.9);
          color: white;
          font-weight: 700;
          margin: 20px 0;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }
        button:hover {
          transform: scale(1.1);
        }
        span {
          margin-left: 10px;
        }
        @media screen and (max-width: 776px) {
          #kapcsolat {
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
          form {
            width: 80%;
            margin-top: 25px;
          }
          input {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
