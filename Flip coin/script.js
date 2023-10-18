let actionbtns = document.querySelectorAll(".actionbtns");

const pscore =document.getElementById("pscore");
const cscore =document.getElementById("cscore");

const declare =document.getElementById("declare");

const img1 =document.getElementById("img1");

let ppoints=0;
let cpoints=0;

let pchoice;
let rand;
let result;//1 win 2 loose

const actionimg=["<img src='assets/head.svg' alt='head'>" , "<img src='assets/tail.svg' alt='tail'>"];
const spinimg=["<img src='assets/spin.svg' alt='coin'>"];

actionbtns.forEach(button =>{   
    
    button.addEventListener("click", () => {
        
        if (button.id === "head") 
        {
            pchoice = 0;
            
            console.log("Your choice is Head");
        } 
        else if (button.id === "tails") 
        {
            pchoice = 1;
            console.log("Your choice is Tails");
        }
        
        rotateImage();
        
        // generate a random action  as computer move
        resultimg();
        
        // build a logic of winner looser
        winner();
        
        // reflect textmsg of result & reflect in score card
        declareresult();

        function rotateImage() 
        {
            img1.style.transition = 'transform 2s';
            img1.style.transform = 'rotateY(360deg)';
            setTimeout(() => {
                img1.style.transition = '';
                img1.style.transform = 'rotateY(0deg)'; 
            }, 2000);
        }
        
        function resultimg()
        {
            rand = Math.floor(Math.random()*2);
            if(rand==0)
            {   
                console.log("Computer choice is Head");
                img1.innerHTML=actionimg[0];
            }
            else if(rand==1)
            {
                console.log("Computer choice is Tails");
                img1.innerHTML=actionimg[1];       
            }
            
        }
        
        function winner()
        {   
            if(pchoice==rand)
            {
                console.log("We Won");
                result=1;//won
            }    
            else
            {
                console.log("We Loose");
                result=2;//loose
            }
        }
        
        function declareresult()
        {
            if(result==1)
            {
                declare.innerHTML="Player Won!";
                ppoints+=1;
                pscore.textContent=ppoints;
             
                console.log("We Won");
            
            }
            else if(result==2)
            {
                declare.innerHTML="Computer Won!";
                cpoints+=1;
                cscore.textContent=cpoints;
            
                console.log("We Loose");
            
            }
        }

    });
});
