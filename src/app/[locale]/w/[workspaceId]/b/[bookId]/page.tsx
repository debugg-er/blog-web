export default async function BookPage({
  params: { workspaceId, bookId },
}: {
  params: { workspaceId: string; bookId: string }
}) {
  return (
    <div className="oke">
      {workspaceId}, {bookId}
    </div>
  )
}
