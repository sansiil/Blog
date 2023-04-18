 function cook(num){
    if (num === 2){
        const cookie=document.getElementById('pp');
        if(cookie.style.display==="none"){
            cookie.style.display="block";
        }
        else{
            cookie.style.display="none";
        }
    }
    else if(num===1){
        const ham=document.getElementById('ham');
        const cross=document.querySelector('.mobile-cross');
        if (ham.style.display==='block' ||ham.style.display===''){
            cross.style.display='block';
            ham.style.display='none';

        }
        else{
            ham.style.display='block';
            cross.style.display='none';
        }

    }
       
    
    // else{
    //    const tm=document.getElementById('tm');
    //    const ls=document.getElementById('ls');
    //    const ld=document.getElementById('ld');
    //    const sp=document.getElementById('sp');
    //    const rd=document.getElementById('rd');
    //    const all=[tm,ls,ld,sp,rd];
       
    //    if(tm.style.display==="none"){
    //     tm.style.display="block";
    //     ls.style.display='block';
    // }
    //    else{
    //     tm.style.display="none";
    //     ls.style.display='none';
    //    };
    // };
    
    
 };
