import { z } from "zod"

export const formSchema = z
  .object({
    entry: z.string().min(1, { message: "O campo de entrada é obrigatório." }),
    exit: z.string().min(1, { message: "O campo de saída é obrigatório." }),
    interval: z.string().optional(),
  })
  .superRefine(({ entry, exit }, ctx) => {
    if (exit < entry) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "O campo de saída deve ser maior que o campo de entrada.",
        path: ["exit"],
      })
    }

    if (entry === exit) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "O campo de entrada deve ser diferente do campo de saída.",
        path: ["exit"],
      })
    }
  })
