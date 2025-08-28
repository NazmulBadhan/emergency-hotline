// heart icons functionality
const heartContainer = document.getElementById("heart-container");
const heartButtons = document.getElementsByClassName("btn-heart");

let hearts = 0;
for (let i = 0; i < heartButtons.length; i++) {
    heartButtons[i].addEventListener("click", function() {
        hearts++;
        heartContainer.innerText = hearts;
    });
};


// call buttons functionality
const coinContainer = document.getElementById("coin-container");
const callButtons = document.getElementsByClassName("btn-call");

let coins = 100;
for (let n = 0; n < callButtons.length; n++) {
    callButtons[n].addEventListener("click", function(event) {
        const card = event.target.closest(".card");
        const title = card.querySelector(".title").innerText;
        const number = card.querySelector(".number").innerText;

        if (coins >= 20) {
            alert(`Calling ${title} ${number}...`);
            coins = coins - 20;
            coinContainer.innerText = coins;
        } else {
            alert("Not enough coins");
            return;
        }
    });
};


// call history section functionality
for (let button of callButtons) {
    button.addEventListener("click", function() {
        const callTitle = button.parentNode.parentNode.children[1].children[0].innerText;
        const callNumber = button.parentNode.parentNode.children[2].children[0].innerText;
        const callTime = new Date().toLocaleTimeString([]);

        const historyContainer = document.getElementById("history-container");
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
                    <div class="flex justify-between items-center my-2 px-2 py-2 bg-[#fafafa] rounded-lg">
                        <div>
                            <h3 class="hind-madurai-normal font-bold">${callTitle}</h3>
                            <p>${callNumber}</p>
                        </div>
                        <p>${callTime}</p>
                    </div>
                    `;
                    historyContainer.append(newHistory);
    });
};


// clear button functionality
const clearButton = document.getElementById("btn-clear").addEventListener("click", function() {
    const historyContainer = document.getElementById("history-container").innerHTML = "";
});


// challenges part
// increase copy count
const copyContainer = document.getElementById("copy-container");
const copyButtons = document.getElementsByClassName("btn-copy");

let copy = 0;
for (let m = 0; m < copyButtons.length; m++) {
    // console.log(button)
    copyButtons[m].addEventListener("click", function() {
        copy++;
        copyContainer.innerText = copy;
        console.log(copyContainer)

    });
};


// copy to clipboard
const copyButtons2 = document.querySelectorAll(".btn-copy");
const copyTexts = document.querySelectorAll(".copy-text");

for (let j = 0; j < copyButtons2.length; j++) {
    copyButtons2[j].addEventListener("click", function() {
        const text = copyTexts[j].textContent;

        navigator.clipboard.writeText(text).then(function() {
            alert("copied : " + text);
        }).catch (function (err) {
            console.log("Failed to copy:", err);
        });
    });
};
