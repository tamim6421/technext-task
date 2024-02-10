import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  const { data: allUser = [] } = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      return data;
    },
  });

  console.log(allUser?.users);

  return (
    <div className="my-20">
      <div>
        <h1 className="text-center text-2xl font-bold drop-shadow-lg ">
          All Users{" "}
        </h1>
        <hr
          className=" border-2 w-24 mt-2 border-orange-500 mx-auto"
          data-aos="fade-up"
        />
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 p-3">
        {allUser?.users?.map((user, idx) => (
          <div key={idx}>
            <div className="bg-white shadow-lg rounded-2xl  ">
              <img
                alt="profile"
                src="https://i.ibb.co/ZxMKLQr/Screenshot-6.png"
                className="w-full object-cover mb-4 rounded-t-lg h-48"
              />
              <div className="flex flex-col items-center justify-center p-4 -mt-16">
                <a href="#" className="relative block">
                  <img
                    alt="profile"
                    src={user?.image}
                    className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
                  />
                </a>

                <p className="p-1 px-4 text-xs text-white bg-green-600 rounded-full">
                  {user?.firstName}
                </p>

                <div className="w-full p-2 mt-4 rounded-lg">
                  <div className=" text-sm space-y-4 text-gray-600 ">
                    <div>
                      <Link to={`/userDetails/${user?.id}`}>
                        <div className="flex gap-1 items-center ">
                          <p className="text-lg font-semibold">Name :</p>
                          <button className=" btn btn-sm bg-gray-400 hover:text-black drop-shadow-xl text-white font-bold">
                            {user.firstName} {user.lastName}
                          </button>
                        </div>
                      </Link>
                    </div>
                    <div className="flex gap-1 items-center ">
                      <p className="text-lg font-semibold">
                        <MdEmail className="text-2xl text-gray-500" />
                      </p>

                      <p className="font-bold  ">{user?.email}</p>
                    </div>

                    <div className="flex gap-1 items-center">
                      <p className="text-lg font-semibold">
                        <FaPhone className="text-xl text-gray-500" />
                      </p>

                      <p className="font-bold ">{user.phone}</p>
                    </div>
                    <div className="">
                      <p className="font-bold text-lg  "> Address : </p>
                      <div>
                        {user?.address?.address} / {user?.address?.city} /{" "}
                        {user?.address?.state}
                      </div>
                    </div>
                    <div className="">
                      <p className="font-bold text-lg  "> Company : </p>
                      <div>{user?.company?.name}</div>
                    </div>

                    <div className="mt-5">
                      <Link to={`/userDetails/${user?.id}`}>
                        <button className="bg-gray-500  px-6 text-lg  flex items-center rounded-lg text-white cursor-pointer hover:bg-gray-700  mb-1">
                          <FaArrowRightLong className="text-xl" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
