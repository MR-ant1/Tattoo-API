--DB SELECTED AND ROLES REGISTERS
USE FSD_LIBRERIA_DATABASE
insert into roles (id, name) values (1, 'user');
insert into roles (id, name) values (2, 'admin');
insert into roles (id, name) values (3, 'super_admin');

--USERS REGISTERS
insert into users (id, first_name, last_name, email, password, role_id) values (1, 'Davida', 'Maro', 'dmaro0@example.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 3);
insert into users (id, first_name, last_name, email, password, role_id) values (2, 'Emmalyn', 'Sutcliffe', 'esutcliffe1@g.co', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 2);
insert into users (id, first_name, last_name, email, password, role_id) values (3, 'Donavon', 'Luff', 'dluff2@rambler.ru', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (4, 'Carolee', 'Pennini', 'cpennini3@google.de', 'iH5''2\I|Y$W${', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (5, 'Gerardo', 'Markl', 'gmarkl4@oracle.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (6, 'Bevan', 'Jewess', 'bjewess5@nhs.uk', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 3);
insert into users (id, first_name, last_name, email, password, role_id) values (7, 'Violante', 'Jouhning', 'vjouhning6@dailymotion.com', 'xQ2>an.%SNc3a{bJ', 2);
insert into users (id, first_name, last_name, email, password, role_id) values (8, 'Ignaz', 'Kahler', 'ikahler7@squidoo.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (9, 'Lonnie', 'MacIlwrick', 'lmacilwrick8@lulu.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 2);
insert into users (id, first_name, last_name, email, password, role_id) values (10, 'Marguerite', 'Budding', 'mbudding9@rambler.ru', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 3);
insert into users (id, first_name, last_name, email, password, role_id) values (11, 'Deck', 'Gerram', 'dgerrama@usnews.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (12, 'Juana', 'Gilardi', 'jgilardib@businessweek.com', 'kT3>a#&23XDoQ\', 2);
insert into users (id, first_name, last_name, email, password, role_id) values (13, 'Con', 'Currie', 'ccurriec@cbc.ca', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 2);
insert into users (id, first_name, last_name, email, password, role_id) values (14, 'Teresa', 'De Clairmont', 'tdeclairmontd@guardian.co.uk', 'cQ7@!nNG}e+"Hu=P', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (15, 'Maria', 'Fulker', 'mfulkere@boston.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (16, 'Dene', 'Bransom', 'dbransomf@hubpages.com', 'hL0@8zRS%>\C', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (17, 'Giacopo', 'Pick', 'gpickg@army.mil', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 2);
insert into users (id, first_name, last_name, email, password, role_id) values (18, 'Morly', 'Patty', 'mpattyh@mac.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 2);
insert into users (id, first_name, last_name, email, password, role_id) values (19, 'Bradney', 'Mannering', 'bmanneringi@tripod.com', 'vT9(4YeV!', 3);
insert into users (id, first_name, last_name, email, password, role_id) values (20, 'Alayne', 'Poynser', 'apoynserj@economist.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 3);
insert into users (id, first_name, last_name, email, password, role_id) values (21, 'Midge', 'Melvin', 'mmelvink@livejournal.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 3);
insert into users (id, first_name, last_name, email, password, role_id) values (22, 'Gabriella', 'Boughton', 'gboughtonl@ameblo.jp', 'nL7$zEfun0k#a', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (23, 'Ogdan', 'Job', 'ojobm@admin.ch', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 3);
insert into users (id, first_name, last_name, email, password, role_id) values (24, 'Evelin', 'Picken', 'epickenn@bluehost.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (25, 'Shamus', 'Dowty', 'sdowtyo@weibo.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (26, 'Amerigo', 'Bothbie', 'abothbiep@virginia.edu', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (27, 'Joannes', 'Elks', 'jelksq@shop-pro.jp', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 2);
insert into users (id, first_name, last_name, email, password, role_id) values (28, 'Drucill', 'Hugnet', 'dhugnetr@sohu.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (29, 'Esther', 'Sterndale', 'esterndales@phoca.cz', 'nP8{47rgJqGN,,(%', 2);
insert into users (id, first_name, last_name, email, password, role_id) values (30, 'Lisabeth', 'Romney', 'lromneyt@umich.edu', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (31, 'Janey', 'Carmel', 'jcarmelu@tinyurl.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (32, 'Ogdon', 'Knoton', 'oknotonv@furl.net', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 2);
insert into users (id, first_name, last_name, email, password, role_id) values (33, 'Brittaney', 'Otley', 'botleyw@buzzfeed.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (34, 'Valentina', 'Doumer', 'vdoumerx@hubpages.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 3);
insert into users (id, first_name, last_name, email, password, role_id) values (35, 'Ronni', 'Coneybeare', 'rconeybearey@pcworld.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 3);
insert into users (id, first_name, last_name, email, password, role_id) values (36, 'Karlotta', 'Mottinelli', 'kmottinelliz@blog.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 2);
insert into users (id, first_name, last_name, email, password, role_id) values (37, 'Karlik', 'Seydlitz', 'kseydlitz10@apache.org', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (38, 'Parnell', 'Sambedge', 'psambedge11@posterous.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 2);
insert into users (id, first_name, last_name, email, password, role_id) values (39, 'Emmott', 'Kielt', 'ekielt12@bloglovin.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (40, 'Benedicta', 'Fancy', 'bfancy13@eventbrite.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (41, 'Guglielma', 'Olivie', 'golivie14@google.com.hk', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 3);
insert into users (id, first_name, last_name, email, password, role_id) values (42, 'Goldie', 'Faire', 'gfaire15@java.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 2);
insert into users (id, first_name, last_name, email, password, role_id) values (43, 'Denna', 'Wingfield', 'dwingfield16@pagesperso-orange.fr', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 3);
insert into users (id, first_name, last_name, email, password, role_id) values (44, 'Verne', 'Gulc', 'vgulc17@cbc.ca', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (45, 'Kerri', 'Carmel', 'kcarmel18@epa.gov', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (46, 'Alica', 'Burgess', 'aburgess19@answers.com', 'uH5="''CHPZ4qrav}', 3);
insert into users (id, first_name, last_name, email, password, role_id) values (47, 'Roxanna', 'Maxted', 'rmaxted1a@plala.or.jp', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 3);
insert into users (id, first_name, last_name, email, password, role_id) values (48, 'Haslett', 'Gierardi', 'hgierardi1b@walmart.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (49, 'Kristian', 'Way', 'kway1c@discuz.net', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (50, 'Neysa', 'Bletsoe', 'nbletsoe1d@cnbc.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (51, 'Blakeley', 'Gindghill', 'bgindghill1e@ustream.tv', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (52, 'Laetitia', 'Blazy', 'lblazy1f@nih.gov', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (53, 'Eli', 'Towhey', 'etowhey1g@usnews.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 2);
insert into users (id, first_name, last_name, email, password, role_id) values (54, 'Charil', 'Hallex', 'challex1h@sfgate.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 3);
insert into users (id, first_name, last_name, email, password, role_id) values (55, 'Pammy', 'Flicker', 'pflicker1i@wikimedia.org', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 3);
insert into users (id, first_name, last_name, email, password, role_id) values (56, 'Angelia', 'Whylie', 'awhylie1j@mail.ru', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 3);
insert into users (id, first_name, last_name, email, password, role_id) values (57, 'Ermanno', 'Blune', 'eblune1k@over-blog.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (58, 'Perry', 'McCreedy', 'pmccreedy1l@narod.ru', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (59, 'Latia', 'Mein', 'lmein1m@berkeley.edu', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (60, 'Brier', 'Sigg', 'bsigg1n@oakley.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 2);
insert into users (id, first_name, last_name, email, password, role_id) values (61, 'Hanna', 'Hathaway', 'hhathaway1o@senate.gov', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (62, 'Olivie', 'Wilce', 'owilce1p@exblog.jp', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (63, 'Francyne', 'Searight', 'fsearight1q@hibu.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (64, 'Bidget', 'Brik', 'bbrik1r@google.ru', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (65, 'Friedrich', 'Maloney', 'fmaloney1s@dot.gov', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 3);
insert into users (id, first_name, last_name, email, password, role_id) values (66, 'Derrik', 'Cowper', 'dcowper1t@taobao.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 3);
insert into users (id, first_name, last_name, email, password, role_id) values (67, 'Natty', 'Critzen', 'ncritzen1u@acquirethisname.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 3);
insert into users (id, first_name, last_name, email, password, role_id) values (68, 'Codi', 'Schoffel', 'cschoffel1v@qq.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 2);
insert into users (id, first_name, last_name, email, password, role_id) values (69, 'Ario', 'Ranald', 'aranald1w@unblog.fr', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 2);
insert into users (id, first_name, last_name, email, password, role_id) values (70, 'Thorpe', 'Lesor', 'tlesor1x@princeton.edu', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 3);
insert into users (id, first_name, last_name, email, password, role_id) values (71, 'Milissent', 'Szantho', 'mszantho1y@pen.io', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 2);
insert into users (id, first_name, last_name, email, password, role_id) values (72, 'Andonis', 'Caisley', 'acaisley1z@huffingtonpost.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 3);
insert into users (id, first_name, last_name, email, password, role_id) values (73, 'Georgeanna', 'Dearing', 'gdearing20@dagondesign.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (74, 'Jacky', 'Alpes', 'jalpes21@wikimedia.org', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (75, 'Kory', 'Itzkin', 'kitzkin22@nih.gov', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 3);
insert into users (id, first_name, last_name, email, password, role_id) values (76, 'Quint', 'Hatherley', 'qhatherley23@amazon.co.jp', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 3);
insert into users (id, first_name, last_name, email, password, role_id) values (77, 'Paddie', 'Bousquet', 'pbousquet24@skype.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 1);
insert into users (id, first_name, last_name, email, password, role_id) values (78, 'Simonette', 'Du Fray', 'sdufray25@xing.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 3);
insert into users (id, first_name, last_name, email, password, role_id) values (79, 'Donny', 'De Beauchamp', 'ddebeauchamp26@ask.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 2);
insert into users (id, first_name, last_name, email, password, role_id) values (80, 'Robena', 'Saterweyte', 'rsaterweyte27@friendfeed.com', '$2b$05$OAMNDFHDT4Y6KyZHeLv.NOiAwXPFGlpVjpv3V2nH2CXEJI/PNlcqe', 2);
--SERVICES REGISTERS
insert into services (id, service_name, description) values (1, Tatuejes personalizados, Los clientes tendrán la libertad de seleccionar motivos y diseños únicos, personalizando completamente su experiencia de tatuaje de acuerdo a sus preferencias y gustos.);
insert into services (id, service_name, description) values (2, Tatuajes del catalogo, Ofrecemos la realización de tatuajes basados en diseños predefinidos en nuestro catálogo. Los clientes pueden elegir entre una variedad de opciones estilizadas y probadas.);
insert into services (id, service_name, description) values (3, Restauracion y rejuvenecimiento de trabajos, Descripción: Nos especializamos en la restauración y rejuvenecimiento de tatuajes existentes. Nuestros expertos trabajan para mejorar y renovar tatuajes antiguos, devolviéndoles su vitalidad.);
insert into services (id, service_name, description) values (4, Colocación de piercings y dilatadores, Ofrecemos servicios profesionales para la colocación de piercings y dilatadores. Nuestro equipo garantiza procedimientos seguros y estilos variados para satisfacer las preferencias individuales de nuestros clientes.);
insert into services (id, service_name, description) values (5, Venta de piercings y otros artículos, Además de nuestros servicios de aplicación, ofrecemos una selección de piercings y otros artículos relacionados con el arte corporal. Los clientes pueden adquirir productos de calidad para complementar su estilo único.)

--APPOINTMENTS REGISTERS

insert into appointments (id, appointment_date, user_id, service_id) values (1, '2024-07-13', 75, 1);
insert into appointments (id, appointment_date, user_id, service_id) values (2, '2024-06-09', 54, 5);
insert into appointments (id, appointment_date, user_id, service_id) values (3, '2024-12-28', 56, 5);
insert into appointments (id, appointment_date, user_id, service_id) values (4, '2025-02-01', 53, 1);
insert into appointments (id, appointment_date, user_id, service_id) values (5, '2024-11-16', 18, 1);
insert into appointments (id, appointment_date, user_id, service_id) values (6, '2024-07-03', 53, 1);
insert into appointments (id, appointment_date, user_id, service_id) values (7, '2024-12-13', 55, 3);
insert into appointments (id, appointment_date, user_id, service_id) values (8, '2024-10-23', 55, 1);
insert into appointments (id, appointment_date, user_id, service_id) values (9, '2024-08-11', 31, 1);
insert into appointments (id, appointment_date, user_id, service_id) values (10, '2024-12-18', 61, 1);
insert into appointments (id, appointment_date, user_id, service_id) values (11, '2024-03-19', 38, 5);
insert into appointments (id, appointment_date, user_id, service_id) values (12, '2024-12-03', 64, 2);
insert into appointments (id, appointment_date, user_id, service_id) values (13, '2025-02-17', 26, 1);
insert into appointments (id, appointment_date, user_id, service_id) values (14, '2024-08-13', 39, 3);
insert into appointments (id, appointment_date, user_id, service_id) values (15, '2024-10-16', 6, 2);
insert into appointments (id, appointment_date, user_id, service_id) values (16, '2024-12-29', 13, 1);
insert into appointments (id, appointment_date, user_id, service_id) values (17, '2025-01-27', 26, 1);
insert into appointments (id, appointment_date, user_id, service_id) values (18, '2024-11-01', 31, 4);
insert into appointments (id, appointment_date, user_id, service_id) values (19, '2025-01-31', 23, 1);
insert into appointments (id, appointment_date, user_id, service_id) values (20, '2024-10-15', 44, 2);
insert into appointments (id, appointment_date, user_id, service_id) values (21, '2024-03-16', 18, 1);
insert into appointments (id, appointment_date, user_id, service_id) values (22, '2024-11-11', 50, 4);
insert into appointments (id, appointment_date, user_id, service_id) values (23, '2024-10-07', 49, 2);
insert into appointments (id, appointment_date, user_id, service_id) values (24, '2024-09-17', 54, 4);
insert into appointments (id, appointment_date, user_id, service_id) values (25, '2025-01-20', 48, 4);
insert into appointments (id, appointment_date, user_id, service_id) values (26, '2024-07-20', 4, 1);
insert into appointments (id, appointment_date, user_id, service_id) values (27, '2024-10-31', 27, 5);
insert into appointments (id, appointment_date, user_id, service_id) values (28, '2024-08-17', 38, 2);
insert into appointments (id, appointment_date, user_id, service_id) values (29, '2024-04-03', 3, 3);
insert into appointments (id, appointment_date, user_id, service_id) values (30, '2024-12-27', 29, 1);
insert into appointments (id, appointment_date, user_id, service_id) values (31, '2024-11-19', 57, 1);
insert into appointments (id, appointment_date, user_id, service_id) values (32, '2024-03-17', 8, 3);
insert into appointments (id, appointment_date, user_id, service_id) values (33, '2024-07-10', 6, 1);
insert into appointments (id, appointment_date, user_id, service_id) values (34, '2024-12-04', 50, 1);
insert into appointments (id, appointment_date, user_id, service_id) values (35, '2024-10-03', 77, 1);
insert into appointments (id, appointment_date, user_id, service_id) values (36, '2024-07-04', 69, 3);
insert into appointments (id, appointment_date, user_id, service_id) values (37, '2025-02-11', 73, 2);
insert into appointments (id, appointment_date, user_id, service_id) values (38, '2024-12-31', 40, 1);
insert into appointments (id, appointment_date, user_id, service_id) values (39, '2024-07-14', 6, 5);
insert into appointments (id, appointment_date, user_id, service_id) values (40, '2024-12-27', 35, 3);
insert into appointments (id, appointment_date, user_id, service_id) values (41, '2024-11-05', 12, 5);
insert into appointments (id, appointment_date, user_id, service_id) values (42, '2025-01-27', 17, 1);
insert into appointments (id, appointment_date, user_id, service_id) values (43, '2024-12-19', 7, 5);
insert into appointments (id, appointment_date, user_id, service_id) values (44, '2025-01-14', 35, 1);
insert into appointments (id, appointment_date, user_id, service_id) values (45, '2024-09-07', 43, 2);
insert into appointments (id, appointment_date, user_id, service_id) values (46, '2024-08-24', 7, 4);
insert into appointments (id, appointment_date, user_id, service_id) values (47, '2025-02-02', 21, 2);
insert into appointments (id, appointment_date, user_id, service_id) values (48, '2024-03-05', 52, 1);
insert into appointments (id, appointment_date, user_id, service_id) values (49, '2024-05-07', 78, 4);
insert into appointments (id, appointment_date, user_id, service_id) values (50, '2024-06-01', 67, 2);