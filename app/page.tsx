import { Box, Container, Flex, Grid, Text } from "@radix-ui/themes";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Home() {
  return (
    <div className="h-screen">
      <Hero />
      <DiscoverOurTraining />
    </div>
  );
}

const Hero = () => {
  return (
    <div className="bg-[#1C4596]">
      <Container>
        <Grid
          columns={{ initial: "1", md: "2" }}
          className="bg-[#1C4596] mb-[50px]"
          gap="9"
        >
          <Flex direction="column" align="start" className="mt-[60px]">
            <Text className="font-extrabold text-[#F18F02] text-[61px] ">
              The Bank Of The Knowledge
            </Text>
            <Text className="font-extrabold text-white text-[36px] ">
              The Bank Of The Knowledge
            </Text>
            <Flex gap="5" mt="9">
              <button className="inline-flex items-center bg-transparent text-white font-semibold hover:text-white py-2 px-4 border border-white rounded">
                Learn More
                <span className="mr-1"></span>
                <MdOutlineKeyboardArrowRight />
              </button>
              <button className="inline-flex items-center bg-[#F18F02]  text-white font-bold py-2 px-4 rounded">
                Learn More
                <span className="mr-1"></span>
                <MdOutlineKeyboardArrowRight />
              </button>
            </Flex>
          </Flex>
          <Box>
            <Image
              src="/Hero Image.png"
              alt="hero image"
              width={461}
              height={493}
            />
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

const DiscoverOurTraining = () => {
  return (
    <Container>
      <Grid columns={{ initial: "1", md: "3" }}></Grid>
    </Container>
  );
};
