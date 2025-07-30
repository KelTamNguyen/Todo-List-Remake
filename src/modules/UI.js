const UI = (() => {
  const newProjectBtn = document.querySelector("#new-project-btn");
  const newProjectModal = document.querySelector("#new-project-modal");
  newProjectBtn.addEventListener("click", (e) => {
    newProjectModal.showModal();
  });

  return {};
})();

export default UI;
