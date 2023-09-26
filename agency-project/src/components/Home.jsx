import { Carousel } from "flowbite-react";
import React from "react";
import banner1 from "../assets/banner1.png";

const Home = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full ms-auto">

          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <img
              src={banner1}
              alt=""
              className="object-scale-down h-150 w-98 ..."
            />
             {/* herotext */}
          <div className="md:w-1/2">
            <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">
              Lesson and insights -
              <span className="text-brandPrimary leading-snug">
                from 8 Years
              </span>
            </h1>
            <p className="text-neutralGry text-base mb-8">
              Where to grow your business as a Web Developer & Design or Graphic
              Design?
            </p>
            <button className="btn-primary">
              Register
            </button>
          </div>
          </div>

          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <img
              src={banner1}
              alt=""
              className="object-scale-down h-150 w-98 ..."
            />
             {/* herotext */}
          <div className="md:w-1/2">
            <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">
              Learn and Earn -
               <span className="text-brandPrimary leading-snug">
                 in 4 Years
              </span>
            </h1>
            <p className="text-neutralGry text-base mb-8">
              Where to grow your business as a Web Developer & Design or Graphic
              Design?
            </p>
            <button className="btn-primary">
              Register
            </button>
          </div>
          </div>

          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <img
              src={banner1}
              alt=""
              className="object-scale-down h-150 w-98 ..."
            />
             {/* herotext */}
          <div className="md:w-1/2">
            <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">
              Lesson and insights
              <span className="text-brandPrimary leading-snug">
                from 8 Years
              </span>
            </h1>
            <p className="text-neutralGry text-base mb-8">
              Where to grow your business as a Web Developer & Design or Graphic
              Design?
            </p>
            <button className="btn-primary">
              Register
            </button>
          </div>
          </div>
         

        </Carousel>
      </div>
    </div>
  );
};

export default Home;
