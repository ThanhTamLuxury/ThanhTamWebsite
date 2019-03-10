import React from 'react';
import HomePage from '../pages/HomePage';
import AlbumsPage from '../pages/AlbumsPage';
import AlbumDetailsPage from '../pages/AlbumDetailsPage';
import DressesPage from '../pages/DressesPage';
import DressDetailsPage from '../pages/DressDetailsPage';
import VideosPage from '../pages/VideosPage';
import AlbumsPricePage from './../pages/ServicesPricePage/AlbumsPricePage'
import InclusivePricePage from './../pages/ServicesPricePage/InclusivePricePage'
import VideosPricePage from './../pages/ServicesPricePage/VideosPricePage'

import LoginPage from '../pages/LoginPage';
import AdminPage from '../pages/AdminPage';
const routes = [
    {
        path: '/',
        exact: true,
        main: HomePage
    },
    {
        path: '/albums',
        exact: true,
        main: AlbumsPage
    },
    {
        path: '/albums/:id',
        exact: false,
        main: AlbumDetailsPage
    },
    {
        path: '/ao-cuoi',
        exact: true,
        main: DressesPage
    },
    {
        path: '/ao-cuoi/:id',
        exact: false,
        main: DressDetailsPage
    },
    {
        path: '/videos',
        exact: true,
        main: VideosPage
    },
    {
        path: '/bang-gia/albums',
        exact: false,
        main: AlbumsPricePage
    },
    {
        path: '/bang-gia/videos',
        exact: false,
        main: VideosPricePage
    },
    {
        path: '/bang-gia/tron-goi',
        exact: false,
        main: InclusivePricePage
    },
    {
        path: '/login',
        exact: true,
        main: LoginPage
    },
    {
        path: '/admin',
        exact: true,
        main: AdminPage
    }
];

export default routes;