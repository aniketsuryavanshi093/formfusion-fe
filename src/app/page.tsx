import ButtonComp from '@/Components/Button'
import Link from '../../node_modules/next/link'

export default async function Home() {

  // const data = await fetch("https://jsonplaceholder.typicode.com/posts")
  // let response = await data.json()

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Link href="/user">
          <ButtonComp text="Click here for User" />
        </Link>
        <Link href="/admin">
          <ButtonComp text="Click here for Admin" />
        </Link>
      </div>

    </main>
  )
}
