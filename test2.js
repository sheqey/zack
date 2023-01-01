// // const axios = require('axios');
// // const qs = require('qs');
// // const cheerio = require('cheerio')
// // const loginData = {
// //   login: 'dispatch@eplus.co.ke',
// //   password: 'di0080'
// // };

// // // Make a POST request to the login page to log in
// // axios.post('https://hospitals.nhif.or.ke/nhifwww-mas/hosp-app/index.html', qs.stringify(loginData))
// //   .then(response => {
  
// //     // If login was successful, you can get the cookies from the response headers
// //     const cookies = response.headers['set-cookie'];

// //     // Set the cookies in the headers for the next request
// //     const config = {
// //       headers: {
// //         Cookie: cookies.join(';')
// //       }
// //     };

// //     // Make a POST request to the page you want to navigate to, passing in the data you want to post in FormUrlEncodedContent format
// //     const postData = {
// //       ntype: 'ID/PP No',
// //       number: '8495085'
// //     };
// //     axios.post('https://hospitals.nhif.or.ke/nhifwww-mas/hosp-app/member/meminfo.html', qs.stringify(postData), config)
// //       .then(response => {
// //         // Handle the response here
        
       

// // // Parse the HTML from the response
// // const $ = cheerio.load(response.data);

// // // Use a CSS selector to select the p element
// // const pElement = $('body > div.shiftcontainer > div > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table:nth-child(4) > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(2) > td > p');


// // // Extract the text from the p element
// // const text = pElement.text();

// // console.log (text)
// //       })
// //       .catch(error => {
// //         console.log(error);
// //       });
// //   })
// //   .catch(error => {
// //     console.log(error);
// //   });


// const axios = require('axios');
// const qs = require('qs');
// const cheerio = require('cheerio')
// const loginData = {
//   login: 'dispatch@eplus.co.ke',
//   password: 'di0080'
// };

// // Make a POST request to the login page to log in
// axios.post('https://hospitals.nhif.or.ke/nhifwww-mas/hosp-app/index.html', qs.stringify(loginData))
//   .then(response => {
  
//     // If login was successful, you can get the cookies from the response headers
//     const cookies = response.headers['set-cookie'];

//     // Set the cookies in the headers for the next request
//     const config = {
//       headers: {
//         Cookie: cookies.join(';')
//       }
//     };

//     // Make a POST request to the page you want to navigate to, passing in the data you want to post in FormUrlEncodedContent format
//     const postData = {
//       ntype: 'ID/PP No',
//       number: '8495085'
//     };
//     axios.post('https://hospitals.nhif.or.ke/nhifwww-mas/hosp-app/member/meminfo.html', qs.stringify(postData), config)
//       .then(response => {
//         // Handle the response here
        
       

// // Parse the HTML from the response
// const $ = cheerio.load(response.data);

// // Use a CSS selector to select the p element
// const pElement = $('body > div.shiftcontainer > div > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table:nth-child(4) > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(2) > td > p');


// // Extract the text from the p element
// const text = pElement.text();

// console.log (text)
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   })
//   .catch(error => {
//     console.log(error);
//   });


var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
 
fetch('https://imdb-api.com/english/API/Title/k_ber7cw45/tt12193804', requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));