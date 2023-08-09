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
	email VARCHAR(320) UNIQUE NOT NULL, -- apparently the longest email someone can create is 320 characters long
	age INTEGER,
	userPassword VARCHAR(50) NOT NULL,
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
