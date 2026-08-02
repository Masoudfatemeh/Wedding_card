document.addEventListener("DOMContentLoaded", function(){

    const enterBtn = document.getElementById("enterBtn");

    enterBtn.addEventListener("click", function(){

        document.querySelector(".hero").style.opacity = "0";

        setTimeout(function(){

            window.location.href = "invite.html";

        },800);

    });

});
