import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProfileContext from '../../../context/profile/profileContext';

const CardItem = ({ profile }) => {
    const profileContext = useContext(ProfileContext);
    const { deleteProfile, setCurrent, clearCurrent } = profileContext;

    const { firstname, lastname, city, zipcode, skillshare, skillwanted, bio } = profile;

    const onDelete = () => {
        deleteContact(_id);
        clearCurrent();
    };

    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {name}{' '} <span style={{ float: 'right' }} 
                    className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary' )}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </h3>
            <ul className="list">
                {fistname && ( 
                    <li>
                        <i className='fas fa-envelope-open' /> {firstname}
                    </li>
                )}
                {city && (
                    <li>
                        <i className='fas fa-phone' /> {city}
                    </li>
                )}
                {zipcode && (
                    <li>
                        <i className='fas fa-phone' /> {zipcode}
                    </li>
                )}{lastname && (
                    <li>
                        <i className='fas fa-phone' /> {lastname}
                    </li>
                )}
            </ul>
            <p>
                <button className="btn btn-dark btn-sm" onClick={() => setCurrent(profile)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>

            </p>
        </div>
    )
};

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
};

export default ContactItem;
}