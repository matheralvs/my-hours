import { useState } from "react"

import { useFormContext } from "react-hook-form"

import { FormData } from "@/validations/types"

import { Checkbox } from "@/components/ui/checkbox"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { useRegisterHours } from "@/contexts/register-hours-context"

import { timeToMs } from "@/utils"

interface RegisterHoursFormProps {
  handleShowDrawer: () => void
}

export function RegisterHoursForm({
  handleShowDrawer,
}: RegisterHoursFormProps) {
  const [hasInterval, setHasInterval] = useState(false)
  const { setRegisterHours } = useRegisterHours()

  const form = useFormContext<FormData>()

  function onSubmit(data: FormData) {
    const { entry, exit, interval } = data

    const entryParsedToMs = timeToMs(entry)
    const exitParsedToMs = timeToMs(exit)
    const intervalParsedToMs = interval ? timeToMs(interval) : 0

    let amount = exitParsedToMs - entryParsedToMs

    if (interval) {
      amount = amount - intervalParsedToMs
    }

    setRegisterHours(amount)

    form.reset()
    handleShowDrawer()
  }

  return (
    <form
      id="register-hours-form"
      className="mt-2 flex flex-col gap-y-4 px-4"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FormField
        control={form.control}
        name="entry"
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel htmlFor="entry">Entrada</FormLabel>
              <FormControl>
                <Input {...field} id="entry" type="time" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )
        }}
      />

      <FormField
        control={form.control}
        name="exit"
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel htmlFor="exit">Saída</FormLabel>
              <FormControl>
                <Input {...field} id="exit" type="time" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )
        }}
      />

      {hasInterval && (
        <FormField
          control={form.control}
          name="interval"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel htmlFor="interval">Intervalo</FormLabel>
                <FormControl>
                  <Input {...field} id="interval" type="time" />
                </FormControl>

                <FormDescription className="text-xs">
                  Ex.: Intervalo de almoço, pausas e etc.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )
          }}
        />
      )}

      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={hasInterval}
          onCheckedChange={() => setHasInterval((prevState) => !prevState)}
        />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Incluir intervalo
        </label>
      </div>
    </form>
  )
}
