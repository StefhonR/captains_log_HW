const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

class Show extends React.Component {
    render() {
        const { log } = this.props
        return(
            <div>
                <h1 style={myStyle}>Log Info</h1>
                <h2>Title: {log.title}</h2>
                <h3>Entry: {log.entry}</h3>
                <h3>Is the Ship Broken: {log.shipIsBroken.toString().charAt(0).toUpperCase() + log.shipIsBroken.toString().slice(1)}</h3>
                <h3>Log Entry Date: {log.createdAt.toLocaleString()}</h3>
                <nav>
                    <a href='/logs'>back</a> &emsp; <a href={`/logs/${log._id}/edit`}>EDIT DESTINATION</a>
                </nav> 
            </div>
        )
    }
}

module.exports = Show