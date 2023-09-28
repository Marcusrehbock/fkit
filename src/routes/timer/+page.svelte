<script>
    import Keypad from '$lib/components/Timer/Keypad.svelte'
    import Timer from '$lib/components/Timer/Timer.svelte'
    import { authStore } from '$lib/stores/auth';
    import Signoutbutton from '../../lib/components/Signoutbutton.svelte';
    import AuthCheck from '../../lib/components/AuthCheck.svelte';
    import Bnav from '../../lib/components/Bnav.svelte';

    let countdown;

  </script>

  <AuthCheck>

  <div>
    {#if countdown}
      <Timer
        on:new={() => {
          countdown = null;
        }}
        {countdown}
      />
    {:else}
      <Keypad
        on:countdown={(e) => {
          countdown = e.detail;
        }}
      />
    {/if}
  </div>
</AuthCheck>
<div>
  <Bnav />
</div>

  
  <style>
      :global(*) {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
      }
  
      :global(body) {
          min-height: 100vh;
          color: hsl(240, 80%, 6%);
          background: hsl(0, 0%, 98%);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
      }
  
      :global(.visually-hidden:not(:focus):not(:active)) {
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          height: 1px;
          overflow: hidden;
          position: absolute;
          white-space: nowrap;
          width: 1px;
      }
  
      div {
      max-width: 300px;
      margin: 1rem auto;
      padding: 1rem;
    }
  </style>

  