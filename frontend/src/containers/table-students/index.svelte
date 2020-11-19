<script lang="ts">
  import "./index.scss";
  import type { Student } from "../../types/student.type";
  import { studentsList } from '../../stores';
  import { Link } from "svelte-routing";
  import axios from "axios";

  // export let students: Student[] = [];

  function deleteStudent(id: String) {
    axios
      .delete("http://localhost:4000/students/" + id)
      .then((response) => {
        console.log(response.data);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function editStudent(id: String) {
    window.location.href = "edit-student/" + id;
  }
</script>

<section class="overflow container">
  <table class="table is-fullwidth is-striped is-hoverable is-mobile">
    <thead>
      <tr>
        <th>Name</th>
        <th>NRP</th>
        <th>Major</th>
        <th>Address</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {#each $studentsList as student}
        <tr>
          <td>{student.name}</td>
          <td>{student.nrp}</td>
          <td>{student.major}</td>
          <td>{student.address}</td>
          <td>
            <!-- <button
              class="button is-success"
              on:click={() => editStudent(student._id)}>Edit</button> -->
              <!-- <a href={'edit-student/' + student._id} class="button is-success">Edit</a> -->
              <Link to={'edit-student/' + student._id} ><button class="button is-success">Edit</button></Link>
            <button
              class="button is-danger"
              on:click={() => deleteStudent(student._id)}>Delete</button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</section>
