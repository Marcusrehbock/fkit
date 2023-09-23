<script lang="ts">import { Section, Register } from 'flowbite-svelte-blocks';
  import { Button, Checkbox, Label, Input } from 'flowbite-svelte';
  import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
  import { auth } from "$lib/firebase";
  import { userStore } from 'sveltefire'; 

  const user = userStore(auth); 
  

  let email = "";
  let password = "";

  const signUp = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up:", userCredential.user);
    // Redirect or update UI here
    window.location.href = "/timer"
      
  } catch (error) {
    console.log("Error signing up:", error.message);
    // Handle error UI here


  }

  }
async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider);
    console.log(user)
    window.location.href = "/timer"
  };


  </script>
  
{#if $user}
<h2 class="card-title">Welcome, {$user.displayName}</h2>
<p class="text-center text-success">You are logged in</p>
<button class="btn btn-warning" on:click={() => signOut(auth)}>Sign out</button>
{:else}
<Section name="register">
  <Register href="/">
    <svelte:fragment slot="top">
      <img class="w-8 h-8 mr-2" src="/images/logo.svg" alt="logo" />
      Flowbite
    </svelte:fragment>
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <form class="flex flex-col space-y-6" on:submit|preventDefault={signUp} action="/">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Create and account</h3>
        <Label class="space-y-2">
          <span>Your email</span>
          <Input type="email" bind:value={email} name="email" placeholder="name@gmail.com" required />
        </Label>
        <Label class="space-y-2">
          <span>Your password</span>
          <Input type="password" bind:value={password} name="password" placeholder="•••••" required />
        </Label>
        <Label class="space-y-2">
          <span>Confirm password</span>
          <Input type="password" bind:value={password} name="confirm-password" placeholder="•••••" required />
        </Label>
        <div class="flex items-start">
          <Checkbox>I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/"> Terms and Conditions</a></Checkbox>
        </div>
        <Button type="submit" class="w-full1">Create an account</Button>
        <div class="px-6 sm:px-0 max-w-sm">
          <button type="button" on:click={signInWithGoogle} class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
      </div>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Already have an account? <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
        </div>
      </form>
    </div>
  </Register>
</Section>
{/if}
 
  
  
