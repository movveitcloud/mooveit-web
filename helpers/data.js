import {
  CalendarIcon,
  ClockIcon,
  CreditCardIcon,
  CubeIcon,
  LightBulbIcon,
  LockClosedIcon,
  TruckIcon,
  UserCircleIcon,
  UserGroupIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import {
  CubeIcon as CubeIconSolid,
  ClockIcon as ClockIconSolid,
  CalendarIcon as CalendarIconSolid,
  UserCircleIcon as UserCircleIconSolid,
  CreditCardIcon as CreditCardIconSolid,
  TruckIcon as TruckIconSolid,
  SearchCircleIcon as SearchCircleIconSolid,
  CurrencyPoundIcon as CurrencyPoundIconSolid,
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
    permission: ["partner"],
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
  // {
  //   name: "payments",
  //   path: "/payments",
  //   title: "Payments",
  //   icon: <CreditCardIcon className="w-full" />,
  //   iconActive: <CreditCardIconSolid className="w-full" />,
  //   permission: ["customer", "partner"],
  // },
  // {
  //   name: "history",
  //   path: "/history",
  //   title: "History",
  //   icon: <ClockIcon className="w-full" />,
  //   iconActive: <ClockIconSolid className="w-full" />,
  //   permission: ["customer"],
  // },
  {
    name: "drivers",
    path: "/drivers",
    title: "Drivers",
    icon: <TruckIcon className="w-full" />,
    iconActive: <TruckIconSolid className="w-full" />,
    permission: ["partner"],
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

export const howItWorks = [
  {
    icon: <UserCircleIconSolid className="w-8 md:w-9" />,

    title: "Ready to join the Movveit Party?",
    body: "Don't be shy, come on in and create an account! or if you're already a part of the crew, then simple login, and let's get this part started!",
    linkText: "Get Started",
    link: "/signup",
  },
  {
    icon: <SearchCircleIconSolid className="w-8 md:w-9" />,
    title: "Searching for a perfect location?",
    body: "Looking for the perfect spot? We've got you covered! Get ready to channel your inner Sherlock and start your search for a listing near you",
    linkText: "Search Listings",
    link: "/search",
  },
  {
    icon: <CurrencyPoundIconSolid className="w-8 md:w-9" />,
    title: "Ready to rock and roll?",
    body: "Let's get that storage space booked and sorted! Whether you need to stash your collectibles, or posessions, we've got the perfect spot for you.",
    linkText: "Book Now",
    link: "/login",
  },
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
  { label: "CCTV", value: "cctv", icon: <VideoCameraIcon className="w-4 text-[#222222]" /> },
  { label: "Alarm", value: "alarm", icon: <LightBulbIcon className="w-4 text-[#222222]" /> },
  { label: "Padlock", value: "padlock", icon: <LockClosedIcon className="w-4 text-[#222222]" /> },
  { label: "Onsite Staff", value: "onsiteStaff", icon: <UserGroupIcon className="w-4 text-[#222222]" /> },
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
    value: "125",
  },
  {
    name: "150 sq ft - One and Half garages or 2 Luton Van Loads",
    value: "150",
  },
];
