<script lang="ts">
    import './index.scss';
    import type { Student } from '../../types/student.type';

    export let students: Student[] = [];
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
        {#each students as student}
          <tr>
              <td>{student.name}</td>
              <td>{student.nrp}</td>
              <td>{student.major}</td>
              <td>{student.address}</td>
              <td>
                  <a class="button is-success">Edit</a>
                  <a class="button is-danger">Delete</a>
              </td>
          </tr>
        {/each}
        </tbody>
      </table>
</section>