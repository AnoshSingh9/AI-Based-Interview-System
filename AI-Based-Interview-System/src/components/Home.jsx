import React from "react";
import Frame from "./Frame";
import Navi from "./nav";

const Home = () =>
{
    return(
        <div className='bg-[#121212] h-screen'>
            <Navi/>
            <Frame/>
        </div>
    );
}
export default Home;