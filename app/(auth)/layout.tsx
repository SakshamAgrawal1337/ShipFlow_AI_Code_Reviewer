import { ThemeProvider } from "@/components/providers/theme-provider";
import { requirUnauth } from "@/features/auth/actions";

export default async function AuthLayout({
    children}:{ children: React.ReactNode; 
}){
    await requirUnauth();
    return(
       
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <div className="flex  min-h-full flex-1 flex-col items-center justify-center bg-muted/40 px-4 py-12">
            <div className="w-full max-w-sm">{children}</div>
        </div>
        </ThemeProvider>
    )

}