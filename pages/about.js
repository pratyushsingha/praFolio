import Layout from '../components/layout'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Layout>
      <motion.div
        key="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-4"
      >
        <div className="mb-6 text-center text-gray-800 dark:text-white">
          Hi, I'm <span className='hover:text-lightBlue-600 dark:hover:text-pink-500 '>Pratyush Singha!</span> I am a <strong className='text-lightBlue-600 hover:text-gray-500 dark:text-pink-500 dark:hover:text-white'>frontend Developer</strong> with a passion for developing web
          applications that make a positive impact on peoples lives.
        </div>
        <div className="text-center text-gray-800 dark:text-white">
          In addition to coding and learning new tech, I enjoy photography, playing games, hang out with my friends, video editing. If any of these things interest you too,
          I'd love to chat!
        </div>
      </motion.div>
    </Layout>
  )
}
