/* eslint-disable no-unsafe-optional-chaining */
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Home = () => {
  const [allUsers, setAllUser] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetch(`https://dummyjson.com/users/search?q=${search}`)
      .then((res) => res.json())
      .then((data) => {
        let sortedUsers = [...data?.users];

        //  console.log(sortBy)
        if (sortBy === "name") {
          console.log("bal");
          sortedUsers.sort((a, b) => a.firstName.localeCompare(b.firstName));
        } else if (sortBy === "email") {
          sortedUsers.sort((a, b) => a.email.localeCompare(b.email));
        } else if (sortBy == "company") {
          sortedUsers.sort((a, b) =>
            a.company?.name.localeCompare(b.company?.name)
          );
        }

        setAllUser(sortedUsers);
      });
  }, [search, sortBy]);

  // search function
  const handelSearch = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    setSearch(value);
  };

  // console.log(allUsers);
  const handelSelect = (e) => {
    const selectedValue = e.target.value;
    setSortBy(selectedValue);
  };

  return (
    <div className="my-20">
      <div className="w-3/4 mt-20 mx-auto">
        <h1 className="text-5xl font-semibold text-green-500 text-center mt-36 mb-3">
          Search User By <span className="text-orange-500">Name</span> <br />&
          sort by
          <span className="text-orange-500"> Name/ Email/ Company Name</span>
        </h1>

        {/* search function  */}
        <form
          onSubmit={handelSearch}
          className="w-3/4 flex gap-4 flex-col md:flex-row justify-center items-center mx-auto"
        >
          {/* sort user by name, email, companyName  */}
          <div className="mb-3">
            <div className="label"></div>
            <select
              onChange={(e) => handelSelect(e)}
              className="select  select-success w-full"
            >
              <option className="btn" disabled selected>
                Short User
              </option>
              <option className="btn" value="name">
                Sort by name
              </option>
              <option className="btn" value="email">
                Sort by email
              </option>
              <option className="btn" value="company">
                Sort by Company name
              </option>
            </select>
          </div>

          <input
            className="px-8 py-6 rounded-full input input-bordered input-success "
            type="text"
            placeholder="Search by Name"
            name="search"
            id=""
          />
          <input
            type="submit"
            value="Search"
            className="bg-green btn px-4 bg-green-500 text-white rounded-full"
          />
        </form>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 p-3">
        {allUsers?.map((user, idx) => (
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

                    <div className="flex justify-between mt-5">
                      <Link to={`/userDetails/${user?.id}`}>
                        <button className="bg-gray-500  px-6 text-lg  flex items-center rounded-lg text-white cursor-pointer hover:bg-gray-700  mb-1">
                          <FaArrowRightLong className="text-xl" />
                        </button>
                      </Link>
                      <Link to="/addUser">
                        <button className="btn btn-sm bg-gray-500 text-white">
                          {" "}
                          Add user
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
