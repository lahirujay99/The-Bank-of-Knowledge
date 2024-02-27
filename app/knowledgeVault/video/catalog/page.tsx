import { Grid, Flex, Container } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <VideoGallery />
    </>
  );
};

const HeroSection = () => {
  return (
    <div className="bg-[#1C4596]">
      <Container>
        <Grid columns={{ initial: "1", md: "2" }} className="py-[20px]">
          <Flex direction="column" className="p-[20px] mt-[20px]">
            <span className="font-extrabold text-[#F18F02] text-[61px]">
              The Knowledge Vault
            </span>
            <p className="font-medium text-[32px] text-white leading-[50px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </Flex>
          <Image
            src="/Hero Image.png"
            alt="hero image"
            width={409}
            height={420}
            className="ml-[100px]"
          />
        </Grid>
      </Container>
    </div>
  );
};

const VideoGallery = () => {
  return (
    <div className="bg-[#DEF1FF]">
      <Container>
        <Flex className="max-w-[900px] mx-auto my-[40px]">
          <input
            className="shadow appearance-none border border-[#1C4596] w-full h-12 py-2 px-3 bg-transparent leading-tight rounded-l-lg focus:outline-none"
            id="username"
            type="text"
          />
          <button className="inline-flex items-center bg-[#1C4596]  text-white font-medium hover:text-white py-1 px-4 rounded-r-lg">
            Search
          </button>
        </Flex>
      </Container>
    </div>
  );
};

export default page;
