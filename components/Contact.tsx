"use client";

import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section id='#contact' className='py-5 pb-15 text-white max-w-[1200px] mx-auto'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 20 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16'
      >
        <div className='space-y-8 sm:space-y-10 lg:space-y-12'>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-300 flex justify-center gap-3'
          >
            Get in <span className='text-purple-500'>touch</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='glass p-6 sm:p-8 rounded-2xl space-y-6 sm:space-y-8 overflow-hidden break-words mx-5'
          >
            <div className='space-y-2'>
              <p className='text-lg sm:text-xl text-gray-300'>Phone</p>
              <a 
                href="tel:+6281341456376"
                className='text-xl sm:text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2'>
                +62 8134 1456 376 
                <span className='text-gray-500'>&#8599;</span>
              </a>
            </div>
            <div className='space-y-2'>
              <p className='text-lg sm:text-xl text-gray-300'>E-Mail</p>
              <a 
                href="mailto:muhammadzikro20@gmail.com"
                className='text-xl sm:text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2'>
                muhammadzikro20 @gmail.com
                <span className='text-gray-500'>&#8599;</span>
              </a>
            </div>
            <div className='space-y-2'>
              <p className='text-lg sm:text-xl text-gray-300'>Office</p>
              <address className='text-lg sm:text-xl not-italic leading-relaxed'>
                6JP9+5QQ <br />
                Tj. Bingkung, Kec. Kubung, Kabupaten Solok <br /> 
                Sumatera Barat, Indonesia
              </address>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[400px] rounded-2xl overflow-hidden'
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3989.4628278852774!2d100.61932008926652!3d-0.7648556698088012!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4cd03fc4384db%3A0xecc12ee16d70b76!2sZulfa%20Homestay!5e0!3m2!1sid!2sid!4v1742389034277!5m2!1sid!2sid" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className='px-5 rounded-[50px] mx-auto'
          >
          </iframe>
        </motion.div>
      </motion.div>
    </section>
  )
}
