export const Shimmer=()=>{
return(
    <div className="max-w-[360px] my-[30px] mx-auto">
      <h1 className="text-center text-[#fff] m-0 text-3xl">Loading...</h1>

      <form className="m-[20px]">
        <div className="flex gap-[5px] mb-[5px]">
          <input
            type="text"
            placeholder={"+200 new samsung tv"}
            className="w-[100%] bg-transparent px-[2px] py-[5px] border-[2px] border-solid border-[#30313d] rounded-lg"
          />
          <input
            type="datetime-local"
            value={"date"}
            className="bg-transparent text-[#777]"
          />
        </div>

        <div>
          <input
            type="text"
            value={"desc"}
            placeholder={"description"}
            className="w-[100%] bg-transparent px-[2px] py-[5px] border-[2px] border-solid border-[#30313d] rounded-lg"
          />
        </div>

        <button className="w-[100%] bg-black mt-[5px] text-white border rounded-lg p-[5px]">
          Add New Transaction
        </button>
      </form>
       
        <div className="flex justify-between border-2 border-solid rounded-lg mb-[20px]">
        <div className="m-2 p-2">
          <h2 className="mb-[10px]">Loading...</h2>
          <h2>Loading...</h2>
        </div>
        <div className="text-right m-2 p-2">
          <h2 className="mb-[10px] text-[#1c1]">Loading...</h2>
          <h2>Loading...</h2>
        </div>
      </div>

      <div className="flex justify-between border-2 border-solid rounded-lg mb-[20px]">
        <div className="m-2 p-2">
          <h2 className="mb-[10px]">Loading...</h2>
          <h2>Loading...</h2>
        </div>
        <div className="text-right m-2 p-2">
          <h2 className="mb-[10px] text-[#1c1]">Loading...</h2>
          <h2>Loading...</h2>
        </div>
      </div>

      <div className="flex justify-between border-2 border-solid rounded-lg mb-[20px]">
        <div className="m-2 p-2">
          <h2 className="mb-[10px]">Loading...</h2>
          <h2>Loading...</h2>
        </div>
        <div className="text-right m-2 p-2">
          <h2 className="mb-[10px] text-[#1c1]">Loading...</h2>
          <h2>Loading... </h2>
        </div>
      </div>
    </div>
)
}