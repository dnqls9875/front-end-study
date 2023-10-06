// footer 회사정보 toggle 기능
const btnHandler = () => {
  document.querySelector(".sub-footer-menu-list").classList.toggle("active");
};

document
  .querySelector(".footer-menu-list__link")
  .addEventListener("click", btnHandler);
