export class Book {

  id: number;
  authorName: string;
  comments: string;
  length: string;
  genre: string;
  format: string;
  rating: number;
  imageUrl: string;
  recommended: boolean;
  timeToRead: string;

  constructor(id: number = 0,  authorName: string = '', comments: string = '',
    length: string = '', genre: string = '', format: string = '', rating: number = 0,
    imageUrl: string = '', recommended: boolean = false, timeToRead: string = '') {

      this.id = id;
      this.authorName = authorName;
      this.comments = comments;
      this.length = length;
      this.genre = genre;
      this.format = format;
      this.rating = rating;
      this.imageUrl = imageUrl;
      this.recommended = recommended;
      this.timeToRead = timeToRead;
  };

}
