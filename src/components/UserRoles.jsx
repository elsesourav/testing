import { Building, GraduationCap, Settings, User, Users } from "lucide-react";
import { FaBook, FaDatabase, FaGamepad, FaMedal, FaUsers, FaUsersCog } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa6";
import { IoIosCreate } from "react-icons/io";
import { PiRankingDuotone } from "react-icons/pi";
import { TbReportAnalytics } from "react-icons/tb";

const UserRoles = () => {
   const roles = [
      {
         icon: <User className="text-gray-600" size={20} />,
         title: "Visitor",
         features: [
            {
               icon: <FaGamepad className="text-orange-500" size={12} />,
               text: "Demo Games",
            },
            {
               icon: <FaDatabase className="text-blue-500" size={12} />,
               text: "Minimal Access",
            },
         ],
      },
      {
         icon: <GraduationCap className="text-blue-600" size={20} />,
         title: "Students",
         features: [
            {
               icon: <FaGamepad className="text-green-500" size={12} />,
               text: "STEM Content",
            },
            {
               icon: <FaMedal className="text-purple-500" size={12} />,
               text: "Rewards",
            },
            {
               icon: <PiRankingDuotone className="text-yellow-600" size={12} />,
               text: "Leaderboards",
            },
         ],
      },
      {
         icon: <Users className="text-green-600" size={20} />,
         title: "Teachers",
         features: [
            {
               icon: <IoIosCreate className="text-blue-500" size={12} />,
               text: "Create Events",
            },
            {
               icon: (
                  <TbReportAnalytics
                     className="text-green-500 scale-120"
                     size={12}
                  />
               ),
               text: "Reports",
            },
            {
               icon: <FaUsersCog className="text-purple-500" size={12} />,
               text: "Monitoring",
            },
         ],
      },
      {
         icon: <Building className="text-purple-600" size={20} />,
         title: "School Admin",
         features: [
            {
               icon: <FaUsersCog className="text-blue-500" size={12} />,
               text: "Manage Teachers",
            },
            {
               icon: <FaBook className="text-gray-600" size={12} />,
               text: "Manage Subjects",
            },
         ],
      },
      {
         icon: <Settings className="text-red-600" size={20} />,
         title: "System Admin",
         features: [
            {
               icon: <FaUsers className="text-red-500" size={12} />,
               text: "User Management",
            },
            {
               icon: <FaUserSecret className="text-blue-800" size={12} />,
               text: "User Monitoring",
            },
         ],
      },
   ];

   return (
      <div className="w-full">
         <div className="flex items-center gap-2 mb-3 font-bold text-orange-600">
            <Users size={20} />
            <span className="text-base">User Roles</span>
         </div>

         <div className="space-y-3">
            {/* First row - 3 roles */}
            <div className="grid grid-cols-3 gap-3">
               {roles.slice(0, 3).map((role, index) => {
                  // Define border colors for each role
                  const borderColors = [
                     "border-l-2 border-gray-300", // Visitor
                     "border-l-2 border-blue-300", // Students
                     "border-l-2 border-green-300", // Teachers
                  ];

                  return (
                     <div
                        key={index}
                        className="diagram-box bg-gray-50 border border-gray-200 rounded-md p-2"
                     >
                        <div className="flex items-center gap-2 mb-0">
                           {role.icon}
                           <span className="font-medium text-s text-gray-800">
                              {role.title}
                           </span>
                        </div>
                        <div className={`${borderColors[index]} pl-3 ml-2`}>
                           {role.features.map((feature, idx) => (
                              <div
                                 key={idx}
                                 className="compact-item text-gray-600"
                              >
                                 {feature.icon}
                                 <span className="text-xs">{feature.text}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  );
               })}
            </div>

            {/* Second row - 2 roles */}
            <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
               {roles.slice(3, 5).map((role, index) => {
                  // Define border colors for remaining roles
                  const borderColors = [
                     "border-l-2 border-purple-300", // School Admin
                     "border-l-2 border-red-300", // System Admin
                  ];

                  return (
                     <div
                        key={index + 3}
                        className="diagram-box bg-gray-50 border border-gray-200 rounded-md p-2"
                     >
                        <div className="flex items-center gap-2 mb-0">
                           {role.icon}
                           <span className="font-medium text-s text-gray-800">
                              {role.title}
                           </span>
                        </div>
                        <div className={`${borderColors[index]} pl-3 ml-2`}>
                           {role.features.map((feature, idx) => (
                              <div
                                 key={idx}
                                 className="compact-item text-gray-600"
                              >
                                 {feature.icon}
                                 <span className="text-xs">{feature.text}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default UserRoles;
