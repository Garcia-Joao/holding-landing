"use client";

import { useEffect, useState } from "react";
import { PaperCard } from "@/components/PaperCard";
import { InstagramCarouselSection } from "@/components/sections/InstagramCarouselSection";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Disc3,
  ExternalLink,
  GlassWater,
  Handshake,
  Heart,
  MapPin,
  Mic2,
  Music2,
  PartyPopper,
  Phone,
  Store,
  Utensils,
  Users,
  X,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineRoomService } from "react-icons/md";
import type { CSSProperties, ReactNode } from "react";

type LetterWordProps = {
  text: string;
  colors: string[];
  className?: string;
};

type StandardCardProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  delay?: string;
};

const paperMasks = {
  topMask: "/masks/torn-01.png",
  bottomMask: "/masks/torn-02.png",
  leftMask: "/masks/torn-07.png",
  rightMask: "/masks/torn-04.png",
};

const places = [
  {
    logo: "/iconArca.png",
    icon: Store,
    iconTone: "icon-red",
    chipTone: "chip-sage",
    meta: "São Roque · Ateliê rural",
    title: "ARCA — Ateliê Rural",
    description:
      "Ateliê de arte em São Roque, ambiente de criação, encontro e experiências culturais em diálogo com o território.",
    address:
      "Estr. Mario de Andrade, 1001 — Jardim das Flores, São Roque · SP",
    phone: "(11) 99999-0001",
    mapsUrl:
      "https://www.google.com/maps/place/ARCA+-+Ateli%C3%AA+Rural/@-23.5236236,-47.1205834,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf0d81e355b829:0x9ac0bdd2bfa57c4f!8m2!3d-23.5236285!4d-47.1180085!16s%2Fg%2F11rsm50p6j?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D",
    badge: "Local parceiro",
    delay: "0s",
    photos: [
      "/images/locais/arca3.webp",
      "/images/locais/arca2.webp",
      "/images/locais/arca1.webp",
    ],
    nextEvents: [
      "Portoda MPB · 16/05 · 19h",
      "10 anos do NUGS — IFSP · 25–29/05",
    ],
  },
  {
    logo: "/iconVila.png",
    icon: MapPin,
    iconTone: "icon-teal",
    chipTone: "chip-teal",
    meta: "Aclimação · Experiência cultural",
    title: "Vila Secreta",
    description:
      "Espaço histórico, cultural e sensorial no coração de São Paulo, criado a partir de uma vila colonial do século 19.",
    address: "R. Rubi, 50 — Aclimação, São Paulo · SP",
    phone: "(11) 99999-0002",
    mapsUrl:
      "https://www.google.com/maps/place/Vila+Secreta/@-23.5700982,-46.6337605,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5985b60b181d:0x90e04d5b4f3f09f6!8m2!3d-23.5701031!4d-46.6311856!16s%2Fg%2F11krfhjnr_?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D",
    badge: "Local parceiro",
    delay: "0.08s",
    photos: [
      "/images/locais/vila1.webp",
      "/images/locais/vila2.webp",
      "/images/locais/vila3.webp",
    ],
    nextEvents: ["Agenda em construção", "Experiências culturais em breve"],
  },
  {
    logo: "/iconBro.png",
    icon: GlassWater,
    iconTone: "icon-mustard",
    chipTone: "chip-mustard",
    meta: "Barra Funda · Bar e ateliê",
    title: "Brotero39",
    description:
      "Bar e ateliê na Barra Funda com música ao vivo, coquetéis e estrutura para encontros, eventos e experiências.",
    address: "Rua Conselheiro Brotero, 39 — Barra Funda, São Paulo · SP",
    phone: "(11) 99999-0003",
    mapsUrl:
      "https://www.google.com/maps/place/brotero+39/data=!4m2!3m1!1s0x94ce59db00ed7c33:0xc52684f7b1f1f973?sa=X&ved=1t:242&ictx=111",
    badge: "Em breve",
    delay: "0.16s",
    photos: [
      "/images/locais/bro1.webp",
      "/images/locais/bro2.webp",
      "/images/locais/bro3.webp",
    ],
    nextEvents: ["Abertura em breve", "Programação autoral em definição"],
  },
];

const eventFormats = [
  {
    icon: Music2,
    iconTone: "icon-red",
    chipTone: "chip-red",
    number: "01",
    title: "Shows autorais",
    description:
      "Noites dedicadas a artistas, bandas e projetos que movimentam a cena independente.",
    badge: "Shows",
    delay: "0s",
  },
  {
    icon: Mic2,
    iconTone: "icon-teal",
    chipTone: "chip-teal",
    number: "02",
    title: "Encontros musicais",
    description:
      "Formatos intimistas com música, palavra, troca e participação de convidados.",
    badge: "Encontros",
    delay: "0.08s",
  },
  {
    icon: PartyPopper,
    iconTone: "icon-mustard",
    chipTone: "chip-mustard",
    number: "03",
    title: "Festas e experiências",
    description:
      "Eventos com identidade, curadoria musical, bar, cozinha e clima de comunidade.",
    badge: "Festas",
    delay: "0.16s",
  },
  {
    icon: Handshake,
    iconTone: "icon-terra",
    chipTone: "chip-terra",
    number: "04",
    title: "Produções parceiras",
    description:
      "Eventos em colaboração com espaços, coletivos, instituições e iniciativas culturais.",
    badge: "Parcerias",
    delay: "0.24s",
  },
];

const services = [
  {
    icon: GlassWater,
    iconTone: "icon-red",
    chipTone: "chip-red",
    title: "Bar para eventos",
    description:
      "Estrutura de bar para festas, eventos, encontros, lançamentos e experiências culturais.",
    delay: "0s",
  },
  {
    icon: Utensils,
    iconTone: "icon-mustard",
    chipTone: "chip-mustard",
    title: "Cozinha para eventos",
    description:
      "Operação de cozinha para eventos próprios, parceiros, festas e ocasiões especiais.",
    delay: "0.08s",
  },
  {
    icon: CalendarDays,
    iconTone: "icon-teal",
    chipTone: "chip-teal",
    title: "Produção de eventos",
    description:
      "Apoio na criação, organização e execução de eventos com identidade e propósito.",
    delay: "0.16s",
  },
  {
    icon: Users,
    iconTone: "icon-sage",
    chipTone: "chip-sage",
    title: "Curadoria artística",
    description:
      "Conexões entre artistas, espaços, público e projetos que fazem sentido para a cena.",
    delay: "0.24s",
  },
];

const agenda = [
  {
    title: "Portoda MPB",
    date: "16/05",
    chipTone: "chip-red",
    time: "19h",
    price: "R$ 20,00",
    place: "ARCA — Ateliê Rural",
    image: "/images/agenda/portoda-mpb.webp",
    description:
      "Encontro musical com Antonio Porto Trio e convidados, em uma viagem sonora pela MPB.",
    posterTone: "poster-red",
    delay: "0s",
  },
  {
    title: "10 anos do NUGS — IFSP",
    date: "25–29/05",
    chipTone: "chip-teal",
    time: "2026",
    price: "Detalhes em breve",
    place: "ARCA — Ateliê Rural",
    image: "/images/agenda/nugs.png",
    description:
      "Encontro em São Roque com arte, memória, debate, convivência, apresentações, oficinas, exposições e ações participativas.",
    posterTone: "poster-teal",
    delay: "0.12s",
  },
];

function StandardCard({
  children,
  className = "",
  innerClassName = "",
  delay = "0s",
}: StandardCardProps) {
  return (
    <PaperCard
      className={`standard-paper-card reveal ${className}`}
      innerClassName={`standard-paper-card-inner ${innerClassName}`}
      {...paperMasks}
      style={{ transitionDelay: delay } as CSSProperties}
    >
      {children}
    </PaperCard>
  );
}

function CollageIcon({
  children,
  tone = "icon-red",
  className = "",
}: {
  children: ReactNode;
  tone?: string;
  className?: string;
}) {
  return (
    <div className={`collage-icon ${className}`}>
      <div className="collage-icon-back" />
      <div className={`collage-icon-inner ${tone}`}>{children}</div>
    </div>
  );
}

function LetterWord({ text, colors, className = "" }: LetterWordProps) {
  const rotations = [
    "-2deg",
    "1deg",
    "-1deg",
    "2deg",
    "-1.5deg",
    "1.5deg",
    "-2.2deg",
    "0.8deg",
    "-1.2deg",
    "1.8deg",
  ];

  return (
    <span className={`letter-word ${className}`}>
      {text.split("").map((letter, index) => {
        if (letter === " ") {
          return <span key={`space-${index}`} className="letter-space" />;
        }

        return (
          <span
            key={`${letter}-${index}`}
            className={`letter-block ${colors[index % colors.length]}`}
            style={
              {
                "--rotate": rotations[index % rotations.length],
              } as CSSProperties
            }
          >
            <span>{letter}</span>
          </span>
        );
      })}
    </span>
  );
}

export default function HomePage() {
  const [selectedPlace, setSelectedPlace] = useState<
    (typeof places)[number] | null
  >(null);
  const [isHeaderDocked, setIsHeaderDocked] = useState(true);

  const SelectedPlaceIcon = selectedPlace?.icon;

  useEffect(() => {
    let ticking = false;

    const updateHeaderState = () => {
      setIsHeaderDocked(window.scrollY <= 12);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeaderState);
        ticking = true;
      }
    };

    updateHeaderState();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateHeaderState);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateHeaderState);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.requestAnimationFrame(() => {
              entry.target.classList.add("visible");
            });

            io.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.04,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    elements.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <main className={`site-shell ${isHeaderDocked ? "is-at-top" : "is-scrolled"}`}>
      <header
        className={`site-header ${isHeaderDocked ? "site-header-docked" : "site-header-floating"}`}
        data-state={isHeaderDocked ? "docked" : "floating"}
      >
        <nav className="site-nav">
          <button
            type="button"
            className="brand-lockup"
            aria-label="Ir para o início"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <img src="/logoNr.png" alt="Na Rotina" className="brand-logo" />
          </button>

          <div className="site-nav-links">
            <a href="#instagram" className="nav-link" aria-label="Instagram">
              <FaInstagram className="nav-link-icon" size={16} />
              <span className="nav-link-label">Instagram</span>
            </a>

            <a href="#locais" className="nav-link" aria-label="Locais">
              <MapPin className="nav-link-icon" size={16} />
              <span className="nav-link-label">Locais</span>
            </a>

            <a href="#servicos" className="nav-link" aria-label="Serviços">
              <MdOutlineRoomService className="nav-link-icon" size={16} />
              <span className="nav-link-label">Serviços</span>
            </a>

            <a href="#agenda" className="nav-link" aria-label="Agenda">
              <CalendarDays className="nav-link-icon" size={16} />
              <span className="nav-link-label">Agenda</span>
            </a>
          </div>

          <a href="#contato" className="nav-button" aria-label="Entrar em contato">
            <Phone className="nav-button-icon" size={15} />
            <span className="nav-button-label">Entrar em contato</span>
          </a>

        </nav>
      </header>

      <section id="inicio" className="hero-section">
        <div className="section-shell hero-grid">
          <PaperCard
            className="hero-main-card"
            innerClassName="hero-main-inner"
            {...paperMasks}
          >
            <div className="hero-topline">
              <span className="info-chip chip-red">Na Rotina</span>
              <span className="info-chip chip-teal">Iniciativas culturais</span>
              <span className="info-chip chip-mustard">São Paulo · SP</span>
            </div>

            <h1 className="hero-title">
              <span className="hero-title-line">Música autoral em</span>

              <span className="hero-letterline">
                <LetterWord
                  text="MOVIMENTO"
                  colors={[
                    "letter-red",
                    "letter-red",
                    "letter-mustard",
                    "letter-mustard",
                    "letter-teal",
                    "letter-teal",
                    "letter-teal",
                    "letter-sage",
                    "letter-sage",
                    "letter-red",
                  ]}
                />
              </span>
            </h1>

            <p className="hero-subtitle">
              Na Rotina reúne projetos, eventos, serviços, espaços e parcerias
              criados para apoiar artistas, movimentar encontros e fortalecer a
              cena de música autoral.
            </p>

            <div className="hero-actions">
              <a href="#agenda" className="action-button action-button-primary">
                Ver agenda
                <ArrowRight size={16} />
              </a>

              <a href="#locais" className="action-button action-button-teal">
                Conhecer os locais
              </a>

              <a href="#contato" className="action-button action-button-ghost">
                Falar com a equipe
              </a>
            </div>

            <div className="hero-tags">
              <span className="info-chip chip-red">Música autoral</span>
              <span className="info-chip chip-teal">Cena independente</span>
              <span className="info-chip chip-mustard">Eventos</span>
              <span className="info-chip chip-terra">Bar</span>
              <span className="info-chip chip-sage">Cozinha</span>
              <span className="info-chip chip-brown">Encontros</span>
            </div>
          </PaperCard>

          <div className="hero-side">
            <StandardCard
              className="visible hero-side-animated-card"
              innerClassName="hero-side-card"
            >
              <div className="hero-side-header">
                <div>
                  <CollageIcon tone="icon-red">
                    <Music2 size={22} />
                  </CollageIcon>
                </div>

                <div className="hero-vinyl">
                  <Disc3 size={26} />
                </div>
              </div>

              <h2 className="hero-side-title">
                Eventos, bar, cozinha e projetos vivos.
              </h2>

              <p className="hero-side-text">
                Conectamos artistas, público, lugares, serviços e experiências
                em torno da música autoral.
              </p>

              <div className="mini-pills">
                <div className="mini-pill">
                  <CollageIcon tone="icon-sage">
                    <Heart size={16} />
                  </CollageIcon>

                  <div>
                    <p className="mini-pill-title">Autoral</p>
                    <p className="mini-pill-text">música com identidade</p>
                  </div>
                </div>

                <div className="mini-pill">
                  <CollageIcon tone="icon-mustard">
                    <GlassWater size={16} />
                  </CollageIcon>

                  <div>
                    <p className="mini-pill-title">Bar</p>
                    <p className="mini-pill-text">operação para eventos</p>
                  </div>
                </div>

                <div className="mini-pill">
                  <CollageIcon tone="icon-teal">
                    <CalendarDays size={16} />
                  </CollageIcon>

                  <div>
                    <p className="mini-pill-title">Agenda</p>
                    <p className="mini-pill-text">encontros acontecendo</p>
                  </div>
                </div>
              </div>

              <div className="floating-chip floating-chip-a">
                <span className="info-chip chip-mustard">A cena não para ✦</span>
              </div>
            </StandardCard>
          </div>
        </div>
      </section>

      <div className="poster-strip">
        <div className="poster-strip-inner section-shell">
          <span className="poster-dot poster-dot-red" />
          <p>
            shows · encontros musicais · festas · bar · cozinha · produção ·
            curadoria
          </p>
          <span className="poster-dot poster-dot-teal" />
        </div>
      </div>

      <section
        id="instagram"
        className="section-shell section-block instagram-section-block"
      >
        <div
          className="reveal instagram-section-wrap"
          style={{ transitionDelay: "0.08s" }}
        >
          <InstagramCarouselSection />
        </div>
      </section>

      <div className="instagram-locais-separator section-shell" aria-hidden="true">
        <span className="separator-line" />
        <div className="separator-badge">
          <MapPin size={14} />
          <span>Locais parceiros</span>
        </div>
        <span className="separator-line" />
      </div>

      <section
        id="locais"
        className="section-shell section-block places-section-block"
      >
        <StandardCard
          className="section-intro-card places-intro-card"
          innerClassName="places-intro-inner"
        >
          <div className="places-title-row">
            <span className="places-title-icon" aria-hidden="true">
              <MapPin size={22} />
            </span>

            <div className="places-title-content">
              <p className="section-kicker">Locais</p>
              <h2 className="section-title">Lugares onde o Na Rotina acontece.</h2>
            </div>
          </div>

          <p className="section-description places-intro-description">
            Temos um bar próprio em construção e também realizamos eventos em
            outros espaços, criando pontes entre artistas, público e lugares
            parceiros.
          </p>
        </StandardCard>

        <div className="card-grid card-grid-3">
          {places.map((place) => {
            return (
              <article
                key={place.title}
                className="place-card-shell"
                role="button"
                tabIndex={0}
                onClick={() => setSelectedPlace(place)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedPlace(place);
                  }
                }}
              >
                <StandardCard className="place-card" delay={place.delay}>
                  <div className="card-top">
                    <div
                      className={`place-logo-mark ${place.title === "Brotero39" ? "place-logo-brotero" : ""
                        }`}
                    >
                      <img src={place.logo} alt={`Logo ${place.title}`} />
                    </div>

                    <span className={`info-chip ${place.chipTone} place-status-badge`}>
                      {place.badge}
                    </span>
                  </div>

                  <p className="eyebrow-meta">{place.meta}</p>
                  <h3 className="item-title">{place.title}</h3>
                  <p className="item-description">{place.description}</p>

                  <div className="soft-info-box">
                    <MapPin size={16} />
                    <span>{place.address}</span>
                  </div>

                  <button
                    type="button"
                    className="place-details-button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedPlace(place);
                    }}
                  >
                    Ver detalhes
                    <ArrowRight size={14} />
                  </button>
                </StandardCard>
              </article>
            );
          })}
        </div>
      </section>

      {selectedPlace ? (
        <div
          className="place-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`Detalhes de ${selectedPlace.title}`}
          onClick={() => setSelectedPlace(null)}
        >
          <div
            className="place-modal-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="place-modal-close"
              aria-label="Fechar detalhes"
              onClick={() => setSelectedPlace(null)}
            >
              <X size={18} />
            </button>

            <div className="place-modal-layout">
              <div className="place-modal-gallery">
                <div className="place-modal-main-photo">
                  <img
                    src={selectedPlace.photos[0]}
                    alt={`Foto principal de ${selectedPlace.title}`}
                  />

                  <span className={`info-chip ${selectedPlace.chipTone}`}>
                    {selectedPlace.badge}
                  </span>
                </div>

                <div className="place-modal-thumbs">
                  {selectedPlace.photos.slice(1).map((photo, index) => (
                    <div
                      key={photo}
                      className="place-modal-thumb"
                      aria-label={`Foto ${index + 2} de ${selectedPlace.title}`}
                    >
                      <img
                        src={photo}
                        alt={`Foto ${index + 2} de ${selectedPlace.title}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="place-modal-info">
                <div className="place-modal-header">
                  {SelectedPlaceIcon ? (
                    <CollageIcon
                      tone={selectedPlace.iconTone}
                      className={`place-modal-icon ${selectedPlace.title === "ARCA — Ateliê Rural" ||
                        selectedPlace.title === "Vila Secreta"
                        ? "place-modal-icon-lower"
                        : ""
                        }`}
                    >
                      <SelectedPlaceIcon size={22} />
                    </CollageIcon>
                  ) : null}

                  <div>
                    <p className="eyebrow-meta">{selectedPlace.meta}</p>
                    <h3 className="place-modal-title">{selectedPlace.title}</h3>
                  </div>
                </div>

                <p className="place-modal-description">
                  {selectedPlace.description}
                </p>

                <div className="place-modal-info-grid">
                  <div className="place-modal-info-item">
                    <MapPin size={16} />
                    <div>
                      <p>Endereço</p>
                      <span>{selectedPlace.address}</span>
                    </div>
                  </div>

                  <div className="place-modal-info-item">
                    <Phone size={16} />
                    <div>
                      <p>Telefone</p>
                      <span>{selectedPlace.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="place-modal-events">
                  <p className="place-modal-section-label">Próximos eventos</p>

                  <div className="place-modal-event-list">
                    {selectedPlace.nextEvents.map((event) => (
                      <div key={event} className="place-modal-event-item">
                        <CalendarDays size={15} />
                        <span>{event}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="place-modal-actions">
                  <button
                    type="button"
                    className="action-button action-button-primary"
                    onClick={() => setSelectedPlace(null)}
                  >
                    Fechar
                  </button>

                  <a
                    href={selectedPlace.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="action-button action-button-ghost"
                  >
                    Abrir no Google Maps
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="divider-line section-shell">
        <span />
      </div>

      <section id="agenda" className="section-shell section-block">
        <div className="section-header-row">
          <StandardCard className="section-intro-card">
            <p className="section-kicker">Agenda</p>
            <h2 className="section-title">Próximos movimentos.</h2>
            <p className="section-description">
              Eventos que estão chegando. Depois, se quiser, podemos transformar
              isso em calendário completo.
            </p>
          </StandardCard>

          <a
            href="#contato"
            className="action-button action-button-ghost reveal"
            style={{ transitionDelay: "0.08s" }}
          >
            Propor evento
          </a>
        </div>

        <div className="card-grid card-grid-2">
          {agenda.map((item) => (
            <StandardCard key={item.title} delay={item.delay}>
              <div className={`agenda-poster ${item.posterTone}`}>
                <img
                  src={item.image}
                  alt={`Imagem do evento ${item.title}`}
                  className="agenda-poster-image"
                />

                <div className="agenda-poster-overlay" />

                <div className="agenda-poster-title">
                  <LetterWord
                    text={item.title.toUpperCase()}
                    colors={[
                      "letter-red",
                      "letter-mustard",
                      "letter-teal",
                      "letter-sage",
                    ]}
                  />
                </div>
              </div>

              <div className="agenda-body">
                <div className="agenda-date-row">
                  <span className={`info-chip ${item.chipTone} agenda-date-badge`}>
                    {item.date}
                  </span>
                </div>

                <div className="agenda-meta">
                  <span className="meta-pill">
                    <Clock3 size={14} />
                    {item.time}
                  </span>
                  <span className="meta-pill">{item.price}</span>
                </div>

                <p className="agenda-place">
                  <MapPin size={15} />
                  {item.place}
                </p>

                <p className="item-description">{item.description}</p>
              </div>
            </StandardCard>
          ))}
        </div>
      </section>

      <div className="poster-strip poster-strip-dark">
        <div className="poster-strip-inner section-shell">
          <span className="poster-dot poster-dot-mustard" />
          <p>bar · cozinha · produção · curadoria · experiência</p>
          <span className="poster-dot poster-dot-red" />
        </div>
      </div>

      <section id="servicos" className="section-shell section-block">
        <StandardCard className="section-intro-card">
          <p className="section-kicker">Serviços</p>
          <h2 className="section-title">
            Bar, cozinha e produção para eventos.
          </h2>
          <p className="section-description">
            Além dos projetos próprios, Na Rotina também leva operação, cuidado
            e estrutura para eventos, festas e encontros.
          </p>
        </StandardCard>

        <div className="card-grid card-grid-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <StandardCard key={service.title} delay={service.delay}>
                <div className="card-top service-top">
                  <CollageIcon tone={service.iconTone}>
                    <Icon size={20} />
                  </CollageIcon>
                </div>

                <span className={`info-chip ${service.chipTone}`}>Serviço</span>

                <h3 className="item-title item-title-sm">{service.title}</h3>
                <p className="item-description item-description-sm">
                  {service.description}
                </p>
              </StandardCard>
            );
          })}
        </div>
      </section>

      <div className="divider-line section-shell">
        <span />
      </div>

      <section id="contato" className="section-shell section-block contact-block">
        <StandardCard className="contact-card" innerClassName="contact-card-inner">
          <p className="section-kicker">Contato</p>

          <h2 className="contact-title">
            Tem uma ideia, artista,
            <br />
            espaço ou evento?
          </h2>

          <p className="contact-description">
            Converse com a equipe da Na Rotina sobre música autoral, eventos,
            bar, cozinha, parcerias e iniciativas que podem nascer daqui.
          </p>

          <div className="contact-actions">
            <a
              href="mailto:contato@narotina.com.br"
              className="action-button action-button-primary"
            >
              contato@narotina.com.br
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="action-button action-button-teal"
            >
              Instagram
            </a>
          </div>
        </StandardCard>
      </section>

      <footer className="section-shell footer-shell">
        <div className="footer-card footer-card-expanded">
          <div className="footer-copy">
            <p>© {new Date().getFullYear()} Na Rotina</p>
            <p>Iniciativas, eventos e serviços para fortalecer a música autoral.</p>
            <p>São Paulo · SP · Brasil</p>
          </div>

          <div className="footer-boot-stage" aria-hidden="true">
            <div className="footer-boot-track">
              <img
                src="/anim/Boot1.png"
                alt=""
                className="footer-boot footer-boot-left"
              />
              <img
                src="/anim/Boot2.png"
                alt=""
                className="footer-boot footer-boot-right"
              />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

