const axios = require('axios');
const qs = require('qs');

const loginData = {
  login: 'dispatch@eplus.co.ke',
  password: 'di0080'
};

// Make a POST request to the login page to log in
axios.post('https://hospitals.nhif.or.ke/nhifwww-mas/hosp-app/index.html', qs.stringify(loginData))
  .then(response => {
    console.log(response.headers)
    // If login was successful, you can get the cookies from the response headers
    const cookies = response.headers['set-cookie'];

    // Set the cookies in the headers for the next request
    const config = {
      headers: {
        Cookie: cookies.join(';')
      }
    };

    // Make a POST request to the page you want to navigate to, passing in the data you want to post in FormUrlEncodedContent format
    const postData = {
      ntype: 'ID/PP No',
      number: '8495085'
    };
    axios.post('https://hospitals.nhif.or.ke/nhifwww-mas/hosp-app/member/meminfo.html', qs.stringify(postData), config)
      .then(response => {
        // Handle the response here
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  })
  .catch(error => {
    console.log(error);
  });
