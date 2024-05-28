import dynamic from 'next/dynamic'
import { forwardRef, Suspense } from 'react'
import { MDXEditorMethods, MDXEditorProps } from '@mdxeditor/editor'

import { Font } from '@/configs/font'
import { Note } from '@/types/note'
import { cn } from '@/utils/className'

const Editor = dynamic(() => import('./Editor'), { ssr: false })

const ForwardRefEditor = forwardRef<MDXEditorMethods, MDXEditorProps>((props, ref) => (
  <Suspense fallback={<div>loading</div>}>
    <Editor {...props} editorRef={ref} />
  </Suspense>
))
ForwardRefEditor.displayName = 'ForwardRefEditor'

export default async function Temp({ notePromise }: { notePromise: Promise<Note> }) {
  const note = await notePromise
  return <ForwardRefEditor className={cn(Font.className, 'flex-1 overflow-auto')} markdown={note.content} />
}
