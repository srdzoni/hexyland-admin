import api from "../plugins/axios";

class AuthService {
  login(user) {
    return api.post("auth/login", {
      username: user.username,
      password: user.password
    })
      .then(response => {
        if(response.data.jwt) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      })
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    return api.post("auth/register", {
      username: user.username,
      password: user.password,
      email: user.email,
      fullName: user.fullName
    });
  }
}

export default new AuthService();
