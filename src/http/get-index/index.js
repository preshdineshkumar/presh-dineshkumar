const Main = require('@architect/views/main.js')
const staticAssetsHelper = require('./static-assets-helper')

// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: 'Presh Dineshkumar', // ←  Start by adding your name!
    title: 'Presh Dineshkumar!',
    occupation: 'Artist & Photographer',
    location: 'West Glacier, MT',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',

    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    email: 'presh@launch.com',
    twitter: '@preshdkumar',
    linkedin: 'presh-dineshkumar-33202b115',
    instagram: 'preshdineshkumar',

    /**
     * Layout
     */
    photographer: 'Ivana Cajina',
    service: 'Unsplash',
    credit: 'https://unsplash.com/@von_co',
    image: staticAssetsHelper('background.jpg')
    // or link to an external image URL such as ↓
    // image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6'
  })

  return {
    headers: {'content-type': 'text/html; charset=utf8'},
    body
  }
}
