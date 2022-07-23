const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    title.style.color = "blue";
}

function handleMouseEnter() {
    console.log("Mouse is here!");
}

title.addEventListener("click", handleTitleClick); 
title.addEventListener("mouseenter", handleMouseEnter);