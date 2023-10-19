const buttonHandler = () => {
  document.querySelector(".none-content").classList.toggle("show");
  document.querySelector(".info-btn").style.display = "none";
};
document.querySelector(".info-btn").addEventListener("click", buttonHandler);
