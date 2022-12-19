import React from 'react';

const Form = () => {
  return (
    <form className="mx-auto max-w-sm">
      <div className="mb-4">
        <label className="block font-bold mb-2 text-gray-700" htmlFor="name">
          Name
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2 text-gray-700" htmlFor="role">
          Role
        </label>
        <select
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="role"
        >
          <option>Select a role</option>
          <option>Admin</option>
          <option>User</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2 text-gray-700" htmlFor="message">
          Message
        </label>
        <textarea
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          placeholder="Enter your message"
        />
      </div>
      <div className="text-center">
        <button
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          type="button"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
