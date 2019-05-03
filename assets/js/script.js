document.addEventListener("DOMContentLoaded", function() {
  var lazyImgs = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImgObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersceting) {
          let lazyImg = entry.target;
          lazyImg.src = lazyImage.dataset.src;
          lazyIma.classlist.remove("lazy");
          lazyImgObserver.unobserve(lazyImg);
        }
      });
    });
    lazyImgs.forEach(function(lazyImg) {
      lazyImgObserver.observe(lazyImg);
    });
  }
});

let addb = document.getElementsByClassName('add');
let len = addb.length;
for (let i = 0; i < len; i++) {
  addb[i].addEventListener('click', function() {
    this.classList.toggle('added');
    if (this.classList.contains('added')) {
      this.textContent = "დამატებულია";
    } else {
          this.textContent = "დამატება";
    }
  });
}
