import { ConstructionOutlined } from "@mui/icons-material";
import axios from "axios";
const API_URL = "/api/auth/";
const API_book = "/hotel-booking/";
const API_rewards = "/";
const API_searchHotel = "/api/searchHotel/";


//axios.defaults.proxy.host = "http://localhost"
//axios.defaults.proxy.port = "8086"

class AuthService {

  postCoinPrediction(email, coin, date, price, more){
    console.log("Posting Prediction Data")
    return axios.post("http://localhost:8585/users/setTransactionDetail",{
      email,
      coin,
      date,
      price,
      more
    })
    .then(response =>{
      return response
    })
  }

  getPrediction(email){
    console.log(email)
    return axios
    .post("http://localhost:8585/users/getUpdate",{
      "email":email
    }).then(response => {
              console.log(response)
               return response;
      })
  }

  setPrediction(email, coin, price, time, status){
    console.log("Set update")
    return axios
    .post("http://localhost:8585/users/setUpdate",{
      "email":email,
      "coin":coin,
      "status":status
    }).then(response => {
              console.log(response)
              //updateTransactionTable(email, coin ,price, time, status)
              return response;
    })
  }

  updateTransactionTable(email, coin ,price, time, status){
    console.log("Set update")
    return axios
    .post("http://localhost:8585/transaction/update",{
      "email":email,
      "coin":coin,
      "price":price,
      "date":time,
      "status":status
    }).then(response => {
              console.log(response)
              return response;
    })
  }

  getTransactions(email){
    console.log("Get Transactions")
    return axios
    .post("http://localhost:8585/transaction/getDetails",{
      "email":email,
    }).then(response => {
              console.log(response)
              return response;
    })
  }
}

export default new AuthService();