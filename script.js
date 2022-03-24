const apiUrl = 'http://www.colourlovers.com/api/pattern/1451?format=json'

fetch(apiUrl).then(function(response) {
  console.log(response)
  response.json().then(function(data) {
    console.log(data);
  })
})
