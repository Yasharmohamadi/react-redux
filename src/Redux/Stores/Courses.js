import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCoursesFromServer = createAsyncThunk(
	"Courses/getCoursesFromServer",
	async (url) => {
		return fetch(url)
			.then((response) => response.json())
			.then((data) => data);
	}
);

const slice = createSlice({
	name: "Courses",
	initialState: [],
	reducers: {
		addCourseAct(state, action) {
			state.push(action.payload);
		},
		removeCourseAct(state, action) {
			state.filter((course) => course.id !== action.payload.id);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getCoursesFromServer.fulfilled, (state, action) => {
			console.log(action.payload);
			state.push(...action.payload)
		});
	},
});

export default slice.reducer;
export const { addCourseAct, removeCourseAct } = slice.actions;
