
//Button Animation

/* const btns = document.querySelectorAll(".btn a")

btns.forEach((btn,idx) => {
    btn.addEventListener("click", function (){
        btns.classList.add("active")
     

    })
});

console.log(btns)
 */











$("button.v").on("click", function(){
    $("section").slideUp().slideDown()
    $("button.u a").removeClass("active")
    $("button.w a").removeClass("active")
    $("button.v a").addClass("active")
   setTimeout(run, 400)
})

function run(){
    $("#home").addClass("use")
    $("#asin").addClass("use")
    $("#fam").removeClass("use")
}


$("button.u").on("click", function(){
    $("section").slideUp().slideDown()
    $("button.u a").addClass("active")
    $("button.w a").removeClass("active")
    $("button.v a").removeClass("active")
    setTimeout(doit, 400)
   
})

function doit(){
    $("#asin").addClass("use")
    $("#fam").addClass("use")
    $("#home").removeClass("use")
}

$("button.w").on("click", function(){
    $("section").slideUp().slideDown()
    $("button.u a").removeClass("active")
    $("button.w a").addClass("active")
    $("button.v a").removeClass("active")
    setTimeout(doiit, 400)
 
})

function doiit(){
    $("#home").addClass("use")
    
    $("#fam").addClass("use")
    $("#asin").removeClass("use")
}



