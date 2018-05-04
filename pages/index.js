import { Component } from "react";
import Head from "next/head";
import styles from "./styles.css";

export default class extends Component {
  render() {
    return (
      <main>
        <Head>
          <title>Home page</title>
        </Head>

        <h1 className={styles.main}>Welcome home</h1>
      </main>
    );
  }
}
