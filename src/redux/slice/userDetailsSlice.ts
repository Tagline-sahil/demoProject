import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  id: string;
  name: string;
  email: string;
  age?: string;
  mobile?: string;
};

interface UserDetails {
  users: User[];
}

const initialState: UserDetails = {
  users: [],
};

export const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(item => item.id !== action.payload);
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex(
        item => item.id === action.payload.id,
      );
      state.users[index] = action.payload;
    },
    clearUser: state => {
      state.users = [];
    },
  },
});

export const { setUser, clearUser, deleteUser, updateUser } =
  userDetailsSlice.actions;
export default userDetailsSlice.reducer;
