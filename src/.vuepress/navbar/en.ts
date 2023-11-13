import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  "/demo/",
  {
    text: "Front end",
    icon: "chrome",
    prefix: "/Tech/Front-end/",
    children: [
      {
        text: "CSS Learning",
        icon: "css",
        link: '01_CSS/',
      },
      {
        text: "VUE",
        icon: "vue",
        link: '03_VUE/'
      },
      { text: "Mini-Program", icon: "mini-app", link: "04_MP/" },
      {
        text: "Javascript",
        icon: "javascript",
        prefix: "02_Javascript/",
        children: [
          {
            text: "Basics",
            icon: "pen-to-square",
            link: "Basics/",
          },
          {
            text: "Senior",
            icon: "pen-to-square",
            link: "Senior/",
          },
          {
            text: "Runtime",
            icon: "pen-to-square",
            link: 'Runtime/'
          }
        ],
      },
      { text: "Others", icon: "others", link: "Others" },
    ],
  },
  {
    text: "Back-end",
    icon: "book",
    prefix: '/Tech/Backend/',
    // link: "/Tech/Backend",
    children: [
      {
        text: "Node JS",
        icon: "nodeJS",
        link: "nodeJS/"
      },
      {
        text: "Express",
        icon: "pen-to-square",
        link: "express/"
      }
    ]
  },
]);
