import React from 'react';
import axios from 'axios';

class EmailSender extends React.Component {
    sendEmails = () => {
        axios.post('http://localhost:8000/send-emails/', {})
            .then(response => alert("Emails sent successfully!"))
            .catch(error => alert("Failed to send emails."));
    }

    render() {
        return (
            <div>
                <button onClick={this.sendEmails}>Send Emails to Students</button>
            </div>
        );
    }
}

export default EmailSender;
