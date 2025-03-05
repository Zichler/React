import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./homePage.module.css"

export default function HomePage() {
  return (
    <div>
      <h2>Home page 🏠</h2>
      <div className={styles.gridContainer}>
        <Link to="lesson1"><div>Lesson 1</div></Link>
        <Link to="lesson2"><div>Lesson 2</div></Link>
        <Link to="lesson3"><div>Lesson 3</div></Link>
        <Link to="lesson4"><div>Lesson 4</div></Link>
        <Link to="lesson5"><div>Lesson 5</div></Link>
        <Link to="lesson6"><div>Lesson 6</div></Link>
        <Link to="lesson7"><div>Lesson 7</div></Link>
        <Link to="lesson8"><div>Lesson 8</div></Link>
        <Link to="lesson9"><div>Lesson 9</div></Link>
        <Link to="lesson10"><div>Lesson 10</div></Link>
        <Link to="lesson11"><div>Lesson 11</div></Link>
        <Link to="lesson12"><div>Lesson 12</div></Link>
        <Link to="lesson13"><div>Lesson 13</div></Link>
        <Link to="lesson14"><div>Lesson 14</div></Link>
        <Link to="lesson16"><div>Lesson 16</div></Link>
        <Link to="lesson17"><div>Lesson 17</div></Link>
       
      </div>
    </div>
  )
}
