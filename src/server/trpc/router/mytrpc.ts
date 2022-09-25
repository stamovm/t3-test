import { t } from '../trpc'
import { z } from 'zod'

export const mytrpcRouter = t.router({
  echo: t.procedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        echoReturn: `Echo :  ${input?.text ?? '!!!'}`,
      }
    }),
  getAll: t.procedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany()
  }),
})
