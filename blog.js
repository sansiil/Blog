 const cook=(num)=>{
    ///for cookies
    if (num === 2){
        const cookie=document.getElementById('pp');
        if(cookie.style.display==="none"){
            cookie.style.display="block";
        }
        else{
            cookie.style.display="none";
        }
    }
    //for ham menu
    else if(num===1){

        const ham=document.getElementById('ham');
        const cross=document.querySelector('.mobile-cross');

        if (ham.style.display==='block' || ham.style.display===''){

            cross.style.display='block';
            ham.style.display='none';
        }
        else{
                ham.style.display='block';
                cross.style.display='none';
        }

        //new sec for ham menu
        const section=document.createElement('section');
        section.classList='menu';

        if(!document.querySelector('.menu')){

              const menutop=document.createElement('div');
              menutop.classList='menu-top';

              const menubottom=document.createElement('div');
              menubottom.classList='menu-bottom';
              
              //item inside menutop
              const left=document.getElementById('ls');
              const right=document.querySelector('.right');

              menutop.append(left,right);

              //item inside menubottom
              const ex=document.querySelector('.example');
              const button=document.querySelector('.newpost');

              menubottom.append(ex,button);
              
              //to display items of ham
              const a=[left,right,button];
              if (left.style.display==='none'|| left.style.display===''){
               
                a.forEach(e=>{
                    e.style.display='block';
                });
                
            }
            // else{
            //     a.forEach(e=>{
            //         e.style.display='none';
            //     });
            // }


            section.append(menutop,menubottom);
            document.body.appendChild(section);
        }
        else{
            const menu=document.querySelector('.menu');
            if(ham.style.display==='none'){
                menu.style.display='flex';
            }
            else{
                menu.style.display='none';
            }
        }
        
    };
};

let cvalue='1';
//for pagination
//seclector all contains array so foreach to acess each elem

document.querySelectorAll('.link').forEach(link=>{

    link.addEventListener('click',()=>{

        //active class when clicked and cvalue is clicked elem value
        link.classList.add('active');
        cvalue=link.getAttribute('value'); 
        
        
        document.querySelectorAll('.link').forEach(link=>{
            if(cvalue!==link.getAttribute('value')){
              link.classList.remove('active');
            };
        });
    });
    
});
document.querySelectorAll('.next button').forEach(button=>{
    button.addEventListener('click',()=>{

        //for back button
        if(button.classList.contains('btn-1')){
              
            if(cvalue>1){
                cvalue--;
                document.querySelectorAll('.link').forEach(a=>{
                    if(a.getAttribute('value')==cvalue){
                        a.classList.add('active');
                        a.click();
                    }
                    else{
                        a.classList.remove('active');
                    };
                });
            
            };
        }
        //for next button
        else{
            if(cvalue<5){
                cvalue++;
                document.querySelectorAll('.next a').forEach(a=>{
                    if(cvalue==a.getAttribute('value')){
                        a.classList.add('active');
                        a.click();
                    }
                    else{
                        a.classList.remove('active');
                    };
                });
            };
        };
    });
});
  



