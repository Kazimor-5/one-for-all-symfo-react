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
