var activeSpan = document.querySelector("#active");
var spans = document.querySelectorAll("span");

activeSpan.classList.add("click");

for(span in spans) {
    spans[span].onclick = function(){
      spans.forEach(function(spn) {
        spn.classList.remove("click");
      })
      this.classList.add("click");
  }
}
