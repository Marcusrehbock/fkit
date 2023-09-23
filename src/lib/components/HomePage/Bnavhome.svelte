<script>
    import { BottomNav, BottomNavItem, Tooltip, Skeleton, ImagePlaceholder } from 'flowbite-svelte';
    import { HomeSolid, WalletSolid, AdjustmentsVerticalOutline, UserCircleSolid, PlusSolid } from 'flowbite-svelte-icons';
  </script>
  
  <BottomNav position="absolute" navType="application" classInner="grid-cols-1">

    <div class="flex items-center justify-center">
      <BottomNavItem btnName="Create new Meditation Sessions" appBtnPosition="middle" btnClass="inline-flex items-center justify-center w-10 h-10 font-medium bg-primary-600 rounded-full hover:bg-primary-700 group focus:ring-4 focus:ring-primary-300 focus:outline-none dark:focus:ring-primary-800">
        <PlusSolid class="text-timer" />
        <Tooltip arrow={false}>Start a Focused Meditation</Tooltip>
      </BottomNavItem>
    </div>

  </BottomNav>