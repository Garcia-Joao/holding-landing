"use client";

import { ArrowUpRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import BeholdWidget from "@behold/react";
import styles from "./InstagramCarouselSectionAlt.module.css";

const BEHOLD_FEED_ID = process.env.NEXT_PUBLIC_BEHOLD_FEED_ID;

export function InstagramCarouselSectionAlt() {
  return (
    <div className={styles.instagramBlock}>
      <div className={styles.header}>
        <div>
          <div className={styles.kickerRow}>
            <span className={`${styles.chip} ${styles.chipRed}`}>
              <FaInstagram size={14} />
              Instagram
            </span>

            <span className={`${styles.chip} ${styles.chipTeal}`}>
              Bastidores
            </span>

            <span className={`${styles.chip} ${styles.chipMustard}`}>
              Eventos
            </span>
          </div>

          <h3>O movimento em tempo real.</h3>

          <p>
            Registros dos eventos, encontros, espaços e iniciativas que fazem
            parte do Na Rotina.
          </p>
        </div>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className={styles.profileButton}
        >
          Ver perfil
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className={styles.feedFrame}>
        {BEHOLD_FEED_ID ? (
          <div className={styles.feedWrapper}>
            <BeholdWidget feedId={BEHOLD_FEED_ID} />
          </div>
        ) : (
          <div className={styles.emptyCard}>
            <p className={styles.emptyKicker}>Feed não configurado</p>

            <p>
              Adicione o Feed ID do Behold no arquivo{" "}
              <code>.env.local</code> usando{" "}
              <code>NEXT_PUBLIC_BEHOLD_FEED_ID</code>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
