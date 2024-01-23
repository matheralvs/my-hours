import { useState } from "react"

import { useFormContext } from "react-hook-form"

import { FormData } from "@/validations/types"

import { Checkbox } from "@/components/ui/checkbox"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export function RegisterHoursForm() {
  const [hasInterval, setHasInterval] = useState(false)

  const form = useFormContext<FormData>()

  function onSubmit(data: FormData) {
    try {
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
      id="form"
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
                <Input id="entry" type="time" {...field} />
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
                <Input id="exit" type="time" {...field} />
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
                <FormLabel htmlFor="interval">Saída</FormLabel>
                <FormControl>
                  <Input id="interval" type="time" {...field} />
                </FormControl>
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
