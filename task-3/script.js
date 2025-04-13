document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const modal = document.querySelector(".modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close");
  
    thumbnails.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        const fullImgSrc = thumb.getAttribute("data-full");
        modalImg.src = fullImgSrc;
        modal.classList.remove("hidden");
        setTimeout(() => modal.classList.add("show"), 10); 
      });
    });
  
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("show");
      setTimeout(() => modal.classList.add("hidden"), 300); // wait for transition
    });
  
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeBtn.click(); // close when clicking outside image
      }
    });
  });
  