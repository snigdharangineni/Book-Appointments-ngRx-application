import { Book } from "../models/book";
import { createAction, props } from "@ngrx/store";

export const AddBook = createAction('[Book] Add Book', props<Book>());
export const AddBookSuccess = createAction('[Book] Added Book Successfully', props<Book>());
export const AddBookFailure = createAction('[Book] Add Book Failure', props<{error: any}>())
export const RemoveBook = createAction('[Book] Remove Book', props<{bookId: string}>());