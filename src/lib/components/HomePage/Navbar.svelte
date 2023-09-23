<script>
    import { Navbar, NavBrand, NavHamburger, Button } from 'flowbite-svelte';
  
    let navClass = 'bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800';
    let navDivClass = 'flex flex-wrap justify-between items-center mx-auto max-w-screen-xl';
</script>
  
  <header>
    <Navbar let:hidden let:toggle fluid={false} {navClass} {navDivClass}>
      <NavBrand href="/">
        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" class="mr-3 h-6 sm:h-9" alt="Iroh Meditate Logo" />
      </NavBrand>
      <div class="flex items-center lg:order-2">
        <Button href="/login" color="dark">Log in</Button>
        <Button href="/signup" class="ml-2" color="blue">Sign Up</Button>
        <NavHamburger on:click={toggle} btnClass="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" />
      </div>
    </Navbar>
  </header>
  