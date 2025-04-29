
// // Ma'lum vaqt (3 soniya) dan keyin loadingni yashirish
// setTimeout(() => {
//   preloader.style.display = "none";
//   mainContent.style.display = "block";
// }, 3000); // 3000ms = 3 soniya

setTimeout(() => {
    document.getElementById("preloader").remove();
    document.getElementById("main-content").style.display = "block";
  
    // Style faylini DOMdan olib tashlash
    const styleTag = document.querySelector('link[href="style.css"]');
    if (styleTag) styleTag.remove();
  }, 2300);

  