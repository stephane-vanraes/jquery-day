<style>
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  :global(div > *) {
    flex-basis: 24rem;
  }
</style>

<div>
  <slot></slot>
</div>
