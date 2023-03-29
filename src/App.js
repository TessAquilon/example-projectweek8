import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

export const App = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then((res) => res.json())
    .then((data) => {
      setList(data.results)
    })
    .catch((err) => {
      console.error(err)
    })
    .finally(() => {
      setLoading(false);
    })
  }, []);
  if (loading) {
    return(
      <p>Loading...</p>
    );
  }
  return (
    <div>
      Find me in src/app.js!
    </div>
  )
}
