/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    /* Vil du overskrive eller extende tailwinds indstillinger?  */

	theme: {

       
         
      
          extend: {

             /* Tilføj din egen farvepalette nedenfor */
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          

         
              
          

          'violet': '#C8AAFF  ',
          'twilight':'#6E56E7     ',
          'obsidian': '#161719',
          'mist': '#DBD7E9 ',
      },

         spacing: {
            'padding-xxs': '10px',
            'padding-xs': '15px',
            'padding-s': '24px',
            'padding-m': '34px',
            'padding-ml': '40px',
            'padding-l': '90px',
            'padding-xl': '128px',
            
            'radius-s':'10px',
            'radius-full':'999px',
            
            'stroke-xs':'1px',
            'stroke-s':'1.5px',

            
    
      
            
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
                'grid-mobil': 'repeat(4, 1fr)',
                'grid-desktop': 'repeat(12, 1fr)',
        
              },


              margin:{
                'margin-mobil': '40px',
                'margin-desktop': '60px',
            },
            
            gap:{
                'gap-mobil': '10px',
                'gap-desktop': '20px',
            },
              
              // Headings desktop
              fontSize: {
              'h1-d': ['128px', { lineHeight: 'auto', }],
              'h2-d': ['60px', { lineHeight: 'auto',}],             
              'h3-d': ['36px', { lineHeight: 'auto',}],

              // Headings mobile
              'h1-m': ['60px', { lineHeight: 'auto' }],
              'h2-m': ['40px', { lineHeight: 'auto',  }],
              'h3-m': ['30px', { lineHeight: 'auto',  }],
             
      
              // Body desktop
              'button-d': ['36px', { lineHeight: 'auto',  }],
              'p-l-d': ['36px', { lineHeight: 'auto',  }],
              'p-m-d': ['22px', { lineHeight: 'auto',  }],
              'p-s-d': ['15px', { lineHeight: 'auto',  }],
             

               // Body mobile
               'button-m': ['20px', { lineHeight: 'auto',  }],
               'p-l-m': ['24px', { lineHeight: 'auto',  }],
               'p-m-m': ['16px', { lineHeight: 'auto',  }],
               'p-s-m': ['12px', { lineHeight: 'auto',  }],
                
                // Link
                'link-m': ['36px', { lineHeight: 'auto',  }],
                'link-s': ['20px', { lineHeight: 'auto',  }],

                
    
            },

            fontFamily:{
              'header':['"Shrikhand"', 'sans-serif'],
              'p-light-italic':["Sansation Light Italic",'sans-serif'],
              'p-light':['"Sansation Light"','sans-serif'],
              'p-regular':['"Sansation Regular"','sans-serif'],
              'p-italic':['"Sansation Italic"','sans-serif'],
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