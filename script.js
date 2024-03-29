const cookieBtn = document.getElementById("cookieBtn")
const buyBronzeBtn = document.getElementById("buyBronze");
const buySilverBtn = document.getElementById("buySilver");
const buyGoldBtn = document.getElementById("buyGold");
const buyPlatinumBtn = document.getElementById("buyPlatinum");
const cookieSpan = document.getElementById("cookieSpan");
const upgradeSpan = document.getElementById("upgradeSpan");

const stats = {
    myCookies: 0,                       // cookies at that time
    bronze: 0,                           //coookies per second from acquired upgrades
    silver: 0,
    gold: 0,
    platinum: 0,
};

// updating stats through local storage on page refresh

const storageStats = JSON.parse(localStorage.getItem("stats"));

function buyCookie(){
    stats.myCookies++;
    updateStats();
    updateStorage();

};
function upBronze(){  
    stats.myCookies = stats.myCookies - 10 ;                   //to buy the bronze upgrade
    stats.bronze+=2;
    updateStats();
    updateStorage();
    
    
    
};
function upSilver(){   
    stats.myCookies = stats.myCookies - 50 ;                 //to buy the silver upgrade
    stats.silver+=4;
    updateStats();
    updateStorage();
    
    
};
function upGold(){   
    stats.myCookies = stats.myCookies - 100 ;                   //to buy the gold upgrade
    stats.gold+=10;
    updateStats();
    updateStorage();

};
function upPlatinum(){                                          //to buy the platinum upgrade
    stats.myCookies = stats.myCookies - 1000;
    stats.platinum+=50;
    updateStats();
    updateStorage();
   

};

cookieBtn.addEventListener("click", buyCookie);
buyBronzeBtn.addEventListener("click", upBronze);
buySilverBtn.addEventListener("click", upSilver);
buyGoldBtn.addEventListener("click", upGold);
buyPlatinumBtn.addEventListener("click", upPlatinum);

function updateStats (){
    cookieSpan.textContent = stats.myCookies;
    upgradeSpan.textContent = stats.bronze + stats.silver + stats.gold + stats.platinum;
};


function updateStorage(){                               // a function to update local storage
localStorage.setItem("stats", JSON.stringify(stats));
}
setInterval(function(){
    stats.myCookies += stats.bronze + stats.silver + stats.gold + stats.platinum; 
    updateStorage();
    updateStats();}, 1000)