'use client'

import { Plus } from 'lucide-react'
import { useState } from 'react'

import { buttonVariants } from '@/components/ui/Button'
import { cn } from '@/utils/className'

import { CreateBookPopover } from '../CreateBookPopover'

export function CreateBookButton() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <CreateBookPopover
        classNames={{ trigger: 'w-full' }}
        open={open}
        onOpenChange={setOpen}
        onCreated={() => setOpen(false)}
      >
        <div className={cn('w-full', buttonVariants({ variant: 'ghost', size: 'sm' }))}>
          <Plus size={16} />
          Create book
        </div>
      </CreateBookPopover>
    </>
  )
}
