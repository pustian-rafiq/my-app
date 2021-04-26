import axios from 'axios';

class RestClient{
 static GetRequest(getUrl){
   return axios.get(getUrl).then( response => {
        // handle success
        return response.data;
        
    }).catch(function (error) {
        // handle error
        return null;
    });
 }

 static PostRequest(postURL,postJsonData){
     let config ={
         headers:{'Content-Type':'application/x-www-form-urlencoded'}//database a data post korte eta use korte hoi
     }
    return axios.post(postURL, JSON.stringify(postJsonData),config).then(response => {
        
         return response.data;
         
     }).catch(function (error) {
  
         return null;
     });
  }
}

export default RestClient;