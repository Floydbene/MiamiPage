import NusrEt from './images/NusrEt.webp';
import Chi from './images/chiBrickell.webp';
import sexyFish from './images/sexyfish.webp';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#sights', text: 'sights' },
  { id: 4, href: '#foods', text: 'foods' },
];

export const socialLinks = [
  {
    id: 1,
    href: 'https://www.linkedin.com/in/floydbenedikter/',
    icon: 'fab fa-linkedin',
  },
  {
    id: 2,
    href: 'https://floydbene.github.io/meetfloyd/',
    icon: '	fab fa-chrome',
  },
  {
    id: 3,
    href: 'https://github.com/Floydbene',
    icon: 'fab fa-github',
  },
];

export const sights = [
  {
    id: 1,
    title: 'The best food',
    subText: 'Explore some of the greatest food known to man',
    icon: 'fas fa-pizza-slice',
  },
  {
    id: 2,
    title: 'The best views',
    subText: 'Explore some of the greatest views known to man',
    icon: '	fas fa-image',
  },
  {
    id: 3,
    title: 'The best activities',
    subText: 'Explore some of the greatest activities known to man',
    icon: 'fas fa-basketball-ball',
  },
];

export const features = [
  {
    id: 1,
    location: 'Brickell',
    inf1: 'highly rated',
    inf2: '$$$$',
    title: 'Nurs Et',
    subText: "Enjoy Salt Bae's steak",
    catcher: 'Fan Favorite!',
    img: NusrEt,
  },
  {
    id: 2,
    location: 'Brickell',
    inf1: 'highly rated',
    inf2: '$$$$',
    title: "CH'I",
    subText: 'Try some great Chinese',
    catcher: 'Best Chinese!',
    img: Chi,
  },
  {
    id: 3,
    location: 'Brickell',
    inf1: 'highly rated',
    inf2: '$$$$',
    title: 'Sexy Fish',
    subText: 'Try some of their sexy, fresh fish',
    catcher: 'Best Fish!',
    img: sexyFish,
  },
];
