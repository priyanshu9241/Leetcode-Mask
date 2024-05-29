function replaceDifficultyText() {
  const difficultyTexts = ["Easy", "Medium", "Hard"];
  const difficultyClasses = [
    "text-difficulty-easy",
    "text-difficulty-medium",
    "text-difficulty-hard",
  ];

  //To toggle difficulty text
  function toggleText(element) {
    const originalText = element.dataset.originalText;
    if (element.textContent === "🤔") {
      element.textContent = originalText;
    } else {
      element.textContent = "🤔";
    }
  }

  // Function to replace text and add click event
  function replaceTextAndAddClickEvent(element) {
    const textContent = element.textContent.trim();
    if (difficultyTexts.includes(textContent)) {
      // Store original text in a data attribute
      element.dataset.originalText = textContent;
      element.textContent = "🤔";
      element.style.cursor = "pointer";
      // Add click event listener to toggle text
      element.addEventListener("click", () => toggleText(element));
    }
  }

  // For problem page
  difficultyClasses.forEach((difficultyClass) => {
    const elements = document.querySelectorAll(`.${difficultyClass}`);
    elements.forEach((element) => replaceTextAndAddClickEvent(element));
  });

  // For problemset page
  const spanElements = document.querySelectorAll("span");
  spanElements.forEach((element) => replaceTextAndAddClickEvent(element));
}

replaceDifficultyText();

const observer = new MutationObserver(replaceDifficultyText);
observer.observe(document.body, { childList: true, subtree: true });
