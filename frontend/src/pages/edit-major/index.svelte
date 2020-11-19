<script lang="ts">
    import "./index.scss";
    import { Navbar, FormMajor } from "../../containers";
    import { majorsList } from "../../stores";
    import type { Major } from "../../types/major.type";
  
    export let id: String;
  
    let major: Major;
  
    major = $majorsList.find(s => s._id == id);
    
  </script>
  
  <Navbar />
  <p class="my-6 has-text-weight-bold is-uppercase is-size-4 has-text-centered">
    Edit Major
  </p>
  <FormMajor {major} updateStatus={true} />
  