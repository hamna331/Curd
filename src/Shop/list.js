import img1 from '../images/Balancia Electronic weight .jpg';
import img2 from '../images/Header-01.jpg';
import img3 from '../images/anti-agging-cream.jpg';
import img4 from '../images/anti-wrinkle.webp';
import img5 from '../images/bag.jph.webp';
import img6 from '../images/cold-cream.jpg';
import img7 from '../images/consumer-electronic.jpg';
import img8 from '../images/conventional.jpg';
import img9 from '../images/electronic.jpg';
import img10 from '../images/engine.jpg';
import img11 from '../images/foot-care.jpg';
import img12 from '../images/glow-up.jpg';
import img13 from '../images/hardware.jpg';
import img14 from '../images/herbal-cream.jpg';
import img15 from '../images/pit-cream.jpg';
import img16 from '../images/recycling.jpg';
import img17 from '../images/vanishing.jpg';
import img18 from '../images/white-glow.jpg';
import img19 from '../images/world-skill.jpg';
import img20 from '../images/img1.jpg';
import img21 from '../images/img2.jpg';
import img22 from '../images/img3.jpg';
import img23 from '../images/img4.jpg';
import img24 from '../images/img5.jpg';
import img25 from '../images/img6.jpg';
import img26 from '../images/img7.jpg';
import img27 from '../images/img8.jpg';

const Sdata = [
  {
    id: 1,
    imgsrc: img1,
    title: "Balancia Electronic weight",
    category: "man",
    btn: "view",
    relatedCategory: [7, 8, 9, 10, 16, 17],
  },
  {
    id: 2,
    imgsrc: img2,
    title: "Header",
    category: "man",
    btn: "view",
    relatedCategory: [7, 8, 9, 10, 16, 17],
  },
  {
    id: 3,
    imgsrc: img3,
    title: "anti-agging-cream",
    category: "woman",
    btn: "view",
    relatedCategory: [3, 4, 5, 6, 11, 12, 14, 15, 18, 19],
  },
  {
    id: 4,
    imgsrc: img4,
    title: "anti-wrinkle",
    category: "woman",
    btn: "view",
    relatedCategory: [3, 4, 5, 6, 11, 12, 14, 15, 18, 19],
  },
  {
    id: 5,
    imgsrc: img5,
    title: "bag",
    category: "woman",
    btn: "view",
    relatedCategory: [3, 4, 5, 6, 11, 12, 14, 15, 18, 19],
  },
  {
    id: 6,
    imgsrc: img6,
    title: "cold-cream",
    category: "woman",
    btn: "view",
    relatedCategory: [3, 4, 5, 6, 11, 12, 14, 15, 18, 19],
  },
  {
    id: 7,
    imgsrc: img7,
    title: "consumer-electronic",
    category: "man",
    btn: "view",
    relatedCategory: [1, 2, 8, 9, 10, 16, 17],
  },
  {
    id: 8,
    imgsrc: img8,
    title: "conventional",
    category: "man",
    btn: "view",
    relatedCategory: [1, 2, 7, 9, 10, 16, 17],
  },
  {
    id: 9,
    imgsrc: img9,
    title: "electronic",
    category: "man",
    btn: "view",
    relatedCategory: [1, 2, 7, 8, 10, 16, 17],
  },
  {
    id: 10,
    imgsrc: img10,
    title: "engine",
    category: "man",
    btn: "view",
    relatedCategory: [1, 2, 7, 8, 9, 16, 17],
  },
  {
    id: 11,
    imgsrc: img11,
    title: "foot-care",
    category: "woman",
    btn: "view",
    relatedCategory: [3, 4, 5, 6, 12, 14, 15, 18, 19],
  },
  {
    id: 12,
    imgsrc: img12,
    title: "glow-up",
    category: "woman",
    btn: "view",
    relatedCategory: [3, 4, 5, 6, 11, 14, 15, 18, 19],
  },
  {
    id: 13,
    imgsrc: img13,
    title: "hardware",
    category: "man",
    btn: "view",
    relatedCategory: [1, 2, 7, 8, 9, 10, 16],
  },
  {
    id: 14,
    imgsrc: img14,
    title: "herbal-cream",
    category: "woman",
    btn: "view",
    relatedCategory: [3, 4, 5, 6, 11, 12, 15, 18, 19],
  },
  {
    id: 15,
    imgsrc: img15,
    title: "pit-cream",
    category: "woman",
    btn: "view",
    relatedCategory: [3, 4, 5, 6, 11, 12, 14, 18, 19],
  },
  {
    id: 16,
    imgsrc: img16,
    title: "recycling",
    category: "man",
    btn: "view",
    relatedCategory: [1, 2, 7, 8, 9, 10, 17],
  },
  {
    id: 17,
    imgsrc: img17,
    title: "vanishing",
    category: "man",
    btn: "view",
    relatedCategory: [1, 2, 7, 8, 9, 10, 16],
  },
  {
    id: 18,
    imgsrc: img18,
    title: "white-glow",
    category: "woman",
    btn: "view",
    relatedCategory: [3, 4, 5, 6, 11, 12, 14, 15, 19],
  },
  {
    id: 19,
    imgsrc: img19,
    title: "world-skill",
    category: "woman",
    btn: "view",
    relatedCategory: [3, 4, 5, 6, 11, 12, 14, 15, 18],
  },
  {
    id: 20,
    imgsrc: img20,
    title: "baby-toy",
    category: "kid",
    btn: "view",
    relatedCategory: [21, 22, 23, 24, 25, 26, 27],
  },
  {
    id: 21,
    imgsrc: img21,
    title: "baby-toy",
    category: "kid",
    btn: "view",
    relatedCategory: [20, 22, 23, 24, 25, 26, 27],
  },
  {
    id: 22,
    imgsrc: img22,
    title: "baby-toy",
    category: "kid",
    btn: "view",
    relatedCategory: [20, 21, 23, 24, 25, 26, 27],
  },
  {
    id: 23,
    imgsrc: img23,
    title: "baby-toy",
    category: "kid",
    btn: "view",
    relatedCategory: [20, 21, 22, 24, 25, 26, 27],
  },
  {
    id: 24,
    imgsrc: img24,
    title: "baby-toy",
    category: "kid",
    btn: "view",
    relatedCategory: [20, 21, 22, 23, 25, 26, 27],
  },
  {
    id: 25,
    imgsrc: img25,
    title: "baby-toy",
    category: "kid",
    btn: "view",
    relatedCategory: [20, 21, 22, 23, 24, 26, 27],
  },
  {
    id: 26,
    imgsrc: img26,
    title: "bay-toys",
    category: "kid",
    btn: "view",
    relatedCategory: [20, 21, 22, 23, 24, 25, 27],
  },
  {
    id: 27,
    imgsrc: img27,
    title: "bay-toys",
    category: "kid",
    btn: "view",
    relatedCategory: [20, 21, 22, 23, 24, 25, 26],
  },
  {
    id: 28,
    imgsrc: img27,
    title: "bay-toys",
    category: "kid",
    btn: "view",
    relatedCategory: [20, 21, 22, 23, 24, 25, 26],
  },
];

export default Sdata;
