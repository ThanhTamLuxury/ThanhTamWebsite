USE [master]
GO
/****** Object:  Database [thanhtamluxury]    Script Date: 2/22/2019 10:56:45 PM ******/
CREATE DATABASE [thanhtamluxury]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'thanhtamluxury', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\thanhtamluxury.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'thanhtamluxury_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\thanhtamluxury_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [thanhtamluxury] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [thanhtamluxury].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [thanhtamluxury] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [thanhtamluxury] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [thanhtamluxury] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [thanhtamluxury] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [thanhtamluxury] SET ARITHABORT OFF 
GO
ALTER DATABASE [thanhtamluxury] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [thanhtamluxury] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [thanhtamluxury] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [thanhtamluxury] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [thanhtamluxury] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [thanhtamluxury] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [thanhtamluxury] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [thanhtamluxury] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [thanhtamluxury] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [thanhtamluxury] SET  DISABLE_BROKER 
GO
ALTER DATABASE [thanhtamluxury] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [thanhtamluxury] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [thanhtamluxury] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [thanhtamluxury] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [thanhtamluxury] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [thanhtamluxury] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [thanhtamluxury] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [thanhtamluxury] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [thanhtamluxury] SET  MULTI_USER 
GO
ALTER DATABASE [thanhtamluxury] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [thanhtamluxury] SET DB_CHAINING OFF 
GO
ALTER DATABASE [thanhtamluxury] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [thanhtamluxury] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [thanhtamluxury] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [thanhtamluxury] SET QUERY_STORE = OFF
GO
USE [thanhtamluxury]
GO
/****** Object:  User [ducthanh]    Script Date: 2/22/2019 10:56:46 PM ******/
CREATE USER [ducthanh] FOR LOGIN [ducthanh] WITH DEFAULT_SCHEMA=[dbo]
GO
USE [thanhtamluxury]
GO
/****** Object:  Sequence [dbo].[hibernate_sequence]    Script Date: 2/22/2019 10:56:46 PM ******/
CREATE SEQUENCE [dbo].[hibernate_sequence] 
 AS [bigint]
 START WITH 1
 INCREMENT BY 1
 MINVALUE -9223372036854775808
 MAXVALUE 9223372036854775807
 CACHE 
GO
/****** Object:  Table [dbo].[Account]    Script Date: 2/22/2019 10:56:46 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Account](
	[username] [varchar](255) NOT NULL,
	[password] [varchar](max) NOT NULL,
 CONSTRAINT [PK__Account__F3DBC573690E62AB] PRIMARY KEY CLUSTERED 
(
	[username] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Appointment]    Script Date: 2/22/2019 10:56:46 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Appointment](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[address] [nvarchar](max) NULL,
	[email] [varchar](255) NULL,
	[name] [nvarchar](255) NOT NULL,
	[note] [nvarchar](max) NULL,
	[phone] [varchar](50) NULL,
	[isNew] [bit] NULL,
 CONSTRAINT [PK__Appointm__3213E83F258C4F80] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Banner]    Script Date: 2/22/2019 10:56:46 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Banner](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[path] [varchar](max) NULL,
 CONSTRAINT [PK__Banner__3213E83FA25FF6FA] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ImageItem]    Script Date: 2/22/2019 10:56:47 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ImageItem](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[path] [varchar](max) NULL,
	[serviceItemId] [int] NULL,
 CONSTRAINT [PK__ImageIte__3213E83FA984C23C] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Location]    Script Date: 2/22/2019 10:56:47 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Location](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[address] [nvarchar](max) NULL,
	[email] [varchar](255) NULL,
	[phone] [varchar](50) NULL,
 CONSTRAINT [PK__Location__3213E83FD59DA48E] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PriceDetail]    Script Date: 2/22/2019 10:56:47 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PriceDetail](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[applyDate] [date] NULL,
	[price] [float] NOT NULL,
	[serviceItemId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ServiceItem]    Script Date: 2/22/2019 10:56:47 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ServiceItem](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[description] [nvarchar](max) NULL,
	[name] [nvarchar](255) NOT NULL,
	[price] [float] NULL,
	[priceDescription] [nvarchar](max) NULL,
	[serviceType] [varchar](255) NULL,
	[shortDescription] [nvarchar](max) NULL,
	[slug] [varchar](max) NULL,
	[type] [nvarchar](255) NULL,
	[isActive] [bit] NULL,
 CONSTRAINT [PK__ServiceI__3213E83FB06EEEB7] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[Account] ([username], [password]) VALUES (N'admin', N'admin')
SET IDENTITY_INSERT [dbo].[Appointment] ON 

INSERT [dbo].[Appointment] ([id], [address], [email], [name], [note], [phone], [isNew]) VALUES (1, N'Gia Lai', N'thanh@gmail.com', N'Thanh', N'nothing', N'0123456789', NULL)
INSERT [dbo].[Appointment] ([id], [address], [email], [name], [note], [phone], [isNew]) VALUES (2, N'Binh Duong', N'phu@gmail.com', N'Phu', N'nothing', N'0123456789', NULL)
INSERT [dbo].[Appointment] ([id], [address], [email], [name], [note], [phone], [isNew]) VALUES (3, N'Binh Chanh', N'dat@gmail.com', N'Dat', N'nothing', N'0123456789', NULL)
INSERT [dbo].[Appointment] ([id], [address], [email], [name], [note], [phone], [isNew]) VALUES (4, N'Binh Dinh', N'thuc@gmail.com', N'Thuc', N'nothing', N'0123456789', NULL)
SET IDENTITY_INSERT [dbo].[Appointment] OFF
ALTER TABLE [dbo].[ImageItem]  WITH CHECK ADD  CONSTRAINT [FKofohj8r2v11kfngwcb2b41bk3] FOREIGN KEY([serviceItemId])
REFERENCES [dbo].[ServiceItem] ([id])
GO
ALTER TABLE [dbo].[ImageItem] CHECK CONSTRAINT [FKofohj8r2v11kfngwcb2b41bk3]
GO
ALTER TABLE [dbo].[PriceDetail]  WITH CHECK ADD  CONSTRAINT [FK2lmyyvrb5trdhf326ux2scuua] FOREIGN KEY([serviceItemId])
REFERENCES [dbo].[ServiceItem] ([id])
GO
ALTER TABLE [dbo].[PriceDetail] CHECK CONSTRAINT [FK2lmyyvrb5trdhf326ux2scuua]
GO
USE [master]
GO
ALTER DATABASE [thanhtamluxury] SET  READ_WRITE 
GO
