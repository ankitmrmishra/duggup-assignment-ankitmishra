import React from 'react'
import Profile from '../ui/Profile'
import Logo from '../../app/logo.svg'
function index() {
  return (
      <div>
          <Profile about='Co-founder and CTO at Duggup • ex-Staff Engineer Google and ex-DoE Unacademy • Sparking engineering curiosity by writing about System Design and Career Growth • Angel Investor' companyLogo={Logo} currentCompany='Duggup' designation='CEO and Co-founder' image={Logo} links='Website' username='Ankit Mishra' />
    </div>
  )
}

export default index