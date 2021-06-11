import emailjs from "emailjs-com";
import { Dispatch, FormEvent, SetStateAction } from "react";
import {initial, StateObj} from '../components/contact/types'
import { toast } from 'react-toastify';

const {REACT_APP_SERVICE_ID,REACT_APP_TEMPLATE_ID,REACT_APP_USER_ID} = process.env
export const sendEmail = (e:FormEvent<HTMLFormElement>,cbk:Dispatch<SetStateAction<StateObj>>)=>{
    e.preventDefault();
    let params = {
        email: e.currentTarget.email.value,
        name:e.currentTarget.username.value,
        subject:e.currentTarget.subject.value,
        message:e.currentTarget.message.value

    }
    const {email,name,subject,message} = params
    const templateParams = {
      from_name: name + " (" + email + ")",
      to_name: `Bamidele Isaac `,
      subject: subject,
      message:message
    };

  emailjs
      .send(REACT_APP_SERVICE_ID!,REACT_APP_TEMPLATE_ID!, templateParams,REACT_APP_USER_ID)
      .then(
        function(response) {
          toast.success("Your message has successfully sent!", {
            position: toast.POSITION.BOTTOM_CENTER
          });
          console.log("SUCCESS!", response.status, response.text);
        },
        function(err) {
          toast.error("Your message was not able to be sent");
          console.log('error')
        }
      );
  cbk(initial)
  }