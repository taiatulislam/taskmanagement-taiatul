import './App.css';

function App() {
  return (
    <div className="px-10 mt-10">
      <div className='bg-[#ECEDEE] rounded-xl flex items-center justify-between p-5'>
        <div className=''>
          <input type="text" placeholder='Search Project' className='bg-white rounded-xl p-2 w-[400px] outline-none' />
        </div>
        <div>
          <label htmlFor="filter">Filter</label>
          <select name="filter" id="" defaultValue={""}>
            <option value="name">Name</option>
            <option value="value">Value</option>
            <option value="type">Type</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
