import React from 'react';

function SortFilterBar({ filters, setFilters, sortType, setSortType }) {

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  return (
    <div style={{ margin: '10px 0', display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
      <input
        name="age"
        type="number"
        placeholder="Filter by Age"
        value={filters.age}
        onChange={handleFilterChange}
        style={{ width: '100px' }}
      />
      <input
        name="birthYear"
        type="number"
        placeholder="Filter by Birth Year"
        value={filters.birthYear}
        onChange={handleFilterChange}
        style={{ width: '140px' }}
      />
      <input
        name="location"
        placeholder="Filter by City or Country"
        value={filters.location}
        onChange={handleFilterChange}
        style={{ width: '150px' }}
      />
      <input
        name="email"
        placeholder="Filter by Email"
        value={filters.email}
        onChange={handleFilterChange}
        style={{ width: '200px' }}
      />

      <select value={sortType} onChange={handleSortChange} style={{ padding: '4px', minWidth: '180px' }}>
        <option value="">No Sorting</option>
        <option value="name-asc">Name A-Z</option>
        <option value="name-desc">Name Z-A</option>
        <option value="age-asc">Age ↑</option>
        <option value="age-desc">Age ↓</option>
        <option value="registered-asc">Registration ↑</option>
        <option value="registered-desc">Registration ↓</option>
      </select>
    </div>
  );
}

export default SortFilterBar;
