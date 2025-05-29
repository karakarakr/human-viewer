export function filterAndSortUsers(users, filters, sortType) {
    let filtered = [...users];
  
    if (filters.name) {
      filtered = filtered.filter(user =>
        `${user.name.first} ${user.name.last}`
        .toLowerCase()
        .includes(
            filters.name.toLowerCase()
        )
      );
    }
  
    if (filters.age) {
        filtered = filtered.filter(
            user => user.dob.age === Number(
                filters.age
            )
        );
    }
  
    if (filters.birthYear) {
      filtered = filtered.filter(
        user => {
            const birthYear = new Date(
                user.dob.date
            ).getFullYear();
            
            return birthYear === Number(
                filters.birthYear
            );
      });
    }
  
    if (filters.location) {
      filtered = filtered.filter(user =>
        user.location.country
        .toLowerCase()
        .includes(
            filters.location.toLowerCase()
        )
      );
    }
  
    if (filters.email) {
      filtered = filtered.filter(user =>
        user.email
        .toLowerCase()
        .includes(
            filters.email.toLowerCase()
        )
      );
    }
  
    switch (sortType) {
      case 'name-asc':
        filtered.sort((a, b) => 
            a.name.first.localeCompare(
                b.name.first
            )
        );
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.first.localeCompare(a.name.first));
        break;
      case 'age-asc':
        filtered.sort((a, b) => a.dob.age - b.dob.age);
        break;
      case 'age-desc':
        filtered.sort((a, b) => b.dob.age - a.dob.age);
        break;
      case 'registered-asc':
        filtered.sort(
          (a, b) => new Date(a.registered.date) - new Date(b.registered.date)
        );
      case 'registered-asc':
        filtered.sort(
          (a, b) => new Date(b.registered.date) - new Date(a.registered.date)
        );
        break;
      default:
        break;
    }
  
    return filtered;
  }
  