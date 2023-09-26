<script>
    import { auth } from "$lib/firebase";
    import { signOut } from "firebase/auth";
    import { Button } from "flowbite-svelte";
    //TODO Go to Home Screen after sign out
</script>

<Button on:click={() => signOut(auth)} color="dark">Sign Out</Button>
