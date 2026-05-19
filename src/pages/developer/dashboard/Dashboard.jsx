import {
  FaArrowRight,
  FaEdit,
  FaSchool,
  FaTrash,
  FaUser,
  FaUserGraduate,
  FaUsers,
} from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import Header from "../../../partials/Header";
import NoData from "../../../partials/NoData";
import ServerError from "../../../partials/ServerError";
import TableLoading from "../../../partials/TableLoading";
import Layout from "../Layout";
import StatCard from "./StatCard";
import useDocumentTitle from "../../../functions/custom-hooks/useDocumentTitle";

const Dashboard = () => {
  useDocumentTitle("Dashboard | School Management System");
  const stats = [
    {
      title: "Total Students",
      value: 124,
      trend: true,
      trendLabel: "+12% from last month",
      icon: <FaUserGraduate />,
      color: "blue",
    },
    {
      title: "Total Teachers",
      value: 28,
      trend: true,
      trendLabel: "+2% new this year",
      icon: <FaChalkboardUser />,
      color: "green",
    },
    {
      title: "Total Classes",
      value: 12,
      trend: false,
      trendLabel: "Grade 7 to Grade 12",
      icon: <FaSchool />,
      color: "purple",
    },
  ];

  const students = [
    {
      id: 1,
      name: "Sophia Rodriguez",
      studentId: "STU-24012",
      grade: "Grade 10",
      section: "A",
      gradeSection: "Grade 10 - A",
      status: "Active",
    },
    {
      id: 2,
      name: "James Chen",
      studentId: "STU-24011",
      grade: "Grade 10",
      section: "B",
      gradeSection: "Grade 10 - B",
      status: "Active",
    },
    {
      id: 3,
      name: "Emily Davis",
      studentId: "STU-24010",
      grade: "Grade 9",
      section: "A",
      gradeSection: "Grade 9 - A",
      status: "Active",
    },
    {
      id: 4,
      name: "Michael Okonkwo",
      studentId: "STU-24009",
      grade: "Grade 8",
      section: "B",
      gradeSection: "Grade 8 - B",
      status: "Active",
    },
    {
      id: 5,
      name: "Isabella Garcia",
      studentId: "STU-24008",
      grade: "Grade 7",
      section: "A",
      gradeSection: "Grade 7 - A",
      status: "Pending",
    },
  ];

  return (
    <>
      <Layout menu="dashboard">
        {({ onToggle }) => (
          <>
            <Header
              title="Dashboard"
              description="Welcome back! Here's your school overview"
              onToggle={onToggle}
            />
            {/* rest of your dashboard content */}
            <div className="px-8 py-6 grid grid-cols-1 xl:grid-cols-3 gap-6">
              {stats.map((stat) => (
                <StatCard key={stat.title} {...stat} />
              ))}
            </div>

            <div className="px-8 py-6">
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="p-4 md:px-6 md:py-5 border-b border-gray-100 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      <FaUsers className="text-blue-500 mr-2 inline-block" />
                      Recent Students
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Latest 5 students added to the system
                    </p>
                  </div>
                  <a
                    href="./students.html"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium transition flex items-center gap-2"
                  >
                    View All
                    <FaArrowRight />
                  </a>
                </div>
                <div className="overflow-x-auto hidden xl:block">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                          Student ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                          Grade & Section
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                      {students.map((student) => (
                        <tr key={student.id}>
                          <td className="px-6">
                            <div className="flex items-center gap-3">
                              <span>{student.id}.</span>
                              <div className="size-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 text-sm">
                                  <FaUser />
                                </span>
                              </div>
                              <p className="font-medium">{student.name}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <p>{student.studentId}</p>
                          </td>
                          <td className="px-6 py-4">
                            <p className="px-2 py-1 text-xs font-semibold rounded-lg bg-blue-100 text-blue-700 inline">
                              {student.gradeSection}
                            </p>
                          </td>
                          <td className="px-6 py-4">
                            <p
                              className={`statusBadge status${student.status}`}
                            >
                              {student.status}
                            </p>
                          </td>
                          <td className="px-6 py-4">
                            <button className="cursor-pointer text-blue-600 hover:text-blue-800 mr-2">
                              <FaEdit />
                            </button>
                            <button className="cursor-pointer text-red-600 hover:text-red-800">
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="block xl:hidden">
                  <div className="divide-y divide-gray-100">
                    {students.map((student) => (
                      <div key={student.id} className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center gap-3">
                            <div className="size-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 text-sm">
                                <FaUser />
                              </span>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800">
                                {student.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {student.studentId}
                              </p>
                            </div>
                          </div>
                          <p className={`statusBadge status${student.status}`}>
                            {student.status}
                          </p>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <small className="text-xs text-gray-500">
                              Grade & Section
                            </small>
                            <p className="text-sm font-medium text-gray-700">
                              {student.gradeSection}
                            </p>
                          </div>
                          <div className="flex gap-3">
                            <button className="cursor-pointer text-blue-600 hover:text-blue-800 mr-2">
                              <FaEdit />
                            </button>
                            <button className="cursor-pointer text-red-600 hover:text-red-800">
                              <FaTrash />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <TableLoading count={20} cols={10} />
                <NoData />
                <ServerError />
                {/* <FetchingSpinner /> */}
                {/* <TableSpinner /> */}
                {/* <ButtonSpinner /> */}
              </div>
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export default Dashboard;
