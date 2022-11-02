import {
  CalendarIcon,
  ClockIcon,
  CreditCardIcon,
  CubeIcon,
  LightBulbIcon,
  LockClosedIcon,
  UserCircleIcon,
  UserGroupIcon,
  VideoCameraIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import {
  CubeIcon as CubeIconSolid,
  CalendarIcon as CalendarIconSolid,
  UserCircleIcon as UserCircleIconSolid,
  CreditCardIcon as CreditCardIconSolid,
} from "@heroicons/react/solid";

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
    icon: <CubeIcon className="w-full" />,
    iconActive: <CubeIconSolid className="w-full" />,
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
    path: null,
    title: "Account Details",
    icon: <UserCircleIcon className="w-full" />,
    iconActive: <UserCircleIconSolid className="w-full" />,
    permission: ["customer", "partner"],
    subMenus: [
      {
        path: "/personal-details",
        title: "Personal Details",
        permission: ["customer", "partner"],
      },
      // {
      //   path: "/reviews",
      //   title: "Reviews",
      //   permission: ["customer", "partner"],
      // },
      // {
      //   path: "/professional-partner",
      //   title: "Professional Partner",
      //   permission: ["customer", "partner"],
      // },
      {
        path: "/account-verification",
        title: "Account Verification",
        permission: ["partner"],
      },
    ],
  },
  {
    name: "payments",
    path: "/payments",
    title: "Payments",
    icon: <CreditCardIcon className="w-full" />,
    iconActive: <CreditCardIconSolid className="w-full" />,
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
    icon: <VideoCameraIcon className="w-4" />,
  },
  {
    name: "People",
    icon: <UserGroupIcon className="w-4" />,
  },
  {
    name: "Electricity",
    icon: <LightBulbIcon className="w-4" />,
  },
  {
    name: "Security",
    icon: <LockClosedIcon className="w-4" />,
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
export const whenAccessListing = [
  { name: "Any Time", value: "anyTime" },
  { name: "Prior Notice Only", value: "priorNotice" },
  { name: "Specific Time", value: "specificTime" },
  { name: "Drop Off Only", value: "dropOff" },
];
export const howAccessListing = [
  { name: "Key", value: "key" },
  { name: "Pin Code", value: "pinCode" },
  { name: "Fingerprint Scanner", value: "fingerprint" },
  { name: "Access is granted at any time", value: "anytime" },
];
export const spaceDuration = [
  { name: "No Minimum", value: "noMinimum" },
  { name: "1 month", value: "1month" },
  { name: "2 months", value: "2months" },
  { name: "3 months", value: "3months" },
  { name: "6 months", value: "6months" },
  { name: "12 months", value: "12months" },
  { name: "more than 12 months", value: "moreThan12months" },
];
export const arrivalNoticeOpts = [
  { name: "No Notice", value: "noNotice" },
  { name: "1 day", value: "1day" },
  { name: "2 days", value: "2days" },
  { name: "3 days", value: "3days" },
  { name: "7 days", value: "7days" },
];
export const storageSize = [
  { name: "9 sq ft - 3ft High locker", value: "9-3" },
  { name: "25 sq ft - Small Garden Shed Size", value: "25" },
  { name: "35 sq ft - Standard Garden Shed Size", value: "35" },
  { name: "50 sq ft - Transit Van Size", value: "50" },
  { name: "75 sq ft - Luton Van Size", value: "75" },
  {
    name: "125 sq ft - Large Single Garage or 7 Tonne Lorry",
    value: "125 sq ft - Large Single Garage or 7 Tonne Lorry",
  },
  {
    name: "150 sq ft - One and Half garages or 2 Luton Van Loads",
    value: "150 sq ft - One and Half garages or 2 Luton Van Loads",
  },
];
