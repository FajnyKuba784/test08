import { useState } from "react";
import { Button, Form, FormCheck, FormLabel } from "react-bootstrap";


export default function Manager(){

    const [checked,setChecked] = useState(true)
    const [strona,setStrona] = useState("")
    const [login,setLogin] = useState("")
    const [haslo,setHaslo] = useState("Automatycznie generowane")    
    const [strona2,setStrona2] = useState("")
    const [login2,setLogin2] = useState("")
    const [haslo2,setHaslo2] = useState("")
    const stworz = ()=>{
        setStrona2(strona)
        setHaslo2(haslo)
        setLogin2(login)
    }
    return(
        <div>
            <div>
                <h1>Menadżer haseł - JJ</h1>
                <FormLabel>Adres WWW:</FormLabel>
                <input type="email" className="form-control" placeholder="Adres strony WWW" onChange={(e)=>{setStrona(e.target.value)}}/>
                <FormLabel>Login:</FormLabel>
                <input type="text" className="form-control" placeholder="Twój login" onChange={(e)=>{setLogin(e.target.value)}}/>
                <FormCheck defaultChecked label="Wygeneruj hasło" onChange={()=>{setChecked(!checked)}}/>
                <FormLabel>Hasło:</FormLabel>
                <input type="password" className="form-control" disabled={checked?true:false} onChange={(e)=>{setHaslo(e.target.value)}}/>
                <Button onClick={()=>{stworz()}}>Zapisz</Button>
            </div>
            <div>
                <p className="m-2" style={{color:"blue"}}>Adres: {strona2}</p>
                <p className="m-2">Login: {login2}</p>
                <p className="m-2">Hasło: {haslo2}</p>
            </div>
        </div>
    )
}