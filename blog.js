 const cook=(num)=>{
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
             
            if(!document.querySelector('.menu')){
                //new div for ham menu
              const section=document.createElement('section');
              section.classList='menu';

              const menutop=document.createElement('div');
              menutop.classList='menu-top';

              const menubottom=document.createElement('div');
              menubottom.classList='menu-bottom';
              
              const left=document.getElementById('ls');
              const right=document.querySelector('.right');
              menutop.append(left,right);

              if (left.style.display==='none'|| left.style.display===''){
                left.style.display='block';
                
            }
            else{
                left.style.display='none';
            }
            section.append(menutop,menubottom);
            document.body.appendChild(section);
           
            
           
            };

           
            

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
