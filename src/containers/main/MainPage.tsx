import { rest } from '@/app/rest'

import Posts from './components/Posts'

export default async function MainPage() {
  return <Posts posts={[]} />
}
