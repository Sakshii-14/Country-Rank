import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  List: [],
  countryList: [],
  defaultRegions: [
    "Americas",
    "Antarctic",
    "Africa",
    "Asia",
    "Europe",
    "Oceania",
  ],
  selectedRegion: [],
  status: ["independent"],
};

const filterSlice = createSlice({
  name: "filterslice",
  initialState,
  reducers: {
    getList: (state, action) => {
      state.List = [...action.payload.list];
      state.countryList = [...action.payload.list];
    },
    searchList: (state, action) => {
    
      
        state.countryList = [...action.payload.newList];
   
    },
    sortBy: (state, action) => {
      if (action.payload.value === "name") {
        state.countryList.sort((a, b) => {
          const A = a.name.common.toLowerCase();
          const B = b.name.common.toLowerCase();
          if (A > B) return 1;
          if (A < B) return -1;
          return 0;
        });
      } else {
        state.countryList.sort(
          (a, b) => b[action.payload.value] - a[action.payload.value]
        );
      }
    },
    filterbyRegion: (state, action) => {
      if (!state.selectedRegion.includes(action.payload.region)) {
        state.selectedRegion.push(action.payload.region);
      } else {
        state.selectedRegion = state.selectedRegion.filter(
          (elem) => elem !== action.payload.region
        );
      }
      state.countryList=(state.selectedRegion.length !== 0)?state.List.filter((country) =>
        state.selectedRegion.includes(country.region)):[...state.List]
    },
    filterbyStatus: (state, action) => {
      if (action.payload.checked) {
        state.status.push(action.payload.name);
      } else {
        state.status = state.status.filter(
          (elem) => elem !== action.payload.name
        );
      }
    
      state.countryList=(state.status.length !== 0)?state.List.filter((country) => {
        if (state.status.includes("unMember") && country.unMember)
          return true;
        if (
          state.status.includes("independent") &&
          country.independent &&
          !country.unMember
        )
          return true;
        return false;
      }):[...state.List]
    },
  },
});

export const { sortBy, filterbyRegion, filterbyStatus, getList, searchList } =
  filterSlice.actions;
export default filterSlice.reducer;
