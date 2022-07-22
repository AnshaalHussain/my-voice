import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

import Hero from "../components/Hero";
import FosterBanner from "../components/FosterBanner";
import Magazine from "../components/Magazine";
import Catalyst from "../components/Catalyst";
import Diverse from "../components/Diverse";

const IndexPage = () => {
  return (
    <>
      <Layout title="Home">
        <Hero />
        <Padding></Padding>
        <Magazine />
        <Padding>
          <Catalyst />
        </Padding>
        <Diverse />
      </Layout>
    </>
  );
};

export default IndexPage;

const Padding = styled.div`
  padding: 0rem calc((100vh - 400px) / 2);

  @media (max-width: 768px) {
    padding: 0rem;
  }
`;
