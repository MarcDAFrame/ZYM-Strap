function modals() {
    var modals = document.getElementsByClassName("modal");
    var open_btns = [];
    var close_btns = [];
    var ids = [];
    
    for(let i = 0; i < modals.length; i++){
        ids.push(modals[i].id)
    }
    
    for(j in ids){
        open_btns.push(document.getElementById(modals[j].id+"_btn"));
        close_btns.push(document.querySelectorAll("#" + modals[j].id + " > div.modal-content > div.modal-header > span")[0]);
    }
    
    for(let k = 0; k < ids.length; k++){
        open_btns[k].onclick = function() {
            modals[k].style.display = "block";
        }
        
        // When the user clicks on <span> (x), close the modal
        close_btns[k].onclick = function() {
            modals[k].style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
    }
    
    window.onclick = function(event) {
        for(let k = 0; k < ids.length; k++){
            if (event.target == modals[k]) {
                modals[k].style.display = "none";
            }
        }
    }
    
}
function preload() {
    $(window).on('load', function() {
        // Animate loader off screen
        console.log('TEST')
        $("#preload").fadeOut("slow");
        
    });
    
}
preload();
modals();