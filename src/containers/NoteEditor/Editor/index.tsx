'use client'

import type { ForwardedRef } from 'react'
import {
  codeBlockPlugin,
  codeMirrorPlugin,
  frontmatterPlugin,
  headingsPlugin,
  imagePlugin,
  KitchenSinkToolbar,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorMethods,
  type MDXEditorProps,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
} from '@mdxeditor/editor'

import style from './style.module.css'

export default function Editor({
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
  return (
    <MDXEditor
      plugins={[
        // Example Plugin Usage
        linkPlugin(),
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        codeBlockPlugin({
          defaultCodeBlockLanguage: 'js',
        }),
        codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS' } }),
        linkDialogPlugin(),
        imagePlugin({
          imageAutocompleteSuggestions: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        }),
        tablePlugin(),
        frontmatterPlugin(),
        toolbarPlugin({
          toolbarContents: () => <KitchenSinkToolbar />,
        }),
      ]}
      contentEditableClassName={style.editor}
      onChange={(markdown) => console.log(markdown.match(/\[(x|\s)\]/g))}
      {...props}
      ref={editorRef}
    />
  )
}
