export function getQueryArgByName(name) {
  var regex, results;
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  results = regex.exec(location.search);
  if (results) {
    return decodeURIComponent(results[1].replace(/\+/g, " "));
  } else {
    return null;
  }
};

// export function fireEventHandler(reference){

// }