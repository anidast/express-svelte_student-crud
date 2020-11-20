<script lang="ts">

    import { modalFailedStatus,  modalText } from "../../stores";

    function closeFailedModal() {
        $modalFailedStatus = false;
    }

</script>

<div class="modal" class:is-active={$modalFailedStatus}>
  <div class="modal-background" on:click={closeFailedModal}></div>
  <div class="modal-content">
    <div class="notification is-danger">
      <button class="delete" on:click={closeFailedModal}></button>
      <p class="is-size-3 has-text-weight-bold has-text-centered">
        {$modalText}
      </p>
    </div>
  </div>
</div>