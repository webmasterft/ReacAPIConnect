import axios from "axios";

export default axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/forecast/?q=Quito&&units=metric&appid=55f878d73891e78f48f3d80c558ea579`
});
