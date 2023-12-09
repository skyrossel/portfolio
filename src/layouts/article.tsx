import Head from 'next/head'
import { motion } from 'framer-motion'

interface ArticleProps {
  children: React.ReactNode
  title: string
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
}

const Article: React.FC<ArticleProps> = ({ children, title }) => {
  const t = `Sky Rossel - ${title}`

  return (
    <motion.article
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ type: 'easeInOut', duration: 0.4 }}
    >
      {title && (
        <Head>
          <title>{t}</title>
        </Head>
      )}
      {children}
    </motion.article>
  )
}

export default Article
