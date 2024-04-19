import pricing01 from '../img/pricing1.png'
import pricing02 from '../img/pricing2.png';
import pricing03 from '../img/pricing3.png';

const plans = [
  {
    title: "BASIC PLAN",
    price: "$299",
    imgSrc: pricing01,
    features: [
      "3 days in a week",
      "1 bottle of protein",
      "HIIT (High-Intensity Interval Training) Workouts",
      "Muscle stretching",
      "Pilates Classes"
    ],
    buttonText: "Purchase Now"
  },
  {
    title: "STANDARD PLAN",
    price: "$499",
    imgSrc: pricing02,
    features: [
      "5 days in a week",
      "1 bottle of protein",
      "HIIT (High-Intensity Interval Training) Workouts",
      "Muscle stretching",
      "Pilates Classes"
    ],
    buttonText: "Order Now"
  },
  {
    title: "DIAMOND PACKAGE",
    price: "$999",
    imgSrc: pricing03,
    features: [
      "7 days in a week",
      "1 bottle of protein",
      "HIIT (High-Intensity Interval Training) Workouts",
      "Muscle stretching",
      "Pilates Classes"
    ],
    buttonText: "Get Started"
  }
];

export default plans;
