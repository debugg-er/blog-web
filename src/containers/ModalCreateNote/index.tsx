import Button from '@/components/ui/Button'
import Dialog, {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog'
import Input from '@/components/ui/Input'

export type ModalCreateNoteProps = {
  open: boolean
  onOpenChange?: (open: boolean) => void
}

export default function ModalCreateNote({ open, onOpenChange }: ModalCreateNoteProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Note</DialogTitle>
          <DialogDescription>
            Simply fill in the title and content fields, optionally add tags for easy organization, and click save.
          </DialogDescription>
        </DialogHeader>

        <Input placeholder="Your note name" />
        <DialogFooter>
          <Button className="w-fit self-end">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
