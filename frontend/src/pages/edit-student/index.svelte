<script lang="ts">
  import "./index.scss";
  import { Navbar, FormStudent } from "../../containers";
  import type { Student } from "../../types/student.type";
  import { studentsList } from "../../stores";

  export let id: String;

  let student: Student;

  student = $studentsList.find(s => s._id == id);
  
</script>

<Navbar />
<p class="my-6 has-text-weight-bold is-uppercase is-size-4 has-text-centered">
  Edit Student
</p>
<FormStudent {student} updateStatus={true} />
