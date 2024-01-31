import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from 'react-scroll'

function Footer() {
  return (
    <div className='footer-container'>

            <div className="footer-left">
                     <div className="footer-title">ABOUT ONESCHOOL</div>
                     <div className="footer-left-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro consectetur ut hic ipsum et veritatis corrupti. Itaque eius soluta optio dolorum temporibus in, atque, quos fugit sunt sit quaerat dicta.</div>

            </div>

            <div className="footer-mid">
                    <div className="footer-title">LINKS</div>
                    <div className="footer-mid-desc">
                    <Link to="home" smooth={true} duration={500} offset={-70}>Home</Link>
                    <Link to="courses" smooth={true} duration={500} offset={-70}>Courses</Link>
                    <Link to="programs" smooth={true} duration={500} offset={-70}>Programs</Link>
                    <Link to="teachers" smooth={true} duration={500} offset={-70}>Teachers</Link>
                  
                    </div>
            </div>


            <div className="footer-right">
                     <div className="footer-title">SUBSCRIBE</div>
                     <div className="footer-right-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt incidunt iure iusto architecto? Numquam, natus?</div>
                     <div className="flex w-full max-w-sm items-center space-x-2 subsft">
                             <Input type="email" placeholder="Email" />
                            <Button type="submit">Subscribe</Button>
                                </div>
            </div>

    </div>
  )
}

export default Footer