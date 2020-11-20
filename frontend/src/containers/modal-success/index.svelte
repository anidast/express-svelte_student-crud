<script lang="ts">
    import { modalSuccessStatus,  modalText } from "../../stores";

    export let link: string;

    function closeSuccessModal() {
        $modalSuccessStatus = false;
        window.location.href = link;
    }

</script>

<div class="modal" class:is-active={$modalSuccessStatus}>
    <div class="modal-background" on:click={closeSuccessModal}></div>
    <div class="modal-content">
      <div class="notification is-info">
        <button class="delete" on:click={closeSuccessModal}></button>
        <p class="is-size-3 has-text-weight-bold has-text-centered">
          {$modalText}
        </p>
      </div>
    </div>
  </div>