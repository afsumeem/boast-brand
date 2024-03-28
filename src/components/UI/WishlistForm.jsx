/* eslint-disable @next/next/no-img-element */
"use client";
import { Button, Input, ModalHeader } from "@nextui-org/react";
import style from "../../styles/WishlistForm.module.css";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Swal from "sweetalert2";

const WishlistForm = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const [formData, setFormData] = useState({
    name: "",
    instagramId: "",
    otherSocialMediaId: "",
    phoneNo: "",
    followers: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);

  const handleJoinNow = () => {
    onOpen();
  };

  const handleClose = () => {
    onClose();
    resetFormData();
  };

  const resetFormData = () => {
    setFormData({
      name: "",
      instagramId: "",
      otherSocialMediaId: "",
      phoneNo: "",
      followers: "",
    });
    setEmail("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    handleJoinNow();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // handleClose(); // Close modal after form submission
    const user = {
      name: formData.name,
      instagramId: formData.instagramId,
      otherSocialMediaId: formData.otherSocialMediaId,
      phoneNo: formData.phoneNo,
      email: email,
      followers: formData.followers,
    };
    const res = await axios.post(
      "https://boast-server.vercel.app/api/v1/add-waitlist",
      user
    );
    // console.log(res.data)
    if (res.data.insertedId) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Your on the waitlist now!",
      });
      handleClose();
    } else if (res.data.message === "This email already registered") {
      Swal.fire({
        icon: "error",
        title: "Ops..",
        text: "This email already exist!",
      });
      handleClose();
    }
    // console.log("Form submitted with data:", user, "email:", email);
  };

  return (
    <>
      <div
        id="wishlistForm"
        className="flex flex-col-reverse lg:flex-row gap-10 md:gap-20 lg:gap-0 justify-between items-center px-10 lg:px-28 pt-10 lg:pt-20 wishlist-section overflow-hidden"
      >
        <img
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          className="w-[663px] "
          // style={{ width: "663px", height: "549px" }}
          src="https://res.cloudinary.com/dy80ftu9k/image/upload/v1710427161/BOAST/Screenshot-2023-03-08-at-12.50.37-AM-1024x848_iitlok.png"
          alt=""
        />

        <div
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          className="mr-0 lg:mr-24 flex flex-col items-center justify-center"
        >
          <h1 className=" text-white text-center lg:text-start text-xl lg:text-2xl mb-2 font-bold ml:0 lg:-ml-3">
            Want to be an early adaptor?
          </h1>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-2 hero-title font-extrabold"
            style={{ letterSpacing: "-2px" }}
          >
            <span className=" font-extrabold">Join Early Access!</span>
          </h2>
          <div className="my-3">
            <form className="flex " onSubmit={handleSubmitEmail}>
              <input
                type="email"
                required
                placeholder="Enter Your Email here"
                className={`text-black rounded-l-lg bg-white border-none border-black px-3 focus:outline-none ${style.placeholderWhite}`}
                onChange={handleEmailChange}
                value={email}
              />
              <Button
                type="submit"
                onClick={handleJoinNow}
                className="rounded-none text-white bg-black rounded-r-lg"
              >
                Join Now
              </Button>
            </form>
          </div>
          <Modal
            backdrop="blur"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            className="max-w-full h-full join-wishlist py-2  mt-8  overflow-scroll overflow-x-hidden"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalBody className=" flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center ">
                      <h2
                        className="text-center text-white text-4xl md:text-5xl"
                        style={{
                          fontFamily: "Raleway",
                          fontWeight: "800",
                        }}
                      >
                        Join the Wishlist
                      </h2>
                      <img
                        className="h-[50px] w-[50px]"
                        src="https://res.cloudinary.com/dy80ftu9k/image/upload/v1710443479/BOAST/main_hwoc1p.png"
                        alt=""
                      />{" "}
                    </div>
                    <p
                      className="text-center text-white font-extrabold text-lg md:text-[22px]"
                      style={{
                        fontFamily: "Raleway",
                        fontWeight: "700",
                      }}
                    >
                      Sign up to obtain early access to Boast.
                    </p>
                    <p className="text-center text-white text-sm md:text-base">
                      <span
                        className="text-black font-extrabold text-sm md:text-base"
                        style={{
                          fontFamily: "Raleway",
                          fontWeight: "800",
                        }}
                      >
                        Minimum Eligibility is 1000 followers on
                      </span>
                      <br />
                      <span
                        className="text-red-600 text-sm md:text-base font-extrabold"
                        style={{
                          fontFamily: "Raleway",
                          fontWeight: "800",
                        }}
                      >
                        Instagram
                      </span>
                      /
                      <span
                        className="text-blue-700 text-sm md:text-base font-extrabold"
                        style={{
                          fontFamily: "Raleway",
                          fontWeight: "800",
                        }}
                      >
                        Facebook
                      </span>
                      /
                      <span
                        className="text-sky-500 text-sm md:text-base font-extrabold"
                        style={{
                          fontFamily: "Raleway",
                          fontWeight: "800",
                        }}
                      >
                        Twitter
                      </span>
                      /
                      <span
                        className="text-black text-sm md:text-base font-extrabold"
                        style={{
                          fontFamily: "Raleway",
                          fontWeight: "800",
                        }}
                      >
                        Tiktok
                      </span>
                    </p>
                    <p
                      style={{
                        fontFamily: "Raleway",
                        fontWeight: "500",
                      }}
                      className="mt-3 mb-4 text-center text-slate-950 font-thin text-xs md:text-sm"
                    >
                      We deeply value your privacy. <br />
                      Your email will only be used for our product waitlist.
                      <br />
                      Your information will not be sold to third parties.
                    </p>
                    <form onSubmit={handleSubmit}>
                      <label
                        htmlFor="name"
                        style={{
                          fontFamily: "Raleway",
                          fontWeight: "400",
                        }}
                        className="text-white"
                      >
                        Name
                      </label>
                      <input
                        // variant="bordered"
                        className="bg-inherit rounded-none hover:border-white border border-white py-2 w-full focus:outline-none px-3 mb-2 text-white"
                        style={{
                          fontFamily: "Raleway",
                          fontWeight: "400",
                        }}
                        id="name"
                        type="text"
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-2">
                        <div>
                          <label
                            htmlFor="instagramId"
                            className="text-white"
                            style={{
                              fontFamily: "Raleway",
                              fontWeight: "400",
                            }}
                          >
                            Instagram ID
                          </label>
                          <input
                            // variant="underlined"
                            className="bg-inherit rounded-none hover:border-white border border-white py-2 w-full focus:outline-none px-3 text-white"
                            style={{
                              fontFamily: "Raleway",
                              fontWeight: "400",
                            }}
                            type="text"
                            label="Instagram ID"
                            name="instagramId"
                            value={formData.instagramId}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <label
                            style={{
                              fontFamily: "Raleway",
                              fontWeight: "400",
                            }}
                            htmlFor="otherSocialMediaId"
                            className="text-white"
                          >
                            Other Social Media ID
                          </label>

                          <input
                            className="bg-inherit rounded-none hover:border-white border border-white py-2 w-full focus:outline-none px-3 text-white"
                            style={{
                              fontFamily: "Raleway",
                              fontWeight: "400",
                            }}
                            type="text"
                            label="Other Social Media ID"
                            name="otherSocialMediaId"
                            id="otherSocialMediaId"
                            value={formData.otherSocialMediaId}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-2">
                        <div>
                          <label
                            htmlFor="phoneNo"
                            style={{
                              fontFamily: "Raleway",
                              fontWeight: "400",
                            }}
                            className="text-white"
                          >
                            Phone No.
                          </label>
                          <input
                            className="bg-inherit rounded-none hover:border-white border border-white py-2 w-full focus:outline-none px-3 text-white"
                            style={{
                              fontFamily: "Raleway",
                              fontWeight: "400",
                            }}
                            type="text"
                            label="Phone No."
                            name="phoneNo"
                            id="phoneNo"
                            value={formData.phoneNo}
                            onChange={handleInputChange}
                          />{" "}
                        </div>
                        <div>
                          <label
                            style={{
                              fontFamily: "Raleway",
                              fontWeight: "400",
                            }}
                            htmlFor="email"
                            className="text-white"
                          >
                            Email
                          </label>
                          <input
                            className="bg-inherit rounded-none hover:border-white border border-white py-2 w-full focus:outline-none px-3 text-white"
                            style={{
                              fontFamily: "Raleway",
                              fontWeight: "400",
                            }}
                            type="email"
                            id="email"
                            label="Email"
                            name="email"
                            value={email}
                          />
                        </div>
                      </div>

                      {/*  */}
                      <label
                        style={{
                          fontFamily: "Raleway",
                          fontWeight: "400",
                        }}
                        htmlFor="Insta/FB/tiktok"
                        className="text-white"
                      >
                        Number of followers on Insta/FB/tiktok
                      </label>
                      <input
                        className="bg-inherit rounded-none hover:border-white border border-white py-2 w-full focus:outline-none px-3 text-white"
                        type="text"
                        // placeholder="Number of followers on Insta/FB/tiktok"
                        style={{
                          fontFamily: "Raleway",
                          fontWeight: "400",
                        }}
                        name="followers"
                        id="Insta/FB/tiktok"
                        value={formData.followers}
                        onChange={handleInputChange}
                      />
                      <div className=" w-full flex justify-center items-center mt-5 gap-2 pb-2">
                        <button
                          type="submit"
                          className="bg-black hover:bg-[#fd7f3e] text-white px-6 py-2 rounded-full hover:text-black duration-300 "
                        >
                          Submit
                        </button>
                        <Button
                          // color="danger"
                          variant="light"
                          onClick={handleClose}
                          className="rounded-full border border-black text-white hover:text-black"
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>

        {/*  */}
      </div>
    </>
  );
};

export default WishlistForm;
