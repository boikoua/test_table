import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Iitem } from '../../types/Iitem';

const API_DATA = 'https://mammoth-testing-api.webinone.com/items';

interface ItemsState {
  items: Iitem[];
  loading: boolean;
  error: boolean;
}

const initialState: ItemsState = {
  items: [],
  loading: true,
  error: false,
};

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const response = await fetch(API_DATA);

  if (!response.ok) {
    throw new Error('Data loading error');
  }

  const data = await response.json();
  return data.Items;
});

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.error = false;
      })
      .addCase(
        fetchItems.fulfilled,
        (state, action: PayloadAction<Iitem[]>) => {
          state.loading = false;
          state.items = action.payload;
          state.error = false;
        }
      )
      .addCase(fetchItems.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default itemsSlice.reducer;
