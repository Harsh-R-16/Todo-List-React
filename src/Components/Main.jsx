import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { Form } from "./Form";
import { TodoList } from "./TodoList";
import { alertType, alertClass } from "./data";
let list = ["Item 1", "Item 2", "Item 3", "Item 4"];

export default function Main() {
  let [data, setData] = useState(list);
  let [alert, setAlert] = useState(["", alertClass[5]]);
  const getList = () => JSON.parse(localStorage.getItem("data"));
  const setList = (value) => {
    localStorage.setItem("data", JSON.stringify(value));
  };

  useEffect(() => {
    let newArr = getList() ? getList() : list;
    setList(newArr);
    setData(newArr);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    let inp = e.target.elements[0];
    let newArr;
    if (!inp.value.trim()) {
      alertHandler(0);
      return;
    }
    // console.log(inp.id);
    if (+inp.id !== -1) {
      newArr = [...data];
      newArr[+inp.id] = inp.value;
      inp.id = -1;
      //   alertHandler(1);
    } else {
      newArr = [inp.value, ...data];
    }
    alertHandler(1);
    setList(newArr);
    setData(newArr);
    inp.value = "";
  };

  const deleteHandler = (e) => {
    let id = +e.target.parentElement.id;
    let newArr = data.filter((i, ind) => ind !== id);
    setList(newArr);
    setData(newArr);
    alertHandler(4);
  };

  const clearHandler = () => {
    setList([]);
    setData([]);
    alertHandler(2);
  };

  const editHandler = (e) => {
    let id = +e.target.parentElement.id;
    let inp = document.querySelector("form").elements[0];
    inp.id = id;
    inp.value = data[id];
    alertHandler(3, 100000);
  };

  const alertHandler = (i, time = 1500) => {
    let a;
    clearTimeout(a);
    console.log(alertType[i], alertClass[i]);
    //    setValue(alertType[i]);
    //    setClc(alertClass[i]);
    let newAlert = [alertType[i], alertClass[i]];
    setAlert(newAlert);

    a = setTimeout(() => {
      clearTimeout(a);
      setAlert(["", alertClass[5]]);
    }, time);
  };
  return (
    <>
      <Navbar />
      <section id="container">
        <Header text={alert[0]} clc={alert[1]} />
        <Form submitHandler={submitHandler} clearHandler={clearHandler} />
        <TodoList
          todos={data}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      </section>
    </>
  );
}
