import { useEffect, useState } from "react";
import styles from "./userPage.module.css";
import { useTheme } from "../../themeContect/useTheme";
interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: Address;
  phone: string;
}

interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: {
    lat: string;
    long: string;
  };
}

export default function UsersPage(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);
  const {theme, toggleTheme} = useTheme();
  async function loadUsers(): Promise<void> {
    const res = await fetch("https://fakestoreapi.com/users");
    const arr = await res.json();
    setUsers(arr);
  }
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className={`${styles.container} ${theme === "dark" ? styles.dark : styles.light}`}>
      <ul>
        {users.map((user) => (
          <li className={styles.userItem} key={user.id}>
            <div>Ник: {user.username}</div>
            <div>
              Имя, фамилия: {user.name.firstname} {user.name.lastname}
            </div>
            <div>Телефон: {user.phone}</div>
            <div>E-mail: {user.email}</div>
            <div>Zip-code: {user.address.zipcode}</div>
          </li>
        ))}
      </ul>
       <button type="button" className={styles.themeToggle} onClick={toggleTheme}>Изменить тему (текущая: {theme})</button>
    </div>
   
  );
}
