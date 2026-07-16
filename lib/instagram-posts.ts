export type InstagramPost = {
  id: string;
  url: string;
  title: string;
  description?: string;
  image: string;
};

export const instagramPosts: InstagramPost[] = [
  {
    id: "post-1",
    url: "https://www.instagram.com/p/DWrujSID8Er/",
    title: "O Na Rotina em movimento",
    description: "Registros, encontros e iniciativas da cena autoral.",
    image: "/images/instagram/post-1.jpg",
  },
  {
    id: "post-2",
    url: "https://www.instagram.com/",
    title: "Eventos, bar e música autoral",
    description: "O que acontece nos nossos espaços e parceiros.",
    image: "/images/instagram/post-2.jpg",
  },
  {
    id: "post-3",
    url: "https://www.instagram.com/",
    title: "Agenda viva",
    description: "Próximos movimentos, saraus, festas e encontros.",
    image: "/images/instagram/post-3.jpg",
  },
];