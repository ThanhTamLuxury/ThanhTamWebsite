import React from 'react';
import * as Constant from './../constants/Constant';
import HomePage from '../pages/HomePage';
import AlbumDetailsPage from '../pages/AlbumDetailsPage';
import DressDetailsPage from '../pages/DressDetailsPage';
import ServicesPage from '../pages/ServicesPage';
import ServiceListPricePage from '../pages/ServiceListPricePage';
import AdminPage from '../pages/AdminPage';
import LoginContainer from '../containers/AdminPage/LoginContainer';
import ServiceAddPage from '../pages/ServiceAddPage';
import ServiceEditPage from '../pages/ServiceEditPage';
import AdminViewListPage from '../pages/AdminViewListPage';
import ServiceEditPricePage from '../pages/ServiceEditPricePage';
import AdminBannerPage from '../pages/AdminBannerPage';
import AdminSearchPage from '../pages/AdminSearchPage';
import NotFoundPage from '../pages/NotFoundPage';
import AdminChangePasswordPage from '../pages/AdminChangePasswordPage';




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
        main: AdminPage,
        isPrivate: true,
    },
    {
        path: '/admin/views/:serviceType',
        exact: false,
        main: AdminViewListPage,
        isPrivate: true,
    },
    {
        path: '/admin/search/:serviceType/search_query=:searchValue',
        exact: false,
        main: AdminSearchPage,
        isPrivate: true,
    },
    {
        path: '/admin/edit/banner',
        exact: false,
        main: AdminBannerPage,
        isPrivate: true, 
    },
    {
        path: '/admin/add/:serviceType',
        exact: false,
        main: ServiceAddPage,
        isPrivate: true, 
    },
    {
        path: '/admin/edit/:serviceType/:id',
        exact: false,
        main: ServiceEditPage,
        isPrivate: true, 
    },
    {
        path: '/admin/price/:serviceType/:id',
        exact: false,
        main: ServiceEditPricePage,
        isPrivate: true, 
    },
    {
        path: '/notfound',
        exact: false,
        main: NotFoundPage,
        isPrivate: false, 
    },
    {
        path: '/admin/change-password',
        exact: false,
        main: AdminChangePasswordPage,
        isPrivate: false, 
    }
];

export default routes;