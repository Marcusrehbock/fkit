import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

export default {
  kit: {
    adapter: adapter({   
      // see the 'Deployment configuration' section below
    })
  },
  preprocess: vitePreprocess()
  
};

