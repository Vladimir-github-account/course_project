export default function scrollTo( to ) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: to
  });
}