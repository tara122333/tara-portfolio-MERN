import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#040614]"
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-5"
          >
            <div className="relative w-16 h-16">
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-primary/30"
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
              <motion.span
                className="absolute inset-2 rounded-full border-2 border-primary/60"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
                style={{ borderTopColor: 'transparent' }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-primary font-display font-extrabold text-xl">T</span>
              </div>
            </div>
            <motion.p
              className="text-xs uppercase tracking-[0.3em] text-white/40 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Loading portfolio
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
