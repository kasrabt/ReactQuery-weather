import axios from "axios";
export const FetchMydata = (ct) => async () => {

const response = await axios({
    method: "get",
    url: `https://api.openweathermap.org/data/2.5/weather?q=${ct}&units=imperial&appid=5a8215f577076017ce8c00cf0fa1d07a`,
  })
   
  const data  = response.data ; 
  return data ;
 

}
