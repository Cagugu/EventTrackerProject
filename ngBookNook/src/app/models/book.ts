export class Book {

  id: number;
  title: string;
  authorName: string;
  comments: string;
  length: string;
  genre: string;
  format: string;
  rating: number;
  imageURL: string;
  recommended: boolean;
  timeToRead: string;

  constructor(id: number = 0, title: string = "", authorName: string = '', comments: string = '',
    length: string = '', genre: string = '', format: string = '', rating: number = 0,
    imageURL: string = '', recommended: boolean = false, timeToRead: string = '') {

      this.id = id;
      this.title = title;
      this.authorName = authorName;
      this.comments = comments;
      this.length = length;
      this.genre = genre;
      this.format = format;
      this.rating = rating;
      this.imageURL = imageURL;
      this.recommended = recommended;
      this.timeToRead = timeToRead;
  };

}
