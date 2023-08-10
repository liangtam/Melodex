/** CREATE TABLES **/
DROP DATABASE MusicManagement; -- RUN THIS IF YOU ALREADY HAVE THE DATABASE. IF NOT, IGNORE
CREATE DATABASE MusicManagement;
USE MusicManagement;

-- INSERT INTO hibernate_sequences (sequence_name, next_val) VALUES ('discography_main_sequence', 1);
/*CREATE TABLE Account( -- this is the User Entity. We cannot name it User. DELETE OR NO?
	userID INTEGER PRIMARY KEY,
	username VARCHAR(30) NOT NULL,
	email VARCHAR(320) NOT NULL, -- apparently the longest email someone can create is 320 characters long
	age INTEGER,
	password VARCHAR(50) NOT NULL)*/

CREATE TABLE RecordLabel(
	labelID INTEGER PRIMARY KEY AUTO_INCREMENT,
	websiteURL VARCHAR(200) UNIQUE,
	labelName VARCHAR(50) NOT NULL);
    
CREATE TABLE Artist_ContractedWith( 
	artistID INTEGER PRIMARY KEY AUTO_INCREMENT,
    artistName VARCHAR(30) NOT NULL,
	-- email VARCHAR(320) UNIQUE NOT NULL, -- apparently the longest email someone can create is 320 characters long
	age INTEGER,
	-- userPassword VARCHAR(50) NOT NULL, -- cannot use “password” in SQL
	country  VARCHAR(56), -- apparently the longest country name is 56 characters
	biography VARCHAR(200),
	numOfMembers INTEGER NOT NULL,
	labelID INTEGER NULL,
	FOREIGN KEY (labelID) REFERENCES RecordLabel(labelID)
    ON DELETE SET NULL
    ON UPDATE CASCADE);

CREATE TABLE MusicListener( -- this is the Listener Entity. We cannot name it Listener
	listenerID INTEGER PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
	-- email VARCHAR(320) UNIQUE NOT NULL, -- apparently the longest email someone can create is 320 characters long
	age INTEGER,
	-- userPassword VARCHAR(50) NOT NULL,
	favArtist VARCHAR(50),
	favSong VARCHAR(50),
	favGenre VARCHAR(50));

/*CREATE TABLE Discography( -- NEEDS NORMALIZATION
	dID INTEGER PRIMARY KEY,
	discoName VARCHAR(50) NOT NULL,
	genre VARCHAR(50),
	releaseDate SMALLDATETIME NOT NULL,
	numOfLikes INTEGER NOT NULL,
	ranking INTEGER)*/

	-- NORMALIZED DISCOGRAPHY
CREATE TABLE Discography_Main(
    dID INTEGER PRIMARY KEY AUTO_INCREMENT,
    discoName VARCHAR(50) NOT NULL,
    genre VARCHAR(50),
    releaseDate DATETIME NOT NULL
);

CREATE TABLE Discography_Ranking(
	numOfLikes INTEGER PRIMARY KEY,
	ranking INTEGER);

CREATE TABLE Album( 
	albumID INTEGER PRIMARY KEY,
	numOfSongs INTEGER NOT NULL,
	totalDuration TIME NOT NULL,
	FOREIGN KEY (albumID) REFERENCES Discography_Main(dID)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

CREATE TABLE Song( 
	songID INTEGER PRIMARY KEY,
	duration TIME NOT NULL,
	FOREIGN KEY (songID) REFERENCES Discography_Main(dID)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

CREATE TABLE Playlist_Created(
	playlistID INTEGER PRIMARY KEY AUTO_INCREMENT,
	listenerID INTEGER NOT NULL,
	playlistName VARCHAR(50) NOT NULL,
	numOfSongs INTEGER NOT NULL,
	introduction VARCHAR(100),
	duration TIME,
	FOREIGN KEY (listenerID) REFERENCES MusicListener(listenerID)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

CREATE TABLE Merchandise_Sold(
	itemID INTEGER PRIMARY KEY AUTO_INCREMENT,
	artistID INTEGER NOT NULL,
	itemName VARCHAR(50) NOT NULL,
	price DECIMAL NOT NULL,
	FOREIGN KEY (artistID) REFERENCES Artist_ContractedWith(artistID)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

/*CREATE TABLE Venue( -- NEEDS NORMALIZATION
	venueID INTEGER PRIMARY KEY,
	country VARCHAR(56) NOT NULL,
	city VARCHAR(85),
	vName VARCHAR(50) NOT NULL,
	capacity INTEGER)*/

-- NORMALIZED VENUE

CREATE TABLE Venue_Main(
	venueID INTEGER PRIMARY KEY,
	country VARCHAR(56) NOT NULL,
	postalCode VARCHAR(7) NOT NULL,
	vName VARCHAR(50) NOT NULL,
	capacity INTEGER);

CREATE TABLE Venue_LocationOne(
	country VARCHAR(56) NOT NULL,
	postalCode VARCHAR(7) NOT NULL,
	city VARCHAR(90),
	PRIMARY KEY (country, postalCode));

CREATE TABLE Venue_LocationTwo(
	country VARCHAR(56) NOT NULL,
	postalCode VARCHAR(7) NOT NULL,
	province VARCHAR(90),
	PRIMARY KEY (country, postalCode));


CREATE TABLE LiveEvent_IsHeldAt(
	eventID INTEGER PRIMARY KEY AUTO_INCREMENT,
	venueID INTEGER NOT NULL,
	eventDate DATE,
	startTime TIME,
	duration TIME,
	FOREIGN KEY (venueID) REFERENCES Venue_Main(venueID)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

CREATE TABLE IsIn(
	albumID INTEGER,
	songID INTEGER,
	FOREIGN KEY (albumID) REFERENCES Album(albumID)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
	FOREIGN KEY (songID) REFERENCES Song(songID)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
	PRIMARY KEY (albumID, songID));

CREATE TABLE Includes(
	songID INTEGER,
	playlistID INTEGER,
	FOREIGN KEY (songID) REFERENCES Song(songID)
    ON DELETE CASCADE,
	FOREIGN KEY (playlistID) REFERENCES Playlist_Created(playlistID)
    ON DELETE CASCADE,
	PRIMARY KEY (songID, playlistID));

CREATE TABLE PerformsAt(
	artistID INTEGER,
	eventID INTEGER,
	FOREIGN KEY (artistID) REFERENCES Artist_ContractedWith(artistID)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
	FOREIGN KEY (eventID) REFERENCES LiveEvent_IsHeldAt(eventID)
	ON DELETE CASCADE
    ON UPDATE CASCADE,
	PRIMARY KEY (artistID, eventID));

CREATE TABLE Purchases(
	listenerID INTEGER,
	itemID INTEGER,
	FOREIGN KEY (listenerID) REFERENCES MusicListener(listenerID)
	ON DELETE CASCADE
    ON UPDATE CASCADE,
	FOREIGN KEY (itemID) REFERENCES Merchandise_Sold(itemID)
	ON DELETE CASCADE
    ON UPDATE CASCADE,
	PRIMARY KEY (listenerID, itemID));

/*CREATE TABLE ListensTo(
	listenerID INTEGER,
	playlistID INTEGER,
	discographyID INTEGER,
	FOREIGN KEY (listenerID) REFERENCES MusicListener,
	FOREIGN KEY (playlistID) REFERENCES Playlist_Created,
	FOREIGN KEY (discographyID) REFERENCES Discography_Main(dID),
	PRIMARY KEY (listenerID, playlistID, discographyID))*/

CREATE TABLE Attends(
	listenerID INTEGER,
	eventID INTEGER,
	FOREIGN KEY (listenerID) REFERENCES MusicListener(listenerID)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
	FOREIGN KEY (eventID) REFERENCES LiveEvent_IsHeldAt(eventID)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
	PRIMARY KEY (listenerID, eventID));

CREATE TABLE Releases(
     artistID INTEGER,
     dID INTEGER,
     FOREIGN KEY (artistID) REFERENCES Artist_ContractedWith(artistID)
     ON DELETE CASCADE
     ON UPDATE CASCADE,
     FOREIGN KEY (dID) REFERENCES Discography_Main(dID)
     ON DELETE CASCADE
     ON UPDATE CASCADE,
     PRIMARY KEY (artistID, dID));
     



/** INSERT STATEMENTS **/
DELETE FROM IsIn;-- IGNORE: this is just so we can quickly replace any tuples

DELETE FROM Releases; -- IGNORE: this is just so we can quickly replace any tuples

DELETE FROM Playlist_Created; -- IGNORE: this is just so we can quickly replace any tuples

DELETE FROM Purchases; -- IGNORE: this is just so we can quickly replace any tuples

DELETE FROM Merchandise_Sold; -- IGNORE: this is just so we can quickly replace any tuples

DELETE FROM Includes; -- IGNORE: this is just so we can quickly replace any tuples

DELETE FROM PerformsAt; -- IGNORE: this is just so we can quickly replace any tuples

DELETE FROM Attends; -- IGNORE: this is just so we can quickly replace any tuples

DELETE FROM MusicListener; -- IGNORE: this is just so we can quickly replace any tuples

DELETE FROM Artist_ContractedWith; -- IGNORE: this is just so we can quickly replace any tuples

DELETE FROM RecordLabel; -- IGNORE: this is just so we can quickly replace any tuples

DELETE FROM Album; -- IGNORE: this is just so we can quickly replace any tuples

DELETE FROM Song; -- IGNORE: this is just so we can quickly replace any tuples

DELETE FROM Discography_Main; -- IGNORE: this is just so we can quickly replace any tuples

DELETE FROM Discography_Ranking; -- IGNORE: this is just so we can quickly replace any tuples

DELETE FROM Venue_LocationOne; -- IGNORE: this is just so we can quickly replace any tuples

DELETE FROM Venue_LocationTwo; -- IGNORE: this is just so we can quickly replace any tuples

DELETE FROM LiveEvent_IsHeldAt; -- IGNORE: this is just so we can quickly replace any tuples

DELETE FROM Venue_Main; -- IGNORE: this is just so we can quickly replace any tuples


/** INSERT STATEMENTS **/
INSERT INTO RecordLabel
VALUES (1, 'https://www.pnation.com/', 'PNation');

INSERT INTO RecordLabel
VALUES (2, 'http://www.cubeent.co.kr/intro', 'Cube Entertainment');

INSERT INTO RecordLabel
VALUES (3, 'https://www.commmons.com/en/', 'Commmons');

INSERT INTO RecordLabel
VALUES (4, 'https://www.cpsc304.com/', 'Gittu Entertainment');

INSERT INTO RecordLabel
VALUES (5, 'https://www.republicrecords.com/', 'Republic Records');


INSERT INTO RecordLabel
VALUES (6, 'http://www.columbiarecords.com/', 'Columbia Records');






-- INSERT INTO Artist_ContractedWith      
-- 	VALUES(1, 'HEIZE', 'heize11@gmail.com', 31, 'heizepassword', 'South Korea', NULL, 1, NULL,1);

-- INSERT INTO Artist_ContractedWith
-- 	VALUES (2, '(G)I-DLE', 'gidle@email.com', 5, 'gidlepassword', 'South Korea', '5-member self-producing Kpop girl group', 5, NULL, 2);

-- INSERT INTO Artist_ContractedWith      
-- 	VALUES(3, 'Ryuichi Sakamoto', 'ryuichi11@gmail.com', 71, 'ryuichipassword', 'Japan', NULL, 1, NULL, 3);

-- INSERT INTO Artist_ContractedWith      
-- 	VALUES(4, 'Lil Gittu', 'lilgittu@gmail.com', 30, 'gittupassword', 'Canada', 'Raps about databases', 1, NULL, 4);

-- INSERT INTO Artist_ContractedWith   
-- 	VALUES(5, 'Taylor Swift', 'taylorswift@umgstores.com', 33, 'tspassword', 'United States', 'American singer-songwriter', 1, NULL, 5);

-- INSERT INTO Artist_ContractedWith 
-- 	VALUES(6, 'Harry Styles', 'info@caa.com', 29, 'hspassword', 'United Kingdom', 'English singer and actor', 1, NULL, 6);

INSERT INTO Artist_ContractedWith      
	VALUES(1, 'HEIZE', 31, 'South Korea', NULL, 1, 1);

INSERT INTO Artist_ContractedWith
	VALUES (2, '(G)I-DLE',  5, 'South Korea', '5-member self-producing Kpop girl group', 5,  2);

INSERT INTO Artist_ContractedWith      
	VALUES(3, 'Ryuichi Sakamoto', 71, 'Japan', NULL, 1, 3);

INSERT INTO Artist_ContractedWith      
	VALUES(4, 'Lil Gittu',  30, 'Canada', 'Raps about databases', 1,  4);

INSERT INTO Artist_ContractedWith   
	VALUES(5, 'Taylor Swift',  33,  'United States', 'American singer-songwriter', 1,  5);

INSERT INTO Artist_ContractedWith 
	VALUES(6, 'Harry Styles', 29,  'United Kingdom', 'English singer and actor', 1, 6);
    
    


INSERT INTO Discography_Main
	VALUES (1, 'Goblin OST', 'Kpop', '2017-01-21 12:00');

INSERT INTO Discography_Main
	VALUES (2, 'I FEEL', 'Kpop', '2022-03-15 02:00');

INSERT INTO Discography_Main
	VALUES (3, 'Merry Christmas Mr.Lawrence', NULL, '2015-05-21 12:00') ;

INSERT INTO Discography_Main
	VALUES (4, 'GITTU RAP', 'Hip Hop', '2023-08-05 12:00');

INSERT INTO Discography_Main
	VALUES (5, '1996', 'Dance', '1996-06-04 12:00');

INSERT INTO Discography_Main
	VALUES (6, 'Round and Round', 'Kpop', '2017-01-21 12:00');

INSERT INTO Discography_Main
	VALUES (7, 'Rain', 'Dance', '1996-06-04 12:00');

INSERT INTO Discography_Main
	VALUES (8, 'The Gittu Album', 'Hip Hop', '2023-07-27 12:00');

INSERT INTO Discography_Main
	VALUES (9, 'Midnights', 'Pop', '2022-10-21 0:00');

INSERT INTO Discography_Main
	VALUES (10, 'Reputation', 'Pop', '2017-11-10 12:00');
    
INSERT INTO Discography_Main
	VALUES (11, 'K-GITTU-Pop', 'Kpop', '2023-08-05 12:00');
    
INSERT INTO Discography_Main
	VALUES (12, 'GITTU POP', 'Pop', '2023-08-05 12:00');
    
INSERT INTO Discography_Main
	VALUES (13, 'Old Gittu Town Road', 'Country', '2023-08-05 12:00');
    
INSERT INTO Discography_Main
	VALUES (14, 'Dance With Gittu', 'Dance', '2023-08-05 12:00');


SET SQL_SAFE_UPDATES = 0;


INSERT INTO Discography_Ranking
	VALUES (2000009, 1);

INSERT INTO Discography_Ranking
	VALUES (2000008, 2);

INSERT INTO Discography_Ranking
	VALUES (2000007, 3);

INSERT INTO Discography_Ranking
	VALUES (2000006, 4);

INSERT INTO Discography_Ranking
	VALUES (2000005, 5);

INSERT INTO Discography_Ranking
	VALUES (2000004, 6);

INSERT INTO Discography_Ranking
	VALUES (2000003, 7);

INSERT INTO Discography_Ranking
	VALUES (2000002, 8);

INSERT INTO Discography_Ranking
	VALUES (2000001, 9);

INSERT INTO Discography_Ranking
	VALUES (2000000, 10);



INSERT INTO Album (albumID, numOfSongs, totalDuration)-- Goblin OST
	VALUES (1, 15, '00:53:00');

INSERT INTO Album -- I FEEL
	VALUES (2, 5, '00:17:15');

INSERT INTO Album 
	VALUES (3, 19, '00:40:36') ;

INSERT INTO Album -- 1996
	VALUES (5, 12, '00:52:27');

INSERT INTO Album -- The Gittu Album
	VALUES (8, 5, '00:30:04');





INSERT INTO Song 
	VALUES (4, '00:03:16');

INSERT INTO Song 
	VALUES (6, '00:01:09');

INSERT INTO Song 
	VALUES (7, '00:01:41');

INSERT INTO Song 
	VALUES (9, '00:02:37');

INSERT INTO Song
	VALUES (10, '00:02:03');






INSERT INTO Venue_Main
	VALUES (1, 'Canada',  'V6J 1Z2',  'The Modern Vancouver', 100);

INSERT INTO Venue_Main
	VALUES (2, 'Canada',  'V6B 5N6',  'Queen Elizabeth Theatre', 220);

INSERT INTO Venue_Main
	VALUES (3, 'Canada',  'V6T 2L6',  'Thunderbird Arena', 5054);

INSERT INTO Venue_Main
	VALUES (4, 'Canada',  'V11 111',  'Non-existent Arena 1', 100);

INSERT INTO Venue_Main
	VALUES (5, 'Canada',  'V22 222',  'Non-existent Arena 2', 200);





INSERT INTO Venue_LocationOne
	VALUES ('Canada',  'V6J 1Z2', 'Vancouver');

INSERT INTO Venue_LocationOne
	VALUES ('Canada',  'V6B 5N6', 'Vancouver');

INSERT INTO Venue_LocationOne
	VALUES ('Canada',  'V6T 2L6', 'Vancouver');

INSERT INTO Venue_LocationOne
	VALUES ('Canada',  'V11 111', 'Toronto');

INSERT INTO Venue_LocationOne
	VALUES ('Canada',  'V22 222', 'Whitehorse');



INSERT INTO Venue_LocationTwo
	VALUES ('Canada',  'V6J 1Z2', 'British Columbia');

INSERT INTO Venue_LocationTwo
	VALUES ('Canada',  'V6B 5N6', 'British Columbia');

INSERT INTO Venue_LocationTwo
	VALUES ('Canada',  'V6T 2L6', 'British Columbia');

INSERT INTO Venue_LocationTwo
	VALUES ('Canada',  'V11 111', 'Alberta');

INSERT INTO Venue_LocationTwo
	VALUES ('Canada',  'V22 222', 'Yukon');






INSERT INTO LiveEvent_IsHeldAt
	VALUES (1, 1, '2022-12-11', '20:00', '02:00:00');

INSERT INTO LiveEvent_IsHeldAt
	VALUES (2, 2, '2021-11-10', '21:00', '01:00:00');

INSERT INTO LiveEvent_IsHeldAt
	VALUES (3, 3, '2020-09-09', '12:00', '03:00:00');

INSERT INTO LiveEvent_IsHeldAt
	VALUES (4, 4, '2019-10-10', '16:00', '02:00:00');

INSERT INTO LiveEvent_IsHeldAt
	VALUES (5, 5, '2002-01-30', '20:00', '03:00:00');





INSERT INTO IsIn
	VALUES (1, 6);
INSERT INTO IsIn
	VALUES (3, 7);
INSERT INTO IsIn
	VALUES (2, 4);
INSERT INTO IsIn
	VALUES (5, 9);
INSERT INTO IsIn
	VALUES (8, 10);






INSERT INTO MusicListener
VALUES (7, 'sunshine1', 20, 'Adele', 'Rolling in the Deep', 'jazz');

INSERT INTO MusicListener
VALUES (8, 'cutieee', 28, 'Lana Del Ray', 'Young and Beautiful', 'classic');

INSERT INTO MusicListener
VALUES (9, 'bookWorm', 18, 'Ed Sheeran', 'Perfect', 'pop');

INSERT INTO MusicListener
VALUES (10, 'happyListener', 25, 'Taylor Swift', 'Love Story', 'pop');

INSERT INTO MusicListener
VALUES (11, 'rockLover', 29, 'Freddie Mercury', 'Bohemian Rhapsody', 'rock');

INSERT INTO MusicListener
VALUES (12, 'rainyyy', 34, 'Billie Eilish', 'Happier Than Ever', 'classic');






INSERT INTO Playlist_Created
	VALUES (1, 7, 'ryuichiPlaylist', 10, NULL, '00:30:45');

INSERT INTO Playlist_Created
	VALUES (2, 8, 'OSTPlaylist', 3, 'random songs', '00:09:03');

INSERT INTO Playlist_Created
	VALUES (3, 9, 'playlist3', 30, NULL, '01:40:39');

INSERT INTO Playlist_Created
	VALUES (4, 10, 'playlist4', 40, NULL, '02:18:43');

INSERT INTO Playlist_Created
	VALUES (5, 11, 'playlist5', 20, NULL, '01:08:03');






INSERT INTO Merchandise_Sold
	VALUES (1, 1, 'Gold Prize Shirt', 70.0);

INSERT INTO Merchandise_Sold
	VALUES (2, 2, 'Neverland Lightstick', 20.0);

INSERT INTO Merchandise_Sold
	VALUES (3, 3, 'Cute Cup', 30.0);

INSERT INTO Merchandise_Sold
	VALUES (4, 4, 'Cool Hoodie', 40.0);

INSERT INTO Merchandise_Sold
	VALUES (5, 5, 'Collectable Ticket', 50.0);





INSERT INTO Includes
	VALUES (4, 1);
INSERT INTO Includes
	VALUES (6, 2);
INSERT INTO Includes
	VALUES (7, 3);
INSERT INTO Includes
	VALUES (9, 4);
INSERT INTO Includes
	VALUES (10, 5);





INSERT INTO PerformsAt
	VALUES (3, 1);
INSERT INTO PerformsAt
	VALUES (1, 2);
INSERT INTO PerformsAt
	VALUES (2, 3);
INSERT INTO PerformsAt
	VALUES (4, 4);
INSERT INTO PerformsAt
	VALUES (5, 5);





INSERT INTO Purchases
	VALUES (7, 1);
INSERT INTO Purchases
	VALUES (8, 2);
INSERT INTO Purchases
	VALUES (9, 3);
INSERT INTO Purchases
	VALUES (10, 4);
INSERT INTO Purchases
	VALUES (11, 5);





INSERT INTO Attends
	VALUES (7, 1);
INSERT INTO Attends
	VALUES (8, 2);
INSERT INTO Attends
	VALUES (9, 3);
INSERT INTO Attends
	VALUES (10, 4);
INSERT INTO Attends
	VALUES (11, 5);





INSERT INTO Releases
	VALUES (1, 1);
INSERT INTO Releases
	VALUES (2, 2);
INSERT INTO Releases
	VALUES (3, 3);
INSERT INTO Releases
	VALUES (4, 4);
INSERT INTO Releases
	VALUES (5, 5);
INSERT INTO Releases
	VALUES (1, 6);
INSERT INTO Releases
	VALUES (5, 7);
INSERT INTO Releases
	VALUES (2, 8);
INSERT INTO Releases
	VALUES (4, 9);
INSERT INTO Releases
	VALUES (3, 10);

-- ------------------------
INSERT INTO Releases
	VALUES (4, 11);
    
INSERT INTO Releases
	VALUES (4, 12);
    
INSERT INTO Releases
	VALUES (4, 13);

INSERT INTO Releases
	VALUES (4, 14);
    
INSERT INTO Song
	VALUES (11, '00:03:04');
INSERT INTO Song
	VALUES (12, '00:03:04');
INSERT INTO Song
	VALUES (13, '00:03:04');
INSERT INTO Song
	VALUES (14, '00:03:04');
              
              
