const contact = document.getElementById("contact");
const popover = document.getElementById("popover");
const shareIcon = document.getElementById("shareIcon");
const sharePannel = document.getElementById("sharePannel");
const shareIcon2 = document.getElementById("shareIcon2");

contact.style.display = "flex";
sharePannel.style.display = "none";
popover.style.display = "none";

const screenSizeBreakpoint1 = 900;

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
    popover.style.display = "none";
}

function showSharePannel() {
    contact.style.display = "none";
    sharePannel.style.display = "flex";
    popover.style.display = "none";
}

function showPopover() {
    contact.style.display = "flex";
    sharePannel.style.display = "none";
    popover.style.display = "flex";
}

function tooglePannel() {
    const pageWidth = document.documentElement.scrollWidth;

    if (pageWidth < screenSizeBreakpoint1) {
        console.log("page < breakpoint");
        console.log(contact);
        if (
            contact.style.display === "flex" &&
            sharePannel.style.display === "none"
        ) {
            console.log("contact visible, sharePannel invisible");
            showSharePannel();
        } else if (
            contact.style.display === "none" &&
            sharePannel.style.display === "flex"
        ) {
            console.log("contact invisible, sharePannel visible");
            showContact();
        }
    } else {
        console.log("page >= breakpoint");
        if (
            contact.style.display === "flex" &&
            popover.style.display === "none"
        ) {
            console.log("contact visible, popover invisible");
            showPopover();
        } else if (
            contact.style.display === "none" &&
            popover.style.display === "none"
        ) {
            console.log("contact invisible, popover invisible");
            showContact();
        } else if (
            contact.style.display === "flex" &&
            popover.style.display === "flex"
        ) {
            console.log("contact visible, popover visibel");
            showContact();
        }
    }
}

shareIcon.addEventListener("click", (event) => {
    event.stopPropagation();
    tooglePannel();
});

shareIcon2.addEventListener("click", (event) => {
    event.stopPropagation();

    tooglePannel();
});

document.addEventListener("click", (event) => {
    event.stopPropagation();

    const pageWidth = document.documentElement.scrollWidth;
    if (
        // contact.style.display === "none" &&
        event.target.id !== "sharePannel" &&
        event.target.id !== "shareIcon" &&
        event.target.id !== "shareIconImg" &&
        event.target.id !== "shareIcon2" &&
        event.target.id !== "shareIcon2Img" &&
        event.target.id !== "shareText"
    )
        showContact();
});
