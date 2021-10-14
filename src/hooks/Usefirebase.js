import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged ,signOut   } from "firebase/auth";
import { useHistory } from "react-router";


const useFirebase = () => {
    const [user,setUser] = useState({})
    const auth = getAuth()
    const [isLoading,setIsLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const history = useHistory()

    const signInUsingGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth,googleProvider)
        .then(result => {
            const user = result.user
            console.log(user)
            
        })
        .finally(()=> setIsLoading(false))
    }

    const logOut = () => {
        // history.push("/home")
        setIsLoading(true)
        signOut(auth)
        .then(() => {
                setUser({})
                
        })
        .finally(() => setIsLoading(false))
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             
              setUser(user)
             
            } 
            setIsLoading(false)
          });
    },[])


    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        setUser

    }

}

export default useFirebase;
