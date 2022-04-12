import React from 'react';
import {
  FaHeart,
  FaDiscord,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import { BiDonateHeart } from 'react-icons/bi';

export const navLinks = [
  {
    id: 1,
    name: 'présentation',
    anchor: '#',
    icon: '',
  },
  {
    id: 2,
    name: 'philosophie',
    anchor: '#',
    icon: '',
  },
  {
    id: 3,
    name: 'révolution',
    anchor: '#',
    icon: '',
  },
  {
    id: 4,
    name: 'activités',
    anchor: '#',
    icon: '',
  },
  {
    id: 5,
    name: 'missions',
    anchor: '#',
    icon: '',
  },
  {
    id: 6,
    name: 'logo-fleur',
    anchor: '',
    icon: './assets/header/logocolor.png',
  },
  {
    id: 7,
    name: 'évènements',
    anchor: '#',
    icon: '',
  },
  {
    id: 8,
    name: 'soutiens',
    anchor: '#',
    icon: '',
  },
  {
    id: 9,
    name: 'rejoindre',
    anchor: '#',
    icon: '',
  },
  {
    id: 10,
    name: 'adhérer',
    anchor: '#',
    icon: <FaHeart />,
  },
  {
    id: 11,
    name: 'faire un don',
    anchor: '#',
    icon: <BiDonateHeart />,
  },
];

export const headerSlides = [
  {
    id: 1,
    name: 'mission animalière',
    src: './assets/missions/Slide-baleine.png',
    anchor: '#',
  },
  {
    id: 2,
    name: 'mission environnementale',
    src: './assets/missions/SLIDE-environnement.png',
    anchor: '#',
  },
  {
    id: 3,
    name: 'mission humanitaire',
    src: './assets/missions/SLIDE-humanitaire.png',
    anchor: '#',
  },
  {
    id: 4,
    name: 'nos soutiens',
    src: './assets/missions/Slide-Ligue.png',
    anchor: '#',
  },
  {
    id: 5,
    name: 'notre philosophie',
    src: './assets/missions/Slide-MARTIN-LK.png',
    anchor: '#',
  },
  {
    id: 6,
    name: 'notre réseau',
    src: './assets/missions/Slide-Notre-reseau.png',
    anchor: '#',
  },
  {
    id: 7,
    name: 'Faire un don',
    src: './assets/slide_header/donation.jpg',
    anchor: '#',
  },
];

export const evenementSlides = [
  {
    id: 1,
    name: 'défi famine',
    text: 'participer au défi',
    src: './assets/evenement/defi_famine_2.png',
    anchor: '#',
  },
  {
    id: 2,
    name: 'challenge #JeSuisOne4All',
    text: 'participer au challenge',
    src: './assets/evenement/je_suis_one4all.png',
    anchor: '#',
  },
  {
    id: 3,
    name: 'challenge #JeSuisOne4All',
    text: 'participer au challenge',
    src: './assets/evenement/je_suis_one4all_2.png',
    anchor: '#',
  },
];

export const soutiensSlides = [
  {
    id: 1,
    name: 'Alex Song avec Don Vebole',
    src: './assets/ligue/alex_song.jpg',
  },
  {
    id: 2,
    name: 'Christophe Muller avec Don Vebole',
    src: './assets/ligue/christophe_muller.jpg',
  },
  {
    id: 3,
    name: 'Gary Dourdan avec Don Vebole',
    src: './assets/ligue/gary_dourdan.jpg',
  },
  {
    id: 4,
    name: 'Gervinho avec Don Vebole',
    src: './assets/ligue/gervinho.jpg',
  },
  {
    id: 5,
    name: 'Kyle Richards avec Don Vebole',
    src: './assets/ligue/kyle_richards.jpg',
  },
  {
    id: 6,
    name: 'Lisa Vanderpump avec Don Vebole',
    src: './assets/ligue/lisa_vanderpump.jpg',
  },
  {
    id: 7,
    name: 'Matt Damon avec Don Vebole',
    src: './assets/ligue/matt_damon.jpg',
  },
  {
    id: 8,
    name: 'Radja Nainggolan avec Don Vebole',
    src: './assets/ligue/radja_nainggolan.jpg',
  },
  {
    id: 9,
    name: 'Redfoo avec Don Vebole',
    src: './assets/ligue/redfoo.jpg',
  },
  {
    id: 10,
    name: 'Seydou Keita avec Don Vebole',
    src: './assets/ligue/seydou_keita.jpg',
  },
  {
    id: 11,
    name: 'Seydou Keita avec Don Vebole',
    src: './assets/ligue/seydou_keita.jpg',
  },
  {
    id: 12,
    name: 'Une équipe avec Don Vebole',
    src: './assets/ligue/soutiens_slide1.jpg',
  },
  {
    id: 13,
    name: 'Matthieu Valbuena avec Don Vebole',
    src: './assets/ligue/valbuena.jpg',
  },
  {
    id: 14,
    name: 'Willian avec Don Vebole',
    src: './assets/ligue/willian.jpg',
  },
];

export const socialLinks = [
  {
    id: 1,
    src: <FaFacebook />,
    anchor: '#',
  },
  {
    id: 2,
    src: <FaYoutube />,
    anchor: '#',
  },
  {
    id: 3,
    src: <FaInstagram />,
    anchor: '#',
  },
  {
    id: 4,
    src: <FaDiscord />,
    anchor: '#',
  },
  {
    id: 5,
    src: <FaTwitter />,
    anchor: '#',
  },
];

export const people = [
  {
    id: 1,
    name: 'Italie',
    src: 'assets/reseau/Italia.jpg',
    secondClass: 'cell-1',
  },
  {
    id: 2,
    name: 'Los Angeles',
    src: 'assets/reseau/LA.jpg',
    secondClass: 'cell-2',
  },
  {
    id: 3,
    name: 'Tokyo',
    src: 'assets/reseau/Tokyo.jpg',
    secondClass: 'cell-3',
  },
  {
    id: 4,
    name: 'Beyrouth',
    src: 'assets/reseau/Beyrouth.jpg',
  },
];

export const news = [
  {
    id: 1,
    bgImage: './assets/news/minia_yt_1.jpg',
    logo: './assets/header/logocolor.png',
    title: '#One4all - Rejoignez-nous !',
    date: '21 sept 2021',
    desc: 'Vidéo de lancement du Mouvement et du Challenge #One4All',
    anchor: '#',
    text: 'Voir la publication',
    icon: <FaYoutube />,
  },
  {
    id: 2,
    bgImage: './assets/news/minia_yt_2.jpg',
    logo: './assets/header/logocolor.png',
    title: 'Matt Damon supporting #One4All and Don Vebole',
    date: '21 sept 2021',
    desc: 'Interview de Matt Damon qui soutient #One4All',
    anchor: '#',
    text: 'Voir la publication',
    icon: <FaYoutube />,
  },
  {
    id: 3,
    bgImage: './assets/news/minia_insta_1.jpg',
    logo: './assets/header/logocolor.png',
    title: 'Une nouvelle mascotte pour #One4All !',
    date: '21 sept 2021',
    desc: 'Nous sommes heureux de vous présentez notre nouvelle mascotte : Julian !',
    anchor: '#',
    text: 'Voir la publication',
    icon: <FaInstagram />,
  },
  {
    id: 4,
    bgImage: './assets/news/minia_insta_2.jpg',
    logo: './assets/header/logocolor.png',
    title: 'Gervinho supporting #One4All and Don Vebole',
    date: '21 sept 2021',
    desc: "Comme @gervinhofficial de l'équipe de @parmacalcio1913 soutiens toi aussi #One4All",
    anchor: '#',
    text: 'Voir la publication',
    icon: <FaInstagram />,
  },
  {
    id: 5,
    bgImage: './assets/news/minia_insta_2.jpg',
    logo: './assets/header/logocolor.png',
    title: 'Journée mondial de la paix',
    date: '21 sept 2021',
    desc: '#One4All est une association internationale qui a pour but de fédérer tous les Hommes – indépendamment de leur religion, ethnie ..',
    anchor: '#',
    text: 'Voir la publication',
    icon: <FaFacebook />,
  },
  {
    id: 4,
    bgImage: './assets/news/minia_insta_2.jpg',
    logo: './assets/header/logocolor.png',
    title: 'Le mouvement altruiste #One4all',
    date: '21 sept 2021',
    desc: 'Le mouvement altruiste #One4all porte son regard sur le monde et ses enjeux en militant activement dans plusieurs domaines d’intervention : 🤲 𝑯𝒖𝒎𝒂𝒏𝒊𝒕𝒂𝒊𝒓𝒆 ...',
    anchor: '#',
    text: 'Voir la publication',
    icon: <FaFacebook />,
  },
];
