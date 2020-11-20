<script lang="ts">
    import './index.scss';
    import type { Major } from '../../types/major.type';
    import { modalSuccessStatus, modalFailedStatus, modalText } from "../../stores";
    import axios from 'axios';

    export let major: Major;
    export let updateStatus: boolean;

    function addMajor(){
        if (updateStatus === false){
            axios.post('http://localhost:4000/majors/add', major)
            .then(response => {
                console.log(response.data);
                $modalText = response.data;
                $modalSuccessStatus = true;
            })
            .catch((error) => {
                console.log(error);
                $modalText = error;
                $modalFailedStatus = true;
            })
        }
        else{
            axios.post('http://localhost:4000/majors/update/' + major._id, major)
            .then(response => {
                console.log(response.data);
                $modalText = response.data;
                $modalSuccessStatus = true;
            })
            .catch((error) => {
                console.log(error);
                $modalText = error;
                $modalFailedStatus = true;
            })
        }
    }
</script>

<section >
    <div class="columns is-centered">
        <div class="column is-6">
            <div class="field">
                <label class="label">Major Name</label>
                <div class="control">
                  <input class="input" type="text" bind:value={major.name} placeholder="Name">
                </div>
            </div>
            <button class="button is-link my-4" on:click={addMajor}> Submit Major </button>
        </div>
    </div>
</section>