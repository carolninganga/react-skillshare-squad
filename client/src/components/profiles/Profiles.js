import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ProfileContext from '../../context/profile/ProfilesContext';
import Spinner from '../layouts/Spinner';
import ProfileItem from './ProfileItem';


const Profiles = () => {
    const profileContext = useContext(ProfileContext);

    const { profiles, filtered, getProfiles, loading } = profileContext;

    useEffect(() => {
        getProfiles()
        //eslint-disable-next-line
    }, []);

    if(profiles !== null && profiles.length === 0 && !loading) {
        return <h4>Please add a profile</h4>
    }



    return (
        <Fragment>
            {profiles !== null && !loading ? (
                <TransitionGroup>
            {filtered !== null
             ? filtered.map(profile => (
                 <CSSTransition key={profile._id} timeout={500} classNames="item">
                <ProfileItem profile={profile} />
                </CSSTransition>
             ))
            : profiles.map(profile => (
                <CSSTransition key={profile._id} timeout={500} classNames="item">
                <ProfileItem profile={profile} />
                </CSSTransition>
            ))}
            </TransitionGroup> 
            ) : <Spinner />}
                
        </Fragment>
    );
};

export default Profiles