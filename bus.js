const textt = document.querySelector("#textt");
const btn = document.querySelector("#btn1");
const h1 = document.querySelector("#output");
const reach = document.querySelector("#reach");
const timebtns = document.querySelector("#time");
const run_times = document.querySelector("#run_speed");
const more_haves = document.querySelector("#more_have");
const cclick = document.querySelector("#cclick");
const ccclick = document.querySelector("#ccclick");
const in_account = document.querySelector("#accs");
const out_account = document.querySelector("#acc");
const btn_account = document.querySelector("#accc");
const issue = document.querySelector("#iss");
const issue_text = document.querySelector("#cos");
const issue_btn = document.querySelector("#sumbit");
const vellore_btn = document.querySelector("#vclick");
const villupuraram_btn = document.querySelector("#viclick");
const pudukkottai_btn = document.querySelector("#pclick");
const tiruppur_btn = document.querySelector("#tclick");
const oosur_btn = document.querySelector("#oclick");


btn.addEventListener("click",() =>{
    let invok = parseInt(textt.value)+5;
    h1.textContent = textt.value = '';
    console.log(invok);
    h1.textContent = invok;
}
);

timebtns.addEventListener("click",() =>{
    let butin = run_times.value; 
    let butin2 = more_haves.value;
    let add = parseInt(butin) +  parseInt(butin2) ;
    reach.textContent = add;
})

cclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create01";
    create.innerHTML = "<h1>Your select Place : Tiruvannamalai</h1>" ;
    dinamic.appendChild(create);
}
)

cclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create";
    create.innerHTML = "<h4>1). 7.00 Am to 10.00 Am</h3>" ;
    dinamic.appendChild(create);
}
)

cclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create";
    create.innerHTML = "<h4>2). 8.00 Am to 11.00 Am</h3>" ;
    dinamic.appendChild(create);
}
)

cclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create";
    create.innerHTML = "<h4>3). 8.30 Am to 11.25 Am</h3>" ;
    dinamic.appendChild(create);
}
)

cclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create";
    create.innerHTML = "<h4>4). 10.00 Am to 12.00 Pm</h3>" ;
    dinamic.appendChild(create);
}
)
cclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create";
    create.innerHTML = " <h4> 5). 10.00 Am to 1.00 Pm</h3>" ;
    dinamic.appendChild(create);
}
)
cclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create";
    create.innerHTML = "<h4>6). 11.00 Am to 2.00 Pm</h3>" ;
    dinamic.appendChild(create);
}
)

btn_account.addEventListener("click",() =>{
    const news = in_account.value;
    out_account.textContent = in_account.value = '';
    console.log(news);
    out_account.textContent = news;
})

ccclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create01";
    create.innerHTML = "<h1>Your select Place : Kanjipuram</h1>" ;
    dinamic.appendChild(create);
}
)

ccclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create";
    create.innerHTML = "<h4>1). 6.00 Am to 8.00 Am</h3>" ;
    dinamic.appendChild(create);
}
)

ccclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create";
    create.innerHTML = "<h4>2). 7.00 Am to 8.30 Am</h3>" ;
    dinamic.appendChild(create);
}
)

ccclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create";
    create.innerHTML = "<h4>3). 8.00 Am to 8.30 Am</h3>" ;
    dinamic.appendChild(create);
}
)

ccclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create";
    create.innerHTML = "<h4>4). 9.30 Am to 11.30 Am</h3>" ;
    dinamic.appendChild(create);
}
)

ccclick.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create";
    create.innerHTML = "<h4>5). 2.00 Am to 12.30 Am</h3>" ;
    dinamic.appendChild(create);
}
)

issue_btn.addEventListener("click",() =>{
    issue_text.value = "";
})
vellore_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create01";
    create.innerHTML = "<h1>Your select Place : Vellore</h1>" ;
    dinamic.appendChild(create);
}
)
vellore_btn.addEventListener("click", () => {
   const create = document.createElement("elemnt");
    create.classList = "create";
    create.innerHTML = "<h4>1). 8.30 Am to 1.25 Am</h3>" ;
    dinamic.appendChild(create);
})
vellore_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>2). 2.00 Am to 8.25 Am</h3>" ;
     dinamic.appendChild(create);
 })
 vellore_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>3). 8.30 Am to 11.25 Am</h3>" ;
     dinamic.appendChild(create);
 })
 vellore_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>4). 7.30 Am to 9.25 Am</h3>" ;
     dinamic.appendChild(create);
 })
 vellore_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>5). 8.00 Am to 11.00 Am</h3>" ;
     dinamic.appendChild(create);
 })
 vellore_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>6). 10.30 Am to 11.25 Am</h3>" ;
     dinamic.appendChild(create);
 })

 villupuraram_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create01";
    create.innerHTML = "<h1>Your select Place : Vellore</h1>" ;
    dinamic.appendChild(create);
}
)
villupuraram_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>1). 5.30 Am to 6.25 Am</h3>" ;
     dinamic.appendChild(create);
 })
 villupuraram_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>2). 9.30 Am to 10.00 Am</h3>" ;
     dinamic.appendChild(create);
 })
 villupuraram_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>3). 9.30 Am to 11.25 Am</h3>" ;
     dinamic.appendChild(create);
 })
 villupuraram_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>4). 7.30 Am to 8.25 Am</h3>" ;
     dinamic.appendChild(create);
 })
 villupuraram_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>5). 8.00 Am to 9.25 Am</h3>" ;
     dinamic.appendChild(create);
 })
 villupuraram_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>6). 10.23 Am to 11.00 Am</h3>" ;
     dinamic.appendChild(create);
 })
 pudukkottai_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create01";
    create.innerHTML = "<h1>Your select Place : Pudukkottai</h1>" ;
    dinamic.appendChild(create);
}
)
pudukkottai_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>1). 11.20 Am to 12.00 Am</h3>" ;
     dinamic.appendChild(create);
 })
pudukkottai_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>2). 7.23 Am to 8.00 Am</h3>" ;
     dinamic.appendChild(create);
 })
 pudukkottai_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>3). 9.00 Am to 10.00 Am</h3>" ;
     dinamic.appendChild(create);
 })
 pudukkottai_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>4). 10.00 Am to 11.00 Am</h3>" ;
     dinamic.appendChild(create);
 })
 pudukkottai_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>5). 10.43 Am to 11.30 Am</h3>" ;
     dinamic.appendChild(create);
 })
 pudukkottai_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>6). 9.10 Am to 11.00 Am</h3>" ;
     dinamic.appendChild(create);
 })

 tiruppur_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create01";
    create.innerHTML = "<h1>Your select Place : Tiruppur</h1>" ;
    dinamic.appendChild(create);
}
)
tiruppur_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>1). 06.00 Am to 7.10 Am</h3>" ;
     dinamic.appendChild(create);
 })
 tiruppur_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>2). 06.40 Am to 7.20 Am</h3>" ;
     dinamic.appendChild(create);
 })
 tiruppur_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>3). 07.00 Am to 8.12 Am</h3>" ;
     dinamic.appendChild(create);
 })
 tiruppur_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>3). 07.13 Am to 8.10 Am</h3>" ;
     dinamic.appendChild(create);
 })
 tiruppur_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>5). 08.00 Am to 9.10 Am</h3>" ;
     dinamic.appendChild(create);
 })
 tiruppur_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>6). 09.00 Am to 10.10 Am</h3>" ;
     dinamic.appendChild(create);
 })
 oosur_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
    create.classList = "create01";
    create.innerHTML = "<h1>Your select Place : Oosur</h1>" ;
    dinamic.appendChild(create);
}
)
oosur_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>1). 02.00 Am to 3.10 Am</h3>" ;
     dinamic.appendChild(create);
 })
 oosur_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>2). 02.23 Am to 3.30 Am</h3>" ;
     dinamic.appendChild(create);
 })
 oosur_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>3). 03.00 Am to 4.19Am</h3>" ;
     dinamic.appendChild(create);
 })
 oosur_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>4). 03.40 Am to 4.10 Am</h3>" ;
     dinamic.appendChild(create);
 })
 oosur_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>5). 05.00 Am to 6.50 Am</h3>" ;
     dinamic.appendChild(create);
 })
 oosur_btn.addEventListener("click", () => {
    const create = document.createElement("elemnt");
     create.classList = "create";
     create.innerHTML = "<h4>6). 07.00 Am to 8.10 Am</h3>" ;
     dinamic.appendChild(create);
 })