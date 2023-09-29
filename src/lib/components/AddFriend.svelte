<script>
  import { onMount } from "svelte";
  import { collection, doc, setDoc, getDoc, deleteDoc, getFirestore } from "firebase/firestore"; 
  import { authStore} from "$lib/stores/auth"

  let friendUsername = "";
  let message = "";

  const db = getFirestore();
  const currentUserID = $authStore.uid; // Replace with the actual ID

  async function addFriend() {
    // Validation: Check if adding self
    if (friendUsername === "currentUserUsername") { // Replace with the actual username
      message = "You cannot add yourself.";
      return;
    }

    // Search for the friend's username in the Users collection
    const userQuery = collection(db, "Users");
    const userSnapshot = await getDoc(userQuery);
    const friendData = userSnapshot.docs.find(doc => doc.data().username === friendUsername);

    if (friendData) {
      const friendID = friendData.id;

      // Validation: Check if friend is already in the list
      const friendRef = doc(db, `Users/${currentUserID}/Friends/${friendID}`);
      const friendSnapshot = await getDoc(friendRef);
      if (friendSnapshot.exists()) {
        console.log("Friend is already in the list.");
        return;
      }

      // Add the friend
      await setDoc(friendRef, {});
      message = "Friend added successfully.";
    } else {
      message = "Username not found.";
    }
  }

  async function removeFriend() {
    // Search for the friend's username in the Users collection
    const userQuery = collection(db, "Users");
    const userSnapshot = await getDoc(userQuery);
    const friendData = userSnapshot.docs.find(doc => doc.data().username === friendUsername);

    if (friendData) {
      const friendID = friendData.id;
      const friendRef = doc(db, `Users/${currentUserID}/Friends/${friendID}`);
      await deleteDoc(friendRef);
      message = "Friend removed successfully.";
    } else {
      message = "Username not found.";
    }
  }
</script>

<div>
  <input type="text" bind:value={friendUsername} placeholder="Friend's Username" />
  <button on:click={addFriend}>Add Friend</button>
  <button on:click={removeFriend}>Remove Friend</button>
  <p>{message}</p>
</div>
