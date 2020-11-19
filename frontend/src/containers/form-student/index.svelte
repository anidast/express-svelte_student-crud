<script lang="ts">
  import "./index.scss";
  import type { Student } from "../../types/student.type";
  import type { Major } from "../../types/major.type";
  import { majorsList } from "../../stores";
  import axios from "axios";

  export let student: Student;
  export let updateStatus: boolean;

  $: modalSuccessStatus = false;
  $: modalFailedStatus = false;
  let modalText: string = "";

  function closeSuccessModal() {
    modalSuccessStatus = false;
    window.location.href = "/";
  }

  function closeFailedModal() {
    modalFailedStatus = false;
  }

  function submitStudent() {
    console.log(student);
    if (updateStatus === false) {
      axios
        .post("http://localhost:4000/students/add", student)
        .then((response) => {
          console.log(response.data);
          modalText = response.data;
          modalSuccessStatus = true;
          // window.location.href = "/";
        })
        .catch((error) => {
          console.log(error);
          modalText = error;
          modalFailedStatus = true;
        });
    }
    else{
        axios
        .post("http://localhost:4000/students/update/" + student._id, student)
        .then((response) => {
          console.log(response.data);
          window.location.href = "/";
        })
        .catch((error) => {
          console.log(error);
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
  <div class="modal" class:is-active={modalSuccessStatus}>
    <div class="modal-background" on:click={closeSuccessModal}></div>
    <div class="modal-content">
      <div class="notification is-info">
        <button class="delete" on:click={closeSuccessModal}></button>
        <p class="is-size-3 has-text-weight-bold has-text-centered">
          {modalText}
        </p>
      </div>
    </div>
  </div>
  <div class="modal" class:is-active={modalFailedStatus}>
    <div class="modal-background" on:click={closeFailedModal}></div>
    <div class="modal-content">
      <div class="notification is-danger">
        <button class="delete" on:click={closeFailedModal}></button>
        <p class="is-size-3 has-text-weight-bold has-text-centered">
          {modalText}
        </p>
      </div>
    </div>
  </div>
</section>
