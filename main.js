window.addEventListener("scroll", onScroll);

onScroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  const sections = [home, services, locationpage, about, contact];
  sections.forEach((section) => activateMenuAtCurrentSection(section));
  smoothScroll();
}

function smoothScroll() {
  const links = document.querySelectorAll(".menu a[href^='#']");
  links.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;

  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  if (sectionId === "home") showNumbersInStats(sectionBoundaries);

  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function showNavOnScroll() {
  const isScroll = scrollY > 0;
  const nav = document.querySelector("#navigation");
  nav.classList.toggle("scroll", isScroll);
  // navigation.classList.toggle("scroll", isScroll);
}

function showBackToTopButtonOnScroll() {
  const isScroll = scrollY > 0;
  backToTopButton.classList.toggle("show", isScroll);
  // console.log(backToTopButton);
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

function showNumbersInStats(sectionBoundaries) {
  const stats = document.querySelector(".stats");
  stats.classList.toggle("show", sectionBoundaries);
}
