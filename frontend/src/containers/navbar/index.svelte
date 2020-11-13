<script lang="ts">
    import './index.scss';
    import { Link } from "svelte-routing";
</script>

<nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
  
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu my-2">
      <div class="navbar-start">
        <Link to="/"><span class="navbar-item">Student</span></Link>
        <Link to="majors"><span class="navbar-item">Majors</span></Link>  
      </div>
    </div>
  </nav>
<nav>
    
</nav>