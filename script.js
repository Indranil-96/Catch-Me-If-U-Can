let box=document.getElementById("container");

const randomvalueGenerator=()=>{
    let max=65;
    let min =10;
    let rantop=Math.floor(Math.random()*(max-min+1))+min;
    let ranbottom=Math.floor(Math.random()*(max-min+1))+min;
    let ranleft=Math.floor(Math.random()*(max-min+1))+min;
    let ranright=Math.floor(Math.random()*(max-min+1))+min;
    return{
        ranleft,
        rantop,
        ranbottom,
        ranright,
    } 
}


const moveBox=()=>{
    let result=randomvalueGenerator();
    let up=result.rantop;
    let down=result.ranbottom;
    let left=result.ranleft;
    let right=result.ranright;

    // let location=box.getBoundingClientRect();

    box.style.marginTop=`${up}%`;
    box.style.marginBottom=`${down}%`;
    box.style.marginLeft=`${left}%`;
    box.style.marginRight=`${right}%`;

}

box.addEventListener("mouseover",moveBox);