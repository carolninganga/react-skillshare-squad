import React, { Component } from 'react'
import styles from './Room.module.css'

class Room extends Component {
    render() {
        return (
			<main className={styles.joinMain}>
				<form action="chat.html">
					<div className="input-group">
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Enter username..."
							required
						/>
					</div>


                    <div class="input-group">
                        <select class="custom-select room" name="room" id="inputGroupSelect04" aria-label="select with button addon">
                            <option selected>Choose room...</option>
							<option value="Truth or Dare">Truth or Dare</option>
							<option value="Leetcode">Leetcode</option>
							<option value="Cooking">Cooking</option> 
							<option value="Casual">Casual</option> 
                        </select>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="submit">Join Chat</button>
                        </div>
                        </div>
				</form>
		</main>

        )
    }
}


export default Room;