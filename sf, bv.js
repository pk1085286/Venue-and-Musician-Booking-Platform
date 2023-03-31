import React, { useState } from 'react';

// Sample data for venues and musicians
const venues = [
  {
    id: 1,
    name: 'The Grand Ballroom',
    location: 'New York City',
    capacity: 500,
    price: 5000,
    image: 'https://www.example.com/grand-ballroom.jpg'
  },
  {
    id: 2,
    name: 'The Garden Terrace',
    location: 'Los Angeles',
    capacity: 300,
    price: 3000,
    image: 'https://www.example.com/garden-terrace.jpg'
  },
  // ... more venues
];

const musicians = [
  {
    id: 1,
    name: 'The Jazz Trio',
    genre: 'Jazz',
    price: 1000,
    image: 'https://www.example.com/jazz-trio.jpg'
  },
  {
    id: 2,
    name: 'The Rock Band',
    genre: 'Rock',
    price: 1500,
    image: 'https://www.example.com/rock-band.jpg'
  },
  // ... more musicians
];

function App() {
  // State variables for search filters and results
  const [locationFilter, setLocationFilter] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const [capacityFilter, setCapacityFilter] = useState(0);
  const [priceFilter, setPriceFilter] = useState(0);
  const [filteredVenues, setFilteredVenues] = useState(venues);
  const [filteredMusicians, setFilteredMusicians] = useState(musicians);

  // Handler function for filtering venues
  const handleVenueFilter = () => {
    const filtered = venues.filter(venue => {
      if (locationFilter && !venue.location.toLowerCase().includes(locationFilter.toLowerCase())) {
        return false;
      }
      if (capacityFilter && venue.capacity < capacityFilter) {
        return false;
      }
      if (priceFilter && venue.price > priceFilter) {
        return false;
      }
      return true;
    });
    setFilteredVenues(filtered);
  };

  // Handler function for filtering musicians
  const handleMusicianFilter = () => {
    const filtered = musicians.filter(musician => {
      if (genreFilter && !musician.genre.toLowerCase().includes(genreFilter.toLowerCase())) {
        return false;
      }
      if (priceFilter && musician.price > priceFilter) {
        return false;
      }
      return true;
    });
    setFilteredMusicians(filtered);
  };

  return (
    <div>
      <h1>Search and Book Venues and Musicians for Your Event</h1>
      <div>
        <h2>Venues</h2>
        <div>
          <label htmlFor="locationFilter">Location:</label>
          <input id="locationFilter" type="text" value={locationFilter} onChange={e => setLocationFilter(e.target.value)} />
        </div>
        <div>
          <label htmlFor="capacityFilter">Capacity:</label>
          <input id="capacityFilter" type="number" min="0" value={capacityFilter} onChange={e => setCapacityFilter(parseInt(e.target.value))} />
        </div>
        <div>
          <label htmlFor="priceFilter">Price:</label>
          <input id="priceFilter" type="number" min="0" value={priceFilter} onChange={e => setPriceFilter(parseInt(e.target.value))
