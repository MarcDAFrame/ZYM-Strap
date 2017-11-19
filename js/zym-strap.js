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
        // console.log('TEST')
        $("#preload").fadeOut("slow");
        
    });
    
}

function slideshow(){
    // $(".slideshows").css('border', '1px solid black')
    // console.log($(".slideshow"));
    $(".slideshow").each( function(index){
        // console.log(index)
        let slide_index = 0;
        let slides = $( this ).children("img");
        // let left_button = $( this ).children("button#slide-btn-left")[0];
        // let right_button = $( this ).children("button#slide-btn-right")[0];

        render_slides(slides, slide_index)


        $(this).on('click', '#slide-btn-left', function(){  
            if (slide_index == 0){
                slide_index = slides.length-1
                render_slides(slides, slide_index)                
            }else{
                slide_index = slide_index - 1;
                render_slides(slides, slide_index)
                
            }     
            
        })

        $(this).on('click', '#slide-btn-right', function(){
            if (slide_index == slides.length-1){
                slide_index = 0
                render_slides(slides, slide_index)                
            }else{
                slide_index = slide_index + 1;
                render_slides(slides, slide_index)
                
            }
            // console.log($(this).children('#slide-btn-right').attr('class').split(' '))
            
        })


    })
    function render_slides(slides, slide_index){
        //, classes, previous_slide=0 
        // , $(this).attr('class'), previous_slide=slide_index-1
        // if (jQuery.inArray('fade', classes.split(' ')) != -1){
        //     $(slides).each( function(slide){
        //         // slides[slide].style.display = "none";
        //         if(slide == slide_index){
        //             $(slides[slide]).fadeIn();
        //             slides[slide].style.display = "block";
        //         }else{
        //             $(slides[slide]).fadeOut();                    
        //             slides[slide].style.display = "none";                
        //         }  
        //     })

        // }else if(jQuery.inArray('slide', classes.split(' ')) != -1){
        //     $(slides).each( function(slide){
        //         // slides[slide].style.display = "none";
        //         if(slide == slide_index){
        //             // slides[previous_slide].style.display = "block";                                        
        //             slides[slide].style.position = "absolute";    
        //             slides[slide].style.display = "block";  
        //             slides[previous_slide].style.position = "absolute";    
        //             slides[previous_slide].style.display = "block";                                      
                    
        //         }else{
        //             slides[slide].style.display = "none";                
                    
        //         }  
        //     })        


        // }else if(jQuery.inArray('hide', classes.split(' ')) != -1){

        //     $(slides).each( function(slide){
        //         slides[slide].style.display = "none";                                                                                            
        //         if(slide == slide_index){
        //             slides[slide].style.display = "block";                                                                            
        //             $(slides[slide]).transition({ scale: 1}, 100);
                    
        //         }else{
        //             slides[slide].style.positon = "none";                     
        //             $(slides[slide]).transition({ scale: 0 });
        //         }  
        //     })        
        // }else{
            $(slides).each( function(slide){
                slides[slide].style.display = "none";
                if(slide == slide_index){
                    slides[slide].style.display = "block";
                }else{
                    slides[slide].style.display = "none";                
                }  
            })
        // }


    }
}

$(document).ready(function() {
    slideshow();
    preload();
    modals();
})
