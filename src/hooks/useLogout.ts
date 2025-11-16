const useLogout = () => {

    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }

    return { logout }
};

export default useLogout