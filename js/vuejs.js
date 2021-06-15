const app = Vue.createApp({
  date() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false
    };
  },
  methods: {
    bosSelected(box) {
      if (box === 'A') {
        this.boxASelected = !this.boxASelected;
      } else if (box === 'B') {
        this.boxBSelected = !this.boxBSelected;
      } else if (box === 'C') {
        this.boxCSelected = !this.boxCSelected
      }
    }
});
app.mount('#styling');
