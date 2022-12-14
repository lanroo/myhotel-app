//import DatePicker from 'tailwind-react-datepicker'//

export function DatePicker() {
    return (
        <div className="flex items-center justify-center">
        <div className="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
        <label htmlFor="floatingInput" className="text-gray-700">Select a date</label>
          <input type="text"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Select a date" />
        
          <button className="datepicker-toggle-button" data-mdb-toggle="datepicker">
            <i className="fas fa-calendar datepicker-toggle-icon"></i>
          </button>
        </div>
      </div>
    );
}