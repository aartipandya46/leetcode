function debounce(func, delay) {
  var timeout;
  return function() {
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      func.apply(null, args); // No "this" used
    }, delay);
  };
}

// Example usage
var log = debounce(function(msg) {
  console.log(msg);
}, 500);

log("Hi");
log("Hello"); // Only this will run after 500ms
