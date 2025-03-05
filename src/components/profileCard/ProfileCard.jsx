import styles from "./profileCard.module.css"


export default function ProfileCard({avatar, firstName, lastName, occupation, hobbies}) {
  return (
<div className={styles.ProfileCard}>
<img src={avatar} alt={`${firstName} ${lastName}`} className={styles.avatar}/>
<h1>{firstName} {lastName}</h1>
<p>Род деятельности: {occupation}</p>
<p>Хобби: {hobbies.join(", ")}</p>



</div>


  )
}
