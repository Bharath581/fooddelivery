/* basic demo interactions – no real OAuth */
document.addEventListener("DOMContentLoaded", () => {
  /* card click alerts */
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () =>
      alert("Opening page for: " + card.dataset.item)
    );
  });

  /* OAuth button demos */
  const google = document.getElementById("google-login");
  const apple  = document.getElementById("apple-login");

  if (google) google.addEventListener("click", () => alert("Google login – demo only"));
  if (apple)  apple.addEventListener("click",  () => alert("Apple login – demo only"));
});
