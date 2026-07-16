"use client";

import { ArrowUpRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import BeholdWidget from "@behold/react";

const BEHOLD_FEED_ID = process.env.NEXT_PUBLIC_BEHOLD_FEED_ID;

export function InstagramCarouselSection() {
  return (
    <div className="instagram-collage">
      <div className="instagram-collage-header">
        <div>
          <div className="instagram-kicker-row">
            <span className="info-chip chip-red instagram-chip">
              <FaInstagram size={14} />
              Instagram
            </span>

            <span className="info-chip chip-teal instagram-chip">
              Bastidores
            </span>

            <span className="info-chip chip-mustard instagram-chip">
              Eventos
            </span>
          </div>

          <h3 className="instagram-title">O movimento em tempo real.</h3>

          <p className="instagram-description">
            Registros dos eventos, encontros, espaços e iniciativas que fazem
            parte do Na Rotina.
          </p>
        </div>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="action-button action-button-ghost instagram-profile-button"
        >
          Ver perfil
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="instagram-feed-frame">
        <div className="instagram-feed-texture" />

        {BEHOLD_FEED_ID ? (
          <div className="behold-feed-wrapper">
            <BeholdWidget feedId={BEHOLD_FEED_ID} />
          </div>
        ) : (
          <div className="instagram-empty-card">
            <p className="instagram-empty-kicker">Feed não configurado</p>

            <p className="instagram-empty-text">
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