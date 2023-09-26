<script lang="ts">
    import { authStore } from "$lib/stores/auth";
</script>
  
{#if $authStore}
  <slot />
{:else}
    <p class="text-error">
        You must be signed in to view this page.
        <a class="btn btn-primary" href="/login">Sign in</a>
    </p>
{/if}