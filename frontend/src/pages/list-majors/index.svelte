<script lang="ts">
  import "./index.scss";
  import { Navbar, TableMajors } from "../../containers";
  import { majorsList } from '../../stores';
  import { Link } from "svelte-routing";

  const getmajors = (async () => {
      const response = await fetch('http://localhost:4000/majors/', {
        method: "GET"
      });
      let responseJson = await response.json();
      $majorsList = await responseJson;
      console.log($majorsList);
    })();
</script>

<Navbar />
<TableMajors />
<Link to="add-major" ><button class="button is-link m-5">Add New Major</button></Link>
