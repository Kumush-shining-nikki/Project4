const openBtn = document.getElementById('openSearch');
const modal = document.getElementById('searchModal');
const closeBtn = document.getElementById('closeModal');

openBtn.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
