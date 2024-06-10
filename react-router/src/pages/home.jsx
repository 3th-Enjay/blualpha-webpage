import React from 'react';
import logo from '../assets/blualpha-headerphoto.jpg'
import headerphoto from '../assets/blualpha-logo.png'


const HomePage = () => {
  const services = [
    { title: 'Web design and Development', imageUrl: '../src/assets/webappdev.png', description: 'Design, development, integration, maintenance, and other services to drive productivity for our customers using latest technologies.' },
    { title: 'Mobile App Development', imageUrl: '../src/assets/mobileappdev.png' , description: 'We develop iOS, Android, WP and Xamarin apps, mobile back-ends, provide integration and maintenance.' },
    { title: 'IT Consultancy', imageUrl: '../src/assets/itconsulting.png', description: 'Industry-focused consulting, customization solutions for Microsoft SharePoint Project, Digitalization and Computing Infrastructure, Deployments.' },
    { title: 'Custom Software Development', imageUrl: '../src/assets/customsoftdev.png', description: 'We offer full-cycle development services for web, mobile and desktop.' },
  ]
  return (
    <>
      <header className="justify-center items-center h-screen bg-transparent p-5 shadow-md">
      <div className="flex flex-col items-center justify-center h-screen bg-transparent p-5 shadow-lg">
  <img src={headerphoto} className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded mb-8 shadow-2xl" />
  <h1 className="text-5xl font-bold text-white text-center ">Blualpha Software Development Company</h1>
</div>

      </header>

      <main id="content" className="flex-grow p-8 text-center sm:text-left lg:text-center xl:text-left bg-blend-normal bg-gradient-to-l from-sky-500 to-white ">
        <img src={logo} alt="Company Logo" className="w-full max-w-full mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded mt- " />
        <div className="bg-transparent border mt-20"></div>
        <marquee className="text-5xl font-bold text-white mt-4 mb-4 p-5 text-center h-auto" >Welcome to Our Software Development Company where We Bring Your Ideas to Life</marquee>
        <p className="mt-4 text-gray text-center text-xl mb-16 ">BLUALPHA is a full service information technology integrator that offers companies and organizations in the private and public sector with information technology solutions. Our company concentrates their efforts towards Education, Legal, Manufacturing, Government, Retail  Distribution: Industrial/Consumer Goods, and provide Network Infrastructure Solution, Information Worker Solution, Unified Communication Solution, Custom Software Development Solution and Microsoft Office System Training for Corporate Entities</p>
        <section className= "bg-slate-200 rounded mt-10 pt-10 pb-10">
          <h2 className="text-5xl font-bold text-black mt-4 text-center">Our Services</h2>
          <p className=" text-2xl  mt-4 text-gray-700 text-center"> Take a look at the services we offer below</p>
          
          <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 bg-slate-100 shadow-2xl">
          {services.map((story, index) => (
          <div key={index} className="flex flex-col items-center justify-center border p-3 rounded-lg shadow-lg">
            <img src={story.imageUrl} alt={story.title} className="w-40 h-40 object-cover mb-2 rounded-full" />
            <h2 className="text-2xl font-bold mb-2 p-8 bg-gray-400 w-full text-white text-center rounded-lg">{story.title}</h2>
            <p className='text-xl mt-3 text-center'>{story.description}</p>
          </div>
  ))}
</div>
      
        </section>
     
      </main>

      
    </>
  );
};

export default HomePage;
