const services = [
  { id: "01", title: "Web Design", description: "Crafting visually stunning and user-friendly website" },
  { id: "02", title: "SEO Optimization", description: "Enchancing your website\'s visibility and ranking" },
  { id: "03", title: "UI/UX Design", description: "Creating intuitive and engaging user experience and interfaces" },
  { id: "04", title: "Digital Marketing", description: "Strategizing and executing comprehensive digital marketing" },
  { id: "05", title: "Content Creation", description: "Crafting engaging and relevant content, including blogs" },
  { id: "06", title: "Social Media Management", description: "Managing your social media channels to build brand" },
]

export const Service = () => {

  return (
    <section className="text-white py-20 px-32">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1\4 pr-8 mb-12 md:mb-0">
          <h2 className="text-6xl text-purple-300 font-extrabold sticky top-20">SERVICES</h2>
        </div>  
        <div className="md:w-3\4">
          {services.map((service) => (
            <div key={service.id} className='mb-16 flex items-start'>
              <div className='text-gray-300 font-bold text-5xl mr-8'>
                {service.id}
              </div>
              <div>
                <h3 className='text-2xl font-bold mb-2'>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
    </section>
  )
}
