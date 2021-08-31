// eslint-disable-next-line import/no-extraneous-dependencies
import { FirebaseError } from "@firebase/util";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export class Auth {
    private auth = getAuth();

    public createUserWithEmailAndPassword(email: string, password: string): void {
        createUserWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
            const { user: gottenUser } = userCredential;
            console.log(gottenUser);
        })
        .catch((error: Error) => {
            const authError = error as FirebaseError;
            const {code: errorCode} = authError;
            const {message: errorMessage} = authError;
            

            if(errorMessage === 'auth/weak-password'){
                // eslint-disable-next-line no-alert
                alert('TODO: Weak password from i18n');
            }

            return errorCode;
        })
    }
}