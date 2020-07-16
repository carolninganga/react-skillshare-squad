import React, { Component } from 'react';
import styles from './Chat.module.css';

class Chat extends Component {
    render() {
        return (
            <div class={styles.chatContainer}>
            <header class={styles.chatHeader}>
                <h1>Chat Room</h1>
                <a href="index.html" class="btn">Leave Room</a>
            </header>
            <main class={styles.chatMain}>
                <div class={styles.chatSidebar}>
                <h3><i class="fas fa-comments"></i> Room Name:</h3>
                <h2 id="room-name"></h2>
                <h3><i class="fas fa-users"></i> Users</h3>
                <ul id="users"></ul>
                </div>
                <div class={styles.chatMessages}></div>
            </main>
            <div class={styles.chatFormContainer}>
                <form id="chatForm">
                <input
                    id="msg"
                    type="text"
                    placeholder="Enter Message"
                    required
                    autocomplete="off"
                />
                <button class="btn"><i class="fas fa-paper-plane"></i> Send</button>
                </form>
            </div>
        </div> 
        )
    }
}


export default Chat;