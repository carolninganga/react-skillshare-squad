const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator/check');
const User = require('../models/User');
const Profile = require('../models/Profile');
//@route  GET api/profiles
//@desc   Get all users profile
//acccess Private
router.get('/', auth, async (req, res) => {
    try {
        const profiles = await Profile.find({ user: req.user.id }).sort({ date: -1 })
        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error")
    }
})
//@route  POST api/profiles
//@desc   Add new profile
//acccess Private
router.post('/', 
// [auth, [
//     check('name','Name is required').not().isEmpty()
// ]
// ]
    async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    } 
    const { firstname, lastname, city, zipcode, skillshare, skillwanted, bio } = req.body;
    console.log(req.body)
    try {
        const newProfile = new Profile({
            firstname,
            lastname,
            city,
            zipcode,
            skillshare,
            skillwanted,
            bio
        });
        const profile = await newProfile.save();
        res.json(profile) 
    } catch(err) {
        console.error(err.message)
        res.status(500).send('Server Error');
    }
})
//@route  UPDATE api/profiles/:id
//@desc   Update profile
//acccess Private
router.put('/:id', auth, async (req, res) => {
    const { firstname, lastname, city, zipcode, skillshare, skillwanted, bio } = req.body;
    // Build profile object
    const profileFields = {};
    if(firstname) profileFields.firstname = firstname;
    if(lastname) profileFields.lastname = lastname;
    if(city) profileFields.city = city;
    if(zipcode) profileFields.zipcode = zipcode;
    if(skillshare) profileFields.skillshare = skillshare;
    if(skillwanted) profileFields.skillwanted = skillwanted;
    if(bio) profileFields.firstname = bio;
    try {
        let profile = await Profile.findById(req.params.id);
        if(!profile) return res.status(404).json({ msg: "Profile not found" });
        // Make sure user owns profile
        if(profile.user.toString()!== req.user.id) {
            return res.status(401).json({ msg: "Not authorized" });
        }
        profile = await Profile.findByIdAndUpdate(req.params.id, 
            { $set: profileFields },
            { new: true });
            res.json(profile)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error');
    }
})
//@route  DELETE api/profiles/:id
//@desc   Delete profile
//acccess Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let profile = await Profile.findById(req.params.id);
        if(!profile) return res.status(404).json({ msg: "Profile not found" });
        // Make sure user owns profile
        if(profile.user.toString()!== req.user.id) {
            return res.status(401).json({ msg: "Not authorized" });
        }
        await Profile.findByIdAndRemove(req.params.id);
            res.json( {msg: 'Profile removed'} )
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error');
    }
})
module.exports = router;