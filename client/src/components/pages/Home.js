import React, { useContext,useEffect } from 'react'
import Room from '../../components/layout/Room/Room'
import AuthContext from '../../context/auth/authContext'

const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(()=> {
        authContext.loadUser();
        // eslint-disable-next-line
    },[])
    return (
        <div className="grid-2">

        <Room />
     
        </div>
    )
}

export default Home;