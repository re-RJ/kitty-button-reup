var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");

// console.log("button");
button.addEventListener("click", function () {
  //   console.log("it's working!");
  cat.classList.add("show");
});
