<script lang="ts">
  import './index.scss';
  import {Navbar} from '../../containers';
  import {TableStudents} from '../../containers';
  import type { Student } from '../../types/student.type';
  import axios from 'axios';

  var students: Student[];

  axios.get('http://localhost:4000/students/')
  .then(response => {
      students = response.data ;
    })
    .catch((error) => {
      console.log(error);
    })
</script>

<main>
    <Navbar />
    <TableStudents students={students}/>
    <button class="button is-link m-5">Add New Student</button>
</main>