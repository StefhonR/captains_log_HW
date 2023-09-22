const React = require('react')

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
  }

class Index extends React.Component {
  render() {
    const { logs } = this.props
    return(
      <div>
        <h1 style={myStyle}>Log List</h1>
        <nav>
          <a href="/logs/new">Add a new log</a>
        </nav>
        <ul>
        {
          logs.map((log, i) => {
            return (
              <li key={i}>
                <a href={`/logs/${log._id}`}>
                  {log.title.charAt(0).toUpperCase() + log.title.slice(1)}
                </a>
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}

module.exports = Index