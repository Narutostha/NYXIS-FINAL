import styles from "./form.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import SocialContacts from "./socialContacts";

interface FormModalProps {
  onClose: () => void;
  showModal: boolean;
  color: "--ez-orange" | "--adobe-purple";
}

export function FormModal({ onClose, showModal, color }: FormModalProps) {
  return (
    <>
      <AnimatePresence>
        {showModal && (
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className={styles.opacLayer}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ x: 600 }}
            animate={{ x: 0 }}
            exit={{ x: 600 }}
            className={styles.modalContainer}
            aria-modal="true"
          >
            <div onClick={onClose} className={styles.close}>
              <span className={styles.lineOne} />
              <span className={styles.lineTwo} />
            </div>
            <SocialContacts color={color} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}