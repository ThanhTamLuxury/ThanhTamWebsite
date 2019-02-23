USE master;
GO
ALTER DATABASE thanhtamluxury 
SET SINGLE_USER 
WITH ROLLBACK IMMEDIATE;
GO
DROP DATABASE thanhtamluxury;

create database thanhtamluxury collate SQL_Latin1_General_CP1_CI_AS
go

USE thanhtamluxury
GO
create table Account
(
	username varchar(255) not null
		constraint PK__Account__F3DBC573690E62AB
			primary key,
	password varchar(max) not null
)
go

create table Appointment
(
	id int identity
		constraint PK__Appointm__3213E83F258C4F80
			primary key,
	address nvarchar(max),
	email varchar(255),
	name nvarchar(255) not null,
	note nvarchar(max),
	phone varchar(50),
	isNew bit
)
go

create table Banner
(
	id int identity
		constraint PK__Banner__3213E83FA25FF6FA
			primary key,
	path varchar(max)
)
go

create table Location
(
	id int identity
		constraint PK__Location__3213E83FD59DA48E
			primary key,
	address nvarchar(max),
	email varchar(255),
	phone varchar(50),
	location ntext
)
go

create table ServiceItem
(
	id int identity
		constraint PK__ServiceI__3213E83FB06EEEB7
			primary key,
	description nvarchar(max),
	name nvarchar(255) not null,
	price float,
	priceDescription nvarchar(max),
	serviceType varchar(255),
	shortDescription nvarchar(max),
	slug varchar(max),
	type nvarchar(255),
	isActive bit
)
go

create table ImageItem
(
	id int identity
		constraint PK__ImageIte__3213E83FA984C23C
			primary key,
	path varchar(max),
	serviceItemId int
		constraint FKofohj8r2v11kfngwcb2b41bk3
			references ServiceItem
)
go

create table PriceDetail
(
	id int identity
		primary key,
	applyDate date,
	price float not null,
	serviceItemId int
		constraint FK2lmyyvrb5trdhf326ux2scuua
			references ServiceItem
)
go

