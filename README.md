# Custom-Cursor
An interactive cursor effect that dynamically changes the appearance of the cursor based on mouse movement and element hovering. The effect is achieved using HTML, CSS, and JavaScript with the GSAP (GreenSock Animation Platform) library for smooth animations.

![ezgif com-crop](https://github.com/yannixeno/Custom-Cursor/assets/108096250/511aa8b4-6c5c-4333-aece-24c891d834b6)

![ezgif com-crop (2)](https://github.com/yannixeno/Custom-Cursor/assets/108096250/4b6ff3cc-84a3-4150-888e-c97a312de674)

# Features
The cursor changes from a small dot to a larger version when hovering over elements with the class .view-cursor.
The cursor scales up to 4x its original size when hovering over .view-cursor elements, and returns to its original size when hovering over other elements.
The cursor smoothly transitions between states with GSAP animations for a polished user experience.
When the mouse leaves the document, the cursor disappears gracefully.


# Dependencies
GSAP v3 (https://greensock.com/gsap/)

# Quick Start

## Import the CDN
This Mouse Effect requires GSAP library to work. You need to import it before the Mouse Follower:

```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
```

# The Javascript
This JavaScript code is a script that handles the behavior of the cursor in response to mouse movement and hovering over certain elements on the webpage. It uses the GSAP (GreenSock Animation Platform) library for animating the cursor transitions.

This code creates an interactive cursor effect, where the cursor changes its appearance (small to big) and scale (1x to 4x) when hovering over elements with the class .view-cursor. For other elements, the cursor remains small and at its original scale. When the mouse leaves the document, the cursor disappears.

Note: For this code to work, you need to have GSAP (GreenSock Animation Platform) included in your HTML document. Make sure you've included the GSAP library script before this script in the HTML file.

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

# Options
Customizable Cursor Sizes:

```.cursor-small:``` The size of the small custom cursor can be adjusted by modifying the ```height``` and ```width``` properties. Currently, it has a diameter of 20 pixels, but you can change these values to create a larger or smaller cursor.

```css
.cursor-small {
  /* Customize the height and width to change the size of the small cursor */
  height: 20px;
  width: 20px;
}
```

```.cursor-big``` : Similarly, you can adjust the size of the big custom cursor by modifying the ```height``` and ```width``` properties. Currently, it has a diameter of 100 pixels, but you can change these values to make it bigger or smaller.

```css
.cursor-big {
  /* Customize the height and width to change the size of the big cursor */
  height: 100px;
  width: 100px;
}
```

Customizable Cursor Colors:
The colors of both custom cursors can be changed by modifying the ```background-color``` and ```color``` properties. For example, to change the small cursor to red and the big cursor to blue, you can make the following adjustments:

```css
.cursor-small {
  /* Customize the background color of the small cursor (e.g., red) */
  background-color: red;
}

.cursor-big {
  /* Customize the background color of the big cursor (e.g., blue) */
  background-color: blue;
}
```

Additionally, you can customize the text color inside the ```.cursor-big``` element by changing the ```color``` property. For instance, to change the text color to yellow, you can do the following:

```css
.cursor-big {
  /* Customize the text color of the big cursor (e.g., yellow) */
  color: yellow;
}
```

Customizable Transition Effects:

The transition effect that changes the color of the ```.cursor-big``` when interacted with can be adjusted by modifying the ```transition``` property. The first value is the property being transitioned (```color``` in this case), the second value is the duration of the transition (e.g., ```0.5s``` for half a second), and the third value represents the timing function for the transition (e.g., ```ease```, ```linear```, etc.).


```css
.cursor-big {
  /* Customize the transition effect of the big cursor (e.g., longer duration) */
  transition: color 1s ease;
}
```

Customizable Media Query:

The media query is used to disable the custom cursor on tablet and mobile devices. If you want to target different screen sizes or add additional styles for different devices, you can modify the media query accordingly.


```css
@media only screen and (max-width: 768px) {
  .cursor-small {
    /* Customize styles for the small cursor on tablet & mobile devices */
    /* For example, you can change the background color to green */
    background-color: green;
  }
}
```
To apply different styles or completely hide the big cursor on tablet and mobile devices, you can add the ```.cursor-big``` class within the media query block and apply the desired changes.
Remember that these customizations will only be applied if the corresponding HTML elements are present on the webpage and correctly use the specified CSS classes (```.cursor-small``` and ```.cursor-big```). Additionally, for the custom cursor functionality to be fully enabled and functional, JavaScript or other code would be required to handle cursor behavior and interactions.

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

# Guidance Notes
Include the GSAP library in your HTML file before the script.js script.
Add the provided HTML and CSS code to your webpage, making sure to include the necessary classes and elements.
Place the script.js code within a <script> tag in your HTML file, or link it externally.
Customize the content inside the .cursor-big element based on your preferences (e.g., replace the image URL or modify the text).

# The End
Thank you for visiting this repository and exploring the interactive cursor effect! I hope you found it inspiring and useful for your projects. The interactive cursor effect adds an engaging touch to your webpages and enhances the user experience.

If you encountered any issues or have ideas for improvements, please don't hesitate to open an issue or submit a pull request. Your contributions and feedback are highly appreciated and will help make this project even better.

Feel free to use, modify, and customize the code according to your needs. The project is open-source and released under the MIT License, which allows for broad usage and adaptation.

If you liked this project or found it helpful, don't forget to give it a star ⭐️ on GitHub! It motivates me to create more exciting open-source projects in the future.

If you have any questions or just want to connect, feel free to reach out through GitHub or my personal website your-website.com.

Thank you for your interest in this project, and happy coding!

Best regards,
Yanni X.

