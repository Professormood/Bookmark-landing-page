import React from 'react'
import bookmark from '../../../images/logo-bookmark-white.svg'
import facebook from '../../../images/icon-facebook.svg'
import twitter from '../../../images/icon-twitter.svg'

function Footer() {
    return (
        <>
          <footer className=' bg-VeryDarkBlue py-10 '>
           <div className='flex flex-col container mx-auto space-y-10 justify-between items-center md:flex-row  md:space-y-0'>
           <div className='flex flex-col items-center gap-10 md:flex-row md:gap-16'>
                <img src={bookmark} alt="" />
                <ul className='flex flex-col uppercase text-White text-lg gap-4 md:flex-row md:gap-7'>
                    <li><a  className='hover:text-SoftRed transition-all duration-100' href="#">Features</a></li>
                    <li><a  className='hover:text-SoftRed transition-all duration-100' href="#">pricing</a></li>
                    <li><a  className='hover:text-SoftRed transition-all duration-100' href="#">Contact</a></li>
                </ul>
            </div>
            <div className='flex flex-row gap-6'>
                <img  className=' hover:fill-SoftRed' src={facebook} alt="" />
                <img  className=' hover:fill-SoftRed' src={twitter} alt="" />
            </div>
           </div>
            </footer>  
        </>
    )
}

export default Footer
