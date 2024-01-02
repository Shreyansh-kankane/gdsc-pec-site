"use client"
import Sidebar from "@/components/Sidebar"
import { SidebarProvider } from "@/context/SidebarContext"
// import AdminMiddleware from "@/middlewares/AdminMiddleware"

export default function DashboardLayout({ children }) {

    return (
    <SidebarProvider>
        <div className="flex relative h-[88vh]">
            <Sidebar />
            <main className="flex-1 bg-sky-100 overflow-auto scrollbar-hide">
                {children}
            </main>
        </div>
    </SidebarProvider>          
    )       
}


