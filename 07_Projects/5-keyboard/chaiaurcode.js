console.log("Project-5");

const insert=document.getElementById('insert');

window.addEventListener('keydown',(e)=>{
  //on pressing any key everything on window screen should be replaced by the below elements.
    insert.innerHTML=`
     <div class='color'>
       <table>
         <tr>
           <th>Key</th>
           <th>Keycode</th>
           <th>Code</th>
           <th>ASCII</th>
         </tr>
         <tr>
           <td>${e.key===" "? "Space" :e.key}</td>
           <td>${e.keyCode}</td>
           <td>${e.code}</td>
           <td>${e.key.codePointAt(0)}</td>
         </tr>
        </table>
     </div>
    `
})