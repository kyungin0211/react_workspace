import { createAsyncThunk } from "@reduxjs/toolkit";

const data_set = [
  { username: "aaa", password: "aaa", role: "USER" },
  { username: "bbb", password: "bbb", role: "USER" },
  { username: "ccc", password: "ccc", role: "USER" },
];

export const loginThunk = createAsyncThunk(
  "auth/loginThunk",
  async (user) => {
    const data = data_set.find(
      (d) => d.username === user.username
    );

    let result = 1; // 실패
    if (data && data.password === user.password) {
      result = 0; // 성공
    }

    return {
      result,
      username: user.username,
    };
  }
);
