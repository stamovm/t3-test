// src/server/router/index.ts
import { t } from '../trpc'

import { mytrpcRouter } from './mytrpc'

export const appRouter = t.router({
  mytrpc: mytrpcRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
