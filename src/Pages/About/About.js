import React from "react";
import selfPic from "../../assets/self-pic/yousuf_miah.jpg";

const About = () => {
  return (
    <div className="card my-16 w-full bg-base-200 shadow-xl">
      <div className="card-body">
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
      <div className="w-1/2 mx-auto my-10 text-xl">
        <p>
          <strong>information about this site</strong>
          <br />
          - Main admin is yousufweb99@gmail.com password 123456 <br />
          who has full power of admin role.
          <br />
          <br />
          - only Main Admin can do everything in this site. #### -like- add new
          product, delete product from main data etc.,
          <br />
          <br />
          - admin can make a admin others user but this admin have no full
          power.
          <br />
          <br />
          - if user want to get full power like main admin. It needs to be
          verified email.
          <br />
          <br />
          - user can order, order delete, payment by card
          <br />
          <br />
          -half admin can add new product, order place, order cancel. but he/she
          can not enter manage item.
          <br />
          <br />
          -Thank you very much for your visiting in the website which is highly
          appreciated.
        </p>
      </div>
    </div>
  );
};

export default About;
