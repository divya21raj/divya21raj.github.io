$.ajax('http://ip-api.com/json')
    .then(
      function success(response) {
          console.log('User\'s Location Data is ', response);
          console.log('User\'s Country', response.country);

      },

      function fail(data, status) {
          console.log('Request failed.  Returned status of',
                      status);
      }
    );