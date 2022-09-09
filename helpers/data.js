import { LightBulbIcon, LockClosedIcon, UserGroupIcon, VideoCameraIcon } from "@heroicons/react/outline";

export const navLinks = [
  {
    path: "",
    title: "Storage",
    subMenus: [
      {
        path: "",
        title: "Storage 1",
        // deepMenus: [
        //   { path: "", title: "" },
        //   { path: "", title: "" },
        //   { path: "", title: "" },
        //   { path: "", title: "" },
        // ],
      },
      {
        path: "",
        title: "Storage 2",
        // deepMenus: [
        //   { path: "", title: "" },
        //   { path: "", title: "" },
        //   { path: "", title: "" },
        //   { path: "", title: "" },
        // ],
      },
    ],
  },
  { path: "/support", title: "Support" },
  { path: "/how-it-works", title: "How it Works" },
];

export const storageFeats = [
  {
    name: "Video Surveillance",
    icon: <VideoCameraIcon className="text-[#222222] w-4" />,
  },
  {
    name: "People",
    icon: <UserGroupIcon className="text-[#222222] w-4" />,
  },
  {
    name: "Electricity",
    icon: <LightBulbIcon className="text-[#222222] w-4" />,
  },
  {
    name: "Security",
    icon: <LockClosedIcon className="text-[#222222] w-4" />,
  },
];
