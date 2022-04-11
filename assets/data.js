import React from 'react';
import { FaHeart } from 'react-icons/fa';
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

export const slides = [
  {
    id: 1,
    name: 'mission animalière',
    src: './assets/slide_header/slide_animalier/Slide-baleine.jpg',
    anchor: '#',
  },
  {
    id: 2,
    name: 'mission environnementale',
    src: './assets/slide_header/slide_environnement/SLIDE-environnement.jpg',
    anchor: '#',
  },
  {
    id: 3,
    name: 'mission humanitaire',
    src: './assets/slide_header/slide_humanitaire/SLIDE-humanitaire.jpg',
    anchor: '#',
  },
  {
    id: 4,
    name: 'nos soutiens',
    src: './assets/slide_header/slide_ligue/Slide-Ligue.jpg',
    anchor: '#',
  },
  {
    id: 5,
    name: 'notre philosophie',
    src: './assets/slide_header/slide_philo/Slide-MARTIN-LK.jpg',
    anchor: '#',
  },
  {
    id: 6,
    name: 'notre réseau',
    src: './assets/slide_header/slide_reseau/Slide-Notre-réseau.jpg',
    anchor: '#',
  },
  {
    id: 7,
    name: 'Faire un don',
    src: './assets/slide_header/donation.jpg',
    anchor: '#',
  },
];
