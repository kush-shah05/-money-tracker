export const Expenses=(data)=>{
    console.log("Received",data)
    const {product,desc,price,date}=data.props
    return(
          <div className="flex justify-between border-2 border-solid rounded-lg mb-[20px]">
        <div className="m-2 p-2">
          <h2 className="mb-[10px]">{product}</h2>
          <h2>{desc}</h2>
        </div>
        <div className="text-right m-2 p-2">
          {price>0?<h2 className="mb-[10px] text-[#1c1]">${price}</h2>:<h2 className="mb-[10px] text-[#c11]">${price.toFixed(2)}</h2>}
          <h2>{date.split('T')[0]} </h2>
        </div>
      </div>  
        
    )
}