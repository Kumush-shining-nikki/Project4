document.addEventListener("DOMContentLoaded", function () {
    const search = document.getElementById("search");
    const button = document.getElementById("search-button");
    const input = search.querySelector(".search-box");
  
    button.addEventListener("click", function () {
      search.classList.toggle("open");
      if (search.classList.contains("open")) {
        input.focus();
      } else {
        input.blur();
      }
    });
  });
  