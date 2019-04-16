import React from 'react';
import * as Constant from './../constants/Constant';
import HomePage from '../pages/HomePage';
import AlbumDetailsPage from '../pages/AlbumDetailsPage';
import DressDetailsPage from '../pages/DressDetailsPage';
import ServicesPage from '../pages/ServicesPage';
import ServiceListPricePage from '../pages/ServiceListPricePage';
import LoginPage from '../pages/LoginPage';
import AdminPage from '../pages/AdminPage';
import LoginContainer from '../containers/AdminPage/LoginContainer';
const routes = [
    {
        path: '/',
        exact: true,
        main: HomePage
    },
    {
        path: '/albums',
        exact: true,
        main: () => <ServicesPage serviceType={Constant.TYPE_ALBUM} />
    },
    {
        path: '/albums/:id',
        exact: false,
        main: AlbumDetailsPage
    },
    {
        path: '/ao-cuoi',
        exact: true,
        main: () => <ServicesPage serviceType={Constant.TYPE_WEDDING_DRESS} />
    },
    {
        path: '/ao-cuoi/:id',
        exact: false,
        main: DressDetailsPage
    },
    {
        path: '/videos',
        exact: true,
        main: () => <ServicesPage serviceType={Constant.TYPE_VIDEO} />
    },
    {
        path: '/bang-gia/albums',
        exact: false,
        main: () => <ServiceListPricePage serviceType={Constant.TYPE_ALBUM} />
    },
    {
        path: '/bang-gia/videos',
        exact: false,
        main: () => <ServiceListPricePage serviceType={Constant.TYPE_VIDEO} />
    },
    {
        path: '/bang-gia/tron-goi',
        exact: false,
        main: () => <ServiceListPricePage serviceType={Constant.TYPE_FULL_WEDDING_DAY} />
    },
    {
        path: '/login',
        exact: true,
        main: LoginContainer
    },
    {
        path: '/admin',
        exact: true,
        main: AdminPage 
    },
    {
        path: '/admin/services/:serviceType',
        exact: false,
        main: AdminPage
    },
    {
        path: '/admin/services/:serviceType/:id',
        exact: false,
        main : AdminPage
    }
];

export default routes;