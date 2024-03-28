/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Input, ModalHeader } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";
import Swal from "sweetalert2";

const BrandSection = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [brand, setBrand] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    instagramId: "",
    otherSocialMediaId: "",
    phoneNo: "",
    followers: "",
  });
  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

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
    setBrand("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmitBrand = (e) => {
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
      email: formData.email,
      followers: formData.followers,
      brand: brand,
    };
    // console.log(user)
    const res = await axios.post(
      "https://boast-server.onrender.com/api/v1/add-waitlist",
      user
    );
    // console.log(res.data)
    if (res.data.insertedId) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Achived early access now!",
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
    <div className=" pb-14  brand-section">
      <div className="">
        <div className=" pt-7">
          <Marquee autoFill="true">
            <img
              className=" mr-10"
              style={{ height: "80px", width: "100px" }}
              src="/images/logo1.png"
              alt="image1"
            />

            <img
              style={{ height: "35px" }}
              className=" mr-10"
              src="/images/logo2.png"
              alt="image2"
            />

            <img
              style={{ height: "100px", width: "90px" }}
              className=" mr-10"
              src="/images/logo3.png"
              alt="image3"
            />

            <img
              style={{ height: "90px", width: "100px" }}
              className=" mr-10"
              src="/images/logo4.png"
              alt="image4"
            />

            <img
              style={{ height: "30px" }}
              className=" mr-10"
              src="/images/logo5.png"
              alt="image5"
            />

            <img
              className=" mr-10"
              style={{ height: "100px", width: "90px" }}
              src="/images/logo6.png"
              alt="image6"
            />
          </Marquee>
        </div>
      </div>

      <p
        className="text-center mt-5 text-2xl lg:text-3xl font-bold text-white"
        style={{ letterSpacing: "3px" }}
      >
        Don&#x2019;t see your favorite brands?
      </p>

      <h2
        className="text-center pb-3 pt-3 text-md lg:text-lg font-bold text-slate-100"
        style={{ fontFamily: "Gilroy" }}
      >
        Which brands you want to see partner with us next?
      </h2>

      <div className=" flex justify-center mb-8 mt-2">
        <form className="flex" onSubmit={handleSubmitBrand}>
          <input
            type="text"
            required
            placeholder="Name your favorite local brand"
            className={`rounded-l-lg text-gray-700  bg-white border border-none px-3 focus:outline-none brandPlaceholder w-52 sm:w-64`}
            onChange={handleBrandChange}
            value={brand}
          />
          <Button
            type="submit"
            onClick={handleJoinNow}
            className="rounded-r-lg rounded-l-none text-white bg-[#fd7f3e]"
          >
            Add
          </Button>
        </form>
      </div>
      <Modal
        isOpen={isOpen}
        backdrop="blur"
        onOpenChange={onOpenChange}
        className="max-w-full h-full join-wishlist py-2  mt-8 overflow-scroll overflow-x-hidden"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className=" flex flex-col items-center justify-center ">
                <div className="flex items-center justify-center ">
                  <h2
                    className="text-center text-white text-4xl md:text-5xl"
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: "800",
                    }}
                  >
                    Join early access
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
                  {" "}
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
                    className="bg-inherit rounded-none hover:border-white border border-white py-2 w-full text-white focus:outline-none px-3 mb-2 "
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
                        type="text"
                        style={{
                          fontFamily: "Raleway",
                          fontWeight: "400",
                        }}
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
                        type="email"
                        style={{
                          fontFamily: "Raleway",
                          fontWeight: "400",
                        }}
                        id="email"
                        label="Email"
                        name="email"
                        value={formData.email}
                      />
                    </div>
                  </div>
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
                    className="bg-inherit rounded-none hover:border-white border border-white py-2 w-full focus:outline-none px-3 mb-2 text-white"
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: "400",
                    }}
                    type="text"
                    // placeholder="Number of followers on Insta/FB/tiktok"
                    name="followers"
                    id="Insta/FB/tiktok"
                    value={formData.followers}
                    onChange={handleInputChange}
                  />
                  <label
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: "400",
                    }}
                    htmlFor="brand"
                    className="text-white"
                  >
                    Name your favorite local brand
                  </label>
                  <input
                    className="bg-inherit rounded-none hover:border-white border border-white py-2 w-full focus:outline-none px-3 text-white"
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: "400",
                    }}
                    type="text"
                    name="followers"
                    id="brand"
                    value={brand}
                    onChange={handleInputChange}
                  />
                  {/*  */}
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
  );
};

export default BrandSection;
