import React from "react";
import "../../../customcsss/Custom.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import profile from "../../../assets/professional-removebg-preview.png";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contacts = () => {
  const sendMessage = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    toast(`Thanks ${name}`);
    form.reset();
  };
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
            <input
              className="input input-bordered input-info my-3 w-full"
              name="name"
              type="text"
            />

            <input
              className="input input-bordered input-info my-3 w-full"
              name="email"
              type="email"
            />
            <textarea
              className="w-full input-bordered input-info "
              name="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <input className="btn-1" type="submit" value="Send " />
          </form>
        </aside>

        <aside2 className="py-[200px] bg-info px-3 rounded-lg">
          <header className="flex justify-between items-center text-6xl text-white font-serif">
            <h1>
              {" "}
              Sarwar <br /> Hossain
            </h1>
            <figure className="p-[2px] bg-[#F6B443] rounded-full">
              <img
                className="h-32 w-32 border-4 border-blue-400  rounded-full "
                src={profile}
                alt=""
              />
            </figure>
          </header>
          <div className="mt-5">
            <h3 className="text-xl text-white"> Phone </h3>
            <p className="text-3xl font-thin text-slate-500">+880160219933</p>
            <p className="mt-3">
              <h3 className="text-xl text-white"> Gmail </h3>
              <p className="text-2xl font-bold text-slate-500">
                sarwarasik@gmail.com
              </p>
            </p>
            <p className=" flex gap-3 mt-8 text-3xl">
              <a href="https://www.facebook.com/profile.php?id=100087624802395" className="text-white shadow-lg p-2" target={'_blank'}>
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/in/sarwar-hossain-a29660257/" className="text-white shadow-lg p-2" target={'_blank'}>
                <FaLinkedinIn />
              </a>

              <a href="https://github.com/sarwar-asik" className="text-slate-500 shadow-lg p-2" target={'_blank'}>
                <FaGithub />
              </a>
            </p>
          </div>
        </aside2>
      </section>
    </div>
  );
};

export default Contacts;
