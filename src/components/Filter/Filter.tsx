import './Filter.css'

const Filter = () => {
  return (
    <div className="filter-container">
        <h4>Bộ lọc</h4>
        <label>
            <input type="checkbox" id="restaurant-filter" />
            Ẩm thực
        </label>
        <label>
            <input type="checkbox" id="cafe-filter" />
            Giải trí
        </label>
        <label>
            <input type="checkbox" id="bar-filter" />
            Mua sắm
        </label>
    </div>
  )
}

export default Filter