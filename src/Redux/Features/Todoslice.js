import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchtodo = createAsyncThunk("fetchtodo", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
});

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchtodo.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchtodo.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchtodo.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.error.message || "Failed to fetch todos";
    });
  },
});

export default TodoSlice.reducer;
