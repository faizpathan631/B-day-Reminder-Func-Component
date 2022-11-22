import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReminderApp from './Birthday-Reminder-Functional-component/App'

function Routing() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/ReminderApp'>B'day Remainder App</Link>
          </li>
        </ul>
        <hr />
        <Route path='/ReminderApp' component={ReminderApp} />
      </div>
    </Router>
  )
}

export default Routing
