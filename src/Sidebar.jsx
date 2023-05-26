import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sticky top-0 left-0">
      <h1 className="ml-2 mt-2 mb-4 text-2xl font-bold font-serif">
        Student Books
      </h1>
      <div className=" [&>ul]:pl-2">
        <ul className="space-y-2">
          <li className="flex m-4 ">
            <img
              className=" bg-gray-100 p-1 rounded mr-2"
              src="https://www.svgrepo.com/show/510001/home.svg"
              width={24}
              alt="home"
            />
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-500" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="flex m-4">
            <img
              className=" bg-gray-100 p-1 rounded mr-2"
              src="https://www.svgrepo.com/show/510940/compass.svg"
              width={24}
              alt="discover"
            />
            <NavLink
              to="/discover"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-500" : ""
              }
            >
              Discover
            </NavLink>
          </li>
        </ul>
        <div className="border-b-[1px] border-b-grey-200 w-[85%] mx-auto my-4"></div>
        <div className="[&>ul]:pl-2">
          <ul className="space-y-2">
            <li className="flex m-4">
              <img
                className=" bg-gray-100 p-1 rounded mr-2"
                src="https://www.svgrepo.com/show/512466/megaphone-775.svg"
                width={24}
                alt=""
              />
              <NavLink
                to="/refer-a-friend"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-red-500" : ""
                }
              >
                Refer a friend
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="border-b-[1px] border-b-grey-200 w-[85%] mx-auto my-4"></div>
        <div>
          <div className=" [&>ul]:pl-2">
            <ul className="">
              <li className="m-4">
                <p className=" text-gray-500 text-xs">MY ACTIVITY</p>
              </li>
              <li className="flex m-4 ">
                <img
                  className=" bg-gray-100 p-1 rounded mr-2"
                  src="https://www.svgrepo.com/show/509920/eye.svg"
                  width={24}
                  alt=""
                />
                <NavLink
                  to="/reading"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-red-500" : ""
                  }
                >
                  Reading
                </NavLink>
              </li>
              <li className="flex m-4">
                <img
                  className=" bg-gray-100 p-1 rounded mr-2"
                  src="https://www.svgrepo.com/show/510854/bookmark.svg"
                  width={24}
                  alt=""
                />
                <NavLink
                  to="/want-to-read"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-red-500" : ""
                  }
                >
                  Want to read
                </NavLink>
              </li>
              <li className="flex m-4">
                <img
                  className=" bg-gray-100 p-1 rounded mr-2"
                  src="https://www.svgrepo.com/show/491588/checkmark-circle.svg"
                  width={24}
                  alt=""
                />
                <NavLink
                  to="/completed"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-red-500" : ""
                  }
                >
                  Completed
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-b-[1px] border-b-grey-200 w-[85%] mx-auto my-4"></div>
        <div className="[&>ul]:pl-2">
          <ul className="space-y-2">
            <li className="flex m-4">
              <img
                className=" bg-gray-100 p-1 rounded mr-2"
                src="https://www.svgrepo.com/show/509177/notebook.svg"
                width={24}
                alt=""
              />
              <NavLink
                to="/notebook"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-red-500" : ""
                }
              >
                Notebook
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="border-b-[1px] border-b-grey-200 w-[85%] mx-auto my-4"></div>
      </div>
    </div>
  );
};

export default Sidebar;
