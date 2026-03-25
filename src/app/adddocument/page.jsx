"use client";

import { useState } from "react";
import "../../assets/Add_Doc.css";

const AddNewDoc = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }))
  }
  return (
    <div className="add-container">
      <div className="add-content">
        <div>
          <div>
            <label>Document Name</label>
          </div>
          <input type="text" id="docName" onChange={handleChange} value={formData?.["docName"] ?? ""} />
        </div>
        <div>
          <div>
            <label>Description</label>
          </div>
          <textarea rows={5} cols={40} id="description" onChange={handleChange} value={formData?.["description"] ?? ""} />
        </div>
        <div>
          <div>
            <label>Select Image</label>
          </div>
          <textarea rows={5} cols={40} id="description" onChange={handleChange} value={formData?.["description"] ?? ""} />
        </div>
      </div>
    </div>
  )
}
export default AddNewDoc;