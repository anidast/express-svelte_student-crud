<script lang="ts">
	import './style.scss';
	import { Router, Route } from "svelte-routing";
	import { ListStudents, ListMajors, AddStudent, AddMajor, EditStudent, EditMajor } from "./pages";

	export let url: string = "";
</script>

<main>
	<Router {url}>
		<Route path="/" component={ListStudents} />
		<Route path="add-student" component={AddStudent} />
		<Route path="edit-student/:id" component={EditStudent} />
		<Route path="majors" component={ListMajors} />
		<Route path="add-major" component={AddMajor} />
		<Route path="edit-major/:id" component={EditMajor} />
	  </Router>
</main>