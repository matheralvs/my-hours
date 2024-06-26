import { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { Plus } from "lucide-react"
import { useForm } from "react-hook-form"

import { formSchema } from "@/validations"
import { FormData } from "@/validations/types"

import { RegisterHoursForm } from "@/components/register-hours-form"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Form } from "@/components/ui/form"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function RegisterHoursDrawer() {
  const [open, setOpen] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      entry: "",
      exit: "",
      interval: "",
    },
  })

  function handleShowDrawer() {
    setOpen((prevState) => !prevState)
    form.reset()
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <DrawerTrigger asChild>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="absolute bottom-6 right-6 size-12 rounded-full shadow-xl"
                onClick={handleShowDrawer}
              >
                <Plus className="size-5" />
              </Button>
            </TooltipTrigger>
          </DrawerTrigger>
          <TooltipContent side="left" className="text-xs">
            Adicionar horas
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="font-bold">Adicionar horas</DrawerTitle>
          <DrawerDescription>
            Adicione as horas que foram trabalhadas.
          </DrawerDescription>
        </DrawerHeader>
        <Form {...form}>
          <RegisterHoursForm handleShowDrawer={handleShowDrawer} />
        </Form>
        <DrawerFooter className="sm:justify-start">
          <Button type="submit" form="register-hours-form">
            Calcular
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
