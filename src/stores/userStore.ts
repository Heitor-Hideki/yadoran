import { observable, action, makeAutoObservable, runInAction } from 'mobx';
import yadoranApi from '../services/yadoranApi';

interface IUser {
    name: string,
    email: string,
    password: string,
}


class UserStore {
    @observable user: IUser = {} as IUser;
    @observable valid: boolean = false;
    @observable signedUp: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    @action 
    createUser = async (name, email, password) => {
    this.signedUp = false;
    const userInfos = {
        name: name,
        email: email,
        password: password,
    }
    try {
        const response = await yadoranApi.post('/v1/users', userInfos)
        const data = response.data
        
        if(response.status = 201) {
            runInAction(() => {
                this.signedUp = true
            })
        }
    } catch (error) {
    }
    }

    @action 
    login = async (email, password) => {
    this.valid = false;
    const infos = {
        email: email,
        password: password
    }

    try {
        const response = await yadoranApi.post('/v1/sessions', infos)

        this.user = {} as IUser;
        const { user, token } = response.data;

        if(response.status = 200) {
            // cookieCutter.set(CONSTANTS.AUTH_COOKIE, '0e0d9b84f00331e595161e7ad51ea7efd3e594f2658144a06d61f31f4dc921da');

            localStorage.setItem('@WeBro:token', token);
            localStorage.setItem('@WeBro:user', JSON.stringify(user));
    
            runInAction(() => {
              this.user = user,
              this.valid = true
            })
        }


    } catch (error) {
    }
    }
}

export default UserStore
