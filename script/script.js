var app = new Vue ({
  el: "#app",

  data: {
    listaMail:[],
  },

  mounted: function () {

    for (var i = 0; i < this.listaMail.length < 10; i++) {

      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then( (response) => {
        const result = response.data;
        let email = result.response;

        this.listaMail.push(email);
        console.log(this.listaMail);
      });
    };
  }
})
