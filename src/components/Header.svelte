<style>
  header {
    background-color: var(--primary);
    box-shadow: 0px 5px 2.5px 0px rgba(0, 0, 0, 0.25);
    color: white;
    display: flex;
    left: 50%;
    margin-bottom: 1rem;
    position: relative;
    transform: translateX(-50vw);
    width: 100vw;
  }
  h1 {
    margin: 0.5rem 1rem;
    flex: 1 0;
    font-weight: 600;
  }
  a {
    background-color: black;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 25% 75%);
    padding: 0.5rem 0.5rem 1rem 1rem;
  }
  a > span {
    background-image: url("/statics/github.png");
    background-size: 2rem 2rem;
    display: block;
    font-size: 0;
    height: 2rem;
    width: 2rem;
  }
</style>

<header>
  <h1>JQuery Day</h1>
  <a href="__GITHUBREPO__"><span>Github</span></a>
</header>
