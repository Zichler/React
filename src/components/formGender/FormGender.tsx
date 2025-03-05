import { useFormik } from "formik";
import { useState } from "react";
import styles from "./formGender.module.css"

interface IFormData {
  name: string;
}
interface IGenderForm {
  count: number;
  name: string;
  gender: string;
  probability: number;
}

const initialData: IGenderForm = {
  count: 0,
  name: "",
  gender: "",
  probability: 0,
};

export default function FormGender(): JSX.Element {
  const [genderData, setGenderData] = useState<IGenderForm>(initialData);

  const fetchGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    const data: IGenderForm = await res.json();
    setGenderData(data);
  };

  const gender = useFormik({
    initialValues: {
      name: "Nick",
    } as IFormData,
    onSubmit: (values) => {
      fetchGender(values.name);
    },
  });

  return (
    <div>
      <h2>Gender Form 🪄🔮</h2>
      <form className={styles.form} onSubmit={gender.handleSubmit}>
        <input
          onChange={gender.handleChange}
          value={gender.values.name}
          type="text"
          placeholder="your name"
          name="name"
        />
        <button type="submit">send request</button>
      </form>
      {genderData.name && (
        <p className={styles.text}>
          {genderData.name} is {genderData.gender === "male" ? "👨" : "🧔‍♀️"}{" "}
          {genderData.probability * 100}% <br />
          {"Counter: "}{genderData.count}
        </p>
        
      )}
    </div>
  );
}
