import {
    type BaseQueryFn,
    type FetchArgs,
    fetchBaseQuery,
    type FetchBaseQueryError,
  } from '@reduxjs/toolkit/query/react';
  import { API_URL } from '@/constants';
  
  const baseQuery = fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState, arg }) => {
      // const token = (getState() as RootState).user?.accessToken;
      // const url = typeof arg === 'string' ? arg : arg.url;
      // if (token && !url.startsWith('http')) {
      //   headers.set('authorization', `Bearer ${token}`);
      // }
      return headers;
    },
  });
  
  export const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
  > = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
  
    //   if (result.error && result.error.status === 401) {
    //     const refreshToken = (api.getState() as RootState).user.tokens?.refreshToken;
  
    //     if (!refreshToken) {
    //       api.dispatch(logout());
    //       return result;
    //     }
  
    //     const refreshResult = await baseQuery(
    //       {
    //         url: '/auth/refresh-token',
    //         method: 'POST',
    //         body: { refreshToken },
    //       },
    //       api,
    //       extraOptions,
    //     );
  
    //     if (refreshResult.error || !refreshResult.data) {
    //       api.dispatch(logout());
    //       return result;
    //     }
  
    //     const refreshTokens = refreshResult.data as ApiResponse<AuthTokens>;
  
    //     api.dispatch(refreshTokensSuccess(refreshTokens.data));
  
    //     result = await baseQuery(args, api, extraOptions);
    //   }
  
    return result;
  };
  