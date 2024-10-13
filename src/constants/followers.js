import { v4 } from "uuid";

const FOLLOWERS = [
  {
    id: v4(),
    icon: "../../public/assets/icon-facebook.svg",
    name: "@nathanf",
    number: 1987,
    today: 12,
  },
  {
    id: v4(),
    icon: "../../public/assets/icon-twitter.svg",
    name: "@nathanf",
    number: 1044,
    today: 99,
  },
  {
    id: v4(),
    icon: "../../public/assets/icon-instagram.svg",
    name: "@realnathanf",
    number: 11 + "k",
    today: 1099,
  },
  {
    id: v4(),
    icon: "../../public/assets/icon-youtube.svg",
    name: "Nathan F.",
    number: 8239,
    today: 144,
  },
];

export { FOLLOWERS };
