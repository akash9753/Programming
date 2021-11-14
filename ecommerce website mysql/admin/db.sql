/*---------------------------------------------------------------*/
/*------Project Ecommerce--------------------------------------------*/
/*-------------------------Project Ecommerce------------------*/
/*---------------------------------------------------------------*/
/*-------------------------------------------Project Ecommerce----*/
create database ecommerce;
use ecommerce;
create table admin(
adminId integer primary key auto_increment, 
firstName varchar(25) , 
lastName varchar(25) , 
email varchar(25) unique NOT NULL,
password varchar(100) ,
mobile varchar (10) unique not null, 
gender varchar(5),
dateOfBirth date,
address varchar(100) ,
city varchar(25) ,
zip varchar(100) ,
state varchar(25),
country varchar(100),
createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
active INTEGER DEFAULT 1
);
insert into admin(firstName,lastName,email,password,mobile,gender,dateOfBirth,address,city,zip,state,country)
values ("akash","patel","akash@gmail.com",1234,'9753290750',"M","1993-01-11","mahakoushal colony","jabalpur","482004","MP","india");

select * from admin;
delete from admin where adminId = 1;
select * from admin where email = "akash@gmail.com" and password = 1234;
update user set mobile = '9753290759' where adminId =1;
describe admin;
TRUNCATE TABLE admin;
drop table admin;

/*------------------------------------*/

create table user(
userId integer primary key auto_increment, 
firstName varchar(25) , 
lastName varchar(25) , 
email varchar(25) unique NOT NULL,
password varchar(100) ,
mobile varchar (10) , 
gender varchar(5),
dateOfBirth date,
address varchar(100) ,
city varchar(25) ,
zip varchar(100) ,
state varchar(25),
country varchar(100),
createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
active INTEGER DEFAULT 0,
activationToken varchar(100)
);
insert into user(firstName,lastName,email,password,mobile,gender,dateOfBirth,address,city,zip,state,country)
values ("akash","patel","akash9753@gmail.com",1234,'9753290750',"M","1993-01-11","mahakoushal colony","jabalpur","482004","MP","india");

select * from user;

select * from user where email = "akash@gmail.com" and password = 1234;
update user set dateofBirth = '1993-01-11' where userId =1;
update user set mobile = '9753290759' where userId =1;
update user set gender = 'M' where userId =1;
update user set address = '104/c mahakoushal nagar adhartal' where userId =1;
update user set city = 'jabalpur' where userId =1;
update user set zip = '482004' where userId =1;
update user set city = 'jabalpur' where userId =1;
update user set country = 'india' where userId =1;
update user set state = 'MP' where userId =1;
describe user;
TRUNCATE TABLE user;
drop table user;
rollback;
SELECT COUNT(*) FROM user;
SET autocommit = 1; 
/*------------------------------------*/
create table category(
categoryId integer primary key auto_increment, 
title varchar(25) NOT NULL, 
description varchar(100) NOT NULL, 
createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

insert into category(title,description)
values ("apple mac mini","compact pc");

select * from category;
delete from category where categoryId = 1;
update category set title = '7000991455' where categoryid =4;
describe category;
TRUNCATE TABLE category;
drop table category;

/*------------------------------------*/
create table brand(
brandId integer primary key auto_increment, 
title varchar(25) NOT NULL, 
description varchar(100) NOT NULL, 
createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

insert into brand(title,description)
values ("apple","great brand");

select * from brand;
delete from brand where brandId = 1;
update brand set title = 'samsung' where brandId =4;
describe brand;
TRUNCATE TABLE brand;
drop table brand;


/*------------------------------------*/

create table product(
productId integer primary key auto_increment, 
title varchar(25) NOT NULL, 
description varchar(100) NOT NULL, 
category integer,
brand integer,
price decimal,
image varchar(100),
isActive INTEGER DEFAULT 1,
createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
/*FOREIGN KEY (categoryId) REFERENCES category (categoryId) ON DELETE CASCADE*/
);

insert into product(title,description,category,brand,price)
values ("iphone13","latest iphone",5,1,100000);

select p.productId, p.title, p.description, 
c.categoryId as categoryId, c.title as categoryTitle,
b.brandId as brandId, b.title as brandTitle,
p.price, p.image from product p

inner join category c
on c.categoryId = p.category

inner join brand b
on b.brandId = p.brand;
/*-----------------------------------------*/
select p.productId, p.title, p.description, 
c.title as categoryTitle,
b.title as brandTitle,
p.price, p.image from product p

inner join category c
on c.categoryId = p.category

inner join brand b
on b.brandId = p.brand;
/*-----------------------------------------*/
select * from product;
select * from product where productId = 1;
delete from product where productId = 1;
update product set title = 'samsung' where productId =4;
describe product;
TRUNCATE TABLE product;
drop table product;
ALTER table product add COLUMN isActive INTEGER DEFAULT 1;

/*------------------------------------*/

create table productReview(
productReviewId integer primary key auto_increment, 
review varchar(100) , 
rating varchar(10),
productId integer,
userId integer,
createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
/*FOREIGN KEY (categoryId) REFERENCES category (categoryId) ON DELETE CASCADE*/
);

insert into productReview(review,rating,productId,userId)
values ("very nice from apple",4.5,1,1);

insert into productReview(review,rating,productId,userId)
values ("third class company",0.0,1,2);

select * from productReview;
select * from productReviews where productReviewId = 1;
delete from productReview where productReviewId = 1;
update productReview set title = 'samsung' where productReviewId =4;
describe productReview;
TRUNCATE TABLE productReview;
drop table productReview;

/*------------------------------------*/

create table userOrder (
orderId integer primary key auto_increment, 
userId integer, 
totalAmount DECIMAL,
tax decimal,
paymentType varchar(10),
paymentStatus varchar(10),
deliveryStatus varchar(25),
createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
/*FOREIGN KEY (categoryId) REFERENCES category (categoryId) ON DELETE CASCADE*/
);

insert into userOrder(userId)
values ("1");

select * from userOrder;
select * from userOrder where orderId = 1;
delete from userOrder where orderId = 1;
update userOrder set title = 'samsung' where userOrderId =4;
describe userOrder;
TRUNCATE TABLE userOrder;
drop table userOrder;

/*------------------------------------*/

create table orderDetails (
orderDetailId integer primary key auto_increment, 
userId integer,
orderId integer, 
productId integer,
quantity integer,
price DECIMAL,
totalAmount DECIMAL,
createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
/*FOREIGN KEY (categoryId) REFERENCES category (categoryId) ON DELETE CASCADE*/
);

insert into orderDetails(orderId, productId,price,quantity,totalAmount)
values (1,1,10,10,100),
(1,2,30,1,30),
(1,3,50,5,250);

select * from orderDetails;
select * from orderDetails where orderDetailId = 1;
delete from orderDetails where orderDetailId = 1;
update orderDetail set title = 'samsung' where ordersId =4;
describe orders;
TRUNCATE TABLE orderDetails;
drop table orderDetails;

/*------------------------------------*/
