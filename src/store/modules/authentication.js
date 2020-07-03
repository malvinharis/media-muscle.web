import {
  AxiosWeb,
  setTokenAxiosWeb,
  removeTokenAxiosWeb
} from "@/plugins/utils/services/axios.service";
import JwtService from "@/plugins/utils/services/jwt.service";
import API from "@/plugins/utils/constants/api.constant";

const state = {
  loading: false,
  isAuthenticated: false,
  authentication: null,
  token: null
};

const getters = {
  isAuthenticated() {
    return state.isAuthenticated;
  }
};

const mutations = {
  START_AUTHENTICATION(state) {
    state.loading = true;
  },
  STOP_AUTHENTICATION(state) {
    state.loading = false;
  },
  UPDATE_AUTHENTICATION(state, data) {
    state.isAuthenticated = true;
    state.authentication = {
      uuid: data.uuid,
      username: data.username
    };
  },
  ADD_TOKEN(state, data) {
    state.token = data;
  },
  REMOVE_AUTHENTICATION() {
    state.isAuthenticated = false;
    state.token = null;
    state.authentication = {};
    JwtService.destroyToken();
  }
};

const actions = {
  async postAuthentication({
    commit
  }, form) {
    commit("START_AUTHENTICATION");
    try {
      const {
        data
      } = await AxiosWeb.post(API.WEB.LOGIN, form);
      if (data.status) {
        const token = data.data.token;
        JwtService.saveToken(token);
        setTokenAxiosWeb(token);

        commit("UPDATE_AUTHENTICATION", data.data);
        commit("ADD_TOKEN", data.data.token);

        return true;
      } else {
        throw data.message;
      }
    } catch (error) {
      return error;
    } finally {
      commit("STOP_AUTHENTICATION");
    }
  },
  async initToken({
    commit
  }) {
    const token = JwtService.getToken();
    if (token) {
      setTokenAxiosWeb(token);
      commit("START_AUTHENTICATION");
      try {
        const {
          data
        } = await AxiosWeb.get(API.WEB.REFRESH);
        if (data.status) {
          commit("UPDATE_AUTHENTICATION", data.data);
          commit("ADD_ABILITIES", data.data.role.permission);
          return data.data;
        } else {
          throw data.message;
        }
      } catch (error) {
        return error;
      } finally {
        commit("STOP_AUTHENTICATION");
      }
    }
  },
  logout({
    commit
  }) {
    removeTokenAxiosWeb();
    commit("REMOVE_AUTHENTICATION");
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};