import PropTypes from 'prop-types';
import React from "react";
import '../App.css';


function TodoList({ list }) {
   
  function line(e) {
    const check = e.target;
    const parent = e.target.parentElement;
    
    if (check.checked) {
    parent.style.textDecoration = 'line-through';
    } else {
    parent.style.textDecoration = 'none';
    }
  }


  function hapus(e) {
   const check = document.querySelectorAll('#isi')

   check.forEach((f) => {
     if (f.style.textDecoration == 'line-through') {
      f.style.display = 'none';
     } else {
      f.style.display = 'flex';
     }
   })
   
   
  }
   

   return (
    <div>
       {list.map((e) => (
             <div key={e.id}>
             <p id="isi">
               {e.title}
               {e.description}

               <input type="checkbox" id="boxcheck" onClick={line}/>
             </p>  
             </div>

       ))}

         <button type="button" onClick={hapus}>Delete</button>
    </div>
    );
};

TodoList.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

export default TodoList;