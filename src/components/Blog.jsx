import { motion } from 'framer-motion';

const posts = [
  {
    category: 'Infrastructure',
    title: 'How modern steel fabrication is transforming urban infrastructure',
    date: '12',
    monthYear: "Jan '24",
    image: 'https://res.cloudinary.com/ddodvrq4x/image/upload/v1749048457/Website_demo/blog1.png',
  },
  {
    category: 'Automation',
    title: 'Smart factories: The role of AI and IoT in manufacturing efficiency',
    date: '25',
    monthYear: "Feb '24",
    image: 'https://res.cloudinary.com/ddodvrq4x/image/upload/v1749048457/Website_demo/blog2.png',
  },
  {
    category: 'Project Insights',
    title: 'Behind the build: Case study of a high-speed pipe manufacturing plant',
    date: '08',
    monthYear: "Mar '24",
    image: 'https://res.cloudinary.com/ddodvrq4x/image/upload/v1749048457/Website_demo/blog3.png',
  },
  {
    category: 'Sustainability',
    title: 'Eco-friendly practices in industrial welding and material usage',
    date: '17',
    monthYear: "Apr '24",
    image: 'https://res.cloudinary.com/ddodvrq4x/image/upload/v1749048457/Website_demo/blog4.png',
  },
];
export default function Blog() {
  return (
    <motion.div
      className="bg-white py-16 px-4 md:px-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, type: 'spring', stiffness: 60 }}
    >
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
      >
        <motion.p
          className="text-green-500 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >. Blog</motion.p>
        <motion.h2
          className="text-4xl font-bold text-gray-800 leading-snug mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >Articles & blog posts<br />with useful information</motion.h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
      >
        {posts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden group hover:shadow-green-200 transition-shadow duration-300"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 + index * 0.15, duration: 0.7, type: 'spring', stiffness: 80 }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 32px #22c55e55' }}
          >
            <div className="relative">
              <motion.img
                src={post.image}
                alt="Blog visual"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                initial={{ scale: 1.05 }}
                whileHover={{ scale: 1.13 }}
                transition={{ type: 'spring', stiffness: 120 }}
              />
              <div className="absolute bottom-4 right-4 flex flex-col items-center">
                <div className="bg-green-500 w-16 h-14 flex items-center justify-center rounded-lg shadow-lg">
                  <span className="text-gray-800 text-3xl font-bold">{post.date}</span>
                </div>
                <div className="bg-gray-900 w-16 h-6 flex items-center justify-center rounded-b-lg">
                  <span className="text-white text-xs">{post.monthYear}</span>
                </div>
              </div>
            </div>

            <div className="px-4 py-3">
              <p className="text-green-500 text-sm flex items-center">
                <span className="mr-1">.</span>{post.category}
              </p>
              <h3 className="mt-1 text-lg font-bold text-gray-800 leading-snug">{post.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 1.2, duration: 0.7 }}
      >
        <motion.button
          className="flex items-center gap-2 border-2 border-green-500 text-green-500 px-6 py-2 uppercase text-sm font-medium rounded-full hover:bg-green-500 hover:text-white transition shadow-md hover:shadow-green-400"
          whileHover={{ scale: 1.08, boxShadow: '0 0 24px #22c55e' }}
          whileTap={{ scale: 0.96 }}
        >
          More blog posts
          <span className="w-2 h-2 bg-green-500 rotate-45 transform inline-block ml-1"></span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
