import axios from 'axios';

class RestClient{
 static GetRequest(getUrl){
   return axios.get(getUrl).then(function (response) {
        // handle success
        return response.data;
        
    }).catch(function (error) {
        // handle error
        return null;
    });
 }
}

export default RestClient;