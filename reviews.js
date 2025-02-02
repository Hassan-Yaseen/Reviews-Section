const reviewData=[
    {
        id:1,
        img:"person1.jpeg",
        name:"James Oliver",
        job:"Web Developer",
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi officiis dolorum architecto veniam optio, reiciendis quasi fugiat distinctio! Exercitationem alias nesciunt aliquid itaque repudiandae nihil, labore adipisci expedita suscipit veniam. Lorem ipsum dolor sit amet"
    },
    {
        id:2,
        img:"person2.jpeg",
        name:"Liam Thomas",
        job:"UI/UX Designer",
        info:"Quisquam rerum ipsum eligendi veniam non obcaecati temporibus corporis, alias distinctio! Dolorum, quia odio dignissimos ratione facilis impedit necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quae fugit neque! Dolorum ratione consequatur"
    },
    {
        id:3,
        img:"person3.jpeg",
        name:"Noah Alexander",
        job:"App Developer",
        info:"Recusandae similique dolore pariatur cupiditate nulla repudiandae! Necessitatibus aliquam, vero tempore totam eveniet consequatur ducimus repellat inventore ad soluta autem? Molestiae quaerat reiciendis omnis ipsum fugit, dolorem corrupti harum tempora. Ipsam eligendi ad arch"
    },
    {
        id:4,
        img:"person4.jpeg",
        name:"Emma Grace",
        job:"Devops Expert",
        info:"Perspiciatis sapiente reiciendis temporibus nihil id dolore. Ducimus doloremque atque quis corrupti minus culpa autem eligendi maiores sed ipsum. Magnam quidem laboriosam ex reiciendis temporibus distinctio voluptate corporis cumque numquam! Lorem ipsum dolor sit amet consectetur"
    },
    {
        id:5,
        img:"person5.jpeg",
        name:"Ava Rose",
        job:"Cyber Security",
        info:"Perspiciatis sapiente reiciendis temporibus nihil id dolore. Ducimus doloremque atque quis corrupti minus culpa autem eligendi maiores sed ipsum. Magnam quidem laboriosam ex reiciendis temporibus distinctio voluptate corporis cumque numquam! Lorem ipsum dolor sit amet consectetur"
    }
]

let img=document.querySelector("#image");
let names=document.querySelector("#name");
let job=document.querySelector("#job");
let info=document.querySelector("#info")
let prevBtn=document.querySelector(".leftBtn");
let nextBtn=document.querySelector(".rightBtn");

let currValue=0;

const update=()=>{
    let item=reviewData[currValue];
    img.src=item.img;
    names.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.info;
}

window.addEventListener("load",()=>{
    update();
})

prevBtn.addEventListener("click",()=>{
    if(currValue==1||currValue==2||currValue==3||currValue==4){
        currValue--;
        update();
    }
    else if(currValue==0){
        currValue=4;
        update();
    }
})

nextBtn.addEventListener("click",()=>{
    if(currValue==0||currValue==1||currValue==2||currValue==3){
        currValue++;
        update();
    }
    else if(currValue==4){
        currValue=0;
        update();
    }
})