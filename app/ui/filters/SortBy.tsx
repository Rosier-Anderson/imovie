export const SortBy = () => {
  return (
    <div className="w-[250px]">
      <select className="w-full border-none" name="sort-by" id="sort-by">
        <option value="top-rated" className="bg-red-primary border-none">
          {" "}
          <span className="bg-red-primary">Top Rated</span>
        </option>
        <option value="release-date">
          <span>Release Date</span>
        </option>
        <option value="likes">
          <span>Likes</span>
        </option>
      </select>
    </div>
  );
};
