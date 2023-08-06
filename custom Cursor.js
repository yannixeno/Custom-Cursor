<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>



<script>

const cursorSmall = document.querySelector(".cursor-small");
const cursorBig = document.querySelector(".cursor-big");

let scale = 1;
	
	
function mousemoveHandler(e) {
  const target = e.target;
  const tl = gsap.timeline({
    defaults: {
      x: e.clientX,
      y: e.clientY,
      ease: "power2.out"
    }
  });

  if (target.closest(".view-cursor")) {
    tl.to(cursorSmall, { opacity: 0 })
      .to(cursorBig, { opacity: 1 }, "-=0.5");
  } else {
    if (target.classList.contains("view-cursor")) {
      scale = 4;
    } else {
      scale = 1;
    }

    tl.to(cursorSmall, { opacity: 1, scale: scale })
      .to(cursorBig, { opacity: 0 }, "-=0.5");
  }

	
function mouseleaveHandler() {
  gsap.to(cursorSmall, { opacity: 0 });
}}

document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("mouseleave", mouseleaveHandler);

</script>