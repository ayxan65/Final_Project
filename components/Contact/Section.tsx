"use client";
import React from "react";
import { useState } from "react";
import ContactMock from "@/app/Mock/ContactMock";

const Section = () => {
const [name, setname] = useState('');
const [email, setemail] = useState('');
const [phone, setphone] = useState('');
const [message, setmessage] = useState('');

const handleSubmit = (e:any) => {
  e.preventDefault();
  
  if (!name || !message || !email || !phone) {
    alert('Boş xanaları doldurun');
  } else{
    alert('müraciətiniz qeydə alındı.')
  }
};


  return (
    <div>
      <div className="flex justify-center bg-contact ">
        <div className="mt-10  w-[75vw]  flex ">
          <ContactMock />
          <div>
            <div className="ml-12 mt-2 text-3xl font-bold text-primary">
              Suallarınız var?
            </div>
            <div className="text-primary ml-12 mt-2">
              Formu doldurun. Yaxın zamanda sizinlə əlaqə saxlayacayıq.
            </div>
            <div className=" ml-10 mt-6 w-[420px]">
             <form onSubmit={handleSubmit}>
             <input
             value={name}
             onChange={(e:any)=>{setname(e.target.value)}}
             placeholder="Adınız və Soyadınız"
             className=" h-[50px] outline-none my-2 rounded-lg w-[420px]   p-4  bg-fourth mx-2 out border-grey"
             type="text"
           />
           <input
            value={email}
            onChange={(e:any)=>{setemail(e.target.value)}}
             placeholder="Email ünvanı"
             className="h-[50px] outline-none rounded-lg my-2 w-[420px] p-4 bg-fourth mx-2 out border-grey"
             type="text"
           />
           <input
            value={phone}
            onChange={(e:any)=>{setphone(e.target.value)}}
             placeholder="Əlaqə nömrəsi"
             className="h-[50px] outline-none rounded-lg my-2 w-[420px] p-4 bg-fourth mx-2 out border-grey"
             type="text"
           />
           <textarea
            value={message}
            onChange={(e:any)=>{setmessage(e.target.value)}}
             className="bg-fourth w-[420px] h-[200px] my-2 p-4 outline-none rounded-lg mx-2 border-grey"
             placeholder="mesajınız  "
           ></textarea>
           <button
             
             className="mx-2 mt-3 mb-5 bg-primary rounded text-white px-4 py-2 w-[130px]"
           >
             Göndər
           </button>
             </form>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12153.868734784415!2d49.8557945!3d40.3985001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40306351d4b38089%3A0xb74ef857d0a65d43!2sJET%20Academy%20Genclik!5e0!3m2!1sen!2saz!4v1721066258169!5m2!1sen!2saz"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Section;
