
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./features/counter/counterSlice";
import { useEffect, useState } from "react";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  //  --------------- useEffect PRACTICE ------------------

  // that is run for every render:
  // useEffect(() => {
  //   alert("I will run on each render!");
  // });

  // its run only run first render
  // useEffect(() => {
  //   alert("I will run on only first render!");
  // },[]);

  // it will run for every render based on  dependencie
  // useEffect(() => {
  //   alert("I will run on each render!");
  // }, [count]);

  useEffect(() => {
    alert("I will run when count and total updated!");
  }, [count, total]);

  function handleClick() {
    setTotal(count + 1);
  }

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      fontFamily: "Arial, sans-serif",
    },
    card: {
      backgroundColor: "white",
      borderRadius: "20px",
      padding: "40px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
      textAlign: "center",
      maxWidth: "400px",
      width: "90%",
    },
    title: {
      fontSize: "28px",
      color: "#333",
      marginBottom: "30px",
      fontWeight: "bold",
    },
    counter: {
      fontSize: "72px",
      fontWeight: "bold",
      color: count > 0 ? "#10b981" : count < 0 ? "#ef4444" : "#333",
      marginBottom: "30px",
      textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
    },
    buttonContainer: {
      display: "flex",
      gap: "15px",
      justifyContent: "center",
      marginBottom: "20px",
    },
    button: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      border: "none",
      fontSize: "24px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    },
    incrementBtn: {
      backgroundColor: "#10b981",
      color: "white",
    },
    decrementBtn: {
      backgroundColor: "#ef4444",
      color: "white",
    },
    resetBtn: {
      backgroundColor: "#6b7280",
      color: "white",
      border: "none",
      borderRadius: "10px",
      padding: "12px 30px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "all 0.3s ease",
      width: "100%",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🎯 Redux Counter</h1>

        <div style={styles.counter}>{count}</div>
        <div>
          <p>{total}</p>
          {/* <button onClick={handleClick()}></button> */}
        </div>

        <div style={styles.buttonContainer}>
          <button
            onClick={() => dispatch(decrement())}
            style={{ ...styles.button, ...styles.decrementBtn }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            −
          </button>

          <button
            onClick={() => dispatch(increment())}
            style={{ ...styles.button, ...styles.incrementBtn }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            +
          </button>
        </div>

        <button
          onClick={() => dispatch(reset())}
          style={styles.resetBtn}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#4b5563";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#6b7280";
            e.target.style.transform = "translateY(0)";
          }}
        >
          ⟲ Reset Counter
        </button>

        <p style={{ marginTop: "20px", color: "#9ca3af", fontSize: "14px" }}>
          Click + to increase, - to decrease
        </p>
      </div>
    </div>
  );
}

export default App;
