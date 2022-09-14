import { LightBulbIcon, LockClosedIcon, UserGroupIcon, VideoCameraIcon } from "@heroicons/react/outline";

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
  { name: "CCTV", value: "cctv", icon: <VideoCameraIcon className="text-[#222222] w-4" /> },
  { name: "Alarm", value: "alarm", icon: <LightBulbIcon className="text-[#222222] w-4" /> },
  { name: "Padlock", value: "padlock", icon: <LockClosedIcon className="text-[#222222] w-4" /> },
  { name: "Onsite Staff", value: "onsiteStaff", icon: <UserGroupIcon className="text-[#222222] w-4" /> },
];
