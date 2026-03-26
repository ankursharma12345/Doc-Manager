"use client";

import { useEffect, useState } from "react";
import "../../assets/Add_Doc.css";

const AddNewDoc = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }))
  };
  useEffect(() => {
    const inputField = document.getElementById("docName");
    inputField?.focus();
  }, []);
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
          {/* <div>
            <label>Select Image</label>
          </div>
          <div >
            <input type="file" className="file-text" />
          </div> */}
          <div>
            <label>Select Image</label>

            <div className="file-wrapper">
              <input
                type="file"
                id="fileUpload"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    file: e.target.files[0]
                  }))
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AddNewDoc;