import React from 'react';
import vg from "../assets/img-6.jpg";
import { AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"


const Home = () => {
  return (

    <> 
     <div className = "home" id="home" >
     <main>
      <h1> Startech </h1>
      <p>Solutions to all your tech problems </p>
     </main>
     </div>

     <div className="home2">
       <img src=  {vg} alt= "Graphics" />  

      <div>
        <p>we are your one stop platform for solutions to 
        the tech problems you face. our team 
        gives in-depth support to resolve issues</p>
      </div>
     </div>

     <div className="home3" id ="about">
       <div>
         <h1> Who we are ?</h1>
         <p>
         "Lorem ipsum dolor sit amet, consectetaur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
          occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum."
          </p>
       </div>

     </div>

     <div className="home4" id="brands">
       <div>
         <h1> Brands</h1>
          
           <article>
           <div style= {{ animationDelay: "0.3s",}}>
              <AiFillGoogleCircle />
              <p> Google</p>
             </div>

             <div style= {{ animationDelay: "0.5s",}}>
              <AiFillAmazonCircle />
              <p> Amazon</p>
             </div>

             <div style= {{ animationDelay: "0.7s",}}>
              <AiFillYoutube />
              <p> Youtube</p>
             </div>

             <div style= {{ animationDelay: "1s",}}>
              <AiFillInstagram />
              <p> Instagram</p>
             </div>

           </article>







       </div>









     </div>
   </>
    
  )
}

export default Home
