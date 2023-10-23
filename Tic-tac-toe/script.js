const win=[ [1,2,3],[1,4,7],[3,6,9],[7,8,9],[1,5,9],[3,5,7],[2,5,8],[4,5,6] ];
let options=["","","","","","","","",""];
let currentplayer="X";
// 0 loose(here it means not won by this move , declare whose turn now) 1 won(declare current player) 2 draw(due to no space)

let declare =document.getElementById("declare");
let reset =document.getElementById("reset"); 
let p1 =document.getElementById("p1"); 
let p2 =document.getElementById("p2"); 

let p1score=0,p2score=0;

const blocks = document.querySelectorAll(".block");
blocks.forEach(block =>
    {
        block.addEventListener("click",()=>
        {   
            // get cell index of block
            var cellindex =  parseInt(block.getAttribute("cellIndex"));
            let declarepermission=true;
            // assign player move to block in frontend as well as back
            assign();
            
            function assign()
            {
                if(options[cellindex-1]==="")
                {
                    block.textContent=currentplayer;
                    options[cellindex-1]=currentplayer;
                }  
                else
                {
                    declarepermission=false;
                }          
            }
            
            // check win with this move
            let status=0;
            status=statuscheck();
            
            function statuscheck()
            {
                for(var i=0;i<win.length;i++)
                {   
                    var status=0;
                    var condition=win[i];
                    var cell1=options[condition[0]-1];
                    var cell2=options[condition[1]-1];
                    var cell3=options[condition[2]-1];
                    
                    if(cell1==="" || cell2==="" || cell3==="")
                    {   
                        console.log("empty hai kya decison le...#continue")
                        continue;
                    }

                    if(cell1===cell2 && cell2===cell3 ) 
                    {
                        status=1;//won
                        break;
                    }
                    // checkifspace to play game
                    else if(!options.includes(""))
                    {
                        status=2;// draw
                    }
                }
                return status;
            }
            
            // declare status
            declarestatus();
            
            console.log(status);
            console.log(status);
            console.log(status);
            console.log(status);

            function declarestatus()
            {
                if(declarepermission==false)
                {
                    return;
                }
                if(status===1)
                {   
                    if(currentplayer==="X")
                    {
                        p1score++;
                        p1.textContent=p1score;
                        declare.textContent="Player-1 Won";
                    }
                    else
                    {
                        p2score++;
                        p2.textContent=p2score;
                        declare.textContent="Player-2 Won";
                    }

                    setTimeout(doreset,2000);
                }
                else if(status===2)
                {
                    declare.textContent="Draw !!!";                
                    setTimeout(doreset,2000);// nothing left so reset
                }
                else if(status===0)
                {
                    // current player change     
                    currentplayer= (currentplayer=="O")? "X":"O"; 
                    // declare.textContent=((currentplayer=="X")? "Player-1":"Player-2 ") + ` Turn`;
                    declare.textContent=`${currentplayer} Turn`;
                }
                
            }
                
            reset.addEventListener("click",doreset); // player wants to reset game

            function doreset()
            {
                for(var i=0;i<options.length;i++)
                {
                    options[i]="";
                }

                blocks.forEach(block =>
                    {
                    block.textContent="";
                })

                currentplayer="X";// default start
                status=0;

                declare.textContent="Let's begin!!!"
            }            
        })
    });