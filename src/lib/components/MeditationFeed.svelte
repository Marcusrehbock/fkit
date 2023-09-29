<script>
  import { onMount } from 'svelte';
  import { db } from '$lib/firebase';
  import { doc, collection, query, orderBy, onSnapshot } from 'firebase/firestore';
  import { authStore } from '$lib/stores/auth';

  let meditations = [];

  function formatDate(timestamp) {
    let date = new Date(timestamp);
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear().toString().substr(-2);
    return `${day}/${month}/${year}`;
  }

  function formatMeditation(meditation) {
    const mins = Math.floor(meditation/ 60);
    return `${mins} mins`;
  
  }

  onMount(() => {
    const userDoc = doc(db, 'Users', $authStore.uid);
    const meditationsCollection = collection(userDoc, 'Meditations');
    const q = query(meditationsCollection, orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      meditations = querySnapshot.docs.map(doc => doc.data());
    });



    return () => unsubscribe(); // Cleanup
  });
</script>

<div>
  {#each meditations as meditation}
  <div class="flex justify-center items-center">
    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
      <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <h2 class="title-font font-medium text-3xl text-gray-900">
          {formatDate(meditation.timestamp)}
        </h2>
        <p class="leading-relaxed">{formatMeditation(meditation.duration)}</p>
      </div>
    </div>
    
  </div>
  {/each}
</div>

