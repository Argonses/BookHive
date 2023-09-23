import { Genre } from "./Genre";

export class Book {
    id?: number;
    imageUrl?: string;
    title?: string;
    author?: string;
    description?: string;
    genre?: Genre;
    price?: number;
}