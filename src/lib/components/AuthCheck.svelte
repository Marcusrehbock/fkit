<script lang="ts">
    import { authStore } from "$lib/stores/auth";
    import { Button } from "flowbite-svelte";
</script>
  
{#if $authStore}
  <slot />
{:else}
    <div class="flex justify-center items-center h-screen">
        <div class="flex flex-col items-center">
        <h1 class="text-4xl font-bold">You are not logged in</h1>
        <Button href="/login" color="dark">Log in</Button>
        </div>
    </div>
{/if}