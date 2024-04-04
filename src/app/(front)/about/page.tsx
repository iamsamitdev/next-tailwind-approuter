import AboutPage from './About'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'About page description',
  keywords: ['About', 'Next.JS', 'Tailwind CSS'],
}


export default function About() {
  return <AboutPage />
}