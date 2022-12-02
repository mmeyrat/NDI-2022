import { defineStore } from "pinia";
export const useLoginStore = defineStore("login", () => {
  const token = ref("");
  const user = ref({});
  function login(email, password) {
    return new Promise((resolve, reject) => {
      console.log("login");
      fetch("https://ndi-api.damiend.tech/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((res) => {
          switch (res.status) {
            case 200:
              res.json().then((data) => {
                token.value = data.token;
                user.value = data.user;
                resolve();
              });
              break;
            case 401:
              reject("Invalid credentials");
              break;
            case 404:
              reject("User not found");
              break;
            default:
              reject("Something went wrong");
          }
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }
  function register(email, password) {
    return new Promise((resolve, reject) => {
      fetch("https://ndi-api.damiend.tech/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((res) => {
          switch (res.status) {
            case 201:
              res.json().then((data) => {
                token.value = data.token;
                user.value = data.user;
                resolve();
              });
              break;
            case 409:
              reject("Email already exists");
              break;
            default:
              reject("Something went wrong");
          }
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }

  function logout() {
    token.value = "";
    user.value = {};
  }
  return { token, user, login, register, logout };
});
