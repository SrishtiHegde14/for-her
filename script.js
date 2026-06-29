// ===========================
// ELEMENTS
// ===========================

const landing = document.getElementById("landing");
const pictures = document.getElementById("pictures");
const love = document.getElementById("love");
const flowers = document.getElementById("flowers");
const ending = document.getElementById("ending");
const last = document.getElementById("last");

const startBtn = document.getElementById("startBtn");

const popup = document.getElementById("popup");
const continueBtn = document.getElementById("continueBtn");

const flowerPopup = document.getElementById("flowerPopup");
const flowerContinue = document.getElementById("flowerContinue");

const picturesList = document.querySelectorAll(".picture");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const lilyCard = document.getElementById("lilyCard");

const lastThing = document.getElementById("lastThing");

const finalText = document.getElementById("finalText");

const lilyContainer = document.getElementById("lilyContainer");


// ===========================
// FUNCTIONS
// ===========================

function showPage(currentPage, nextPage){

    currentPage.classList.remove("active");

    setTimeout(()=>{

        nextPage.classList.add("active");

    },500);

}



// ===========================
// LANDING
// ===========================

startBtn.addEventListener("click",()=>{

    showPage(landing,pictures);

});



// ===========================
// PICTURES
// ===========================

picturesList.forEach((picture)=>{

    picture.addEventListener("click",()=>{

        popup.classList.add("show");

    });

});


continueBtn.addEventListener("click",()=>{

    popup.classList.remove("show");

    showPage(pictures,love);

});




// ===========================
// LOVE PAGE
// ===========================

noBtn.addEventListener("mouseover",()=>{

    const x=Math.random()*500-250;

    const y=Math.random()*250-125;

    noBtn.style.transform=`translate(${x}px,${y}px)`;

});

yesBtn.addEventListener("click",()=>{

    showPage(love,flowers);

});




// ===========================
// FLOWER PAGE
// ===========================

lilyCard.addEventListener("click",()=>{

    flowerPopup.classList.add("show");

});


flowerContinue.addEventListener("click",()=>{

    flowerPopup.classList.remove("show");

    showPage(flowers,ending);

});
// ===========================
// ENDING PAGE
// ===========================

function createLily(){

    const lily=document.createElement("img");

    lily.src="images/flowers/lily.png";

    lily.classList.add("lily");

    lily.style.left=Math.random()*100+"vw";

    lily.style.width=(50+Math.random()*60)+"px";

    lily.style.animationDuration=(5+Math.random()*5)+"s";

    lily.style.opacity=Math.random();

    lily.style.transform=`rotate(${Math.random()*360}deg)`;

    lilyContainer.appendChild(lily);

    setTimeout(()=>{

        lily.remove();

    },10000);

}



// Start falling lilies
setInterval(()=>{

    if(ending.classList.contains("active")){

        createLily();

    }

},300);



// ===========================
// ONE LAST THING
// ===========================

lastThing.addEventListener("click",()=>{

    showPage(ending,last);

    setTimeout(()=>{

        finalText.classList.add("show");

    },600);

    setTimeout(()=>{

        finalText.innerHTML=`

        jk.<br><br>

        thanks for existing. 🤍🌸

        `;

    },2600);

});




// ===========================
// EXTRA
// ===========================

// Prevent image dragging

document.querySelectorAll("img").forEach((img)=>{

    img.setAttribute("draggable","false");

});



// Disable right click

document.addEventListener("contextmenu",(e)=>{

    e.preventDefault();

});



// Enter key on landing

document.addEventListener("keydown",(e)=>{

    if(e.key==="Enter" && landing.classList.contains("active")){

        startBtn.click();

    }

});