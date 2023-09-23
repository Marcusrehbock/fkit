import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { vercel } from '@sveltejs/adapter-vercel';

export default {
  kit: {
    adapter: vercel({   
      // see the 'Deployment configuration' section below
    
    })
  },
  preprocess: vitePreprocess()
  
};

