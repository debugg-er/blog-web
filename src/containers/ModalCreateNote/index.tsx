'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useCreateNoteModal } from '@/contexts/CreateNoteModalContext'

export default function ModalCreateNote() {
  const [opened, { close }] = useCreateNoteModal()

  return (
    <Dialog open={opened}>
      <DialogContent>
        <div onClick={close}>OHOHOHOH</div>H
      </DialogContent>
    </Dialog>
  )
}
