import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProfileContext from '../../../context/profile/profileContext';

const CardItem = ({ profile }) => {
    const profileContext = useContext(ProfileContext);
    const { deleteProfile, setCurrent, clearCurrent } = profileContext;

    const { _id, firstname, lastname, city, zipcode, skillshare, skillwanted, bio } = profile;

    const onDelete = () => {
        deleteContact(_id);
        clearCurrent();
    }
}