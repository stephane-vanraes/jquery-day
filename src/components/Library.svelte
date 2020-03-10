<script>
  import { format } from "../utils/dateFormatter.js";
  import { jquery } from "../store.js";

  export let name = "";
  export let date = new Date();
  export let src = "";

  $: current = Math.round((Date.now() - date.getTime()) / (1000 * 3600 * 24));
  $: jdays = Math.round(
    (date.getTime() - $jquery.date.getTime()) / (1000 * 3600 * 24)
  );
  $: jdate = new Date(date);
  $: jdate.setDate(date.getDate() + jdays);

  $: past = jdate < Date.now();
</script>

<style>
  .lib {
    border-radius: 1rem;
    display: flex;
    margin: 0.5rem;
    padding: 1rem;
  }
  .img {
    background-color: white;
    border-radius: 50%;
    flex: 0 0 6rem;
    height: 6rem;
    padding: 1rem 0.5rem;
    text-align: center;
    width: 6rem;
  }
  h3 {
    font-size: 0.75rem;
  }
  img {
    display: block;
    margin: auto;
  }
  .details {
    border-left: 2px solid currentColor;
    margin-left: 1rem;
    padding: 0.5rem 1rem;
  }
  span {
    display: block;
  }
  span:nth-child(odd) {
    font-weight: 600;
  }

  .past {
    background-color: var(--accent);
    box-shadow: 0px 5px 2.5px 0px rgba(0, 0, 0, 0.25);
    color: white;
  }
  .past .img {
    color: black;
  }
</style>

<div class="lib" class:past>
  <div class="img">
    <img src="{src}" alt="" />
    <h3>{name}</h3>
  </div>
  <div class="details">
    <span>Released</span>
    <span>{format(date)}</span>
    <span>JQuery Date</span>
    <span>{format(jdate)}</span>
  </div>
</div>
