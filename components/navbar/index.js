import React from "React";
import useSWR from "swr";

import checkLogin from "../../utils/checkLogin";
import storage from "../../utils/storage";

const Navbar = () => {
    
    const { data: currentUser } = useSWR("user", storage);
    const isLoggedIn = checkLogin(currentUser);

    const handleClick = React.useCallback(() => setPage(0), []);

    return (
        <nav>
            
        </nav>
    );
}