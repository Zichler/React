import React from "react";
import styles from "./storeCard.module.css";

interface StoreCardProps {
  children: React.ReactNode;
}

const StoreCard: React.FC<StoreCardProps> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default StoreCard;
