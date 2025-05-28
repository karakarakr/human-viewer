import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import PeopleList from './components/main-content/PeopleList'
import SortFilterBar from './components/filters/SortFilterBar'

import { filterAndSortUsers } from './utils/filterAndSort';

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    age: '',
    birthYear: '',
    location: '',
    email: ''
  });
  const [sortType, setSortType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 5;

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('https://randomuser.me/api/?results=30');
        const data = await res.json();
        setUsers(data.results);
      } catch (error) {
        console.error('Loading error: ', error);
      }
    }
    fetchUsers();
  }, []);

  const combinedFilters = { ...filters, name: searchTerm };
  const filteredSortedUsers = filterAndSortUsers(users, combinedFilters, sortType);

  const totalPages = Math.ceil(filteredSortedUsers.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredSortedUsers.slice(indexOfFirstUser, indexOfLastUser);

  function totalPagesButtons(totalPages) {
    const buttons = [];
    for (let i = 0; i < totalPages; i++) {
      buttons.push((
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={currentPage === i + 1 ? 'active' : ''}
        >
          {i + 1}
        </button>
      ));
    }
    return buttons;
  }

  return (
    <>
      <header>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
      </header>
      
      <div className='main-content'>
        <SortFilterBar
            filters={filters}
            setFilters={setFilters}
            sortType={sortType}
            setSortType={setSortType}
          />
        <PeopleList 
          users={currentUsers} 
          filters={filters} 
          sortType={sortType} 
        />
        <div className="pagination">
          {totalPagesButtons(totalPages)}
        </div>
      </div>
    </>
  );
}

export default App
