import { createRouter } from './context'
import { z } from 'zod'

export const exampleRouter = createRouter()
  .query('runFun', {
    resolve() {
      console.log('runFun is running')
      return { result: 'String return by runFun' }
    },
  })
  .query('hello', {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? 'world'}`,
      }
    },
  })
  .query('getAll', {
    async resolve({ ctx }) {
      return await ctx.prisma.example.findMany()
    },
  })
