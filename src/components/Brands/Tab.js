import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";

const Tab = ({ goToTop }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const handleJoinNow = () => {
    onOpen();
  };

  const handleClose = () => {
    onClose();
  };
  return (
    <div className="w-full fixed bottom-3 z-50">
      <div className="w-full md:w-1/2 block mx-auto rounded-full border-2 border-gray-600 py-4 bg-[#10141d] tab z-50">
        <div className="flex justify-around items-center mx-auto ">
          <a
            href="https://web.facebook.com/boastbrand/"
            target="blank"
            className="text-[#FC0F67]  rounded-lg duration-300 hover:text-[#FAE411] tab-list"
          >
            <FaFacebook className="text-lg" />
          </a>
          <a
            href="https://www.instagram.com/getboastofficial/"
            target="blank"
            className="text-[#FC0F67]  tab-list rounded-lg duration-300 hover:text-[#FAE411]"
          >
            <FaInstagram className="text-lg" />
          </a>

          <a
            href="https://www.getboast.co/"
            className="text-[#FC0F67] bg-inherit tab-list2 duration-300 hover:text-[#FAE411]"
            target="blank"
          >
            INFLUENCER
          </a>
          <p
            onClick={handleJoinNow}
            className="text-[#FC0F67] bg-inherit tab-list2 duration-300 hover:text-[#FAE411] uppercase cursor-pointer"
          >
            About Us
          </p>
          <button
            onClick={goToTop}
            className="text-[#FC0F67] tab-list2 bg-inherit duration-300 hover:text-[#FAE411] "
          >
            <FaArrowUpLong />
          </button>
        </div>
      </div>

      <Modal
        backdrop="blur"
        size="3xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="contact-us-form pb-0 md:pb-2 pt-2 md:pt-2 "
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className=" flex flex-col items-center justify-center p-5">
                <h2
                  className="text-center md:text-start text-2xl md:text-3xl font-extrabold text-white uppercase pt-3 pb-2"
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "800",
                  }}
                >
                  About us
                </h2>
                <p className="text-white text-justify px-3 pb-2">
                  Boast provides end-to-end UGC marketing for businesses using
                  their own customers by implementing a cashback model. Brands
                  top up marketing funds, enabling us to offer cashbacks ranging
                  from 10% to 100% to our members. When customers make purchases
                  and share on social media, they receive cashback rewards.
                  <br /> <br />
                  Our system calculates rewards based on follower counts,
                  engagement and other factors. We&#39;ve designed simple apps
                  for brands and influencers, streamlining the process.
                  Consumers access cash backs through our branded
                  Mastercard-powered prepaid card, easily tracking balances.
                  Brands can monitor budget allocation, launch UGC campaigns,
                  and request paid promotions directly for their app while
                  another app shows users cashback offerings from available
                  brands nearby. Boast simplifies and automates UGC marketing
                  for both brands and influencers. <br /> <br /> We are
                  currently building our MVP as well as serving local Brands.{" "}
                  <br /> <br /> We are creating and testing in Bangladesh with
                  plans to move to US market for a global approach in winter.
                </p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Tab;
