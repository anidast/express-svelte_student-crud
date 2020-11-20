import { Writable, writable } from 'svelte/store';

let studentsList = writable([]);
let majorsList = writable([]);

let modalSuccessStatus = writable(false);
let modalFailedStatus = writable(false);
let modalText = writable("");

export {studentsList, majorsList, modalSuccessStatus, modalFailedStatus, modalText};