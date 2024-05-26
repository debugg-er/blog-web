'use client'

import dynamic from 'next/dynamic'
import { forwardRef } from 'react'
import { MDXEditorMethods, MDXEditorProps } from '@mdxeditor/editor'

import TaskProgress from '@/components/elements/TaskProgress'
import { Note } from '@/types/note'

const Editor = dynamic(() => import('./Editor'), { ssr: false })

const ForwardRefEditor = forwardRef<MDXEditorMethods, MDXEditorProps>((props, ref) => (
  <Editor {...props} editorRef={ref} />
))
ForwardRefEditor.displayName = 'ForwardRefEditor'

export default function NoteEditor({ note }: { note: Note }) {
  return (
    <div className="flex h-full flex-col">
      <h3 className="p-2">{note.title}</h3>
      <TaskProgress className="p-2 pt-0" classNames={{ progress: 'w-[100px]' }} totalTasks={5} doneTasks={3} />
      <ForwardRefEditor className="flex-1 overflow-auto" markdown={note.content} />
    </div>
  )
}
