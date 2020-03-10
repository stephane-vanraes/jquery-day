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

<main>
    <section>
        <h2>What is JQuery Day ?</h2>
        <p>JQuery Day marks the day at which a popular library becomes as old as JQuery was the day the library is released.  This is calculated by taking the release date, figuring out how many days passed since JQuery's release ({format($jquery.date)}) and adding it again giving us <strong>Jquery Day</strong>.</p>
    </section>

    <Grid>
        {#each $libs as lib (lib.name)}
            <Library {...lib} />
        {/each}
    </Grid>
    
    <section>
        <h2>Why this list?</h2>
        <p>During discussion with other developers it is often mentioned that at "least we do not live in the dark days of jquery anymore", but those days have been long over with JQuery being replaced by frameworks like those in this list.  Often people still remember how relieved they were when those frameworks were released and they no loner had to rely on JQuery.  What they do not seem to realize however is how long we have had some of these compared to how long we had to suffer from JQuery.</p>
    </section>
    <section>
        <h2>Disclaimer</h2>
        <p>This site has no intention whatsoever to pass judgement on any of the frameworks or libraries mentioned but is purely made to put certain things in perspective.</p>
        <p>For those interested, the site is made in Svelte.</p>
    </section>
</main>

<Footer />