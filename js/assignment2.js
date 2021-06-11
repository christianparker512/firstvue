const app = Vue.createApp ({
  data() {
    return {
      textAllert: 'Hello Vue',
      textOuput: "OUTPUT",
      textOuput2: "",
      textFin: "OUTPUT"

    };
  },
  methods: {
    showAllert () {
      alert(this.textAllert);
    },
    setOutput(event) {
      this.textOuput = event.target.value;
    },
    setOutput2(event) {
      this.textOuput2 = event.target.value;
    },
    finText() {
      this.textFin = this.textOuput2;
    }
  }
});

app.mount('#assignment');
