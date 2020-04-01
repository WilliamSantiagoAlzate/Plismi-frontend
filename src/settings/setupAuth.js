const isAuth = () => {
    if(localStorage.getItem('usertoken') !== null) {
        return true;
    } else {
        return false;
    }
};

export default isAuth;