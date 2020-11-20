<script lang="ts">
    import "./index.scss";
    import { Navbar, FormMajor, ModalSuccess, ModalFailed } from "../../containers";
    import type { Major } from '../../types/major.type';

    let major: Major = {
        _id: "",
        name: ""
    };
  </script>
  
  <Navbar />
  <p class="my-6 has-text-weight-bold is-uppercase is-size-4 has-text-centered">Add New Major</p>
  <FormMajor major={major} updateStatus={false}/>
  <ModalSuccess link="/majors"/>
  <ModalFailed />