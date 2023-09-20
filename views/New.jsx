const React = require("react")



class New extends React.Component {
  render() {
    return (
      <div>
        <h1>ADD LOG</h1>
        

        <form action="/logs" method="POST">
          Title: <input type="text"  name="title" /> <br />
          Entry: <input type="textarea" name="entry" /> <br />
          Is the Ship Broken?<input type="checkbox" name="shipIsBroken" /> 
          <input type="submit" value="Log" />
        </form>
        <nav>
          <a href="/logs">Back</a>
        </nav>
      </div>
    )
  }
}

module.exports = New