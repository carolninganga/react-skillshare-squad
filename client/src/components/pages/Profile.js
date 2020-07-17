import React, { useContext, Component }from 'react';
import ProfileContext from '../../context/profile/profileContext';
import axios from 'axios';
class Profile extends Component {
    state = {
        firstname: "",
        lastname: "",
        city: "",
        zipcode: "",
        skillshare: "",
        skillwanted: "",
        bio: ""
    }
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        const profileObj = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            city: this.state.city,
            zipcode: this.state.zipcode,
            skillshare: this.state.skillshare,
            skillwanted: this.state.skillwanted,
            bio: this.state.bio
        }
        console.log(profileObj)
        axios.post('/api/profile',profileObj)
        this.setState({
            firstname: "",
            lastname: "",
            city: "",
            zipcode: "",
            skillshare: "",
            skillwanted: "",
            bio: ""
        })
    } 
    render() {
        return (
        <div class="container">
        <h3 class="text-center mt-3">Join Us and Grow Your Skills Today</h3>
        <form id="survey-form">
            <div class="row">
            <div class="form-group col">
                <label id="firstname-label" for="name">First Name</label>
                <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleInputChange} id="firstname" class="form-control" placeholder="Enter your first name" required />
            </div>
            <div class="form-group col">
                <label id="lastname-label" for="name">Last Name</label>
                <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleInputChange} id="lastname" class="form-control" placeholder="Enter your last name" required />
            </div>
            </div>
            <div class="row">
            <div class="form-group col">
                <label id="city-label" for="city">City</label>
                <input type="text" name="city" value={this.state.city} onChange={this.handleInputChange} id="city" class="form-control" placeholder="Enter Your City Location" />
            </div>
            <div class="form-group col">
                <label id="zipcode-label" for="zipcode">Zip Code</label>
                <input type="text" name="zipcode" value={this.state.zipcode} onChange={this.handleInputChange} id="zipcode" class="form-control" placeholder="Enter your Zip Code" required /> 
            </div>
            </div>
            <div class="row">
            <div class="form-group col">
                <p>Which skill do you want to share?</p>
                <select id="skillshare" name="skillshare" value={this.state.skillshare} onChange={this.handleInputChange} class="form-control" required>
                <option disabled selected value>Select an option</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Node.js">Node.js</option>
                <option value="Project Management">Project Management</option>
                <option value="SQL">SQL</option>
                <option value="Python">Python</option>
                <option value="Skateboarding">Skateboarding</option>
                <option value="Access">Access</option>
                <option value="Excel">Excel</option>
                </select>
            </div>
            <div class="form-group col">
                <p>
                Which skill do you want to learn?
                </p>
                <select id="skillwanted" name="skillwanted" value={this.state.skillwanted} onChange={this.handleInputChange} class="form-control" required>
                <option disabled selected value>Select an option</option>
                <option value="Piano">Piano</option>
                <option value="Excel">Excel</option>
                <option value="Tableau">Tableau</option>
                <option value="Aerobic Dance">Aerobic Dance</option> 
                <option value="Photoshop">Photoshop</option>
                <option value="Presentation">Presentation</option>
                <option value="Writing">Writing</option>
                <option value="English">English</option>
                </select>
            </div>
            </div>
            <div class="form-group">
            <p>Bio</p>
            <textarea id="bio" class="input-textarea form-control" name="bio" value={this.state.bio} onChange={this.handleInputChange} placeholder="Tell us more about you"></textarea>
            </div>
            <div class="form-group center">
            <a href="/members" type="submit" id="submit" onClick={this.handleSubmit} class="btn btn-outline-dark mr-3">
                Submit
            </a>
            <a href="/members" type="submit" class="btn btn-outline-dark">
                Home
            </a>
            </div>
        </form>
        </div>
        )
    }
}
export default Profile;