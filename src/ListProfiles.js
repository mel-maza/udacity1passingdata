import React, { Component } from 'react';

class ListProfiles extends React.Component {
	render(){
    	 return (
            <ol className='profile-list'>
                {this.props.profiles.map( (profile) => (
                    <li key={profile.id} className='profile-list-item'>
						{`${this.props.users[profile.userID].name}\'s favorite movie is "${this.props.movies[profile.favoriteMovieID].name}."`}
                    </li>
                ))}           
            </ol>
        )
    }
}

export default ListProfiles