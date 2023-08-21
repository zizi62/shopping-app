import {
	createAsyncThunk,
	createSlice,
	// PayloadAction
} from '@reduxjs/toolkit'

import {
	getUserType,
	saveUserType,
	clearUserType
} from 'requests/userRequest'

export type TUserType = string

export type TUserState = {
	userType: TUserType,
}

const initialState: TUserState = {
	userType: "",
}

export const getUser = createAsyncThunk(
	'userType/fetch',
	() => {
		const data = getUserType()
		return data || ''
	}
)

export const saveUser = createAsyncThunk(
	'userType/save',
	(userType: TUserType) => {
		saveUserType(userType)
		const data = getUserType()
		return data || ''
	}
)

export const deleteUser = createAsyncThunk(
	'userType/delete',
	() => clearUserType()
)

const userType = createSlice({
	name: 'userType',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getUser.fulfilled, (state, action) => {
				state.userType = action.payload
			})
		builder
			.addCase(saveUser.fulfilled, (state, action) => {
				state.userType = action.payload
			})
		builder
			.addCase(deleteUser.fulfilled, (state) => {
				state.userType = ''
			})
	}
})

// export const { setUserType } = userType.actions

export default userType.reducer

