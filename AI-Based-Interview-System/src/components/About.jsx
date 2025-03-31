import React from "react";
import Navi from "./nav";



const About = () =>
{
    return(
        <div className="h-300 bg-[#121212] text-white">
            <Navi/>
            <div className="flex flex-col items-center bg-black">
                <div className="flex flex-col lg:flex-row gap-9">
                    <img className=" m-10 h-90 w-auto" src="../cat.jpg" alt="greet" />
                    <img className=" m-10 h-90 w-auto" src="../cat2.jpg" alt="greet" />
                </div>
                <h1 className="text-5xl ml-15 mt-12 mb-10 font-semibold">About Us</h1>
                <p className="text-xl m-5 p-5">
                    MockMate is a Project in order to submit in Minor Project II in 6th Semester by Anosh, Abhay, Nishant and Sufiyan. It is a AI based plateform where one can come and practice for interviews and get same environment as he gets in MAANG Company interviews.
                </p>
                <hr/>
                <p className="text-xl m-5 p-5">
                    In the Home page when we click on start interview the interview starts and the camera of the user opens and he starts with his intro. The speech of the user is converted to text format and sent to ai plateforms like gemini using apis this text goes there as a prompt and it then generates next question according to the previous answer given by the user.
                    As of now here just the quality of the answer will be checked how good is the content in the answer according to the questions coming but as we work more on this project we will try to integrate facial expression system in order to recognise how the users expressions change with the quality of questions also we would be integrating tone analysis system that detects tone of the user how confident he/she is while giving the answers.
                </p>
                <hr />
                <p className="text-xl m-5 p-5">
                   Till now partial development is completed where one is asked questions and he has to reply on voice and it tells if it is right or wrong<br/>
                   <br/>
                   For Front End the technology we have used is:<br/>
                   <br/>
                   <br/>
                       * ReactJS<br/>
                       * TailwindCSS<br/>
                       * React Router Dom  <br/>
                   <br/>
                   For Backend End the technology we have used is:<br/>
                   <br/>
                       * Django <br/>
                       * dotenv <br/>
                       * djangorestframework <br/>
                       * requests <br/>
                       * cors <br/>
                       * django-cors-headers <br/>
                       * djangorestframework-simplejwt <br/>
                       * python-decouple <br/>
                       * google-generativeai <br/>
                </p>
            </div>
        </div>
    );
}

export default About;