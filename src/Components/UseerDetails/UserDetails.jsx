/* eslint-disable react-hooks/rules-of-hooks */
import { useLoaderData } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const dataDetails = () => {
  const data = useLoaderData();
//   console.log(data);

  return (
    <div className="my-20 p-3">
      <div className="card w-3/4 mx-auto p-3 bg-green-50 shadow-xl">
        <div className="avatar flex justify-center items-center">
          <div className="w-36  rounded">
            <img src={data.image} alt="data" />
          </div>
        </div>
        <div className="card-body">
          <div className=" text-sm space-y-4 text-gray-600 ">
            <div>
              <div className="">
                <p className="text-lg font-semibold">
                  {" "}
                  First Name :<span> {data.firstName} </span>
                </p>
              </div>

              <div className="">
                <p className="text-lg font-semibold">
                  {" "}
                  Last Name :<span> {data.lastName} </span>
                </p>
              </div>
            </div>

            <div className=" space-y-5">
              <div className="">
                <p className="flex flex-start items-center gap-3">
                  {" "}
                  <MdEmail className="text-4xl text-gray-500" />
                  <span className="font-semibold text-lg "> {data?.email}</span>
                </p>
              </div>

              <div className="">
                <p className="flex flex-start items-center gap-3">
                  {" "}
                  <FaPhone className="text-3xl text-gray-500" />
                  <span className="font-semibold text-lg "> {data?.phone}</span>
                </p>
              </div>
              <div className="">
                <p className="font-bold text-lg  "> Address : </p>
                <div>
                  {data?.address?.address} / {data?.address?.city} /{" "}
                  {data?.address?.state}
                </div>
              </div>
              <div className="">
                <p className="font-bold text-lg  "> Company : </p>
                <div>{data?.company?.name}</div>
              </div>
            </div>

            {/* <div className="mt-5">
                  <Link to={`/dataDetails/${data?.id}`}>
                  <button className='bg-gray-500  px-6 text-lg  flex items-center rounded-lg text-white cursor-pointer hover:bg-gray-700  mb-1'>
                  <FaArrowRightLong className="text-xl" />
                  </button></Link>
               
                </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default dataDetails;
