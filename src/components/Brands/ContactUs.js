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

const ContactUs = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const handleJoinNow = () => {
    onOpen();
  };

  const handleClose = () => {
    onClose();
    // resetFormData();
  };
  return (
    <div className="">
      <div className="h-[600px] flex flex-col items-center justify-center  contact-us">
        <div data-aos="fade-right" data-aos-duration="500">
          <h2
            className="text-3xl md:text-5xl text-white text-center "
            style={{
              fontFamily: "Raleway",
              fontWeight: "800",
            }}
          >
            WANT YOUR BRAND AND
          </h2>
        </div>
        <div data-aos="fade-left" data-aos-duration="500">
          <h2
            className="text-3xl md:text-5xl text-white text-center "
            style={{
              fontFamily: "Raleway",
              fontWeight: "800",
            }}
          >
            PRODUCT FEATURED LIKE THIS?
          </h2>
        </div>

        <button
          className="mt-10  contact-us-btn border-2 py-2 px-4 flex items-center gap-2 text-white text-xl duration-300"
          onClick={handleJoinNow}
        >
          Contact Us <MdArrowOutward />
        </button>
      </div>
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
                href="https://web.facebook.com/boastbrand/"
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
              <h4 className=" text-xl 2xl:text-3xl font-extrabold mb-2">
                Office
              </h4>
              <p className=" text-sm text-gray-300 ">
                136, Kalachadpur, North Baridhara, Dhaka 1206, Bangladesh
              </p>
              <h4 className=" text-xl 2xl:text-3xl font-extrabold mt-3 mb-2">
                Contacts
              </h4>
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
        className="contact-us-form pb-2 pt-10 md:pt-2   overflow-y-scroll md:overflow-hidden "
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className=" flex flex-col items-center justify-center">
                <form className="mt-3">
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
                    className="bg-inherit rounded-lg mt-1 hover:border-gray-600 border border-gray-600 py-2 w-full focus:outline-none px-3 text-sm mb-2 text-gray-200"
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
                    className="bg-inherit rounded-lg mt-1 hover:border-gray-600 border border-gray-600 py-2 w-full focus:outline-none px-3 text-sm  text-gray-200 mb-2"
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
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
                        className="bg-inherit rounded-lg mt-1 hover:border-gray-600 border border-gray-600 py-2 w-full focus:outline-none px-3 text-sm  text-gray-200"
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
                        className="bg-inherit rounded-lg mt-1 hover:border-gray-600 border border-gray-600 py-2 w-full focus:outline-none px-3 text-sm  text-gray-200"
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
                    className="bg-inherit rounded-lg mt-1 hover:border-gray-600 border border-gray-600 py-2 w-full focus:outline-none px-3 text-sm mb-2 text-gray-200"
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
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
                        className="bg-inherit rounded-lg mt-1 hover:border-gray-600 border border-gray-600 py-2 w-full focus:outline-none px-3 text-sm mb-2 text-gray-200"
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
                        className="bg-inherit rounded-lg mt-1 hover:border-gray-600 border border-gray-600 py-2 w-full focus:outline-none px-3 text-sm mb-2 text-gray-200"
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

                  <div className=" w-full flex justify-center items-center mt-5 gap-2 pb-2">
                    <button
                      type="submit"
                      className="bg-black hover:bg-[#FC0F67] text-white px-6 py-2 rounded-full hover:text-black duration-300 "
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
