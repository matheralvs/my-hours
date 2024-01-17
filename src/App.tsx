import { Timer } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function App() {
  return (
    <main className="h-screen">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          defaultSize={20}
          minSize={0}
          maxSize={20}
          className="p-4"
        >
          Logo
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel className="p-4">Conteúdo principal</ResizablePanel>
      </ResizablePanelGroup>

      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="absolute bottom-6 right-6 rounded-full shadow-lg"
            >
              <Timer className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            Adicionar horas
            <TooltipArrow className="fill-background stroke-gray-400" />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </main>
  )
}

export default App
