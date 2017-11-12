var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js";
script.addEventListener('load', function() {
  
  var elements = document.getElementsByTagName('*');
  
  // // var keyString = 'a string',
  // //     keyObj = {},
  // //     keyFunc = function() {};
  //
  // setting the values
  var veganMap = {
      "egg": "tofu",
      "Egg": "Tofu",
      "milk": "almondmilk",
      "Milk": "Almondmilk"
  }
  // // getting the values
  // myMap.get(keyString);    // "value associated with 'a string'"
  // myMap.get(keyObj);       // "value associated with keyObj"
  // myMap.get(keyFunc);      // "value associated with keyFunc"
  //
  // myMap.get('a string');   // "value associated with 'a string'"
  //                          // because keyString === 'a string'
  // myMap.get({});           // undefined, because keyObj !== {}
  // myMap.get(function() {}) // undefined, because ke
  
  for (var element of elements) {
  
      for (var node of element.childNodes) {
  
          // get text part of the element
          if (node.nodeType === 3) {
  
              var nonVegan = node.nodeValue;
  
              if (veganMap.hasOwnProperty(nonVegan)) {
  
                  var veganOption = veganMap.nonVegan;
                  var newRegex = new RegExp(nonVegan,"gi");
  
                  var replacedText = nonVegan.replace(newRegex, veganMap.nonVegan);
  
                  if (replacedText !== nonVegan) {
                      element.replaceChild(document.createTextNode(replacedText), node);
                  }
  
              }
          }
      }
  }
  //
  // THIS WORKS:
  // for (var element of elements) {
  //
  //     for (var node of element.childNodes) {
  //
  //         // get text part of the element
  //         if (node.nodeType === 3) {
  //             var text = node.nodeValue;
  //             var newRegex = new RegExp("Trump","gi");
  //             var replacedText = text.replace(newRegex, 'Beef');
  //
  //             if (replacedText !== text) {
  //                 element.replaceChild(document.createTextNode(replacedText), node);
  //             }
  //         }
  //     }
  // }
});
document.head.appendChild(script);

<<<<<<< HEAD
var veganMap = {
    "egg": "tofu",
    "milk": "almondmlk"
}

for (var element of elements) {
    for (var node of element.childNodes) {
        // get text part of the element
        if (node.nodeType === 3) {
            var textToCheck = node.nodeValue;
            var listToCheck = textToCheck.split(" ");
            for (var listItem in listToCheck) {
                if (veganMap.hasOwnProperty(listToCheck[listItem])) { // is listItem == some key in map
                    var veganOption = veganMap.listItem; // get value from map
                    var newRegex = new RegExp(listToCheck[listItem],"gi");
                    var replacedText = listToCheck[listItem].replace(newRegex, veganMap[listToCheck[listItem]]);
                    if (replacedText !== listToCheck[listItem]) {
                        element.replaceChild(document.createTextNode(replacedText), node);
                    }
                }
            }
        }
    }
}
=======
>>>>>>> f57889cedc527c28117b310e7d6ec3fd10af7b6e
