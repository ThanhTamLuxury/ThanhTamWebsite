import decode from 'jwt-decode';

export const loggedIn = () => {
    // Checks if there is a saved token and it's still valid
    const token = localStorage.getItem('USER') // GEtting token from localstorage
    return !!token && !isTokenExpired(token) // handwaiving here
}

export const isTokenExpired = (token) => {
    try {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
            return true;
        }
        else
            return false;
    }
    catch (err) {
        return true;
    }
}