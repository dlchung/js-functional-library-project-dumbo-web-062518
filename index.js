fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {



      for (const value in collection){
        debugger
        alert(collection[value], value, collection);
      }
      return collection

    },

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },

    // alert: function() {
    //   alert("Test")
    // }


  }
})()



fi.libraryMethod()

// fi.each()
