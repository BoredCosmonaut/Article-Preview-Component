
//For the original share button
document.querySelector("#arrow").addEventListener("click", function(e) {
    
    //Makes the share bottom part appear
    document.getElementById("after").style.display = "inline-flex"
    document.getElementById("inside").style.display = "inline-flex"
    
    //Makes the original bottom disappear
    document.getElementById("before").style.display = "none"
})

//For share bottom arrow button
document.querySelector("#arrow-after").addEventListener("click", function(e) {
    
    //Makes the share bottom part disappear
    document.getElementById("after").style.display = "none"
    document.getElementById("inside").style.display = "none"
    
    //Makes the original bottom appear
    document.getElementById("before").style.display = "inline-flex"


})