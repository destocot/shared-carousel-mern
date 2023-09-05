import { useState } from "react";
import { ContainerStyles, FormStyles } from "../styles/Form.styled";
import toast, { Toaster } from "react-hot-toast";

export default function PictureForm() {
  const [data, setData] = useState({
    name: "",
    image: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    fetch("https://shared-carousel-api.vercel.app/api/images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        }
        toast.success(data.message);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <ContainerStyles>
      <Toaster position="top-center" />
      <FormStyles onSubmit={submitHandler}>
        <h2>Add a picture</h2>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div>
          <label>Image URL: </label>
          <input
            type="text"
            value={data.image}
            onChange={(e) => setData({ ...data, image: e.target.value })}
          />
        </div>
        <button type="submit">Submit</button>
      </FormStyles>
    </ContainerStyles>
  );
}
