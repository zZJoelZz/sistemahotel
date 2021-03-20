import axios from 'axios'
import {history} from '../history'

export function login(email,password)
{

var options = {
  method: 'POST',
  url: 'https://hotel.scottbrasil.com.br/api/auth/generate_auth_cookie/',
  params: {username: email, password: password},
  headers: {Authorization: 'Basic am9lbC5mcmVpdGFzc2FudGFuYUBnbWFpbC5jb206OTkwMzM4NTI='}
};

axios.request(options).then(function (response) {
    if(response.data.status === "error"){
        alert("Login inválido");
    }
    else{
      
        localStorage.setItem('dados-usuario',response.data);
        history.push('/');
    }
    
  console.log(response.data);
  
}).catch(function (error) {
 
});
}