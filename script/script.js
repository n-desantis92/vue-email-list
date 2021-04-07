var app = new Vue ({
  el: "#app",

  data: {
    listaMail:[],
  },

  mounted: function () {

    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then( (response) => {
        const result = response.data;
        let email = result.response;
        console.log(email);
        console.log(this.listaMail.length);
        for (var i = 0; this.listaMail.length < 10; i++) {
          if (!(this.listaMail.includes(email))) {
            this.listaMail.push(email);
          };
          console.log(this.listaMail);
        };
      });
  }
})
