/*-----------------------Notes---------------------------*/
create database notes;
use notes;

create table note (
noteId integer primary key auto_increment, 
contents varchar(1024), 
userId varchar(100), 
timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

insert into note(contents,userId)
values ("this is akash notes",1);

drop table note;
select * from note;
delete from note where noteId = 2;

/*----------------------------------------------*/
create table user(
userId integer primary key auto_increment, 
firstName varchar(25) NOT NULL, 
lastName varchar(25) NOT NULL, 
email varchar(25) unique NOT NULL,
password varchar(25) NOT NULL,
mobile varchar (10) unique NOT NULL, 
timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

insert into user(firstName,lastName,email,password,mobile)
values ("akash","patel","akash9753@gmail.com",1234,'9753290759');

drop table user;
select * from user;
delete from user where id = 7;
select * from user where email = "a9753@gmail.com" and password = 1234;
update user set mobile = '7000991455' where id =4;
describe user;

/*-----------------------------*/
select user.userId, email, contents from note , user
where note.userId = user.userId;