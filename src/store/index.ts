import Vue from "vue";
import Vuex from "vuex";
import data from "../data";

const userUrl = "https://torre.bio/api/bios";

Vue.use(Vuex);

const moduleHome = {
  state: () => ({
    developers: ["torrenegra", "lusiangel2895"] as string[],
    dataDevelopers: [],
  }),
  mutations: {
    SAVE_DATA_DEVELOPERS(state: any, resp: any): void {
      state.dataDevelopers.push(resp);
    },
  },
  actions: {
    // This is the sync function to get the data for the usersers by the usernames
    // but the server has a problem with CORS policy
    // async getDevelopersAPI({ state, commit }) {
    //   try {
    //     for (const developer of state.developers) {
    //       const resp = await fetch(`${userUrl}/${developer}`);
    //       commit("SAVE_DATA_DEVELOPERS", resp);
    //     }
    //     return "Getting developers ...  OK";
    //   } catch (error) {
    //     throw error;
    //   }
    // },
  },
  getters: {},
};

const moduleProfile = {
  state: () => ({}),
  mutations: {},
  actions: {},
};

export default new Vuex.Store({
  state: {
    name: data.person.name as string,
    image: data.person.picture as string,
    headline: data.person.professionalHeadline as string,
    skills: data.strengths as any[],
  },
  getters: {
    masterSkills: (state) => {
      return state.skills.filter((skill) => {
        return skill.proficiency === "master";
      });
    },
    expertSkills: (state) => {
      return state.skills.filter((skill) => {
        return skill.proficiency === "expert";
      });
    },
    proficientSkills: (state) => {
      return state.skills.filter((skill) => {
        return skill.proficiency === "proficient";
      });
    },
    novicetSkills: (state) => {
      return state.skills.filter((skill) => {
        return skill.proficiency === "novice";
      });
    },
    noExperienceSkills: (state) => {
      return state.skills.filter((skill) => {
        return skill.proficiency === "no-experience-interested";
      });
    },
  },
  mutations: {},
  actions: {},
  modules: {
    home: moduleHome,
    profile: moduleProfile,
  },
});
