import React from "react"
import { LayOut } from "../../Components/LayOut"
import { ShoppingCatContext } from "../../Context"
function SignIn(){
    const context= React.useContext(ShoppingCatContext);
    return(
       <LayOut>
        {
            context.isMobile
            ?
                <div className="flex flex-col items-center w-full h-screen">
                    <h1 className="p-4">Iniciar Sesión</h1>
                    <div className="flex flex-col w-full items-center">
                        <p className="text-lg font-thin left-0 text-gray-500">Email:</p>
                        <input type="text" placeholder="TU CORREO" className="m-4 mt-1 border text-black border-black w-4/5 text-center text-base font-semibold rounded-md h-8"/>
                    </div>
                    <div className="flex flex-col w-full items-center">
                        <p className="text-lg font-thin left-0 text-gray-500">Contraseña:</p>
                        <input type="password" placeholder="****************" className="m-4 mt-1 border border-black w-4/5 text-center text-base font-thinrounded-xl h-8 rounded-md"/>
                    </div>
                    <button className="mt-4 w-4/5 bg-black rounded-md text-white font-thin text-lg h-14">
                        Ingresar
                    </button>
                    <button className="mt-4 text-base font-medium text-gray-500">
                        Olvide mi constraseña
                    </button>
                    <button className="mt-4 w-4/5 rounded-md text-gray-500 border border-gray-500 font-thin text-lg h-14">
                        Registrate
                    </button>
                </div>

            :<>
                <div className="flex flex-col items-center w-full h-screen">
                    <h1 className="p-4">Iniciar Sesión</h1>
                    <div className="flex flex-col w-full items-center">
                        <p className="text-lg font-thin left-0 text-gray-500">Email:</p>
                        <input type="text" placeholder="TU CORREO" className="m-4 mt-1 border text-black border-black w-1/5 text-center text-base font-semibold rounded-md h-8"/>
                    </div>
                    <div className="flex flex-col w-full items-center">
                        <p className="text-lg font-thin left-0 text-gray-500">Contraseña:</p>
                        <input type="password" placeholder="****************" className="m-4 mt-1 border border-black w-1/5 text-center text-base font-thinrounded-xl h-8 rounded-md"/>
                    </div>
                    <button className="mt-4 w-1/5 bg-black rounded-md text-white font-thin text-lg h-14">
                        Ingresar
                    </button>
                    <button className="mt-1 text-base font-medium text-gray-500">
                        Olvide mi constraseña
                    </button>
                    <button className="mt-4 w-1/5 rounded-md text-gray-500 border border-gray-500 font-thin text-lg h-14">
                        Registrate
                    </button>
                </div>
            </>
        }
       </LayOut>
    )
}
export {SignIn}