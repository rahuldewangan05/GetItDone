import React, { useState } from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({
  userInfo,
  onSearchNote,
  handleClearSearch,
  showSearchBar = false,
  showUserProfile = false,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // functions for Searchbar
  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    }
  };

  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch();
  };

  return (
    <div className="flex items-center justify-between px-6 py-2 bg-white drop-shadow">
      <h2 className="py-2 text-xl font-medium text-black">Notes</h2>

      {showSearchBar && (
        <SearchBar
          value={searchQuery}
          // i can also write (e)=> ({target}), this provide direct access(destructuring objects) to target property of event "e"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />
      )}

      {showUserProfile && (
        <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
      )}
    </div>
  );
};

export default Navbar;
