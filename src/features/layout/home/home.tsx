import { useEffect, useState } from "react";
import styles from "./home.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import PagePortal from "./pagePortal";
import { ButtonVariant } from "@/features/ui";
import { landingPageData, logos, pageTags } from "@/constants";
import classNames from "classnames";
import Link from "next/link";

export function HomeComponent() {
  const [isDualPage, setIsDualPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDualPage(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Animation variants for cleaner code
  const orbAnimationVariants = {
    initial: (isRight = false) => ({
      opacity: 0,
      y: "-100vh",
      x: isRight ? "100vw" : "-100vw"
    }),
    animate: (isDual = false) => ({
      opacity: 0.4,
      y: !isDual ? 0 : isDual ? "50vh" : "-50vh",
      x: 0
    }),
    transition: (isDual = false) => ({
      type: "spring",
      stiffness: 310,
      damping: isDual ? 55 : 30,
      duration: 4,
      delay: 0.5
    })
  };

  // Common animation transition
  const commonTransition = {
    ease: "easeOut",
    type: "spring",
    stiffness: 310,
    damping: 30,
    duration: 4,
    delay: 0.5
  };

  // Footer links data
  const footerLinks = [
    { href: "/privacy-policy", text: "Privacy Policy" },
    { href: "/terms-and-conditions", text: "Terms & Conditions" },
    { href: "/blog", text: "Blog" }
  ];

  return (
    <div className={classNames(styles.homeContainer)}>
      {/* Orange Orb */}
      <motion.div
        initial={orbAnimationVariants.initial(false)}
        animate={orbAnimationVariants.animate(isDualPage)}
        transition={orbAnimationVariants.transition(isDualPage)}
        className={styles.orangeOrb}
      />

      <div className={styles.homeWrapper}>
        {/* Initial Title Animation */}
        <AnimatePresence>
          {!isDualPage && (
            <motion.div
              initial={{ opacity: 0, y: "100vh" }}
              animate={{ opacity: 1, y: 0 }}
              transition={commonTransition}
              exit={{ opacity: 0 }}
              className={styles.homeTitleContainer}
            >
              <h1 className={styles.homeTitle}>YOUR VISION,</h1>
              <h1 className={styles.homeTitle}>
                OUR{" "}
                <span className={classNames(styles.homeTitle, "textGradient")}>
                  INNOVATION
                </span>
              </h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dual Page Content */}
        <AnimatePresence>
          {isDualPage && (
            <motion.div
              initial={{ display: "none", opacity: 0 }}
              animate={{ display: "flex", opacity: 1 }}
              transition={commonTransition}
              className={styles.dualPageContainer}
            >
              <PagePortal
                title="design"
                logo={logos.design}
                content={landingPageData.design}
                duration={16}
                tags={pageTags.design}
                buttonVariant={ButtonVariant.homeOrange}
              />

              {/* Divider Elements */}
              <div className={styles.blurLeft} />
              <div className={styles.divider} />
              <div className={styles.blurRight} />

              {/* Creative Portal */}
              <PagePortal
                title="creative"
                logo={logos.creative}
                content={landingPageData.creative}
                duration={29}
                tags={pageTags.creative}
                buttonVariant={ButtonVariant.homePurple}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Purple Orb */}
      <motion.div
        initial={orbAnimationVariants.initial(true)}
        animate={orbAnimationVariants.animate(isDualPage)}
        transition={orbAnimationVariants.transition(isDualPage)}
        className={styles.purpleOrb}
      />

      {/* Footer Links */}
      {isDualPage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className={styles.policyLinks}
        >
          {footerLinks.map((link, index) => (
            <>
              <Link key={link.href} href={link.href} className={styles.link}>
                {link.text}
              </Link>
              {index < footerLinks.length - 1 && " | "}
            </>
          ))}
        </motion.div>
      )}
    </div>
  );
}