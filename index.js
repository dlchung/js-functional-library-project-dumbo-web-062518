fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
      for (const value in collection) {
        // debugger
        alert(collection[value], value, collection)
      }

      return collection

    },

    map: function (collection, callback) {
      newArray = []
      for (const value in collection) {
        newArray.push(callback(collection[value], value, collection))
      }
      return newArray
    },

    reduce: function (collection, callback, acc) {
      // let sum = acc


      if (!acc) {
        acc = 0
      }
      // for (const value in collection) {
      //   acc = callback(acc, collection[value], collection)
      // }
      for (i = 0; i < collection.length; i++) {
        // debugger
        acc = callback(acc, collection[i], collection)
      }

      return acc
    },

    find: function(collection, predicate){
      for (const value in collection){
        if (predicate(collection[value])){
          return collection[value]
        }
      }
    },

    // filter: function(){
    //
    // },

    first: function(array, n){
      if (n){
      return array.slice(0, n)
    }
    return array[0]
    },

    functions: function () {

    }


  }
})()



fi.libraryMethod()
