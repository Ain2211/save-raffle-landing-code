import { baseQueryWithReauth } from '.';
import { createApi } from '@reduxjs/toolkit/query/react';
import { ApiResponse } from '../types/api';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['User'],
  endpoints: (build) => ({
    getUserById: build.query<ApiResponse<any>, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'GET',
      }),
      providesTags: (_, __, id) => [{ type: 'User', id }],
    }),
  }),
});

export const { useGetUserByIdQuery } = userApi;
