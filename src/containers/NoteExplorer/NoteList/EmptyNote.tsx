'use client'
import { Plus } from 'lucide-react'
import { useTranslations } from 'next-intl'

import Button from '@/components/ui/Button'
import { useCreateNoteModal } from '@/contexts/CreateNoteModalContext'

export default function EmptyNote() {
  const [opened, { open }] = useCreateNoteModal()
  const t = useTranslations('noteList')

  console.log(opened)

  return (
    <div className="flex items-center">
      <div className="p-2 font-medium italic">{t('text.createListHint')}</div>
      <Button className="w-fit" LeftIcon={Plus} onClick={open}>
        {t('action.createNote')}
      </Button>
    </div>
  )
}
