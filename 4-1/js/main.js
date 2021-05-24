var app = new Vue({
  el: '#app',
  data: {
      list: [],
      addText: '',
      pattern: ''
  },
  //watchでlistの変更を監視
  watch: {
      list: {
          handler: function() {
              //localStorageにデータを保存
              localStorage.setItem("list", JSON.stringify(this.list));
          },
          deep: true
      }
  },
  //マウントされた時にlocalStorageからデータを取得
  mounted: function() {
      this.list = JSON.parse(localStorage.getItem("list")) || [];
  },
  methods: {
      addToDo: function() {
          if (this.addText !== '') {
              this.list.push({
                  text: this.addText, 
                  isChecked: false,
              });
          }
          this.addText = '';
      },
      deleteBtn: function() {
          this.list = this.list.filter(function(todo) {
              return !todo.isChecked;
          });
      }
  },
  computed: {
      remaining: function () {
          var tasks = this.list.filter(function(todo) {
              return !todo.isChecked;
          });
          return tasks.length;
      },
      matchedList: function() {
          return this.list.filter(function(todo) {
              return todo.text.indexOf(this) > -1;
          }, this.pattern);
      }
  }
});