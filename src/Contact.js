import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import {
  faCheckCircle,
  faMailBulk,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

export default function Index() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);

  const form = useRef();

  let errorLength = 0;
  console.log(errors, errorLength);

  const validate = () => {
    errorLength = 0;
    setErrors([]);
    if (name === "") {
      errorLength++;
      setErrors((error) => [
        ...error,
        { type: "name", message: "Name is required" },
      ]);
    }
    if (email === "") {
      errorLength++;
      setErrors((error) => [
        ...error,
        { type: "email", message: "Email is required" },
      ]);
    }
    if (name !== "" && name.length < 2) {
      errorLength++;
      setErrors((error) => [
        ...error,
        { type: "name", message: "Name must be at least 2 characters" },
      ]);
    }
    // Regex for email validation
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email !== "" && !re.test(email)) {
      errorLength++;
      setErrors((error) => [
        ...error,
        { type: "email", message: "Email is invalid" },
      ]);
    }
    // Regex for phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (phone !== "" && !phoneRegex.test(phone)) {
      errorLength++;
      setErrors((error) => [
        ...error,
        { type: "phone", message: "Phone number is invalid" },
      ]);
    }
    if (errorLength === 0) {
      return true;
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="pt-24 bg-background-about bg-cover min-h-screen font-source px-8 lg:px-32 xl:px-72">
      <p className="text-4xl text-center md:text-left md:text-6xl tracking-wider font-bebas text-white">
        GET IN TOUCH
      </p>
      <div className="bg-gray-100 rounded-3xl mt-8 shadow-2xl flex flex-col md:flex-row overflow-hidden">
        <div className="py-8 px-12 md:w-2/3">
          <p className="text-[#2f2f2f] text-xl font-medium">
            Drop me a message
          </p>
          <form ref={form} onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-8 mt-8">
              <span className="flex flex-col gap-8 md:w-1/2">
                <div>
                  <label className="text-small text-black">Your Name</label>
                  <br />
                  <input
                    type="text"
                    className="text-sm border-b-1 border-form-line w-full mt-2 bg-gray-100"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    name="from_name"
                  />
                  {errors.map((error, index) => {
                    if (error.type === "name") {
                      return (
                        <p
                          className="text-red-500 text-xs font-semibold"
                          key={index}
                        >
                          {error.message}
                        </p>
                      );
                    }
                  })}
                </div>
                <div>
                  <label className="text-small text-black">Phone Number</label>
                  <br />
                  <input
                    type="text"
                    className="text-sm border-b-1 border-form-line w-full mt-2 bg-gray-100"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    name="phone_number"
                  />
                  {errors.map((error, index) => {
                    if (error.type === "phone") {
                      return (
                        <p
                          className="text-red-500 text-xs font-semibold"
                          key={index}
                        >
                          {error.message}
                        </p>
                      );
                    }
                  })}
                </div>
              </span>
              <span className="flex flex-col gap-8 md:w-1/2">
                <div>
                  <label className="text-small text-black">Email Address</label>
                  <br />
                  <input
                    type="text"
                    className="text-sm border-b-1 border-form-line w-full mt-2 bg-gray-100"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    name="from_email"
                    required
                  />
                  {errors.map((error, index) => {
                    if (error.type === "email") {
                      return (
                        <p
                          className="text-red-500 text-xs font-semibold"
                          key={index}
                        >
                          {error.message}
                        </p>
                      );
                    }
                  })}
                </div>
              </span>
            </div>
            <div className="mt-8">
              <label className="text-small text-black">Message</label>
              <br />
              <textarea
                className="text-sm border-1 border-form-line w-full mt-2 bg-gray-100 rounded"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                rows="4"
                name="message"
              />
              {errors.map((error, index) => {
                if (error.type === "message") {
                  return (
                    <p
                      className="text-red-500 text-xs font-semibold"
                      key={index}
                    >
                      {error.message}
                    </p>
                  );
                }
              })}
            </div>
            <input
              className="px-4 py-1 bg-[#2f2f2f] text-white font-semibold rounded mt-6 cursor-pointer"
              type="submit"
              value="Send"
            />
            {submitted ? (
              <div className="flex gap-2 items-center mt-4">
                <FontAwesomeIcon icon={faCheckCircle} />
                <p>Now just mail the form through your mailing app.</p>
              </div>
            ) : null}
          </form>
        </div>
        <div className="bg-[#2f2f2f] md:w-1/3 p-12 text-white">
          <p className="text-lg font-medium">Contact Information</p>
          <span className="flex gap-5 items-center mt-14">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <p>Cosmos Greens, Bhiwadi, Rajasthan, India (301019)</p>
          </span>
          <span className="flex gap-5 items-center mt-14">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <p>(+91) 9549305890</p>
          </span>
          <span className="flex gap-5 items-center mt-14">
            <FontAwesomeIcon icon={faMailBulk} />
            <p
              className="cursor-pointer"
              onClick={() => {
                window.location.href = "mailto:2020kucp1023@iiitkota.ac.in";
              }}
            >
              2020kucp1023@iiitkota.ac.in
            </p>
          </span>
          <span className="flex gap-6 items-center mt-14">
            <FontAwesomeIcon
              icon={brands("google")}
              className="cursor-pointer"
            />
            <FontAwesomeIcon
              icon={brands("facebook")}
              className="cursor-pointer"
            />
            <FontAwesomeIcon
              icon={brands("instagram")}
              className="cursor-pointer"
            />
            <FontAwesomeIcon
              icon={brands("youtube")}
              className="cursor-pointer"
            />
            <FontAwesomeIcon
              icon={brands("twitter")}
              className="cursor-pointer"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
