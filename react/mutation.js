const root = document.getElementById("root");
console.log(root)

const observerOptions = {
  childList: true,
  subtree: true
}
function border(records, observer) {
  for (const record of records) {
    for (const addedNode of record.addedNodes) {
      addedNode.style.border = "1px solid red";
      setTimeout(() => {
        addedNode.style.border = "";
      }, 1000)
    }
  }

}
const observer = new MutationObserver(border);
observer.observe(root, observerOptions);
