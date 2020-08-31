
var resBody = document.getElementById('result')

function submitbtn()
{
    var creditsum = 0
    var gradevalues=[]
    var credits = document.querySelectorAll('input')
    var res
    var grades = document.querySelectorAll('select')
    var gradesum=0
    var final=0
    
    //credits sum
    for (let index = 0; index < credits.length; index++) { 
        creditsum = creditsum + Number(credits[index].value) 
        
    }
    //grade
    for (let j = 0; j < credits.length; j++) {
        
        for (let i = j; i < grades.length; i++) {
            
            if(grades[i].value == 'O')
            {
                res = Number(credits[j].value)*5.0
                gradevalues.push(res)
                
            }
            else if(grades[i].value == 'A+')
            {
                res = Number(credits[j].value)*4.5
                gradevalues.push(res)
                
            }
            else if(grades[i].value == 'A')
            {
                res = Number(credits[j].value)*4.0
                gradevalues.push(res)
                
            }
            else if(grades[i].value == 'B+')
            {
                res = Number(credits[j].value)*3.5
                gradevalues.push(res)
                
            }
            else if(grades[i].value == 'B')
            {
                res = Number(credits[j].value)*3
                gradevalues.push(res)
                
            }
            else if(grades[i].value == 'C')
            {
                res = Number(credits[j].value)*2.5
                gradevalues.push(res)
                
            }
            else if(grades[i].value == 'P')
            {
                res = Number(credits[j].value)*2.0
                gradevalues.push(res)
                
            }
            else if(grades[i].value == 'F')
            {
                res = Number(credits[j].value)*1.5
                gradevalues.push(res)
                
            }
            else if(grades[i].value == 'AB')
            {
                res = Number(credits[j].value)*1
                gradevalues.push(res)
                
            }
            else
            {
                res = Number(credits[j].value)*0.5
                gradevalues.push(res)
                
            }
            res = 0
            break;
        }    
    }
    //grades sum
    for (let i = 0; i < gradevalues.length; i++) {   
        gradesum = gradesum + gradevalues[i]
    }
    final =(gradesum/creditsum)*2
    
    document.getElementById('resultText').textContent = final.toFixed(2)
    final = final.toString()
    if(final !== 'NaN')
    {
    resBody.style.visibility='visible'
   document.body.style.pointerEvents='none'
   resBody.style.pointerEvents='all'
    }
    else{
        alert('Please enter your credits!!!')
    }
}

function addbtn()
{
    //var cont = document.querySelector('.container')
    var ullist = document.querySelector('.ul')
    var newlistitem = document.createElement('li')

    var div1 =document.createElement('div')
    div1.setAttribute('class','credits')
    var newinput = document.createElement('input')
    newinput.type='number'
    newinput.setAttribute('id','credit')
    
    var div2 =document.createElement('div')
    div2.setAttribute('class','grade')
    var newselect = document.createElement('select')
    var newoption1 = document.createElement('option')

    
   var orgselect = document.querySelector('select')
    //appending options
    for (let index = 0; index < 10; index++) {
        var newoption1 = document.createElement('option')
        var nod1 = document.createTextNode(orgselect[index].value)
        newoption1.appendChild(nod1)
        newselect.appendChild(newoption1) 
    }

    div1.appendChild(newinput)
    newlistitem.appendChild(div1)
    div2.appendChild(newselect)
    newlistitem.appendChild(div2)
    ullist.appendChild(newlistitem)
    
}

//result


function funcclose()
{
  resBody.style.visibility='hidden'
  
  resBody.style.pointerEvents
    document.body.style.pointerEvents='all'
}