import { motion } from "framer-motion";
import styles from './style.module.css';

function ShinyButton({ text }: { text: string }) {
  return (
    <motion.button
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className={`${styles['radial-gradient']} px-6 py-3 rounded-md relative`}
    >
      <span className={`${styles['linear-mask']} text-neutral-100 tracking-wide font-light h-full w-full block relative`}>
        {text}
      </span>
      <span className={`${styles['linear-overlay']} block absolute inset-0 rounded-md p-px`} />
    </motion.button>
  );
};

export { ShinyButton };
