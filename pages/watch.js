import { Component } from "react";
import Head from "next/head";
import styles from "./styles.css";

export default class extends Component {
  render() {
    return (
      <main>
        <Head>
          <title>Watch page</title>
        </Head>

        <section className={styles.main}>Welcome to the watch page.</section>
      </main>
    );
  }
}
