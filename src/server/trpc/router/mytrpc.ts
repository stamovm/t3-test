// import { t } from '../trpc'
import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const mytrpcRouter = router({
  echo: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        echoReturn: `Echo :  ${input?.text ?? "!!!"}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  myTest: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(({ input }) => {
      console.log("backend trpc: ", input?.text, "!!!");
      return `My Test Action  ${input?.text} !!!`;
    }),
});
