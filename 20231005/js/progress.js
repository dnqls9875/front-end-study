(() => {
  const progressbar = document.querySelector(".progress-bar");

  function progressHandler() {
    //  ! 스크롤한 양 / 문서높이 * 100

    const ratio =
      (pageYOffset / (document.body.clientHeight - innerHeight)) * 100;
    progressbar.style.width = `${ratio}%`;
  }

  window.addEventListener("scroll", progressHandler);
})();
