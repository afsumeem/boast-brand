/* eslint-disable @next/next/no-img-element */
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Button,
  Image,
} from "@nextui-org/react";
import React, { useState } from "react";
import { useForm } from "@formspree/react";
import Swal from "sweetalert2";

const BrandHero = () => {
  const [showSecondImage, setShowSecondImage] = useState(false);

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const handleJoinNow = () => {
    onOpen();
  };

  const handleClose = () => {
    onClose();
    // resetFormData();
  };

  //
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const [state, handleSubmit, reset] = useForm(apiKey);

  if (state.succeeded) {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Sent!, Your Message Sent Successfully!",
    });
    reset();
  }

  return (
    <>
      <div className="brandHero">
        <div className="mx-2 lg:mx-24 pt-2">
          <Image
            src="/images/brand.png"
            width={100}
            height={0}
            alt="logo"
            className="pt-5"
          />
        </div>
        <div className=" mx-2 lg:mx-24 h-screen ">
          <div className=" grid grid-cols-1 lg:grid-cols-2 h-full mt-10 lg:-mt-20 gap-5 px-10">
            <div
              className=" flex justify-center items-center img-container"
              onMouseEnter={() => setShowSecondImage(true)}
              onMouseLeave={() => setShowSecondImage(false)}
            >
              <img
                src="/hero/boastC.png"
                className={`w-32 ml-0 md:-ml-40 sm:w-40 md:w-52 lg:w-80 image ${
                  showSecondImage ? "hidden" : ""
                }`}
                alt=""
              />
              <img
                src="/hero/boastC2.png"
                className={`w-32 ml-0 md:-ml-40 sm:w-40 md:w-52 lg:w-80 image ${
                  showSecondImage ? "" : "hidden"
                }`}
                alt=""
              />
            </div>

            <div className=" text-white flex justify-start items-center ">
              <div className="ml-0 lg:-ml-44 mt-0 md:-mt-12 ">
                <h2 className="text-3xl md:text-4xl lg:text-6xl md:mt-0 font-extrabold text-center md:text-start ">
                  Supercharge your Brand
                </h2>
                <p className="font-bold text-center md:text-start text:xl lg:text-2xl my-5 text-gray-400">
                  Using your customers and local influencers
                </p>

                <p className="font-thin md:text-start text:base lg:text-xl 2xl:text-xl mb-5 md:mb-0 text-justify w-full md:w-[700px]">
                  Boast provides automatching end-to-end UGC marketing for
                  businesses using their own customers and Influencers by
                  implementing a cashback model. We provide cashbacks from
                  10%-100% when ever they purchase from your brand and share the
                  purchase on social media.
                </p>
                <button
                  onClick={handleJoinNow}
                  className="my-5 start-now-btn px-5 py-2"
                >
                  Start Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="contact-us-form pb-0 md:pb-2 pt-2 md:pt-2   overflow-y-scroll md:overflow-hidden "
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className=" flex flex-col items-center justify-center">
                <form className=" mt-10 md:mt-3" onSubmit={handleSubmit}>
                  <label
                    htmlFor="name"
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: "400",
                    }}
                    className="text-gray-200 text-sm ml-1 "
                  >
                    Name
                  </label>
                  <input
                    className="bg-inherit rounded-lg mt-0 md:mt-1 hover:border-gray-600 border border-gray-600 py-1 md:py-2 w-full focus:outline-none px-3 text-sm mb-1 md:mb-2 text-gray-200"
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: "400",
                    }}
                    id="name"
                    type="text"
                    label="Name"
                    name="name"
                    // value={formData.name}
                    // onChange={handleInputChange}
                  />

                  <label
                    htmlFor="brandname"
                    className="text-gray-200 text-sm ml-1"
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: "400",
                    }}
                  >
                    Brand Name
                  </label>
                  <input
                    className="bg-inherit rounded-lg mt-0 md:mt-1 hover:border-gray-600 border border-gray-600 py-1 md:py-2 w-full focus:outline-none px-3 text-sm  text-gray-200 mb-1 md:mb-2"
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: "400",
                    }}
                    type="text"
                    label="Brand Name"
                    name="brandname"
                    // value={formData.instagramId}
                    // onChange={handleInputChange}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-2 mb-0 md:mb-2">
                    <div>
                      <label
                        style={{
                          fontFamily: "Raleway",
                          fontWeight: "400",
                        }}
                        htmlFor="Email"
                        className="text-gray-200 text-sm ml-1"
                      >
                        Email
                      </label>
                      <input
                        className="bg-inherit rounded-lg mt-0 md:mt-1 hover:border-gray-600 border border-gray-600 py-1 md:py-2 w-full focus:outline-none px-3 text-sm  text-gray-200"
                        style={{
                          fontFamily: "Raleway",
                          fontWeight: "400",
                        }}
                        type="email"
                        label="Email"
                        name="email"
                        id="email"
                        // value={formData.otherSocialMediaId}
                        // onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          fontFamily: "Raleway",
                          fontWeight: "400",
                        }}
                        htmlFor="website"
                        className="text-gray-200 text-sm ml-1"
                      >
                        Website
                      </label>
                      <input
                        className="bg-inherit rounded-lg mt-0 md:mt-1 hover:border-gray-600 border border-gray-600 py-1 md:py-2 w-full focus:outline-none px-3 text-sm  text-gray-200"
                        type="text"
                        style={{
                          fontFamily: "Raleway",
                          fontWeight: "400",
                        }}
                        name="website"
                        id="website"
                        // value={formData.website}
                        // onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  {/*  */}
                  <label
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: "400",
                    }}
                    htmlFor="designation"
                    className="text-gray-200 text-sm ml-1"
                  >
                    Designation
                  </label>
                  <input
                    className="bg-inherit rounded-lg mt-0 md:mt-1 hover:border-gray-600 border border-gray-600 py-1 md:py-2 w-full focus:outline-none px-3 text-sm mb-0 md:mb-2 text-gray-200"
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: "400",
                    }}
                    type="text"
                    id="designation"
                    label="Designation"
                    name="designation"
                    // value={designation}
                  />

                  {/*  */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-2 mb-0 md:mb-2">
                    <div>
                      <label
                        style={{
                          fontFamily: "Raleway",
                          fontWeight: "400",
                        }}
                        htmlFor="phone"
                        className="text-gray-200 text-sm ml-1"
                      >
                        Phone Number
                      </label>
                      <input
                        className="bg-inherit rounded-lg mt-0 md:mt-1 hover:border-gray-600 border border-gray-600 py-1 md:py-2 w-full focus:outline-none px-3 text-sm mb-0 md:mb-2 text-gray-200"
                        style={{
                          fontFamily: "Raleway",
                          fontWeight: "400",
                        }}
                        type="text"
                        id="phone"
                        label=" Phone Number"
                        name="phone"
                        // value={phone}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          fontFamily: "Raleway",
                          fontWeight: "400",
                        }}
                        htmlFor="city"
                        className="text-gray-200 text-sm ml-1"
                      >
                        City
                      </label>
                      <input
                        className="bg-inherit rounded-lg mt-0 md:mt-1 hover:border-gray-600 border border-gray-600 py-1 md:py-2 w-full focus:outline-none px-3 text-sm mb-0 md:mb-2 text-gray-200"
                        style={{
                          fontFamily: "Raleway",
                          fontWeight: "400",
                        }}
                        type="text"
                        id="city"
                        label="City"
                        name="city"
                        // value={city}
                      />
                    </div>
                  </div>

                  {/*  */}

                  <div className=" w-full flex justify-center items-center mt-1 md:mt-5 gap-2 pb-1 md:pb-2">
                    <button
                      type="submit"
                      className="bg-black hover:bg-[#FC0F67] text-white px-6 py-2 rounded-full hover:text-black duration-300 "
                      disabled={state.submitting}
                    >
                      Submit
                    </button>
                    <Button
                      // color="danger"
                      variant="light"
                      onClick={handleClose}
                      className="rounded-full border border-black text-white"
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
    </>
  );
};

export default BrandHero;
