import {
  CalendarIcon,
  ClockIcon,
  CubeIcon,
  LightBulbIcon,
  LockClosedIcon,
  UserGroupIcon,
  VideoCameraIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import { CubeIcon as CubeIconSolid, CalendarIcon as CalendarIconSolid } from "@heroicons/react/solid";

export const navLinks = [
  { path: "/how-it-works", title: "How it Works" },
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
];

export const dashboardNavLinks = [
  {
    name: "listings",
    path: "/listings",
    title: "Listings",
    icon: <CubeIcon className="w-full" />,
    iconActive: <CubeIconSolid className="w-full" />,
    permission: ["partner"],
  },
  {
    name: "your-storage",
    path: "/your-storage",
    title: "Your Storage",
    icon: <ClockIcon className="w-full" />,
    permission: ["customer"],
  },
  {
    name: "bookings",
    path: "/bookings",
    title: "Bookings",
    icon: <CalendarIcon className="w-full" />,
    iconActive: <CalendarIconSolid className="w-full" />,
    permission: ["customer", "partner"],
  },
  {
    name: "account",
    path: "/account",
    title: "Account Details",
    icon: <ClockIcon className="w-full" />,
    permission: ["customer", "partner"],
  },
  {
    name: "support",
    path: "/support",
    title: "Support",
    icon: <ClockIcon className="w-full" />,
    permission: ["customer", "partner"],
  },
];

export const footerLinks = [
  {
    heading: "Company",
    subMenus: [
      { path: "#", title: "Services" },
      { path: "#", title: "Terms of Use" },
      { path: "#", title: "Privacy Policy" },
      { path: "#", title: "How it Works" },
      { path: "#", title: "Blog" },
      { path: "#", title: "FAQs" },
    ],
  },
  {
    heading: "Company",
    subMenus: [
      { path: "#", title: "Services" },
      { path: "#", title: "Terms of Use" },
      { path: "#", title: "Privacy Policy" },
      { path: "#", title: "How it Works" },
      { path: "#", title: "Blog" },
      { path: "#", title: "FAQs" },
    ],
  },
  {
    heading: "Company",
    subMenus: [
      { path: "#", title: "Services" },
      { path: "#", title: "Terms of Use" },
      { path: "#", title: "Privacy Policy" },
      { path: "#", title: "How it Works" },
      { path: "#", title: "Blog" },
      { path: "#", title: "FAQs" },
    ],
  },
];

export const mediaLinks = [
  { path: "#", title: "Twitter", icon: "/twitter.svg" },
  { path: "#", title: "Instagram", icon: "/instagram.svg" },
  { path: "#", title: "Youtube", icon: "/youtube.svg" },
  { path: "#", title: "Facebook", icon: "/facebook.svg" },
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

export const ListingSteps = [
  "Provide listing location & type",
  "Describe your listing",
  "Provide storage availability period",
  "State pricing",
];

export const storageKinds = [
  { name: "Garage & Lock Up", value: "garage&lockup" },
  { name: "Self-storage Unit", value: "selfStorageUnit" },
  { name: "Warehouse", value: "warehouse" },
  { name: "Outhouse & Shed", value: "outhouse&shed" },
  { name: "Spare Room", value: "spareRoom" },
  { name: "Basement", value: "basement" },
  { name: "Loft", value: "loft" },
  { name: "Busines Storage", value: "businessStorage" },
  { name: "Motor Bike Storage", value: "motorBikeStorage" },
];
export const storageFloors = [
  { name: "Ground Level", value: "groundLevel" },
  { name: "1st Floor", value: "1stFloor" },
  { name: "2nd Floor", value: "2ndFloor" },
  { name: "3rd Floor or Higher", value: "3rdFloorOrHigher" },
  { name: "Below Ground", value: "belowGround" },
  { name: "Multiple Floors", value: "multipleFloors" },
];
export const storageFeatures = [
  { label: "CCTV", value: "cctv", icon: <VideoCameraIcon className="text-[#222222] w-4" /> },
  { label: "Alarm", value: "alarm", icon: <LightBulbIcon className="text-[#222222] w-4" /> },
  { label: "Padlock", value: "padlock", icon: <LockClosedIcon className="text-[#222222] w-4" /> },
  { label: "Onsite Staff", value: "onsiteStaff", icon: <UserGroupIcon className="text-[#222222] w-4" /> },
];
