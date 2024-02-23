import { Avatar, Container, Flex, Grid } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

const signup = () => {
  return (
    <Container>
      <Grid
        columns={{ initial: "1", md: "2" }}
        className="max-w-[1000px] ml-auto mr-auto p-[50px]"
      >
        <Flex direction="column" className="p-[30px]">
          <div className="flex flex-col items-center">
            <p className="text-[#1C4596] font-bold text-[28px]">Get Started</p>
          </div>
          <form className="mt-5">
            <div className="mb-4">
              <label
                className="block text-[#292929] text-sm font-bold text-[14px] mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-[#292929] text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-[#292929] text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="number"
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-[#292929] text-sm font-bold mb-2"
                htmlFor="company"
              >
                Company Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="company"
                type="text"
                placeholder="Company"
              />
            </div>
            <button
              className="mt-5 w-full bg-[#F18F02]  text-white font-semibold text-[20px] py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              type="button"
            >
              Continue
            </button>
            <Link
              className="mt-4 text-[#1C4596] text-[18px] font-medium flex flex-col items-center"
              href="#"
            >
              Already a member ?
            </Link>
          </form>
        </Flex>
        <div>
          <Image
            src="/sign up cover.png"
            alt="sign up image"
            width={545}
            height={644}
          />
        </div>
      </Grid>
    </Container>
  );
};

export default signup;
