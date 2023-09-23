// $lib/stores/auth.ts
import { getAuth } from "firebase/auth";
import { writable } from "svelte/store";

const auth = getAuth();
const authStore = writable(auth);

export { authStore };