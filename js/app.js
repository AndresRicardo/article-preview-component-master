const contact = document.getElementById("contact");
const shareIcon = document.getElementById("shareIcon");
const sharePannel = document.getElementById("sharePannel");
const shareIcon2 = document.getElementById("shareIcon2");

// Get the size of the device screen
let screenWidth = screen.width;
let screenHeight = screen.height;

// Get the browser window size
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

// Get the size of the entire webpage
const pageWidth = document.documentElement.scrollWidth;
const pageHeight = document.documentElement.scrollHeight;

function showContact() {
    contact.style.display = "flex";
    sharePannel.style.display = "none";
}

function showSharePannel() {
    contact.style.display = "none";
    sharePannel.style.display = "flex";
}

shareIcon.addEventListener("click", (event) => {
    const pageWidth = document.documentElement.scrollWidth;
    if (pageWidth < 375) showSharePannel();
    else console.log("mostrar el cuadrito ese");
});

document.addEventListener("click", (event) => {
    const pageWidth = document.documentElement.scrollWidth;
    if (
        pageWidth < 375 &&
        contact.style.display === "none" &&
        event.target.id !== "sharePannel" &&
        event.target.id !== "shareIcon" &&
        event.target.id !== "shareIconImg" &&
        event.target.id !== "shareIcon2" &&
        event.target.id !== "shareIcon2Img" &&
        event.target.id !== "shareText"
    ) {
        showContact();
    }
});

shareIcon2.addEventListener("click", (event) => {
    const pageWidth = document.documentElement.scrollWidth;
    if (pageWidth < 375) {
        showContact();
    } else {
        console.log(`ancho pantalla: ${pageWidth}px > 375px
        mostrar el cuadrito ese`);
    }
});
