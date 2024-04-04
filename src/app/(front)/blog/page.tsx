import BlogPage from './Blog'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog page description',
  keywords: ['Blog', 'Next.JS', 'Tailwind CSS'],
}


export default function Blog() {
  return <BlogPage />
}