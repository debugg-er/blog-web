import { Avatar, Title } from '@mantine/core'

type PostProps = {
  post: any
}
export default function Post({ post }: PostProps) {
  return (
    <div className="flex gap-2">
      <Avatar>{post.author.fullName.charAt(0)}</Avatar>
      <div>
        <Title order={4}>{post.title} - {post.createdAt}</Title>
        <p className='line-clamp-2 text-gray-700'>{post.content}</p>
      </div>
    </div>
  )
}
