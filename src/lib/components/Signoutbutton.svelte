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
  
  <Button on:click={handleSignOut} color="dark">Sign Out</Button>
  