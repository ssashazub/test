const accordionItems = document.querySelectorAll(".accordion__item--summary");

accordionItems.forEach(function(item) {
  item.addEventListener("click", function(event) {
    event.stopPropagation();
    item.parentNode.classList.toggle("accordion__item--active");
  });
});
