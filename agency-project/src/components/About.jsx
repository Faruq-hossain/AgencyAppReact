import React from 'react'
import aboutImg from '../assets/about.png';

const About = () => {
  return (
    <div>

      {/* about text */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto' id='about'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-center items-center gap-12'>
            <div>
                <img src={aboutImg} alt="" />
            </div>
            <div className='md:w-3/5 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5 '>The unseen of spending three years at Web And Graphics </h2>
                <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati maiores pariatur nam adipisci ipsam commodi ullam molestias eaque maxime molestiae.Amet exercitationem dolorum aliquam natus earum dolores illo iusto dolorem id ab corporis repellat expedita, eius, ducimus voluptatem explicabo nostrum corrupti debitis aliquid modi? Deserunt impedit ea officia eligendi quidem necessitatibus molestiae?</p>
                <button className='btn-primary'>Learn More</button>
            </div>
        </div>
      </div>

      {/* company text */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5 '>Helping a local <br /> <span className='text-brandPrimary'>business reinvent itself</span> </h2>
                <p >We reached here our hard work and dedication</p>
            </div>

            {/* status */}

            <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                <div className='space-y-8'>
                    <div className='flex items-center gap-4'>
                        <img src="/src/assets/icons/member.png" alt="" className='w-10'/>
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                            <p>Members</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-4'>
                        <img src="/src/assets/icons/club.png" alt="" className='w-10'/>
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>46,328</h4>
                            <p>Clubs</p>
                        </div>
                    </div>
                </div>

                <div className='space-y-8'>
                    <div className='flex items-center gap-4'>
                        <img src="/src/assets/icons/event.png" alt="" className='w-10'/>
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>828,867</h4>
                            <p>Event Booking</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-4'>
                        <img src="/src/assets/icons/payment.png" alt=""  className='w-10'/>
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>1,245,341</h4>
                            <p>Payments</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            

      </div>
    </div>
  )
}

export default About
