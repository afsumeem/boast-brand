/* eslint-disable @next/next/no-img-element */
import { MdArrowOutward } from "react-icons/md";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  Image,
} from "@nextui-org/react";

const ContactUs = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const handleJoinNow = () => {
    onOpen();
  };

  const handleClose = () => {
    onClose();
    resetFormData();
  };
  return (
    <>
      <div className="h-[600px] flex flex-col items-center justify-center">
        <h2
          className="text-5xl text-white text-center"
          style={{
            fontFamily: "Raleway",
            fontWeight: "800",
          }}
        >
          WANT YOUR BRAND AND <br /> PRODUCT FEATURED LIKE THIS?
        </h2>

        <button
          className="mt-10  contact-us-btn border-2 py-2 px-4 flex items-center gap-2 text-white text-xl duration-300"
          onClick={handleJoinNow}
        >
          Contact Us <MdArrowOutward />
        </button>
      </div>
      <div className="mx-2 lg:mx-24 border-t-1 border-gray-600">
        <div>
          <Image
            src="/images/brand.png"
            width={100}
            height={0}
            alt="logo"
            className="pt-5"
          />
          <div>
            <ul>
              <li>Investors</li>
              <li>Brand</li>
              <li>Work with us</li>
              <li>FAQs</li>
              <li>Blogs</li>
            </ul>
          </div>
        </div>
        <div></div>
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
                <form>
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
                    // value={formData.name}
                    // onChange={handleInputChange}
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
                        // value={formData.instagramId}
                        // onChange={handleInputChange}
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
                        // value={formData.otherSocialMediaId}
                        // onChange={handleInputChange}
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
                        // value={formData.phoneNo}
                        // onChange={handleInputChange}
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
                        // value={email}
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
                    // value={formData.followers}
                    // onChange={handleInputChange}
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
    </>
  );
};

export default ContactUs;
