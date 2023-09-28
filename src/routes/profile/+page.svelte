<script>

    import Bnav from "../../lib/components/Bnav.svelte";
    import Signoutbutton from "../../lib/components/Signoutbutton.svelte";
    import Stats from "../../lib/components/stats.svelte";
    import AuthCheck from "../../lib/components/AuthCheck.svelte";
</script>


<AuthCheck>


<Stats />

<Bnav />

<Signoutbutton/>

</AuthCheck>


 