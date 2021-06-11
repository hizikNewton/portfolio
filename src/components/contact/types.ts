export type StateObj = {
    name:string,
    email:string,
    subject:string,
    message:string,
}


export const initial:StateObj = {
    name:'',
    email:'',
    subject:'',
    message:''
  }