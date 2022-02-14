import { createSlice } from '@reduxjs/toolkit';

export const templatesSlice = createSlice({
  name: 'template',
  initialState: {
    templateList: [],
    isLoading: false,
    filters: {
      categoryFilter: 'All',
      dateFilter: 'Default',
      orderFilter: 'Default',
      searchFilter: ''
    }
  },
  reducers: {
    updateTemplateList: (state, action) => {
      state.templateList = action.payload;
    },
    updateLoadingStatus: (state, action) => {
      state.isLoading = action.payload;
    },
    updateFilter: (state, action) => {
      state.filters[action.payload.key] = action.payload.value;
    }
  }
});
export const { updateTemplateList, updateLoadingStatus, updateFilter } = templatesSlice.actions;
export default templatesSlice.reducer;
