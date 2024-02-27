import Pagination from "@/app/Components/Pagination";
import { Grid, Flex, Container, Select, Box } from "@radix-ui/themes";
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
    <div className="bg-[#DEF1FF] pb-[30px]">
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
        <Grid columns={{ initial: "1", sm: "3" }}>
          <p className="md:col-span-2 font-semibold text-[30px] leading-[39px] text-[#1C4596]">
            See the latest courses from all categories
          </p>
          <Flex>
            <div className="inline-block relative w-40 ml-auto">
              <select className="block appearance-none w-full bg-[#F18F02] text-white border px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>All categories</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="inline-block relative w-40">
              <select className="block appearance-none w-full bg-[#F18F02] text-white border px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Course Type</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </Flex>
        </Grid>
        <Flex className="mt-2 mb-4">
          <p className="font-semibold text-[24px] text[#3A3A3A] leading-[39px]">
            Showing 48 of 508 results
          </p>
        </Flex>
        <VideoCard />
        <Flex className="py-[30px]" justify="center">
          <Pagination currentPage={2} itemCount={100} pageSize={10} />
        </Flex>
      </Container>
    </div>
  );
};

const VideoCard = () => {
  const videoList = [
    {
      imgUrl: "/video card image.png",
      title: " The Bank Of The Knowledge",
      category: "Leadership",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      imgUrl: "/video card image.png",
      title: " The Bank Of The Knowledge",
      category: "Leadership",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      imgUrl: "/video card image.png",
      title: " The Bank Of The Knowledge",
      category: "Leadership",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      imgUrl: "/video card image.png",
      title: " The Bank Of The Knowledge",
      category: "Leadership",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      imgUrl: "/video card image.png",
      title: " The Bank Of The Knowledge",
      category: "Leadership",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      imgUrl: "/video card image.png",
      title: " The Bank Of The Knowledge",
      category: "Leadership",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      imgUrl: "/video card image.png",
      title: " The Bank Of The Knowledge",
      category: "Leadership",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      imgUrl: "/video card image.png",
      title: " The Bank Of The Knowledge",
      category: "Leadership",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      imgUrl: "/video card image.png",
      title: " The Bank Of The Knowledge",
      category: "Leadership",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <Container>
      <Grid columns="3" gap="5" width="auto">
        {videoList.map((video) => (
          <Box key={video.title} className="bg-white rounded">
            <Image
              src={video.imgUrl}
              alt={video.title}
              width={493}
              height={270}
            />
            <div className="p-5">
              <p className="font-semibold text-[23px] text-[#1C4596] leading-[39px]">
                {video.title}
              </p>
              <p className="font-bold text-[18px] text-[#F18F02] leading-[25px]">
                {video.category}
              </p>
              <p className="font-normal text-[14px] text-[#757574]">
                {video.desc}
              </p>
            </div>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default page;
