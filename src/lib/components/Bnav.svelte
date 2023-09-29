<script>
  import { BottomNav, BottomNavItem, Tooltip, Skeleton, ImagePlaceholder } from 'flowbite-svelte';
  import { HomeSolid, WalletSolid, AdjustmentsVerticalOutline, UserCircleSolid, PlusSolid } from 'flowbite-svelte-icons';
</script>

<BottomNav position="fixed" navType="application" classInner="grid-cols-3">
  <BottomNavItem href="socialfeed" btnName="Home" appBtnPosition="left">
    <HomeSolid class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    <Tooltip arrow={false}>Home</Tooltip>
  </BottomNavItem>
  <div class="flex items-center justify-center">
    <BottomNavItem href="/timer" btnName="New Focused Meditation" appBtnPosition="middle" btnClass="inline-flex items-center justify-center w-10 h-10 font-medium bg-primary-600 rounded-full hover:bg-primary-700 group focus:ring-4 focus:ring-primary-300 focus:outline-none dark:focus:ring-primary-800">
      <PlusSolid class="text-white" />
      <Tooltip arrow={false}>Create new item</Tooltip>
    </BottomNavItem>
  </div>
  <BottomNavItem href="/profile" btnName="Profile" appBtnPosition="right">
    <UserCircleSolid class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    <Tooltip arrow={false}>Profile</Tooltip>
  </BottomNavItem>
</BottomNav>