import {signInWithPopup,FacebookAuthProvider, GoogleAuthProvider} from 'firebase/auth'
import {authentication} from '../Components/firebase-config'


export default function App2() {

  function singIn(){
   const provider = new FacebookAuthProvider();
    signInWithPopup(authentication,provider)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  function singIn2(){
    const provider = new GoogleAuthProvider();
     signInWithPopup(authentication,provider)
     .then((res)=>{
       console.log(res)
     })
     .catch((err)=>{
       console.log(err)
     })
   }

  return (
    <div className="App2">

   <button onClick={singIn}>Login Facebook</button>
   <button onClick={singIn2}>Login Google</button>


    </div>
  );
}