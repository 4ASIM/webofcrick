// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilUsersAlt,
   heading: "Captain", 
  },
  {
    icon: UilUsersAlt,
    heading: "Organizer",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Captains",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 100,
    value: "2000",
    png: UilUsdSquare,
    series: [
      {
        name: "Captians",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Organizer",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Organizer",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
 
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Muhammad Asim",
    noti: "The Organizer provided groud was not in good condition.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "Ayesha Asif",
    noti: "Matches fee was so high and resources are not provided .",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Uzair Ahmed khalid",
    noti: "I loved the organizer way of organizing the tournament.",
    time: "2 hours ago",
  },
  {
    img: img3,
    name: "Waqas Faiz",
    noti: "I loved the organizer way of organizing the tournament.",
    time: "2 hours ago",
  },
 



];
