define(['pipAPI'], function(APIConstructor) {
   var API = new APIConstructor();

   // Function to shuffle the array
   function shuffleArray(array) {
       for (var i = array.length - 1; i > 0; i--) {
           var j = Math.floor(Math.random() * (i + 1));
           [array[i], array[j]] = [array[j], array[i]]; // Swap elements
       }
   }

   // List of all the images
   var allImages = [
       {image: 'https://raw.githubusercontent.com/samimyag/chinesepictographsnegative/main/Crushed.jpg', label: 'Crushed'},
       {image: 'https://raw.githubusercontent.com/samimyag/chinesepictographsnegative/main/Hate.jpg', label: 'Hate'},
       {image: 'https://raw.githubusercontent.com/samimyag/chinesepictographsnegative/main/Poison.jpg', label: 'Poison'},
       {image: 'https://raw.githubusercontent.com/samimyag/chinesepictographsnegative/main/Pus.jpg', label: 'Pus'},
       {image: 'https://raw.githubusercontent.com/samimyag/chinesepictographsnegative/main/Rotten.jpg', label: 'Rotten'},
       {image: 'https://raw.githubusercontent.com/samimyag/chinesepictographsnegative/main/Scalding.jpg', label: 'Scalding'},
       {image: 'https://raw.githubusercontent.com/samimyag/chinesepictographsnegative/main/Stink.jpg', label: 'Stink'},
       {image: 'https://raw.githubusercontent.com/samimyag/chinesepictographsnegative/main/Thief.jpg', label: 'Thief'},
       {image: 'https://raw.githubusercontent.com/samimyag/chinesepictographsnegative/main/Tomb.jpg', label: 'Tomb'},
       {image: 'https://raw.githubusercontent.com/samimyag/chinesepictographsnegative/main/Tumor.jpg', label: 'Tumor'}
   ];

   // Shuffle the array to randomize the order
   shuffleArray(allImages);

   // Select the first 6 images after shuffling
   var selectedImages = allImages.slice(0, 6);

   return {
     primeCats: selectedImages
   };
 });
