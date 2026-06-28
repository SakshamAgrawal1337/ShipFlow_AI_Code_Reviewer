import { ThemeProvider } from "@/components/providers/theme-provider";
import {requireAuth} from "@/features/auth/actions";
import React from "react";

export default async function ProtectedLayout({
    children}:{ children: React.ReactNode;
}){
    await requireAuth();
    return(
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <div className="flex min-h-full flex-1 flex-col">
            {/* min-h-svh */}
            {children}
        </div>
        </ThemeProvider>
    )
}