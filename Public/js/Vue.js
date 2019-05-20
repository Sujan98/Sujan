var table = new Vue({

  el: '.table',
  data: {
    product: "Buy Item:",
    food: "Cake",
    type: "Food",
    rs: "150rs",
    val: "Validate:",
    sp1: '   ',
    sp2: 0

  },
  methods: {
    add: function(){
      this.sp2 += 1
    }
  }

})

var entry = new Vue({

el: '.sss',
data: {
  add: "Add Product",
  v1: "Business",
  v2: "Food",
  news: "New Product",
  purchase: "Purchase",
  inStock: true
}

})
