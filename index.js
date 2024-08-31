// const bodyEl = document.querySelector("body");

// bodyEl.addEventListener("mousemove", function (e) {
//     const xPos = e.offsetX;
//     const yPos = e.offsetY;
//     console.log(xPos, yPos);

//     const spanEl = document.createElement("span");
//     spanEl.style.left = xPos + "px";
//     spanEl.style.top = yPos + "px";

//     bodyEl.appendChild(spanEl);
// });
const bodyEl = $('body');
bodyEl.on('mousemove' , function (e) {
    const x = e.clientX;
    const y = e.clientY;
    console.log(x, y);
    console.log(e);

    const spanEl = $("<span></span>");
    spanEl.css('left' , x + 'px');
    spanEl.css('top' , y + 'px');
    spanEl.css('position' , "absolute");
    const size = Math.random() * 100;
    spanEl.css('width' , size + 'px');
    spanEl.css('height' , size + 'px');

    bodyEl.append(spanEl);
    setTimeout(() => {
        spanEl.remove();
      }, 3000);

})