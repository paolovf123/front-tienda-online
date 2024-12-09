import React from "react"
import { LayOut } from "../../Components/LayOut"
import { ShoppingCatContext } from "../../Context"
import { NavLink } from "react-router-dom";

function Registro(){
    const context= React.useContext(ShoppingCatContext);
    const registrarUsuario=(email,password)=>{
        context.setUsuarios([...context.usuarios,{email:email, password:password}]);
        context.setEmail("");
        context.setPassword("");
    }
    const patronEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const emailValido=(email)=>{
            patronEmail.test(email)
            ?context.setEmail(email)
            :context.setEmailError(true)
        }
    return(
       <LayOut>
        {
            context.isMobile
            ?
                <div className="flex flex-col items-center w-full h-screen">
                    <h1 className="p-4">Registrar cuenta</h1>
                    <div className="flex flex-col w-full items-center">
                        <p className="text-lg font-thin left-0 text-gray-500">Ingrese su email:</p>
                        <input type="text" placeholder="TU CORREO" className="m-4 mt-1 border text-black border-black w-4/5 text-center text-base font-semibold rounded-md h-8" required/>
                    </div>
                    <div className="flex flex-col w-full items-center">
                        <p className="text-lg font-thin left-0 text-gray-500">Ingrese su contraseña:</p>
                        <input type="password" placeholder="****************" className="m-4 mt-1 border border-black w-4/5 text-center text-base font-thinrounded-xl h-8 rounded-md"required/>
                    </div>
                    <button className="mt-4 w-4/5 bg-black rounded-md text-white font-thin text-lg h-14">
                        Registrar
                    </button>
                </div>

            :<>
                <div className="flex flex-col items-center w-full h-screen">
                    <h1 className="p-4">Registrar cuenta</h1>
                    <div className="flex flex-col w-full items-center">
                        <p className="text-lg font-thin left-0 text-gray-500">Ingrese su email:</p>
                        <input type="text" placeholder={`${context.emailError? 'Ingresa un correo valido' : 'ejemplodecorreo@dominio.com'}`} className="m-4 mt-1 border text-black border-black w-1/5 text-center text-base font-semibold rounded-md h-8" 
                        onChange={(e)=>{
                        e?emailValido(e.target.value)
                        :none
                        }}/>
                    </div>
                    <div className="flex flex-col w-full items-center">
                        <p className="text-lg font-thin left-0 text-gray-500">Ingrese su contraseña:</p>
                        <input type="password" placeholder="****************" className="m-4 mt-1 border border-black w-1/5 text-center text-base font-thinrounded-xl h-8 rounded-md"
                        onChange={(e)=>{
                            e?context.setPassword(e.target.value)
                            : none
                        }}/>
                    </div>
                    <NavLink to='/' className="mt-4 w-1/5  h-14" >
                        <button className="w-full h-full bg-black rounded-md text-white font-thin text-lg" onClick={()=>{
                            if(context.email == ""){

                            }else if(context.password == ""){

                            }else{
                                registrarUsuario(context.email,context.password)
                            }
                        }}>
                            Registrar
                        </button>
                    </NavLink>
                </div>
            </>
        }
       </LayOut>
    )
}
export {Registro}