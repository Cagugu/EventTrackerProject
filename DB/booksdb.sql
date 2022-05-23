-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema booksdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `booksdb` ;

-- -----------------------------------------------------
-- Schema booksdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `booksdb` DEFAULT CHARACTER SET utf8 ;
USE `booksdb` ;

-- -----------------------------------------------------
-- Table `book`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `book` ;

CREATE TABLE IF NOT EXISTS `book` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `author_name` VARCHAR(50) NOT NULL,
  `comments` VARCHAR(1000) NULL,
  `length` VARCHAR(50) NULL,
  `genre` VARCHAR(100) NULL,
  `format` VARCHAR(50) NULL,
  `rating` DECIMAL NOT NULL,
  `imageURL` VARCHAR(1000) NULL,
  `recommended` TINYINT NOT NULL,
  `time_to_read` VARCHAR(50) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS reader@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'reader'@'localhost' IDENTIFIED BY 'reader';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'reader'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `book`
-- -----------------------------------------------------
START TRANSACTION;
USE `booksdb`;
INSERT INTO `book` (`id`, `title`, `author_name`, `comments`, `length`, `genre`, `format`, `rating`, `imageURL`, `recommended`, `time_to_read`) VALUES (1, 'Twilight', 'Stephanie Meyer', 'It is the first book in the Twilight series, and introduces seventeen-year-old Isabella \"Bella\" Swan, who moves from Phoenix, Arizona to Forks, Washington. She is endangered after falling in love with Edward Cullen, a 103-year-old vampire frozen in his 17-year-old body.', '496 pages', 'Teen Romance', 'Paper Back', 4, 'https://upload.wikimedia.org/wikipedia/en/1/1d/Twilightbook.jpg', 1, NULL);
INSERT INTO `book` (`id`, `title`, `author_name`, `comments`, `length`, `genre`, `format`, `rating`, `imageURL`, `recommended`, `time_to_read`) VALUES (2, 'New Moon', 'Stephanie Meyer', 'he novel continues the story of Bella Swan and vampire Edward Cullen\'s relationship. When Edward leaves Bella after his brother attacks her, she is left heartbroken and depressed for months until Jacob Black becomes her best friend and helps her fight her pain. However, her life twists once more when Jacob\'s nature reveals itself and Edward\'s sister decides to visit.', '563 pages', 'Teen Romance', 'Paper Back', 4.2, 'http://prodimage.images-bn.com/pimages/9780316024969_p0_v1_s1200x630.jpg', 1, NULL);
INSERT INTO `book` (`id`, `title`, `author_name`, `comments`, `length`, `genre`, `format`, `rating`, `imageURL`, `recommended`, `time_to_read`) VALUES (3, 'The Casonova', 'TL Swan', 'n T L Swan’s steamy third installment of the Miles High Club, Kate’s hot new pen pal is a welcome distraction from her horrible boss. But nobody is as distracting as Elliot Miles…and he knows it.', '565 pages', 'Adult Fiction', 'Kindle', 4.7, 'https://m.media-amazon.com/images/I/41CxsiUYsyS.jpg', 1, NULL);
INSERT INTO `book` (`id`, `title`, `author_name`, `comments`, `length`, `genre`, `format`, `rating`, `imageURL`, `recommended`, `time_to_read`) VALUES (4, 'The Stopover', 'TL Swan', 'A memorable night of passion refuses to stay just a memory in this sizzling and scandalous romance from bestselling author T L Swan.', '437 pages', 'Fiction', 'Kindle', 4.9, 'https://m.media-amazon.com/images/I/41iFJhi2ExL.jpg', 1, NULL);
INSERT INTO `book` (`id`, `title`, `author_name`, `comments`, `length`, `genre`, `format`, `rating`, `imageURL`, `recommended`, `time_to_read`) VALUES (5, 'The Takeover', 'TL Swan', 'In bestselling author T L Swan’s second hot installment to the Miles High Club series, he’s sexy, rich, and her mortal enemy. Hate never felt so good.', '452 pages', 'Fiction', 'Kindle', 3.5, 'https://m.media-amazon.com/images/I/41rD28D01yL.jpg', 0, NULL);
INSERT INTO `book` (`id`, `title`, `author_name`, `comments`, `length`, `genre`, `format`, `rating`, `imageURL`, `recommended`, `time_to_read`) VALUES (6, 'Ruthless Saint', 'Michelle Heard', 'I move in the shadow of death. I’m the villain. The monster everyone fears.\nI’ve been born into a life of depravity and ruthlessness. It’s kill or be killed.', '373 pages', 'Fiction', 'Kindle', 4.3, 'https://m.media-amazon.com/images/I/41qFMhR6SGL.SX316.SY480._SL500_.jpg', 1, NULL);
INSERT INTO `book` (`id`, `title`, `author_name`, `comments`, `length`, `genre`, `format`, `rating`, `imageURL`, `recommended`, `time_to_read`) VALUES (7, 'Merciless Saints', 'Michelle Heard', 'Alliances are made. Loyalty is owned. Love is taken.', '346 pages', 'Fiction', 'Kindle', 4.5, 'https://images-na.ssl-images-amazon.com/images/I/61g0QWicmCS.jpg', 1, NULL);
INSERT INTO `book` (`id`, `title`, `author_name`, `comments`, `length`, `genre`, `format`, `rating`, `imageURL`, `recommended`, `time_to_read`) VALUES (8, 'Cruel Saints', 'Michelle Heard', 'An Arranged Marriage Mafia Romance. ', '368 pages', 'Fiction', 'Kindle', 4.8, 'https://images-na.ssl-images-amazon.com/images/I/41b7z6WORqS._SX342_SY445_QL70_ML2_.jpg', 1, NULL);
INSERT INTO `book` (`id`, `title`, `author_name`, `comments`, `length`, `genre`, `format`, `rating`, `imageURL`, `recommended`, `time_to_read`) VALUES (9, 'A Court Of Thorns And Roses', 'Sarah J Maas', 'When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution.', '448 pages', 'Fiction', 'Kindle', 3.0, 'https://images-na.ssl-images-amazon.com/images/I/81DNT0Q22yL.jpg', 0, NULL);
INSERT INTO `book` (`id`, `title`, `author_name`, `comments`, `length`, `genre`, `format`, `rating`, `imageURL`, `recommended`, `time_to_read`) VALUES (10, 'We Are All The Same In The Dark', 'Julia Heaberin', 'he discovery of a girl abandoned by the side of the road threatens to unearth the long-buried secrets of a Texas town’s legendary cold case', '353 pages', 'Fiction', 'Kindle', 4.1, 'https://images-na.ssl-images-amazon.com/images/I/91Lgb-WLzAL.jpg', 1, NULL);

COMMIT;

