/* eslint-disable @next/next/no-img-element */
import { MdArrowOutward } from "react-icons/md";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Button,
  Image,
} from "@nextui-org/react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useForm } from "@formspree/react";
import Swal from "sweetalert2";

//
const ContactUs = () => {
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
    <div className="w-full">
      <div className="relative w-full">
        <div className="h-[200px] md:h-[300px] lg:h-[600px] flex flex-col items-center justify-center contact-us  mb-14">
          <div className="opacity-30 contact-us-container w-full">
            <video autoPlay="autoplay" muted loop id="myVideo" playsInline>
              <source src="/videos/video.mp4" type="video/mp4" />
            </video>
          </div>

          <div data-aos="fade-up" data-aos-duration="500">
            <h2
              className="text-xl md:text-3xl lg:text-5xl text-white text-center "
              style={{
                fontFamily: "Raleway",
                fontWeight: "800",
              }}
            >
              WANT YOUR BRAND AND
            </h2>
          </div>
          <div data-aos="fade-down" data-aos-duration="500">
            <h2
              className="text-xl md:text-3xl lg:text-5xl text-white text-center "
              style={{
                fontFamily: "Raleway",
                fontWeight: "800",
              }}
            >
              PRODUCT/SERVICE FEATURED LIKE THIS?
            </h2>
          </div>

          <button
            className=" mt-0 md:mt-10  contact-us-btn border-2 py-2 px-4 flex items-center gap-2 text-white text-sm md:text-xl duration-300 z-40"
            onClick={handleJoinNow}
          >
            Contact Us <MdArrowOutward />
          </button>
        </div>
      </div>

      {/*  */}

      <div className="mx-2 lg:mx-24 border-t-1 border-gray-600">
        <div className="flex flex-col lg:flex-row pt-7  justify-between gap-10">
          <div className="flex flex-col w-full lg:w-3/6 ">
            <div className="flex gap-3 mx-5 lg:mx-0">
              <Image
                src={"/images/brand.png"}
                width={100}
                height={0}
                alt="Logo"
              />
            </div>
            <div className="flex flex-col mt-5 mb-0 text-white mx-7 lg:mx-0">
              <p className="text-justify text-sm  text-gray-200">
                Boast provides end-to-end UGC marketing for businesses using
                their own customers by implementing a cashback model. Brands top
                up marketing funds, enabling us to offer cashbacks ranging from
                10% to 100% to our members. When customers make purchases and
                share on social media, they receive cashback rewards.
              </p>
            </div>
            <div className="flex mt-2 gap-3 mx-7 lg:mx-0">
              <a
                href="https://www.facebook.com/profile.php?id=61557565121422"
                target="blank"
                className="text-[#FC0F67] bg-black p-3 rounded-lg duration-300 hover:text-[#FAE411] cursor-pointer"
              >
                <FaFacebook className="text-lg cursor-pointer" />
              </a>

              <a
                href="https://www.instagram.com/getboastofficial/"
                target="blank"
                className="text-[#FC0F67] bg-black p-3 rounded-lg duration-300 hover:text-[#FAE411] cursor-pointer"
              >
                <FaInstagram className="text-lg cursor-pointer" />
              </a>
            </div>
          </div>
          {/* 2nd section */}
          <div className="mx-7 lg:mx-0">
            <div className=" text-gray-100">
              <h4 className=" text-xl font-extrabold mb-2">Office</h4>
              <p className=" text-sm text-gray-300 ">
                136, Kalachadpur, North Baridhara, Dhaka 1206, Bangladesh
              </p>
              <h4 className=" text-xl font-extrabold mt-3 mb-2">Contacts</h4>
              <p className=" text-sm text-gray-300 ">
                +8801614395930 ridwan@xrougex.com
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center text-white font-normal text-sm mb-1">
          <p>© 2024 BOAST. All rights reserved.</p>
        </div>
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
                    required
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
                    required
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
                        required
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
                        required
                      />
                    </div>
                  </div>
                  {/*  */}

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
                        required
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
                        required
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
    </div>
  );
};

export default ContactUs;
