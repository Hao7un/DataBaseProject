import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            userId: null,
            userName: null,
            collegeId: null,
            email: null,
            telephone: null,
            userType: null,
            isAdmin: true,
            password: null,
            userIntro: null,
            totalHours: null,
            activeMenu: null,
            lastMenu: null,
            avatar: null
        }
    },
    mutations: {
        setUserId(state, userId) {
            state.userId = userId;
        },
        setUserName(state, userName) {
            state.userName = userName;
        },
        setPassword(state, password) {
            state.password = password;
        },
        setCollegeId(state, collegeId) {
            state.collegeId = collegeId;
        },
        setEmail(state, email) {
            state.email = email;
        },
        setUserType(state, userType) {
            state.userType = userType;
        },
        setIsAdmin(state, isAdmin) {
            state.isAdmin = isAdmin;
        },
        setTelephone(state, telephone) {
            state.telephone = telephone;
        },
        setPassword(state, password) {
            state.password = password;
        },
        setUserIntro(state, userIntro) {
            state.userIntro = userIntro;
        },
        setTotalHours(state, totalHours) {
            state.totalHours = totalHours;
        },
        setActiveMenu(state, activeMenu) {
            state.activeMenu = activeMenu;
        },
        setLastMenu(state, lastMenu) {
            state.lastMenu = lastMenu;
        },
        setAvatar(state, avatar) {
            state.avatar = avatar;
        }
    },
})

export default store;