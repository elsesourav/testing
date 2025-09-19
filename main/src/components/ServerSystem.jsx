import { Cloud, Database, Globe, Server } from "lucide-react";
import { DiHtml5Connectivity } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { IoCloudOfflineSharp } from "react-icons/io5";
import { MdNotificationsActive } from "react-icons/md";
import { SiAmazonwebservices, SiMongodb, SiNodedotjs, SiPostgresql, SiPrisma } from "react-icons/si";


const ServerSystem = () => {
   return (
      <div className="diagram-box server-box w-96">
         {/* Main Backend Label */}
         <div className="text-center mb-3">
            <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
               BACKEND
            </div>
         </div>

         <div className="flex gap-4">
            {/* Server System Section */}
            <div className="flex-1">
               <div className="flex items-center gap-2 mb-3 font-bold text-green-600">
                  <Server size={20} />
                  <span>Server Side</span>
               </div>

               <div className="border-l-2 border-green-300 pl-3">
                  <div className="compact-item font-medium text-gray-800">
                     <SiNodedotjs className="text-green-600" size={16} />
                     <span>Backend Services</span>
                  </div>
                  <div className="ml-6 space-y-1">
                     <div className="compact-item text-gray-600">
                        <SiPrisma className="text-blue-600" size={14} />
                        <span>Prisma ORM</span>
                     </div>
                     <div className="compact-item text-gray-600">
                        <SiPostgresql className="text-blue-700" size={14} />
                        <span>PostgreSQL</span>
                     </div>
                     <div className="compact-item text-gray-600">
                        <SiMongodb className="text-green-600" size={14} />
                        <span>MongoDB</span>
                     </div>
                     <div className="compact-item text-gray-600">
                        <IoCloudOfflineSharp
                           className="text-gray-700"
                           size={14}
                        />
                        <span>Service Workers</span>
                     </div>
                     <div className="compact-item text-gray-600">
                        <DiHtml5Connectivity
                           className="text-purple-500 scale-170"
                           size={14}
                        />
                        <span>WebSockets</span>
                     </div>
                     <div className="compact-item text-gray-600">
                        <Globe className="text-indigo-500" size={14} />
                        <span>REST/GraphQL</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* External Services Section */}
            <div className="flex-1">
               <div className="flex items-center gap-2 mb-3 font-bold text-orange-600">
                  <Cloud size={20} />
                  <span>External Services</span>
               </div>

               <div className="border-l-2 border-yellow-300 pl-3">
                  <div className="ml-2 space-y-1">
                     <div className="compact-item text-gray-600">
                        <Database className="text-purple-500" size={14} />
                        <span>GenAI APIs</span>
                     </div>
                     <div className="compact-item text-gray-600">
                        <MdNotificationsActive
                           className="text-blue-500"
                           size={14}
                        />
                        <span>Notifications</span>
                     </div>
                     <div className="compact-item text-gray-600">
                        <FaDocker className="text-blue-600" size={14} />
                        <span>Docker</span>
                     </div>
                     <div className="compact-item text-gray-600">
                        <SiAmazonwebservices
                           className="text-orange-500"
                           size={14}
                        />
                        <span>AWS Hosting</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ServerSystem;
