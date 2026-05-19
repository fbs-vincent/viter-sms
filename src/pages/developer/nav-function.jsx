import { FaUserGraduate } from "react-icons/fa";
import {
  FaBuilding,
  FaChalkboardUser,
  FaGaugeHigh,
  FaGear,
} from "react-icons/fa6";
import { devNavUrl, urlDeveloper } from "../../functions/functions-general";

export const navList = [
  {
    label: "Dashboard",
    icon: <FaGaugeHigh />,
    menu: "dashboard",
    path: `${devNavUrl}/${urlDeveloper}/dashboard`,
    submenu: "",
  },
  {
    label: "Students",
    icon: <FaUserGraduate />,
    menu: "students",
    path: `${devNavUrl}/${urlDeveloper}/students`,
    submenu: "",
  },
  {
    label: "Teachers",
    icon: <FaChalkboardUser />,
    menu: "teachers",
    path: `${devNavUrl}/${urlDeveloper}/teachers`,
    submenu: "",
  },
  {
    label: "Classes",
    icon: <FaBuilding />,
    menu: "classes",
    path: `${devNavUrl}/${urlDeveloper}/classes`,
    submenu: "",
  },
  {
    label: "Settings",
    icon: <FaGear />,
    menu: "settings",
    path: `${devNavUrl}/${urlDeveloper}/settings`,
    submenu: "",
  },
  //   {
  //     label: "Employees",
  //     icon: <FaUsers />,
  //     menu: "employees",
  //     path: `${devNavUrl}/${urlDeveloper}/employees`,
  //     submenu: "",
  //   },
  //   {
  //     label: "Settings",
  //     icon: <FaCogs />,
  //     menu: "settings",
  //     submenu: "",
  //     subNavList: [
  //       {
  //         label: "Role",
  //         path: `${devNavUrl}/${urlDeveloper}/settings/role`,
  //       },
  //       {
  //         label: "users",
  //         path: `${devNavUrl}/${urlDeveloper}/settings/users`,
  //       },
  //     ],
  //   },
];
