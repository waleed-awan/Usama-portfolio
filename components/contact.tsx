"use client";
import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import SubmitBtn from "../components/submit-button"; // Assuming you have this component

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    try {
      const result = await emailjs.sendForm(
        "service_1tacvzh",
        "template_kgmrju1",
        form.current,
        "dAfU53U1RVAXjG7On"
      );
      toast.success("Email sent successfully!");
      console.log("SUCCESS!", result.text);
    } catch (error) {
      toast.error("Failed to send email. Please try again.");
      console.log("FAILED...", error);
    }
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="mb-11" id="contact">
      <ToastContainer />
      <div className="flex justify-center text-4xl font-semibold mb-8">
        Contact me
      </div>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto: raheelmusa397@gmail.com">
          usama123@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          className="h-14 px-4 mb-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="name"
          type="name"
          required
          maxLength={500}
          placeholder="Your name"
        />
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="email"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
