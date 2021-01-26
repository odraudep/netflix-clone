const faq_btn = document.querySelectorAll(".faq-btn");

faq_btn.forEach(eItem => {
  eItem.addEventListener("click", e => {
    let actived = document.querySelector(".active");

    if (actived) {
      actived.classList.remove("active");

      if (actived == eItem) {
        eItem.classList.remove("active");
      } else {
        eItem.classList.add("active");
      };
    } else {
      eItem.classList.add("active");
    };
  });
});
