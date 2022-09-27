import type { NextPage } from 'next'
import Head from 'next/head'
import { trpc } from '../utils/trpc'
import { atom, useAtom } from 'jotai'

const textAtom = atom('text in the atom')

const Home: NextPage = () => {
  const echo = trpc.mytrpc.echo.useQuery({ text: 'Hi there' })
  const myAction = trpc.mytrpc.myTest.useMutation({
    onSuccess: (input) => {
      setText('Enter: ' + input)
    },
  })
  const [text, setText] = useAtom(textAtom)

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container flex flex-col items-center justify-center min-h-screen p-4 mx-auto">
        <button
          className="btn"
          onClick={(e) => {
            //todo: add run
          }}
        >
          Run
        </button>
        <div className="py-6 text-2xl text-indigo-500 flex justify-center items-center w-full">
          {echo.data ? <p>{echo.data.echoReturn}</p> : <p>Loading..</p>}
        </div>
        <section className="flex flex-col justify-center p-6 duration-500 border border-indigo-500 rounded shadow-lg">
          <input
            className="w-full p-4 pr-12 text-sm border border-indigo-200 rounded shadow-sm"
            placeholder="Enter text"
            onChange={(e) => {
              setText(e.currentTarget.value)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                myAction.mutate({ text: e.currentTarget.value })
              }
            }}
          />
          <div className="pb-4" />

          <button
            className="btn"
            onClick={(e) => {
              //todo: add test
            }}
          >
            Test
          </button>
        </section>
        <div className="py-6 text-2xl text-indigo-500 flex justify-center items-center w-full">
          {text}
        </div>

        <p className="text-2xl text-gray-700 pt-60">
          --------------------------------------------------------------------
        </p>
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3">
          <TechnologyCard
            name="NextJS"
            description="The React framework for production"
            documentation="https://nextjs.org/"
          />
          <TechnologyCard
            name="TypeScript"
            description="Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
            documentation="https://www.typescriptlang.org/"
          />
          <TechnologyCard
            name="TailwindCSS"
            description="Rapidly build modern websites without ever leaving your HTML"
            documentation="https://tailwindcss.com/"
          />
          <TechnologyCard
            name="tRPC"
            description="End-to-end typesafe APIs made easy"
            documentation="https://trpc.io/"
          />
          <TechnologyCard
            name="Next-Auth"
            description="Authentication for Next.js"
            documentation="https://next-auth.js.org/"
          />
          <TechnologyCard
            name="Prisma"
            description="Build data-driven JavaScript & TypeScript apps in less time"
            documentation="https://www.prisma.io/docs/"
          />
        </div>
      </main>
    </>
  )
}

export default Home

type TechnologyCardProps = {
  name: string
  description: string
  documentation: string
}

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <a
        className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a>
    </section>
  )
}
