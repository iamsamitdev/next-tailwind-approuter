import HomePage from "./Home"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page description',
  keywords: ['Home', 'Next.JS', 'Tailwind CSS'],
}

// tsrfc
export default function Home() {
  return <HomePage />
}