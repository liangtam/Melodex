/** INSERT STATEMENTS **/
DELETE FROM RecordLabel --IGNORE: this is just so we can quickly replace any tuples
WHERE labelID in(1, 2, 3, 4, 5, 6)

INSERT INTO RecordLabel
VALUES (1, 'https://www.pnation.com/', 'PNation')

INSERT INTO RecordLabel
VALUES (2, 'http://www.cubeent.co.kr/intro', 'Cube Entertainment')

INSERT INTO RecordLabel
VALUES (3, 'https://www.commmons.com/en/', 'Commmons')

INSERT INTO RecordLabel
VALUES (4, 'https://www.cpsc304.com/', 'Gittu Entertainment')

INSERT INTO RecordLabel
VALUES (5, 'https://www.republicrecords.com/', 'Republic Records')


INSERT INTO RecordLabel
VALUES (6, 'http://www.columbiarecords.com/', 'Columbia Records')




DELETE FROM Artist_ContractedWith --IGNORE: this is just so we can quickly replace any tuples
WHERE artistID in(1, 2, 3, 4, 5, 6)

INSERT INTO Artist_ContractedWith      
	VALUES(1, 'HEIZE', 'heize11@gmail.com', 31, 'heizepassword', 'South Korea', NULL, 1, NULL,1)

INSERT INTO Artist_ContractedWith
	VALUES (2, '(G)I-DLE', 'gidle@email.com', 5, 'gidlepassword', 'South Korea', '5-member self-producing Kpop girl group', 5, NULL, 2)

INSERT INTO Artist_ContractedWith      
	VALUES(3, 'Ryuichi Sakamoto', 'ryuichi11@gmail.com', 71, 'ryuichipassword', 'Japan', NULL, 1, NULL, 3)

INSERT INTO Artist_ContractedWith      
	VALUES(4, 'Lil Gittu', 'lilgittu@gmail.com', 30, 'gittupassword', 'Canada', 'Raps about databases', 1, NULL, 4)

INSERT INTO Artist_ContractedWith   
	VALUES(5, 'Taylor Swift', 'taylorswift@umgstores.com', 33, 'tspassword', 'United States', 'American singer-songwriter', 1, NULL, 5)

INSERT INTO Artist_ContractedWith 
	VALUES(6, 'Harry Styles', 'info@caa.com', 29, 'hspassword', 'United Kingdom', 'English singer and actor', 1, NULL, 6)




DELETE FROM Discography_Main --IGNORE: this is just so we can quickly replace any tuples
WHERE dID in(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

INSERT INTO Discography_Main
	VALUES (1, 'Goblin OST', 'Kpop', '01/21/2017 12:00', 2000000)

INSERT INTO Discography_Main
	VALUES (2, 'I FEEL', 'Kpop', '03/15/2022 02:00', 2000001)

INSERT INTO Discography_Main
	VALUES (3, 'Merry Christmas Mr.Lawrence', NULL, '05/01/2015 12:00', 2000002) 

INSERT INTO Discography_Main
	VALUES (4, 'GITTU RAP', 'Hip Hop', '08/05/2023 12:00', 2000003)

INSERT INTO Discography_Main
	VALUES (5, '1996', 'Dance', '06/04/1996 12:00', 2000004)

INSERT INTO Discography_Main
	VALUES (6, 'Round and Round', 'Kpop', '01/21/2017 12:00', 2000005)

INSERT INTO Discography_Main
	VALUES (7, 'Rain', 'Dance', '06/04/1996 12:00', 2000006)

INSERT INTO Discography_Main
	VALUES (8, 'The Gittu Album', 'Hip Hop', '07/27/2023 12:00', 2000007)

INSERT INTO Discography_Main
	VALUES (9, 'Midnights', 'pop', '10/21/2022 0:00', 2000008)

INSERT INTO Discography_Main
	VALUES (10, 'Reputation', 'pop', '11/10/2017 12:00', 2000009)




DELETE FROM Discography_Ranking --IGNORE: this is just so we can quickly replace any tuples
WHERE ranking in(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
INSERT INTO Discography_Ranking
	VALUES (2000009, 1)

INSERT INTO Discography_Ranking
	VALUES (2000008, 2)

INSERT INTO Discography_Ranking
	VALUES (2000007, 3)

INSERT INTO Discography_Ranking
	VALUES (2000006, 4)

INSERT INTO Discography_Ranking
	VALUES (2000005, 5)

INSERT INTO Discography_Ranking
	VALUES (2000004, 6)

INSERT INTO Discography_Ranking
	VALUES (2000003, 7)

INSERT INTO Discography_Ranking
	VALUES (2000002, 8)

INSERT INTO Discography_Ranking
	VALUES (2000001, 9)

INSERT INTO Discography_Ranking
	VALUES (2000000, 10)

DELETE FROM Album --IGNORE: this is just so we can quickly replace any tuples
WHERE albumID in(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

INSERT INTO Album -- Goblin OST
	VALUES (1, 15, '00:53:00')

INSERT INTO Album -- I FEEL
	VALUES (2, 5, '00:17:15')

INSERT INTO Album 
	VALUES (3, 19, '00:40:36') 

INSERT INTO Album -- 1996
	VALUES (5, 12, '00:52:27')

INSERT INTO Album -- The Gittu Album
	VALUES (8, 5, '00:30:04')




DELETE FROM Song --IGNORE: this is just so we can quickly replace any tuples
WHERE songID in(4, 6, 7, 9, 10)

INSERT INTO Song 
	VALUES (4, '00:03:16')

INSERT INTO Song 
	VALUES (6, '00:01:09')

INSERT INTO Song 
	VALUES (7, '00:01:41')

INSERT INTO Song 
	VALUES (9, '00:02:37')

INSERT INTO Song
	VALUES (10, '00:02:03')





DELETE FROM Venue_Main --IGNORE: this is just so we can quickly replace any tuples
WHERE venueID in(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

INSERT INTO Venue_Main
	VALUES (1, 'Canada',  'V6J 1Z2',  'The Modern Vancouver', 100)

INSERT INTO Venue_Main
	VALUES (2, 'Canada',  'V6B 5N6',  'Queen Elizabeth Theatre', 220)

INSERT INTO Venue_Main
	VALUES (3, 'Canada',  'V6T 2L6',  'Thunderbird Arena', 5054)

INSERT INTO Venue_Main
	VALUES (4, 'Canada',  'V11 111',  'Non-existent Arena 1', 100)

INSERT INTO Venue_Main
	VALUES (5, 'Canada',  'V22 222',  'Non-existent Arena 2', 200)




DELETE FROM Venue_LocationOne --IGNORE: this is just so we can quickly replace any tuples
WHERE country='Canada'

INSERT INTO Venue_LocationOne
	VALUES ('Canada',  'V6J 1Z2', 'Vancouver')

INSERT INTO Venue_LocationOne
	VALUES ('Canada',  'V6B 5N6', 'Vancouver')

INSERT INTO Venue_LocationOne
	VALUES ('Canada',  'V6T 2L6', 'Vancouver')

INSERT INTO Venue_LocationOne
	VALUES ('Canada',  'V11 111', 'Toronto')

INSERT INTO Venue_LocationOne
	VALUES ('Canada',  'V22 222', 'Whitehorse')




DELETE FROM Venue_LocationTwo --IGNORE: this is just so we can quickly replace any tuples
WHERE country='Canada'

INSERT INTO Venue_LocationTwo
	VALUES ('Canada',  'V6J 1Z2', 'British Columbia')

INSERT INTO Venue_LocationTwo
	VALUES ('Canada',  'V6B 5N6', 'British Columbia')

INSERT INTO Venue_LocationTwo
	VALUES ('Canada',  'V6T 2L6', 'British Columbia')

INSERT INTO Venue_LocationTwo
	VALUES ('Canada',  'V11 111', 'Alberta')

INSERT INTO Venue_LocationTwo
	VALUES ('Canada',  'V22 222', 'Yukon')




DELETE FROM LiveEvent_IsHeldAt --IGNORE: this is just so we can quickly replace any tuples
WHERE eventID in(1, 2, 3, 4, 5)

INSERT INTO LiveEvent_IsHeldAt
	VALUES (1, 1, '2022-12-11', '12/11/2022 20:00', '02:00:00')

INSERT INTO LiveEvent_IsHeldAt
	VALUES (2, 2, '2021-11-10', '11/10/2021 21:00', '01:00:00')

INSERT INTO LiveEvent_IsHeldAt
	VALUES (3, 3, '2020-09-09', '09/09/2020 12:00', '03:00:00')

INSERT INTO LiveEvent_IsHeldAt
	VALUES (4, 4, '2019-10-10', '10/10/2019 16:00', '02:00:00')

INSERT INTO LiveEvent_IsHeldAt
	VALUES (5, 5, '2002-01-30', '01/30/2002 20:00', '03:00:00')




DELETE FROM IsIn --IGNORE: this is just so we can quickly replace any tuples
WHERE albumID in(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

INSERT INTO IsIn
	VALUES (1, 6)
INSERT INTO IsIn
	VALUES (3, 7)
INSERT INTO IsIn
	VALUES (2, 4)
INSERT INTO IsIn
	VALUES (5, 9)
INSERT INTO IsIn
	VALUES (8, 10)




DELETE FROM MusicListener --IGNORE: this is just so we can quickly replace any tuples
WHERE listenerID in(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

INSERT INTO MusicListener
VALUES (7, 'sunshine1', 'sunshine1@gmail.com', 20, 'sunshinePassword', 'Adele', 'Rolling in the Deep', 'jazz')

INSERT INTO MusicListener
VALUES (8, 'cutieee', 'lilcutie@gmail.com', 28, 'cutiePassword', 'Lana Del Ray', 'Young and Beautiful', 'classic')

INSERT INTO MusicListener
VALUES (9, 'bookWorm', 'bookLover@hotmail.com', 18, 'bookPassword', 'Ed Sheeran', 'Perfect', 'pop')

INSERT INTO MusicListener
VALUES (10, 'happyListener', 'happyListener@hotmail.com', 25, 'happyPassword', 'Taylor Swift', 'Love Story', 'pop')

INSERT INTO MusicListener
VALUES (11, 'rockLover', 'iLoveRock@yahoo.com', 29, 'rockPassword', 'Freddie Mercury', 'Bohemian Rhapsody', 'rock')

INSERT INTO MusicListener
VALUES (12, 'rainyyy', 'rainy@yahoo.com', 34, 'rainyPassword', 'Billie Eilish', 'Happier Than Ever', 'classic')





DELETE FROM Playlist_Created --IGNORE: this is just so we can quickly replace any tuples
WHERE listenerID in(1, 2, 3, 4, 5)

INSERT INTO Playlist_Created
	VALUES (1, 7, 'ryuichiPlaylist', 10, NULL, '00:30:45')

INSERT INTO Playlist_Created
	VALUES (2, 8, 'OSTPlaylist', 3, 'random songs', '00:09:03')

INSERT INTO Playlist_Created
	VALUES (3, 9, 'playlist3', 30, NULL, '01:40:39')

INSERT INTO Playlist_Created
	VALUES (4, 10, 'playlist4', 40, NULL, '02:18:43')

INSERT INTO Playlist_Created
	VALUES (5, 11, 'playlist5', 20, NULL, '01:08:03')




DELETE FROM Merchandise_Sold --IGNORE: this is just so we can quickly replace any tuples
WHERE artistID in(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

INSERT INTO Merchandise_Sold
	VALUES (1, 1, 'Gold Prize Shirt', 70.0)

INSERT INTO Merchandise_Sold
	VALUES (2, 2, 'Neverland Lightstick', 20.0)

INSERT INTO Merchandise_Sold
	VALUES (3, 3, 'Cute Cup', 30.0)

INSERT INTO Merchandise_Sold
	VALUES (4, 4, 'Cool Hoodie', 40.0)

INSERT INTO Merchandise_Sold
	VALUES (5, 5, 'Collectable Ticket', 50.0)




DELETE FROM Includes --IGNORE: this is just so we can quickly replace any tuples
WHERE songID in(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

INSERT INTO Includes
	VALUES (4, 1)
INSERT INTO Includes
	VALUES (6, 2)
INSERT INTO Includes
	VALUES (7, 3)
INSERT INTO Includes
	VALUES (9, 4)
INSERT INTO Includes
	VALUES (10, 5)




DELETE FROM PerformsAt --IGNORE: this is just so we can quickly replace any tuples
WHERE artistID in(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

INSERT INTO PerformsAt
	VALUES (3, 1)
INSERT INTO PerformsAt
	VALUES (1, 2)
INSERT INTO PerformsAt
	VALUES (2, 3)
INSERT INTO PerformsAt
	VALUES (4, 4)
INSERT INTO PerformsAt
	VALUES (5, 5)




DELETE FROM Purchases --IGNORE: this is just so we can quickly replace any tuples
WHERE listenerID in(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

INSERT INTO Purchases
	VALUES (7, 1)
INSERT INTO Purchases
	VALUES (8, 2)
INSERT INTO Purchases
	VALUES (9, 3)
INSERT INTO Purchases
	VALUES (10, 4)
INSERT INTO Purchases
	VALUES (11, 5)




DELETE FROM Attends --IGNORE: this is just so we can quickly replace any tuples
WHERE listenerID in(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)

INSERT INTO Attends
	VALUES (7, 1)
INSERT INTO Attends
	VALUES (8, 2)
INSERT INTO Attends
	VALUES (9, 3)
INSERT INTO Attends
	VALUES (10, 4)
INSERT INTO Attends
	VALUES (11, 5)




DELETE FROM Releases --IGNORE: this is just so we can quickly replace any tuples
WHERE artistID in(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)

INSERT INTO Releases
	VALUES (1, 1)
INSERT INTO Releases
	VALUES (2, 2)
INSERT INTO Releases
	VALUES (3, 3)
INSERT INTO Releases
	VALUES (4, 4)
INSERT INTO Releases
	VALUES (5, 5)
INSERT INTO Releases
	VALUES (1, 6)
INSERT INTO Releases
	VALUES (5, 7)
INSERT INTO Releases
	VALUES (2, 8)
INSERT INTO Releases
	VALUES (4, 9)
INSERT INTO Releases
	VALUES (3, 10)