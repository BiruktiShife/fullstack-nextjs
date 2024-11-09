"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./page.module.css";

function Dashboard() {
  const router = useRouter();
  const session = useSession();

  if (session.status === "loading") {
    <h1>Loading...</h1>;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }
  if (session.status === "authenticated") {
    return <div className={styles.container}>Dashboard</div>;
  }
}

export default Dashboard;
