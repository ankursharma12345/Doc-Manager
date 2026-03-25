"use client";

import { useRouter } from "next/navigation";
import "../../assets/Navbar.css";

const Navbar = () => {
  const routerr = useRouter();
  const handleNavigate = () => {
    routerr.push('/adddocument');
  }
  return (
    <div className="nav-div">
      <div className="content">
        <h2 style={{ color: "black" }}>Document Management System</h2>

        <div className="btn">
          <button>Documents</button>
          <button onClick={handleNavigate}>Add New Documents</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;