import React, { memo } from 'react'
import icons from '../../assets'

const Search = () => {
  return (
    <form action="" className="flex text-tGrayColor">
      <div className="border">
        <label htmlFor="">
          <input
            className="p-3 cursor-text lg:w-96"
            type="text"
            placeholder="Keyword here..."
          />
        </label>
        <button className="p-3 px-4 bg-secondaryColor text-white">
          <icons.Search size={26} />
        </button>
      </div>
    </form>
  )
}

export default memo(Search)
