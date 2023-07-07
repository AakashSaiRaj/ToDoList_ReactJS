import React, { useState } from "react";
import Header from "./Header";
import Items from "./Items";

export default function App() {
  const [goals, setGoals] = useState([]);
  function newTitle(values) {
    setGoals((prevValues) => {
      return [...prevValues, { title: values.title, status: values.status }];
    });
  }

  function deleteItem(id) {
    setGoals((prevValues) => {
      return prevValues.filter((item, index) => {
        return index !== id;
      });
    });
  }
  function checkBox(currentStatus, id, isChecked) {
    setGoals((prevValues) => {
      currentStatus = isChecked ? 1 : 0;
      prevValues[id].status = currentStatus;
      return [...prevValues];
    });
  }
  function editItem(title, status, id) {
    setGoals((prevValues) => {
      prevValues[id].title = title;
      prevValues[id].status = status;
      return [...prevValues];
    });

    setFilterSet(goals);
    // console.log(title, status, id);
  }

  const [filterSet, setFilterSet] = useState(goals);
  const [filterOn, setFilterOn] = useState(false);

  function filterChange(filterName) {
    // console.log(filterName);
    setFilterSet(goals);
    if (filterName === 1) {
      setFilterOn(true);
      setFilterSet((prevValues) => {
        return prevValues.filter((items) => {
          return items.status === 1;
        });
      });
    } else if (filterName === 0) {
      setFilterOn(true);
      setFilterSet((prevValues) => {
        return prevValues.filter((items) => {
          return items.status === 0;
        });
      });
    } else {
      setFilterOn(false);
      // setFilterSet(filterSet);
    }
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <Header
        newTitle={newTitle}
        onFilter={filterChange}
        // onEdit={filterChange}
      />
      {filterOn
        ? filterSet.map((items, index) => {
            return (
              <Items
                key={index}
                id={index}
                title={items.title}
                status={items.status}
                onDelete={deleteItem}
                onCheckbox={checkBox}
                onEdit={editItem}
                onFilterEdit={filterChange}
              />
            );
          })
        : goals.map((items, index) => {
            return (
              <Items
                key={index}
                id={index}
                title={items.title}
                status={items.status}
                onDelete={deleteItem}
                onCheckbox={checkBox}
                onEdit={editItem}
              />
            );
          })}

      {/* {goals.map((items, index) => {
        return (
          <Items
            key={index}
            id={index}
            title={items.title}
            status={items.status}
            onDelete={deleteItem}
            onCheckbox={checkBox}
            onEdit={editItem}
          />
        );
      })} */}
    </div>
  );
}
