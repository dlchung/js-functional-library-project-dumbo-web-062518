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
      // for (i = 0; i < collection.length; i++) {
      //   // debugger
      //   acc = callback(acc, collection[i], collection)
      // }
      for (const value in collection) {
        acc = callback(acc, collection[value], collection)
      }

      return acc
    },

    functions: function () {

    }

  }
})()



fi.libraryMethod()
