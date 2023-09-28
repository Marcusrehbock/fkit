<script>
    import { onMount } from 'svelte';
    import { collection, getDocs, query, orderBy } from 'firebase/firestore';
    import { db } from '$lib/firebase';
    import { authStore} from '$lib/stores/auth';

  
    let userId = $authStore.uid;
    export let streak = 0;
  
    onMount(async () => {
      const meditationsCollection = collection(db, 'Users', userId, 'Meditations');
      const q = query(meditationsCollection, orderBy('timestamp', 'desc'));
      const meditationsSnapshot = await getDocs(q);
  
      let prevDate = null;
      meditationsSnapshot.forEach(doc => {
        const timestamp = doc.data().timestamp;
        const date = new Date(timestamp * 1000);
        const currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  
        if (prevDate) {
          const diff = (prevDate - currentDate) / (1000 * 60 * 60 * 24);
          if (diff === 1) {
            streak++;
          } else if (diff > 1) {
            return;
          }
        }
        prevDate = currentDate;
      });
    });
  </script>
  
  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
    <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
        <path d="M3 18v-6a9 9 0 0118 0v6"></path>
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
      </svg>
      <h2 class="title-font font-medium text-3xl text-gray-900">{streak} days</h2>
      <p class="leading-relaxed">Current Streak</p>
    </div>
  </div>