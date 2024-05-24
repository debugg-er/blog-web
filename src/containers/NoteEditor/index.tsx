'use client'

import dynamic from 'next/dynamic'
import { forwardRef } from 'react'
import { MDXEditorMethods, MDXEditorProps } from '@mdxeditor/editor'

import { Note } from '@/types/note'

const Editor = dynamic(() => import('./Editor'), { ssr: false })

const ForwardRefEditor = forwardRef<MDXEditorMethods, MDXEditorProps>((props, ref) => (
  <Editor {...props} editorRef={ref} />
))
ForwardRefEditor.displayName = 'ForwardRefEditor'

export default function NoteEditor({ note }: { note: Note }) {
  return (
    <div className="flex h-full flex-col">
      <h3 className="h-14 p-2">{note.title}</h3>
      <ForwardRefEditor className='flex-1 overflow-auto' markdown={note.content} />
    </div>
  )
}
