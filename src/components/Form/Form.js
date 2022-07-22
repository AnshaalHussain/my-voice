import React from "react";
import { useEffect } from "react";
import Script from "react-load-script";
import { Widget } from "@typeform/embed-react";

const Form = () => {
  return (
    <>
      <Widget
        id="CDlb3ieM"
        style={{ width: "80%", height: "60vh", margin: "auto" }}
        className="my-form"
      />
    </>
  );
};

export default Form;
