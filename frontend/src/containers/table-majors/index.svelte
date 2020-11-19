<script lang="ts">
    import './index.scss';
    import type { Major } from '../../types/major.type';
    import { majorsList } from '../../stores';
    import { Link } from 'svelte-routing';
    import axios from 'axios';

    function deleteMajor(id: String){
      axios.delete('http://localhost:4000/majors/' + id)
      .then(response => {
        console.log(response.data);
        window.location.href = 'majors';
      })
      .catch((error) => {
        console.log(error);
      })
    }
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
        {#each $majorsList as major, i}
          <tr>
              <td>{i+1}</td>
              <td>{major.name}</td>
              <td>
                  <Link to={'edit-major/' + major._id} ><button class="button is-success">Edit</button></Link>
                  <button class="button is-danger" on:click={() => deleteMajor(major._id)}>Delete</button>
              </td>
          </tr>
        {/each}
        </tbody>
      </table>
</section>