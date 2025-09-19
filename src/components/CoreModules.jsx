import { Blocks } from "lucide-react";
import {
   FaBell,
   FaBook,
   FaCalendarAlt,
   FaChartBar,
   FaEnvelope,
   FaGraduationCap,
   FaUniversalAccess,
   FaUserCircle
} from "react-icons/fa";
import { PiRankingDuotone } from "react-icons/pi";


const CoreModules = () => {
   const modules = [
      {
         icon: <FaBook className="text-blue-600" size={18} />,
         title: "Learning Hub",
         color: "bg-blue-50 border-blue-300",
      },
      {
         icon: <FaChartBar className="text-green-600" size={18} />,
         title: "Dashboard",
         color: "bg-green-50 border-green-300",
      },
      {
         icon: <FaCalendarAlt className="text-purple-600" size={18} />,
         title: "Events",
         color: "bg-purple-50 border-purple-300",
      },
      {
         icon: <FaGraduationCap className="text-indigo-600" size={18} />,
         title: "Curriculum",
         color: "bg-indigo-50 border-indigo-300",
      },
      {
         icon: <FaUserCircle className="text-orange-600" size={18} />,
         title: "Profile",
         color: "bg-orange-50 border-orange-300",
      },
      {
         icon: <PiRankingDuotone className="text-yellow-600" size={18} />,
         title: "Leaderboards",
         color: "bg-yellow-50 border-yellow-300",
      },
      {
         icon: <FaBell className="text-red-600" size={18} />,
         title: "Alerts",
         color: "bg-red-50 border-red-300",
      },
      {
         icon: <FaUniversalAccess className="text-teal-600" size={18} />,
         title: "Accessibility",
         color: "bg-teal-50 border-teal-300",
      },
      {
         icon: <FaEnvelope className="text-pink-600" size={18} />,
         title: "Notifications",
         color: "bg-pink-50 border-pink-300",
      },
   ];

   return (
      <div className="w-full">
         <div className="flex items-center gap-2 mb-3 font-bold text-purple-600">
            <Blocks size={20} />
            <span className="text-base">Core Modules</span>
         </div>

         <div className="space-y-3">
            <div className="grid grid-cols-5 gap-2">
               {modules.slice(0, 5).map((module, index) => (
                  <div
                     key={index}
                     className={`diagram-box ${module.color} p-2`}
                  >
                     <div className="flex items-center gap-2 font-medium text-gray-800">
                        <div className="p-1 rounded bg-white shadow-sm">
                           {module.icon}
                        </div>
                        <span className="text-xs">{module.title}</span>
                     </div>
                  </div>
               ))}
            </div>

            <div className="grid grid-cols-4 gap-2">
               {modules.slice(5, modules.length).map((module, index) => (
                  <div
                     key={index + 3}
                     className={`diagram-box ${module.color} p-2`}
                  >
                     <div className="flex items-center gap-2 font-medium text-gray-800">
                        <div className="p-1 rounded bg-white shadow-sm">
                           {module.icon}
                        </div>
                        <span className="text-xs">{module.title}</span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default CoreModules;
