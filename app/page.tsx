import {
  Avatar,
  Box,
  Container,
  Card,
  Flex,
  Grid,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <Hero />
      <DiscoverOurTraining />
      <TheValueBring />
      <CoursesList />
      <Testimonial />
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
          <Flex direction="column" align="start" className="mt-[60px] p-5">
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
      <Grid columns={{ initial: "1", md: "3" }} className="mt-[50px] mb-[50px]">
        <Flex direction="column" className="bg-[#F18F02] text-white p-5">
          <p className="font-semibold text-[48px] leading-[60px] mt-5">
            Discover Our Training
          </p>
          <p className="mt-[25px] mb-[15px]">
            Our training enhances skills to empower you and your people for a
            resilient and rewarding future. Invest in well-being, valuing people
            and securing success through investing in training, learning and
            knowledge.
          </p>
          <p className="mb-[60px]">
            Our training packages and workshops are designed to offer a range of
            options to meet your unique needs and enhance you and your team
            through providing continual personal and professional development.{" "}
          </p>
        </Flex>
        <Grid columns={{ initial: "1", md: "1" }} width="100%">
          <Box className="border-t border-r border-b p-5">
            <Flex direction="column" gap="3">
              <Avatar
                src="/one-svg.png"
                fallback="1"
                size="2"
                radius="full"
                className="cursor-pointer"
                referrerPolicy="no-referrer"
              />
              <p className="font-bold text-[#1C4596] text-[28px]">
                The Knowledge Vault
              </p>
              <p className="font-normal text-[#1B1B1B] text-[16px] ">
                The Knowledge Vault grants you access to our bank of bite size,
                pre-recorded training presentations where the learning never
                ends.
              </p>
              <Link href="/knowledge/vault" className="text-[#1C4596] ">
                Learn More
              </Link>
            </Flex>
          </Box>
          <Box className="border-b border-r p-5">
            <Flex direction="column" gap="3">
              <Avatar
                src="/three-svg.svg"
                fallback="3"
                size="2"
                radius="full"
                className="cursor-pointer"
                referrerPolicy="no-referrer"
              />
              <p className="font-bold text-[#1C4596] text-[28px]">
                The Knowledge Investor
              </p>
              <p className="font-normal text-[#1B1B1B] text-[16px] ">
                Access a series of learning courses or extended training
                workshops receive more for your money by bulk buying training
              </p>
              <Link href="/knowledge/investor" className="text-[#1C4596] ">
                Learn More
              </Link>
            </Flex>
          </Box>
        </Grid>
        <Grid columns="1" width="100%">
          <Box className="border-t border-r border-b p-5">
            <Flex direction="column" gap="3">
              <Avatar
                src="/two-svg.svg"
                fallback="1"
                size="2"
                radius="full"
                className="cursor-pointer"
                referrerPolicy="no-referrer"
              />
              <p className="font-bold text-[#1C4596] text-[28px]">
                The Knowledge Society
              </p>
              <p className="font-normal text-[#1B1B1B] text-[16px] ">
                Webinars, seminars and other high value events provide further
                learning opportunities for your personal and professional
              </p>
              <Link href="/knowledge/society" className="text-[#1C4596] ">
                Learn More
              </Link>
            </Flex>
          </Box>
          <Box className="border-b border-r p-5">
            <Flex direction="column" gap="3">
              <Avatar
                src="/four-svg.svg"
                fallback="2"
                size="2"
                radius="full"
                className="cursor-pointer"
                referrerPolicy="no-referrer"
              />
              <p className="font-bold text-[#1C4596] text-[28px]">
                The Knowledge Bank
              </p>
              <p className="font-normal text-[#1B1B1B] text-[16px] ">
                Our range of training courses and workshops, delivered by highly
                skilled trainers, guaranteed to enhance your knowledge and
              </p>
              <Link href="/knowledge/bank" className="text-[#1C4596] ">
                Learn More
              </Link>
            </Flex>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

const TheValueBring = () => {
  return (
    <div className="bg-[#D6EDFF]">
      <Container>
        <Grid
          columns={{ initial: "1", md: "3" }}
          className="bg-[#D6EDFF] mb-[50px]"
        >
          <Flex
            direction="column"
            align="start"
            className="mt-[60px] p-5 md:col-span-2"
            gap="4"
          >
            <p className="font-bold text-[#1D4596] text-[48px] ">
              The Value It Brings You
            </p>
            <p className="font-normal text-[#1B1B1B] text-[17px] ">
              Unlocking a world of possibilities for your personal and
              professional development to pave the way for a resilient future of
              unparalleled success by investing in our training packages and
              workshops, delivered through a variety of different training
              methods to suit your learning style.
            </p>
            <p className="font-normal text-[#1B1B1B] text-[17px] ">
              Unlocking a world of possibilities for your personal and
              professional development to pave the way for a resilient future of
              unparalleled success by investing in our training packages and
              workshops, delivered through a variety of different training
              methods to suit your learning style.
            </p>
            <button className="inline-flex items-center bg-[#F18F02]  text-white font-medium py-2 px-4 rounded text-[18px]">
              Learn More
              <span className="mr-1"></span>
              <MdOutlineKeyboardArrowRight />
            </button>
          </Flex>
          <Box className="pt-[60px] pb-5">
            <Image
              src="/Office Meeting.png"
              alt="hero image"
              width={409}
              height={466}
            />
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

const CoursesList = () => {
  const courses = [
    {
      courseType: "Traning Course",
      courseName: "Knowledge Bank CPT",
      courseDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      courseLink: "/courses/id",
      enquire: "course/enquare/id",
    },
    {
      courseType: "Traning Course",
      courseName: "Sales and Service",
      courseDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      courseLink: "/courses/id",
      enquire: "course/enquare/id",
    },
    {
      courseType: "Traning Course",
      courseName: "Hybrid Working",
      courseDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      courseLink: "/courses/id",
      enquire: "course/enquare/id",
    },
    {
      courseType: "Traning Course",
      courseName: "Well-being in the Workplace",
      courseDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      courseLink: "/courses/id",
      enquire: "course/enquire/id",
    },
  ];
  return (
    <div>
      <Container>
        <Grid
          columns={{ initial: "1", md: "4" }}
          className="pt-[70px] pb-[30px]"
          gap="5"
        >
          {courses.map((course) => (
            <Flex
              direction="column"
              key={course.courseLink}
              className="bg-[#1C4596] text-white pt-5 pl-5 pr-5 "
              gap="4"
            >
              <p className="font-medium text-[16px]">{course.courseType}</p>
              <p className="font-bold text-[20px]">{course.courseName}</p>
              <p className="font-normal text-[16px]">{course.courseDesc}</p>
              <Flex justify="between" className="border-t mt-5 pt-5">
                <Link
                  href={course.courseLink}
                  className="text-[#F18F02] inline-flex items-center font-medium text-[18px] "
                >
                  View Course
                  <MdOutlineKeyboardArrowRight />
                </Link>
                <Link
                  href={course.courseLink}
                  className="text-[#F18F02]  font-medium text-[18px]"
                >
                  Enquire
                </Link>
              </Flex>
            </Flex>
          ))}
        </Grid>
        <Flex justify="center" className="pt-[20px] py-[70px]">
          <button className="inline-flex items-center bg-[#F18F02]  text-white font-medium text-[18px] py-2 px-4 rounded">
            View All Courses
          </button>
        </Flex>
      </Container>
    </div>
  );
};

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      dummyName: "Dummy Name",
      TestimonialType: "Business",
      rate: "⭐⭐⭐⭐⭐",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the &apos; Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s",
    },
    {
      id: 2,
      dummyName: "Dummy Name",
      TestimonialType: "Business",
      rate: "⭐⭐⭐⭐⭐",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the &apos; Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s",
    },
  ];
  return (
    <Container>
      <Grid columns={{ initial: "1", md: "1" }} className="mb-[70px]">
        <Grid columns={{ initial: "1", md: "1" }}>
          <Flex justify="center" className="mb-5 ">
            <Text className="font-bold text-[48px] text-[#1C4596]">
              Testimonial
            </Text>
          </Flex>
        </Grid>
        <Grid columns={{ initial: "1", md: "2" }} gap="4">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="cursor-pointer">
              <Flex direction="column" align="center" gap="3">
                <p className="pt-3 text-[#1C4596] font-bold text-[20px]">
                  {testimonial.dummyName}
                </p>
                <p className="font-normal text-[16px] text-[#8F8F8F]">
                  {testimonial.TestimonialType}
                </p>
                <p>{testimonial.rate}</p>
                <p className="font-normal text-[16px] text-center leading-6 pb-5">
                  {testimonial.desc}
                </p>
              </Flex>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};
