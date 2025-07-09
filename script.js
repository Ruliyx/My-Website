// **** Accordion
const accordionItems = document.querySelectorAll(".accordion");

accordionItems.forEach((item) => {
  const accordionTitle = item.querySelector(".accordion__title");

  accordionTitle.addEventListener("click", () => {
    if (
      item.querySelector(".accordion__content").getAttribute("aria-hidden") ==
      "false"
    ) {
      item
        .querySelector(".accordion__content")
        .setAttribute("aria-hidden", "true");
    } else {
      // Close all accordions
      accordionItems.forEach((i) => {
        i.querySelector(".accordion__content").setAttribute(
          "aria-hidden",
          "true"
        );
      });

      // Open current accordion
      item
        .querySelector(".accordion__content")
        .setAttribute("aria-hidden", "false");
    }
  });
});
