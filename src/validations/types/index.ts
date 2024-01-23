import { z } from "zod"

import { formSchema } from ".."

export type FormData = z.infer<typeof formSchema>
