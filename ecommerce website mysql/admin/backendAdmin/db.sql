create database ecommerce;
use ecommerce;

create table adminUser(
adminId integer primary key auto_increment, 
firstName varchar(25) NOT NULL, 
lastName varchar(25) NOT NULL, 
address varchar(100) NOT NULL,
city varchar(100) ,
country varchar(100),
zip varchar(100) NOT NULL,
email varchar(25) unique NOT NULL,
password varchar(100) NOT NULL,
mobile varchar (10) unique NOT NULL, 
createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
active INTEGER DEFAULT 1
);
insert into adminUser(firstName,lastName,address,city,country,zip,email,password,mobile)
values ("akash","patel","mahakoushal colony","jabalpur","india","482004","akash9753@gmail.com",1234,'9753290759');

select * from adminUser;
delete from adminUser where userid = 5;
select * from adminUser where email = "akash9753@gmail.com" and password = 1234;
update adminUser set mobile = '7000991455' where id =4;
describe adminUser;
TRUNCATE TABLE adminUser;
drop table adminUser;

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
createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
/*FOREIGN KEY (categoryId) REFERENCES category (categoryId) ON DELETE CASCADE*/
);

insert into product(title,description,category,brand,price)
values ("mac mini","compact pc",1,1,57999);

select * from product;
select * from product where productId = 1;
delete from product where productId = 1;
update product set title = 'samsung' where productId =4;
describe product;
TRUNCATE TABLE product;
drop table product;


/*------------------------------------*/

create table productReview(
productReviewId integer primary key auto_increment, 
review varchar(100) , 
productId integer,
userId integer,
createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
/*FOREIGN KEY (categoryId) REFERENCES category (categoryId) ON DELETE CASCADE*/
);

insert into productReview(review,productId,userId)
values ("very nice from apple","1",1);

select * from productReview;
select * from productReviews where productReviewId = 1;
delete from productReview where productReviewId = 1;
update productReview set title = 'samsung' where productReviewId =4;
describe productReview;
TRUNCATE TABLE productReview;
drop table productReviews;

/*------------------------------------*/

create table orders (
orderId integer primary key auto_increment, 
userId integer, 
date DATE DEFAULT (CURRENT_DATE),
totalAmount DECIMAL,
tax decimal,
paymentType varchar(10),
deliveryStatus varchar(25),
createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
/*FOREIGN KEY (categoryId) REFERENCES category (categoryId) ON DELETE CASCADE*/
);

insert into orders(userId)
values ("1");

select * from orders;
select * from orders where ordersId = 1;
delete from orders where ordersId = 1;
update orders set title = 'samsung' where ordersId =4;
describe orders;
TRUNCATE TABLE orders;
drop table orders;

/*------------------------------------*/

create table orderDetail (
orderDetailId integer primary key auto_increment, 
orderId integer, 
productId integer,
price DECIMAL,
quantity integer,
totalAmount DECIMAL,
createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
/*FOREIGN KEY (categoryId) REFERENCES category (categoryId) ON DELETE CASCADE*/
);

insert into orders(userId)
values ("1");

select * from orderDetail;
select * from orderDetails where orderDetailId = 1;
delete from orderDetails where orderDetailId = 1;
update orderDetail set title = 'samsung' where ordersId =4;
describe orders;
TRUNCATE TABLE orders;
drop table orderDetails;

/*------------------------------------*/