<script lang="ts">
  import './index.scss';
  import {Navbar, TableStudents} from '../../containers';
  import type { Student } from '../../types/student.type';
  import { studentsList, majorsList } from '../../stores';
  import { Link } from "svelte-routing";
  import axios from 'axios';

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

  // let students: Student[];

  // axios.get('http://localhost:4000/students/')
  // .then(response => {
  //     $studentsList = response.data ;
  //     students = response.data ;
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
</script>

<main>
    <Navbar />
    <!-- <TableStudents {students}/> -->
    <TableStudents />
    <Link to="add-student" ><button class="button is-link m-5">Add New Student</button></Link>
</main>