<script>
    import { createUserWithEmailAndPassword } from "firebase/auth";
    import { auth } from "$lib/firebase";
    
  
    let email = "";
    let password = "";
  
    const signUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up:", userCredential.user);
      // Redirect or update UI here
        
    } catch (error) {
      console.log("Error signing up:", error.message);
      // Handle error UI here

    }
    };
  </script>
  
  <form on:submit|preventDefault={signUp}>
    <input type="email" bind:value={email} placeholder="Email" />
    <input type="password" bind:value={password} placeholder="Password" />
    <button type="submit">Login</button>
  </form>
