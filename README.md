# Custom-Cursor
A powerful javascript library to create a smooth effect for the mouse cursor on your website. This cursor will also enlarge when assigned to an image or section. 



![ezgif com-crop](https://github.com/yannixeno/Custom-Cursor/assets/108096250/511aa8b4-6c5c-4333-aece-24c891d834b6)

![ezgif com-crop (2)](https://github.com/yannixeno/Custom-Cursor/assets/108096250/4b6ff3cc-84a3-4150-888e-c97a312de674)

# Dependencies
GSAP v3 (https://greensock.com/gsap/)

# Quick Start

## Import the CDN
This Mouse Effect requires GSAP library to work. You need to import it before the Mouse Follower:

```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
```

# The Javascript
This is the rest of the code. Please inmport the CDN before putting this in 
```js
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
```

# The CSS
Play with these to change the cursor appearance
```css
<style>

.cursor {
  position: fixed;
  pointer-events: none;
  opacity: 0;
}

.cursor-small {
  top: 0px;
  left: 0px;
  z-index: 1;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: black;
}

    .cursor-big {
    top: 0px;
  left: 0px;
    height: 100px;
    width: 100px;
    align-items: center;
  background-color: black;
  border-radius: 50%;
  color: white;
  display: flex;
  font-size: 15px;
  justify-content: center;
  padding: 10px;
  pointer-events: none;
  position: fixed;
  text-align: center;
  transform: translate(-50%, -50%);
  transition: color 0.5s ease;
  z-index:9999;
    }

    p{
        margin-top: 10px;
    }

   /*    disable custom cursor on tablet & mobile */
   @media only screen and (max-width: 768px) {
    .cursor-small{
        display:none;
     }

   }

</style>
```

# The HTML 

```html
<div class="cursor cursor-small"></div> 

<div class="cursor cursor-big">
<!--     Add either one of the below -->
<!--     <img width="30" height="30" src="" alt=""> -->
 <p>
        View project
    </p>
</div>
```

# How to use the enlarge feature *view project* 
Please assign the ```.view-cursor``` to the image or object you would like to make the cursor enlarge for.

# Example of use
• www.xfcreations.com
