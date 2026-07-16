"use client";

import { useState } from "react";
import { InstagramCarouselSectionAlt } from "@/components/sections/InstagramCarouselSectionAlt";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  ExternalLink,
  GlassWater,
  Handshake,
  Heart,
  Camera,
  MapPin,
  Mic2,
  Music2,
  PartyPopper,
  Phone,
  Sparkles,
  Store,
  Utensils,
  Users,
  X,
} from "lucide-react";
import styles from "./alt.module.css";

const places = [
  {
    logo: "/iconArca.png",
    icon: Store,
    iconTone: "red",
    chipTone: "sage",
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
    iconTone: "teal",
    chipTone: "teal",
    meta: "Aclimação · Experiência cultural",
    title: "Vila Secreta",
    description:
      "Espaço histórico, cultural e sensorial no coração de São Paulo, criado a partir de uma vila colonial do século 19.",
    address: "R. Rubi, 50 — Aclimação, São Paulo · SP",
    phone: "(11) 99999-0002",
    mapsUrl:
      "https://www.google.com/maps/place/Vila+Secreta/@-23.5700982,-46.6337605,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5985b60b181d:0x90e04d5b4f3f09f6!8m2!3d-23.5701031!4d-46.6311856!16s%2Fg%2F11krfhjnr_?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D",
    badge: "Local parceiro",
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
    iconTone: "mustard",
    chipTone: "mustard",
    meta: "Barra Funda · Bar e ateliê",
    title: "Brotero39",
    description:
      "Bar e ateliê na Barra Funda com música ao vivo, coquetéis e estrutura para encontros, eventos e experiências.",
    address: "Rua Conselheiro Brotero, 39 — Barra Funda, São Paulo · SP",
    phone: "(11) 99999-0003",
    mapsUrl:
      "https://www.google.com/maps/place/brotero+39/data=!4m2!3m1!1s0x94ce59db00ed7c33:0xc52684f7b1f1f973?sa=X&ved=1t:242&ictx=111",
    badge: "Em breve",
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
    tone: "red",
    title: "Shows autorais",
    description:
      "Noites dedicadas a artistas, bandas e projetos que movimentam a cena independente.",
    badge: "Shows",
  },
  {
    icon: Mic2,
    tone: "teal",
    title: "Encontros musicais",
    description:
      "Formatos intimistas com música, palavra, troca e participação de convidados.",
    badge: "Encontros",
  },
  {
    icon: PartyPopper,
    tone: "mustard",
    title: "Festas e experiências",
    description:
      "Eventos com identidade, curadoria musical, bar, cozinha e clima de comunidade.",
    badge: "Festas",
  },
  {
    icon: Handshake,
    tone: "terra",
    title: "Produções parceiras",
    description:
      "Eventos em colaboração com espaços, coletivos, instituições e iniciativas culturais.",
    badge: "Parcerias",
  },
];

const services = [
  {
    icon: GlassWater,
    tone: "red",
    title: "Bar para eventos",
    description:
      "Estrutura de bar para festas, eventos, encontros, lançamentos e experiências culturais.",
  },
  {
    icon: Utensils,
    tone: "mustard",
    title: "Cozinha para eventos",
    description:
      "Operação de cozinha para eventos próprios, parceiros, festas e ocasiões especiais.",
  },
  {
    icon: CalendarDays,
    tone: "teal",
    title: "Produção de eventos",
    description:
      "Apoio na criação, organização e execução de eventos com identidade e propósito.",
  },
  {
    icon: Users,
    tone: "sage",
    title: "Curadoria artística",
    description:
      "Conexões entre artistas, espaços, público e projetos que fazem sentido para a cena.",
  },
];

const agenda = [
  {
    title: "Portoda MPB",
    date: "16/05",
    tone: "red",
    time: "19h",
    price: "R$ 20,00",
    place: "ARCA — Ateliê Rural",
    image: "/images/agenda/portoda-mpb.webp",
    description:
      "Encontro musical com Antonio Porto Trio e convidados, em uma viagem sonora pela MPB.",
  },
  {
    title: "10 anos do NUGS — IFSP",
    date: "25–29/05",
    tone: "teal",
    time: "2026",
    price: "Detalhes em breve",
    place: "ARCA — Ateliê Rural",
    image: "/images/agenda/nugs.png",
    description:
      "Encontro em São Roque com arte, memória, debate, convivência, apresentações, oficinas, exposições e ações participativas.",
  },
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.sectionHeader}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function ToneIcon({
  tone,
  children,
}: {
  tone: string;
  children: React.ReactNode;
}) {
  return <div className={cx(styles.toneIcon, styles[`tone_${tone}`])}>{children}</div>;
}

function Chip({
  tone = "red",
  children,
}: {
  tone?: string;
  children: React.ReactNode;
}) {
  return <span className={cx(styles.chip, styles[`chip_${tone}`])}>{children}</span>;
}

export default function AltHomePage() {
  const [selectedPlace, setSelectedPlace] =
    useState<(typeof places)[number] | null>(null);

  const SelectedPlaceIcon = selectedPlace?.icon;

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <a href="#inicio" className={styles.brand} aria-label="Ir para o início">
            <img src="/logoNr.png" alt="Na Rotina" />
          </a>

          <div className={styles.links}>
            <a href="#agenda">Agenda</a>
            <a href="#instagram">Instagram</a>
            <a href="#locais">Locais</a>
            <a href="#eventos">Eventos</a>
            <a href="#servicos">Serviços</a>
          </div>

          <a href="#contato" className={styles.navCta}>
            Contato
          </a>
        </nav>
      </header>

      <section id="inicio" className={cx(styles.shell, styles.hero)}>
        <div className={styles.heroContent}>
          <div className={styles.heroChips}>
            <Chip tone="red">Na Rotina</Chip>
            <Chip tone="teal">Música autoral</Chip>
            <Chip tone="mustard">São Paulo · SP</Chip>
          </div>

          <h1>
            Música autoral em <span>movimento.</span>
          </h1>

          <p>
            Na Rotina reúne projetos, eventos, serviços, espaços e parcerias
            criados para apoiar artistas, movimentar encontros e fortalecer a
            cena de música autoral.
          </p>

          <div className={styles.heroActions}>
            <a href="#agenda" className={styles.primaryButton}>
              Ver agenda
              <ArrowRight size={18} />
            </a>

            <a href="#locais" className={styles.secondaryButton}>
              Conhecer os locais
            </a>
          </div>
        </div>

        <aside className={styles.heroPanel}>
          <div className={styles.heroPanelTop}>
            <ToneIcon tone="red">
              <Music2 size={24} />
            </ToneIcon>
            <Chip tone="sage">Projetos vivos</Chip>
          </div>

          <h2>Eventos, bar, cozinha e experiências com identidade.</h2>

          <div className={styles.statGrid}>
            <div>
              <strong>Shows</strong>
              <span>curadoria autoral</span>
            </div>
            <div>
              <strong>Bar</strong>
              <span>operação para eventos</span>
            </div>
            <div>
              <strong>Agenda</strong>
              <span>encontros acontecendo</span>
            </div>
          </div>
        </aside>
      </section>

      <section id="agenda" className={cx(styles.shell, styles.section)}>
        <div className={styles.sectionRow}>
          <SectionHeader
            eyebrow="Agenda"
            title="Próximos movimentos."
            description="Eventos que estão chegando, com programação, local e detalhes principais."
          />

          <a href="#contato" className={styles.secondaryButton}>
            Propor evento
          </a>
        </div>

        <div className={styles.agendaGrid}>
          {agenda.map((item) => (
            <article key={item.title} className={styles.agendaCard}>
              <div className={styles.agendaImage}>
                <img src={item.image} alt={`Imagem do evento ${item.title}`} />
              </div>

              <div className={styles.agendaBody}>
                <Chip tone={item.tone}>{item.date}</Chip>

                <h3>{item.title}</h3>

                <div className={styles.metaLine}>
                  <span>
                    <Clock3 size={15} />
                    {item.time}
                  </span>
                  <span>{item.price}</span>
                </div>

                <p className={styles.placeLine}>
                  <MapPin size={16} />
                  {item.place}
                </p>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="instagram" className={cx(styles.shell, styles.section)}>
        <SectionHeader
          eyebrow="Instagram"
          title="O movimento em tempo real."
          description="Registros dos eventos, encontros, espaços e iniciativas que fazem parte do Na Rotina."
        />

        <div className={styles.instagramFrame}>
          <InstagramCarouselSectionAlt />
        </div>
      </section>

      <section id="locais" className={cx(styles.shell, styles.section)}>
        <SectionHeader
          eyebrow="Locais"
          title="Lugares onde Na Rotina acontece."
          description="Temos um bar próprio em construção e também realizamos eventos em outros espaços, criando pontes entre artistas, público e lugares parceiros."
        />

        <div className={styles.placeGrid}>
          {places.map((place) => (
            <article
              key={place.title}
              className={styles.placeCard}
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
              <div className={styles.placeTop}>
                <img src={place.logo} alt={`Logo ${place.title}`} />
                <Chip tone={place.chipTone}>{place.badge}</Chip>
              </div>

              <p className={styles.placeMeta}>{place.meta}</p>
              <h3>{place.title}</h3>
              <p>{place.description}</p>

              <div className={styles.addressBox}>
                <MapPin size={16} />
                <span>{place.address}</span>
              </div>

              <button
                type="button"
                className={styles.textButton}
                onClick={(event) => {
                  event.stopPropagation();
                  setSelectedPlace(place);
                }}
              >
                Ver detalhes
                <ArrowRight size={15} />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="eventos" className={cx(styles.shell, styles.section)}>
        <SectionHeader
          eyebrow="Eventos"
          title="Formatos que Na Rotina oferece e produz."
          description="Do show autoral à festa, Na Rotina cria e apoia formatos para fazer a cena circular em diferentes contextos."
        />

        <div className={styles.featureGrid}>
          {eventFormats.map((event) => {
            const Icon = event.icon;

            return (
              <article key={event.title} className={styles.featureCard}>
                <div className={styles.featureTop}>
                  <ToneIcon tone={event.tone}>
                    <Icon size={22} />
                  </ToneIcon>
                  <Chip tone={event.tone}>{event.badge}</Chip>
                </div>

                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="servicos" className={cx(styles.shell, styles.section)}>
        <SectionHeader
          eyebrow="Serviços"
          title="Bar, cozinha e produção para eventos."
          description="Além dos projetos próprios, Na Rotina também leva operação, cuidado e estrutura para eventos, festas e encontros."
        />

        <div className={styles.serviceGrid}>
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article key={service.title} className={styles.featureCard}>
                <ToneIcon tone={service.tone}>
                  <Icon size={22} />
                </ToneIcon>

                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="contato" className={cx(styles.shell, styles.contactSection)}>
        <div className={styles.contactCard}>
          <Sparkles size={26} />
          <h2>Tem uma ideia, artista, espaço ou evento?</h2>
          <p>
            Converse com a equipe da Na Rotina sobre música autoral, eventos,
            bar, cozinha, parcerias e iniciativas que podem nascer daqui.
          </p>

          <div className={styles.contactActions}>
            <a href="mailto:contato@narotina.com.br" className={styles.primaryButton}>
              contato@narotina.com.br
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryButton}
            >
              <Camera size={17} />
              Instagram
            </a>
          </div>
        </div>
      </section>

      <footer className={cx(styles.shell, styles.footer)}>
        <span>© {new Date().getFullYear()} Na Rotina</span>
        <span>São Paulo · SP · Brasil</span>
      </footer>

      {selectedPlace ? (
        <div
          className={styles.modalBackdrop}
          role="dialog"
          aria-modal="true"
          aria-label={`Detalhes de ${selectedPlace.title}`}
          onClick={() => setSelectedPlace(null)}
        >
          <div
            className={styles.modalCard}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalClose}
              aria-label="Fechar detalhes"
              onClick={() => setSelectedPlace(null)}
            >
              <X size={18} />
            </button>

            <div className={styles.modalLayout}>
              <div className={styles.modalGallery}>
                <img
                  src={selectedPlace.photos[0]}
                  alt={`Foto principal de ${selectedPlace.title}`}
                />

                <div>
                  {selectedPlace.photos.slice(1).map((photo, index) => (
                    <img
                      key={photo}
                      src={photo}
                      alt={`Foto ${index + 2} de ${selectedPlace.title}`}
                    />
                  ))}
                </div>
              </div>

              <div className={styles.modalInfo}>
                <div className={styles.modalTitleRow}>
                  {SelectedPlaceIcon ? (
                    <ToneIcon tone={selectedPlace.iconTone}>
                      <SelectedPlaceIcon size={22} />
                    </ToneIcon>
                  ) : null}

                  <div>
                    <p className={styles.placeMeta}>{selectedPlace.meta}</p>
                    <h3>{selectedPlace.title}</h3>
                  </div>
                </div>

                <p>{selectedPlace.description}</p>

                <div className={styles.modalInfoGrid}>
                  <div>
                    <MapPin size={17} />
                    <div>
                      <strong>Endereço</strong>
                      <span>{selectedPlace.address}</span>
                    </div>
                  </div>

                  <div>
                    <Phone size={17} />
                    <div>
                      <strong>Telefone</strong>
                      <span>{selectedPlace.phone}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.eventList}>
                  <strong>Próximos eventos</strong>
                  {selectedPlace.nextEvents.map((event) => (
                    <span key={event}>
                      <CalendarDays size={15} />
                      {event}
                    </span>
                  ))}
                </div>

                <div className={styles.modalActions}>
                  <button
                    type="button"
                    className={styles.primaryButton}
                    onClick={() => setSelectedPlace(null)}
                  >
                    Fechar
                  </button>

                  <a
                    href={selectedPlace.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.secondaryButton}
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
    </main>
  );
}
