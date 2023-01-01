// // //  const axios = require('axios')
// // // // const { URLSearchParams } = require('url')

// // // // const data = {
// // // //   login: 'dispatch@eplus.co.ke',
// // // //   password: 'di0080'
// // // // }


// // // // const params = new URLSearchParams()
// // // // for (const [key, value] of Object.entries(data)) {
// // // //   params.append(key, value)
// // // // }
// // // // axios.post('https://hospitals.nhif.or.ke/nhifwww-mas/hosp-app/index.html', params).then(response => {
// // // //   console.log(response.data)

 
  

// // // //   const data = {
// // // //     name: 'John',
// // // //     age: 30
// // // //   };
  
// // // //   axios.post('/form', data, {
// // // //     headers: {
// // // //       'Content-Type': 'application/x-www-form-urlencoded',
// // // //       'Cookie': 'session=abc123' // or 'Authorization: Bearer <access_token>'
// // // //     }
// // // //   });


// // // // })


// // // // const axios = require("axios");
// // // async function getData() {
// // //   const response = await axios.get("https://api.kenyabuzz.com/mvDetailsBySlg/whitney-houston-i-wanna-dance-with-somebody");
// // //   const movies2 = response.data
// // //   console.log(movies2.cast_data); 
// // //  // const movie = movies.filter(movie => movie.movie_id === 837);
// // //   //


 
// // // }

// // // getData();

// // //   // data2.forEach(movie => {
// // //   //   console.log(movie.movie_id,movie.name,movie.genre,movie.featured)
// // //   // })

// //  const axios = require('axios')
// // // const { URLSearchParams } = require('url')

// // // const data = {
// // //   login: 'dispatch@eplus.co.ke',
// // //   password: 'di0080'
// // // }


// // // const params = new URLSearchParams()
// // // for (const [key, value] of Object.entries(data)) {
// // //   params.append(key, value)
// // // }
// // // axios.post('https://hospitals.nhif.or.ke/nhifwww-mas/hosp-app/index.html', params).then(response => {
// // //   console.log(response.data)

 
  

// // //   const data = {
// // //     name: 'John',
// // //     age: 30
// // //   };
  
// // //   axios.post('/form', data, {
// // //     headers: {
// // //       'Content-Type': 'application/x-www-form-urlencoded',
// // //       'Cookie': 'session=abc123' // or 'Authorization: Bearer <access_token>'
// // //     }
// // //   });


// // // })


// const axios = require("axios");
// async function getData() {
//   const response = await axios.get("https://imdb-api.com/en/API/FullCast/k_ber7cw45/tt12193804");
//   const movies2 = response
//   console.log(movies2.fullTitle); 
//  // const movie = movies.filter(movie => movie.movie_id === 837);
//   //


 
// }

// getData();

// //   // data2.forEach(movie => {
// //   //   console.log(movie.movie_id,movie.name,movie.genre,movie.featured)
// //   // })

//  const axios = require('axios')
// // const { URLSearchParams } = require('url')

// // const data = {
// //   login: 'dispatch@eplus.co.ke',
// //   password: 'di0080'
// // }


// // const params = new URLSearchParams()
// // for (const [key, value] of Object.entries(data)) {
// //   params.append(key, value)
// // }
// // axios.post('https://hospitals.nhif.or.ke/nhifwww-mas/hosp-app/index.html', params).then(response => {
// //   console.log(response.data)

 
  

// //   const data = {
// //     name: 'John',
// //     age: 30
// //   };
  
// //   axios.post('/form', data, {
// //     headers: {
// //       'Content-Type': 'application/x-www-form-urlencoded',
// //       'Cookie': 'session=abc123' // or 'Authorization: Bearer <access_token>'
// //     }
// //   });


// // })


const axios = require("axios");
async function getData() {
  const response = await axios.get("https://api.kenyabuzz.com/mvDetailsBySlg/whitney-houston-i-wanna-dance-with-somebody");
  const movies2 = response.data.data
  let cast = movies2.cast_data.crew;
  //console.log(movies2.api_data.production_countries[0].name)
  for (let i = 0; i < cast.length; i++) {
    console.log(cast[i].department);
    console.log(cast[i].name);
  }
  // movies2.api_data.genres.forEach(element => {
  //   console.log(element.name)
  // });
 // const movie = movies.filter(movie => movie.movie_id === 837);
  //


 
}

getData();

//   // data2.forEach(movie => {
//   //   console.log(movie.movie_id,movie.name,movie.genre,movie.featured)
//   // })

