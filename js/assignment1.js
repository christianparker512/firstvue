const app = Vue.createApp({
  data() {
    return {
      author: {
        name: "Christian Parker",
        age: this.calculateAge(1970, 8, 16),
        favoriteNumber: this.getFavoriteNumber(),
      },
      imageLink: "https://www.wideopenpets.com/wp-content/uploads/2019/12/Texas-Longhorn-Cow-Facts.png",
    };
  },
  methods: {
    sayHello() {
      return "hello";
    },
    calculateAge(birthYear, birthMonth, birthDay) {
      const birthDate = new Date(birthYear, birthMonth, birthDay);
      const differInMilliseconds = Date.now() - birthDate.getTime();
      const ageDate = new Date(differInMilliseconds);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    },
    getFavoriteNumber() {
      return Math.random();
    },
  },
});
app.mount("#assignment");
