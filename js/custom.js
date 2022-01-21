
// let x = $("footer .container .footer-links-wrapper");

// if (window.matchMedia('(max-width: 768px)').matches)
// {
//     x.addClass("someClass");

//     let firstDiv = x.children().first();
//     let firstH3 = firstDiv.children().first();
//     let firstUl = firstH3.next();
//     firstH3.click(function(){
//         firstUl.slideToggle();
//     })

//     let secDiv = firstDiv.next();
//     let secH3 = secDiv.children().first();
//     let secUl = secH3.next();
//     secH3.click(function(){
//         secUl.slideToggle();
//     })

//     let thrH3 = secUl.next();
//     let  thrUl= thrH3.next();
//     thrH3.click(function(){
//         thrUl.slideToggle();
//     })

//     let thrDiv = secDiv.next();
//     let forH3 = thrDiv.children().first();
//     let forUl = forH3.next();
//     forH3.click(function(){
//         forUl.slideToggle();
//     })

//     let forDiv = thrDiv.next();
//     let fivH3 = forDiv.children().first();
//     let fivUl = fivH3.next();
//     fivH3.click(function(){
//         fivUl.slideToggle();
//     })

//     let sixH3 = fivUl.next();
//     let  sixUl= sixH3.next();
//     sixH3.click(function(){
//         sixUl.slideToggle();
//     })

//     let sevH3 = sixUl.next();
//     let  sevUl= sevH3.next();
//     sevH3.click(function(){
//         sevUl.slideToggle();
//     })

//     let fivDiv = forDiv.next();
//     let eigH3 = fivDiv.children().first();
//     let eigUl = eigH3.next();
//     eigH3.click(function(){
//         eigUl.slideToggle();
//     })

//     let nineH3 = eigUl.next();
//     let  nineUl= nineH3.next();
//     nineH3.click(function(){
//         nineUl.slideToggle();
//     })
// }



$(document).on("click",".footer-links-wrapper h3",function(){
    if($(window).width() <= 768) {
        $(this).next('ul').slideToggle();
        $(this).toggleClass("expanded");
    }
});

$(window).on("resize",function(){
    location.reload()
})




