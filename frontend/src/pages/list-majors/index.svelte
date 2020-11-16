<script lang="ts">
  import "./index.scss";
  import { Navbar, TableMajors } from "../../containers";
  import type { Major } from "../../types/major.type";
  import axios from "axios";

  var majors: Major[];

  axios
    .get("http://localhost:4000/majors/")
    .then((response) => {
      majors = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
</script>

<Navbar />
<TableMajors {majors} />
<button class="button is-link m-5">Add New Major</button>
