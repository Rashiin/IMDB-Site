import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { FaBirthdayCake } from 'react-icons/fa'; // Importing Birthday Cake icon
import { RiStarSFill } from 'react-icons/ri'; // Importing Star icon
import { motion } from 'framer-motion'; // Importing Framer Motion for animations

// Async action using redux toolkit
export const fetchCelebrities = createAsyncThunk('celebrities/fetchCelebrities', async () => {
  const response = await axios.get('http://localhost:3002/celebrity');
  return response.data;
});

// Slice
export const celebritiesSlice = createSlice({
  name: 'celebrities',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCelebrities.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// Component
const Famous = () => {
  const dispatch = useDispatch();
  const celebrities = useSelector((state) => state.celebrities);

  useEffect(() => {
    dispatch(fetchCelebrities());
  }, [dispatch]);

  return (
    <>
      <header className="mt-5 mx-4 p-2 ">
        <h1 className=' text-3xl font-bold text-gray-200 p-1'>Born today</h1>
        <p className=' text-gray-400 text-2xl font-light'>People born on May 11</p>
      </header>
      <motion.div className="flex flex-wrap justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        {celebrities.map((celebrity) => (
          <motion.div key={celebrity.name} className="m-6 text-center shadow-lg rounded-lg p-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5" whileHover={{ scale: 1.05 }}>
            <img
              src={celebrity.img}
              alt={celebrity.name}
              className="w-48 h-48 rounded-full object-cover border-4 border-yellow-400 mx-auto p-1"
            />
            <div className="mt-6">
              <p className="font-bold text-xl mb-2 text-zinc-400">{celebrity.name}</p>
              <div className="flex items-center justify-center mb-2">
                <FaBirthdayCake className="text-gray-500 mr-1" /> {/* Birthday Cake icon */}
                <p className="text-gray-300">{new Date(celebrity.birthday).toLocaleDateString()}</p>
              </div>
              <div className="flex items-center justify-center">
                <RiStarSFill className="text-yellow-500 mr-1" /> {/* Star icon */}
                <p className="text-gray-300">{celebrity.popularity}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Famous;
