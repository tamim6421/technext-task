import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const AddUser = () => {
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        const form = event.target;
        const formData = {
          firstName: form.fName.value,
          lastName: form.lName.value,
          image: form.image.value,
          email: form.email.value,
          address: form.address.value,
          company: form.company.value,
        };
      
        try {
          const response = await fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          if (!response.ok) {
            throw new Error('Failed to add user. Please try again.');
          }
      
          const data = await response.json();
          console.log(data);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "User added successfully ",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/')

        } catch (error) {
          console.error('Error:', error.message);
          // Handle error cases, show user-friendly messages, or log the error as needed
        }
      };
      


    return (
        <div>
   <div className="hero min-h-screen  bg-base-200">
  <div className="hero-content w-full">
 
    <div className=" shrink-0  max-w-sm shadow-2xl  w-full bg-base-100">
      <form onSubmit={handleSubmit} className="card-body  ">
      <h1 className="text-3xl text-orange-500 text-center font-bold">Added User </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  name="fName"
                  placeholder="First Name"
                  className="input input-sm input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  name="lName"
                  placeholder="Last Name"
                  className="input input-sm input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="image"
                  placeholder="Photo Url"
                  className="input input-sm input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-sm input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address </span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="input input-sm input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company Name  </span>
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="input input-sm input-bordered"
                  required
                />
              </div>
        <div className="form-control mt-6">
          <button className="btn btn-sm bg-green-500 text-white">User Added </button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddUser;