import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';

export const work = [
  {
    id: 1,
    image: '/images/projects/google-drive-clone-min.png',
    title: 'Google Drive Clone',
    text: 'Fullstack React App',
    github: {
      url: 'https://github.com/ZigaHajsen/google-drive-clone',
      target: '_blank',
      icon: <FaGithub />,
    },
    liveSite: {
      url: 'https://ziga-google-drive-clone.netlify.app',
      target: '_blank',
      icon: <CgWebsite />,
    },
  },
  {
    id: 2,
    image: '/images/projects/search-github-user-min.png',
    title: 'Search Github User',
    text: 'Frontend React App',
    github: {
      url: 'https://github.com/ZigaHajsen/search-github-user',
      target: '_blank',
      icon: <FaGithub />,
    },
    liveSite: {
      url: 'https://ziga-github-users.netlify.app',
      target: '_blank',
      icon: <CgWebsite />,
    },
  },
  {
    id: 3,
    image: '/images/projects/e-commerce-store-min.png',
    title: 'E-Commerce Store',
    text: 'Fullstack React App',
    github: {
      url: 'https://github.com/ZigaHajsen/e-commerce-store',
      target: '_blank',
      icon: <FaGithub />,
    },
    liveSite: {
      url: 'https://ziga-ecommerce.herokuapp.com',
      target: '_blank',
      icon: <CgWebsite />,
    },
  },
  {
    id: 4,
    image: '/images/projects/dev-camper-api-min.png',
    title: 'DevCamper API',
    text: 'Backend React App',
    github: {
      url: 'https://github.com/ZigaHajsen/dev-camper-api',
      target: '_blank',
      icon: <FaGithub />,
    },
    liveSite: {
      url: 'https://ziga-devcamper.herokuapp.com',
      target: '_blank',
      icon: <CgWebsite />,
    },
  },
];
