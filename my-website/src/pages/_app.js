import "@/styles/globals.css";

import { motion, AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exist={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
        >
          <Component {...pageProps} />;
        </motion.div>
      </AnimatePresence>
    </>
  );
}
