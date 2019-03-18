window.onerror = function(e) {
  console.log("error", e);

  if (e.includes("SyntaxError")) {
    console.log("detected");
  }
};
