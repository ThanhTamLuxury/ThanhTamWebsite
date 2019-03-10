import { combineReducers } from 'redux';
import homePage from './HomePage/reducer';
import albumsPage from './AlbumsPage/reducer';
import dressesPage from './DressesPage/reducer';
import videosPage from './VideosPage/reducer';
import adminPage from './AdminPage/reducer';
const appReducers = combineReducers({
    homePage,
    albumsPage,
    dressesPage,
    videosPage,
    adminPage
});

export default appReducers;