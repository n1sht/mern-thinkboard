import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import RateLimitedUI from "../Components/RateLimitedUI";
import axios from "axios";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = axios.get("http://localhost:5001/api/notes");
        console.log(res.data);
      } catch (error) {
        console.log("Error fetching the notes, check fetchNotes");
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {isRateLimited && <RateLimitedUI />}
    </div>
  );
};

export default HomePage;
// 2:10
