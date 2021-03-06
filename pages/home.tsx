import React from "react";
import { GetServerSideProps } from "next";
import { route } from "../utils/route";
import { Flex, Heading } from "@chakra-ui/react";

function Home({ result }) {
  console.log(`redirect to ${result}`);

  return (
    <Flex mt="8" justify="center">
      <Heading>Welcome to Home</Heading>
    </Flex>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const result = route(context);
  if (result !== "") {
    context.res.statusCode = 302;
    context.res.setHeader("Location", result);
    return {
      props: {},
    };
  }
  return {
    props: { result },
  };
};
