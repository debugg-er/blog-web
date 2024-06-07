import Button from '@/components/ui/Button'
import Dialog, {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog'
import Input from '@/components/ui/Input'

export type CreateBookModalProps = {
  open: boolean
  onOpenChange?: (open: boolean) => void
  parentBookId?: number
}

export default function CreateBookModal({ open, onOpenChange }: CreateBookModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Book</DialogTitle>
          <DialogDescription>
            Simply fill in the title and content fields, optionally add tags for easy organization, and click save.
          </DialogDescription>
        </DialogHeader>

        <Input placeholder="Your book name" />
        <DialogFooter>
          <Button className="w-fit self-end">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
