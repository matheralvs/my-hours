import { Check, Clipboard, Timer } from "lucide-react"

import { RegisterHoursDrawer } from "./components/register-hours-drawer"
import { Button } from "./components/ui/button"
import { useRegisterHours } from "./contexts"

import { useCopyToClipboard } from "./hooks/useCopyToClipboard"
import { msToTime } from "./utils"

export function App() {
  const [copiedText, copy] = useCopyToClipboard()

  const { registerHours } = useRegisterHours()

  const registerHoursParsedToTime = msToTime(registerHours)

  async function handleCopy(text: string) {
    try {
      await copy(text)

      setTimeout(async () => {
        await copy("")
      }, 3000)
    } catch (error) {
      console.error("Failed to copy!", error)
    }
  }

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <Timer className="size-16 text-foreground" />
        {!registerHours && (
          <h1 className="w-[250px] text-center text-xl font-medium text-foreground">
            Está em dúvidas sobre seu tempo de trabalho?{" "}
            <span className="font-bold text-primary">Calcule agora.</span>
          </h1>
        )}
        {registerHours > 0 && (
          <h1 className="w-[250px] text-center text-xl gap-3 flex flex-col items-center font-medium text-foreground">
            O total de tempo trabalhado foi:
            <div className="flex items-center gap-3 bg-muted/40 px-4 py-2 rounded-lg border">
              <span className="font-bold text-primary">
                {registerHoursParsedToTime}
              </span>
              <Button
                size="icon"
                variant="outline"
                className="size-8"
                title={copiedText ? "Copiado!" : "Copiar"}
                onClick={() => handleCopy(registerHoursParsedToTime)}
              >
                {!copiedText && <Clipboard className="size-4" />}
                {copiedText && <Check className="size-4" />}
              </Button>
            </div>
          </h1>
        )}
      </div>

      <RegisterHoursDrawer />
    </main>
  )
}
