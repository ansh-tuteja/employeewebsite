const element = document.getElementById('loginsignup2');
const body = document.getElementById("all");
function Visibility() 
{
    element.style.visibility = 'visible';
    body.style.opacity='0.05';
}  
const head = document.getElementById("head");
const para = document.getElementById("para");
const cover = document.getElementById("coverid");
const colorchange  = document.getElementById("colorchange");
function move()
{    
 
    cover.style.transform = 'translateX(0)';
    cover.style.borderTopRightRadius="100%";
    cover.style.borderBottomRightRadius="100%";
    cover.style.borderTopLeftRadius="0";
    cover.style.borderBottomLeftRadius="0";
    head.innerText = 'Welcome!';
    para.innerText = 'Enter your Personal Details to see the Tasks Assigned to you.';        
}
function moveback()
{
  
    cover.style.transform = 'translateX(100%)';
    cover.style.borderTopLeftRadius="100%";
    cover.style.borderBottomLeftRadius="100%";
    cover.style.borderTopRightRadius="0";
    cover.style.borderBottomRightRadius="0";
    head.innerText = 'Welcome!';
    para.innerText = 'Enter your Personal Details to see the Tasks Progress of Your Team.'         
}

function admin()
{
    const email = document.getElementById('emailid').value;
    const pass = document.getElementById('passwordid').value;
    const incorrect = document.getElementById('invalid');
    if(email === "manager" && pass==="manager123")
    {
        window.location.href='admin.html';
    }
    else{
        incorrect.innerText="Incorrect Email or Password!";
    }
}

function emp()
{
    const email = document.getElementById('emailidemp').value;
    const pass = document.getElementById('passwordidemp').value;
    const incorrect = document.getElementById('invalidemp');
    if(email === "employee1" && pass==="employee123")
    {
        window.location.href='emp1.html';
    }
    else if(email === "employee2" && pass==="employee123")
    {
        window.location.href='emp2.html';
    }
    else{
        incorrect.innerText="Incorrect Email or Password!";
    }
}

const container=document.getElementById('align');

function assign()
{
    const taskname= document.getElementById('taskname').value;
    const taskdesc=document.getElementById('taskdesc').value;
    const date=document.getElementById('desc').value;
    const assignedto=document.getElementById('select').value;
    const task=document.createElement('span');
    task.classList.add('tasks');
    task.innerHTML=`<span class="tasks">Task-1 (Prabhash)+<span id="date"><i class="fa-solid fa-circle-dot" style="color: #ff0000;"></i> Today</span></span>`;
}





