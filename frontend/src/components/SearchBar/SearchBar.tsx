import React from 'react';

interface SearchBarProps {
  filter: 'name' | 'type';
  setFilter: (filter: 'name' | 'type') => void;
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ filter, setFilter, search, setSearch }) => {
  return (
    <div className="flex items-center gap-4 w-full">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value as 'name' | 'type')}
        className="border rounded px-3 py-2"
      >
        <option value="name">이름</option>
        <option value="type">타입</option>
      </select>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="검색어 입력..."
        className="border rounded px-3 py-2 w-full max-w-lg"
      />
    </div>
  );
};

export default SearchBar;