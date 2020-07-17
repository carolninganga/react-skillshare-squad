import React, { useState, useContext, useEffect } from 'react'
import ProfileContext from '../../context/profile/ProfileContext';


const ProfileForm = () => {
    const profileContext = useContext((ProfileContext));

    const { addProfile, updateProfile, clearCurrent, current } = profileContext;

    useEffect(() => {
        if(current !== null) {
            setProfile(current);
        } else {
            setProfile({
                firstname: "",
                lastname: "",
                city: "",
                zipcode: "",
                skillshare: "",
                skillwanted: "",
                bio: ""
            });
        }
    }, [profileContext, current]);

    const [profile, setProfile] = useState({
        firstname: "",
        lastname: "",
        city: "",
        zipcode: "",
        skillshare: "",
        skillwanted: "",
        bio: ""
    });

    const { name, email, phone, type } = profile;

    const onChange = e =>
        setProfile({ ...profile, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();
        if(current === null) {
            addProfile(profile);
        } else {
            updateProfile(profile);
        }
        setprofile({
            firstname: "",
            lastname: "",
            city: "",
            zipcode: "",
            skillshare: "",
            skillwanted: "",
            bio: ""
        });
    };
    
    const clearAll = () => {
        clearCurrent();
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className='text-primary'>{current ? 'Edit Profile' : 'Add Profile'}</h2>
            <input
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={onChange}
                />
                <input
                type='email'
                placeholder='Email'
                name='email'
                value={email}
                onChange={onChange}
                /> <input
                type='text'
                placeholder='Phone'
                name='phone'
                value={phone}
                onChange={onChange}
                /> 
                <h5>Profile Type</h5> 
                <input type="radio" name="type" value="personal" checked={type === 'personal'} onChange={onChange} />Personal{' '}
                <input type="radio" name="type" value="professional" checked={type === 'professional'} onChange={onChange} /> Professional
                 <div>
                  <input type="submit" value={current ? 'Update Profile' : 'Add Profile'} className="btn btn-primary btn-block" />
                  </div>
                  {current && (
                      <div>
                          <button className="btn btn-light btn-block" onClick={clearAll}>
                              Clear
                          </button>
                      </div>
                  )}
        </form>
    );
};

export default ProfileForm;