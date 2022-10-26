// src/server/router/_app.ts
import { router } from "../trpc";

import { mytrpcRouter } from "./mytrpc";

export const appRouter = router({
  mytrpc: mytrpcRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
