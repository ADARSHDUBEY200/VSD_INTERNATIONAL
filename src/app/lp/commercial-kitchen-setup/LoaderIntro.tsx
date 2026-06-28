'use client';

/* ───────────────────────────────────────────────────────────────────────────
   LoaderIntro — brand entrance. On first paint a dark curtain covers the page
   while the VSD logo does a 3D "coin-flip" spin inside a pulsing gold halo;
   the curtain then lifts away to reveal the page. Scroll is locked during the
   intro. Reduced-motion users get a quick fade with no spin.
   ─────────────────────────────────────────────────────────────────────────── */

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function LoaderIntro() {
  const [show, setShow] = useState(true);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReduce(prefersReduce);
    const t = setTimeout(() => setShow(false), prefersReduce ? 500 : 2550);
    return () => clearTimeout(t);
  }, []);

  // Lock scroll while the curtain is up.
  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="lp-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.65, 0, 0.35, 1] }}
          aria-hidden="true"
        >
          <span className="lp-intro-halo" />
          <motion.div
            className="lp-intro-logo"
            initial={reduce ? { opacity: 0, scale: 0.92 } : { opacity: 0, scale: 0.82, rotateY: 0 }}
            animate={
              reduce
                ? { opacity: 1, scale: 1 }
                : { opacity: 1, scale: [0.82, 1.04, 1], rotateY: 1080 }
            }
            transition={
              reduce
                ? { duration: 0.4, ease: 'easeOut' }
                : {
                    rotateY: { duration: 2, ease: [0.5, 0, 0.15, 1] },
                    scale: { duration: 2, ease: [0.34, 1.2, 0.36, 1], times: [0, 0.72, 1] },
                    opacity: { duration: 0.55, ease: 'easeOut' },
                  }
            }
          >
            <Image
              src="/VSD_LOGO_DARK.webp"
              alt="VSD International"
              width={210}
              height={124}
              priority
              style={{ width: 'auto', height: 'auto', maxWidth: 'min(58vw, 210px)' }}
            />
          </motion.div>

          {!reduce && (
            <motion.span
              className="lp-intro-bar"
              initial={{ scaleX: 0, opacity: 0.6 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 2.05, ease: [0.4, 0, 0.2, 1] }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
