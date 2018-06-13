const $like = document.getElementById("like");

$like.addEventListener("click", (el) => {
  $like.classList.toggle("is-liked");
})