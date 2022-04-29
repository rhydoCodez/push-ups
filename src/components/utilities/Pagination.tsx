import { useState } from "react"

interface IPaginationProps {
  currentPage: number
  paginateFront: Function
  paginateBack: Function
  total: number
  dataPerPage: number
}

const Pagination = ({
  currentPage,
  paginateBack,
  paginateFront,
  total,
  dataPerPage,
}: IPaginationProps) => {
  return (
    <div className="py-2">
      <div className="text-center">
        <p className="text-sm text-gray-700">
          Showing
          <span className="font-medium">
            {" "}
            {currentPage * dataPerPage - 10}{" "}
          </span>
          to
          <span className="font-medium"> {currentPage * dataPerPage} </span>
          of
          <span className="font-medium"> {total} </span>
          results
        </p>
      </div>
      <nav className="block"></nav>
      <div>
        <nav
          className="relative z-0 flex items-center justify-between rounded-md shadow-sm -space-x-px mt-5"
          aria-label="Pagination"
        >
          <a
            onClick={() => {
              paginateBack()
            }}
            href="#"
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-gradient-to-r from-genius-darkRed to-genius-darkBlue text-sm font-medium text-gray-50 hover:bg-opacity-80"
          >
            <span>Previous</span>
          </a>

          <a
            onClick={() => {
              paginateFront()
            }}
            href="#"
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-gradient-to-r from-genius-darkBlue to-genius-darkRed text-sm font-medium text-gray-50 hover:bg-opacity-80"
          >
            <span>Next</span>
          </a>
        </nav>
      </div>
    </div>
  )
}

export default Pagination
