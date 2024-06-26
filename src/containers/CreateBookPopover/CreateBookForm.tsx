'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'

import Button from '@/components/ui/Button'
import Form, { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import { useBookTree } from '@/contexts/BookTreeContext'
import { Book } from '@/types/book'

function CreateBookForm({ onCreated }: { onCreated?: (book: Book) => void }) {
  const { createBook } = useBookTree()
  const createBookMutation = useMutation({
    mutationFn: createBook,
  })

  const createBookPayloadSchema = z.object({
    title: z.string().min(1),
  })
  const form = useForm<z.infer<typeof createBookPayloadSchema>>({ resolver: zodResolver(createBookPayloadSchema) })

  const handleCreateBook = async (values: z.infer<typeof createBookPayloadSchema>) => {
    const book = await createBook(values)
    onCreated?.(book)
  }

  return (
    <Form {...form}>
      <form className="flex gap-2" onSubmit={form.handleSubmit(handleCreateBook)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input size="sm" placeholder="Book name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="sm" loading={createBookMutation.isPending}>
          Create
        </Button>
      </form>
    </Form>
  )
}

export default CreateBookForm
