'use client'

import { Plus } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import Button from '@/components/ui/Button'
import ModalCreateNote from '@/containers/ModalCreateNote'

export default function EmptyNote() {
  const [open, setOpen] = useState(false)
  const t = useTranslations('noteList')

  return (
    <div className="flex items-center">
      <div className="p-2 font-medium italic">{t('text.createListHint')}</div>
      <Button className="w-fit" LeftIcon={Plus} onClick={() => setOpen(true)}>
        {t('action.createNote')}
      </Button>

      <ModalCreateNote open={open} onOpenChange={setOpen} />
    </div>
  )
}
