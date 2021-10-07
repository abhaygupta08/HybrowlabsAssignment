import {useEffect,useState} from 'react';
import React from 'react';


export default function Details(){
    const [name, setName] = useState();
    const [designation, setDesignation] = useState();
    const [language, setLanguage] = useState();
    useEffect(() => {
        var tmp = localStorage.getItem("details");
        tmp = JSON.parse(tmp);
        
        setName(tmp.name);
        setDesignation(tmp.designation);
        setLanguage(tmp.language);
        // console.log(tmp);
    },[])
    return(<>
        <div className="text-xl	p-6 w-6/12 max-w-10/12 text-center bg-white drop-shadow-md flex-col items-center">
            <h1 className="text-4xl">Details Page</h1>
            <br />
            <br />
       {(name)?<div>
                <p><b>Name : </b>{name}</p>
      <br/>
                <p><b>Designation : </b>{designation}</p>
                <br />
                <p><b>Language : </b>{language}</p>
       </div>:"Data not saved"}
      </div>
    </>)
}