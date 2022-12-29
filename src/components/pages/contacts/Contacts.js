import React from "react";
import "../../../customcsss/Custom.css"
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {
    const sendMessage = event =>{
        event.preventDefault()
        const form = event.target ;
        const name =form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        toast(`Thanks ${name}`)
        form.reset()
        
        
    }
  return (
    <div>
      <header className="py-[150px] bg-slate-800 flex flex-col justify-center items-center gap-2 text-white">
        <h1 className=" text-4xl font-serif"> My Blogs </h1>
        <h3 className=" font-thin text-sm ">
          <span> Home </span>
          <span> {">"} </span>
          <span> Contacts</span>
        </h3>

      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-5">
       <aside className=" p-3 shadow-lg">
       <h1 className="headings1"> Message Me , </h1>
        <form onSubmit={sendMessage} action="">
            <input className="input input-bordered input-info my-3 w-full" name='name' type="text"  />

            <input className="input input-bordered input-info my-3 w-full" name='email' type="email"  />
            <textarea className="w-full input-bordered input-info " name="message" id="" cols="30" rows="10"></textarea>
            <input className="btn-1" type="submit" value="Send " />
        </form>
       </aside>

       <aside2 className='py-[200px] bg-info px-3 rounded-lg'>
        


      </aside2>


      </section>
      
    </div>
  );
};

export default Contacts;
