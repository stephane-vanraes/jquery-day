<script>
    import Footer from './components/Footer.svelte';
    import Header from './components/Header.svelte';
    import Grid from './components/Grid.svelte';
    import Library from './components/Library.svelte';
    import { jquery, libs } from './store.js';
    import { format } from './utils/dateFormatter.js';
</script>

<style>
    section {
        border-radius: 1rem;
        box-shadow: 
            inset 2px 2px 6px var(--secondary-dark),
            inset -2px -2px 6px var(--secondary-light);
        margin: 0.5rem;
        padding: 1rem;
    }
    h2 {
        margin-bottom: .5rem;
    }
</style>

<Header />

<section>
    <h2>What is JQuery Day ?</h2>
    <p>JQuery Day marks the day at which a popular library becomes as old as JQuery was the day the library is released.  This is calculated by taking the release date, figuring out how many days passed since JQuery's release ({format($jquery.date)}) and adding it again giving us <strong>Jquery Day</strong>.</p>
</section>

<Grid>
    {#each $libs as lib (lib.name)}
        <Library {...lib} />
    {/each}
</Grid>

<Footer />