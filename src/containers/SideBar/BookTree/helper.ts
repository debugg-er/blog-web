import { Book } from '@/types/book'

export const containChild = (book: Book, bookId: number): boolean =>
  book.books?.some((child) => child.id === bookId || containChild(child, bookId)) ?? false
