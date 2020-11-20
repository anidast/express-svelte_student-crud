<script lang="ts">
  import "./index.scss";
  import type { Student } from "../../types/student.type";
  import { majorsList, modalSuccessStatus, modalFailedStatus, modalText } from "../../stores";
  import axios from "axios";

  export let student: Student;
  export let updateStatus: boolean;

  function submitStudent() {
    console.log(student);
    if (updateStatus === false) {
      axios
        .post("http://localhost:4000/students/add", student)
        .then((response) => {
          console.log(response.data);
          $modalText = response.data;
          $modalSuccessStatus = true;
        })
        .catch((error) => {
          console.log(error);
          $modalText = error;
          $modalFailedStatus = true;
        });
    }
    else{
        axios
        .post("http://localhost:4000/students/update/" + student._id, student)
        .then((response) => {
          console.log(response.data);
          $modalText = response.data;
          $modalSuccessStatus = true;
        })
        .catch((error) => {
          console.log(error);
          $modalText = error;
          $modalFailedStatus = true;
        });
    }
  }
</script>

<section>
  <div class="columns is-centered">
    <div class="column is-6">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input
            class="input"
            type="text"
            bind:value={student.name}
            placeholder="Name" />
        </div>
      </div>
      <div class="field">
        <label class="label">NRP</label>
        <div class="control">
          <input
            class="input"
            type="text"
            bind:value={student.nrp}
            placeholder="NRP" />
        </div>
      </div>
      <div class="field">
        <label class="label">Major</label>
        <div class="control">
          <div class="select">
            <select bind:value={student.major}>
              {#each $majorsList as major}
                {#if (major.name === student.major)}
                  <option selected>{major.name}</option>
                {:else}
                  <option>{major.name}</option>
                {/if}
              {/each}
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label">Address</label>
        <div class="control">
          <input
            class="input"
            type="text"
            bind:value={student.address}
            placeholder="Address" />
        </div>
      </div>
      <button class="button is-link my-4" on:click={submitStudent}>
        Submit Student
      </button>
    </div>
  </div>
</section>
