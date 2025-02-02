import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "El email es obligatorio" }),
  password: z
    .string()
    .min(8, {
      message:
        "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número",
    })
    .refine(
      (val) => /[A-Z]/.test(val),
      "La contraseña debe tener al menos una letra mayúscula"
    )
    .refine(
      (val) => /[a-z]/.test(val),
      "La contraseña debe tener al menos una letra minúscula"
    )
    .refine(
      (val) => /[0-9]/.test(val),
      "La contraseña debe tener al menos un número"
    ),
})

export type loginShemaType = z.infer<typeof loginSchema>;