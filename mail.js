const tab = document.getElementById("tab");
const inbox = document.getElementById("inbox")
const list = document.getElementById('list')
const inboxName = document.getElementById('inboxName');
//--글 써주는곳
const tagName = document.getElementsByClassName('tagName');
const mailTitle = document.getElementById('mailTitle');
const userName = document.getElementById('userName');
const mailDate = document.getElementById('mailDate');
const content = document.getElementById('content');

let lists = []
let tabs = [];

for(let i = 0; i < tab.children.length;i++ ){
    tabs[i] = tab.children[i]
    tabs[i].order = i;
     tabs[i].addEventListener('click', function(e){
         clear_('istab');
        console.log(tabs[i] + "/ order:" + tabs[i].order) 
        e.target.classList.add('active');
        changePos(tabs[i].order);
    })   
}

function changePos(order){
   if(order == 0){
        inboxName.innerText = "Home"
        console.log("0 is clicked")
    }
    else if(order == 1){
        inboxName.innerText = "Customers"
        console.log("1 is clicked")
    }
    else if(order == 2){
        inboxName.innerText ='Inbox'
        console.log("2 is clicked")
    }
    else{
        inboxName.innerText='Settings'
        console.log("3 is clicked")
    }
}

function clear_(act){
    if(act == 'istab'){
        for(let i = 0; i < tabs.length;i++){
            tabs[i].classList.remove('active');
        }
    }
    else if(act == 'islist'){
        for(let i = 0; i < lists.length;i++){
            lists[i].classList.remove('active');
        }
    }
}

//------------------------------------------
for(let i = 0; i<list.children.length;i++){
    lists[i] = list.children[i]
    lists[i].addEventListener("click", function(e){
        if(e.target == e.currentTarget){
            clear_('islist'); 
            e.target.classList.add('active');
            
        }
    })
}

const listobj =[   
    {
        names :'David James',
        content : 'Hi David,<br>Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum assumenda ipsam magnam cum possimus. Laudantium nulla amet tempore excepturi id expedita dolorum quisquam deserunt. Odit vel sint dolor eos. Ea blanditiis animi. Quibusdam unde unde. Perspiciatis vel pariatur qui. Deleniti omnis est quae. Laboriosam numquam amet aliquid.<br> Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum assumenda ipsam magnam cum possimus. Laudantium nulla amet tempore excepturi id expedita dolorum quisquam deserunt. Odit vel sint dolor eos. Ea blanditiis animi. Quibusdam unde unde. Perspiciatis vel pariatur qui. Deleniti omnis est quae. Laboriosam numquam amet aliquid.Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum<br> Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum assumenda ipsam magnam cum possimus. Laudantium nulla amet tempore excepturi id expedita dolorum ',
        tag : 'Design',
        title : 'Protective Preventative Maintenance',
        maildate :'Jan 5'
    },
    {
        names : 'Tony Stark',
        content : 'Hi David,<br>Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum assumenda ipsam magnam cum possimus. Laudantium nulla amet tempore excepturi id expedita dolorum quisquam deserunt. Odit vel sint dolor eos. Ea blanditiis animi. Quibusdam unde unde. Perspiciatis vel pariatur qui. Deleniti omnis est quae. Laboriosam numquam amet aliquid.<br> Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum assumenda ipsam magnam cum possimus. Laudantium nulla amet tempore excepturi id expedita dolorum quisquam deserunt. Odit vel sint dolor eos. Ea blanditiis animi. Quibusdam unde unde. Perspiciatis vel pariatur qui. Deleniti omnis est quae. Laboriosam numquam amet aliquid.Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum<br> Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum assumenda ipsam magnam cum possimus. Laudantium nulla amet tempore excepturi id expedita dolorum ',
        tag : 'Sales',
        title : 'Does this mail service work well?',
        maildate :'Jan 4'
    }
]

