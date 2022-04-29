import { useState } from "react"
import { FiSearch } from "react-icons/fi"

const Search = ({ searchQuery }: { searchQuery: string }) => {
  // const [searchQuery, setSearchQuery] = useState<string>("")
  return (
    <div className="search__bar">
      <input
        type="text"
        name=""
        id=""
        className=""
        placeholder="Search Student by Name or Email"
      />
      <FiSearch className="w-5 h-5 text-genius-blue font-bold" />
    </div>
  )
}

export default Search
