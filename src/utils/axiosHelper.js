import axios from 'axios';

const axiosHelper = axios.create({
  baseURL:
    'https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/'
});
export default axiosHelper;
