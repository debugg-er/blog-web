import { Plus } from 'lucide-react'

import Button from '@/components/ui/Button'

export default function CreateNoteButton() {
  return (
    <Button className="w-fit" LeftIcon={Plus}>
      Create Note
    </Button>
  )
}
