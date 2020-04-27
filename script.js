let progressValue = 0;

$(".btn-primary").click(function(){
    progressValue++;
    if (progressValue <= 100) { 
        $(".progress-bar").css('width', progressValue+'%').attr('aria-valuenow', progressValue);
    }
    else{
        $(".progress-bar").css('width', 100+'%').attr('aria-valuenow', 100);  
    }    
    return progressValue;
});

$(".btn-secondary").click(function(){
    progressValue += 3;
    if (progressValue <= 100) { 
        $(".progress-bar").css('width', progressValue+'%').attr('aria-valuenow', progressValue);
    }
    else{
        $(".progress-bar").css('width', 100+'%').attr('aria-valuenow', 100);  
    }    
    return progressValue;
});

$(".btn-dark").click(function(){
    progressValue += 7;
    if (progressValue <= 100) { 
        $(".progress-bar").css('width', progressValue+'%').attr('aria-valuenow', progressValue);
    }
    else{
        $(".progress-bar").css('width', 100+'%').attr('aria-valuenow', 100);  
    }    
    return progressValue;
    
});

