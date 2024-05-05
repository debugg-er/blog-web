import Post from './Post'

type PostsProps = {
  posts: any[]
}
export default function Posts({ posts }: PostsProps) {
  return (
    <div className='w-2/3'>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
