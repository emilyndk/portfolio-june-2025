/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    /* Vil du overskrive eller extende tailwinds indstillinger?  */

	theme: {

       

         
      
          extend: {
            colors: {
        transparent: "transparent",
        current: "currentColor",

        sand: {
         
          500: "#efeae3",
          300: "#EFEAE34D",
          
        },

        magic: {
          500: "#B44E9E",
          300: "#B44E9E4D",
        },

        obsidian: {
          500: "#1E1E1E",
        },
      },

             /* Tilføj din egen farvepalette nedenfor */
        
         spacing: {
            'spacebar-dl': '200px',
            'spacebar-dm': '136px',
            'spacebar-ds': '32px',

            'spacebar-ml': '80px',
            'spacebar-mm': '70px',
            'spacebar-ms': '16px',
            
          },

         
      
          fontSize: {
            base: ['1rem', { lineHeight: '1.5rem' }],
            large: ['2.5rem', { lineHeight: '3.75rem' }],
          },
          borderWidth: {
            DEFAULT: '1px',
            's': '1.5px', // Custom border width
            // Custom mobile border width
          },
            

               gridTemplateColumns: {
        "grid-mobil": "repeat(12, 1fr)",
        "grid-tablet": "repeat (12, 1fr)",
        "grid-desktop": "repeat(12, 1fr)",
      },

      margin: {
        "margin-mobil": "16px",
        "margin-tablet": "32px",
        "margin-desktop": "64px",
      },

      gap: {
        "gap-mobil": "4px",
        "gap-tablet": "6px",
        "gap-desktop": "8px",
      },
              
              // Headings desktop
              fontSize: {
              'h1-d': ['120px', { lineHeight: 'auto', }],
              'h2-d': ['96px', { lineHeight: 'auto',}],             
               'h3-d': ['10px', { lineHeight: 'auto',  }],
              // Headings mobile
              'h1-m': ['44px', { lineHeight: '50px' }],
              'h2-m': ['56px', { lineHeight: 'auto',  }],
              'h3-m': ['30px', { lineHeight: 'auto',  }],
             
      
              // Body desktop
              'p-l-d': ['32px', { lineHeight: 'auto',  }],
              'p-d': ['24px', { lineHeight: 'auto',  }],
              'p-s-d': ['20px', { lineHeight: 'auto',  }],
                'display-d': ['64px', { lineHeight: 'auto',  }],
             

               // Body mobile
              
               'p-l-m': ['30px', { lineHeight: 'auto',  }],
               'p-m': ['13px', { lineHeight: 'auto',  }],
               'p-s-m': ['10px', { lineHeight: 'auto',  }],
               'display-m': ['24px', { lineHeight: 'auto',  }],
                
              
                
    
            },

            fontFamily:{
              'heading':['"Tilt Warp"', 'sans-serif'],
              'body':["Poppins",'sans-serif'],
              
            }
            

            
    
    
    
             
          },
        },
      
        plugins: [
          require('@tailwindcss/typography'),
          require('@tailwindcss/forms'),
          require('@tailwindcss/aspect-ratio'),
          require('@tailwindcss/container-queries'),
          
        ],
      };