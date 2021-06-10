const app = Vue.createApp({
  data(){
    return {
      courseGoal:'Finish the course and learn Vue',
      vueLink: 'https://vuejs.org'
    };
  },
  methods: {
    outputGoal(){
      const randomNumber = Math.random();
      if(randomNumber < 0.5) {
        return 'Learn vue ';
      } else {
        return 'Master vue!';
      }
    }
  }
});

app.mount('#user-goal');
