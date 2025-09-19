import ClientSystem from "./components/ClientSystem";
import CoreModules from "./components/CoreModules";
import ServerSystem from "./components/ServerSystem";
import UserRoles from "./components/UserRoles";

function App() {
   return (
      <div className="min-h-screen bg-white ">
         <div className="max-w-4xl mx-auto">
            {/* Reduced from max-w-5xl to max-w-4xl */}
            {/* Main Architecture Section */}
            <div className="relative mb-8">
               <div className="border-2 border-gray-300 rounded-lg p-4">
                  <div className="border-2 border-blue-400 bg-blue-50 rounded-lg p-3 mb-4">
                     <h2 className="text-lg font-bold text-blue-800 text-center">
                        TECHNICAL APPROACH
                     </h2>
                  </div>

                  <div className="relative">
                     {/* Client and Server Systems */}
                     <div className="flex justify-center items-start gap-12 -mb-4">
                        <ClientSystem />
                        <ServerSystem />
                     </div>

                     {/* Core Modules and User Roles Section */}
                     <div className="space-y-4">
                        {/* User Roles Section */}
                        <div>
                           <UserRoles />
                        </div>

                        {/* Core Modules Section */}
                        <div>
                           <CoreModules />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
