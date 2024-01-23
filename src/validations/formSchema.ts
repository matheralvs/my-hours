import { z } from "zod"

export const formSchema = z.object({
  entry: z
    .string()
    .min(1, { message: "O campo de entrada deve ser preenchido." }),
  exit: z.string().min(1, { message: "O campo de saída deve ser preenchido." }),
  interval: z
    .string()
    .min(1, { message: "O campo de intervalo deve ser preenchido." })
    .optional(),
})
