import { Globe, Monitor, Shield, Zap } from "lucide-react";
import { SiReact, SiTailwindcss } from "react-icons/si";

const ClientSystem = () => {
   return (
      <div className="diagram-box client-box w-72">
         {/* Main Frontend Label */}
         <div className="text-center mb-3">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
               FRONTEND
            </div>
         </div>

         <div className="flex items-center gap-2 mb-3 font-bold text-blue-600">
            <Monitor size={20} />
            <span>Client Side</span>
         </div>

         <div className="space-y-2">
            <div className="border-l-2 border-blue-300 pl-3">
               <div className="compact-item font-medium text-gray-800">
                  <Globe size={16} />
                  <span>Web Browser</span>
               </div>
               <div className="ml-6 space-y-1">
                  <div className="compact-item text-gray-600">
                     <SiReact className="text-cyan-500" size={14} />
                     <span>React + JavaScript</span>
                  </div>
                  <div className="compact-item text-gray-600">
                     <SiTailwindcss className="text-teal-500" size={14} />
                     <span>TailwindCSS UI</span>
                  </div>
                  <div className="compact-item text-gray-600">
                     <Zap className="text-yellow-500" size={14} />
                     <span>Service Workers</span>
                  </div>
               </div>
            </div>

            <div className="border-l-2 border-green-300 pl-3">
               <div className="compact-item font-medium text-gray-800">
                  <Shield className="text-green-500" size={16} />
                  <span>Authentication (JWT/Auth0)</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ClientSystem;
