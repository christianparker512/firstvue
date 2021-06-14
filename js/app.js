const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: ''
    };
  },
  watch: {
    name(value) {
      if (value === '') {
        this.fullname = '';
      } else {
        this.fullname = value + " " + 'Parker';
      }
    },
  },
  computed: {
    // fullname(){
    //   console.log('Running again...');
    //   if(this.name ===''){
    //     return '';
    //   }
    //   return this.name + ' ' + 'Parker';
    // },
  },
  methods: {
    naame(value) {
      if(value === ''){
        this.fullname = '';
      } else{
        this.fullname=value + ' '+ 'Parker';
      }
    },
    lastName(value){
      if (value ===''){
        this.fullname = "";
      } else {
        this.fullname=value + ' '+ 'Parker';
      }
    }
    outputFullname(){
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Parker';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name='';
    }
  }
});

app.mount('#events');
