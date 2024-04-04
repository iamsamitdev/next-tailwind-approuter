import ContactPage from './Contact'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact page description',
  keywords: ['Contact', 'Next.JS', 'Tailwind CSS'],
}


export default function page() {
  return <ContactPage />
}