import React, { useState } from 'react'
import { SectionTitle } from '../shared/styles'
import * as S from "./styles"
import {sendEmail} from '../../helper'
import {ReactComponent as Twitter} from '../../assets/icon/twitter.svg'
import {ReactComponent as Linkedin} from '../../assets/icon/linkedin.svg'
import {ReactComponent as Facebook} from '../../assets/icon/facebook.svg'
import {ReactComponent as Github} from '../../assets/icon/github.svg'
import { initial, } from './types'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface Props {
    
}
export const Contact = (props: Props) => {
  
const [state, setstate] = useState(initial)

const handleChange =(e:any)=>{
  const {name,value} = e.target
  setstate(state=>Object.assign({...state,[name]:value}));
  }
    return (
    <S.ContactSection>
      <div className="container">
        <SectionTitle>
          <h2>Contact</h2>
        </SectionTitle>
        <S.Row className="row">

          <div className="col-lg-4 col-md-4">
            <S.ContactAbout>
              <h3>Let's Connect</h3>
              <p>Connect with me on these platform or shoot me a mail.  I would be glad to answer your question and set up a meeting with you </p>
              <S.SocialLinks>
                <a href="#twitter" className="twitter"> <Twitter/> </a>
                <a href="#facebook" className="facebook"><Facebook/> </a>
                <a href="#instagram" className="github"><Github/></a>
                <a href="#linkedin" className="linkedin"><Linkedin/></a>
              </S.SocialLinks>
            </S.ContactAbout>
          </div>
         
          <div className="col-lg-4 col-md-8">
            
            <S.Form onSubmit={e=>sendEmail(e,setstate)}>
              <div className="form-group" >
                <input type="text" name="name" className="form-control"  value={state.name} id="username" placeholder="Your Name" required  onChange={handleChange}/>
              </div>
              <div className="form-group mt-3">
                <input type="email" className="form-control" name="email" value={state.email} id="email" placeholder="Your Email" required  onChange={handleChange}/>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" value={state.subject} id="subject" placeholder="Subject" required  onChange={handleChange}/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" id="message" value={state.message} rows={5} placeholder="Message" required  onChange={handleChange}></textarea>
              </div>
              <div className="text-center"><input type="submit" value="Send Message" /></div>
             
            </S.Form>
             <ToastContainer />
          </div>

        </S.Row>

      </div>
    </S.ContactSection>

    )
}

