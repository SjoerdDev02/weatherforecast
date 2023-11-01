import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: 0,
    picture: "/icons/overig/profile-john.png",
    email: "John@mail.com",
    firstName: "John",
    lastName: "Smith",
    password: "John007",
    temperature: "°C - Celcius",
    mode: "Darkmode",
    cityOne: "Maastricht",
    cityTwo: "'s-Hertogenbosch",
    cityThree: "Middelburg",
  },
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        ...action.payload
      };
    }
  }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;