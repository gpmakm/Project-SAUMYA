import React from 'react'

const ProfessorRegistration = () => {
  return (
    <form action='http://localhost:3000/professor-registration' method='POST'>
        <label htmlFor="userName">Enter your name</label>
        <div>
            <input type="text" name="userName" id="userName" className="field" />
        </div>
        <label htmlFor="subject">What is your subject</label>
        <div>
          <input type="text" name="subject" id="subject" className="field" />
        </div>
        <label htmlFor="password">Create your password</label>
        <div>
          <input type="password" name="password" id="password" className="field" />
        </div>
        <button>Register me</button>
    </form>
  )
}

export default ProfessorRegistration