import { Timer } from "lucide-react"

import { RegisterHoursDrawer } from "./components/register-hours-drawer"

export function App() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <Timer className="size-16 text-foreground" />
        <h1 className="w-[250px] text-center text-xl font-medium text-foreground">
          Está em dúvidas sobre seu tempo de trabalho?{" "}
          <span className="font-bold text-primary">Calcule agora.</span>
        </h1>
      </div>

      <RegisterHoursDrawer />
    </main>
  )
}
