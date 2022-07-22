import React from "react";
import styled from "styled-components";

import YouthImage from "../../images/ART/dude1.png";

const JoinUs = () => {
  return (
    <>
      <TextContainer>
        <div className="flex flex-col lg:flex-row justify-center items-center  my-6">
          <div className="text-lg font-thin basis-1/2">
            <h1 className="text-6xl text-center my-5">Join The Crew</h1>
            <p className="my-6">
              Do you want to be part of a dream to
              <span className="font-extrabold"> strengthen Muslim youth </span>
              skills in Canada hence building a stronger Muslim community?
            </p>
            <p className="my-6">
              <span className="font-extrabold">
                Can you envision yourself being part of that and contributing to
                this dream?
              </span>
            </p>

            <p className="my-6">
              All MY Voice roles, no matter how large or small, train you to{" "}
              <span className="font-extrabold">
                work in a corporate setting
              </span>
              , do jobs where you make mistakes and are coached on how to get
              them done.
            </p>
            <p className="my-6">
              As a MY Voice youth, you are in charge and also under someone's
              charge. This is your platform - so{" "}
              <span className="font-extrabold">
                take control and build your future
              </span>
              .
            </p>
          </div>
          <img
            src={YouthImage}
            className="max-w-sm h-96 basis-1/2"
            alt="two muslim youth"
          />
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLScwfVmVNGYWBU71088L6xvu3r_izTySFcg3-ku2pMZDi6SXMg/viewform"
            className="text-white rounded bg-primary-blue hover:text-primary-yellow hover:bg-primary-red py-3 px-6 text-2xl tracking-wider border-violet-300 hover:drop-shadow-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 focus:ring focus:ring-violet-300 focus:scale-90"
          >
            Apply Here
          </a>

          <p className="my-6 font-thin">
            If you have any questions or inquiries please feel free to <br />
            reach out to us at{" "}
            <span className="font-extrabold">info@myvoicecanada.com</span>
          </p>
        </div>
      </TextContainer>
    </>
  );
};

export default JoinUs;

const TextContainer = styled.div`
  padding: 1rem calc((100vh - 175px) / 2);

  @media screen and (max-width: 768px) {
    padding: 0rem 1rem;
  }
`;
