import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/trialbenefit.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "We Provide:",
  desc: "Empower-Invest combines financial literacy with real-world business experience, providing a unique educational tool for students. Our platform allows users to invest virtual currency in real small and local businesses, offering an interactive and practical approach to learning about finance and entrepreneurship.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Hands On Learning",
      desc: "Students can see the real-time impact of their virtual investments and understand how businesses operate.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Unique Educational Platform",
      desc: "Empower-Invest seamlessly integrates virtual investment with real-world business insights, creating a one-of-a-kind learning experience.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Inspiring Experiences",
      desc: "Visits to business production sites offer a tangible connection to their virtual investments, making learning engaging and memorable.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "What You'll Learn!",
  desc: "Explore essential skills in managing money, making smart investments, and gaining insights into how real businesses function.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Managing Money",
      desc: "Budget, track, save, invest: take control of your finances.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Making Smart Investments",
      desc: "Start early, diversify, stay calm, ride out the dips.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Insights Into Real Businesses",
      desc: "Data dives, customer whispers, adapt or get disrupted.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
