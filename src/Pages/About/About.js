import React from "react";
import selfPic from "../../assets/self-pic/yousuf_miah.jpg";

const About = () => {
  return (
    <div class="card my-16 w-full bg-base-200 shadow-xl">
      <div class="card-body">
        <div className="flex justify-center items-center w-full">
          <div className="divider w-1/2 h-1 mr-2 bg-blue-500"> </div>
          <div className="w-32 h-32">
            <img className="rounded-full" src={selfPic} alt="" />
          </div>
          <div className="divider w-1/2 h-1 mr-2 bg-blue-500"> </div>
        </div>

        <div className="text-center text-2xl font-bold mt-5">
          <h3>Md. Yousuf Miah</h3>
        </div>
        <div className="text-justify p-4">
          <p>
            Really a great message by the grace of Almighty{" "}
            <strong> "Allah" </strong> inform you about me. This is
            <strong> Md. Yousuf Miah </strong>
            who are getting learn on Web Design & Development course with{" "}
            <strong> JavaScript, React </strong> under esteemed valuable
            organization <strong> "Programming Hero" </strong>
            which is the best learning sector with fun and enjoy by the by
            motivational speech in the world for Bangle spoken people. Directed
            by-
            <strong> "Jhonkar Mahabub" </strong>. Believe that after completing
            my course I will be able to get a good situation in future my life.
            That's way, every day in a week I have been hardworking with
            Programing Hero suitable platform. I humble request to you who read
            my text please prayer for me to improve my career, which will be
            highly appreciated very much. <br />
            <br />
            <strong>
              -- again thank you very much for your cooperations with
              sustainable life at this situation in the world, best of Luck.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
