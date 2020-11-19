import { Writable, writable } from 'svelte/store';

let studentsList = writable([]);
let majorsList = writable([]);

export {studentsList, majorsList};