import React, { Component }from 'react';
import ProfileContext from '../../context/profile/profileContext';
class Detail extends Component {
    render() {
        return (
            <div className="container detailContainer">
            <div className="text-center">
              {/* <img className="img-avatar rounded-circle" src="https://api.adorable.io/avatars/285"/> */}
              <h1 className="userName">{this.props.location.query.firstname} {this.props.location.query.lastname}</h1>
              {/* <p className="lead">Programmers</p> */}
            </div>
            <ul className="list-unstyled text-muted">
              <li id="location"><i className="fas fa-map-marker-alt" aria-hidden="true"></i>{this.props.location.query.city} {this.props.location.query.zipcode}</li>
              <a href="#"><li id="contactEmail"><i className="fas fa-link" aria-hidden="true"></i> </li></a>
              <li><i className="far fa-calendar-alt" aria-hidden="true"></i> Joined a year ago</li>
            </ul>
            <p id="bio">{this.props.location.query.bio}</p>
          </div>
        )
    }
}
export default Detail;

