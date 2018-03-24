//let i = 0;


$(document).ready(()=>{
    $("#enter").click(()=>{
        $("#form").slideToggle("slow");
    });
});

$(document).ready(()=>{
    $("#edit").click(()=>{
        const id = prompt("Enter the roll No");
        if(sessionStorage.getItem(id) === null){
            alert("No student with id = "+id);
        }else{
            let obj = JSON.parse(sessionStorage.getItem(id));
            sessionStorage.removeItem(id);
            $("#form").slideToggle("slow");
            document.getElementById('name').value = obj.name;
            document.getElementById('roll').value = obj.roll;
            document.getElementById('year').value = obj.pass;
            document.getElementById('stream').value = obj.stream;
            
        }
    });
});

$(document).ready(()=>{
    $("#del").click(()=>{
        let checks = document.getElementsByClassName('check');
        let data = document.getElementById('rows');
        let roll = document.getElementsByClassName('roll');
        for(let i = 0; i < checks.length; i++){
            if(checks[i].checked){
                //data.removeChild(data.childNodes[i]);
                sessionStorage.removeItem(roll[i].innerHTML);
            }
        }
        location.reload();
    });
});

$(document).ready(()=>{
    $("#delete").click(()=>{
        let tr = document.getElementsByClassName('data');
        let td,check;
        for(let i = 0; i < tr.length; i++){
            td = document.createElement('td');
            check = document.createElement('input');
            check.type = "checkbox";
            check.className = "check";
            td.appendChild(check);
            tr[i].appendChild(td);
        }
        $("#delete").hide();
        $("#del").show();
    });
});

function showData(){
    let ntd,rtd,ptd,std,n,r,p,s,tr,item,obj;
    let table = document.getElementById('rows');
    for (let index = 0; index < sessionStorage.length; index++) {
        item = sessionStorage.getItem(sessionStorage.key(index));
        obj = JSON.parse(item);
        ntd = document.createElement('td');
        rtd = document.createElement('td');
        rtd.className = "roll";
        ptd = document.createElement('td');
        std = document.createElement('td');

        n = document.createTextNode(obj.name);
        r = document.createTextNode(obj.roll);
        p = document.createTextNode(obj.pass);
        s = document.createTextNode(obj.stream);

        ntd.appendChild(n);
        rtd.appendChild(r);
        ptd.appendChild(p);
        std.appendChild(s);

        tr = document.createElement('tr');
        tr.className = "data";
        tr.appendChild(ntd);
        tr.appendChild(rtd);
        tr.appendChild(ptd);
        tr.appendChild(std);
        table.appendChild(tr);
    }
}



function getData(){
    let name = document.getElementById('name').value;
    let roll = document.getElementById('roll').value;
    let pass = document.getElementById('year').value;
    let stream = document.getElementById('stream').value;

    if(name == "" || roll == "" || pass == "" || stream == ""){
        alert("Fill all the details");
        return;
    }
    if(!name.match(/^[A-Za-z]+$/))
    {
        alert("Enter valid name");
        return;
    }
    if(!roll.match(/^[0-9]+$/))
    {
        alert("Enter valid rollNo");
        return;
    }
    if(!pass.match(/^[0-9]+$/))
    {
        alert("Enter valid year");
        return;
    }
    if(pass.length != 4){
        alert("Enter valid year");
        return;
    }

    if(sessionStorage.getItem(roll) != null){
        alert("Enter Unique Id");
        exit(0);
    }


    let obj = { "name": `${name}`, "roll": `${roll}`, "pass":`${pass}`, "stream": `${stream}`};

    sessionStorage.setItem(roll,JSON.stringify(obj));

    location.reload();
}
