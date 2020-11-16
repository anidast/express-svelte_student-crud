<script lang="ts">
    import './index.scss';
    import type { Major } from '../../types/major.type';

    export let majors: Major[] = [];
</script>

<section class="overflow container">
    <table class="table is-fullwidth is-striped is-hoverable is-mobile">
        <thead>
          <tr>
            <th>No</th>
            <th>Major Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {#each majors as major, i}
          <tr>
              <td>{i+1}</td>
              <td>{major.name}</td>
              <td>
                  <button class="button is-success">Edit</button>
                  <button class="button is-danger">Delete</button>
              </td>
          </tr>
        {/each}
        </tbody>
      </table>
</section>