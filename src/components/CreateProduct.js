import React from "react";
import useForm from '../lib/useForm';

export default function CreateProduct() {
  // create a state object for our inputs
  const [name, setName] = useState('wes);
  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}