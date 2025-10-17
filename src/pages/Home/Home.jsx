import React from "react";
import Banner from "../../components/Banner/Banner";
import { useLoaderData } from "react-router";
import States from "../States/States";
import AppsHome from "../AppsHome/AppsHome";
import BackGroundLoading from "../../BackGroundLoading/BackGroundLoading";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <BackGroundLoading></BackGroundLoading>
      <Banner></Banner>
      <States></States>
      <AppsHome apps={data}></AppsHome>
    </div>
  );
};

export default Home;
