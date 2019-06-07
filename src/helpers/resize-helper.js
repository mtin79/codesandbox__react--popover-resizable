import Hammer from "hammerjs";

function initializeResizer(resizerDOMElement) {
  const resizerElement =
    resizerDOMElement || document.querySelector("#Resizer");
  const hammertime = new Hammer(resizerElement);
  const contentContainerElement = document.querySelector("#ContentContainer");

  hammertime.get("swipe").set({ direction: Hammer.DIRECTION_VERTICAL });

  hammertime.on("swipeup", function(event) {
    event.preventDefault();
    console.log("swiped up.");
    if (hasDefaultHeight(contentContainerElement)) {
      contentContainerElement.classList.replace(
        "defaultHeight",
        "partialHeight"
      );
      return;
    }

    if (hasPartialHeight(contentContainerElement)) {
      contentContainerElement.classList.replace("partialHeight", "fullHeight");
      return;
    }
  });

  hammertime.on("swipedown", function(event) {
    event.preventDefault();
    console.log("swiped down.");
    if (hasFullHeight(contentContainerElement)) {
      contentContainerElement.classList.replace("fullHeight", "partialHeight");
      return;
    }

    if (hasPartialHeight(contentContainerElement)) {
      contentContainerElement.classList.replace(
        "partialHeight",
        "defaultHeight"
      );
      return;
    }
  });

  hammertime.on("tap", function(event) {
    event.preventDefault();
    console.log("tapped.");
    if (hasDefaultHeight(contentContainerElement)) {
      contentContainerElement.classList.replace(
        "defaultHeight",
        "partialHeight"
      );
      return;
    }

    if (hasPartialHeight(contentContainerElement)) {
      contentContainerElement.classList.replace("partialHeight", "fullHeight");
      return;
    }

    if (hasFullHeight(contentContainerElement)) {
      contentContainerElement.classList.replace("fullHeight", "partialHeight");
      return;
    }
  });

  // helper functions that get used by the hammerjs events fired by the "Resizer" - element:
  function hasFullHeight(element) {
    return elementContainsClass(element, "fullHeight");
  }

  function hasPartialHeight(element) {
    return elementContainsClass(element, "partialHeight");
  }

  function hasDefaultHeight(element) {
    return elementContainsClass(element, "defaultHeight");
  }

  function elementContainsClass(element, className) {
    return element.classList.contains(className);
  }
}

export default initializeResizer;
