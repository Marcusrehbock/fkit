<script>
  import { onMount, onDestroy } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { linear as easing } from 'svelte/easing';

  let time = 0;
  let interval;
  let duration = 60; // Default duration in seconds
  let audioStart, audioEnd;
  let isRunning = false;
  let offset = tweened(1, { duration: 1000, easing });

  onMount(() => {
    audioStart = new Audio('/path/to/start-sound.mp3');
    audioEnd = new Audio('/path/to/end-sound.mp3');
  });

  function toggleTimer() {
    isRunning = !isRunning;
    if (isRunning) {
      audioStart.play();
      time = duration;
      offset.set(1);
      interval = setInterval(() => {
        time--;
        offset.set(time / duration);
        if (time <= 0) {
          audioEnd.play();
          clearInterval(interval);
          isRunning = false;
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
  }

  function updateDisplay() {
    if (!isRunning) {
      time = duration;
    }
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<!-- Timer UI -->
<div class="timer-container">
  <div class="timer-inner">
    <svg viewBox="-50 -50 100 100" width="250" height="250">
      <g fill="none" stroke="currentColor" stroke-width="2">
        <circle stroke="currentColor" r="46" />
        <path
          stroke="hsl(208, 100%, 50%)"
          d="M 0 -46 a 46 46 0 0 0 0 92 46 46 0 0 0 0 -92"
          pathLength="1"
          stroke-dasharray="1"
          stroke-dashoffset={$offset}
        />
      </g>
    </svg>
    <div class="timer-display-container">
      <p class="timer-display">{formatTime(time)}</p>
    </div>
  </div>
  <div class="timer-buttons">
    <button class="btn {isRunning ? 'btn-secondary' : 'btn-primary'}" on:click={toggleTimer}>{isRunning ? 'Pause' : 'Start'}</button>
  </div>
  <div class="timer-settings">
    <label for="duration">Duration (seconds): </label>
    <input id="duration" type="range" min="10" max="600" step="10" bind:value={duration} on:input={updateDisplay} />
  </div>
</div>

<!-- Flowbite Styling -->
<style>
  .timer-container {
    text-align: center;
    margin-top: 50px;
  }
  .timer-inner {
    position: relative;
  }
  .timer-display-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  .timer-display {
    font-size: 48px;
  }
  .timer-buttons button {
    margin: 0 10px;
  }
  .timer-settings {
    margin-top: 20px;
  }
</style>