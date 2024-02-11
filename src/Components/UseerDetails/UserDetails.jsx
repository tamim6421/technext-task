/* eslint-disable react-hooks/rules-of-hooks */
import { useLoaderData, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

const dataDetails = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  //   console.log(data);

  const handelBack = () => {
    navigate(-1);
  };

  return (
    <div className="my-20 p-3 min-h-screen">
      <div className="card w-3/4 mx-auto p-3">
        <div className="card flex-col md:flex-row card-side bg-gray-100 shadow-xl">
          <figure>
            <img src={data.image} alt="image" />
          </figure>
          <div className="card-body">
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
            <button
              onClick={handelBack}
              className="btn bg-red-400 max-w-max px-5 text-white"
            >
              <FaArrowLeft /> back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dataDetails;
