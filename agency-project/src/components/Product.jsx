import React from 'react'
import productImg from '../assets/product.png';
import producstImg from '../assets/icons/product.jpg';


const Product = () => {
  return (
    <div>

      {/* about text */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto' id='product'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-center items-center gap-12'>
            <div>
                <img src={productImg} alt="" />
            </div>
            <div className='md:w-3/5 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5 '>How todesign your site footer like we did</h2>
                <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati maiores pariatur nam adipisci ipsam commodi ullam molestias eaque maxime molestiae.Amet exercitationem dolorum aliquam natus earum dolores illo iusto dolorem id ab corporis repellat expedita, eius, ducimus voluptatem explicabo nostrum corrupti debitis aliquid modi? Deserunt impedit ea officia eligendi quidem necessitatibus molestiae?</p>
                <button className='btn-primary'>Learn More</button>
            </div>
        </div>
      </div>

      {/* company text */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/3'>
                    <img src={producstImg} alt="" />
                </div>

                {/* status */}

                <div className='md:w-2/3 mx-auto'>
                    <div>
                        <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias saepe mollitia minus eveniet adipisci officiis ea inventore quos dolore eius, quam, rem quaerat impedit doloribus optio molestias quasi numquam ab dolores eligendi suscipit, tempora ratione ipsam nulla. Saepe numquam nostrum commodi dolor minima alias voluptatibus atque, debitis expedita nam natus dolorem error hic. Ex optio impedit eveniet reprehenderit necessitatibus nemo dolorum veritatis. Dolore sit possimus, sunt est odit provident aperiam.Saepe numquam nostrum commodi dolor minima alias voluptatibus atque, debitis expedita nam natus dolorem error hic. Ex optio impedit eveniet reprehenderit necessitatibus nemo dolorum veritatis. Dolore sit possimus, sunt est odit provident aperiam.</p>
                        <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</h5>
                        <p className='text-base text-neutralGrey'>British Dragon Boat Racing Association</p>
                        <div>
                            <div className='flex items-center gap-8 flex-wrap'>
                                <div className="w-10 my-5 inline-flex flex-wrap justify-center items-center">
                                <img src="/src/assets/icons/amazon-pay.png" alt="" />
                                </div>
                                <div className="w-10 my-5 inline-flex flex-wrap justify-center items-center">
                                    <img src="/src/assets/icons/amd.png" alt="" />
                                </div>
                                <div className="w-10 my-5 inline-flex flex-wrap justify-center items-center">
                                    <img src="/src/assets/icons/asus.png" alt="" />
                                </div>
                                <div className="w-10 my-5 inline-flex flex-wrap justify-center items-center">
                                    <img src="/src/assets/icons/epson.png" alt="" />
                                </div>
                                <div className="w-10 my-5 inline-flex flex-wrap justify-center items-center">
                                    <img src="/src/assets/icons/game-center.png" alt="" />
                                </div>
                                <div className="w-10 my-5 inline-flex flex-wrap justify-center items-center">
                                    <img src="/src/assets/icons/huawei.png" alt="" />
                                </div>
                            </div>
                            <div className='flex items-center gap-8'>
                                <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Meet all customers --</a>
                            </div>
                        </div>
                    </div>
                </div>

             
            </div>
        

      </div>
    </div>
  );
};

export default Product
