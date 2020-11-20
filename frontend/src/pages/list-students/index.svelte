<script lang="ts">
  import './index.scss';
  import {Navbar, TableStudents, ModalSuccess, ModalFailed } from '../../containers';
  import { studentsList, majorsList } from '../../stores';
  import { Link } from "svelte-routing";

    const getstudents = (async () => {
      const response = await fetch('http://localhost:4000/students/', {
        method: "GET"
      });
      let responseJson = await response.json();
      $studentsList = await responseJson;
      console.log($studentsList);
    })();

    const getmajors = (async () => {
      const response = await fetch('http://localhost:4000/majors/', {
        method: "GET"
      });
      let responseJson = await response.json();
      $majorsList = await responseJson;
      console.log($majorsList);
    })();
</script>

<main>
  <Navbar />
  <TableStudents />
  <Link to="add-student" ><button class="button is-link m-5">Add New Student</button></Link>
  <ModalSuccess link="/" />
  <ModalFailed />
</main>