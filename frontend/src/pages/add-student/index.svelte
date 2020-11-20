<script lang="ts">
  import "./index.scss";
  import { Navbar, FormStudent, ModalSuccess, ModalFailed } from "../../containers";
  import type { Student } from "../../types/student.type";
  import { majorsList } from "../../stores";

  let student: Student = {
    _id: "",
    name: "",
    nrp: "",
    major: "",
    address: "",
  };

  const getmajors = (async () => {
    const response = await fetch('http://localhost:4000/majors/', {
      method: "GET"
    });
    let responseJson = await response.json();
    $majorsList = await responseJson;
  })();
</script>

<Navbar />
<p class="my-6 has-text-weight-bold is-uppercase is-size-4 has-text-centered">
  Add New Student
</p>
<FormStudent {student} updateStatus={false} />
<ModalSuccess link="/" />
<ModalFailed />
