import { useQuery } from "@tanstack/react-query";

const Home = () => {


    const { data: allUser = [] } = useQuery({
        queryKey: ["allUser"],
        queryFn: async () => {
          const response = await fetch('https://dummyjson.com/users');
          const data = await response.json(); 
          return data;
        },
      });
      
      console.log(allUser);


    return (
        <div className="mt-20">
          <div>
          <h1 className="text-center text-2xl font-bold drop-shadow-lg ">All Users </h1>
           <hr className=" border-2 w-24 mt-2 border-orange-500 mx-auto" data-aos="fade-up"  />
          </div>

          <div>
            
          </div>
        </div >
    );
};

export default Home;