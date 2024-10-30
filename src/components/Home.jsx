 import background from '/src/Images/Somalia.jpg'
 import { useState } from 'react'
 function Home (){

    const [isOpen, setIsOpen] = useState(false)
    const openButton= () => {
        setIsOpen(true)
    }

    const closeButton = () => {
            setIsOpen(false)
    }
 
    return <div className=" text-black   lg:block  md:hidden sm:block block ">

{/* SocialMedia */}
<div className='sm:flex hidden  text-white bg-blue-400 justify-between items-center'>
<ul className='space-x-6 text-2xl sm:pl-4 pl-8 text-center '>
<i class="fa-brands fa-facebook"></i>
<i class="fa-brands fa-twitter"></i>
<i class="fa-brands fa-youtube"></i>
<i class="fa-brands fa-square-instagram"></i>
</ul>

<h1 className='text-2xl'>Somali Football Federation</h1>

<div className='flex gap-4 px-2'>
<i class="fa-solid fa-globe font-bold mt-1 "></i>
  <h1 className='font-bold border-r-2 px-1 -ml-4 '><a href="">EN</a></h1>
  <h1 className='font-bold -ml-3  text-[#F7A512] '><a href="">SO</a></h1>
</div>

</div>








{/* This is Header Pages */}
<div  className="sm:flex justify-between items-center  text-[#2563EB] py-1 px-8   w-full bg-[rgba(0,0,0,0.1)] ">
     <h1 className="text-3xl mt-2 font-bold top-2 ">SFF</h1>
 

     <div>
           
           <a href="#Home"> <i class="fa-solid fa-arrow-up   fixed bottom-1 right-4  text-3xl text-red-600 default:front "> </i></a> 
           </div>



     <ul style={{display: isOpen == true ? "none" : " "}} className="sm:flex text-2xl gap-6  text-[#2563EB]    ">
            <li className="hover:text-black font-semibold hover:font-bold"> <a href="#Home">Home</a></li>
            <li className="hover:text-black font-semibold hover:font-bold"> <a href="#Notion">Notion</a></li>
            <li className="hover:text-black font-semibold hover:font-bold"> <a href="#About">About</a></li>
            <li className="hover:text-black font-semibold hover:font-bold"> <a href="#Leadership">Leadership</a></li> 
            <li className="hover:text-black font-semibold hover:font-bold"> <a href="#Contact">Contact</a></li> 
        </ul >
 
{/* close  */}
        <i style={{display: isOpen == true ? "none" : ""}}
        onClick={openButton}
         class="fa-solid fa-x sm:hidden text-[35px] absolute  right-2 text-black hover:text-[#2563EB]  top-8 ml"></i>  

{/* Open  */}
        <i style={{display: isOpen == true ? "block" : ""}}
        onClick={closeButton}
         class="fa-solid fa-bars sm:hidden  text-[35px]    absolute  right-1 hidden text-black  hover:text-[#2563EB]  top-2  text-5xl"></i>        
        
{/* close and open */}
 
         {/* <div style={{display: isOpen == true ? "none" : " "}} className="mr-[30px] sm:flex ml-[20px] mt-[20px] sm:text-[25px] text-[30px] ">
            <i class="fa-regular fa-heart hover:text-white mr-[20px] "></i>
            <i class="fa-solid hover:text-white fa-cart-shopping"></i>        
        </div>  */}
    </div>
 





{/* This is Home defaut */}
 <section id='Home'>
<div className="bg-cover text-black h-screen mt-16 ">
<h1 className="text-2xl font-semibold  text-black sm:text-center sm:px-2 sm:pt-6 px-4">The Somali Football Federation (SFF), is the governing body of football in Somalia. The SFF was officially founded in 1951, but according to football history, it was a well-known sport that was played in Somalia in the 1920s.</h1>
<img className="sm:w-[650px] sm:h-[450px]  px-4  sm:ml-[290px] sm:mt-10 mt-4  rounded-[20px]   " src="/src/Images/Somalia.jpg" alt="" />
</div>
 
 </section> 
 


 {/* ONE NATION */}
<section id='Notion' className="relative bg-blue-600 text-white sm:h-screen -mt-48 sm:-mt-0  px-6 md:px-12 py-10">
     
        <h1 className="text-4xl font-bold mb-6  sm:ml-[430px] border-b-4 w-80 border-yellow-400">ONE NATION, <br /> ONE FEDERATION, <br /> ONE DREAM</h1>
 
        <p className="sm:text-xl mb-4 pt-8 text-lg">
          The Somali Football Federation (SFF), is the governing body of football in Somalia. The SFF was officially founded in 1951, but according to football history, it was a well-known sport that was played in Somalia in the 1920s.
        </p>
        <p className="sm:text-xl text-lg">
          The Somali Football Federation has been affiliated to FIFA since 1962 and affiliated to Africa football’s ruling organization (CAF) since 1968. The SFF is also a member of the Council of East and Central Africa Football Associations (CECAFA).
        </p>
   
 </section>
 



 
{/* Thius is About PAges  */}
<section id='About'>
<div className=''>
<h1 className='text-center text-6xl'>Somali Football Federation</h1>
<p className='text-center text-2xl'>The Somali Football Federation [SFF], is the governing body of football in Somalia. </p>
<div className='sm:flex justify-between  items-center'>
<p className='text-lg sm:w-[600px] p-6'>The SFF was officially founded in 1951, but according to the history football was a well-known sport that was played in Somalia in 1920s. <br />
The Somali Football Federation has been affiliated to FIFA since 1962 and affiliated to CAF since 1968.  <br />
The SFF is also member of the Council of East and Central Africa Football Associations [CECAFA] Somalia has been member of the CECAFA since the regional Africa Football ruling body was officially formed in 1973; therefore, SFF is one of the founding associations of CECAFA. <br />
Somali Football Federation has also been member of the Union of Arab Football Associations [UAFA] since it was established in 1974. So again SFF is one of the founding members of UAFA.</p>

<img className='w-[500px] h-[300px] px-10 rounded-[10px] ' src="src/Images/Somalia.jpg" alt="" />
</div>
</div>
</section>



 
 {/* This is LeaderShip */}
 <section id='Leadership'>
    <div className="bg-white rounded-[20px] shadow-lg shadow-slate-800 p-8 max-w-3xl mx-auto  sm:h-screen my-10 ">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 border-b-4 w-32   border-blue-500 ">Leadership</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Profile Image */}
        <div className="mb-6 md:mb-0 md:mr-8">
          <img src="src/Images/Yuusuf.png" className="rounded-[10px] bg-[#F7A512] "/>
        </div>

        {/* Profile Content */}
        <div>
          <h3 className="text-xl font-bold text-blue-700 mb-2">Mr. Yusuf Ali Amalow</h3>
          <h4 className="text-lg font-semibold text-gray-700 mb-4">President of Somali Football Federation</h4>
          <p className="text-gray-600 mb-4">
            Mr. Yusuf Ali Amalow was born 1st Jan 1962 in Jowhar town, Lower Shabelle region of the Hirshabelle State of Federal Government. Moving to Mogadishu at an earlier age, he went on to recruit for the Somali National Army at the National Army Academy (Kuliyadda Jaala Siyeed).
          </p>
          <p className="text-gray-600 mb-6">
            During his football career, since joining the Somali Football Federation in 2010 as a member of the Executive Committee, he was later elected in 2018 as the Senior Vice President of the Federation for the full term of 2019–2022.
          </p>
          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
              Biography
            </button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
              Leadership Team
            </button>
          </div>
        </div>
      </div>
    </div>
    </section>






{/* This is Footer page */}
<section id='Contact'>
    <footer className=" bg-blue-600 text-white py-8 px-6">
      <div className=" sm:flex container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-between ">
 
        {/* Logo and Social Media */}
     <div className=''>
 <h2 className="text-white  font-bold text-2xl ml-10">SFF</h2>
 <ul>
    <i class="fa-brands fa-facebook bg-[#F7A512] h-6  w-6 rounded pl-1 pt-1 "></i>
    <i class="fa-brands fa-twitter  bg-[#F7A512] h-6  w-6 rounded pl-1 pt-1 ml-1"></i>
    <i class="fa-brands fa-youtube  bg-[#F7A512] h-6  w-6 rounded pl-1 pt-1 ml-1"></i>
    <i class="fa-brands fa-square-instagram  bg-[#F7A512] h-6  w-6 rounded pl-1 pt-1 ml-1"></i>
</ul>
        </div>
 
        {/* About Us Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About SFF</a></li>
            <li><a href="#" className="hover:underline">SFF President</a></li>
            <li><a href="#" className="hover:underline">SFF Constitution</a></li>
            <li><a href="#" className="hover:underline">Membership</a></li>
            <li><a href="#" className="hover:underline">National Team</a></li>
            <li><a href="#" className="hover:underline">SFF Partners</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li  className="hover:underline">Tournaments </li>
            <li className="hover:underline">Executive Committee</li>
            <li  className="hover:underline">Club Licensing </li>
            <li  className="hover:underline">Top Stories </li>
            <li  className="hover:underline">News & Events </li>
            <li  className="hover:underline">Photo Gallery </li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Information</h3>
          <ul className="space-y-2">
            <li><i className="fas fa-map-marker-alt"></i>Mogadishu Stadium, Mogadishu Somalia</li>
            <li><i className="fas fa-envelope"></i> info@footballHirshabbille.so</li>
            <li><i className="fas fa-phone"></i> +252615395138</li>
            <li><i className="fas fa-fax"></i> +252611315615</li>
          </ul>
        </div>
      </div>
 
      {/* Footer Bottom */}
      <div className="mt-8 border-t border-blue-400 pt-4 text-center">
        <p className="text-sm">
          &copy; 2024 Somali Football Federation — All Rights Reserved
        </p>
        <p className="text-sm">
          Site Designed by <a href="#" className="text-yellow-400 hover:underline">Engineer Amalow.</a>
        </p>
      </div>
    </footer>
    
 </section>
 







    </div>
 }
 export default Home;