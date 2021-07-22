import '../styles/globals.css'
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion"

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter
        initial={{ opacity : 0 }}
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Component {...pageProps} />
    </AnimatePresence>
    )
}

export default MyApp

