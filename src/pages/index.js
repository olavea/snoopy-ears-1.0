import React, { useState } from "react";
import axios from "axios";

const IndexPage = () => {
  const [status, setStatus] = useState("initial");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("pending");
    setMessage("");

    try {
      // Send data to the function,
      // await the result.
      const { data } = await axios.post("/api/time-travel", {
        year: event.target.elements.year.value,
        city: event.target.elements.city.value,
      });
      setMessage(data.message);
      setStatus("fulfilled");
    } catch (error) {
      setMessage(error.response?.data?.message || error.message);
      setStatus("failed");
    }
  };

  const isDisabled = status === "pending";

  return (
    <main>
      <section>
        <a href="https://queen.outseta.com/auth?widgetMode=login#o-anonymous">
        ⚓ Log in ⚓
        </a>
        <a href="https://queen.outseta.com/auth?widgetMode=register#o-anonymous">
          🃏 Sign up 🃏
        </a>
      </section>
      <form action="/api/@raae/gatsby-plugin-donations/donation" method="POST">
        <fieldset>
          <p>
            <label htmlFor="amount">Amount: </label>
            <br />
            <input type="number" id="amount" name="amount" defaultValue="10" />
          </p>
          <p>
            <button>Donate</button>
          </p>
        </fieldset>
      </form>

      <form onSubmit={handleSubmit}>
        <fieldset disabled={isDisabled}>

        <p>
          <button>Take a TimeShip trip</button>
        </p>

        <p>
            <label htmlFor="year">Year: </label>
            <br />
            <input required type="number" id="year" name="year" />
          </p>

          <p>
            <label htmlFor="city">City: </label>
            <br />
            <input required type="text" id="city" name="city" />
          </p>

        </fieldset>

        <p>
          <br />
          <strong>
            {status === "pending" && <>Hold on... </>}
            {status === "failed" && <>Hold up! </>}
            {status === "fulfilled" && <>Woosh! </>}
          </strong>
          <br />
          {message && <span>{message}</span>}
        </p>
      </form>
      <header>
        <h1>Ruby's TimeShip</h1>
        <p>
          Your mission: Locate The Pirate Princess Lillian at the age of 11, so
          you can bring her back to 1554 and save Ruby's sister, Princess
          Lizabeth from prison.
        </p>
      </header>

    </main>
  );
};

export default IndexPage;
