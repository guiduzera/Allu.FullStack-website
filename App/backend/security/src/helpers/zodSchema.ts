// melhorar quando for fazer o middleware validação
import { z } from 'zod';

const registerZodSchema = z.object({
  name: z.string().min(3, { message: 'nome deve conter pelo menos 3 caracteres' }).max(20),
  password: z.string()
    .min(8, { message: 'A senha deve conter pelo menos 8 caracteres' })
    .max(20).regex(/[A-Z]/, { message: 'A senha deve conter pelo menos uma letra maiúscula' })
    .regex(/[a-z]/, { message: 'A senha deve conter pelo menos uma letra minúscula' })
    .regex(/[0-9]/, { message: 'A senha deve conter pelo menos um número' }),
  email: z.string().email({ message: 'Email inválido' }),
}).required();

export default registerZodSchema;