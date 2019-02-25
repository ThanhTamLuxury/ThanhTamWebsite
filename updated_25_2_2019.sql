use thanhtamluxury
go

--rename column
EXEC sp_RENAME '[dbo].[Location].location', 'googleLocation', 'COLUMN'

--change location from ntext to varchar(MAX)
alter table [dbo].[Location]
alter column googleLocation varchar(MAX)

--Create new table to save header
create table Header
(
	id int identity(1,1) primary key,
	name nvarchar(50) not null unique,
	[to] varchar(50),
	exact bit default 1
)

-- add field mainImage in service item for wedding dress and albums
alter table ServiceItem
add mainImage varchar(255)


-- set phone in appointment not null
alter table Appointment
alter column phone varchar(50) not null

--add location field in serviceItem for albums
alter table ServiceItem
add location varchar(255)

-- add unique constraint on slug
alter table ServiceItem
alter column [slug] varchar(255) not null

ALTER TABLE ServiceItem ADD CONSTRAINT UK_Service_Slug UNIQUE ([slug])
