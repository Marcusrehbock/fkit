<script>
    import { onMount } from "svelte";
    import { flip } from "svelte/animate";
    
    let words = ["Focus", "Find your Tribe!", "Keep Them Accountable"];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;
    let displayText = "";
  
    function type() {
      currentWord = words[i];
      let speed = isDeleting ? 200 : 150;  // Slower deleting, faster typing
  
      if (isDeleting) {
        displayText = currentWord.substring(0, j-1);
        j--;
        if (j === 0) {
          isDeleting = false;
          i++;
          if (i === words.length) {
            i = 0;
          }
        }
      } else {
        displayText = currentWord.substring(0, j+1);
        j++;
        if (j === currentWord.length) {
          isDeleting = true;
        }
      }
      setTimeout(type, speed);
    }
  
    onMount(() => {
      type();
    });
  </script>
  
  <style>
    h1 {
      transition: all 0.3s ease;
    }
  </style>
  
  <div class="w-full h-full flex justify-center items-center animate:flip">
    <h1 class="text-4xl font-bold">{displayText}</h1>
  </div>
  
  