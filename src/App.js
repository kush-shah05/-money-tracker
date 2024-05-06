import "./App.css";
import { useEffect, useState } from "react";
import { Expenses } from "./Expenses";
import { Shimmer } from "./Shimmer";

function App() {
  const [product, setproduct] = useState("");
  const [date, setdate] = useState("");
  const [desc, setdesc] = useState("");
  const [data,newdata]=useState([]);

  const handlesubmit = () => {
    //ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + "/transaction";
    //console.log(product)
    const price = product.split(' ')[0];
    console.log(product.substring(price.length + 1));
    //fetch(url)
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        price,
        product:product.substring(price.length+ 1),
        desc,
        date,
      }),
    }).then((res) => res.json().then((json) =>
     {setdesc('');
     setdate('');
      setproduct("");
     console.log("result", json)}));
  };


//data fetching


useEffect(()=>{
  fetchdata();
},[])
const fetchdata=async()=>{
const data=await fetch("http://localhost:4000/api/transactions");
const json=await data.json();
newdata(json);
console.log(json);
}

//value for sum of total  values
let sum=0;
data.map((x)=>{
sum=sum+x.price;



})
return data?.length===0?<Shimmer />:
   (
    <div className="max-w-[360px] my-[30px] mx-auto">

      <h1 className="text-center text-[#fff] m-0 text-3xl">{sum.toFixed(2)}</h1>

      <form className="m-[20px]" onSubmit={handlesubmit}>
        <div className="flex gap-[5px] mb-[5px]">
          <input
            type="text"
            value={product}
            onChange={(e) => setproduct(e.target.value)}
            placeholder={"+200 new samsung tv"}
            className="w-[100%] bg-transparent px-[2px] py-[5px] border-[2px] border-solid border-[#30313d] rounded-lg"
            required
          />
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setdate(e.target.value)}
            className="bg-transparent text-[#777]"
            required
          />
        </div>

        <div>
          <input
            type="text"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
            placeholder={"description"}
            className="w-[100%] bg-transparent px-[2px] py-[5px] border-[2px] border-solid border-[#30313d] rounded-lg"
            required
          />
        </div>

        <button className="w-[100%] bg-black mt-[5px] text-white border rounded-lg p-[5px]">
          Add New Transaction
        </button>
      </form>
       
       
       {data?.map((data)=>(
        <Expenses key={data._id} props={data}/> 
       ))}
      
    </div>
  );}


export default App;
