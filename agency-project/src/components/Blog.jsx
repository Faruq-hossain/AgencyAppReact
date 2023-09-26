import React from 'react'

const Blog = () => {
    const blogs =[
        {id: 1, title: " Creating Streamlined Safegurading Process with OnwRen", image: "src/assets/market1.jpg"},
        {id: 2, title: " What are your Safegurading responsibilities and how can manage them?", image: "src/assets/market2.jpg"},
        {id: 3, title: " Revamping the Membership Model eith Triathlon Australia", image: "src/assets/market3.jpg"},
    ]
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
      <div className='text-center md:w-1/2 mx-auto'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Creating is the new marketing</h2>
        <p className='md:w-3/4 text-sm text-neutralGrey mb-8 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati maiores pariatur nam adipisci ipsam commodi ullam molestias eaque maxime molestiae.Amet exercitationem dolorum aliquam natus earum dolores illo iusto dolorem id ab corporis repellat expedita, eius, ducimus voluptatem explicabo nostrum corrupti debitis aliquid modi? Deserunt impedit ea officia eligendi quidem necessitatibus molestiae?</p>
      </div>

      {/* all blogs */}
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
        {
            blogs.map(blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                <img src={blog.image} alt="" className='hover:scale-95 transition-all duration-300'/>
            
            <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                <h3>{blog.title}</h3>
                <div className='flex items-center gap-8'>
                                <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Read More --</a>
                            </div>
            </div>
                
            </div>)
        }
      </div>
    </div>
  )
}

export default Blog
