function openGift() {
    document.getElementById("first").classList.add("hide");
    document.getElementById("second").classList.remove("hide");

    document.getElementById("bgMusic").play();
}

// Celebrate button click event
document.getElementById("celebrateBtn").addEventListener("click", function() {
    // Final page open in same tab
    window.location.href = "final.html";

    // Agar new tab ma open karvu hoi:
    // window.open("final.html", "_blank");
});



