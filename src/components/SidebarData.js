import React from "react";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "2.8 Cointegration",
    path: "/cointegration",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "2.8.1 Modeling",
        path: "/cointegration/modeling",
      },
      {
        title: "2.8.2 Detection",
        path: "/cointegration/revenue",
      },
    ],
  },
  {
    title: "Reports",
    path: "/reports",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Reports1",
        path: "/reports/reports1",
        cName: "sub-nav",
      },
      {
        title: "Reports 2",
        path: "/reports/reports2",
        cName: "sub-nav",
      },
      {
        title: "Reports 3",
        path: "/reports/reports3",
      },
    ],
  },
  {
    title: "Products",
    path: "/products",
  },
  {
    title: "Team",
    path: "/team",
  },
  {
    title: "Messages",
    path: "/messages",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Message 1",
        path: "/messages/message1",
      },
      {
        title: "Message 2",
        path: "/messages/message2",
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
  },
];
