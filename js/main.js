const navList = document.querySelector(".navigation-list");
const openModal = document.querySelector(".open-modal-item");
const tabPanes = document.querySelectorAll(".tab-pane");
const saveButton = document.querySelector(".form-button");

navList.addEventListener("click", handleNavigationClick);
openModal.addEventListener("click", openModalWindow);

function handleNavigationClick(e) {
  const linkToTab = e.target.dataset.link;
  if (e.target === e.currentTarget) {
    return;
  }
  document.querySelectorAll(".navigation-list__item").forEach((item) => {
    if (item.classList.contains("active")) {
      return item.classList.remove("active");
    }
  });
  e.target.classList.add("active");
  tabPanes.forEach((pane) => {
    if (pane.classList.contains("block")) {
      pane.classList.remove("block");
    }
    if (linkToTab !== pane.getAttribute("id")) {
      pane.classList.add("none");
    } else if (linkToTab === pane.getAttribute("id")) {
      pane.classList.remove("none");
      pane.classList.add("block");
    }
  });
}
const overlay = document.querySelector(".js-lightbox");

const overlayContent = document.querySelector(".lightbox__content");
const closeButton = document.querySelector(
  'button[data-action="close-lightbox"]'
);

openModal.addEventListener("click", openModalWindow);
overlay.addEventListener("click", handleOverlayClick);

function openModalWindow(e) {
  e.preventDefault();
  window.addEventListener("keydown", closeByEsc);
  overlay.classList.add("is-open");
}

function handleOverlayClick(e) {
  if (
    e.target === document.querySelector(".lightbox__overlay") ||
    e.target === closeButton ||
    e.target === saveButton
  ) {
    window.removeEventListener("keydown", closeByEsc);

    overlay.classList.remove("is-open");
  }
}

function closeByEsc(e) {
  if (e.code === "Escape") {
    overlay.classList.remove("is-open");
    window.removeEventListener("keydown", closeByEsc);
  }
}
