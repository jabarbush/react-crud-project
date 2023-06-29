import React, { useEffect, useState } from "react";
import AddUser from "./AddUser";
import User from "../interfaces/User";
import ToolbarProps from "../interfaces/ToolbarProps";

const Toolbar: React.FC<ToolbarProps> = ({ userList, setUserList }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => setUserList(data))
      .catch((error) => console.error(error));
  }, [setUserList]);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleAddUser = (user: User) => {
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserList((prevList) => [...prevList, data]);
        setIsPopupOpen(false);
      })
      .catch((error) => console.error(error));
    setIsPopupOpen(false);
  };

  const handleSortAscending = () => {
    const sortedList = [...userList].sort((a, b) =>
      new Date(a.dob).getTime() - new Date(b.dob).getTime()
    );
    setUserList(sortedList);
    setIsSortOpen(false);
    setSortOrder("asc");
  };

  const handleSortDescending = () => {
    const sortedList = [...userList].sort((a, b) =>
      new Date(b.dob).getTime() - new Date(a.dob).getTime()
    );
    setUserList(sortedList);
    setIsSortOpen(false);
    setSortOrder("desc");
  };

  const handleToggleSort = () => {
    setIsSortOpen((prevState) => !prevState);
  };

  const handleToggleFilter = () => {
    setIsFilterOpen((prevState) => !prevState);
  };

  //not efficient if there's a large # of users
  const handleFilter = (option: string) => {
    setIsFilterOpen(false);
  
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => {
        let filteredData = data;
  
        if (option === "withSignature") {
          filteredData = data.filter((user: User) => user.signature !== null);
        } else if (option === "withoutSignature") {
          filteredData = data.filter((user: User) => user.signature === null);
        }
  
        setUserList(filteredData);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div data-testid="toolbar-component">
      <h1 className="page-title">User Roster</h1>
      <div className="toolbar">
        <button onClick={handleOpenPopup} className="add-user-btn">
          Add New User
        </button>
        <div className="sort-container">
          <h3 className="toolbar-title">Sort By: </h3>
          <button className="sort-button" onClick={handleToggleSort}>
            Date of Birth ({sortOrder === "asc" ? "Ascending" : "Descending"})
          </button>
          {isSortOpen && (
            <div className="sort-options">
              <div className="sort-option" onClick={handleSortAscending}>
                Date of Birth (Ascending)
              </div>
              <div className="sort-option" onClick={handleSortDescending}>
                Date of Birth (Descending)
              </div>
            </div>
          )}

          <h3 className="toolbar-title">Filter By: </h3>
          <button className="sort-button" onClick={handleToggleFilter}>Filter Options</button>
          {isFilterOpen && (
            <div className="filter-options">
              <div className="filter-option" onClick={() => handleFilter("")}>
                All Users
              </div>
              <div className="filter-option" onClick={() => handleFilter("withSignature")}>
                Users With Custom Signatures
              </div>
              <div className="filter-option" onClick={() => handleFilter("withoutSignature")}>
                Users Without Custom Signatures
              </div>
            </div>
          )}
        </div>
      </div>
      {isPopupOpen && (
        <div className="popup-overlay">
          <AddUser userList={userList} onClose={handleClosePopup} onAddUser={handleAddUser} />
        </div>
      )}
    </div>
  );
};

export default Toolbar;
