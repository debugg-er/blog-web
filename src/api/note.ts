import { rest } from './rest'

export const getNotesByBookId = (bookId: string): Promise<any> => rest(`/books/${bookId}/notes`)
export const getNote = (noteId: string) => rest(`/notes/${noteId}`)
