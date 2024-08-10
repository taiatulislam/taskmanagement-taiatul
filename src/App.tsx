import './App.css';
import expired from '../src/assets/Expired.png';

function App() {
  return (
    <div className="px-10">
      <div className='bg-[#ECEDEE] rounded-xl flex items-center justify-between p-5 my-5'>
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

      {/* Bellow div */}
      <div>
        <div className='grid grid-cols-4 gap-10 rounded-xl'>
          {/* Task div */}
          <div className='flex flex-col gap-5'>
            <div className='bg-[#ECEDEE] rounded-xl p-5 drop-shadow-[0_7px_3px_rgba(0,0,0,0.4)]'>
              <img src={expired} alt="expired" className='bg-red-500 rounded-full p-3 w-10 h-10' />
              <h3 className='my-3'>Expired Tasks</h3>
              <p className='text-2xl font-semibold'>5</p>
            </div>
            <div className='bg-[#ECEDEE] rounded-xl p-5 drop-shadow-[0_7px_3px_rgba(0,0,0,0.4)]'>
              <svg className="bg-red-300 text-white rounded-full p-2 w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01" />
              </svg>

              <h3 className='my-3'>All Active Tasks</h3>
              <p className='text-2xl font-semibold'>7</p>
            </div>
            <div className='bg-[#ECEDEE] rounded-xl p-5 drop-shadow-[0_7px_3px_rgba(0,0,0,0.4)]'>
              <svg className="bg-blue-400 text-white rounded-full p-2 w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

              <h3 className='my-3'>Completed Tasks</h3>
              <p className='text-2xl font-semibold'>2<span className="text-lg">/7</span></p>
            </div>

            <button className='bg-black text-white py-1.5 rounded-xl text-center'>+ Add Task</button>
          </div>

          {/* To Do */}

        </div>
      </div>
    </div>
  );
}

export default App;
