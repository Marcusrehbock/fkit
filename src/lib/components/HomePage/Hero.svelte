<script>
    import { Button } from 'flowbite-svelte';
    import HeroDescription from '$lib/components/HomePage/HeroDescription.svelte';
</script>

<section class="text-gray-600 body-font bg-white dark:bg-slate-900">
    <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div
            class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
                class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                Iroh Meditate.
            </h1>

            <HeroDescription />
            
            <div class="flex justify-center">
                <Button href="/login" color="blue">Find my tribe</Button>
            </div>
        </div>
        <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg">
        </div>
    </div>
</section>