import { writable } from 'svelte/store';
import { auth } from '$lib/firebase';


// Initialize the Svelte store with null
const authStore = writable(null);

// Listen for authentication state changes
auth.onAuthStateChanged((user) => {
if (user) {
    // User is signed in
    authStore.set(user);
} else {
    // User is signed out
    authStore.set(null);
}
});

export { authStore };

