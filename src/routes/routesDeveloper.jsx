import { devNavUrl, urlDeveloper } from "../functions/functions-general";
import Dashboard from "../pages/developer/dashboard/Dashboard";
import Students from "../pages/developer/students/Students";

export const routesDeveloper = [
  {
    path: `${devNavUrl}/${urlDeveloper}/`,
    element: (
      <>
        <Dashboard />
      </>
    ),
  },
  {
    path: `${devNavUrl}/${urlDeveloper}/dashboard`,
    element: (
      <>
        <Dashboard />
      </>
    ),
  },
  {
    path: `${devNavUrl}/${urlDeveloper}/students`,
    element: (
      <>
        <Students />
      </>
    ),
  },
];
