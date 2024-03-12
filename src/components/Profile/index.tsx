import React from 'react'
import Profile from '../ui/Profile'
import Logo from '../../app/logo.svg'
import myprof from '../../app/assets/68045075.png'
function index() {
  return (
      <div>
          <Profile about='Co-founder and CTO at Duggup • ex-Staff Engineer Google and ex-DoE Unacademy • Sparking engineering curiosity by writing about System Design and Career Growth • Angel Investor' companyLogo={Logo} currentCompany='Duggup' designation='CEO and Co-founder' image={myprof.src} links='https://www.x.com/AnkitMishraexe'  username='Ankit Mishra' />
    </div>
  )
}

export default index