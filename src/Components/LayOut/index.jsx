function LayOut({children}){
    return(
        <div className="flex flex-col items-center mt-10 text-4xl font-bold">
            {children}
        </div>
    );
}
export {LayOut}