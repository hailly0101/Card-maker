import firebase from "firebase";

class AuthService{
    login(providerName){
        const autoProvider = new firebase.auth[`${providerName}AuthProvider`]();

        return firebase.auth().signInWithPopup(autoProvider);

    }

}

export default AuthService;