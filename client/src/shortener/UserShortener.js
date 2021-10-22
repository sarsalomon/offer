import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._usertheme = {}
        this._users = []
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    setUserTheme(theme) {
        this._usertheme = theme
    }

    setUsers(users) {
        this._users = users
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    get usertheme() {
        return this._usertheme
    }

    get users() {
        return this._users
    }
}
