import Random from "./components/Random"
import Tag from "./components/Tag";

export default function App() {
  return (

    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className=" bg-white rounded-lg w-11/12 text-center mt-[40px]  px-10 py-2 text-4xl font-bold ">  RANDOM GIFS </h1>
      
      <div className="flex flex-row w-11/12 items-center gap-x-10 mt-[30px]">
              <Random />                                      {/* It gererate random gif */}
              <Tag />                                         {/* it generate gif based on tag which is given by user */}
      </div>

    </div>

  );
}






/*
first install :- install i axios (this is used to run API and another method is using fetch)

*/