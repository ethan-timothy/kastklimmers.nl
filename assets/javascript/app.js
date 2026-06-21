// Navigation Bar
const toggleMenu = document.querySelector(".toggle-menu");
const navigation = document.querySelector(".navigation");

document.addEventListener("click", (event) => {
  if (!navigation.contains(event.target)) {
    toggleMenu.checked = false;
  }
});