function LayOut({children}){
    return(
        <div className="flex flex-col items-center text-4xl font-bold">
            {children}
        </div>
    );
}
export {LayOut}