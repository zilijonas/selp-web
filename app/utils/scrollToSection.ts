export function scrollToSection(sectionId: string) {
  const section = document.querySelector(sectionId);
  if (section) {
    const headerOffset = 80; // Adjust this value based on your header height
    const sectionPosition = section.getBoundingClientRect().top;
    const offsetPosition = sectionPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}
