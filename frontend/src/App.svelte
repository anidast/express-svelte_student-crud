<script lang="ts">
	import './style.scss';
	import { Router, Route } from "svelte-routing";
	import { ListStudents, ListMajors } from "./pages";

	export let url: string = "";
</script>

<main>
	<Router {url}>
		<Route path="/" component={ListStudents} />
		<Route path="majors" component={ListMajors} />
	  </Router>
</main>