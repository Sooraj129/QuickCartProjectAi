import React from "react";
import { Button } from "../ui/button";

const Hero: React.FC = () => {
  return (
    <section className="w-full h-screen bg-gradient-to-r from-white via-blue-700 to-blue-500 bg-[length:400%_400%] animate-gradient-x flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold leading-tight text-black-900 mb-4">
        Welcome to <span className="text-blue-700">Quick AI</span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-black-800 max-w-2xl">
        Create amazing content with AI tools. Transform your content creation
        with our suite of premium AI tools — write articles, generate blog
        titles, create stunning visuals, and much more. 
      </p>

      <div>
        <Button className="mt-8 bg-blue-700 text-white p-5 mr-2">
            Started Created Now 
        </Button>
        <Button className="mt-8 bg-white text-black p-5">
            Watch Now 
        </Button>
      </div>
    </section>
  );
};

export default Hero;
