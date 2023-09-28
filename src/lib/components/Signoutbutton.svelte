<script>
    import { auth } from "$lib/firebase";
    import { signOut } from "firebase/auth";
    import { Button } from "flowbite-svelte";
    import { goto } from '$app/navigation';
  
    const handleSignOut = async () => {
      try {
        await signOut(auth);
        goto('/'); // Redirect to home page
      } catch (error) {
        console.error("Error signing out: ", error);
      }
    };
  </script>
  
  <div class='center-button'>
  <Button on:click={handleSignOut} color="dark">Sign Out</Button>
  </div>
  
  <style>
    .center-button {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>
  