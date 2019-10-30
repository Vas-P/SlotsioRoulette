"use strict";
var cols = document.getElementsByClassName("slot_column")
  , slot_images = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6"]
  , slot_image_url = "img/"
  , current_column = 0
  , current_winning = 0
  , laneA = [cols[0].children[0], cols[1].children[0], cols[2].children[0], cols[3].children[0], cols[4].children[0]]
  , laneB = [cols[0].children[1], cols[1].children[1], cols[2].children[1], cols[3].children[1], cols[4].children[1]]
  , laneC = [cols[0].children[2], cols[1].children[2], cols[2].children[2], cols[3].children[2], cols[4].children[2]]
  , laneD = [cols[0].children[0], cols[1].children[1], cols[2].children[2], cols[3].children[1], cols[4].children[0]]
  , laneE = [cols[0].children[2], cols[1].children[1], cols[2].children[0], cols[3].children[1], cols[4].children[2]]
  , laneF = [cols[0].children[0], cols[1].children[1], cols[2].children[1], cols[3].children[1], cols[4].children[0]]
  , laneG = [cols[0].children[1], cols[1].children[0], cols[2].children[0], cols[3].children[0], cols[4].children[1]]
  , laneH = [cols[0].children[1], cols[1].children[2], cols[2].children[2], cols[3].children[2], cols[4].children[1]]
  , laneI = [cols[0].children[2], cols[1].children[1], cols[2].children[1], cols[3].children[1], cols[4].children[2]]
  , laneJ = [cols[0].children[0], cols[1].children[1], cols[2].children[0], cols[3].children[1], cols[4].children[0]]
  , laneK = [cols[0].children[1], cols[1].children[0], cols[2].children[1], cols[3].children[0], cols[4].children[1]]
  , laneL = [cols[0].children[1], cols[1].children[2], cols[2].children[1], cols[3].children[2], cols[4].children[1]]
  , laneM = [cols[0].children[2], cols[1].children[1], cols[2].children[2], cols[3].children[1], cols[4].children[2]]
  , laneN = [cols[0].children[0], cols[1].children[0], cols[2].children[1], cols[3].children[0], cols[4].children[0]]
  , laneO = [cols[0].children[1], cols[1].children[1], cols[2].children[0], cols[3].children[1], cols[4].children[1]]
  , laneP = [cols[0].children[2], cols[1].children[2], cols[2].children[1], cols[3].children[2], cols[4].children[2]]
  , laneQ = [cols[0].children[1], cols[1].children[1], cols[2].children[2], cols[3].children[1], cols[4].children[1]]
  , lanes = [laneA, laneB, laneC, laneD, laneE, laneF, laneG, laneH, laneI, laneJ, laneK, laneL, laneM, laneN, laneO, laneP, laneQ];
function check_winnings() {
    lanes.forEach(function(l) {
        for (var c = [l[0]], e = 1; e < l.length; e++)
            l[e].src === l[0].src && c.length === e && c.push(l[e]);
        c.length
    })
}
function initSlots(l) {
    for (var c = document.getElementsByClassName("slot_column"), e = 0; e < c.length; e++)
        for (var n = 0; n < 6; n++)
            c[e].children[n].src = slot_image_url + slot_images[Math.floor(Math.random() * slot_images.length)] + ".png"
}
function shuffleSlots() {
    for (var l = document.getElementsByClassName("slot_column"), c = current_column; c < l.length; c++) {
        for (var e = 0; e < 6; e++) {
            var n = slot_images[Math.floor(Math.random() * slot_images.length)];
            l[c].children[e].src = slot_image_url + n + ".png",
            l[c].children[1].src = slot_image_url + slot_images[2] + ".png"
        }
        console.log("result")
    }
}
function changeBet(l) {
    "-" == l.innerHTML ? .25 < current_bet && (current_bet /= 2) : current_bet < 8 && (current_bet *= 2)
}
function roll() {
    var l = document.getElementById("current_win");
    l.style.display = "none",
    ButtonsDisabled(!(l.innerHTML = ""));
    for (var c = document.getElementsByClassName("slot_column"), e = 0; e < c.length; e++)
        c[e].classList.add("slot_animate");
    window.setTimeout(roll_check, 800)
}
function roll_check() {
    var l = document.getElementsByClassName("slot_column");
    l[current_column].classList.remove("slot_animate"),
    shuffleSlots(),
    3 === current_column && (console.log("kek"),
    l[0].style.opacity = .4,
    l[1].style.opacity = .4,
    l[2].style.opacity = .4,
    l[3].style.opacity = .4,
    l[4].style.boxShadow = "0px 0px 40px 6px rgba(95,66,177,1)"),
    current_column < 4 ? (window.setTimeout(roll_check, laneCheck()),
    current_column++) : (current_column = 0,
    ButtonsDisabled(!1),
    console.log("это победа"),
    setTimeout(function() {
        document.querySelector(".popup").style.display = "block",
        document.querySelector(".popup__content").style.display = "block"
    }, 500))
}
function laneCheck() {
    document.getElementsByClassName("slot_column");
    var n = 2;
    return lanes.forEach(function(l) {
        for (var c = [l[0]], e = 1; e <= current_column; e++)
            l[e].src === l[0].src && c.length === e && c.push(l[e]);
        2 < c.length ? (c.forEach(function(l) {
            l.classList.contains("slot_win") || l.classList.add("slot_win")
        }),
        n = 3) : 2 <= current_column && 3 != n && (n = 1)
    }),
    500 * n
}
function ButtonsDisabled(l) {
    document.getElementById("button_roll").disabled = l
}
window.onload = function() {
    initSlots()
}
;
