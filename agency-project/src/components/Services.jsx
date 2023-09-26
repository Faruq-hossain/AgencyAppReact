import React from "react";

const Services = () => {
    const services =[
        {id: 1, title: "Membership Organisations", description: "Our membership management software provides full automation of memnership renewals and payments", image: "/src/assets/icons/membership.png"},
        {id: 1, title: "National Associatins", description: "Our membership management software provides full automation of memnership renewals and payments", image: "/src/assets/icons/associations.png"},
        {id: 1, title: "Clubs And Groups", description: "Our membership management software provides full automation of memnership renewals and payments", image: "/src/assets/icons/group.png"}
    ]
    
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGray font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neutralGrey">
          We have been working with some Fortune 500+ clients
        </p>

        {/* company logo */}

        <div >
          <div className="w-10 my-12 mr-12 inline-flex flex-wrap justify-center items-center gap-8">
            <img src="/src/assets/icons/amazon-pay.png" alt="" />
          </div>
          <div className="w-10 my-12 mr-12 inline-flex flex-wrap justify-center items-center gap-8">
            <img src="/src/assets/icons/amd.png" alt="" />
          </div>
          <div className="w-10 my-12 mr-12 inline-flex flex-wrap justify-center items-center gap-8">
            <img src="/src/assets/icons/asus.png" alt="" />
          </div>
          <div className="w-10 my-12 mr-12 inline-flex flex-wrap justify-center items-center gap-8">
            <img src="/src/assets/icons/epson.png" alt="" />
          </div>
          <div className="w-10 my-12 mr-12 inline-flex flex-wrap justify-center items-center gap-8">
            <img src="/src/assets/icons/game-center.png" alt="" />
          </div>
          <div className="w-10 my-12 mr-12 inline-flex flex-wrap justify-center items-center gap-8">
            <img src="/src/assets/icons/huawei.png" alt="" />
          </div>
          <div className="w-10 my-12 mr-12 inline-flex flex-wrap justify-center items-center gap-8">
            <img src="/src/assets/icons/ibm.png" alt="" />
          </div>
          <div className="w-10 my-12 mr-12 inline-flex flex-wrap justify-center items-center gap-8">
            <img src="/src/assets/icons/intel.png" alt="" />
          </div>
          <div className="w-10 my-12 mr-12 inline-flex flex-wrap justify-center items-center gap-8">
            <img src="/src/assets/icons/joomla.png" alt="" />
          </div>
          <div className="w-10 my-12 mr-12 inline-flex flex-wrap justify-center items-center gap-8">
            <img src="/src/assets/icons/line.png" alt="" />
          </div>
          <div className="w-10 my-12 mr-12 inline-flex flex-wrap justify-center items-center gap-8">
            <img src="/src/assets/icons/loreal.png" alt="" />
          </div>
          <div className="w-10 my-12 mr-12 inline-flex flex-wrap justify-center items-center gap-8">
            <img src="/src/assets/icons/nike.png" alt="" />
          </div>
          <div className="w-10 my-12 mr-12 inline-flex flex-wrap justify-center items-center gap-8">
            <img src="/src/assets/icons/pepsi.png" alt="" />
          </div>
          <div className="w-10 my-12 mr-12 inline-flex flex-wrap justify-center items-center gap-8">
            <img src="/src/assets/icons/premiere.png" alt="" />
          </div>
          <div className="w-10 my-12 mr-12 inline-flex flex-wrap justify-center items-center gap-8">
            <img src="/src/assets/icons/samsung.png" alt="" />
          </div>
        </div>
      </div>

      {/* service card */}
      <div className="mt-10 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGray font-semibold mb-2">
          Manage your entire community in a single system
        </h2>
        <p className="text-neutralGrey">
          Who is Agency suitable for?
        </p>
      </div>

      {/* cards */}
      <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
        {
            services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-automd
           md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 translate-all duration-300 flex items-center justify-center h-full'>
                <div>
                    <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl"><img src={service.image} alt="" className="-ml-5"/></div>
                    <h4 className="text-2xl font-bold text-neutralDGray mb-2 px-2">{service.title}</h4>
                    <p className="text-sm text-neutralGrey">{service.description}</p>
                </div>
            </div>)
        }
      </div>
    </div>
  );
};

export default Services;
