import './product.css'
function ProductDetail(){

    return(
        <aside className="product-detail felx-col fixed right-0 bg-slate-100 border border-black rounded-xl ">
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-xl '>
                    Detalles
                </h2>
                <button className="w-8 h-8 rounded-full bg-slate-100"> 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZlU74JZ-aYE-bGBFLE9P3Yqzw7jqCqDlgQ&s" className='w-full h-full object-cover bg-slate-100'/>
                </button>
            </div>
            <div>
                
            </div>
        </aside>
    );
}
export {ProductDetail}